(()=>{"use strict";
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
***************************************************************************** */
var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};function e(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}function n(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{l(r.next(t))}catch(t){i(t)}}function u(t){try{l(r.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,u)}l((r=r.apply(t,e||[])).next())}))}function r(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}Object.create;function o(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function i(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}function s(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}function u(t){return this instanceof u?(this.v=t,this):new u(t)}function l(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),i=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(t){o[t]&&(r[t]=function(e){return new Promise((function(n,r){i.push([t,e,n,r])>1||l(t,e)}))})}function l(t,e){try{(n=o[t](e)).value instanceof u?Promise.resolve(n.value.v).then(a,c):f(i[0][2],n)}catch(t){f(i[0][3],t)}var n}function a(t){l("next",t)}function c(t){l("throw",t)}function f(t,e){t(e),i.shift(),i.length&&l(i[0][0],i[0][1])}}function a(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=o(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise((function(r,o){(function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)})(r,o,(e=t[n](e)).done,e.value)}))}}}Object.create;function c(t){return"function"==typeof t}function f(t){var e=t((function(t){Error.call(t),t.stack=(new Error).stack}));return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var h=f((function(t){return function(e){t(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e}}));function d(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var p=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._teardowns=null}return t.prototype.unsubscribe=function(){var t,e,n,r,u;if(!this.closed){this.closed=!0;var l=this._parentage;if(l)if(this._parentage=null,Array.isArray(l))try{for(var a=o(l),f=a.next();!f.done;f=a.next()){f.value.remove(this)}}catch(e){t={error:e}}finally{try{f&&!f.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}else l.remove(this);var d=this.initialTeardown;if(c(d))try{d()}catch(t){u=t instanceof h?t.errors:[t]}var p=this._teardowns;if(p){this._teardowns=null;try{for(var y=o(p),g=y.next();!g.done;g=y.next()){var D=g.value;try{m(D)}catch(t){u=null!=u?u:[],t instanceof h?u=s(s([],i(u)),i(t.errors)):u.push(t)}}}catch(t){n={error:t}}finally{try{g&&!g.done&&(r=y.return)&&r.call(y)}finally{if(n)throw n.error}}}if(u)throw new h(u)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)m(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._teardowns=null!==(n=this._teardowns)&&void 0!==n?n:[]).push(e)}},t.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},t.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},t.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&d(e,t)},t.prototype.remove=function(e){var n=this._teardowns;n&&d(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),y=p.EMPTY;function g(t){return t instanceof p||t&&"closed"in t&&c(t.remove)&&c(t.add)&&c(t.unsubscribe)}function m(t){c(t)?t():t.unsubscribe()}var D={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},_={setTimeout:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=_.delegate;return((null==n?void 0:n.setTimeout)||setTimeout).apply(void 0,s([],i(t)))},clearTimeout:function(t){var e=_.delegate;return((null==e?void 0:e.clearTimeout)||clearTimeout)(t)},delegate:void 0};function v(t){_.setTimeout((function(){var e=D.onUnhandledError;if(!e)throw t;e(t)}))}function w(){}var C=b("C",void 0,void 0);function b(t,e,n){return{kind:t,value:e,error:n}}var E=null;function F(t){if(D.useDeprecatedSynchronousErrorHandling){var e=!E;if(e&&(E={errorThrown:!1,error:null}),t(),e){var n=E,r=n.errorThrown,o=n.error;if(E=null,r)throw o}}else t()}function A(t){D.useDeprecatedSynchronousErrorHandling&&E&&(E.errorThrown=!0,E.error=t)}var x=function(t){function n(e){var n=t.call(this)||this;return n.isStopped=!1,e?(n.destination=e,g(e)&&e.add(n)):n.destination=O,n}return e(n,t),n.create=function(t,e,n){return new S(t,e,n)},n.prototype.next=function(t){this.isStopped?T(function(t){return b("N",t,void 0)}(t),this):this._next(t)},n.prototype.error=function(t){this.isStopped?T(b("E",void 0,t),this):(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped?T(C,this):(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(p),S=function(t){function n(e,n,r){var o,i=t.call(this)||this;if(c(e))o=e;else if(e){var s;o=e.next,n=e.error,r=e.complete,i&&D.useDeprecatedNextContext?(s=Object.create(e)).unsubscribe=function(){return i.unsubscribe()}:s=e,o=null==o?void 0:o.bind(s),n=null==n?void 0:n.bind(s),r=null==r?void 0:r.bind(s)}return i.destination={next:o?k(o,i):w,error:k(null!=n?n:I,i),complete:r?k(r,i):w},i}return e(n,t),n}(x);function k(t,e){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{t.apply(void 0,s([],i(e)))}catch(t){D.useDeprecatedSynchronousErrorHandling?A(t):v(t)}}}function I(t){throw t}function T(t,e){var n=D.onStoppedNotification;n&&_.setTimeout((function(){return n(t,e)}))}var O={closed:!0,next:w,error:I,complete:w},M="function"==typeof Symbol&&Symbol.observable||"@@observable";function P(t){return t}function B(t){return 0===t.length?P:1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}}var N=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(t,e,n){var r,o=this,i=(r=t)&&r instanceof x||function(t){return t&&c(t.next)&&c(t.error)&&c(t.complete)}(r)&&g(r)?t:new S(t,e,n);return F((function(){var t=o,e=t.operator,n=t.source;i.add(e?e.call(i,n):n?o._subscribe(i):o._trySubscribe(i))})),i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},t.prototype.forEach=function(t,e){var n=this;return new(e=R(e))((function(e,r){var o=new S({next:function(e){try{t(e)}catch(t){r(t),o.unsubscribe()}},error:r,complete:e});n.subscribe(o)}))},t.prototype._subscribe=function(t){var e;return null===(e=this.source)||void 0===e?void 0:e.subscribe(t)},t.prototype[M]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return B(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=R(t))((function(t,n){var r;e.subscribe((function(t){return r=t}),(function(t){return n(t)}),(function(){return t(r)}))}))},t.create=function(e){return new t(e)},t}();function R(t){var e;return null!==(e=null!=t?t:D.Promise)&&void 0!==e?e:Promise}var j=f((function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),L=function(t){function n(){var e=t.call(this)||this;return e.closed=!1,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return e(n,t),n.prototype.lift=function(t){var e=new V(this,this);return e.operator=t,e},n.prototype._throwIfClosed=function(){if(this.closed)throw new j},n.prototype.next=function(t){var e=this;F((function(){var n,r;if(e._throwIfClosed(),!e.isStopped){var i=e.observers.slice();try{for(var s=o(i),u=s.next();!u.done;u=s.next()){u.value.next(t)}}catch(t){n={error:t}}finally{try{u&&!u.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}}}))},n.prototype.error=function(t){var e=this;F((function(){if(e._throwIfClosed(),!e.isStopped){e.hasError=e.isStopped=!0,e.thrownError=t;for(var n=e.observers;n.length;)n.shift().error(t)}}))},n.prototype.complete=function(){var t=this;F((function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var e=t.observers;e.length;)e.shift().complete()}}))},n.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=null},Object.defineProperty(n.prototype,"observed",{get:function(){var t;return(null===(t=this.observers)||void 0===t?void 0:t.length)>0},enumerable:!1,configurable:!0}),n.prototype._trySubscribe=function(e){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,e)},n.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},n.prototype._innerSubscribe=function(t){var e=this,n=e.hasError,r=e.isStopped,o=e.observers;return n||r?y:(o.push(t),new p((function(){return d(o,t)})))},n.prototype._checkFinalizedStatuses=function(t){var e=this,n=e.hasError,r=e.thrownError,o=e.isStopped;n?t.error(r):o&&t.complete()},n.prototype.asObservable=function(){var t=new N;return t.source=this,t},n.create=function(t,e){return new V(t,e)},n}(N),V=function(t){function n(e,n){var r=t.call(this)||this;return r.destination=e,r.source=n,r}return e(n,t),n.prototype.next=function(t){var e,n;null===(n=null===(e=this.destination)||void 0===e?void 0:e.next)||void 0===n||n.call(e,t)},n.prototype.error=function(t){var e,n;null===(n=null===(e=this.destination)||void 0===e?void 0:e.error)||void 0===n||n.call(e,t)},n.prototype.complete=function(){var t,e;null===(e=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===e||e.call(t)},n.prototype._subscribe=function(t){var e,n;return null!==(n=null===(e=this.source)||void 0===e?void 0:e.subscribe(t))&&void 0!==n?n:y},n}(L);function H(t){return function(e){if(function(t){return c(null==t?void 0:t.lift)}(e))return e.lift((function(e){try{return t(e,this)}catch(t){this.error(t)}}));throw new TypeError("Unable to lift unknown Observable type")}}var $=function(t){function n(e,n,r,o,i){var s=t.call(this,e)||this;return s.onFinalize=i,s._next=n?function(t){try{n(t)}catch(t){e.error(t)}}:t.prototype._next,s._error=o?function(t){try{o(t)}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._error,s._complete=r?function(){try{r()}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,s}return e(n,t),n.prototype.unsubscribe=function(){var e,n=this.closed;t.prototype.unsubscribe.call(this),!n&&(null===(e=this.onFinalize)||void 0===e||e.call(this))},n}(x);var U=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function z(t){return c(null==t?void 0:t.then)}function Z(t){return c(t[M])}function G(t){return Symbol.asyncIterator&&c(null==t?void 0:t[Symbol.asyncIterator])}function W(t){return new TypeError("You provided "+(null!==t&&"object"==typeof t?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}var q="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function Y(t){return c(null==t?void 0:t[q])}function K(t){return l(this,arguments,(function(){var e,n,o;return r(this,(function(r){switch(r.label){case 0:e=t.getReader(),r.label=1;case 1:r.trys.push([1,,9,10]),r.label=2;case 2:return[4,u(e.read())];case 3:return n=r.sent(),o=n.value,n.done?[4,u(void 0)]:[3,5];case 4:return[2,r.sent()];case 5:return[4,u(o)];case 6:return[4,r.sent()];case 7:return r.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}}))}))}function Q(t){return c(null==t?void 0:t.getReader)}function J(t){if(t instanceof N)return t;if(null!=t){if(Z(t))return r=t,new N((function(t){var e=r[M]();if(c(e.subscribe))return e.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(U(t))return n=t,new N((function(t){for(var e=0;e<n.length&&!t.closed;e++)t.next(n[e]);t.complete()}));if(z(t))return function(t){return new N((function(e){t.then((function(t){e.closed||(e.next(t),e.complete())}),(function(t){return e.error(t)})).then(null,v)}))}(t);if(G(t))return X(t);if(Y(t))return e=t,new N((function(t){var n,r;try{for(var i=o(e),s=i.next();!s.done;s=i.next()){var u=s.value;if(t.next(u),t.closed)return}}catch(t){n={error:t}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}t.complete()}));if(Q(t))return X(K(t))}var e,n,r;throw W(t)}function X(t){return new N((function(e){(function(t,e){var o,i,s,u;return n(this,void 0,void 0,(function(){var n,l;return r(this,(function(r){switch(r.label){case 0:r.trys.push([0,5,6,11]),o=a(t),r.label=1;case 1:return[4,o.next()];case 2:if((i=r.sent()).done)return[3,4];if(n=i.value,e.next(n),e.closed)return[2];r.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return l=r.sent(),s={error:l},[3,11];case 6:return r.trys.push([6,,9,10]),i&&!i.done&&(u=o.return)?[4,u.call(o)]:[3,8];case 7:r.sent(),r.label=8;case 8:return[3,10];case 9:if(s)throw s.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}}))}))})(t,e).catch((function(t){return e.error(t)}))}))}function tt(t,e,n,r,o){void 0===r&&(r=0),void 0===o&&(o=!1);var i=e.schedule((function(){n(),o?t.add(this.schedule(null,r)):this.unsubscribe()}),r);if(t.add(i),!o)return i}function et(t,e,n){return void 0===n&&(n=1/0),c(e)?et((function(n,r){return function(t,e){return H((function(n,r){var o=0;n.subscribe(new $(r,(function(n){r.next(t.call(e,n,o++))})))}))}((function(t,o){return e(n,t,r,o)}))(J(t(n,r)))}),n):("number"==typeof e&&(n=e),H((function(e,r){return function(t,e,n,r,o,i,s,u){var l=[],a=0,c=0,f=!1,h=function(){!f||l.length||a||e.complete()},d=function(t){return a<r?p(t):l.push(t)},p=function(t){i&&e.next(t),a++;var u=!1;J(n(t,c++)).subscribe(new $(e,(function(t){null==o||o(t),i?d(t):e.next(t)}),(function(){u=!0}),void 0,(function(){if(u)try{a--;for(var t=function(){var t=l.shift();s?tt(e,s,(function(){return p(t)})):p(t)};l.length&&a<r;)t();h()}catch(t){e.error(t)}})))};return t.subscribe(new $(e,d,(function(){f=!0,h()}))),function(){null==u||u()}}(e,r,t,n)})))}function nt(t){return void 0===t&&(t=1/0),et(P,t)}var rt=new N((function(t){return t.complete()}));function ot(t){return t[t.length-1]}function it(t){return(e=ot(t))&&c(e.schedule)?t.pop():void 0;var e}function st(t,e){return"number"==typeof ot(t)?t.pop():e}function ut(t,e){return void 0===e&&(e=0),H((function(n,r){n.subscribe(new $(r,(function(n){return tt(r,t,(function(){return r.next(n)}),e)}),(function(){return tt(r,t,(function(){return r.complete()}),e)}),(function(n){return tt(r,t,(function(){return r.error(n)}),e)})))}))}function lt(t,e){return void 0===e&&(e=0),H((function(n,r){r.add(t.schedule((function(){return n.subscribe(r)}),e))}))}function at(t,e){if(!t)throw new Error("Iterable cannot be null");return new N((function(n){tt(n,e,(function(){var r=t[Symbol.asyncIterator]();tt(n,e,(function(){r.next().then((function(t){t.done?n.complete():n.next(t.value)}))}),0,!0)}))}))}function ct(t,e){if(null!=t){if(Z(t))return function(t,e){return J(t).pipe(lt(e),ut(e))}(t,e);if(U(t))return function(t,e){return new N((function(n){var r=0;return e.schedule((function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())}))}))}(t,e);if(z(t))return function(t,e){return J(t).pipe(lt(e),ut(e))}(t,e);if(G(t))return at(t,e);if(Y(t))return function(t,e){return new N((function(n){var r;return tt(n,e,(function(){r=t[q](),tt(n,e,(function(){var t,e,o;try{e=(t=r.next()).value,o=t.done}catch(t){return void n.error(t)}o?n.complete():n.next(e)}),0,!0)})),function(){return c(null==r?void 0:r.return)&&r.return()}}))}(t,e);if(Q(t))return function(t,e){return at(K(t),e)}(t,e)}throw W(t)}function ft(t,e){return e?ct(t,e):J(t)}function ht(t){return t<=0?function(){return rt}:H((function(e,n){var r=0;e.subscribe(new $(n,(function(e){++r<=t&&(n.next(e),t<=r&&n.complete())})))}))}function dt(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return!0===e?(t(),null):!1===e?null:e.apply(void 0,s([],i(n))).pipe(ht(1)).subscribe((function(){return t()}))}
/**
 * @license Angular v13.1.1
 * (c) 2010-2021 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function pt(t){for(let e in t)if(t[e]===pt)return e;throw Error("Could not find renamed property on target object.")}function yt(t,e){for(const n in e)e.hasOwnProperty(n)&&!t.hasOwnProperty(n)&&(t[n]=e[n])}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function gt(t){if("string"==typeof t)return t;if(Array.isArray(t))return"["+t.map(gt).join(", ")+"]";if(null==t)return""+t;if(t.overriddenName)return`${t.overriddenName}`;if(t.name)return`${t.name}`;const e=t.toString();if(null==e)return""+e;const n=e.indexOf("\n");return-1===n?e:e.substring(0,n)}function mt(t,e){return null==t||""===t?null===e?"":e:null==e||""===e?t:t+" "+e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Dt=pt({__forward_ref__:pt});function _t(t){return t.__forward_ref__=_t,t.toString=function(){return gt(this())},t}function vt(t){return wt(t)?t():t}function wt(t){return"function"==typeof t&&t.hasOwnProperty(Dt)&&t.__forward_ref__===_t}
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
class Ct extends Error{constructor(t,e){super(bt(t,e)),this.code=t}}new Set(["100","200","201","300","301","302"]);function bt(t,e){return`${t?`NG0${t}: `:""}${e}`}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Et(t){return"string"==typeof t?t:null==t?"":String(t)}function Ft(t){return"function"==typeof t?t.name||t.toString():"object"==typeof t&&null!=t&&"function"==typeof t.type?t.type.name||t.type.toString():Et(t)}function At(t,e){const n=e?` in ${e}`:"";throw new Ct("201",`No provider for ${Ft(t)} found${n}`)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function xt(t,e,n){t!=e&&kt(n,t,e,"==")}function St(t,e){null==t&&kt(e,t,null,"!=")}function kt(t,e,n,r){throw new Error(`ASSERTION ERROR: ${t}`+(null==r?"":` [Expected=> ${n} ${r} ${e} <=Actual]`))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function It(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function Tt(t){return{providers:t.providers||[],imports:t.imports||[]}}function Ot(t){return Mt(t,Bt)||Mt(t,Rt)}function Mt(t,e){return t.hasOwnProperty(e)?t[e]:null}function Pt(t){return t&&(t.hasOwnProperty(Nt)||t.hasOwnProperty(jt))?t[Nt]:null}const Bt=pt({ɵprov:pt}),Nt=pt({ɵinj:pt}),Rt=pt({ngInjectableDef:pt}),jt=pt({ngInjectorDef:pt});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Lt;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let Vt;function Ht(t){const e=Vt;return Vt=t,e}function $t(t,e,n){const r=Ot(t);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&Lt.Optional?null:void 0!==e?e:void At(gt(t),"Injector")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Ut(t){return{toString:t}.toString()}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var zt,Zt,Gt;!function(t){t[t.Default=0]="Default",t[t.Host=1]="Host",t[t.Self=2]="Self",t[t.SkipSelf=4]="SkipSelf",t[t.Optional=8]="Optional"}(Lt||(Lt={})),function(t){t[t.OnPush=0]="OnPush",t[t.Default=1]="Default"}(zt||(zt={})),function(t){t[t.CheckOnce=0]="CheckOnce",t[t.Checked=1]="Checked",t[t.CheckAlways=2]="CheckAlways",t[t.Detached=3]="Detached",t[t.Errored=4]="Errored",t[t.Destroyed=5]="Destroyed"}(Zt||(Zt={})),function(t){t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom"}(Gt||(Gt={}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Wt="undefined"!=typeof globalThis&&globalThis,qt="undefined"!=typeof window&&window,Yt="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,Kt="undefined"!=typeof global&&global,Qt=Wt||Kt||qt||Yt;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Jt={},Xt=[];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const te=pt({ɵcmp:pt}),ee=pt({ɵdir:pt}),ne=pt({ɵpipe:pt}),re=pt({ɵmod:pt}),oe=pt({ɵfac:pt}),ie=pt({__NG_ELEMENT_ID__:pt});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let se=0;function ue(t){return Ut((()=>{const e={},n={type:t.type,providersResolver:null,decls:t.decls,vars:t.vars,factory:null,template:t.template||null,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:e,inputs:null,outputs:null,exportAs:t.exportAs||null,onPush:t.changeDetection===zt.OnPush,directiveDefs:null,pipeDefs:null,selectors:t.selectors||Xt,viewQuery:t.viewQuery||null,features:t.features||null,data:t.data||{},encapsulation:t.encapsulation||Gt.Emulated,id:"c",styles:t.styles||Xt,_:null,setInput:null,schemas:t.schemas||null,tView:null},r=t.directives,o=t.features,i=t.pipes;return n.id+=se++,n.inputs=pe(t.inputs,e),n.outputs=pe(t.outputs),o&&o.forEach((t=>t(n))),n.directiveDefs=r?()=>("function"==typeof r?r():r).map(ae):null,n.pipeDefs=i?()=>("function"==typeof i?i():i).map(ce):null,n}))}function le(t,e,n){const r=t.ɵcmp;r.directiveDefs=()=>e.map(ae),r.pipeDefs=()=>n.map(ce)}function ae(t){return me(t)||De(t)}function ce(t){return _e(t)}const fe={};function he(t){return Ut((()=>{const e={type:t.type,bootstrap:t.bootstrap||Xt,declarations:t.declarations||Xt,imports:t.imports||Xt,exports:t.exports||Xt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null};return null!=t.id&&(fe[t.id]=t.type),e}))}function de(t,e){return Ut((()=>{const n=ve(t,!0);n.declarations=e.declarations||Xt,n.imports=e.imports||Xt,n.exports=e.exports||Xt}))}function pe(t,e){if(null==t)return Jt;const n={};for(const r in t)if(t.hasOwnProperty(r)){let o=t[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,e&&(e[o]=i)}return n}const ye=ue;function ge(t){return{type:t.type,name:t.name,factory:null,pure:!1!==t.pure,onDestroy:t.type.prototype.ngOnDestroy||null}}function me(t){return t[te]||null}function De(t){return t[ee]||null}function _e(t){return t[ne]||null}function ve(t,e){const n=t[re]||null;if(!n&&!0===e)throw new Error(`Type ${gt(t)} does not have 'ɵmod' property.`);return n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const we=16,Ce=20,be=10;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Ee(t){return Array.isArray(t)&&"object"==typeof t[1]}function Fe(t){return Array.isArray(t)&&!0===t[1]}function Ae(t){return 0!=(8&t.flags)}function xe(t){return 2==(2&t.flags)}function Se(t){return 1==(1&t.flags)}function ke(t){return null!==t.template}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Ie(t,e){const n=t.hasOwnProperty(oe);return n?t[oe]:null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Te{constructor(t,e,n){this.previousValue=t,this.currentValue=e,this.firstChange=n}isFirstChange(){return this.firstChange}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Oe(){return Me}function Me(t){return t.type.prototype.ngOnChanges&&(t.setInput=Be),Pe}function Pe(){const t=Ne(this),e=t?.current;if(e){const n=t.previous;if(n===Jt)t.previous=e;else for(let t in e)n[t]=e[t];t.current=null,this.ngOnChanges(e)}}function Be(t,e,n,r){const o=Ne(t)||function(t,e){return t.__ngSimpleChanges__=e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t,{previous:Jt,current:null}),i=o.current||(o.current={}),s=o.previous,u=this.declaredInputs[n],l=s[u];i[u]=new Te(l&&l.currentValue,e,s===Jt),t[r]=e}Oe.ngInherit=!0;function Ne(t){return t.__ngSimpleChanges__||null}let Re=null;const je=function(t,e,n){null!=Re&&Re(t,e,n)},Le="http://www.w3.org/2000/svg",Ve="http://www.w3.org/1998/MathML/";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let He;function $e(){return void 0!==He?He:"undefined"!=typeof document?document:void 0}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var Ue;function ze(t){return!!t.listen}!function(t){t[t.Important=1]="Important",t[t.DashCase=2]="DashCase"}(Ue||(Ue={}));const Ze={createRenderer:(t,e)=>$e()};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Ge(t){for(;Array.isArray(t);)t=t[0];return t}function We(t,e){return Ge(e[t])}function qe(t,e){return Ge(e[t.index])}function Ye(t,e){return t.data[e]}function Ke(t,e){return t[e]}function Qe(t,e){const n=e[t];return Ee(n)?n:n[0]}function Je(t){return 4==(4&t[2])}function Xe(t){return 128==(128&t[2])}function tn(t,e){return null==e?null:t[e]}function en(t){t[18]=0}function nn(t,e){t[5]+=e;let n=t,r=t[3];for(;null!==r&&(1===e&&1===n[5]||-1===e&&0===n[5]);)r[5]+=e,n=r,r=r[3]}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const rn={lFrame:Pn(null),bindingsEnabled:!0,isInCheckNoChangesMode:!1};function on(){return rn.bindingsEnabled}function sn(){rn.bindingsEnabled=!0}function un(){rn.bindingsEnabled=!1}function ln(){return rn.lFrame.lView}function an(){return rn.lFrame.tView}function cn(t){return rn.lFrame.contextLView=t,t[8]}function fn(){let t=hn();for(;null!==t&&64===t.type;)t=t.parent;return t}function hn(){return rn.lFrame.currentTNode}function dn(){const t=rn.lFrame,e=t.currentTNode;return t.isParent?e:e.parent}function pn(t,e){const n=rn.lFrame;n.currentTNode=t,n.isParent=e}function yn(){return rn.lFrame.isParent}function gn(){rn.lFrame.isParent=!1}function mn(){return rn.isInCheckNoChangesMode}function Dn(t){rn.isInCheckNoChangesMode=t}function _n(){const t=rn.lFrame;let e=t.bindingRootIndex;return-1===e&&(e=t.bindingRootIndex=t.tView.bindingStartIndex),e}function vn(){return rn.lFrame.bindingIndex}function wn(t){return rn.lFrame.bindingIndex=t}function Cn(){return rn.lFrame.bindingIndex++}function bn(t){const e=rn.lFrame,n=e.bindingIndex;return e.bindingIndex=e.bindingIndex+t,n}function En(t){rn.lFrame.inI18n=t}function Fn(t,e){const n=rn.lFrame;n.bindingIndex=n.bindingRootIndex=t,An(e)}function An(t){rn.lFrame.currentDirectiveIndex=t}function xn(t){const e=rn.lFrame.currentDirectiveIndex;return-1===e?null:t[e]}function Sn(){return rn.lFrame.currentQueryIndex}function kn(t){rn.lFrame.currentQueryIndex=t}function In(t){const e=t[1];return 2===e.type?e.declTNode:1===e.type?t[6]:null}function Tn(t,e,n){if(n&Lt.SkipSelf){let r=e,o=t;for(;!(r=r.parent,null!==r||n&Lt.Host||(r=In(o),null===r)||(o=o[15],10&r.type)););if(null===r)return!1;e=r,t=o}const r=rn.lFrame=Mn();return r.currentTNode=e,r.lView=t,!0}function On(t){const e=Mn();const n=t[1];rn.lFrame=e,e.currentTNode=n.firstChild,e.lView=t,e.tView=n,e.contextLView=t,e.bindingIndex=n.bindingStartIndex,e.inI18n=!1}function Mn(){const t=rn.lFrame,e=null===t?null:t.child;return null===e?Pn(t):e}function Pn(t){const e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return null!==t&&(t.child=e),e}function Bn(){const t=rn.lFrame;return rn.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}const Nn=Bn;function Rn(){const t=Bn();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function jn(t){return(rn.lFrame.contextLView=function(t,e){for(;t>0;)e=e[15],t--;return e}(t,rn.lFrame.contextLView))[8]}function Ln(){return rn.lFrame.selectedIndex}function Vn(t){rn.lFrame.selectedIndex=t}function Hn(){const t=rn.lFrame;return Ye(t.tView,t.selectedIndex)}function $n(){rn.lFrame.currentNamespace=Le}function Un(){rn.lFrame.currentNamespace=Ve}function zn(){rn.lFrame.currentNamespace=null}function Zn(t,e){for(let n=e.directiveStart,r=e.directiveEnd;n<r;n++){const e=t.data[n].type.prototype,{ngAfterContentInit:r,ngAfterContentChecked:o,ngAfterViewInit:i,ngAfterViewChecked:s,ngOnDestroy:u}=e;r&&(t.contentHooks||(t.contentHooks=[])).push(-n,r),o&&((t.contentHooks||(t.contentHooks=[])).push(n,o),(t.contentCheckHooks||(t.contentCheckHooks=[])).push(n,o)),i&&(t.viewHooks||(t.viewHooks=[])).push(-n,i),s&&((t.viewHooks||(t.viewHooks=[])).push(n,s),(t.viewCheckHooks||(t.viewCheckHooks=[])).push(n,s)),null!=u&&(t.destroyHooks||(t.destroyHooks=[])).push(n,u)}}function Gn(t,e,n){Yn(t,e,3,n)}function Wn(t,e,n,r){(3&t[2])===n&&Yn(t,e,n,r)}function qn(t,e){let n=t[2];(3&n)===e&&(n&=2047,n+=1,t[2]=n)}function Yn(t,e,n,r){const o=void 0!==r?65535&t[18]:0,i=null!=r?r:-1,s=e.length-1;let u=0;for(let l=o;l<s;l++){if("number"==typeof e[l+1]){if(u=e[l],null!=r&&u>=r)break}else{e[l]<0&&(t[18]+=65536),(u<i||-1==i)&&(Kn(t,n,e,l),t[18]=(4294901760&t[18])+l+2),l++}}}function Kn(t,e,n,r){const o=n[r]<0,i=n[r+1],s=t[o?-n[r]:n[r]];if(o){if(t[2]>>11<t[18]>>16&&(3&t[2])===e){t[2]+=2048,je(4,s,i);try{i.call(s)}finally{je(5,s,i)}}}else{je(4,s,i);try{i.call(s)}finally{je(5,s,i)}}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Qn=-1;class Jn{constructor(t,e,n){this.factory=t,this.resolving=!1,this.canSeeViewProviders=e,this.injectImpl=n}}function Xn(t,e,n){const r=ze(t);let o=0;for(;o<n.length;){const i=n[o];if("number"==typeof i){if(0!==i)break;o++;const s=n[o++],u=n[o++],l=n[o++];r?t.setAttribute(e,u,l,s):e.setAttributeNS(s,u,l)}else{const s=i,u=n[++o];er(s)?r&&t.setProperty(e,s,u):r?t.setAttribute(e,s,u):e.setAttribute(s,u),o++}}return o}function tr(t){return 3===t||4===t||6===t}function er(t){return 64===t.charCodeAt(0)}function nr(t,e){if(null===e||0===e.length);else if(null===t||0===t.length)t=e.slice();else{let n=-1;for(let r=0;r<e.length;r++){const o=e[r];"number"==typeof o?n=o:0===n||rr(t,n,o,null,-1===n||2===n?e[++r]:null)}}return t}function rr(t,e,n,r,o){let i=0,s=t.length;if(-1===e)s=-1;else for(;i<t.length;){const n=t[i++];if("number"==typeof n){if(n===e){s=-1;break}if(n>e){s=i-1;break}}}for(;i<t.length;){const e=t[i];if("number"==typeof e)break;if(e===n){if(null===r)return void(null!==o&&(t[i+1]=o));if(r===t[i+1])return void(t[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(t.splice(s,0,e),i=s+1),t.splice(i++,0,n),null!==r&&t.splice(i++,0,r),null!==o&&t.splice(i++,0,o)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function or(t){return t!==Qn}function ir(t){return 32767&t}function sr(t,e){let n=t>>16;let r=e;for(;n>0;)r=r[15],n--;return r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let ur=!0;function lr(t){const e=ur;return ur=t,e}let ar=0;function cr(t,e){const n=hr(t,e);if(-1!==n)return n;const r=e[1];r.firstCreatePass&&(t.injectorIndex=e.length,fr(r.data,t),fr(e,null),fr(r.blueprint,null));const o=dr(t,e),i=t.injectorIndex;if(or(o)){const t=ir(o),n=sr(o,e),r=n[1].data;for(let o=0;o<8;o++)e[i+o]=n[t+o]|r[t+o]}return e[i+8]=o,i}function fr(t,e){t.push(0,0,0,0,0,0,0,0,e)}function hr(t,e){return-1===t.injectorIndex||t.parent&&t.parent.injectorIndex===t.injectorIndex||null===e[t.injectorIndex+8]?-1:t.injectorIndex}function dr(t,e){if(t.parent&&-1!==t.parent.injectorIndex)return t.parent.injectorIndex;let n=0,r=null,o=e;for(;null!==o;){const t=o[1],e=t.type;if(r=2===e?t.declTNode:1===e?o[6]:null,null===r)return Qn;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return Qn}function pr(t,e,n){!function(t,e,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(ie)&&(r=n[ie]),null==r&&(r=n[ie]=ar++);const o=255&r,i=1<<o;e.data[t+(o>>5)]|=i}(t,e,n)}function yr(t,e,n){if(n&Lt.Optional)return t;At(e,"NodeInjector")}function gr(t,e,n,r){if(n&Lt.Optional&&void 0===r&&(r=null),0==(n&(Lt.Self|Lt.Host))){const o=t[9],i=Ht(void 0);try{return o?o.get(e,r,n&Lt.Optional):$t(e,r,n&Lt.Optional)}finally{Ht(i)}}return yr(r,e,n)}function mr(t,e,n,r=Lt.Default,o){if(null!==t){const i=function(t){if("string"==typeof t)return t.charCodeAt(0)||0;const e=t.hasOwnProperty(ie)?t[ie]:void 0;return"number"==typeof e?e>=0?255&e:_r:e}(n);if("function"==typeof i){if(!Tn(e,t,r))return r&Lt.Host?yr(o,n,r):gr(e,n,r,o);try{const t=i(r);if(null!=t||r&Lt.Optional)return t;At(n)}finally{Nn()}}else if("number"==typeof i){let o=null,s=hr(t,e),u=Qn,l=r&Lt.Host?e[16][6]:null;for((-1===s||r&Lt.SkipSelf)&&(u=-1===s?dr(t,e):e[s+8],u!==Qn&&Er(r,!1)?(o=e[1],s=ir(u),e=sr(u,e)):s=-1);-1!==s;){const t=e[1];if(br(i,s,t.data)){const t=vr(s,e,n,o,r,l);if(t!==Dr)return t}u=e[s+8],u!==Qn&&Er(r,e[1].data[s+8]===l)&&br(i,s,e)?(o=t,s=ir(u),e=sr(u,e)):s=-1}}}return gr(e,n,r,o)}const Dr={};function _r(){return new Fr(fn(),ln())}function vr(t,e,n,r,o,i){const s=e[1],u=s.data[t+8],l=wr(u,s,n,null==r?xe(u)&&ur:r!=s&&0!=(3&u.type),o&Lt.Host&&i===u);return null!==l?Cr(e,s,l,u):Dr}function wr(t,e,n,r,o){const i=t.providerIndexes,s=e.data,u=1048575&i,l=t.directiveStart,a=t.directiveEnd,c=i>>20,f=o?u+c:a;for(let t=r?u:u+c;t<f;t++){const e=s[t];if(t<l&&n===e||t>=l&&e.type===n)return t}if(o){const t=s[l];if(t&&ke(t)&&t.type===n)return l}return null}function Cr(t,e,n,r){let o=t[n];const i=e.data;if(o instanceof Jn){const s=o;s.resolving&&function(t,e){const n=e?`. Dependency path: ${e.join(" > ")} > ${t}`:"";throw new Ct("200",`Circular dependency in DI detected for ${t}${n}`)}(Ft(i[n]));const u=lr(s.canSeeViewProviders);s.resolving=!0;const l=s.injectImpl?Ht(s.injectImpl):null;Tn(t,r,Lt.Default);try{o=t[n]=s.factory(void 0,i,t,r),e.firstCreatePass&&n>=r.directiveStart&&
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(t,e,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=e.type.prototype;if(r){const r=Me(e);(n.preOrderHooks||(n.preOrderHooks=[])).push(t,r),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,r)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-t,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(t,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,i))}(n,i[n],e)}finally{null!==l&&Ht(l),lr(u),s.resolving=!1,Nn()}}return o}function br(t,e,n){const r=1<<t;return!!(n[e+(t>>5)]&r)}function Er(t,e){return!(t&Lt.Self||t&Lt.Host&&e)}class Fr{constructor(t,e){this._tNode=t,this._lView=e}get(t,e,n){return mr(this._tNode,this._lView,t,n,e)}}function Ar(t){return Ut((()=>{const e=t.prototype.constructor,n=e[oe]||xr(e),r=Object.prototype;let o=Object.getPrototypeOf(t.prototype).constructor;for(;o&&o!==r;){const t=o[oe]||xr(o);if(t&&t!==n)return t;o=Object.getPrototypeOf(o)}return t=>new t}))}function xr(t){return wt(t)?()=>{const e=xr(vt(t));return e&&e()}:Ie(t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Sr(t){return function(t,e){if("class"===e)return t.classes;if("style"===e)return t.styles;const n=t.attrs;if(n){const t=n.length;let r=0;for(;r<t;){const o=n[r];if(tr(o))break;if(0===o)r+=2;else if("number"==typeof o)for(r++;r<t&&"string"==typeof n[r];)r++;else{if(o===e)return n[r+1];r+=2}}}return null}(fn(),t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const kr="__annotations__",Ir="__parameters__",Tr="__prop__metadata__";function Or(t,e,n,r,o){return Ut((()=>{const i=Mr(e);function s(...t){if(this instanceof s)return i.call(this,...t),this;const e=new s(...t);return function(n){o&&o(n,...t);return(n.hasOwnProperty(kr)?n[kr]:Object.defineProperty(n,kr,{value:[]})[kr]).push(e),r&&r(n),n}}return n&&(s.prototype=Object.create(n.prototype)),s.prototype.ngMetadataName=t,s.annotationCls=s,s}))}function Mr(t){return function(...e){if(t){const n=t(...e);for(const t in n)this[t]=n[t]}}}function Pr(t,e,n){return Ut((()=>{const r=Mr(e);function o(...t){if(this instanceof o)return r.apply(this,t),this;const e=new o(...t);return n.annotation=e,n;function n(t,n,r){const o=t.hasOwnProperty(Ir)?t[Ir]:Object.defineProperty(t,Ir,{value:[]})[Ir];for(;o.length<=r;)o.push(null);return(o[r]=o[r]||[]).push(e),t}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=t,o.annotationCls=o,o}))}function Br(t,e,n,r){return Ut((()=>{const o=Mr(e);function i(...t){if(this instanceof i)return o.apply(this,t),this;const e=new i(...t);return function(n,o){const i=n.constructor,s=i.hasOwnProperty(Tr)?i[Tr]:Object.defineProperty(i,Tr,{value:{}})[Tr];s[o]=s.hasOwnProperty(o)&&s[o]||[],s[o].unshift(e),r&&r(n,o,...t)}}return n&&(i.prototype=Object.create(n.prototype)),i.prototype.ngMetadataName=t,i.annotationCls=i,i}))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Nr=Pr("Attribute",(t=>({attributeName:t,__NG_ELEMENT_ID__:()=>Sr(t)})));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Rr{constructor(t,e){this._desc=t,this.ngMetadataName="InjectionToken",this.ɵprov=void 0,"number"==typeof e?this.__NG_ELEMENT_ID__=e:void 0!==e&&(this.ɵprov=It({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}toString(){return`InjectionToken ${this._desc}`}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */new Rr("AnalyzeForEntryComponents");class jr{}Br("ContentChildren",((t,e={})=>({selector:t,first:!1,isViewQuery:!1,descendants:!1,emitDistinctChangesOnly:true,...e})),jr),Br("ContentChild",((t,e={})=>({selector:t,first:!0,isViewQuery:!1,descendants:!0,...e})),jr),Br("ViewChildren",((t,e={})=>({selector:t,first:!1,isViewQuery:!0,descendants:!0,emitDistinctChangesOnly:true,...e})),jr),Br("ViewChild",((t,e)=>({selector:t,first:!0,isViewQuery:!0,descendants:!0,...e})),jr);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Lr,Vr;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Hr(t){const e=Qt.ng;if(e&&e.ɵcompilerFacade)return e.ɵcompilerFacade;throw new Error("JIT compiler unavailable")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */!function(t){t[t.Directive=0]="Directive",t[t.Component=1]="Component",t[t.Injectable=2]="Injectable",t[t.Pipe=3]="Pipe",t[t.NgModule=4]="NgModule"}(Lr||(Lr={})),function(t){t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom"}(Vr||(Vr={}));const $r=Function;function Ur(t){return"function"==typeof t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function zr(t,e){void 0===e&&(e=t);for(let n=0;n<t.length;n++){let r=t[n];Array.isArray(r)?(e===t&&(e=t.slice(0,n)),zr(r,e)):e!==t&&e.push(r)}return e}function Zr(t,e){t.forEach((t=>Array.isArray(t)?Zr(t,e):e(t)))}function Gr(t,e,n){e>=t.length?t.push(n):t.splice(e,0,n)}function Wr(t,e){return e>=t.length-1?t.pop():t.splice(e,1)[0]}function qr(t,e){const n=[];for(let r=0;r<t;r++)n.push(e);return n}function Yr(t,e,n){let r=Qr(t,e);return r>=0?t[1|r]=n:(r=~r,function(t,e,n,r){let o=t.length;if(o==e)t.push(n,r);else if(1===o)t.push(r,t[0]),t[0]=n;else{for(o--,t.push(t[o-1],t[o]);o>e;){const e=o-2;t[o]=t[e],o--}t[e]=n,t[e+1]=r}}(t,r,e,n)),r}function Kr(t,e){const n=Qr(t,e);if(n>=0)return t[1|n]}function Qr(t,e){return Jr(t,e,1)}function Jr(t,e,n){let r=0,o=t.length>>n;for(;o!==r;){const i=r+(o-r>>1),s=t[i<<n];if(e===s)return i<<n;s>e?o=i:r=i+1}return~(o<<n)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Xr=/^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/,to=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/,eo=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/,no=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{\s*super\(\.\.\.arguments\)/;class ro{constructor(t){this._reflect=t||Qt.Reflect}isReflectionEnabled(){return!0}factory(t){return(...e)=>new t(...e)}_zipTypesAndAnnotations(t,e){let n;n=qr(void 0===t?e.length:t.length);for(let r=0;r<n.length;r++)void 0===t?n[r]=[]:t[r]&&t[r]!=Object?n[r]=[t[r]]:n[r]=[],e&&null!=e[r]&&(n[r]=n[r].concat(e[r]));return n}_ownParameters(t,e){if(function(t){return Xr.test(t)||no.test(t)||to.test(t)&&!eo.test(t)}(t.toString()))return null;if(t.parameters&&t.parameters!==e.parameters)return t.parameters;const n=t.ctorParameters;if(n&&n!==e.ctorParameters){const t="function"==typeof n?n():n,e=t.map((t=>t&&t.type)),r=t.map((t=>t&&oo(t.decorators)));return this._zipTypesAndAnnotations(e,r)}const r=t.hasOwnProperty(Ir)&&t[Ir],o=this._reflect&&this._reflect.getOwnMetadata&&this._reflect.getOwnMetadata("design:paramtypes",t);return o||r?this._zipTypesAndAnnotations(o,r):qr(t.length)}parameters(t){if(!Ur(t))return[];const e=io(t);let n=this._ownParameters(t,e);return n||e===Object||(n=this.parameters(e)),n||[]}_ownAnnotations(t,e){if(t.annotations&&t.annotations!==e.annotations){let e=t.annotations;return"function"==typeof e&&e.annotations&&(e=e.annotations),e}return t.decorators&&t.decorators!==e.decorators?oo(t.decorators):t.hasOwnProperty(kr)?t[kr]:null}annotations(t){if(!Ur(t))return[];const e=io(t),n=this._ownAnnotations(t,e)||[];return(e!==Object?this.annotations(e):[]).concat(n)}_ownPropMetadata(t,e){if(t.propMetadata&&t.propMetadata!==e.propMetadata){let e=t.propMetadata;return"function"==typeof e&&e.propMetadata&&(e=e.propMetadata),e}if(t.propDecorators&&t.propDecorators!==e.propDecorators){const e=t.propDecorators,n={};return Object.keys(e).forEach((t=>{n[t]=oo(e[t])})),n}return t.hasOwnProperty(Tr)?t[Tr]:null}propMetadata(t){if(!Ur(t))return{};const e=io(t),n={};if(e!==Object){const t=this.propMetadata(e);Object.keys(t).forEach((e=>{n[e]=t[e]}))}const r=this._ownPropMetadata(t,e);return r&&Object.keys(r).forEach((t=>{const e=[];n.hasOwnProperty(t)&&e.push(...n[t]),e.push(...r[t]),n[t]=e})),n}ownPropMetadata(t){return Ur(t)&&this._ownPropMetadata(t,io(t))||{}}hasLifecycleHook(t,e){return t instanceof $r&&e in t.prototype}guards(t){return{}}getter(t){return new Function("o","return o."+t+";")}setter(t){return new Function("o","v","return o."+t+" = v;")}method(t){return new Function("o","args",`if (!o.${t}) throw new Error('"${t}" is undefined');\n        return o.${t}.apply(o, args);`)}importUri(t){return"object"==typeof t&&t.filePath?t.filePath:`./${gt(t)}`}resourceUri(t){return`./${gt(t)}`}resolveIdentifier(t,e,n,r){return r}resolveEnum(t,e){return t[e]}}function oo(t){return t?t.map((t=>new(0,t.type.annotationCls)(...t.args?t.args:[]))):[]}function io(t){const e=t.prototype?Object.getPrototypeOf(t.prototype):null;return(e?e.constructor:null)||Object}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const so={},uo=/\n/gm,lo="__source",ao=pt({provide:String,useValue:pt});let co;function fo(t){const e=co;return co=t,e}function ho(t,e=Lt.Default){if(void 0===co)throw new Error("inject() must be called from an injection context");return null===co?$t(t,void 0,e):co.get(t,e&Lt.Optional?null:void 0,e)}function po(t,e=Lt.Default){return(Vt||ho)(vt(t),e)}function yo(t){throw new Error("invalid")}function go(t){const e=[];for(let n=0;n<t.length;n++){const r=vt(t[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let t,n=Lt.Default;for(let e=0;e<r.length;e++){const o=r[e],i=o.__NG_DI_FLAG__;"number"==typeof i?-1===i?t=o.token:n|=i:t=o}e.push(po(t,n))}else e.push(po(r))}return e}function mo(t,e){return t.__NG_DI_FLAG__=e,t.prototype.__NG_DI_FLAG__=e,t}function Do(t,e,n,r){const o=t.ngTempTokenPath;throw e[lo]&&o.unshift(e[lo]),t.message=function(t,e,n,r=null){t=t&&"\n"===t.charAt(0)&&"ɵ"==t.charAt(1)?t.substr(2):t;let o=gt(e);if(Array.isArray(e))o=e.map(gt).join(" -> ");else if("object"==typeof e){let t=[];for(let n in e)if(e.hasOwnProperty(n)){let r=e[n];t.push(n+":"+("string"==typeof r?JSON.stringify(r):gt(r)))}o=`{${t.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${t.replace(uo,"\n  ")}`}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */("\n"+t.message,o,n,r),t.ngTokenPath=o,t.ngTempTokenPath=null,t}const _o=mo(Pr("Inject",(t=>({token:t}))),-1),vo=mo(Pr("Optional"),8),wo=mo(Pr("Self"),2),Co=mo(Pr("SkipSelf"),4),bo=mo(Pr("Host"),1);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let Eo=null;function Fo(){return Eo=Eo||new ro}function Ao(t){return xo(Fo().parameters(t))}function xo(t){return t.map((t=>function(t){const e={token:null,attribute:null,host:!1,optional:!1,self:!1,skipSelf:!1};if(Array.isArray(t)&&t.length>0)for(let n=0;n<t.length;n++){const r=t[n];if(void 0===r)continue;const o=Object.getPrototypeOf(r);if(r instanceof vo||"Optional"===o.ngMetadataName)e.optional=!0;else if(r instanceof Co||"SkipSelf"===o.ngMetadataName)e.skipSelf=!0;else if(r instanceof wo||"Self"===o.ngMetadataName)e.self=!0;else if(r instanceof bo||"Host"===o.ngMetadataName)e.host=!0;else if(r instanceof _o)e.token=r.token;else if(r instanceof Nr){if(void 0===r.attributeName)throw new Error("Attribute name must be defined.");e.attribute=r.attributeName}else e.token=r}else void 0===t||Array.isArray(t)&&0===t.length?e.token=null:e.token=t;return e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t)))}let So=new Map;const ko=new Set;function Io(t){return!!(t.templateUrl&&!t.hasOwnProperty("template")||t.styleUrls&&t.styleUrls.length)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let To,Oo;function Mo(){if(void 0===To&&(To=null,Qt.trustedTypes))try{To=Qt.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return To}function Po(t){return Mo()?.createHTML(t)||t}function Bo(){if(void 0===Oo&&(Oo=null,Qt.trustedTypes))try{Oo=Qt.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Oo}function No(t){return Bo()?.createHTML(t)||t}function Ro(t){return Bo()?.createScript(t)||t}function jo(t){return Bo()?.createScriptURL(t)||t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Lo{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}function Vo(t){return t instanceof Lo?t.changingThisBreaksApplicationSecurity:t}function Ho(t,e){const n=function(t){return t instanceof Lo&&t.getTypeName()||null}(t);if(null!=n&&n!==e){if("ResourceURL"===n&&"URL"===e)return!0;throw new Error(`Required a safe ${e}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function $o(t){const e=new zo(t);return function(){try{return!!(new window.DOMParser).parseFromString(Po(""),"text/html")}catch{return!1}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */()?new Uo(e):e}class Uo{constructor(t){this.inertDocumentHelper=t}getInertBodyElement(t){t="<body><remove></remove>"+t;try{const e=(new window.DOMParser).parseFromString(Po(t),"text/html").body;return null===e?this.inertDocumentHelper.getInertBodyElement(t):(e.removeChild(e.firstChild),e)}catch{return null}}}class zo{constructor(t){if(this.defaultDoc=t,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"),null==this.inertDocument.body){const t=this.inertDocument.createElement("html");this.inertDocument.appendChild(t);const e=this.inertDocument.createElement("body");t.appendChild(e)}}getInertBodyElement(t){const e=this.inertDocument.createElement("template");if("content"in e)return e.innerHTML=Po(t),e;const n=this.inertDocument.createElement("body");return n.innerHTML=Po(t),this.defaultDoc.documentMode&&this.stripCustomNsAttrs(n),n}stripCustomNsAttrs(t){const e=t.attributes;for(let n=e.length-1;0<n;n--){const r=e.item(n).name;"xmlns:ns1"!==r&&0!==r.indexOf("ns1:")||t.removeAttribute(r)}let n=t.firstChild;for(;n;)n.nodeType===Node.ELEMENT_NODE&&this.stripCustomNsAttrs(n),n=n.nextSibling}}const Zo=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,Go=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;function Wo(t){return(t=String(t)).match(Zo)||t.match(Go)?t:"unsafe:"+t}function qo(t){return(t=String(t)).split(",").map((t=>Wo(t.trim()))).join(", ")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Yo(t){const e={};for(const n of t.split(","))e[n]=!0;return e}function Ko(...t){const e={};for(const n of t)for(const t in n)n.hasOwnProperty(t)&&(e[t]=!0);return e}const Qo=Yo("area,br,col,hr,img,wbr"),Jo=Yo("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Xo=Yo("rp,rt"),ti=Ko(Xo,Jo),ei=Ko(Jo,Yo("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),ni=Ko(Xo,Yo("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),ri=Ko(Qo,ei,ni,ti),oi=Yo("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),ii=Yo("srcset"),si=Yo("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),ui=Yo("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),li=Ko(oi,ii,si,ui),ai=Yo("script,style,template");class ci{constructor(){this.sanitizedSomething=!1,this.buf=[]}sanitizeChildren(t){let e=t.firstChild,n=!0;for(;e;)if(e.nodeType===Node.ELEMENT_NODE?n=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,n&&e.firstChild)e=e.firstChild;else for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let t=this.checkClobberedElement(e,e.nextSibling);if(t){e=t;break}e=this.checkClobberedElement(e,e.parentNode)}return this.buf.join("")}startElement(t){const e=t.nodeName.toLowerCase();if(!ri.hasOwnProperty(e))return this.sanitizedSomething=!0,!ai.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);const n=t.attributes;for(let t=0;t<n.length;t++){const e=n.item(t),r=e.name,o=r.toLowerCase();if(!li.hasOwnProperty(o)){this.sanitizedSomething=!0;continue}let i=e.value;oi[o]&&(i=Wo(i)),ii[o]&&(i=qo(i)),this.buf.push(" ",r,'="',di(i),'"')}return this.buf.push(">"),!0}endElement(t){const e=t.nodeName.toLowerCase();ri.hasOwnProperty(e)&&!Qo.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(t){this.buf.push(di(t))}checkClobberedElement(t,e){if(e&&(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY)===Node.DOCUMENT_POSITION_CONTAINED_BY)throw new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`);return e}}const fi=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,hi=/([^\#-~ |!])/g;function di(t){return t.replace(/&/g,"&amp;").replace(fi,(function(t){return"&#"+(1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320)+65536)+";"})).replace(hi,(function(t){return"&#"+t.charCodeAt(0)+";"})).replace(/</g,"&lt;").replace(/>/g,"&gt;")}let pi;function yi(t){return"content"in t&&function(t){return t.nodeType===Node.ELEMENT_NODE&&"TEMPLATE"===t.nodeName}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t)?t.content:null}var gi;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function mi(t){const e=Fi();return e?No(e.sanitize(gi.HTML,t)||""):Ho(t,"HTML")?No(Vo(t)):function(t,e){let n=null;try{pi=pi||$o(t);let r=e?String(e):"";n=pi.getInertBodyElement(r);let o=5,i=r;do{if(0===o)throw new Error("Failed to sanitize html because the input is unstable");o--,r=i,i=n.innerHTML,n=pi.getInertBodyElement(r)}while(r!==i);return Po((new ci).sanitizeChildren(yi(n)||n))}finally{if(n){const t=yi(n)||n;for(;t.firstChild;)t.removeChild(t.firstChild)}}}($e(),Et(t))}function Di(t){const e=Fi();return e?e.sanitize(gi.STYLE,t)||"":Ho(t,"Style")?Vo(t):Et(t)}function _i(t){const e=Fi();return e?e.sanitize(gi.URL,t)||"":Ho(t,"URL")?Vo(t):Wo(Et(t))}function vi(t){const e=Fi();if(e)return jo(e.sanitize(gi.RESOURCE_URL,t)||"");if(Ho(t,"ResourceURL"))return jo(Vo(t));throw new Error("unsafe value used in a resource URL context (see https://g.co/ng/security#xss)")}function wi(t){const e=Fi();if(e)return Ro(e.sanitize(gi.SCRIPT,t)||"");if(Ho(t,"Script"))return Ro(Vo(t));throw new Error("unsafe value used in a script context")}function Ci(t){return Po(t[0])}function bi(t){return function(t){return Mo()?.createScriptURL(t)||t}(t[0])}function Ei(t,e,n){return function(t,e){return"src"===e&&("embed"===t||"frame"===t||"iframe"===t||"media"===t||"script"===t)||"href"===e&&("base"===t||"link"===t)?vi:_i}(e,n)(t)}function Fi(){const t=ln();return t&&t[12]}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */!function(t){t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL"}(gi||(gi={}));function Ai(t,e){t.__ngContext__=e}function xi(t){return t.__ngContext__||null}function Si(t){const e=xi(t);return e?Array.isArray(e)?e:e.lView:null}function ki(t){return t.ngOriginalError}function Ii(t,...e){t.error(...e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ti{constructor(){this._console=console}handleError(t){const e=this._findOriginalError(t),n=function(t){return t&&t.ngErrorLogger||Ii}(t);n(this._console,"ERROR",t),e&&n(this._console,"ORIGINAL ERROR",e)}_findOriginalError(t){let e=t&&ki(t);for(;e&&ki(e);)e=ki(e);return e||null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Oi=/^>|^->|<!--|-->|--!>|<!-$/g,Mi=/(<|>)/;function Pi(t){return t.replace(Oi,(t=>t.replace(Mi,"​$1​")))}
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
const Bi=("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(Qt);function Ni(t){return t.ownerDocument.defaultView}function Ri(t){return t.ownerDocument}function ji(t){return t.ownerDocument.body}function Li(t){return t instanceof Function?t():t}
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
var Vi;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let Hi;function $i(t,e){return Hi(t,e)}!function(t){t[t.Important=1]="Important",t[t.DashCase=2]="DashCase"}(Vi||(Vi={}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Ui(t){const e=t[3];return Fe(e)?e[3]:e}function zi(t){return Gi(t[13])}function Zi(t){return Gi(t[4])}function Gi(t){for(;null!==t&&!Fe(t);)t=t[4];return t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Wi(t,e,n,r,o){if(null!=r){let i,s=!1;Fe(r)?i=r:Ee(r)&&(s=!0,r=r[0]);const u=Ge(r);0===t&&null!==n?null==o?ss(e,n,u):is(e,n,u,o||null,!0):1===t&&null!==n?is(e,n,u,o||null,!0):2===t?Ds(e,u,s):3===t&&e.destroyNode(u),null!=i&&function(t,e,n,r,o){const i=n[7],s=Ge(n);i!==s&&Wi(e,t,r,i,o);for(let o=be;o<n.length;o++){const s=n[o];vs(s[1],s,t,e,r,i)}}(e,t,i,n,o)}}function qi(t,e){return ze(t)?t.createText(e):t.createTextNode(e)}function Yi(t,e,n){ze(t)?t.setValue(e,n):e.textContent=n}function Ki(t,e){return t.createComment(Pi(e))}function Qi(t,e,n){return ze(t)?t.createElement(e,n):null===n?t.createElement(e):t.createElementNS(n,e)}function Ji(t,e,n,r){const o=be+r,i=n.length;r>0&&(n[o-1][4]=e),r<i-be?(e[4]=n[o],Gr(n,be+r,e)):(n.push(e),e[4]=null),e[3]=n;const s=e[17];null!==s&&n!==s&&function(t,e){const n=t[9];const r=e[3][3][16];e[we]!==r&&(t[2]=!0);null===n?t[9]=[e]:n.push(e)}(s,e);const u=e[19];null!==u&&u.insertView(t),e[2]|=128}function Xi(t,e){const n=t[9],r=n.indexOf(e),o=e[3];1024&e[2]&&(e[2]&=-1025,nn(o,-1)),n.splice(r,1)}function ts(t,e){if(t.length<=be)return;const n=be+e,r=t[n];if(r){const i=r[17];null!==i&&i!==t&&Xi(i,r),e>0&&(t[n-1][4]=r[4]);const s=Wr(t,be+e);vs(r[1],o=r,o[11],2,null,null),o[0]=null,o[6]=null;const u=s[19];null!==u&&u.detachView(s[1]),r[3]=null,r[4]=null,r[2]&=-129}var o;return r}function es(t,e){if(!(256&e[2])){const n=e[11];ze(n)&&n.destroyNode&&vs(t,e,n,3,null,null),function(t){let e=t[13];if(!e)return ns(t[1],t);for(;e;){let n=null;if(Ee(e))n=e[13];else{const t=e[10];t&&(n=t)}if(!n){for(;e&&!e[4]&&e!==t;)Ee(e)&&ns(e[1],e),e=e[3];null===e&&(e=t),Ee(e)&&ns(e[1],e),n=e&&e[4]}e=n}}(e)}}function ns(t,e){if(!(256&e[2])){e[2]&=-129,e[2]|=256,function(t,e){let n;if(null!=t&&null!=(n=t.destroyHooks))for(let t=0;t<n.length;t+=2){const r=e[n[t]];if(!(r instanceof Jn)){const e=n[t+1];if(Array.isArray(e))for(let t=0;t<e.length;t+=2){const n=r[e[t]],o=e[t+1];je(4,n,o);try{o.call(n)}finally{je(5,n,o)}}else{je(4,r,e);try{e.call(r)}finally{je(5,r,e)}}}}}(t,e),function(t,e){const n=t.cleanup,r=e[7];let o=-1;if(null!==n)for(let t=0;t<n.length-1;t+=2)if("string"==typeof n[t]){const i=n[t+1],s="function"==typeof i?i(e):Ge(e[i]),u=r[o=n[t+2]],l=n[t+3];"boolean"==typeof l?s.removeEventListener(n[t],u,l):l>=0?r[o=l]():r[o=-l].unsubscribe(),t+=2}else{const e=r[o=n[t+1]];n[t].call(e)}if(null!==r){for(let t=o+1;t<r.length;t++){(0,r[t])()}e[7]=null}}(t,e),1===e[1].type&&ze(e[11])&&e[11].destroy();const n=e[17];if(null!==n&&Fe(e[3])){n!==e[3]&&Xi(n,e);const r=e[19];null!==r&&r.detachView(t)}}}function rs(t,e,n){return os(t,e.parent,n)}function os(t,e,n){let r=e;for(;null!==r&&40&r.type;)r=(e=r).parent;if(null===r)return n[0];if(2&r.flags){const e=t.data[r.directiveStart].encapsulation;if(e===Gt.None||e===Gt.Emulated)return null}return qe(r,n)}function is(t,e,n,r,o){ze(t)?t.insertBefore(e,n,r,o):e.insertBefore(n,r,o)}function ss(t,e,n){ze(t)?t.appendChild(e,n):e.appendChild(n)}function us(t,e,n,r,o){null!==r?is(t,e,n,r,o):ss(t,e,n)}function ls(t,e){return ze(t)?t.parentNode(e):e.parentNode}function as(t,e,n){return hs(t,e,n)}function cs(t,e,n){return 40&t.type?qe(t,n):null}let fs,hs=cs;function ds(t,e){hs=t,fs=e}function ps(t,e,n,r){const o=rs(t,r,e),i=e[11],s=as(r.parent||e[6],r,e);if(null!=o)if(Array.isArray(n))for(let t=0;t<n.length;t++)us(i,o,n[t],s,!1);else us(i,o,n,s,!1);void 0!==fs&&fs(i,r,e,n,o)}function ys(t,e){if(null!==e){const n=e.type;if(3&n)return qe(e,t);if(4&n)return ms(-1,t[e.index]);if(8&n){const n=e.child;if(null!==n)return ys(t,n);{const n=t[e.index];return Fe(n)?ms(-1,n):Ge(n)}}if(32&n){return $i(e,t)()||Ge(t[e.index])}{const n=gs(t,e);if(null!==n){if(Array.isArray(n))return n[0];return ys(Ui(t[16]),n)}return ys(t,e.next)}}return null}function gs(t,e){if(null!==e){const n=t[16][6],r=e.projection;return n.projection[r]}return null}function ms(t,e){const n=be+t+1;if(n<e.length){const t=e[n],r=t[1].firstChild;if(null!==r)return ys(t,r)}return e[7]}function Ds(t,e,n){const r=ls(t,e);r&&function(t,e,n,r){ze(t)?t.removeChild(e,n,r):e.removeChild(n)}(t,r,e,n)}function _s(t,e,n,r,o,i,s){for(;null!=n;){const u=r[n.index],l=n.type;if(s&&0===e&&(u&&Ai(Ge(u),r),n.flags|=4),64!=(64&n.flags))if(8&l)_s(t,e,n.child,r,o,i,!1),Wi(e,t,o,u,i);else if(32&l){const s=$i(n,r);let l;for(;l=s();)Wi(e,t,o,l,i);Wi(e,t,o,u,i)}else 16&l?ws(t,e,r,n,o,i):Wi(e,t,o,u,i);n=s?n.projectionNext:n.next}}function vs(t,e,n,r,o,i){_s(n,r,t.firstChild,e,o,i,!1)}function ws(t,e,n,r,o,i){const s=n[16],u=s[6].projection[r.projection];if(Array.isArray(u))for(let n=0;n<u.length;n++){Wi(e,t,o,u[n],i)}else{_s(t,e,u,s[3],o,i,!0)}}function Cs(t,e,n){ze(t)?t.setAttribute(e,"style",n):e.style.cssText=n}function bs(t,e,n){ze(t)?""===n?t.removeAttribute(e,"class"):t.setAttribute(e,"class",n):e.className=n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Es(t,e,n){let r=t.length;for(;;){const o=t.indexOf(e,n);if(-1===o)return o;if(0===o||t.charCodeAt(o-1)<=32){const n=e.length;if(o+n===r||t.charCodeAt(o+n)<=32)return o}n=o+1}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Fs="ng-template";function As(t,e,n){let r=0;for(;r<t.length;){let o=t[r++];if(n&&"class"===o){if(o=t[r],-1!==Es(o.toLowerCase(),e,0))return!0}else if(1===o){for(;r<t.length&&"string"==typeof(o=t[r++]);)if(o.toLowerCase()===e)return!0;return!1}}return!1}function xs(t){return 4===t.type&&t.value!==Fs}function Ss(t,e,n){return e===(4!==t.type||n?t.value:Fs)}function ks(t,e,n){let r=4;const o=t.attrs||[],i=function(t){for(let e=0;e<t.length;e++){if(tr(t[e]))return e}return t.length}(o);let s=!1;for(let u=0;u<e.length;u++){const l=e[u];if("number"!=typeof l){if(!s)if(4&r){if(r=2|1&r,""!==l&&!Ss(t,l,n)||""===l&&1===e.length){if(Is(r))return!1;s=!0}}else{const a=8&r?l:e[++u];if(8&r&&null!==t.attrs){if(!As(t.attrs,a,n)){if(Is(r))return!1;s=!0}continue}const c=Ts(8&r?"class":l,o,xs(t),n);if(-1===c){if(Is(r))return!1;s=!0;continue}if(""!==a){let t;t=c>i?"":o[c+1].toLowerCase();const e=8&r?t:null;if(e&&-1!==Es(e,a,0)||2&r&&a!==t){if(Is(r))return!1;s=!0}}}}else{if(!s&&!Is(r)&&!Is(l))return!1;if(s&&Is(l))continue;s=!1,r=l|1&r}}return Is(r)||s}function Is(t){return 0==(1&t)}function Ts(t,e,n,r){if(null===e)return-1;let o=0;if(r||!n){let n=!1;for(;o<e.length;){const r=e[o];if(r===t)return o;if(3===r||6===r)n=!0;else{if(1===r||2===r){let t=e[++o];for(;"string"==typeof t;)t=e[++o];continue}if(4===r)break;if(0===r){o+=4;continue}}o+=n?1:2}return-1}return function(t,e){let n=t.indexOf(4);if(n>-1)for(n++;n<t.length;){const r=t[n];if("number"==typeof r)return-1;if(r===e)return n;n++}return-1}(e,t)}function Os(t,e,n=!1){for(let r=0;r<e.length;r++)if(ks(t,e[r],n))return!0;return!1}function Ms(t,e){t:for(let n=0;n<e.length;n++){const r=e[n];if(t.length===r.length){for(let e=0;e<t.length;e++)if(t[e]!==r[e])continue t;return!0}}return!1}function Ps(t,e){return t?":not("+e.trim()+")":e}function Bs(t){let e=t[0],n=1,r=2,o="",i=!1;for(;n<t.length;){let s=t[n];if("string"==typeof s)if(2&r){const e=t[++n];o+="["+s+(e.length>0?'="'+e+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""===o||Is(s)||(e+=Ps(i,o),o=""),r=s,i=i||!Is(r);n++}return""!==o&&(e+=Ps(i,o)),e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ns={};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Rs(t){js(an(),ln(),Ln()+t,mn())}function js(t,e,n,r){if(!r){if(3==(3&e[2])){const r=t.preOrderCheckHooks;null!==r&&Gn(e,r,n)}else{const r=t.preOrderHooks;null!==r&&Wn(e,r,0,n)}}Vn(n)}
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
function Ls(t,e){return t<<17|e<<2}function Vs(t){return t>>17&32767}function Hs(t){return 2==(2&t)}function $s(t){return 2|t}function Us(t){return(131068&t)>>2}function zs(t,e){return-131069&t|e<<2}function Zs(t){return 1==(1&t)}function Gs(t){return 1|t}const Ws=Promise.resolve(null);function qs(t,e){const n=t.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const n=t.data[i];kn(o),n.contentQueries(2,e[i],i)}}}function Ys(t,e,n,r,o,i,s,u,l,a){const c=e.blueprint.slice();return c[0]=o,c[2]=140|r,en(c),c[3]=c[15]=t,c[8]=n,c[10]=s||t&&t[10],c[11]=u||t&&t[11],c[12]=l||t&&t[12]||null,c[9]=a||t&&t[9]||null,c[6]=i,c[16]=2==e.type?t[16]:c,c}function Ks(t,e,n,r,o){let i=t.data[e];if(null===i)i=Qs(t,e,n,r,o),rn.lFrame.inI18n&&(i.flags|=64);else if(64&i.type){i.type=n,i.value=r,i.attrs=o;const t=dn();i.injectorIndex=null===t?-1:t.injectorIndex}return pn(i,!0),i}function Qs(t,e,n,r,o){const i=hn(),s=yn(),u=s?i:i&&i.parent,l=t.data[e]=function(t,e,n,r,o,i){let s=e?e.injectorIndex:-1;0;return{type:n,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,u,n,e,r,o);return null===t.firstChild&&(t.firstChild=l),null!==i&&(s?null==i.child&&null!==l.parent&&(i.child=l):null===i.next&&(i.next=l)),l}function Js(t,e,n,r){if(0===n)return-1;const o=e.length;for(let o=0;o<n;o++)e.push(r),t.blueprint.push(r),t.data.push(null);return o}function Xs(t,e,n){On(e);try{const r=t.viewQuery;null!==r&&Mu(1,r,n);const o=t.template;null!==o&&nu(t,e,o,1,n),t.firstCreatePass&&(t.firstCreatePass=!1),t.staticContentQueries&&qs(t,e),t.staticViewQueries&&Mu(2,t.viewQuery,n);const i=t.components;null!==i&&function(t,e){for(let n=0;n<e.length;n++)xu(t,e[n])}(e,i)}catch(e){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),e}finally{e[2]&=-5,Rn()}}function tu(t,e,n,r){const o=e[2];if(256==(256&o))return;On(e);const i=mn();try{en(e),wn(t.bindingStartIndex),null!==n&&nu(t,e,n,2,r);const s=3==(3&o);if(!i)if(s){const n=t.preOrderCheckHooks;null!==n&&Gn(e,n,null)}else{const n=t.preOrderHooks;null!==n&&Wn(e,n,0,null),qn(e,0)}if(function(t){for(let e=zi(t);null!==e;e=Zi(e)){if(!e[2])continue;const t=e[9];for(let e=0;e<t.length;e++){const n=t[e],r=n[3];0==(1024&n[2])&&nn(r,1),n[2]|=1024}}}(e),function(t){for(let e=zi(t);null!==e;e=Zi(e))for(let t=be;t<e.length;t++){const n=e[t],r=n[1];Xe(n)&&tu(r,n,r.template,n[8])}}(e),null!==t.contentQueries&&qs(t,e),!i)if(s){const n=t.contentCheckHooks;null!==n&&Gn(e,n)}else{const n=t.contentHooks;null!==n&&Wn(e,n,1),qn(e,1)}!function(t,e){const n=t.hostBindingOpCodes;if(null!==n)try{for(let t=0;t<n.length;t++){const r=n[t];if(r<0)Vn(~r);else{const o=r,i=n[++t],s=n[++t];Fn(i,o),s(2,e[o])}}}finally{Vn(-1)}}(t,e);const u=t.components;null!==u&&function(t,e){for(let n=0;n<e.length;n++)Fu(t,e[n])}(e,u);const l=t.viewQuery;if(null!==l&&Mu(2,l,r),!i)if(s){const n=t.viewCheckHooks;null!==n&&Gn(e,n)}else{const n=t.viewHooks;null!==n&&Wn(e,n,2),qn(e,2)}!0===t.firstUpdatePass&&(t.firstUpdatePass=!1),i||(e[2]&=-73),1024&e[2]&&(e[2]&=-1025,nn(e[3],-1))}finally{Rn()}}function eu(t,e,n,r){const o=e[10],i=!mn(),s=Je(e);try{i&&!s&&o.begin&&o.begin(),s&&Xs(t,e,r),tu(t,e,n,r)}finally{i&&!s&&o.end&&o.end()}}function nu(t,e,n,r,o){const i=Ln(),s=2&r;try{Vn(-1),s&&e.length>Ce&&js(t,e,Ce,mn());je(s?2:0,o),n(r,o)}finally{Vn(i);je(s?3:1,o)}}function ru(t,e,n){if(Ae(e)){const r=e.directiveStart,o=e.directiveEnd;for(let e=r;e<o;e++){const r=t.data[e];r.contentQueries&&r.contentQueries(1,n[e],e)}}}function ou(t,e,n){on()&&(function(t,e,n,r){const o=n.directiveStart,i=n.directiveEnd;t.firstCreatePass||cr(n,e);Ai(r,e);const s=n.initialInputs;for(let r=o;r<i;r++){const i=t.data[r],u=ke(i);u&&_u(e,n,i);const l=Cr(e,t,r,n);if(Ai(l,e),null!==s&&Cu(e,r-o,l,i,n,s),u){Qe(n.index,e)[8]=l}}}(t,e,n,qe(n,e)),128==(128&n.flags)&&function(t,e,n){const r=n.directiveStart,o=n.directiveEnd,i=(t.firstCreatePass,n.index),s=rn.lFrame.currentDirectiveIndex;try{Vn(i);for(let n=r;n<o;n++){const r=t.data[n],o=e[n];An(n),null===r.hostBindings&&0===r.hostVars&&null===r.hostAttrs||pu(r,o)}}finally{Vn(-1),An(s)}}(t,e,n))}function iu(t,e,n=qe){const r=e.localNames;if(null!==r){let o=e.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],u=-1===s?n(e,t):t[s];t[o++]=u}}}function su(t){const e=t.tView;if(null===e||e.incompleteFirstPass){const e=null;return t.tView=uu(1,e,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts)}return e}function uu(t,e,n,r,o,i,s,u,l,a){const c=Ce+r,f=c+o,h=function(t,e){const n=[];for(let r=0;r<e;r++)n.push(r<t?null:Ns);return n}(c,f),d="function"==typeof a?a():a;return h[1]={type:t,blueprint:h,template:n,queries:null,viewQuery:u,declTNode:e,data:h.slice().fill(null,c),bindingStartIndex:c,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:l,consts:d,incompleteFirstPass:!1}}function lu(t,e,n){if(ze(t)){const r=n===Gt.ShadowDom;return t.selectRootElement(e,r)}let r="string"==typeof e?t.querySelector(e):e;return r.textContent="",r}function au(t,e,n,r){const o=Bu(e);null===n?o.push(r):(o.push(n),t.firstCreatePass&&Nu(t).push(r,o.length-1))}function cu(t,e,n){for(let r in t)if(t.hasOwnProperty(r)){n=null===n?{}:n;const o=t[r];n.hasOwnProperty(r)?n[r].push(e,o):n[r]=[e,o]}return n}function fu(t,e,n,r,o,i,s,u){const l=qe(e,n);let a,c=e.inputs;var f;!u&&null!=c&&(a=c[r])?(Lu(t,n,a,r,o),xe(e)&&function(t,e){const n=Qe(e,t);16&n[2]||(n[2]|=64)}(n,e.index)):3&e.type?(r="class"===(f=r)?"className":"for"===f?"htmlFor":"formaction"===f?"formAction":"innerHtml"===f?"innerHTML":"readonly"===f?"readOnly":"tabindex"===f?"tabIndex":f,o=null!=s?s(o,e.value||"",r):o,ze(i)?i.setProperty(l,r,o):er(r)||(l.setProperty?l.setProperty(r,o):l[r]=o)):e.type}function hu(t,e,n,r){let o=!1;if(on()){const i=function(t,e,n){const r=t.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];Os(n,s.selectors,!1)&&(o||(o=[]),pr(cr(n,e),t,s.type),ke(s)?(yu(t,n),o.unshift(s)):o.push(s))}return o}(t,e,n),s=null===r?null:{"":-1};if(null!==i){o=!0,mu(n,t.data.length,i.length);for(let t=0;t<i.length;t++){const e=i[t];e.providersResolver&&e.providersResolver(e)}let r=!1,u=!1,l=Js(t,e,i.length,null);for(let o=0;o<i.length;o++){const a=i[o];n.mergedAttrs=nr(n.mergedAttrs,a.hostAttrs),Du(t,n,e,l,a),gu(l,a,s),null!==a.contentQueries&&(n.flags|=8),null===a.hostBindings&&null===a.hostAttrs&&0===a.hostVars||(n.flags|=128);const c=a.type.prototype;!r&&(c.ngOnChanges||c.ngOnInit||c.ngDoCheck)&&((t.preOrderHooks||(t.preOrderHooks=[])).push(n.index),r=!0),u||!c.ngOnChanges&&!c.ngDoCheck||((t.preOrderCheckHooks||(t.preOrderCheckHooks=[])).push(n.index),u=!0),l++}!function(t,e){const n=e.directiveStart,r=e.directiveEnd,o=t.data,i=e.attrs,s=[];let u=null,l=null;for(let t=n;t<r;t++){const n=o[t],r=n.inputs,a=null===i||xs(e)?null:bu(r,i);s.push(a),u=cu(r,t,u),l=cu(n.outputs,t,l)}null!==u&&(u.hasOwnProperty("class")&&(e.flags|=16),u.hasOwnProperty("style")&&(e.flags|=32)),e.initialInputs=s,e.inputs=u,e.outputs=l}(t,n)}s&&function(t,e,n){if(e){const r=t.localNames=[];for(let t=0;t<e.length;t+=2){const o=n[e[t+1]];if(null==o)throw new Ct("301",`Export of name '${e[t+1]}' not found!`);r.push(e[t],o)}}}(n,r,s)}return n.mergedAttrs=nr(n.mergedAttrs,n.attrs),o}function du(t,e,n,r,o,i){const s=i.hostBindings;if(s){let n=t.hostBindingOpCodes;null===n&&(n=t.hostBindingOpCodes=[]);const i=~e.index;(function(t){let e=t.length;for(;e>0;){const n=t[--e];if("number"==typeof n&&n<0)return n}return 0})(n)!=i&&n.push(i),n.push(r,o,s)}}function pu(t,e){null!==t.hostBindings&&t.hostBindings(1,e)}function yu(t,e){e.flags|=2,(t.components||(t.components=[])).push(e.index)}function gu(t,e,n){if(n){if(e.exportAs)for(let r=0;r<e.exportAs.length;r++)n[e.exportAs[r]]=t;ke(e)&&(n[""]=t)}}function mu(t,e,n){t.flags|=1,t.directiveStart=e,t.directiveEnd=e+n,t.providerIndexes=e}function Du(t,e,n,r,o){t.data[r]=o;const i=o.factory||(o.factory=Ie(o.type)),s=new Jn(i,ke(o),null);t.blueprint[r]=s,n[r]=s,du(t,e,0,r,Js(t,n,o.hostVars,Ns),o)}function _u(t,e,n){const r=qe(e,t),o=su(n),i=t[10],s=Su(t,Ys(t,o,null,n.onPush?64:16,r,e,i,i.createRenderer(r,n),null,null));t[e.index]=s}function vu(t,e,n,r,o,i){const s=qe(t,e);wu(e[11],s,i,t.value,n,r,o)}function wu(t,e,n,r,o,i,s){if(null==i)ze(t)?t.removeAttribute(e,o,n):e.removeAttribute(o);else{const u=null==s?Et(i):s(i,r||"",o);ze(t)?t.setAttribute(e,o,u,n):n?e.setAttributeNS(n,o,u):e.setAttribute(o,u)}}function Cu(t,e,n,r,o,i){const s=i[e];if(null!==s){const t=r.setInput;for(let e=0;e<s.length;){const o=s[e++],i=s[e++],u=s[e++];null!==t?r.setInput(n,u,o,i):n[i]=u}}}function bu(t,e){let n=null,r=0;for(;r<e.length;){const o=e[r];if(0!==o)if(5!==o){if("number"==typeof o)break;t.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,t[o],e[r+1])),r+=2}else r+=2;else r+=4}return n}function Eu(t,e,n,r){return new Array(t,!0,!1,e,null,0,r,n,null,null)}function Fu(t,e){const n=Qe(e,t);if(Xe(n)){const t=n[1];80&n[2]?tu(t,n,t.template,n[8]):n[5]>0&&Au(n)}}function Au(t){for(let e=zi(t);null!==e;e=Zi(e))for(let t=be;t<e.length;t++){const n=e[t];if(1024&n[2]){const t=n[1];tu(t,n,t.template,n[8])}else n[5]>0&&Au(n)}const e=t[1].components;if(null!==e)for(let n=0;n<e.length;n++){const r=Qe(e[n],t);Xe(r)&&r[5]>0&&Au(r)}}function xu(t,e){const n=Qe(e,t),r=n[1];!function(t,e){for(let n=e.length;n<t.blueprint.length;n++)e.push(t.blueprint[n])}(r,n),Xs(r,n,n[8])}function Su(t,e){return t[13]?t[14][4]=e:t[13]=e,t[14]=e,e}function ku(t){for(;t;){t[2]|=64;const e=Ui(t);if(0!=(512&t[2])&&!e)return t;t=e}return null}function Iu(t){for(let e=0;e<t.components.length;e++){const n=t.components[e],r=Si(n),o=r[1];eu(o,r,o.template,n)}}function Tu(t,e,n){const r=e[10];r.begin&&r.begin();try{tu(t,e,t.template,n)}catch(t){throw ju(e,t),t}finally{r.end&&r.end()}}function Ou(t){Iu(t[8])}function Mu(t,e,n){kn(0),e(t,n)}const Pu=Ws;function Bu(t){return t[7]||(t[7]=[])}function Nu(t){return t.cleanup||(t.cleanup=[])}function Ru(t,e,n){return(null===t||ke(t))&&(n=function(t){for(;Array.isArray(t);){if("object"==typeof t[1])return t;t=t[0]}return null}(n[e.index])),n[11]}function ju(t,e){const n=t[9],r=n?n.get(Ti,null):null;r&&r.handleError(e)}function Lu(t,e,n,r,o){for(let i=0;i<n.length;){const s=n[i++],u=n[i++],l=e[s],a=t.data[s];null!==a.setInput?a.setInput(l,o,r,u):l[u]=o}}function Vu(t,e,n){const r=We(e,t);Yi(t[11],r,n)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Hu(t,e,n){let r=n?t.styles:null,o=n?t.classes:null,i=0;if(null!==e)for(let t=0;t<e.length;t++){const n=e[t];if("number"==typeof n)i=n;else if(1==i)o=mt(o,n);else if(2==i){r=mt(r,n+": "+e[++t]+";")}}n?t.styles=r:t.stylesWithoutHost=r,n?t.classes=o:t.classesWithoutHost=o}
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
const $u=new Rr("INJECTOR",-1);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Uu{get(t,e=so){if(e===so){const e=new Error(`NullInjectorError: No provider for ${gt(t)}!`);throw e.name="NullInjectorError",e}return e}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const zu=new Rr("Set Injector scope."),Zu={},Gu={};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Wu;function qu(){return void 0===Wu&&(Wu=new Uu),Wu}function Yu(t,e=null,n=null,r){const o=Ku(t,e,n,r);return o._resolveInjectorDefTypes(),o}function Ku(t,e=null,n=null,r){return new Qu(t,n,e||qu(),r)}class Qu{constructor(t,e,n,r=null){this.parent=n,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const o=[];e&&Zr(e,(n=>this.processProvider(n,t,e))),Zr([t],(t=>this.processInjectorType(t,[],o))),this.records.set($u,tl(void 0,this));const i=this.records.get(zu);this.scope=null!=i?i.value:null,this.source=r||("object"==typeof t?null:gt(t))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach((t=>t.ngOnDestroy()))}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(t,e=so,n=Lt.Default){this.assertNotDestroyed();const r=fo(this),o=Ht(void 0);try{if(!(n&Lt.SkipSelf)){let e=this.records.get(t);if(void 0===e){const n=("function"==typeof(i=t)||"object"==typeof i&&i instanceof Rr)&&Ot(t);e=n&&this.injectableDefInScope(n)?tl(Ju(t),Zu):null,this.records.set(t,e)}if(null!=e)return this.hydrate(t,e)}const s=n&Lt.Self?qu():this.parent;return e=n&Lt.Optional&&e===so?null:e,s.get(t,e)}catch(e){if("NullInjectorError"===e.name){if((e.ngTempTokenPath=e.ngTempTokenPath||[]).unshift(gt(t)),r)throw e;return Do(e,t,"R3InjectorError",this.source)}throw e}finally{Ht(o),fo(r)}var i;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach((t=>this.get(t)))}toString(){const t=[];return this.records.forEach(((e,n)=>t.push(gt(n)))),`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Error("Injector has already been destroyed.")}processInjectorType(t,e,n){if(!(t=vt(t)))return!1;let r=Pt(t);const o=null==r&&t.ngModule||void 0,i=void 0===o?t:o;const s=-1!==n.indexOf(i);if(void 0!==o&&(r=Pt(o)),null==r)return!1;if(null!=r.imports&&!s){let t;n.push(i);try{Zr(r.imports,(r=>{this.processInjectorType(r,e,n)&&(void 0===t&&(t=[]),t.push(r))}))}finally{}if(void 0!==t)for(let e=0;e<t.length;e++){const{ngModule:n,providers:r}=t[e];Zr(r,(t=>this.processProvider(t,n,r||Xt)))}}this.injectorDefTypes.add(i);const u=Ie(i)||(()=>new i);this.records.set(i,tl(u,Zu));const l=r.providers;if(null!=l&&!s){const e=t;Zr(l,(t=>this.processProvider(t,e,l)))}return void 0!==o&&void 0!==t.providers}processProvider(t,e,n){let r=nl(t=vt(t))?t:vt(t&&t.provide);const o=function(t,e,n){if(el(t))return tl(void 0,t.useValue);return tl(Xu(t,e,n),Zu)}(t,e,n);if(nl(t)||!0!==t.multi){this.records.get(r);0}else{let e=this.records.get(r);e||(e=tl(void 0,Zu,!0),e.factory=()=>go(e.multi),this.records.set(r,e)),r=t,e.multi.push(t)}this.records.set(r,o)}hydrate(t,e){var n;return e.value===Zu&&(e.value=Gu,e.value=e.factory()),"object"==typeof e.value&&e.value&&(null!==(n=e.value)&&"object"==typeof n&&"function"==typeof n.ngOnDestroy)&&this.onDestroy.add(e.value),e.value}injectableDefInScope(t){if(!t.providedIn)return!1;const e=vt(t.providedIn);return"string"==typeof e?"any"===e||e===this.scope:this.injectorDefTypes.has(e)}}function Ju(t){const e=Ot(t),n=null!==e?e.factory:Ie(t);if(null!==n)return n;if(t instanceof Rr)throw new Error(`Token ${gt(t)} is missing a ɵprov definition.`);if(t instanceof Function)return function(t){const e=t.length;if(e>0){const n=qr(e,"?");throw new Error(`Can't resolve all parameters for ${gt(t)}: (${n.join(", ")}).`)}const n=function(t){const e=t&&(t[Bt]||t[Rt]);if(e){const n=function(t){if(t.hasOwnProperty("name"))return t.name;const e=(""+t).match(/^function\s*([^\s(]+)/);return null===e?"":e[1]}(t);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),e}return null}(t);return null!==n?()=>n.factory(t):()=>new t}(t);throw new Error("unreachable")}function Xu(t,e,n){let r;if(nl(t)){const e=vt(t);return Ie(e)||Ju(e)}if(el(t))r=()=>vt(t.useValue);else if((o=t)&&o.useFactory)r=()=>t.useFactory(...go(t.deps||[]));else if(function(t){return!(!t||!t.useExisting)}(t))r=()=>po(vt(t.useExisting));else{const e=vt(t&&(t.useClass||t.provide));if(!function(t){return!!t.deps}(t))return Ie(e)||Ju(e);r=()=>new e(...go(t.deps))}var o;return r}function tl(t,e,n=!1){return{factory:t,value:e,multi:n?[]:void 0}}function el(t){return null!==t&&"object"==typeof t&&ao in t}function nl(t){return"function"==typeof t}class rl{static create(t,e){if(Array.isArray(t))return Yu({name:""},e,t,"");{const e=t.name??"";return Yu({name:e},t.parent,t.providers,e)}}}rl.THROW_IF_NOT_FOUND=so,rl.NULL=new Uu,rl.ɵprov=It({token:rl,providedIn:"any",factory:()=>po($u)}),rl.__NG_ELEMENT_ID__=-1;function ol(t,e,n,r,o,i){const s=n[1];n[20]=t;const u=Ks(s,20,2,"#host",null),l=u.mergedAttrs=e.hostAttrs;null!==l&&(Hu(u,l,!0),null!==t&&(Xn(o,t,l),null!==u.classes&&bs(o,t,u.classes),null!==u.styles&&Cs(o,t,u.styles)));const a=r.createRenderer(t,e),c=Ys(n,su(e),null,e.onPush?64:16,n[20],u,r,a,i||null,null);return s.firstCreatePass&&(pr(cr(u,n),s,e.type),yu(s,u),mu(u,n.length,1)),Su(n,c),n[20]=c}function il(t,e,n,r,o){const i=n[1],s=function(t,e,n){const r=fn();t.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),Du(t,r,e,Js(t,e,1,null),n));const o=Cr(e,t,r.directiveStart,r);Ai(o,e);const i=qe(r,e);return i&&Ai(i,e),o}(i,n,e);if(r.components.push(s),t[8]=s,o&&o.forEach((t=>t(s,e))),e.contentQueries){const t=fn();e.contentQueries(1,s,t.directiveStart)}const u=fn();if(i.firstCreatePass&&(null!==e.hostBindings||null!==e.hostAttrs)){Vn(u.index);du(n[1],u,0,u.directiveStart,u.directiveEnd,e),pu(e,s)}return s}function sl(t,e){return{components:[],scheduler:t||Bi,clean:Pu,playerHandler:e||null,flags:0}}function ul(t,e){Zn(Si(t)[1],fn())}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function ll(t){return Object.getPrototypeOf(t.prototype).constructor}function al(t){let e=ll(t.type),n=!0;const r=[t];for(;e;){let o;if(ke(t))o=e.ɵcmp||e.ɵdir;else{if(e.ɵcmp)throw new Error("Directives cannot inherit Components");o=e.ɵdir}if(o){if(n){r.push(o);const e=t;e.inputs=cl(t.inputs),e.declaredInputs=cl(t.declaredInputs),e.outputs=cl(t.outputs);const n=o.hostBindings;n&&dl(t,n);const i=o.viewQuery,s=o.contentQueries;if(i&&fl(t,i),s&&hl(t,s),yt(t.inputs,o.inputs),yt(t.declaredInputs,o.declaredInputs),yt(t.outputs,o.outputs),ke(o)&&o.data.animation){const e=t.data;e.animation=(e.animation||[]).concat(o.data.animation)}}const e=o.features;if(e)for(let r=0;r<e.length;r++){const o=e[r];o&&o.ngInherit&&o(t),o===al&&(n=!1)}}e=Object.getPrototypeOf(e)}!function(t){let e=0,n=null;for(let r=t.length-1;r>=0;r--){const o=t[r];o.hostVars=e+=o.hostVars,o.hostAttrs=nr(o.hostAttrs,n=nr(n,o.hostAttrs))}}(r)}function cl(t){return t===Jt?{}:t===Xt?[]:t}function fl(t,e){const n=t.viewQuery;t.viewQuery=n?(t,r)=>{e(t,r),n(t,r)}:e}function hl(t,e){const n=t.contentQueries;t.contentQueries=n?(t,r,o)=>{e(t,r,o),n(t,r,o)}:e}function dl(t,e){const n=t.hostBindings;t.hostBindings=n?(t,r)=>{e(t,r),n(t,r)}:e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const pl=["providersResolver"],yl=["template","decls","consts","vars","onPush","ngContentSelectors","styles","encapsulation","schemas"];function gl(t){let e,n=ll(t.type);e=ke(t)?n.ɵcmp:n.ɵdir;const r=t;for(const t of pl)r[t]=e[t];if(ke(e))for(const t of yl)r[t]=e[t]}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let ml=null;function Dl(){if(!ml){const t=Qt.Symbol;if(t&&t.iterator)ml=t.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let e=0;e<t.length;++e){const n=t[e];"entries"!==n&&"size"!==n&&Map.prototype[n]===Map.prototype.entries&&(ml=n)}}}return ml}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function _l(t){return!!vl(t)&&(Array.isArray(t)||!(t instanceof Map)&&Dl()in t)}function vl(t){return null!==t&&("function"==typeof t||"object"==typeof t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function wl(t,e,n){return t[e]=n}function Cl(t,e){return t[e]}function bl(t,e,n){const r=t[e];return!Object.is(r,n)&&(t[e]=n,!0)}function El(t,e,n,r){const o=bl(t,e,n);return bl(t,e+1,r)||o}function Fl(t,e,n,r,o){const i=El(t,e,n,r);return bl(t,e+2,o)||i}function Al(t,e,n,r,o,i){const s=El(t,e,n,r);return El(t,e+2,o,i)||s}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function xl(t,e,n,r){const o=ln();if(bl(o,Cn(),e)){an();vu(Hn(),o,t,e,n,r)}return xl}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Sl(t,e){let n=!1,r=vn();for(let o=1;o<e.length;o+=2)n=bl(t,r++,e[o])||n;if(wn(r),!n)return Ns;let o=e[0];for(let t=1;t<e.length;t+=2)o+=Et(e[t])+e[t+1];return o}function kl(t,e,n,r){return bl(t,Cn(),n)?e+Et(n)+r:Ns}function Il(t,e,n,r,o,i){const s=El(t,vn(),n,o);return bn(2),s?e+Et(n)+r+Et(o)+i:Ns}function Tl(t,e,n,r,o,i,s,u){const l=Fl(t,vn(),n,o,s);return bn(3),l?e+Et(n)+r+Et(o)+i+Et(s)+u:Ns}function Ol(t,e,n,r,o,i,s,u,l,a){const c=Al(t,vn(),n,o,s,l);return bn(4),c?e+Et(n)+r+Et(o)+i+Et(s)+u+Et(l)+a:Ns}function Ml(t,e,n,r,o,i,s,u,l,a,c,f){const h=vn();let d=Al(t,h,n,o,s,l);return d=bl(t,h+4,c)||d,bn(5),d?e+Et(n)+r+Et(o)+i+Et(s)+u+Et(l)+a+Et(c)+f:Ns}function Pl(t,e,n,r,o,i,s,u,l,a,c,f,h,d){const p=vn();let y=Al(t,p,n,o,s,l);return y=El(t,p+4,c,h)||y,bn(6),y?e+Et(n)+r+Et(o)+i+Et(s)+u+Et(l)+a+Et(c)+f+Et(h)+d:Ns}function Bl(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y){const g=vn();let m=Al(t,g,n,o,s,l);return m=Fl(t,g+4,c,h,p)||m,bn(7),m?e+Et(n)+r+Et(o)+i+Et(s)+u+Et(l)+a+Et(c)+f+Et(h)+d+Et(p)+y:Ns}function Nl(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g,m){const D=vn();let _=Al(t,D,n,o,s,l);return _=Al(t,D+4,c,h,p,g)||_,bn(8),_?e+Et(n)+r+Et(o)+i+Et(s)+u+Et(l)+a+Et(c)+f+Et(h)+d+Et(p)+y+Et(g)+m:Ns}function Rl(t,e,n,r,o,i){const s=ln(),u=kl(s,e,n,r);if(u!==Ns){vu(Hn(),s,t,u,o,i)}return Rl}function jl(t,e,n,r,o,i,s,u){const l=ln(),a=Il(l,e,n,r,o,i);if(a!==Ns){vu(Hn(),l,t,a,s,u)}return jl}function Ll(t,e,n,r,o,i,s,u,l,a){const c=ln(),f=Tl(c,e,n,r,o,i,s,u);if(f!==Ns){vu(Hn(),c,t,f,l,a)}return Ll}function Vl(t,e,n,r,o,i,s,u,l,a,c,f){const h=ln(),d=Ol(h,e,n,r,o,i,s,u,l,a);if(d!==Ns){vu(Hn(),h,t,d,c,f)}return Vl}function Hl(t,e,n,r,o,i,s,u,l,a,c,f,h,d){const p=ln(),y=Ml(p,e,n,r,o,i,s,u,l,a,c,f);if(y!==Ns){vu(Hn(),p,t,y,h,d)}return Hl}function $l(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y){const g=ln(),m=Pl(g,e,n,r,o,i,s,u,l,a,c,f,h,d);if(m!==Ns){vu(Hn(),g,t,m,p,y)}return $l}function Ul(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g,m){const D=ln(),_=Bl(D,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y);if(_!==Ns){vu(Hn(),D,t,_,g,m)}return Ul}function zl(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g,m,D,_){const v=ln(),w=Nl(v,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g,m);if(w!==Ns){vu(Hn(),v,t,w,D,_)}return zl}function Zl(t,e,n,r){const o=ln(),i=Sl(o,e);if(i!==Ns){vu(Hn(),o,t,i,n,r)}return Zl}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Gl(t,e,n,r,o,i,s,u){const l=ln(),a=an(),c=t+Ce,f=a.firstCreatePass?function(t,e,n,r,o,i,s,u,l){const a=e.consts,c=Ks(e,t,4,s||null,tn(a,u));hu(e,n,c,tn(a,l)),Zn(e,c);const f=c.tViews=uu(2,c,r,o,i,e.directiveRegistry,e.pipeRegistry,null,e.schemas,a);return null!==e.queries&&(e.queries.template(e,c),f.queries=e.queries.embeddedTView(c)),c}(c,a,l,e,n,r,o,i,s):a.data[c];pn(f,!1);const h=l[11].createComment("");ps(a,l,h,f),Ai(h,l),Su(l,l[c]=Eu(h,l,h,f)),Se(f)&&ou(a,l,f),null!=s&&iu(l,f,u)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Wl(t){return Ke(rn.lFrame.contextLView,Ce+t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ql={ɵɵdefineInjectable:It,ɵɵdefineInjector:Tt,ɵɵinject:po,ɵɵinvalidFactoryDep:yo,resolveForwardRef:vt};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Yl(t,e){let n=null,r=null;t.hasOwnProperty(Bt)||Object.defineProperty(t,Bt,{get:()=>{if(null===n){const r=Hr();n=r.compileInjectable(ql,`ng:///${t.name}/ɵprov.js`,function(t,e){const n=e||{providedIn:null},r={name:t.name,type:t,typeArgumentCount:0,providedIn:n.providedIn};(Ql(n)||Jl(n))&&void 0!==n.deps&&(r.deps=xo(n.deps));Ql(n)?r.useClass=n.useClass:!function(t){return Kl in t}(n)?Jl(n)?r.useFactory=n.useFactory:function(t){return void 0!==t.useExisting}(n)&&(r.useExisting=n.useExisting):r.useValue=n.useValue;return r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t,e))}return n}}),t.hasOwnProperty(oe)||Object.defineProperty(t,oe,{get:()=>{if(null===r){const e=Hr();r=e.compileFactory(ql,`ng:///${t.name}/ɵfac.js`,{name:t.name,type:t,typeArgumentCount:0,deps:Ao(t),target:e.FactoryTarget.Injectable})}return r},configurable:!0})}const Kl=pt({provide:String,useValue:pt});function Ql(t){return void 0!==t.useClass}function Jl(t){return void 0!==t.useFactory}Or("Injectable",void 0,void 0,void 0,((t,e)=>Yl(t,e)));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Xl(t){if(t.length>1){return" ("+function(t){const e=[];for(let n=0;n<t.length;++n){if(e.indexOf(t[n])>-1)return e.push(t[n]),e;e.push(t[n])}return e}(t.slice().reverse()).map((t=>gt(t.token))).join(" -> ")+")"}return""}function ta(t,e,n,r){const o=[e],i=n(o),s=r?function(t,e){const n=`${t} caused by: ${e instanceof Error?e.message:e}`,r=Error(n);return r.ngOriginalError=e,r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(i,r):Error(i);return s.addKey=ea,s.keys=o,s.injectors=[t],s.constructResolvingMessage=n,s.ngOriginalError=r,s}function ea(t,e){this.injectors.push(t),this.keys.push(e),this.message=this.constructResolvingMessage(this.keys)}function na(t,e){const n=[];for(let t=0,r=e.length;t<r;t++){const r=e[t];r&&0!=r.length?n.push(r.map(gt).join(" ")):n.push("?")}return Error("Cannot resolve all parameters for '"+gt(t)+"'("+n.join(", ")+"). Make sure that all the parameters are decorated with Inject or have valid type annotations and that '"+gt(t)+"' is decorated with Injectable.")}function ra(t,e){return Error(`Cannot mix multi providers and regular providers, got: ${t} ${e}`)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class oa{constructor(t,e){if(this.token=t,this.id=e,!t)throw new Error("Token must be defined!");this.displayName=gt(this.token)}static get(t){return ia.get(vt(t))}static get numberOfKeys(){return ia.numberOfKeys}}const ia=new class{constructor(){this._allKeys=new Map}get(t){if(t instanceof oa)return t;if(this._allKeys.has(t))return this._allKeys.get(t);const e=new oa(t,oa.numberOfKeys);return this._allKeys.set(t,e),e}get numberOfKeys(){return this._allKeys.size}};
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
const sa=new class{constructor(t){this.reflectionCapabilities=t}updateCapabilities(t){this.reflectionCapabilities=t}factory(t){return this.reflectionCapabilities.factory(t)}parameters(t){return this.reflectionCapabilities.parameters(t)}annotations(t){return this.reflectionCapabilities.annotations(t)}propMetadata(t){return this.reflectionCapabilities.propMetadata(t)}hasLifecycleHook(t,e){return this.reflectionCapabilities.hasLifecycleHook(t,e)}getter(t){return this.reflectionCapabilities.getter(t)}setter(t){return this.reflectionCapabilities.setter(t)}method(t){return this.reflectionCapabilities.method(t)}importUri(t){return this.reflectionCapabilities.importUri(t)}resourceUri(t){return this.reflectionCapabilities.resourceUri(t)}resolveIdentifier(t,e,n,r){return this.reflectionCapabilities.resolveIdentifier(t,e,n,r)}resolveEnum(t,e){return this.reflectionCapabilities.resolveEnum(t,e)}}(new ro);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ua{constructor(t,e,n){this.key=t,this.optional=e,this.visibility=n}static fromKey(t){return new ua(t,!1,null)}}const la=[];class aa{constructor(t,e,n){this.key=t,this.resolvedFactories=e,this.multiProvider=n,this.resolvedFactory=this.resolvedFactories[0]}}class ca{constructor(t,e){this.factory=t,this.dependencies=e}}function fa(t){let e,n;if(t.useClass){const r=vt(t.useClass);e=sa.factory(r),n=ya(r)}else t.useExisting?(e=t=>t,n=[ua.fromKey(oa.get(t.useExisting))]):t.useFactory?(e=t.useFactory,n=function(t,e){if(e){const n=e.map((t=>[t]));return e.map((e=>ga(t,e,n)))}return ya(t)}(t.useFactory,t.deps)):(e=()=>t.useValue,n=la);return new ca(e,n)}function ha(t){return new aa(oa.get(t.provide),[fa(t)],t.multi||!1)}function da(t){const e=function(t,e){for(let n=0;n<t.length;n++){const r=t[n],o=e.get(r.key.id);if(o){if(r.multiProvider!==o.multiProvider)throw ra(o,r);if(r.multiProvider)for(let t=0;t<r.resolvedFactories.length;t++)o.resolvedFactories.push(r.resolvedFactories[t]);else e.set(r.key.id,r)}else{let t;t=r.multiProvider?new aa(r.key,r.resolvedFactories.slice(),r.multiProvider):r,e.set(r.key.id,t)}}return e}(pa(t,[]).map(ha),new Map);return Array.from(e.values())}function pa(t,e){return t.forEach((t=>{if(t instanceof $r)e.push({provide:t,useClass:t});else if(t&&"object"==typeof t&&void 0!==t.provide)e.push(t);else{if(!Array.isArray(t))throw Error(`Invalid provider - only instances of Provider and Type are allowed, got: ${t}`);pa(t,e)}})),e}function ya(t){const e=sa.parameters(t);if(!e)return[];if(e.some((t=>null==t)))throw na(t,e);return e.map((n=>ga(t,n,e)))}function ga(t,e,n){let r=null,o=!1;if(!Array.isArray(e))return ma(e instanceof _o?e.token:e,o,null);let i=null;for(let t=0;t<e.length;++t){const n=e[t];n instanceof $r?r=n:n instanceof _o?r=n.token:n instanceof vo?o=!0:n instanceof wo||n instanceof Co?i=n:n instanceof Rr&&(r=n)}if(r=vt(r),null!=r)return ma(r,o,i);throw na(t,n)}function ma(t,e,n){return new ua(oa.get(t),e,n)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Da={};class _a{static resolve(t){return da(t)}static resolveAndCreate(t,e){const n=_a.resolve(t);return _a.fromResolvedProviders(n,e)}static fromResolvedProviders(t,e){return new va(t,e)}}class va{constructor(t,e){this._constructionCounter=0,this._providers=t,this.parent=e||null;const n=t.length;this.keyIds=[],this.objs=[];for(let e=0;e<n;e++)this.keyIds[e]=t[e].key.id,this.objs[e]=Da}get(t,e=so){return this._getByKey(oa.get(t),null,e)}resolveAndCreateChild(t){const e=_a.resolve(t);return this.createChildFromResolved(e)}createChildFromResolved(t){const e=new va(t);return e.parent=this,e}resolveAndInstantiate(t){return this.instantiateResolved(_a.resolve([t])[0])}instantiateResolved(t){return this._instantiateProvider(t)}getProviderAtIndex(t){if(t<0||t>=this._providers.length)throw function(t){return Error(`Index ${t} is out-of-bounds.`)}(t);return this._providers[t]}_new(t){if(this._constructionCounter++>this._getMaxNumberOfObjects())throw e=this,n=t.key,ta(e,n,(function(t){return`Cannot instantiate cyclic dependency!${Xl(t)}`}));var e,n;return this._instantiateProvider(t)}_getMaxNumberOfObjects(){return this.objs.length}_instantiateProvider(t){if(t.multiProvider){const e=[];for(let n=0;n<t.resolvedFactories.length;++n)e[n]=this._instantiate(t,t.resolvedFactories[n]);return e}return this._instantiate(t,t.resolvedFactories[0])}_instantiate(t,e){const n=e.factory;let r,o;try{r=e.dependencies.map((t=>this._getByReflectiveDependency(t)))}catch(e){throw e.addKey&&e.addKey(this,t.key),e}try{o=n(...r)}catch(e){throw i=this,s=e,e.stack,u=t.key,ta(i,u,(function(t){const e=gt(t[0].token);return`${s.message}: Error during instantiation of ${e}!${Xl(t)}.`}),s)}var i,s,u;return o}_getByReflectiveDependency(t){return this._getByKey(t.key,t.visibility,t.optional?null:so)}_getByKey(t,e,n){return t===va.INJECTOR_KEY?this:e instanceof wo?this._getByKeySelf(t,n):this._getByKeyDefault(t,n,e)}_getObjByKeyId(t){for(let e=0;e<this.keyIds.length;e++)if(this.keyIds[e]===t)return this.objs[e]===Da&&(this.objs[e]=this._new(this._providers[e])),this.objs[e];return Da}_throwOrNull(t,e){if(e!==so)return e;throw function(t,e){return ta(t,e,(function(t){return`No provider for ${gt(t[0].token)}!${Xl(t)}`}))}(this,t)}_getByKeySelf(t,e){const n=this._getObjByKeyId(t.id);return n!==Da?n:this._throwOrNull(t,e)}_getByKeyDefault(t,e,n){let r;for(r=n instanceof Co?this.parent:this;r instanceof va;){const e=r,n=e._getObjByKeyId(t.id);if(n!==Da)return n;r=e.parent}return null!==r?r.get(t.token,e):this._throwOrNull(t,e)}get displayName(){return`ReflectiveInjector(providers: [${function(t,e){const n=[];for(let r=0;r<t._providers.length;++r)n[r]=e(t.getProviderAtIndex(r));return n}
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
 */(this,(t=>' "'+t.key.displayName+'" ')).join(", ")}])`}toString(){return this.displayName}}function wa(t,e=Lt.Default){const n=ln();if(null===n)return po(t,e);return mr(fn(),n,vt(t),e)}function Ca(){throw new Error("invalid")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ba(t,e,n){const r=ln();if(bl(r,Cn(),e)){fu(an(),Hn(),r,t,e,r[11],n,!1)}return ba}function Ea(t,e,n,r,o){const i=o?"class":"style";Lu(t,n,e.inputs[i],i,r)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Fa(t,e,n,r){const o=ln(),i=an(),s=Ce+t,u=o[11],l=o[s]=Qi(u,e,rn.lFrame.currentNamespace),a=i.firstCreatePass?function(t,e,n,r,o,i,s){const u=e.consts,l=Ks(e,t,2,o,tn(u,i));return hu(e,n,l,tn(u,s)),null!==l.attrs&&Hu(l,l.attrs,!1),null!==l.mergedAttrs&&Hu(l,l.mergedAttrs,!0),null!==e.queries&&e.queries.elementStart(e,l),l}(s,i,o,0,e,n,r):i.data[s];pn(a,!0);const c=a.mergedAttrs;null!==c&&Xn(u,l,c);const f=a.classes;null!==f&&bs(u,l,f);const h=a.styles;null!==h&&Cs(u,l,h),64!=(64&a.flags)&&ps(i,o,l,a),0===rn.lFrame.elementDepthCount&&Ai(l,o),rn.lFrame.elementDepthCount++,Se(a)&&(ou(i,o,a),ru(i,a,o)),null!==r&&iu(o,a)}function Aa(){let t=fn();yn()?gn():(t=t.parent,pn(t,!1));const e=t;rn.lFrame.elementDepthCount--;const n=an();n.firstCreatePass&&(Zn(n,t),Ae(t)&&n.queries.elementEnd(t)),null!=e.classesWithoutHost&&function(t){return 0!=(16&t.flags)}(e)&&Ea(n,e,ln(),e.classesWithoutHost,!0),null!=e.stylesWithoutHost&&function(t){return 0!=(32&t.flags)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(e)&&Ea(n,e,ln(),e.stylesWithoutHost,!1)}function xa(t,e,n,r){Fa(t,e,n,r),Aa()}function Sa(t,e,n){const r=ln(),o=an(),i=t+Ce,s=o.firstCreatePass?
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(t,e,n,r,o){const i=e.consts,s=tn(i,r),u=Ks(e,t,8,"ng-container",s);return null!==s&&Hu(u,s,!0),hu(e,n,u,tn(i,o)),null!==e.queries&&e.queries.elementStart(e,u),u}(i,o,r,e,n):o.data[i];pn(s,!0);const u=r[i]=r[11].createComment("");ps(o,r,u,s),Ai(u,r),Se(s)&&(ou(o,r,s),ru(o,s,r)),null!=n&&iu(r,s)}function ka(){let t=fn();const e=an();yn()?gn():(t=t.parent,pn(t,!1)),e.firstCreatePass&&(Zn(e,t),Ae(t)&&e.queries.elementEnd(t))}function Ia(t,e,n){Sa(t,e,n),ka()}function Ta(){return ln()}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Oa(t){return!!t&&"function"==typeof t.then}function Ma(t){return!!t&&"function"==typeof t.subscribe}va.INJECTOR_KEY=oa.get(rl);const Pa=Ma;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ba(t,e,n,r){const o=ln(),i=an(),s=fn();return Ra(i,o,o[11],s,t,e,!!n,r),Ba}function Na(t,e){const n=fn(),r=ln(),o=an();return Ra(o,r,Ru(xn(o.data),n,r),n,t,e,!1),Na}function Ra(t,e,n,r,o,i,s,u){const l=Se(r),a=t.firstCreatePass&&Nu(t),c=e[8],f=Bu(e);let h=!0;if(3&r.type||u){const d=qe(r,e),p=u?u(d):d,y=f.length,g=u?t=>u(Ge(t[r.index])):r.index;if(ze(n)){let s=null;if(!u&&l&&(s=function(t,e,n,r){const o=t.cleanup;if(null!=o)for(let t=0;t<o.length-1;t+=2){const i=o[t];if(i===n&&o[t+1]===r){const n=e[7],r=o[t+2];return n.length>r?n[r]:null}"string"==typeof i&&(t+=2)}return null}(t,e,o,r.index)),null!==s){(s.__ngLastListenerFn__||s).__ngNextListenerFn__=i,s.__ngLastListenerFn__=i,h=!1}else{i=La(r,e,c,i,!1);const t=n.listen(p,o,i);f.push(i,t),a&&a.push(o,g,y,y+1)}}else i=La(r,e,c,i,!0),p.addEventListener(o,i,s),f.push(i),a&&a.push(o,g,y,s)}else i=La(r,e,c,i,!1);const d=r.outputs;let p;if(h&&null!==d&&(p=d[o])){const t=p.length;if(t)for(let n=0;n<t;n+=2){const t=p[n],s=p[n+1];0;const u=e[t][s].subscribe(i),l=f.length;f.push(i,u),a&&a.push(o,r.index,l,-(l+1))}}}function ja(t,e,n,r){try{return je(6,e,n),!1!==n(r)}catch(e){return ju(t,e),!1}finally{je(7,e,n)}}function La(t,e,n,r,o){return function i(s){if(s===Function)return r;const u=2&t.flags?Qe(t.index,e):e;0==(32&e[2])&&ku(u);let l=ja(e,n,r,s),a=i.__ngNextListenerFn__;for(;a;)l=ja(e,n,a,s)&&l,a=a.__ngNextListenerFn__;return o&&!1===l&&(s.preventDefault(),s.returnValue=!1),l}}
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
 */function Va(t=1){return jn(t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ha(t,e){let n=null;const r=function(t){const e=t.attrs;if(null!=e){const t=e.indexOf(5);if(0==(1&t))return e[t+1]}return null}(t);for(let o=0;o<e.length;o++){const i=e[o];if("*"!==i){if(null===r?Os(t,i,!0):Ms(r,i))return o}else n=o}return n}function $a(t){const e=ln()[16][6];if(!e.projection){const n=t?t.length:1,r=e.projection=qr(n,null),o=r.slice();let i=e.child;for(;null!==i;){const e=t?Ha(i,t):0;null!==e&&(o[e]?o[e].projectionNext=i:r[e]=i,o[e]=i),i=i.next}}}function Ua(t,e=0,n){const r=ln(),o=an(),i=Ks(o,Ce+t,16,null,n||null);null===i.projection&&(i.projection=e),gn(),64!=(64&i.flags)&&function(t,e,n){ws(e[11],0,e,n,rs(t,n,e),as(n.parent||e[6],n,e))}(o,r,i)}function za(t,e,n){return Za(t,"",e,"",n),za}function Za(t,e,n,r,o){const i=ln(),s=kl(i,e,n,r);if(s!==Ns){fu(an(),Hn(),i,t,s,i[11],o,!1)}return Za}function Ga(t,e,n,r,o,i,s){const u=ln(),l=Il(u,e,n,r,o,i);if(l!==Ns){fu(an(),Hn(),u,t,l,u[11],s,!1)}return Ga}function Wa(t,e,n,r,o,i,s,u,l){const a=ln(),c=Tl(a,e,n,r,o,i,s,u);if(c!==Ns){fu(an(),Hn(),a,t,c,a[11],l,!1)}return Wa}function qa(t,e,n,r,o,i,s,u,l,a,c){const f=ln(),h=Ol(f,e,n,r,o,i,s,u,l,a);if(h!==Ns){fu(an(),Hn(),f,t,h,f[11],c,!1)}return qa}function Ya(t,e,n,r,o,i,s,u,l,a,c,f,h){const d=ln(),p=Ml(d,e,n,r,o,i,s,u,l,a,c,f);if(p!==Ns){fu(an(),Hn(),d,t,p,d[11],h,!1)}return Ya}function Ka(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p){const y=ln(),g=Pl(y,e,n,r,o,i,s,u,l,a,c,f,h,d);if(g!==Ns){fu(an(),Hn(),y,t,g,y[11],p,!1)}return Ka}function Qa(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g){const m=ln(),D=Bl(m,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y);if(D!==Ns){fu(an(),Hn(),m,t,D,m[11],g,!1)}return Qa}function Ja(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g,m,D){const _=ln(),v=Nl(_,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g,m);if(v!==Ns){fu(an(),Hn(),_,t,v,_[11],D,!1)}return Ja}function Xa(t,e,n){const r=ln(),o=Sl(r,e);if(o!==Ns){fu(an(),Hn(),r,t,o,r[11],n,!1)}return Xa}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function tc(t,e,n,r,o,i){let s=i?e.classBindings:e.styleBindings,u=Vs(s),l=Us(s);t[r]=n;let a,c=!1;if(Array.isArray(n)){const t=n;a=t[1],(null===a||Qr(t,a)>0)&&(c=!0)}else a=n;if(o){if(0!==l){const e=Vs(t[u+1]);t[r+1]=Ls(e,u),0!==e&&(t[e+1]=zs(t[e+1],r)),t[u+1]=131071&t[u+1]|r<<17}else t[r+1]=Ls(u,0),0!==u&&(t[u+1]=zs(t[u+1],r)),u=r}else t[r+1]=Ls(l,0),0===u?u=r:t[l+1]=zs(t[l+1],r),l=r;c&&(t[r+1]=$s(t[r+1])),ec(t,a,r,!0,i),ec(t,a,r,!1,i),function(t,e,n,r,o){const i=o?t.residualClasses:t.residualStyles;null!=i&&"string"==typeof e&&Qr(i,e)>=0&&(n[r+1]=Gs(n[r+1]))}(e,a,t,r,i),s=Ls(u,l),i?e.classBindings=s:e.styleBindings=s}function ec(t,e,n,r,o){const i=t[n+1],s=null===e;let u=r?Vs(i):Us(i),l=!1;for(;0!==u&&(!1===l||s);){const n=t[u],o=t[u+1];nc(n,e)&&(l=!0,t[u+1]=r?Gs(o):$s(o)),u=r?Vs(o):Us(o)}l&&(t[n+1]=r?$s(i):Gs(i))}function nc(t,e){return null===t||null==e||(Array.isArray(t)?t[1]:t)===e||!(!Array.isArray(t)||"string"!=typeof e)&&Qr(t,e)>=0}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const rc={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function oc(t){return t.substring(rc.key,rc.keyEnd)}function ic(t){return t.substring(rc.value,rc.valueEnd)}function sc(t,e){const n=rc.textEnd;return n===e?-1:(e=rc.keyEnd=function(t,e,n){for(;e<n&&t.charCodeAt(e)>32;)e++;return e}(t,rc.key=e,n),ac(t,e,n))}function uc(t,e){const n=rc.textEnd;let r=rc.key=ac(t,e,n);return n===r?-1:(r=rc.keyEnd=function(t,e,n){let r;for(;e<n&&(45===(r=t.charCodeAt(e))||95===r||(-33&r)>=65&&(-33&r)<=90||r>=48&&r<=57);)e++;return e}(t,r,n),r=cc(t,r,n,58),r=rc.value=ac(t,r,n),r=rc.valueEnd=function(t,e,n){let r=-1,o=-1,i=-1,s=e,u=s;for(;s<n;){const l=t.charCodeAt(s++);if(59===l)return u;34===l||39===l?u=s=fc(t,l,s,n):e===s-4&&85===i&&82===o&&76===r&&40===l?u=s=fc(t,41,s,n):l>32&&(u=s),i=o,o=r,r=-33&l}return u}(t,r,n),cc(t,r,n,59))}function lc(t){rc.key=0,rc.keyEnd=0,rc.value=0,rc.valueEnd=0,rc.textEnd=t.length}function ac(t,e,n){for(;e<n&&t.charCodeAt(e)<=32;)e++;return e}function cc(t,e,n,r){return(e=ac(t,e,n))<n&&e++,e}function fc(t,e,n,r){let o=-1,i=n;for(;i<r;){const n=t.charCodeAt(i++);if(n==e&&92!==o)return i;o=92==n&&92===o?0:n}throw new Error}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function hc(t,e,n){return Dc(t,e,n,!1),hc}function dc(t,e){return Dc(t,e,null,!0),dc}function pc(t){_c(Ec,yc,t,!1)}function yc(t,e){for(let n=function(t){return lc(t),uc(t,ac(t,0,rc.textEnd))}(e);n>=0;n=uc(e,n))Ec(t,oc(e),ic(e))}function gc(t){_c(Yr,mc,t,!0)}function mc(t,e){for(let n=function(t){return lc(t),sc(t,ac(t,0,rc.textEnd))}(e);n>=0;n=sc(e,n))Yr(t,oc(e),!0)}function Dc(t,e,n,r){const o=ln(),i=an(),s=bn(2);if(i.firstUpdatePass&&wc(i,t,s,r),e!==Ns&&bl(o,s,e)){Fc(i,i.data[Ln()],o,o[11],t,o[s+1]=function(t,e){null==t||("string"==typeof e?t+=e:"object"==typeof t&&(t=gt(Vo(t))));return t}(e,n),r,s)}}function _c(t,e,n,r){const o=an(),i=bn(2);o.firstUpdatePass&&wc(o,null,i,r);const s=ln();if(n!==Ns&&bl(s,i,n)){const u=o.data[Ln()];if(Sc(u,r)&&!vc(o,i)){0;let t=r?u.classesWithoutHost:u.stylesWithoutHost;null!==t&&(n=mt(t,n||"")),Ea(o,u,s,n,r)}else!function(t,e,n,r,o,i,s,u){o===Ns&&(o=Xt);let l=0,a=0,c=0<o.length?o[0]:null,f=0<i.length?i[0]:null;for(;null!==c||null!==f;){const h=l<o.length?o[l+1]:void 0,d=a<i.length?i[a+1]:void 0;let p,y=null;c===f?(l+=2,a+=2,h!==d&&(y=f,p=d)):null===f||null!==c&&c<f?(l+=2,y=c):(a+=2,y=f,p=d),null!==y&&Fc(t,e,n,r,y,p,s,u),c=l<o.length?o[l]:null,f=a<i.length?i[a]:null}}(o,u,s,s[11],s[i+1],s[i+1]=function(t,e,n){if(null==n||""===n)return Xt;const r=[],o=Vo(n);if(Array.isArray(o))for(let e=0;e<o.length;e++)t(r,o[e],!0);else if("object"==typeof o)for(const e in o)o.hasOwnProperty(e)&&t(r,e,o[e]);else"string"==typeof o&&e(r,o);return r}(t,e,n),r,i)}}function vc(t,e){return e>=t.expandoStartIndex}function wc(t,e,n,r){const o=t.data;if(null===o[n+1]){const i=o[Ln()],s=vc(t,n);Sc(i,r)&&null===e&&!s&&(e=!1),e=function(t,e,n,r){const o=xn(t);let i=r?e.residualClasses:e.residualStyles;if(null===o){0===(r?e.classBindings:e.styleBindings)&&(n=bc(n=Cc(null,t,e,n,r),e.attrs,r),i=null)}else{const s=e.directiveStylingLast;if(-1===s||t[s]!==o)if(n=Cc(o,t,e,n,r),null===i){let n=function(t,e,n){const r=n?e.classBindings:e.styleBindings;if(0===Us(r))return;return t[Vs(r)]}(t,e,r);void 0!==n&&Array.isArray(n)&&(n=Cc(null,t,e,n[1],r),n=bc(n,e.attrs,r),function(t,e,n,r){const o=n?e.classBindings:e.styleBindings;t[Vs(o)]=r}(t,e,r,n))}else i=function(t,e,n){let r;const o=e.directiveEnd;for(let i=1+e.directiveStylingLast;i<o;i++){r=bc(r,t[i].hostAttrs,n)}return bc(r,e.attrs,n)}(t,e,r)}void 0!==i&&(r?e.residualClasses=i:e.residualStyles=i);return n}(o,i,e,r),tc(o,i,e,n,s,r)}}function Cc(t,e,n,r,o){let i=null;const s=n.directiveEnd;let u=n.directiveStylingLast;for(-1===u?u=n.directiveStart:u++;u<s&&(i=e[u],r=bc(r,i.hostAttrs,o),i!==t);)u++;return null!==t&&(n.directiveStylingLast=u),r}function bc(t,e,n){const r=n?1:2;let o=-1;if(null!==e)for(let i=0;i<e.length;i++){const s=e[i];"number"==typeof s?o=s:o===r&&(Array.isArray(t)||(t=void 0===t?[]:["",t]),Yr(t,s,!!n||e[++i]))}return void 0===t?null:t}function Ec(t,e,n){Yr(t,e,Vo(n))}function Fc(t,e,n,r,o,i,s,u){if(!(3&e.type))return;const l=t.data,a=l[u+1];if(!xc(Zs(a)?Ac(l,e,n,o,Us(a),s):void 0)){xc(i)||Hs(a)&&(i=Ac(l,null,n,o,u,s));!function(t,e,n,r,o){const i=ze(t);if(e)o?i?t.addClass(n,r):n.classList.add(r):i?t.removeClass(n,r):n.classList.remove(r);else{let e=-1===r.indexOf("-")?void 0:Vi.DashCase;if(null==o)i?t.removeStyle(n,r,e):n.style.removeProperty(r);else{const s="string"==typeof o&&o.endsWith("!important");s&&(o=o.slice(0,-10),e|=Vi.Important),i?t.setStyle(n,r,o,e):n.style.setProperty(r,o,s?"important":"")}}}(r,s,We(Ln(),n),o,i)}}function Ac(t,e,n,r,o,i){const s=null===e;let u;for(;o>0;){const e=t[o],i=Array.isArray(e),l=i?e[1]:e,a=null===l;let c=n[o+1];c===Ns&&(c=a?Xt:void 0);let f=a?Kr(c,r):l===r?c:void 0;if(i&&!xc(f)&&(f=Kr(e,r)),xc(f)&&(u=f,s))return u;const h=t[o+1];o=s?Vs(h):Us(h)}if(null!==e){let t=i?e.residualClasses:e.residualStyles;null!=t&&(u=Kr(t,r))}return u}function xc(t){return void 0!==t}function Sc(t,e){return 0!=(t.flags&(e?16:32))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function kc(t,e=""){const n=ln(),r=an(),o=t+Ce,i=r.firstCreatePass?Ks(r,o,1,e,null):r.data[o],s=n[o]=qi(n[11],e);ps(r,n,s,i),pn(i,!1)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ic(t){return Tc("",t,""),Ic}function Tc(t,e,n){const r=ln(),o=kl(r,t,e,n);return o!==Ns&&Vu(r,Ln(),o),Tc}function Oc(t,e,n,r,o){const i=ln(),s=Il(i,t,e,n,r,o);return s!==Ns&&Vu(i,Ln(),s),Oc}function Mc(t,e,n,r,o,i,s){const u=ln(),l=Tl(u,t,e,n,r,o,i,s);return l!==Ns&&Vu(u,Ln(),l),Mc}function Pc(t,e,n,r,o,i,s,u,l){const a=ln(),c=Ol(a,t,e,n,r,o,i,s,u,l);return c!==Ns&&Vu(a,Ln(),c),Pc}function Bc(t,e,n,r,o,i,s,u,l,a,c){const f=ln(),h=Ml(f,t,e,n,r,o,i,s,u,l,a,c);return h!==Ns&&Vu(f,Ln(),h),Bc}function Nc(t,e,n,r,o,i,s,u,l,a,c,f,h){const d=ln(),p=Pl(d,t,e,n,r,o,i,s,u,l,a,c,f,h);return p!==Ns&&Vu(d,Ln(),p),Nc}function Rc(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p){const y=ln(),g=Bl(y,t,e,n,r,o,i,s,u,l,a,c,f,h,d,p);return g!==Ns&&Vu(y,Ln(),g),Rc}function jc(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g){const m=ln(),D=Nl(m,t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g);return D!==Ns&&Vu(m,Ln(),D),jc}function Lc(t){const e=ln(),n=Sl(e,t);return n!==Ns&&Vu(e,Ln(),n),Lc}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Vc(t,e,n){_c(Yr,mc,kl(ln(),t,e,n),!0)}function Hc(t,e,n,r,o){_c(Yr,mc,Il(ln(),t,e,n,r,o),!0)}function $c(t,e,n,r,o,i,s){_c(Yr,mc,Tl(ln(),t,e,n,r,o,i,s),!0)}function Uc(t,e,n,r,o,i,s,u,l){_c(Yr,mc,Ol(ln(),t,e,n,r,o,i,s,u,l),!0)}function zc(t,e,n,r,o,i,s,u,l,a,c){_c(Yr,mc,Ml(ln(),t,e,n,r,o,i,s,u,l,a,c),!0)}function Zc(t,e,n,r,o,i,s,u,l,a,c,f,h){_c(Yr,mc,Pl(ln(),t,e,n,r,o,i,s,u,l,a,c,f,h),!0)}function Gc(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p){_c(Yr,mc,Bl(ln(),t,e,n,r,o,i,s,u,l,a,c,f,h,d,p),!0)}function Wc(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g){_c(Yr,mc,Nl(ln(),t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g),!0)}function qc(t){_c(Yr,mc,Sl(ln(),t),!0)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Yc(t,e,n){pc(kl(ln(),t,e,n))}function Kc(t,e,n,r,o){pc(Il(ln(),t,e,n,r,o))}function Qc(t,e,n,r,o,i,s){pc(Tl(ln(),t,e,n,r,o,i,s))}function Jc(t,e,n,r,o,i,s,u,l){pc(Ol(ln(),t,e,n,r,o,i,s,u,l))}function Xc(t,e,n,r,o,i,s,u,l,a,c){pc(Ml(ln(),t,e,n,r,o,i,s,u,l,a,c))}function tf(t,e,n,r,o,i,s,u,l,a,c,f,h){pc(Pl(ln(),t,e,n,r,o,i,s,u,l,a,c,f,h))}function ef(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p){pc(Bl(ln(),t,e,n,r,o,i,s,u,l,a,c,f,h,d,p))}function nf(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g){pc(Nl(ln(),t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g))}function rf(t){pc(Sl(ln(),t))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function of(t,e,n,r,o){return Dc(t,kl(ln(),e,n,r),o,!1),of}function sf(t,e,n,r,o,i,s){return Dc(t,Il(ln(),e,n,r,o,i),s,!1),sf}function uf(t,e,n,r,o,i,s,u,l){return Dc(t,Tl(ln(),e,n,r,o,i,s,u),l,!1),uf}function lf(t,e,n,r,o,i,s,u,l,a,c){return Dc(t,Ol(ln(),e,n,r,o,i,s,u,l,a),c,!1),lf}function af(t,e,n,r,o,i,s,u,l,a,c,f,h){return Dc(t,Ml(ln(),e,n,r,o,i,s,u,l,a,c,f),h,!1),af}function cf(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p){return Dc(t,Pl(ln(),e,n,r,o,i,s,u,l,a,c,f,h,d),p,!1),cf}function ff(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g){return Dc(t,Bl(ln(),e,n,r,o,i,s,u,l,a,c,f,h,d,p,y),g,!1),ff}function hf(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g,m,D){return Dc(t,Nl(ln(),e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g,m),D,!1),hf}function df(t,e,n){return Dc(t,Sl(ln(),e),n,!1),df}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function pf(t,e,n){const r=ln();if(bl(r,Cn(),e)){fu(an(),Hn(),r,t,e,r[11],n,!0)}return pf}function yf(t,e,n){const r=ln();if(bl(r,Cn(),e)){const o=an(),i=Hn();fu(o,i,r,t,e,Ru(xn(o.data),i,r),n,!0)}return yf}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */"undefined"==typeof ngI18nClosureMode&&(Qt.ngI18nClosureMode="undefined"!=typeof goog&&"function"==typeof goog.getMsg);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const gf=void 0;var mf=["en",[["a","p"],["AM","PM"],gf],[["AM","PM"],gf,gf],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],gf,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],gf,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",gf,"{1} 'at' {0}",gf],[".",",",";","%","+","-","E","×","‰","∞","NaN",":"],["#,##0.###","#,##0%","¤#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(t){const e=Math.floor(Math.abs(t)),n=t.toString().replace(/^[^.]*\.?/,"").length;return 1===e&&0===n?1:5}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Df={};function _f(t){const e=function(t){return t.toLowerCase().replace(/_/g,"-")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t);let n=wf(e);if(n)return n;const r=e.split("-")[0];if(n=wf(r),n)return n;if("en"===r)return mf;throw new Error(`Missing locale data for the locale "${t}".`)}function vf(t){return _f(t)[Cf.PluralCase]}function wf(t){return t in Df||(Df[t]=Qt.ng&&Qt.ng.common&&Qt.ng.common.locales&&Qt.ng.common.locales[t]),Df[t]}var Cf;!function(t){t[t.LocaleId=0]="LocaleId",t[t.DayPeriodsFormat=1]="DayPeriodsFormat",t[t.DayPeriodsStandalone=2]="DayPeriodsStandalone",t[t.DaysFormat=3]="DaysFormat",t[t.DaysStandalone=4]="DaysStandalone",t[t.MonthsFormat=5]="MonthsFormat",t[t.MonthsStandalone=6]="MonthsStandalone",t[t.Eras=7]="Eras",t[t.FirstDayOfWeek=8]="FirstDayOfWeek",t[t.WeekendRange=9]="WeekendRange",t[t.DateFormat=10]="DateFormat",t[t.TimeFormat=11]="TimeFormat",t[t.DateTimeFormat=12]="DateTimeFormat",t[t.NumberSymbols=13]="NumberSymbols",t[t.NumberFormats=14]="NumberFormats",t[t.CurrencyCode=15]="CurrencyCode",t[t.CurrencySymbol=16]="CurrencySymbol",t[t.CurrencyName=17]="CurrencyName",t[t.Currencies=18]="Currencies",t[t.Directionality=19]="Directionality",t[t.PluralCase=20]="PluralCase",t[t.ExtraData=21]="ExtraData"}(Cf||(Cf={}));const bf=["zero","one","two","few","many"];const Ef="en-US",Ff={marker:"element"},Af={marker:"ICU"};var xf;!function(t){t[t.SHIFT=2]="SHIFT",t[t.APPEND_EAGERLY=1]="APPEND_EAGERLY",t[t.COMMENT=2]="COMMENT"}(xf||(xf={}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let Sf=Ef;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function kf(t,e,n){const r=e.insertBeforeIndex,o=Array.isArray(r)?r[0]:r;return null===o?cs(t,0,n):Ge(n[o])}function If(t,e,n,r,o){const i=e.insertBeforeIndex;if(Array.isArray(i)){let s=r,u=null;if(3&e.type||(u=s,s=o),null!==s&&0==(2&e.flags))for(let e=1;e<i.length;e++){is(t,s,n[i[e]],u,!1)}}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Tf(t,e){if(t.push(e),t.length>1)for(let n=t.length-2;n>=0;n--){const r=t[n];Of(r)||Mf(r,e)&&null===Pf(r)&&Bf(r,e.index)}}function Of(t){return!(64&t.type)}function Mf(t,e){return Of(e)||t.index>e.index}function Pf(t){const e=t.insertBeforeIndex;return Array.isArray(e)?e[0]:e}function Bf(t,e){const n=t.insertBeforeIndex;Array.isArray(n)?n[0]=e:(ds(kf,If),t.insertBeforeIndex=e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Nf(t,e){const n=t.data[e];if(null===n||"string"==typeof n)return null;return n.hasOwnProperty("currentCaseLViewIndex")?n:n.value}function Rf(t,e,n){const r=Qs(t,n,64,null,null);return Tf(e,r),r}function jf(t,e){const n=e[t.currentCaseLViewIndex];return null===n?n:n<0?~n:n}function Lf(t){return t>>>17}function Vf(t){return(131070&t)>>>1}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let Hf=0,$f=0;function Uf(t,e,n,r){const o=n[11];let i,s=null;for(let u=0;u<e.length;u++){const l=e[u];if("string"==typeof l){const t=e[++u];null===n[t]&&(n[t]=qi(o,l))}else if("number"==typeof l)switch(1&l){case 0:const a=Lf(l);let c,f;if(null===s&&(s=a,i=ls(o,r)),a===s?(c=r,f=i):(c=null,f=Ge(n[a])),null!==f){const e=Vf(l);is(o,f,n[e],c,!1);const r=Nf(t,e);if(null!==r&&"object"==typeof r){const e=jf(r,n);null!==e&&Uf(t,r.create[e],n,n[r.anchorIdx])}}break;case 1:const h=l>>>1,d=e[++u],p=e[++u];wu(o,We(h,n),null,null,d,p,null);break;default:throw new Error(`Unable to determine the type of mutate operation for "${l}"`)}else switch(l){case Af:const t=e[++u],r=e[++u];if(null===n[r]){Ai(n[r]=Ki(o,t),n)}break;case Ff:const i=e[++u],s=e[++u];if(null===n[s]){Ai(n[s]=Qi(o,i,null),n)}}}}function zf(t,e,n,r,o){for(let i=0;i<n.length;i++){const s=n[i],u=n[++i];if(s&o){let o="";for(let s=i+1;s<=i+u;s++){const i=n[s];if("string"==typeof i)o+=i;else if("number"==typeof i)if(i<0)o+=Et(e[r-i]);else{const u=i>>>2;switch(3&i){case 1:const i=n[++s],l=n[++s],a=t.data[u];"string"==typeof a?wu(e[11],e[u],null,a,i,o,l):fu(t,a,e,i,o,e[11],l,!1);break;case 0:const c=e[u];null!==c&&Yi(e[11],c,o);break;case 2:Gf(t,Nf(t,u),e,o);break;case 3:Zf(t,Nf(t,u),r,e)}}}}else{const o=n[i+1];if(o>0&&3==(3&o)){const n=Nf(t,o>>>2);e[n.currentCaseLViewIndex]<0&&Zf(t,n,r,e)}}i+=u}}function Zf(t,e,n,r){let o=r[e.currentCaseLViewIndex];if(null!==o){let i=Hf;o<0&&(o=r[e.currentCaseLViewIndex]=~o,i=-1),zf(t,r,e.update[o],n,i)}}function Gf(t,e,n,r){const o=function(t,e){let n=t.cases.indexOf(e);if(-1===n)switch(t.type){case 1:{const r=function(t,e){const n=vf(e)(parseInt(t,10)),r=bf[n];return void 0!==r?r:"other"}(e,Sf);n=t.cases.indexOf(r),-1===n&&"other"!==r&&(n=t.cases.indexOf("other"));break}case 0:n=t.cases.indexOf("other")}return-1===n?null:n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(e,r);if(jf(e,n)!==o&&(Wf(t,e,n),n[e.currentCaseLViewIndex]=null===o?null:~o,null!==o)){const r=n[e.anchorIdx];r&&Uf(t,e.create[o],n,r)}}function Wf(t,e,n){let r=jf(e,n);if(null!==r){const o=e.remove[r];for(let e=0;e<o.length;e++){const r=o[e];if(r>0){const t=We(r,n);null!==t&&Ds(n[11],t)}else Wf(t,Nf(t,~r),n)}}}function qf(){const t=[];let e,n,r=-1;function o(t,e){r=0;const o=jf(t,e);n=null!==o?t.remove[o]:Xt}function i(){if(r<n.length){const s=n[r++];if(s>0){return e[s]}{t.push(r,n);const u=~s;return o(e[1].data[u],e),i()}}return 0===t.length?null:(n=t.pop(),r=t.pop(),i())}return function(n,r){for(e=r;t.length;)t.pop();return o(n.value,r),i}}
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
const Yf=/�(\d+):?\d*�/gi,Kf=/({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi,Qf=/�(\d+)�/,Jf=/^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/,Xf=/�\/?\*(\d+:\d+)�/gi,th=/�(\/?[#*]\d+):?\d*�/gi,eh=/\uE500/g;function nh(t,e,n,r,o,i){const s=dn(),u=[],l=[],a=[[]];o=function(t,e){if(function(t){return-1===t}(e))return lh(t);{const n=t.indexOf(`:${e}�`)+2+e.toString().length,r=t.search(new RegExp(`�\\/\\*\\d+:${e}�`));return lh(t.substring(n,r))}}(o,i);const c=(f=o,f.replace(eh," ")).split(th);var f;for(let r=0;r<c.length;r++){let i=c[r];if(0==(1&r)){const r=fh(i);for(let i=0;i<r.length;i++){let c=r[i];if(0==(1&i)){const e=c;""!==e&&oh(t,s,a[0],u,l,n,e)}else{const r=c;if("object"!=typeof r)throw new Error(`Unable to parse ICU expression in "${o}" message.`);ah(t,n,l,e,r,rh(t,s,a[0],n,u,"",!0).index)}}}else{const e=47===i.charCodeAt(0),n=(i.charCodeAt(e?1:0),Ce+Number.parseInt(i.substring(e?2:1)));if(e)a.shift(),pn(dn(),!1);else{const e=Rf(t,a[0],n);a.unshift([]),pn(e,!0)}}}t.data[r]={create:u,update:l}}function rh(t,e,n,r,o,i,s){const u=Js(t,r,1,null);let l=u<<xf.SHIFT,a=dn();var c;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */e===a&&(a=null),null===a&&(l|=xf.APPEND_EAGERLY),s&&(l|=xf.COMMENT,c=qf,void 0===Hi&&(Hi=c())),o.push(l,null===i?"":i);const f=Qs(t,u,s?32:1,null===i?"":i,null);Tf(n,f);const h=f.index;return pn(f,!1),null!==a&&e!==a&&function(t,e){let n=t.insertBeforeIndex;null===n?(ds(kf,If),n=t.insertBeforeIndex=[null,e]):(xt(Array.isArray(n),!0,"Expecting array here"),n.push(e))}(a,h),f}function oh(t,e,n,r,o,i,s){const u=s.match(Yf),l=rh(t,e,n,i,r,u?null:s,!1);u&&ih(o,s,l.index,null,0,null)}function ih(t,e,n,r,o,i){const s=t.length,u=s+1;t.push(null,null);const l=s+2;const a=e.split(Yf);let c=0;for(let e=0;e<a.length;e++){const n=a[e];if(1&e){const e=o+parseInt(n,10);t.push(-1-e),c|=uh(e)}else""!==n&&t.push(n)}return t.push(n<<2|(r?1:0)),r&&t.push(r,i),t[s]=c,t[u]=t.length-l,c}function sh(t){let e=0;for(let n=0;n<t.length;n++){const r=t[n];"number"==typeof r&&r<0&&e++}return e}function uh(t){return 1<<Math.min(t,31)}function lh(t){let e,n,r="",o=0,i=!1;for(;null!==(e=Xf.exec(t));)i?e[0]===`�/*${n}�`&&(o=e.index,i=!1):(r+=t.substring(o,e.index+e[0].length),n=e[1],i=!0);return r+=t.substr(o),r}function ah(t,e,n,r,o,i){let s=0;const u={type:o.type,currentCaseLViewIndex:Js(t,e,1,null),anchorIdx:i,cases:[],create:[],remove:[],update:[]};!function(t,e,n){t.push(uh(e.mainBinding),2,-1-e.mainBinding,n<<2|2)}(n,o,i),function(t,e,n){const r=t.data[e];null===r?t.data[e]=n:r.value=n}(t,i,u);const l=o.values;for(let i=0;i<l.length;i++){const a=l[i],c=[];for(let t=0;t<a.length;t++){const e=a[t];if("string"!=typeof e){const n=c.push(e)-1;a[t]=`\x3c!--�${n}�--\x3e`}}s=hh(t,u,e,n,r,o.cases[i],a.join(""),c)|s}s&&function(t,e,n){t.push(e,1,n<<2|3)}(n,s,i)}function ch(t){const e=[],n=[];let r=1,o=0;const i=fh(t=t.replace(Jf,(function(t,e,n){return r="select"===n?0:1,o=parseInt(e.substr(1),10),""})));for(let t=0;t<i.length;){let o=i[t++].trim();1===r&&(o=o.replace(/\s*(?:=)?(\w+)\s*/,"$1")),o.length&&e.push(o);const s=fh(i[t++]);e.length>n.length&&n.push(s)}return{type:r,mainBinding:o,cases:e,values:n}}function fh(t){if(!t)return[];let e=0;const n=[],r=[],o=/[{}]/g;let i;for(o.lastIndex=0;i=o.exec(t);){const o=i.index;if("}"==i[0]){if(n.pop(),0==n.length){const n=t.substring(e,o);Jf.test(n)?r.push(ch(n)):r.push(n),e=o+1}}else{if(0==n.length){const n=t.substring(e,o);r.push(n),e=o+1}n.push("{")}}const s=t.substring(e);return r.push(s),r}function hh(t,e,n,r,o,i,s,u){const l=[],a=[],c=[];e.cases.push(i),e.create.push(l),e.remove.push(a),e.update.push(c);const f=$o($e()).getInertBodyElement(s),h=yi(f)||f;return h?dh(t,e,n,r,l,a,c,h,o,u,0):0}function dh(t,e,n,r,o,i,s,u,l,a,c){let f=0,h=u.firstChild;for(;h;){const u=Js(t,n,1,null);switch(h.nodeType){case Node.ELEMENT_NODE:const d=h,p=d.tagName.toLowerCase();if(ri.hasOwnProperty(p)){gh(o,Ff,p,l,u),t.data[u]=p;const y=d.attributes;for(let t=0;t<y.length;t++){const e=y.item(t),n=e.name.toLowerCase();!!e.value.match(Yf)?li.hasOwnProperty(n)&&(oi[n]?ih(s,e.value,u,e.name,0,Wo):ii[n]?ih(s,e.value,u,e.name,0,qo):ih(s,e.value,u,e.name,0,null)):mh(o,u,e)}f=dh(t,e,n,r,o,i,s,h,u,a,c+1)|f,ph(i,u,c)}break;case Node.TEXT_NODE:const y=h.textContent||"",g=y.match(Yf);gh(o,null,g?"":y,l,u),ph(i,u,c),g&&(f=ih(s,y,u,null,0,null)|f);break;case Node.COMMENT_NODE:const m=Qf.exec(h.textContent||"");if(m){const e=a[parseInt(m[1],10)];gh(o,Af,"",l,u),ah(t,n,r,l,e,u),yh(i,u,c)}}h=h.nextSibling}return f}function ph(t,e,n){0===n&&t.push(e)}function yh(t,e,n){0===n&&(t.push(~e),t.push(e))}function gh(t,e,n,r,o){null!==e&&t.push(e),t.push(n,o,0|r<<17|o<<1)}function mh(t,e,n){t.push(e<<1|1,n.name,n.value)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Dh=/\[(�.+?�?)\]/,_h=/\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g,vh=/({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g,wh=/{([A-Z0-9_]+)}/g,Ch=/�I18N_EXP_(ICU(_\d+)?)�/g,bh=/\/\*/,Eh=/\d+\:(\d+)/;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Fh(t,e,n=-1){const r=an(),o=ln(),i=Ce+t,s=tn(r.consts,e),u=dn();r.firstCreatePass&&nh(r,null===u?0:u.index,o,i,s,n);const l=r.data[i],a=os(r,u===o[6]?null:u,o),c=u&&8&u.type?o[u.index]:null;!function(t,e,n,r){const o=t[11];for(let i=0;i<e.length;i++){const s=e[i++],u=e[i],l=(s&xf.COMMENT)===xf.COMMENT,a=(s&xf.APPEND_EAGERLY)===xf.APPEND_EAGERLY,c=s>>>xf.SHIFT;let f=t[c];null===f&&(f=t[c]=l?o.createComment(u):qi(o,u)),a&&null!==n&&is(o,n,f,r,!1)}}(o,l.create,a,c),En(!0)}function Ah(){En(!1)}function xh(t,e,n){Fh(t,e,n),Ah()}function Sh(t,e){const n=an(),r=tn(n.consts,e);!function(t,e,n){const r=fn().index,o=[];if(t.firstCreatePass&&null===t.data[e]){for(let t=0;t<n.length;t+=2){const e=n[t],i=n[t+1];if(""!==i){if(Kf.test(i))throw new Error(`ICU expressions are not supported in attributes. Message: "${i}".`);ih(o,i,r,e,sh(o),null)}}t.data[e]=o}}(n,t+Ce,r)}function kh(t){const e=ln();return bl(e,Cn(),t)&&(Hf|=1<<Math.min($f,31)),$f++,kh}function Ih(t){!function(t,e,n){if($f>0){const r=t.data[n];zf(t,e,Array.isArray(r)?r:r.update,vn()-$f-1,Hf)}Hf=0,$f=0}(an(),ln(),t+Ce)}function Th(t,e={}){return function(t,e={}){let n=t;if(Dh.test(t)){const t={},e=[0];n=n.replace(_h,((n,r,o)=>{const i=r||o,s=t[i]||[];if(s.length||(i.split("|").forEach((t=>{const e=t.match(Eh),n=e?parseInt(e[1],10):0,r=bh.test(t);s.push([n,r,t])})),t[i]=s),!s.length)throw new Error(`i18n postprocess: unmatched placeholder - ${i}`);const u=e[e.length-1];let l=0;for(let t=0;t<s.length;t++)if(s[t][0]===u){l=t;break}const[a,c,f]=s[l];return c?e.pop():u!==a&&e.push(a),s.splice(l,1),f}))}return Object.keys(e).length?(n=n.replace(vh,((t,n,r,o,i,s)=>e.hasOwnProperty(r)?`${n}${e[r]}${s}`:t)),n=n.replace(wh,((t,n)=>e.hasOwnProperty(n)?e[n]:t)),n=n.replace(Ch,((t,n)=>{if(e.hasOwnProperty(n)){const r=e[n];if(!r.length)throw new Error(`i18n postprocess: unmatched ICU - ${t} with key: ${n}`);return r.shift()}return t})),n):n}(t,e)}
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
 */function Oh(t,e,n,r,o){if(t=vt(t),Array.isArray(t))for(let i=0;i<t.length;i++)Oh(t[i],e,n,r,o);else{const i=an(),s=ln();let u=nl(t)?t:vt(t.provide),l=Xu(t);const a=fn(),c=1048575&a.providerIndexes,f=a.directiveStart,h=a.providerIndexes>>20;if(nl(t)||!t.multi){const r=new Jn(l,o,wa),d=Bh(u,e,o?c:c+h,f);-1===d?(pr(cr(a,s),i,u),Mh(i,t,e.length),e.push(u),a.directiveStart++,a.directiveEnd++,o&&(a.providerIndexes+=1048576),n.push(r),s.push(r)):(n[d]=r,s[d]=r)}else{const d=Bh(u,e,c+h,f),p=Bh(u,e,c,c+h),y=d>=0&&n[d],g=p>=0&&n[p];if(o&&!g||!o&&!y){pr(cr(a,s),i,u);const c=function(t,e,n,r,o){const i=new Jn(t,n,wa);return i.multi=[],i.index=e,i.componentProviders=0,Ph(i,o,r&&!n),i}(o?Rh:Nh,n.length,o,r,l);!o&&g&&(n[p].providerFactory=c),Mh(i,t,e.length,0),e.push(u),a.directiveStart++,a.directiveEnd++,o&&(a.providerIndexes+=1048576),n.push(c),s.push(c)}else{Mh(i,t,d>-1?d:p,Ph(n[o?p:d],l,!o&&r))}!o&&r&&g&&n[p].componentProviders++}}}function Mh(t,e,n,r){const o=nl(e),i=!!e.useClass;if(o||i){const s=(i?vt(e.useClass):e).prototype.ngOnDestroy;if(s){const i=t.destroyHooks||(t.destroyHooks=[]);if(!o&&e.multi){const t=i.indexOf(n);-1===t?i.push(n,[r,s]):i[t+1].push(r,s)}else i.push(n,s)}}}function Ph(t,e,n){return n&&t.componentProviders++,t.multi.push(e)-1}function Bh(t,e,n,r){for(let o=n;o<r;o++)if(e[o]===t)return o;return-1}function Nh(t,e,n,r){return jh(this.multi,[])}function Rh(t,e,n,r){const o=this.multi;let i;if(this.providerFactory){const t=this.providerFactory.componentProviders,e=Cr(n,n[1],this.providerFactory.index,r);i=e.slice(0,t),jh(o,i);for(let n=t;n<e.length;n++)i.push(e[n])}else i=[],jh(o,i);return i}function jh(t,e){for(let n=0;n<t.length;n++){const r=t[n];e.push(r())}return e}function Lh(t,e=[]){return n=>{n.providersResolver=(n,r)=>function(t,e,n){const r=an();if(r.firstCreatePass){const o=ke(t);Oh(n,r.data,r.blueprint,o,!0),Oh(e,r.data,r.blueprint,o,!1)}}(n,r?r(t):t,e)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Vh{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Hh="ngComponent";class $h{resolveComponentFactory(t){throw function(t){const e=Error(`No component factory found for ${gt(t)}. Did you add it to @NgModule.entryComponents?`);return e[Hh]=t,e}(t)}}class Uh{}function zh(t,e){return new Zh(qe(t,e))}Uh.NULL=new $h;class Zh{constructor(t){this.nativeElement=t}}function Gh(t){return t instanceof Zh?t.nativeElement:t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */Zh.__NG_ELEMENT_ID__=
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){return zh(fn(),ln())};new Rr("Renderer2Interceptor");class Wh{}class qh{}qh.__NG_ELEMENT_ID__=()=>function(){const t=ln(),e=Qe(fn().index,t);return function(t){0;return t[11]}(Ee(e)?e:t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */();class Yh{}Yh.ɵprov=It({token:Yh,providedIn:"root",factory:()=>null});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Kh{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const Qh=new Kh("13.1.1"),Jh={};
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
function Xh(t,e,n,r,o=!1){for(;null!==n;){const i=e[n.index];if(null!==i&&r.push(Ge(i)),Fe(i))for(let t=be;t<i.length;t++){const e=i[t],n=e[1].firstChild;null!==n&&Xh(e[1],e,n,r)}const s=n.type;if(8&s)Xh(t,e,n.child,r);else if(32&s){const t=$i(n,e);let o;for(;o=t();)r.push(o)}else if(16&s){const t=gs(e,n);if(Array.isArray(t))r.push(...t);else{const n=Ui(e[16]);Xh(n[1],n,t,r,!0)}}n=o?n.projectionNext:n.next}return r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class td{constructor(t,e){this._lView=t,this._cdRefInjectingView=e,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,e=t[1];return Xh(e,t,e.firstChild,[])}get context(){return this._lView[8]}set context(t){this._lView[8]=t}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(Fe(t)){const e=t[8],n=e?e.indexOf(this):-1;n>-1&&(ts(t,n),Wr(e,n))}this._attachedToViewContainer=!1}es(this._lView[1],this._lView)}onDestroy(t){au(this._lView[1],this._lView,null,t)}markForCheck(){ku(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){Tu(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(t,e,n){Dn(!0);try{Tu(t,e,n)}finally{Dn(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._attachedToViewContainer=!0}detachFromAppRef(){var t,e;this._appRef=null,t=this._lView[1],e=this._lView,vs(t,e,e[11],2,null,null)}attachToAppRef(t){if(this._attachedToViewContainer)throw new Error("This view is already attached to a ViewContainer!");this._appRef=t}}class ed extends td{constructor(t){super(t),this._view=t}detectChanges(){Ou(this._view)}checkNoChanges(){!function(t){Dn(!0);try{Ou(t)}finally{Dn(!1)}}(this._view)}get context(){return null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class nd extends Uh{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const e=me(t);return new id(e,this.ngModule)}}function rd(t){const e=[];for(let n in t)if(t.hasOwnProperty(n)){const r=t[n];e.push({propName:r,templateName:n})}return e}const od=new Rr("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>Bi});class id extends Vh{constructor(t,e){super(),this.componentDef=t,this.ngModule=e,this.componentType=t.type,this.selector=t.selectors.map(Bs).join(","),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!e}get inputs(){return rd(this.componentDef.inputs)}get outputs(){return rd(this.componentDef.outputs)}create(t,e,n,r){const o=(r=r||this.ngModule)?function(t,e){return{get:(n,r,o)=>{const i=t.get(n,Jh,o);return i!==Jh||r===Jh?i:e.get(n,r,o)}}}(t,r.injector):t,i=o.get(Wh,Ze),s=o.get(Yh,null),u=i.createRenderer(null,this.componentDef),l=this.componentDef.selectors[0][0]||"div",a=n?lu(u,n,this.componentDef.encapsulation):Qi(i.createRenderer(null,this.componentDef),l,function(t){const e=t.toLowerCase();return"svg"===e?Le:"math"===e?Ve:null}(l)),c=this.componentDef.onPush?576:528,f=sl(),h=uu(0,null,null,1,0,null,null,null,null,null),d=Ys(null,h,f,c,null,null,i,u,s,o);let p,y;On(d);try{const t=ol(a,this.componentDef,d,i,u);if(a)if(n)Xn(u,a,["ng-version",Qh.full]);else{const{attrs:t,classes:e}=function(t){const e=[],n=[];let r=1,o=2;for(;r<t.length;){let i=t[r];if("string"==typeof i)2===o?""!==i&&e.push(i,t[++r]):8===o&&n.push(i);else{if(!Is(o))break;o=i}r++}return{attrs:e,classes:n}}(this.componentDef.selectors[0]);t&&Xn(u,a,t),e&&e.length>0&&bs(u,a,e.join(" "))}if(y=Ye(h,Ce),void 0!==e){const t=y.projection=[];for(let n=0;n<this.ngContentSelectors.length;n++){const r=e[n];t.push(null!=r?Array.from(r):null)}}p=il(t,this.componentDef,d,f,[ul]),Xs(h,d,null)}finally{Rn()}return new sd(this.componentType,p,zh(y,d),d,y)}}new nd;class sd extends class{}{constructor(t,e,n,r,o){super(),this.location=n,this._rootLView=r,this._tNode=o,this.instance=e,this.hostView=this.changeDetectorRef=new ed(r),this.componentType=t}get injector(){return new Fr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}
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
class ud{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const ld=new Map;function ad(t,e,n){if(e&&e!==n)throw new Error(`Duplicate module registered for ${t} - ${gt(e)} vs ${gt(e.name)}`)}class cd extends ud{constructor(t,e){super(),this._parent=e,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new nd(this);const n=ve(t);this._bootstrapComponents=Li(n.bootstrap),this._r3Injector=Ku(t,e,[{provide:ud,useValue:this},{provide:Uh,useValue:this.componentFactoryResolver}],gt(t)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(t)}get(t,e=rl.THROW_IF_NOT_FOUND,n=Lt.Default){return t===rl||t===ud||t===$u?this:this._r3Injector.get(t,e,n)}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach((t=>t())),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class fd extends class{}{constructor(t){super(),this.moduleType=t;null!==ve(t)&&function(t){const e=new Set;!function t(n){const r=ve(n,!0),o=r.id;if(null!==o){ad(o,ld.get(o),n),ld.set(o,n)}const i=Li(r.imports);for(const n of i)e.has(n)||(e.add(n),t(n))}(t)}(t)}create(t){return new cd(this.moduleType,t)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function hd(t,e,n){const r=_n()+t,o=ln();return o[r]===Ns?wl(o,r,n?e.call(n):e()):Cl(o,r)}function dd(t,e,n,r){return bd(ln(),_n(),t,e,n,r)}function pd(t,e,n,r,o){return Ed(ln(),_n(),t,e,n,r,o)}function yd(t,e,n,r,o,i){return Fd(ln(),_n(),t,e,n,r,o,i)}function gd(t,e,n,r,o,i,s){return Ad(ln(),_n(),t,e,n,r,o,i,s)}function md(t,e,n,r,o,i,s,u){const l=_n()+t,a=ln(),c=Al(a,l,n,r,o,i);return bl(a,l+4,s)||c?wl(a,l+5,u?e.call(u,n,r,o,i,s):e(n,r,o,i,s)):Cl(a,l+5)}function Dd(t,e,n,r,o,i,s,u,l){const a=_n()+t,c=ln(),f=Al(c,a,n,r,o,i);return El(c,a+4,s,u)||f?wl(c,a+6,l?e.call(l,n,r,o,i,s,u):e(n,r,o,i,s,u)):Cl(c,a+6)}function _d(t,e,n,r,o,i,s,u,l,a){const c=_n()+t,f=ln();let h=Al(f,c,n,r,o,i);return Fl(f,c+4,s,u,l)||h?wl(f,c+7,a?e.call(a,n,r,o,i,s,u,l):e(n,r,o,i,s,u,l)):Cl(f,c+7)}function vd(t,e,n,r,o,i,s,u,l,a,c){const f=_n()+t,h=ln(),d=Al(h,f,n,r,o,i);return Al(h,f+4,s,u,l,a)||d?wl(h,f+8,c?e.call(c,n,r,o,i,s,u,l,a):e(n,r,o,i,s,u,l,a)):Cl(h,f+8)}function wd(t,e,n,r){return xd(ln(),_n(),t,e,n,r)}function Cd(t,e){const n=t[e];return n===Ns?void 0:n}function bd(t,e,n,r,o,i){const s=e+n;return bl(t,s,o)?wl(t,s+1,i?r.call(i,o):r(o)):Cd(t,s+1)}function Ed(t,e,n,r,o,i,s){const u=e+n;return El(t,u,o,i)?wl(t,u+2,s?r.call(s,o,i):r(o,i)):Cd(t,u+2)}function Fd(t,e,n,r,o,i,s,u){const l=e+n;return Fl(t,l,o,i,s)?wl(t,l+3,u?r.call(u,o,i,s):r(o,i,s)):Cd(t,l+3)}function Ad(t,e,n,r,o,i,s,u,l){const a=e+n;return Al(t,a,o,i,s,u)?wl(t,a+4,l?r.call(l,o,i,s,u):r(o,i,s,u)):Cd(t,a+4)}function xd(t,e,n,r,o,i){let s=e+n,u=!1;for(let e=0;e<o.length;e++)bl(t,s++,o[e])&&(u=!0);return u?wl(t,s,r.apply(i,o)):Cd(t,s)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Sd(t,e){const n=an();let r;const o=t+Ce;n.firstCreatePass?(r=function(t,e){if(e)for(let n=e.length-1;n>=0;n--){const r=e[n];if(t===r.name)return r}0}(e,n.pipeRegistry),n.data[o]=r,r.onDestroy&&(n.destroyHooks||(n.destroyHooks=[])).push(o,r.onDestroy)):r=n.data[o];const i=r.factory||(r.factory=Ie(r.type)),s=Ht(wa);try{const t=lr(!1),e=i();return lr(t),function(t,e,n,r){n>=t.data.length&&(t.data[n]=null,t.blueprint[n]=null),e[n]=r}(n,ln(),o,e),e}finally{Ht(s)}}function kd(t,e,n){const r=t+Ce,o=ln(),i=Ke(o,r);return Pd(o,r)?bd(o,_n(),e,i.transform,n,i):i.transform(n)}function Id(t,e,n,r){const o=t+Ce,i=ln(),s=Ke(i,o);return Pd(i,o)?Ed(i,_n(),e,s.transform,n,r,s):s.transform(n,r)}function Td(t,e,n,r,o){const i=t+Ce,s=ln(),u=Ke(s,i);return Pd(s,i)?Fd(s,_n(),e,u.transform,n,r,o,u):u.transform(n,r,o)}function Od(t,e,n,r,o,i){const s=t+Ce,u=ln(),l=Ke(u,s);return Pd(u,s)?Ad(u,_n(),e,l.transform,n,r,o,i,l):l.transform(n,r,o,i)}function Md(t,e,n){const r=t+Ce,o=ln(),i=Ke(o,r);return Pd(o,r)?xd(o,_n(),e,i.transform,n,i):i.transform.apply(i,n)}function Pd(t,e){return t[1].data[e].pure}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Bd(t){return e=>{setTimeout(t,void 0,e)}}const Nd=class extends L{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,e,n){let r=t,o=e||(()=>null),i=n;if(t&&"object"==typeof t){const e=t;r=e.next?.bind(e),o=e.error?.bind(e),i=e.complete?.bind(e)}this.__isAsync&&(o=Bd(o),r&&(r=Bd(r)),i&&(i=Bd(i)));const s=super.subscribe({next:r,error:o,complete:i});return t instanceof p&&t.add(s),s}};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Rd(){return this._results[Dl()]()}class jd{constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const e=Dl(),n=jd.prototype;n[e]||(n[e]=Rd)}get changes(){return this._changes||(this._changes=new Nd)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,e){return this._results.reduce(t,e)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,e){const n=this;n.dirty=!1;const r=zr(t);(this._changesDetected=!function(t,e,n){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++){let o=t[r],i=e[r];if(n&&(o=n(o),i=n(i)),i!==o)return!1}return!0}(n._results,r,e))&&(n._results=r,n.length=r.length,n.last=r[this.length-1],n.first=r[0])}notifyOnChanges(){!this._changes||!this._changesDetected&&this._emitDistinctChangesOnly||this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}Symbol.iterator;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Ld{}Ld.__NG_ELEMENT_ID__=function(){return $d(fn(),ln())};const Vd=Ld,Hd=class extends Vd{constructor(t,e,n){super(),this._declarationLView=t,this._declarationTContainer=e,this.elementRef=n}createEmbeddedView(t){const e=this._declarationTContainer.tViews,n=Ys(this._declarationLView,e,t,16,null,e.declTNode,null,null,null,null),r=this._declarationLView[this._declarationTContainer.index];n[17]=r;const o=this._declarationLView[19];return null!==o&&(n[19]=o.createEmbeddedView(e)),Xs(e,n,t),new td(n)}};function $d(t,e){return 4&t.type?new Hd(e,t,zh(t,e)):null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ud{}Ud.__NG_ELEMENT_ID__=function(){return qd(fn(),ln())};const zd=Ud,Zd=class extends zd{constructor(t,e,n){super(),this._lContainer=t,this._hostTNode=e,this._hostLView=n}get element(){return zh(this._hostTNode,this._hostLView)}get injector(){return new Fr(this._hostTNode,this._hostLView)}get parentInjector(){const t=dr(this._hostTNode,this._hostLView);if(or(t)){const e=sr(t,this._hostLView),n=ir(t),r=e[1].data[n+8];return new Fr(r,e)}return new Fr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const e=Gd(this._lContainer);return null!==e&&e[t]||null}get length(){return this._lContainer.length-be}createEmbeddedView(t,e,n){const r=t.createEmbeddedView(e||{});return this.insert(r,n),r}createComponent(t,e,n,r,o){const i=t&&!Ur(t);let s;if(i)s=e;else{0;const t=e||{};s=t.index,n=t.injector,r=t.projectableNodes,o=t.ngModuleRef}const u=i?t:new id(me(t)),l=n||this.parentInjector;if(!o&&null==u.ngModule&&l){const t=l.get(ud,null);t&&(o=t)}const a=u.create(l,r,void 0,o);return this.insert(a.hostView,s),a}insert(t,e){const n=t._lView,r=n[1];if(Fe(n[3])){const e=this.indexOf(t);if(-1!==e)this.detach(e);else{const e=n[3],r=new Zd(e,e[6],e[3]);r.detach(r.indexOf(t))}}const o=this._adjustIndex(e),i=this._lContainer;Ji(r,n,i,o);const s=ms(o,i),u=n[11],l=ls(u,i[7]);return null!==l&&function(t,e,n,r,o,i){r[0]=o,r[6]=e,vs(t,r,n,1,o,i)}(r,i[6],u,n,l,s),t.attachToViewContainerRef(),Gr(Wd(i),o,t),t}move(t,e){return this.insert(t,e)}indexOf(t){const e=Gd(this._lContainer);return null!==e?e.indexOf(t):-1}remove(t){const e=this._adjustIndex(t,-1),n=ts(this._lContainer,e);n&&(Wr(Wd(this._lContainer),e),es(n[1],n))}detach(t){const e=this._adjustIndex(t,-1),n=ts(this._lContainer,e);return n&&null!=Wr(Wd(this._lContainer),e)?new td(n):null}_adjustIndex(t,e=0){return null==t?this.length+e:t}};function Gd(t){return t[8]}function Wd(t){return t[8]||(t[8]=[])}function qd(t,e){let n;const r=e[t.index];if(Fe(r))n=r;else{let o;if(8&t.type)o=Ge(r);else{const n=e[11];o=n.createComment("");const r=qe(t,e);is(n,ls(n,r),o,function(t,e){return ze(t)?t.nextSibling(e):e.nextSibling}(n,r),!1)}e[t.index]=n=Eu(r,e,o,t),Su(e,n)}return new Zd(n,t,e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Yd{constructor(t){this.queryList=t,this.matches=null}clone(){return new Yd(this.queryList)}setDirty(){this.queryList.setDirty()}}class Kd{constructor(t=[]){this.queries=t}createEmbeddedView(t){const e=t.queries;if(null!==e){const n=null!==t.contentQueries?t.contentQueries[0]:e.length,r=[];for(let t=0;t<n;t++){const n=e.getByIndex(t),o=this.queries[n.indexInDeclarationView];r.push(o.clone())}return new Kd(r)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let e=0;e<this.queries.length;e++)null!==cp(t,e).matches&&this.queries[e].setDirty()}}class Qd{constructor(t,e,n=null){this.predicate=t,this.flags=e,this.read=n}}class Jd{constructor(t=[]){this.queries=t}elementStart(t,e){for(let n=0;n<this.queries.length;n++)this.queries[n].elementStart(t,e)}elementEnd(t){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(t)}embeddedTView(t){let e=null;for(let n=0;n<this.length;n++){const r=null!==e?e.length:0,o=this.getByIndex(n).embeddedTView(t,r);o&&(o.indexInDeclarationView=n,null!==e?e.push(o):e=[o])}return null!==e?new Jd(e):null}template(t,e){for(let n=0;n<this.queries.length;n++)this.queries[n].template(t,e)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}}class Xd{constructor(t,e=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=e}elementStart(t,e){this.isApplyingToNode(e)&&this.matchTNode(t,e)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,e){this.elementStart(t,e)}embeddedTView(t,e){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,e),new Xd(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const e=this._declarationNodeIndex;let n=t.parent;for(;null!==n&&8&n.type&&n.index!==e;)n=n.parent;return e===(null!==n?n.index:-1)}return this._appliesToNextNode}matchTNode(t,e){const n=this.metadata.predicate;if(Array.isArray(n))for(let r=0;r<n.length;r++){const o=n[r];this.matchTNodeWithReadOption(t,e,tp(e,o)),this.matchTNodeWithReadOption(t,e,wr(e,t,o,!1,!1))}else n===Ld?4&e.type&&this.matchTNodeWithReadOption(t,e,-1):this.matchTNodeWithReadOption(t,e,wr(e,t,n,!1,!1))}matchTNodeWithReadOption(t,e,n){if(null!==n){const r=this.metadata.read;if(null!==r)if(r===Zh||r===Ud||r===Ld&&4&e.type)this.addMatch(e.index,-2);else{const n=wr(e,t,r,!1,!1);null!==n&&this.addMatch(e.index,n)}else this.addMatch(e.index,n)}}addMatch(t,e){null===this.matches?this.matches=[t,e]:this.matches.push(t,e)}}function tp(t,e){const n=t.localNames;if(null!==n)for(let t=0;t<n.length;t+=2)if(n[t]===e)return n[t+1];return null}function ep(t,e,n,r){return-1===n?function(t,e){return 11&t.type?zh(t,e):4&t.type?$d(t,e):null}(e,t):-2===n?function(t,e,n){if(n===Zh)return zh(e,t);if(n===Ld)return $d(e,t);if(n===Ud)return qd(e,t)}(t,e,r):Cr(t,t[1],n,e)}function np(t,e,n,r){const o=e[19].queries[r];if(null===o.matches){const r=t.data,i=n.matches,s=[];for(let t=0;t<i.length;t+=2){const o=i[t];if(o<0)s.push(null);else{const u=r[o];s.push(ep(e,u,i[t+1],n.metadata.read))}}o.matches=s}return o.matches}function rp(t,e,n,r){const o=t.queries.getByIndex(n),i=o.matches;if(null!==i){const s=np(t,e,o,n);for(let t=0;t<i.length;t+=2){const n=i[t];if(n>0)r.push(s[t/2]);else{const o=i[t+1],s=e[-n];for(let t=be;t<s.length;t++){const e=s[t];e[17]===e[3]&&rp(e[1],e,o,r)}if(null!==s[9]){const t=s[9];for(let e=0;e<t.length;e++){const n=t[e];rp(n[1],n,o,r)}}}}}return r}function op(t){const e=ln(),n=an(),r=Sn();kn(r+1);const o=cp(n,r);if(t.dirty&&Je(e)===(2==(2&o.metadata.flags))){if(null===o.matches)t.reset([]);else{const i=o.crossesNgTemplate?rp(n,e,r,[]):np(n,e,o,r);t.reset(i,Gh),t.notifyOnChanges()}return!0}return!1}function ip(t,e,n){const r=an();r.firstCreatePass&&(ap(r,new Qd(t,e,n),-1),2==(2&e)&&(r.staticViewQueries=!0)),lp(r,ln(),e)}function sp(t,e,n,r){const o=an();if(o.firstCreatePass){const i=fn();ap(o,new Qd(e,n,r),i.index),function(t,e){const n=t.contentQueries||(t.contentQueries=[]),r=n.length?n[n.length-1]:-1;e!==r&&n.push(t.queries.length-1,e)}(o,t),2==(2&n)&&(o.staticContentQueries=!0)}lp(o,ln(),n)}function up(){return t=ln(),e=Sn(),t[19].queries[e].queryList;var t,e}function lp(t,e,n){const r=new jd(4==(4&n));au(t,e,r,r.destroy),null===e[19]&&(e[19]=new Kd),e[19].queries.push(new Yd(r))}function ap(t,e,n){null===t.queries&&(t.queries=new Jd),t.queries.track(new Xd(e,n))}function cp(t,e){return t.queries.getByIndex(e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function fp(t,e){return $d(t,e)}
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
 */const hp={ɵɵattribute:xl,ɵɵattributeInterpolate1:Rl,ɵɵattributeInterpolate2:jl,ɵɵattributeInterpolate3:Ll,ɵɵattributeInterpolate4:Vl,ɵɵattributeInterpolate5:Hl,ɵɵattributeInterpolate6:$l,ɵɵattributeInterpolate7:Ul,ɵɵattributeInterpolate8:zl,ɵɵattributeInterpolateV:Zl,ɵɵdefineComponent:ue,ɵɵdefineDirective:ye,ɵɵdefineInjectable:It,ɵɵdefineInjector:Tt,ɵɵdefineNgModule:he,ɵɵdefinePipe:ge,ɵɵdirectiveInject:wa,ɵɵgetInheritedFactory:Ar,ɵɵinject:po,ɵɵinjectAttribute:Sr,ɵɵinvalidFactory:Ca,ɵɵinvalidFactoryDep:yo,ɵɵtemplateRefExtractor:fp,ɵɵNgOnChangesFeature:Oe,ɵɵProvidersFeature:Lh,ɵɵCopyDefinitionFeature:gl,ɵɵInheritDefinitionFeature:al,ɵɵnextContext:Va,ɵɵnamespaceHTML:zn,ɵɵnamespaceMathML:Un,ɵɵnamespaceSVG:$n,ɵɵenableBindings:sn,ɵɵdisableBindings:un,ɵɵelementStart:Fa,ɵɵelementEnd:Aa,ɵɵelement:xa,ɵɵelementContainerStart:Sa,ɵɵelementContainerEnd:ka,ɵɵelementContainer:Ia,ɵɵpureFunction0:hd,ɵɵpureFunction1:dd,ɵɵpureFunction2:pd,ɵɵpureFunction3:yd,ɵɵpureFunction4:gd,ɵɵpureFunction5:md,ɵɵpureFunction6:Dd,ɵɵpureFunction7:_d,ɵɵpureFunction8:vd,ɵɵpureFunctionV:wd,ɵɵgetCurrentView:Ta,ɵɵrestoreView:cn,ɵɵlistener:Ba,ɵɵprojection:Ua,ɵɵsyntheticHostProperty:yf,ɵɵsyntheticHostListener:Na,ɵɵpipeBind1:kd,ɵɵpipeBind2:Id,ɵɵpipeBind3:Td,ɵɵpipeBind4:Od,ɵɵpipeBindV:Md,ɵɵprojectionDef:$a,ɵɵhostProperty:pf,ɵɵproperty:ba,ɵɵpropertyInterpolate:za,ɵɵpropertyInterpolate1:Za,ɵɵpropertyInterpolate2:Ga,ɵɵpropertyInterpolate3:Wa,ɵɵpropertyInterpolate4:qa,ɵɵpropertyInterpolate5:Ya,ɵɵpropertyInterpolate6:Ka,ɵɵpropertyInterpolate7:Qa,ɵɵpropertyInterpolate8:Ja,ɵɵpropertyInterpolateV:Xa,ɵɵpipe:Sd,ɵɵqueryRefresh:op,ɵɵviewQuery:ip,ɵɵloadQuery:up,ɵɵcontentQuery:sp,ɵɵreference:Wl,ɵɵclassMap:gc,ɵɵclassMapInterpolate1:Vc,ɵɵclassMapInterpolate2:Hc,ɵɵclassMapInterpolate3:$c,ɵɵclassMapInterpolate4:Uc,ɵɵclassMapInterpolate5:zc,ɵɵclassMapInterpolate6:Zc,ɵɵclassMapInterpolate7:Gc,ɵɵclassMapInterpolate8:Wc,ɵɵclassMapInterpolateV:qc,ɵɵstyleMap:pc,ɵɵstyleMapInterpolate1:Yc,ɵɵstyleMapInterpolate2:Kc,ɵɵstyleMapInterpolate3:Qc,ɵɵstyleMapInterpolate4:Jc,ɵɵstyleMapInterpolate5:Xc,ɵɵstyleMapInterpolate6:tf,ɵɵstyleMapInterpolate7:ef,ɵɵstyleMapInterpolate8:nf,ɵɵstyleMapInterpolateV:rf,ɵɵstyleProp:hc,ɵɵstylePropInterpolate1:of,ɵɵstylePropInterpolate2:sf,ɵɵstylePropInterpolate3:uf,ɵɵstylePropInterpolate4:lf,ɵɵstylePropInterpolate5:af,ɵɵstylePropInterpolate6:cf,ɵɵstylePropInterpolate7:ff,ɵɵstylePropInterpolate8:hf,ɵɵstylePropInterpolateV:df,ɵɵclassProp:dc,ɵɵadvance:Rs,ɵɵtemplate:Gl,ɵɵtext:kc,ɵɵtextInterpolate:Ic,ɵɵtextInterpolate1:Tc,ɵɵtextInterpolate2:Oc,ɵɵtextInterpolate3:Mc,ɵɵtextInterpolate4:Pc,ɵɵtextInterpolate5:Bc,ɵɵtextInterpolate6:Nc,ɵɵtextInterpolate7:Rc,ɵɵtextInterpolate8:jc,ɵɵtextInterpolateV:Lc,ɵɵi18n:xh,ɵɵi18nAttributes:Sh,ɵɵi18nExp:kh,ɵɵi18nStart:Fh,ɵɵi18nEnd:Ah,ɵɵi18nApply:Ih,ɵɵi18nPostprocess:Th,ɵɵresolveWindow:Ni,ɵɵresolveDocument:Ri,ɵɵresolveBody:ji,ɵɵsetComponentScope:le,ɵɵsetNgModuleScope:de,ɵɵsanitizeHtml:mi,ɵɵsanitizeStyle:Di,ɵɵsanitizeResourceUrl:vi,ɵɵsanitizeScript:wi,ɵɵsanitizeUrl:_i,ɵɵsanitizeUrlOrResourceUrl:Ei,ɵɵtrustConstantHtml:Ci,ɵɵtrustConstantResourceUrl:bi,forwardRef:_t,resolveForwardRef:vt};let dp=null;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const pp=[];let yp=!1;function gp(t){return Array.isArray(t)?t.every(gp):!!vt(t)}function mp(t,e={}){!function(t,e,n=!1){const r=zr(e.declarations||Xt);let o=null;Object.defineProperty(t,re,{configurable:!0,get:()=>{if(null===o){0;const n=Hr();o=n.compileNgModule(hp,`ng:///${t.name}/ɵmod.js`,{type:t,bootstrap:zr(e.bootstrap||Xt).map(vt),declarations:r.map(vt),imports:zr(e.imports||Xt).map(vt).map(wp),exports:zr(e.exports||Xt).map(vt).map(wp),schemas:e.schemas?zr(e.schemas):null,id:e.id||null}),o.schemas||(o.schemas=[])}return o}});let i=null;Object.defineProperty(t,oe,{get:()=>{if(null===i){const e=Hr();i=e.compileFactory(hp,`ng:///${t.name}/ɵfac.js`,{name:t.name,type:t,deps:Ao(t),target:e.FactoryTarget.NgModule,typeArgumentCount:0})}return i},configurable:!1});let s=null;Object.defineProperty(t,Nt,{get:()=>{if(null===s){const n={name:t.name,type:t,providers:e.providers||Xt,imports:[(e.imports||Xt).map(vt),(e.exports||Xt).map(vt)]},r=Hr();s=r.compileInjector(hp,`ng:///${t.name}/ɵinj.js`,n)}return s},configurable:!1})}(t,e),function(t,e){pp.push({moduleType:t,ngModule:e})}(t,e)}new WeakMap,new WeakMap;function Dp(t,e){const n=zr(e.declarations||Xt),r=vp(t);n.forEach((e=>{if(e.hasOwnProperty(te)){_p(me(e),r)}else e.hasOwnProperty(ee)||e.hasOwnProperty(ne)||(e.ngSelectorScope=t)}))}function _p(t,e){t.directiveDefs=()=>Array.from(e.compilation.directives).map((t=>t.hasOwnProperty(te)?me(t):De(t))).filter((t=>!!t)),t.pipeDefs=()=>Array.from(e.compilation.pipes).map((t=>_e(t))),t.schemas=e.schemas,t.tView=null}function vp(t){if(!Cp(t))throw new Error(`${t.name} does not have a module def (ɵmod property)`);const e=ve(t);if(null!==e.transitiveCompileScopes)return e.transitiveCompileScopes;const n={schemas:e.schemas||null,compilation:{directives:new Set,pipes:new Set},exported:{directives:new Set,pipes:new Set}};return Li(e.imports).forEach((t=>{const e=t;if(!Cp(e))throw new Error(`Importing ${e.name} which does not have a ɵmod property`);const r=vp(e);r.exported.directives.forEach((t=>n.compilation.directives.add(t))),r.exported.pipes.forEach((t=>n.compilation.pipes.add(t)))})),Li(e.declarations).forEach((t=>{_e(t)?n.compilation.pipes.add(t):n.compilation.directives.add(t)})),Li(e.exports).forEach((t=>{const e=t;if(Cp(e)){const t=vp(e);t.exported.directives.forEach((t=>{n.compilation.directives.add(t),n.exported.directives.add(t)})),t.exported.pipes.forEach((t=>{n.compilation.pipes.add(t),n.exported.pipes.add(t)}))}else _e(e)?n.exported.pipes.add(e):n.exported.directives.add(e)})),e.transitiveCompileScopes=n,n}function wp(t){return function(t){return void 0!==t.ngModule}(t)?t.ngModule:t}function Cp(t){return!!ve(t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let bp=0;function Ep(t,e){let n=null;!function(t,e){Io(e)&&(So.set(t,e),ko.add(t))}(t,e),xp(t,e),Object.defineProperty(t,te,{get:()=>{if(null===n){const r=Hr();if(Io(e)){const n=[`Component '${t.name}' is not resolved:`];throw e.templateUrl&&n.push(` - templateUrl: ${e.templateUrl}`),e.styleUrls&&e.styleUrls.length&&n.push(` - styleUrls: ${JSON.stringify(e.styleUrls)}`),n.push("Did you run and wait for 'resolveComponentResources()'?"),new Error(n.join("\n"))}const o=dp;let i=e.preserveWhitespaces;void 0===i&&(i=null!==o&&void 0!==o.preserveWhitespaces&&o.preserveWhitespaces);let s=e.encapsulation;void 0===s&&(s=null!==o&&void 0!==o.defaultEncapsulation?o.defaultEncapsulation:Gt.Emulated);const u=e.templateUrl||`ng:///${t.name}/template.html`,l={...kp(t,e),typeSourceSpan:r.createParseSourceSpan("Component",t.name,u),template:e.template||"",preserveWhitespaces:i,styles:e.styles||Xt,animations:e.animations,directives:[],changeDetection:e.changeDetection,pipes:new Map,encapsulation:s,interpolation:e.interpolation,viewProviders:e.viewProviders||null};bp++;try{l.usesInheritance&&Ip(t),n=r.compileComponent(hp,u,l)}finally{bp--}if(0===bp&&function(){if(!yp){yp=!0;try{for(let t=pp.length-1;t>=0;t--){const{moduleType:e,ngModule:n}=pp[t];n.declarations&&n.declarations.every(gp)&&(pp.splice(t,1),Dp(e,n))}}finally{yp=!1}}}(),void 0!==t.ngSelectorScope){const e=vp(t.ngSelectorScope);_p(n,e)}}return n},configurable:!1})}function Fp(t,e){let n=null;xp(t,e||{}),Object.defineProperty(t,ee,{get:()=>{if(null===n){const r=Ap(t,e||{}),o=Hr();n=o.compileDirective(hp,r.sourceMapUrl,r.metadata)}return n},configurable:!1})}function Ap(t,e){const n=t&&t.name,r=`ng:///${n}/ɵdir.js`,o=Hr(),i=kp(t,e);return i.typeSourceSpan=o.createParseSourceSpan("Directive",n,r),i.usesInheritance&&Ip(t),{metadata:i,sourceMapUrl:r}}function xp(t,e){let n=null;Object.defineProperty(t,oe,{get:()=>{if(null===n){const r=Ap(t,e),o=Hr();n=o.compileFactory(hp,`ng:///${t.name}/ɵfac.js`,{name:r.metadata.name,type:r.metadata.type,typeArgumentCount:0,deps:Ao(t),target:o.FactoryTarget.Directive})}return n},configurable:!1})}function Sp(t){return Object.getPrototypeOf(t.prototype)===Object.prototype}function kp(t,e){const n=Fo(),r=n.ownPropMetadata(t);return{name:t.name,type:t,selector:void 0!==e.selector?e.selector:null,host:e.host||Jt,propMetadata:r,inputs:e.inputs||Xt,outputs:e.outputs||Xt,queries:Op(t,r,Mp),lifecycle:{usesOnChanges:n.hasLifecycleHook(t,"ngOnChanges")},typeSourceSpan:null,usesInheritance:!Sp(t),exportAs:(o=e.exportAs,void 0===o?null:Np(o)),providers:e.providers||null,viewQueries:Op(t,r,Pp)};var o}function Ip(t){const e=Object.prototype;let n=Object.getPrototypeOf(t.prototype).constructor;for(;n&&n!==e;)De(n)||me(n)||!jp(n)||Fp(n,null),n=Object.getPrototypeOf(n)}function Tp(t,e){return{propertyName:t,predicate:(n=e.selector,"string"==typeof n?Np(n):vt(n)),descendants:e.descendants,first:e.first,read:e.read?e.read:null,static:!!e.static,emitDistinctChangesOnly:!!e.emitDistinctChangesOnly};var n}function Op(t,e,n){const r=[];for(const o in e)if(e.hasOwnProperty(o)){const i=e[o];i.forEach((e=>{if(n(e)){if(!e.selector)throw new Error(`Can't construct a query for the property "${o}" of "${Ft(t)}" since the query selector wasn't defined.`);if(i.some(Bp))throw new Error("Cannot combine @Input decorators with query decorators");r.push(Tp(o,e))}}))}return r}function Mp(t){const e=t.ngMetadataName;return"ContentChild"===e||"ContentChildren"===e}function Pp(t){const e=t.ngMetadataName;return"ViewChild"===e||"ViewChildren"===e}function Bp(t){return"Input"===t.ngMetadataName}function Np(t){return t.split(",").map((t=>t.trim()))}const Rp=["ngOnChanges","ngOnInit","ngOnDestroy","ngDoCheck","ngAfterViewInit","ngAfterViewChecked","ngAfterContentInit","ngAfterContentChecked"];function jp(t){const e=Fo();if(Rp.some((n=>e.hasLifecycleHook(t,n))))return!0;const n=e.propMetadata(t);for(const t in n){const e=n[t];for(let t=0;t<e.length;t++){const n=e[t],r=n.ngMetadataName;if(Bp(n)||Mp(n)||Pp(n)||"Output"===r||"HostBinding"===r||"HostListener"===r)return!0}}return!1}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Lp(t,e){return{type:t,name:t.name,pipeName:e.name,pure:void 0===e.pure||e.pure}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Vp=Or("Directive",((t={})=>t),void 0,void 0,((t,e)=>Fp(t,e)));Or("Component",((t={})=>({changeDetection:zt.Default,...t})),Vp,void 0,((t,e)=>Ep(t,e))),Or("Pipe",(t=>({pure:!0,...t})),void 0,void 0,((t,e)=>function(t,e){let n=null,r=null;Object.defineProperty(t,oe,{get:()=>{if(null===r){const n=Lp(t,e),o=Hr(n.type);r=o.compileFactory(hp,`ng:///${n.name}/ɵfac.js`,{name:n.name,type:n.type,typeArgumentCount:0,deps:Ao(t),target:o.FactoryTarget.Pipe})}return r},configurable:!1}),Object.defineProperty(t,ne,{get:()=>{if(null===n){const r=Lp(t,e),o=Hr(r.type);n=o.compilePipe(hp,`ng:///${r.name}/ɵpipe.js`,r)}return n},configurable:!1})}(t,e))),Br("Input",(t=>({bindingPropertyName:t}))),Br("Output",(t=>({bindingPropertyName:t}))),Br("HostBinding",(t=>({hostPropertyName:t}))),Br("HostListener",((t,e)=>({eventName:t,args:e}))),Or("NgModule",(t=>t),void 0,void 0,((t,e)=>mp(t,e)));
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
function Hp(...t){}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const $p=new Rr("Application Initializer");class Up{constructor(t){this.appInits=t,this.resolve=Hp,this.reject=Hp,this.initialized=!1,this.done=!1,this.donePromise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}runInitializers(){if(this.initialized)return;const t=[],e=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let e=0;e<this.appInits.length;e++){const n=this.appInits[e]();if(Oa(n))t.push(n);else if(Pa(n)){const e=new Promise(((t,e)=>{n.subscribe({complete:t,error:e})}));t.push(e)}}Promise.all(t).then((()=>{e()})).catch((t=>{this.reject(t)})),0===t.length&&e(),this.initialized=!0}}Up.ɵfac=function(t){return new(t||Up)(po($p,8))},Up.ɵprov=It({token:Up,factory:Up.ɵfac});const zp={provide:new Rr("AppId"),useFactory:function(){return`${Zp()}${Zp()}${Zp()}`},deps:[]};function Zp(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const Gp=new Rr("Platform Initializer"),Wp=new Rr("Platform ID"),qp=new Rr("appBootstrapListener");new Rr("Application Packages Root URL");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Yp{log(t){console.log(t)}warn(t){console.warn(t)}}Yp.ɵfac=function(t){return new(t||Yp)},Yp.ɵprov=It({token:Yp,factory:Yp.ɵfac});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Kp=new Rr("LocaleId"),Qp=new Rr("DefaultCurrencyCode");new Rr("Translations"),new Rr("TranslationsFormat");var Jp;!function(t){t[t.Error=0]="Error",t[t.Warning=1]="Warning",t[t.Ignore=2]="Ignore"}(Jp||(Jp={}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Xp{constructor(t,e){this.ngModuleFactory=t,this.componentFactories=e}}class ty{compileModuleSync(t){return new fd(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){const e=this.compileModuleSync(t),n=Li(ve(t).declarations).reduce(((t,e)=>{const n=me(e);return n&&t.push(new id(n)),t}),[]);return new Xp(e,n)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}}ty.ɵfac=function(t){return new(t||ty)},ty.ɵprov=It({token:ty,factory:ty.ɵfac});new Rr("compilerOptions");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const ey=Promise.resolve(0);function ny(t){"undefined"==typeof Zone?ey.then((()=>{t&&t.apply(null,null)})):Zone.current.scheduleMicroTask("scheduleMicrotask",t)}
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
class ry{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:e=!1,shouldCoalesceRunChangeDetection:n=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Nd(!1),this.onMicrotaskEmpty=new Nd(!1),this.onStable=new Nd(!1),this.onError=new Nd(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched();const r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!n&&e,r.shouldCoalesceRunChangeDetection=n,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=function(){let t=Qt.requestAnimationFrame,e=Qt.cancelAnimationFrame;if("undefined"!=typeof Zone&&t&&e){const n=t[Zone.__symbol__("OriginalDelegate")];n&&(t=n);const r=e[Zone.__symbol__("OriginalDelegate")];r&&(e=r)}return{nativeRequestAnimationFrame:t,nativeCancelAnimationFrame:e}}().nativeRequestAnimationFrame,function(t){const e=()=>{!function(t){if(t.isCheckStableRunning||-1!==t.lastRequestAnimationFrameId)return;t.lastRequestAnimationFrameId=t.nativeRequestAnimationFrame.call(Qt,(()=>{t.fakeTopEventTask||(t.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",(()=>{t.lastRequestAnimationFrameId=-1,sy(t),t.isCheckStableRunning=!0,iy(t),t.isCheckStableRunning=!1}),void 0,(()=>{}),(()=>{}))),t.fakeTopEventTask.invoke()})),sy(t)}(t)};t._inner=t._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,u)=>{try{return uy(t),n.invokeTask(o,i,s,u)}finally{(t.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||t.shouldCoalesceRunChangeDetection)&&e(),ly(t)}},onInvoke:(n,r,o,i,s,u,l)=>{try{return uy(t),n.invoke(o,i,s,u,l)}finally{t.shouldCoalesceRunChangeDetection&&e(),ly(t)}},onHasTask:(e,n,r,o)=>{e.hasTask(r,o),n===r&&("microTask"==o.change?(t._hasPendingMicrotasks=o.microTask,sy(t),iy(t)):"macroTask"==o.change&&(t.hasPendingMacrotasks=o.macroTask))},onHandleError:(e,n,r,o)=>(e.handleError(r,o),t.runOutsideAngular((()=>t.onError.emit(o))),!1)})}(r)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!ry.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(ry.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(t,e,n){return this._inner.run(t,e,n)}runTask(t,e,n,r){const o=this._inner,i=o.scheduleEventTask("NgZoneEvent: "+r,t,oy,Hp,Hp);try{return o.runTask(i,e,n)}finally{o.cancelTask(i)}}runGuarded(t,e,n){return this._inner.runGuarded(t,e,n)}runOutsideAngular(t){return this._outer.run(t)}}const oy={};function iy(t){if(0==t._nesting&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular((()=>t.onStable.emit(null)))}finally{t.isStable=!0}}}function sy(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&-1!==t.lastRequestAnimationFrameId?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function uy(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function ly(t){t._nesting--,iy(t)}class ay{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Nd,this.onMicrotaskEmpty=new Nd,this.onStable=new Nd,this.onError=new Nd}run(t,e,n){return t.apply(e,n)}runGuarded(t,e,n){return t.apply(e,n)}runOutsideAngular(t){return t()}runTask(t,e,n,r){return t.apply(e,n)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class cy{constructor(t){this._ngZone=t,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),t.run((()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")}))}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular((()=>{this._ngZone.onStable.subscribe({next:()=>{ry.assertNotInAngularZone(),ny((()=>{this._isZoneStable=!0,this._runCallbacksIfReady()}))}})}))}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())ny((()=>{for(;0!==this._callbacks.length;){let t=this._callbacks.pop();clearTimeout(t.timeoutId),t.doneCb(this._didWork)}this._didWork=!1}));else{let t=this.getPendingTasks();this._callbacks=this._callbacks.filter((e=>!e.updateCb||!e.updateCb(t)||(clearTimeout(e.timeoutId),!1))),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map((t=>({source:t.source,creationLocation:t.creationLocation,data:t.data}))):[]}addCallback(t,e,n){let r=-1;e&&e>0&&(r=setTimeout((()=>{this._callbacks=this._callbacks.filter((t=>t.timeoutId!==r)),t(this._didWork,this.getPendingTasks())}),e)),this._callbacks.push({doneCb:t,timeoutId:r,updateCb:n})}whenStable(t,e,n){if(n&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(t,e,n),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(t,e,n){return[]}}cy.ɵfac=function(t){return new(t||cy)(po(ry))},cy.ɵprov=It({token:cy,factory:cy.ɵfac});class fy{constructor(){this._applications=new Map,dy.addToWindow(this)}registerApplication(t,e){this._applications.set(t,e)}unregisterApplication(t){this._applications.delete(t)}unregisterAllApplications(){this._applications.clear()}getTestability(t){return this._applications.get(t)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(t,e=!0){return dy.findTestabilityInTree(this,t,e)}}fy.ɵfac=function(t){return new(t||fy)},fy.ɵprov=It({token:fy,factory:fy.ɵfac});let hy,dy=new class{addToWindow(t){}findTestabilityInTree(t,e,n){return null}};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function py(t,e,n){const r=new fd(n);return Promise.resolve(r)}const yy=new Rr("AllowMultipleToken");function gy(){return hy&&!hy.destroyed?hy:null}class my{constructor(t){this._injector=t,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(t,e){const n=function(t,e){let n;n="noop"===t?new ay:("zone.js"===t?void 0:t)||new ry({enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!!e?.ngZoneEventCoalescing,shouldCoalesceRunChangeDetection:!!e?.ngZoneRunCoalescing});return n}(e?e.ngZone:void 0,{ngZoneEventCoalescing:e&&e.ngZoneEventCoalescing||!1,ngZoneRunCoalescing:e&&e.ngZoneRunCoalescing||!1}),r=[{provide:ry,useValue:n}];return n.run((()=>{const e=rl.create({providers:r,parent:this.injector,name:t.moduleType.name}),o=t.create(e),i=o.injector.get(Ti,null);if(!i){throw new Ct("402","")}return n.runOutsideAngular((()=>{const t=n.onError.subscribe({next:t=>{i.handleError(t)}});o.onDestroy((()=>{vy(this._modules,o),t.unsubscribe()}))})),function(t,e,n){try{const r=n();return Oa(r)?r.catch((n=>{throw e.runOutsideAngular((()=>t.handleError(n))),n})):r}catch(n){throw e.runOutsideAngular((()=>t.handleError(n))),n}}(i,n,(()=>{const t=o.injector.get(Up);return t.runInitializers(),t.donePromise.then((()=>(function(t){St(t,"Expected localeId to be defined"),"string"==typeof t&&(Sf=t.toLowerCase().replace(/_/g,"-"))}(o.injector.get(Kp,Ef)||Ef),this._moduleDoBootstrap(o),o)))}))}))}bootstrapModule(t,e=[]){const n=Dy({},e);return py(this.injector,0,t).then((t=>this.bootstrapModuleFactory(t,n)))}_moduleDoBootstrap(t){const e=t.injector.get(_y);if(t._bootstrapComponents.length>0)t._bootstrapComponents.forEach((t=>e.bootstrap(t)));else{if(!t.instance.ngDoBootstrap){throw new Ct("403","")}t.instance.ngDoBootstrap(e)}this._modules.push(t)}onDestroy(t){this._destroyListeners.push(t)}get injector(){return this._injector}destroy(){if(this._destroyed){throw new Ct("404","")}this._modules.slice().forEach((t=>t.destroy())),this._destroyListeners.forEach((t=>t())),this._destroyed=!0}get destroyed(){return this._destroyed}}function Dy(t,e){return t=Array.isArray(e)?e.reduce(Dy,t):{...t,...e}}my.ɵfac=function(t){return new(t||my)(po(rl))},my.ɵprov=It({token:my,factory:my.ɵfac});class _y{constructor(t,e,n,r,o){this._zone=t,this._injector=e,this._exceptionHandler=n,this._componentFactoryResolver=r,this._initStatus=o,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run((()=>{this.tick()}))}});const i=new N((t=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular((()=>{t.next(this._stable),t.complete()}))})),s=new N((t=>{let e;this._zone.runOutsideAngular((()=>{e=this._zone.onStable.subscribe((()=>{ry.assertNotInAngularZone(),ny((()=>{this._stable||this._zone.hasPendingMacrotasks||this._zone.hasPendingMicrotasks||(this._stable=!0,t.next(!0))}))}))}));const n=this._zone.onUnstable.subscribe((()=>{ry.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular((()=>{t.next(!1)})))}));return()=>{e.unsubscribe(),n.unsubscribe()}}));this.isStable=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=it(t),r=st(t,1/0),o=t;return o.length?1===o.length?J(o[0]):nt(r)(ft(o,n)):rt}(i,s.pipe(function(t){void 0===t&&(t={});var e=t.connector,n=void 0===e?function(){return new L}:e,r=t.resetOnError,o=void 0===r||r,i=t.resetOnComplete,s=void 0===i||i,u=t.resetOnRefCountZero,l=void 0===u||u;return function(t){var e=null,r=null,i=null,u=0,a=!1,c=!1,f=function(){null==r||r.unsubscribe(),r=null},h=function(){f(),e=i=null,a=c=!1},d=function(){var t=e;h(),null==t||t.unsubscribe()};return H((function(t,p){u++,c||a||f();var y=i=null!=i?i:n();p.add((function(){0!=--u||c||a||(r=dt(d,l))})),y.subscribe(p),e||(e=new S({next:function(t){return y.next(t)},error:function(t){c=!0,f(),r=dt(h,o,t),y.error(t)},complete:function(){a=!0,f(),r=dt(h,s),y.complete()}}),ft(t).subscribe(e))}))(t)}}()))}bootstrap(t,e){if(!this._initStatus.done){throw new Ct("405","")}let n;n=t instanceof Vh?t:this._componentFactoryResolver.resolveComponentFactory(t),this.componentTypes.push(n.componentType);const r=n.isBoundToModule?void 0:this._injector.get(ud);const o=e||n.selector,i=n.create(rl.NULL,[],o,r),s=i.location.nativeElement,u=i.injector.get(cy,null),l=u&&i.injector.get(fy);return u&&l&&l.registerApplication(s,u),i.onDestroy((()=>{this.detachView(i.hostView),vy(this.components,i),l&&l.unregisterApplication(s)})),this._loadComponent(i),i}tick(){if(this._runningTick){throw new Ct("101","")}try{this._runningTick=!0;for(let t of this._views)t.detectChanges();0}catch(t){this._zone.runOutsideAngular((()=>this._exceptionHandler.handleError(t)))}finally{this._runningTick=!1}}attachView(t){const e=t;this._views.push(e),e.attachToAppRef(this)}detachView(t){const e=t;vy(this._views,e),e.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t);this._injector.get(qp,[]).concat(this._bootstrapListeners).forEach((e=>e(t)))}ngOnDestroy(){this._views.slice().forEach((t=>t.destroy())),this._onMicrotaskEmptySubscription.unsubscribe()}get viewCount(){return this._views.length}}function vy(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}_y.ɵfac=function(t){return new(t||_y)(po(ry),po(rl),po(Ti),po(Uh),po(Up))},_y.ɵprov=It({token:_y,factory:_y.ɵfac});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class wy{}wy.__NG_ELEMENT_ID__=function(t){return function(t,e,n){if(xe(t)&&!n){const n=Qe(t.index,e);return new td(n,n)}if(47&t.type){const t=e[16];return new td(t,e)}return null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(fn(),ln(),16==(16&t))};new Map;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Cy{constructor(){}supports(t){return _l(t)}create(t){return new Ey(t)}}const by=(t,e)=>e;class Ey{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||by}forEachItem(t){let e;for(e=this._itHead;null!==e;e=e._next)t(e)}forEachOperation(t){let e=this._itHead,n=this._removalsHead,r=0,o=null;for(;e||n;){const i=!n||e&&e.currentIndex<Sy(n,r,o)?e:n,s=Sy(i,r,o),u=i.currentIndex;if(i===n)r--,n=n._nextRemoved;else if(e=e._next,null==i.previousIndex)r++;else{o||(o=[]);const t=s-r,e=u-r;if(t!=e){for(let n=0;n<t;n++){const r=n<o.length?o[n]:o[n]=0,i=r+n;e<=i&&i<t&&(o[n]=r+1)}o[i.previousIndex]=e-t}}s!==u&&t(i,s,u)}}forEachPreviousItem(t){let e;for(e=this._previousItHead;null!==e;e=e._nextPrevious)t(e)}forEachAddedItem(t){let e;for(e=this._additionsHead;null!==e;e=e._nextAdded)t(e)}forEachMovedItem(t){let e;for(e=this._movesHead;null!==e;e=e._nextMoved)t(e)}forEachRemovedItem(t){let e;for(e=this._removalsHead;null!==e;e=e._nextRemoved)t(e)}forEachIdentityChange(t){let e;for(e=this._identityChangesHead;null!==e;e=e._nextIdentityChange)t(e)}diff(t){if(null==t&&(t=[]),!_l(t))throw new Error(`Error trying to diff '${gt(t)}'. Only arrays and iterables are allowed`);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let e,n,r,o=this._itHead,i=!1;if(Array.isArray(t)){this.length=t.length;for(let e=0;e<this.length;e++)n=t[e],r=this._trackByFn(e,n),null!==o&&Object.is(o.trackById,r)?(i&&(o=this._verifyReinsertion(o,n,r,e)),Object.is(o.item,n)||this._addIdentityChange(o,n)):(o=this._mismatch(o,n,r,e),i=!0),o=o._next}else e=0,function(t,e){if(Array.isArray(t))for(let n=0;n<t.length;n++)e(t[n]);else{const n=t[Dl()]();let r;for(;!(r=n.next()).done;)e(r.value)}}(t,(t=>{r=this._trackByFn(e,t),null!==o&&Object.is(o.trackById,r)?(i&&(o=this._verifyReinsertion(o,t,r,e)),Object.is(o.item,t)||this._addIdentityChange(o,t)):(o=this._mismatch(o,t,r,e),i=!0),o=o._next,e++})),this.length=e;return this._truncate(o),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,e,n,r){let o;return null===t?o=this._itTail:(o=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null))?(Object.is(t.item,e)||this._addIdentityChange(t,e),this._reinsertAfter(t,o,r)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(n,r))?(Object.is(t.item,e)||this._addIdentityChange(t,e),this._moveAfter(t,o,r)):t=this._addAfter(new Fy(e,n),o,r),t}_verifyReinsertion(t,e,n,r){let o=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null);return null!==o?t=this._reinsertAfter(o,t._prev,r):t.currentIndex!=r&&(t.currentIndex=r,this._addToMoves(t,r)),t}_truncate(t){for(;null!==t;){const e=t._next;this._addToRemovals(this._unlink(t)),t=e}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,e,n){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const r=t._prevRemoved,o=t._nextRemoved;return null===r?this._removalsHead=o:r._nextRemoved=o,null===o?this._removalsTail=r:o._prevRemoved=r,this._insertAfter(t,e,n),this._addToMoves(t,n),t}_moveAfter(t,e,n){return this._unlink(t),this._insertAfter(t,e,n),this._addToMoves(t,n),t}_addAfter(t,e,n){return this._insertAfter(t,e,n),null===this._additionsTail?this._additionsTail=this._additionsHead=t:this._additionsTail=this._additionsTail._nextAdded=t,t}_insertAfter(t,e,n){const r=null===e?this._itHead:e._next;return t._next=r,t._prev=e,null===r?this._itTail=t:r._prev=t,null===e?this._itHead=t:e._next=t,null===this._linkedRecords&&(this._linkedRecords=new xy),this._linkedRecords.put(t),t.currentIndex=n,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const e=t._prev,n=t._next;return null===e?this._itHead=n:e._next=n,null===n?this._itTail=e:n._prev=e,t}_addToMoves(t,e){return t.previousIndex===e||(null===this._movesTail?this._movesTail=this._movesHead=t:this._movesTail=this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new xy),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,e){return t.item=e,null===this._identityChangesTail?this._identityChangesTail=this._identityChangesHead=t:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=t,t}}class Fy{constructor(t,e){this.item=t,this.trackById=e,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class Ay{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,e){let n;for(n=this._head;null!==n;n=n._nextDup)if((null===e||e<=n.currentIndex)&&Object.is(n.trackById,t))return n;return null}remove(t){const e=t._prevDup,n=t._nextDup;return null===e?this._head=n:e._nextDup=n,null===n?this._tail=e:n._prevDup=e,null===this._head}}class xy{constructor(){this.map=new Map}put(t){const e=t.trackById;let n=this.map.get(e);n||(n=new Ay,this.map.set(e,n)),n.add(t)}get(t,e){const n=t,r=this.map.get(n);return r?r.get(t,e):null}remove(t){const e=t.trackById;return this.map.get(e).remove(t)&&this.map.delete(e),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Sy(t,e,n){const r=t.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+e+o}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ky{constructor(){}supports(t){return t instanceof Map||vl(t)}create(){return new Iy}}class Iy{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let e;for(e=this._mapHead;null!==e;e=e._next)t(e)}forEachPreviousItem(t){let e;for(e=this._previousMapHead;null!==e;e=e._nextPrevious)t(e)}forEachChangedItem(t){let e;for(e=this._changesHead;null!==e;e=e._nextChanged)t(e)}forEachAddedItem(t){let e;for(e=this._additionsHead;null!==e;e=e._nextAdded)t(e)}forEachRemovedItem(t){let e;for(e=this._removalsHead;null!==e;e=e._nextRemoved)t(e)}diff(t){if(t){if(!(t instanceof Map||vl(t)))throw new Error(`Error trying to diff '${gt(t)}'. Only maps and objects are allowed`)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(t,((t,n)=>{if(e&&e.key===n)this._maybeAddToChanges(e,t),this._appendAfter=e,e=e._next;else{const r=this._getOrCreateRecordForKey(n,t);e=this._insertBeforeOrAppend(e,r)}})),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let t=e;null!==t;t=t._nextRemoved)t===this._mapHead&&(this._mapHead=null),this._records.delete(t.key),t._nextRemoved=t._next,t.previousValue=t.currentValue,t.currentValue=null,t._prev=null,t._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,e){if(t){const n=t._prev;return e._next=t,e._prev=n,t._prev=e,n&&(n._next=e),t===this._mapHead&&(this._mapHead=e),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(t,e){if(this._records.has(t)){const n=this._records.get(t);this._maybeAddToChanges(n,e);const r=n._prev,o=n._next;return r&&(r._next=o),o&&(o._prev=r),n._next=null,n._prev=null,n}const n=new Ty(t);return this._records.set(t,n),n.currentValue=e,this._addToAdditions(n),n}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,e){Object.is(e,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=e,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,e){t instanceof Map?t.forEach(e):Object.keys(t).forEach((n=>e(t[n],n)))}}class Ty{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Oy(){return new My([new Cy])}class My{constructor(t){this.factories=t}static create(t,e){if(null!=e){const n=e.factories.slice();t=t.concat(n)}return new My(t)}static extend(t){return{provide:My,useFactory:e=>My.create(t,e||Oy()),deps:[[My,new Co,new vo]]}}find(t){const e=this.factories.find((e=>e.supports(t)));if(null!=e)return e;throw new Error(`Cannot find a differ supporting object '${t}' of type '${n=t,n.name||typeof n}'`);var n;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}function Py(){return new By([new ky])}My.ɵprov=It({token:My,providedIn:"root",factory:Oy});class By{constructor(t){this.factories=t}static create(t,e){if(e){const n=e.factories.slice();t=t.concat(n)}return new By(t)}static extend(t){return{provide:By,useFactory:e=>By.create(t,e||Py()),deps:[[By,new Co,new vo]]}}find(t){const e=this.factories.find((e=>e.supports(t)));if(e)return e;throw new Error(`Cannot find a differ supporting object '${t}'`)}}By.ɵprov=It({token:By,providedIn:"root",factory:Py});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Ny=[new ky],Ry=[new Cy],jy=new My(Ry),Ly=new By(Ny);!function(t,e,n=[]){const r=`Platform: ${e}`,o=new Rr(r)}(null,"core",[{provide:Wp,useValue:"unknown"},{provide:my,deps:[rl]},{provide:fy,deps:[]},{provide:Yp,deps:[]}]);const Vy=[{provide:_y,useClass:_y,deps:[ry,rl,Ti,Uh,Up]},{provide:od,deps:[ry],useFactory:function(t){let e=[];return t.onStable.subscribe((()=>{for(;e.length;)e.pop()()})),function(t){e.push(t)}}},{provide:Up,useClass:Up,deps:[[new vo,$p]]},{provide:ty,useClass:ty,deps:[]},zp,{provide:My,useFactory:
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){return jy},deps:[]},{provide:By,useFactory:function(){return Ly},deps:[]},{provide:Kp,useFactory:function(t){return t||("undefined"!=typeof ngI18nClosureMode&&ngI18nClosureMode&&"undefined"!=typeof goog&&"en"!==goog.getLocale()?goog.getLocale():"undefined"!=typeof $localize&&$localize.locale||Ef)},deps:[[new _o(Kp),new vo,new Co]]},{provide:Qp,useValue:"USD"}];class Hy{constructor(t){}}Hy.ɵfac=function(t){return new(t||Hy)(po(_y))},Hy.ɵmod=he({type:Hy}),Hy.ɵinj=Tt({providers:Vy});
/**
 * @license Angular v13.1.1
 * (c) 2010-2021 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let $y=null;function Uy(){return $y}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const zy=new Rr("DocumentToken");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Zy{historyGo(t){throw new Error("Not implemented")}}Zy.ɵfac=function(t){return new(t||Zy)},Zy.ɵprov=It({token:Zy,factory:function(){return po(Gy)},providedIn:"platform"});new Rr("Location Initialized");class Gy extends Zy{constructor(t){super(),this._doc=t,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Uy().getBaseHref(this._doc)}onPopState(t){const e=Uy().getGlobalEventTarget(this._doc,"window");return e.addEventListener("popstate",t,!1),()=>e.removeEventListener("popstate",t)}onHashChange(t){const e=Uy().getGlobalEventTarget(this._doc,"window");return e.addEventListener("hashchange",t,!1),()=>e.removeEventListener("hashchange",t)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(t){this.location.pathname=t}pushState(t,e,n){Wy()?this._history.pushState(t,e,n):this.location.hash=n}replaceState(t,e,n){Wy()?this._history.replaceState(t,e,n):this.location.hash=n}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}}function Wy(){return!!window.history.pushState}
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
function qy(t,e){if(0==t.length)return e;if(0==e.length)return t;let n=0;return t.endsWith("/")&&n++,e.startsWith("/")&&n++,2==n?t+e.substring(1):1==n?t+e:t+"/"+e}function Yy(t){const e=t.match(/#|\?|$/),n=e&&e.index||t.length,r=n-("/"===t[n-1]?1:0);return t.slice(0,r)+t.slice(n)}function Ky(t){return t&&"?"!==t[0]?"?"+t:t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */Gy.ɵfac=function(t){return new(t||Gy)(po(zy))},Gy.ɵprov=It({token:Gy,factory:function(){return new Gy(po(zy))},providedIn:"platform"});class Qy{historyGo(t){throw new Error("Not implemented")}}Qy.ɵfac=function(t){return new(t||Qy)},Qy.ɵprov=It({token:Qy,factory:function(){return function(t){const e=po(zy).location;return new Xy(po(Zy),e&&e.origin||"")}()},providedIn:"root"});const Jy=new Rr("appBaseHref");class Xy extends Qy{constructor(t,e){if(super(),this._platformLocation=t,this._removeListenerFns=[],null==e&&(e=this._platformLocation.getBaseHrefFromDOM()),null==e)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");this._baseHref=e}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return qy(this._baseHref,t)}path(t=!1){const e=this._platformLocation.pathname+Ky(this._platformLocation.search),n=this._platformLocation.hash;return n&&t?`${e}${n}`:e}pushState(t,e,n,r){const o=this.prepareExternalUrl(n+Ky(r));this._platformLocation.pushState(t,e,o)}replaceState(t,e,n,r){const o=this.prepareExternalUrl(n+Ky(r));this._platformLocation.replaceState(t,e,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}historyGo(t=0){this._platformLocation.historyGo?.(t)}}Xy.ɵfac=function(t){return new(t||Xy)(po(Zy),po(Jy,8))},Xy.ɵprov=It({token:Xy,factory:Xy.ɵfac});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class tg extends Qy{constructor(t,e){super(),this._platformLocation=t,this._baseHref="",this._removeListenerFns=[],null!=e&&(this._baseHref=e)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let e=this._platformLocation.hash;return null==e&&(e="#"),e.length>0?e.substring(1):e}prepareExternalUrl(t){const e=qy(this._baseHref,t);return e.length>0?"#"+e:e}pushState(t,e,n,r){let o=this.prepareExternalUrl(n+Ky(r));0==o.length&&(o=this._platformLocation.pathname),this._platformLocation.pushState(t,e,o)}replaceState(t,e,n,r){let o=this.prepareExternalUrl(n+Ky(r));0==o.length&&(o=this._platformLocation.pathname),this._platformLocation.replaceState(t,e,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}historyGo(t=0){this._platformLocation.historyGo?.(t)}}tg.ɵfac=function(t){return new(t||tg)(po(Zy),po(Jy,8))},tg.ɵprov=It({token:tg,factory:tg.ɵfac});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class eg{constructor(t,e){this._subject=new Nd,this._urlChangeListeners=[],this._platformStrategy=t;const n=this._platformStrategy.getBaseHref();this._platformLocation=e,this._baseHref=Yy(ng(n)),this._platformStrategy.onPopState((t=>{this._subject.emit({url:this.path(!0),pop:!0,state:t.state,type:t.type})}))}path(t=!1){return this.normalize(this._platformStrategy.path(t))}getState(){return this._platformLocation.getState()}isCurrentPathEqualTo(t,e=""){return this.path()==this.normalize(t+Ky(e))}normalize(t){return eg.stripTrailingSlash(function(t,e){return t&&e.startsWith(t)?e.substring(t.length):e}(this._baseHref,ng(t)))}prepareExternalUrl(t){return t&&"/"!==t[0]&&(t="/"+t),this._platformStrategy.prepareExternalUrl(t)}go(t,e="",n=null){this._platformStrategy.pushState(n,"",t,e),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Ky(e)),n)}replaceState(t,e="",n=null){this._platformStrategy.replaceState(n,"",t,e),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Ky(e)),n)}forward(){this._platformStrategy.forward()}back(){this._platformStrategy.back()}historyGo(t=0){this._platformStrategy.historyGo?.(t)}onUrlChange(t){this._urlChangeListeners.push(t),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe((t=>{this._notifyUrlChangeListeners(t.url,t.state)})))}_notifyUrlChangeListeners(t="",e){this._urlChangeListeners.forEach((n=>n(t,e)))}subscribe(t,e,n){return this._subject.subscribe({next:t,error:e,complete:n})}}function ng(t){return t.replace(/\/index.html$/,"")}
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
 */eg.normalizeQueryParams=Ky,eg.joinWithSlash=qy,eg.stripTrailingSlash=Yy,eg.ɵfac=function(t){return new(t||eg)(po(Qy),po(Zy))},eg.ɵprov=It({token:eg,factory:function(){return new eg(po(Qy),po(Zy))},providedIn:"root"});const rg={ADP:[void 0,void 0,0],AFN:[void 0,"؋",0],ALL:[void 0,void 0,0],AMD:[void 0,"֏",2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],AZN:[void 0,"₼"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"৳"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,"р.",2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN¥","¥"],COP:[void 0,"$",2],CRC:[void 0,"₡",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"Kč",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E£"],ESP:[void 0,"₧",0],EUR:["€"],FJD:[void 0,"$"],FKP:[void 0,"£"],GBP:["£"],GEL:[void 0,"₾"],GHS:[void 0,"GH₵"],GIP:[void 0,"£"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["₪"],INR:["₹"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["¥",void 0,0],KHR:[void 0,"៛"],KMF:[void 0,"CF",0],KPW:[void 0,"₩",0],KRW:["₩",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"₸"],LAK:[void 0,"₭",0],LBP:[void 0,"L£",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"₮",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"₦"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:["₱"],PKR:[void 0,"Rs",2],PLN:[void 0,"zł"],PYG:[void 0,"₲",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"₽"],RUR:[void 0,"р."],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"£"],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"£"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"£",0],THB:[void 0,"฿"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"₺"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"₴"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["₫",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XOF:["F CFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["¤"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var og,ig,sg,ug,lg,ag,cg;function fg(t,e){return Dg(_f(t)[Cf.DateFormat],e)}function hg(t,e){return Dg(_f(t)[Cf.TimeFormat],e)}function dg(t,e){return Dg(_f(t)[Cf.DateTimeFormat],e)}function pg(t,e){const n=_f(t),r=n[Cf.NumberSymbols][e];if(void 0===r){if(e===ag.CurrencyDecimal)return n[Cf.NumberSymbols][ag.Decimal];if(e===ag.CurrencyGroup)return n[Cf.NumberSymbols][ag.Group]}return r}function yg(t,e){return _f(t)[Cf.NumberFormats][e]}!function(t){t[t.Decimal=0]="Decimal",t[t.Percent=1]="Percent",t[t.Currency=2]="Currency",t[t.Scientific=3]="Scientific"}(og||(og={})),function(t){t[t.Zero=0]="Zero",t[t.One=1]="One",t[t.Two=2]="Two",t[t.Few=3]="Few",t[t.Many=4]="Many",t[t.Other=5]="Other"}(ig||(ig={})),function(t){t[t.Format=0]="Format",t[t.Standalone=1]="Standalone"}(sg||(sg={})),function(t){t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short"}(ug||(ug={})),function(t){t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full"}(lg||(lg={})),function(t){t[t.Decimal=0]="Decimal",t[t.Group=1]="Group",t[t.List=2]="List",t[t.PercentSign=3]="PercentSign",t[t.PlusSign=4]="PlusSign",t[t.MinusSign=5]="MinusSign",t[t.Exponential=6]="Exponential",t[t.SuperscriptingExponent=7]="SuperscriptingExponent",t[t.PerMille=8]="PerMille",t[t[1/0]=9]="Infinity",t[t.NaN=10]="NaN",t[t.TimeSeparator=11]="TimeSeparator",t[t.CurrencyDecimal=12]="CurrencyDecimal",t[t.CurrencyGroup=13]="CurrencyGroup"}(ag||(ag={})),function(t){t[t.Sunday=0]="Sunday",t[t.Monday=1]="Monday",t[t.Tuesday=2]="Tuesday",t[t.Wednesday=3]="Wednesday",t[t.Thursday=4]="Thursday",t[t.Friday=5]="Friday",t[t.Saturday=6]="Saturday"}(cg||(cg={}));const gg=vf;function mg(t){if(!t[Cf.ExtraData])throw new Error(`Missing extra locale data for the locale "${t[Cf.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function Dg(t,e){for(let n=e;n>-1;n--)if(void 0!==t[n])return t[n];throw new Error("Locale data API: locale data undefined")}function _g(t){const[e,n]=t.split(":");return{hours:+e,minutes:+n}}function vg(t,e,n="en"){const r=function(t){return _f(t)[Cf.Currencies]}(n)[t]||rg[t]||[],o=r[1];return"narrow"===e&&"string"==typeof o?o:r[0]||t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const wg=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,Cg={},bg=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;var Eg,Fg,Ag;function xg(t,e,n,r){let o=function(t){if(Vg(t))return t;if("number"==typeof t&&!isNaN(t))return new Date(t);if("string"==typeof t){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){const[e,n=1,r=1]=t.split("-").map((t=>+t));return Sg(e,n-1,r)}const e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let n;if(n=t.match(wg))return function(t){const e=new Date(0);let n=0,r=0;const o=t[8]?e.setUTCFullYear:e.setFullYear,i=t[8]?e.setUTCHours:e.setHours;t[9]&&(n=Number(t[9]+t[10]),r=Number(t[9]+t[11]));o.call(e,Number(t[1]),Number(t[2])-1,Number(t[3]));const s=Number(t[4]||0)-n,u=Number(t[5]||0)-r,l=Number(t[6]||0),a=Math.floor(1e3*parseFloat("0."+(t[7]||0)));return i.call(e,s,u,l,a),e}(n)}const e=new Date(t);if(!Vg(e))throw new Error(`Unable to convert "${t}" into a date`);return e}(t);e=kg(n,e)||e;let i,s=[];for(;e;){if(i=bg.exec(e),!i){s.push(e);break}{s=s.concat(i.slice(1));const t=s.pop();if(!t)break;e=t}}let u=o.getTimezoneOffset();r&&(u=Lg(r,u),o=function(t,e,n){const r=n?-1:1,o=t.getTimezoneOffset(),i=Lg(e,o);return function(t,e){return(t=new Date(t.getTime())).setMinutes(t.getMinutes()+e),t}(t,r*(i-o))}(o,r,!0));let l="";return s.forEach((t=>{const e=function(t){if(jg[t])return jg[t];let e;switch(t){case"G":case"GG":case"GGG":e=Mg(Ag.Eras,ug.Abbreviated);break;case"GGGG":e=Mg(Ag.Eras,ug.Wide);break;case"GGGGG":e=Mg(Ag.Eras,ug.Narrow);break;case"y":e=Og(Fg.FullYear,1,0,!1,!0);break;case"yy":e=Og(Fg.FullYear,2,0,!0,!0);break;case"yyy":e=Og(Fg.FullYear,3,0,!1,!0);break;case"yyyy":e=Og(Fg.FullYear,4,0,!1,!0);break;case"Y":e=Rg(1);break;case"YY":e=Rg(2,!0);break;case"YYY":e=Rg(3);break;case"YYYY":e=Rg(4);break;case"M":case"L":e=Og(Fg.Month,1,1);break;case"MM":case"LL":e=Og(Fg.Month,2,1);break;case"MMM":e=Mg(Ag.Months,ug.Abbreviated);break;case"MMMM":e=Mg(Ag.Months,ug.Wide);break;case"MMMMM":e=Mg(Ag.Months,ug.Narrow);break;case"LLL":e=Mg(Ag.Months,ug.Abbreviated,sg.Standalone);break;case"LLLL":e=Mg(Ag.Months,ug.Wide,sg.Standalone);break;case"LLLLL":e=Mg(Ag.Months,ug.Narrow,sg.Standalone);break;case"w":e=Ng(1);break;case"ww":e=Ng(2);break;case"W":e=Ng(1,!0);break;case"d":e=Og(Fg.Date,1);break;case"dd":e=Og(Fg.Date,2);break;case"c":case"cc":e=Og(Fg.Day,1);break;case"ccc":e=Mg(Ag.Days,ug.Abbreviated,sg.Standalone);break;case"cccc":e=Mg(Ag.Days,ug.Wide,sg.Standalone);break;case"ccccc":e=Mg(Ag.Days,ug.Narrow,sg.Standalone);break;case"cccccc":e=Mg(Ag.Days,ug.Short,sg.Standalone);break;case"E":case"EE":case"EEE":e=Mg(Ag.Days,ug.Abbreviated);break;case"EEEE":e=Mg(Ag.Days,ug.Wide);break;case"EEEEE":e=Mg(Ag.Days,ug.Narrow);break;case"EEEEEE":e=Mg(Ag.Days,ug.Short);break;case"a":case"aa":case"aaa":e=Mg(Ag.DayPeriods,ug.Abbreviated);break;case"aaaa":e=Mg(Ag.DayPeriods,ug.Wide);break;case"aaaaa":e=Mg(Ag.DayPeriods,ug.Narrow);break;case"b":case"bb":case"bbb":e=Mg(Ag.DayPeriods,ug.Abbreviated,sg.Standalone,!0);break;case"bbbb":e=Mg(Ag.DayPeriods,ug.Wide,sg.Standalone,!0);break;case"bbbbb":e=Mg(Ag.DayPeriods,ug.Narrow,sg.Standalone,!0);break;case"B":case"BB":case"BBB":e=Mg(Ag.DayPeriods,ug.Abbreviated,sg.Format,!0);break;case"BBBB":e=Mg(Ag.DayPeriods,ug.Wide,sg.Format,!0);break;case"BBBBB":e=Mg(Ag.DayPeriods,ug.Narrow,sg.Format,!0);break;case"h":e=Og(Fg.Hours,1,-12);break;case"hh":e=Og(Fg.Hours,2,-12);break;case"H":e=Og(Fg.Hours,1);break;case"HH":e=Og(Fg.Hours,2);break;case"m":e=Og(Fg.Minutes,1);break;case"mm":e=Og(Fg.Minutes,2);break;case"s":e=Og(Fg.Seconds,1);break;case"ss":e=Og(Fg.Seconds,2);break;case"S":e=Og(Fg.FractionalSeconds,1);break;case"SS":e=Og(Fg.FractionalSeconds,2);break;case"SSS":e=Og(Fg.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":e=Pg(Eg.Short);break;case"ZZZZZ":e=Pg(Eg.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":e=Pg(Eg.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":e=Pg(Eg.Long);break;default:return null}return jg[t]=e,e}(t);l+=e?e(o,n,u):"''"===t?"'":t.replace(/(^'|'$)/g,"").replace(/''/g,"'")})),l}function Sg(t,e,n){const r=new Date(0);return r.setFullYear(t,e,n),r.setHours(0,0,0),r}function kg(t,e){const n=function(t){return _f(t)[Cf.LocaleId]}(t);if(Cg[n]=Cg[n]||{},Cg[n][e])return Cg[n][e];let r="";switch(e){case"shortDate":r=fg(t,lg.Short);break;case"mediumDate":r=fg(t,lg.Medium);break;case"longDate":r=fg(t,lg.Long);break;case"fullDate":r=fg(t,lg.Full);break;case"shortTime":r=hg(t,lg.Short);break;case"mediumTime":r=hg(t,lg.Medium);break;case"longTime":r=hg(t,lg.Long);break;case"fullTime":r=hg(t,lg.Full);break;case"short":const e=kg(t,"shortTime"),n=kg(t,"shortDate");r=Ig(dg(t,lg.Short),[e,n]);break;case"medium":const o=kg(t,"mediumTime"),i=kg(t,"mediumDate");r=Ig(dg(t,lg.Medium),[o,i]);break;case"long":const s=kg(t,"longTime"),u=kg(t,"longDate");r=Ig(dg(t,lg.Long),[s,u]);break;case"full":const l=kg(t,"fullTime"),a=kg(t,"fullDate");r=Ig(dg(t,lg.Full),[l,a])}return r&&(Cg[n][e]=r),r}function Ig(t,e){return e&&(t=t.replace(/\{([^}]+)}/g,(function(t,n){return null!=e&&n in e?e[n]:t}))),t}function Tg(t,e,n="-",r,o){let i="";(t<0||o&&t<=0)&&(o?t=1-t:(t=-t,i=n));let s=String(t);for(;s.length<e;)s="0"+s;return r&&(s=s.substr(s.length-e)),i+s}function Og(t,e,n=0,r=!1,o=!1){return function(i,s){let u=function(t,e){switch(t){case Fg.FullYear:return e.getFullYear();case Fg.Month:return e.getMonth();case Fg.Date:return e.getDate();case Fg.Hours:return e.getHours();case Fg.Minutes:return e.getMinutes();case Fg.Seconds:return e.getSeconds();case Fg.FractionalSeconds:return e.getMilliseconds();case Fg.Day:return e.getDay();default:throw new Error(`Unknown DateType value "${t}".`)}}(t,i);if((n>0||u>-n)&&(u+=n),t===Fg.Hours)0===u&&-12===n&&(u=12);else if(t===Fg.FractionalSeconds)return l=e,Tg(u,3).substr(0,l);var l;const a=pg(s,ag.MinusSign);return Tg(u,e,a,r,o)}}function Mg(t,e,n=sg.Format,r=!1){return function(o,i){return function(t,e,n,r,o,i){switch(n){case Ag.Months:return function(t,e,n){const r=_f(t),o=Dg([r[Cf.MonthsFormat],r[Cf.MonthsStandalone]],e);return Dg(o,n)}(e,o,r)[t.getMonth()];case Ag.Days:return function(t,e,n){const r=_f(t),o=Dg([r[Cf.DaysFormat],r[Cf.DaysStandalone]],e);return Dg(o,n)}(e,o,r)[t.getDay()];case Ag.DayPeriods:const s=t.getHours(),u=t.getMinutes();if(i){const t=function(t){const e=_f(t);return mg(e),(e[Cf.ExtraData][2]||[]).map((t=>"string"==typeof t?_g(t):[_g(t[0]),_g(t[1])]))}(e),n=function(t,e,n){const r=_f(t);mg(r);const o=Dg([r[Cf.ExtraData][0],r[Cf.ExtraData][1]],e)||[];return Dg(o,n)||[]}(e,o,r),i=t.findIndex((t=>{if(Array.isArray(t)){const[e,n]=t,r=s>=e.hours&&u>=e.minutes,o=s<n.hours||s===n.hours&&u<n.minutes;if(e.hours<n.hours){if(r&&o)return!0}else if(r||o)return!0}else if(t.hours===s&&t.minutes===u)return!0;return!1}));if(-1!==i)return n[i]}return function(t,e,n){const r=_f(t),o=Dg([r[Cf.DayPeriodsFormat],r[Cf.DayPeriodsStandalone]],e);return Dg(o,n)}(e,o,r)[s<12?0:1];case Ag.Eras:return function(t,e){return Dg(_f(t)[Cf.Eras],e)}(e,r)[t.getFullYear()<=0?0:1];default:throw new Error(`unexpected translation type ${n}`)}}(o,i,t,e,n,r)}}function Pg(t){return function(e,n,r){const o=-1*r,i=pg(n,ag.MinusSign),s=o>0?Math.floor(o/60):Math.ceil(o/60);switch(t){case Eg.Short:return(o>=0?"+":"")+Tg(s,2,i)+Tg(Math.abs(o%60),2,i);case Eg.ShortGMT:return"GMT"+(o>=0?"+":"")+Tg(s,1,i);case Eg.Long:return"GMT"+(o>=0?"+":"")+Tg(s,2,i)+":"+Tg(Math.abs(o%60),2,i);case Eg.Extended:return 0===r?"Z":(o>=0?"+":"")+Tg(s,2,i)+":"+Tg(Math.abs(o%60),2,i);default:throw new Error(`Unknown zone width "${t}"`)}}}!function(t){t[t.Short=0]="Short",t[t.ShortGMT=1]="ShortGMT",t[t.Long=2]="Long",t[t.Extended=3]="Extended"}(Eg||(Eg={})),function(t){t[t.FullYear=0]="FullYear",t[t.Month=1]="Month",t[t.Date=2]="Date",t[t.Hours=3]="Hours",t[t.Minutes=4]="Minutes",t[t.Seconds=5]="Seconds",t[t.FractionalSeconds=6]="FractionalSeconds",t[t.Day=7]="Day"}(Fg||(Fg={})),function(t){t[t.DayPeriods=0]="DayPeriods",t[t.Days=1]="Days",t[t.Months=2]="Months",t[t.Eras=3]="Eras"}(Ag||(Ag={}));function Bg(t){return Sg(t.getFullYear(),t.getMonth(),t.getDate()+(4-t.getDay()))}function Ng(t,e=!1){return function(n,r){let o;if(e){const t=new Date(n.getFullYear(),n.getMonth(),1).getDay()-1,e=n.getDate();o=1+Math.floor((e+t)/7)}else{const t=Bg(n),e=function(t){const e=Sg(t,0,1).getDay();return Sg(t,0,1+(e<=4?4:11)-e)}(t.getFullYear()),r=t.getTime()-e.getTime();o=1+Math.round(r/6048e5)}return Tg(o,t,pg(r,ag.MinusSign))}}function Rg(t,e=!1){return function(n,r){return Tg(Bg(n).getFullYear(),t,pg(r,ag.MinusSign),e)}}const jg={};function Lg(t,e){t=t.replace(/:/g,"");const n=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(n)?e:n}function Vg(t){return t instanceof Date&&!isNaN(t.valueOf())}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Hg=/^(\d+)?\.((\d+)(-(\d+))?)?$/,$g=".",Ug="0";function zg(t,e,n,r,o,i,s=!1){let u="",l=!1;if(isFinite(t)){let a=function(t){let e,n,r,o,i,s=Math.abs(t)+"",u=0;(n=s.indexOf($g))>-1&&(s=s.replace($g,""));(r=s.search(/e/i))>0?(n<0&&(n=r),n+=+s.slice(r+1),s=s.substring(0,r)):n<0&&(n=s.length);for(r=0;s.charAt(r)===Ug;r++);if(r===(i=s.length))e=[0],n=1;else{for(i--;s.charAt(i)===Ug;)i--;for(n-=r,e=[],o=0;r<=i;r++,o++)e[o]=Number(s.charAt(r))}n>22&&(e=e.splice(0,21),u=n-1,n=1);return{digits:e,exponent:u,integerLen:n}}(t);s&&(a=function(t){if(0===t.digits[0])return t;const e=t.digits.length-t.integerLen;t.exponent?t.exponent+=2:(0===e?t.digits.push(0,0):1===e&&t.digits.push(0),t.integerLen+=2);return t}(a));let c=e.minInt,f=e.minFrac,h=e.maxFrac;if(i){const t=i.match(Hg);if(null===t)throw new Error(`${i} is not a valid digit info`);const e=t[1],n=t[3],r=t[5];null!=e&&(c=Wg(e)),null!=n&&(f=Wg(n)),null!=r?h=Wg(r):null!=n&&f>h&&(h=f)}!function(t,e,n){if(e>n)throw new Error(`The minimum number of digits after fraction (${e}) is higher than the maximum (${n}).`);let r=t.digits,o=r.length-t.integerLen;const i=Math.min(Math.max(e,o),n);let s=i+t.integerLen,u=r[s];if(s>0){r.splice(Math.max(t.integerLen,s));for(let t=s;t<r.length;t++)r[t]=0}else{o=Math.max(0,o),t.integerLen=1,r.length=Math.max(1,s=i+1),r[0]=0;for(let t=1;t<s;t++)r[t]=0}if(u>=5)if(s-1<0){for(let e=0;e>s;e--)r.unshift(0),t.integerLen++;r.unshift(1),t.integerLen++}else r[s-1]++;for(;o<Math.max(0,i);o++)r.push(0);let l=0!==i;const a=e+t.integerLen,c=r.reduceRight((function(t,e,n,r){return e+=t,r[n]=e<10?e:e-10,l&&(0===r[n]&&n>=a?r.pop():l=!1),e>=10?1:0}),0);c&&(r.unshift(c),t.integerLen++)}(a,f,h);let d=a.digits,p=a.integerLen;const y=a.exponent;let g=[];for(l=d.every((t=>!t));p<c;p++)d.unshift(0);for(;p<0;p++)d.unshift(0);p>0?g=d.splice(p,d.length):(g=d,d=[0]);const m=[];for(d.length>=e.lgSize&&m.unshift(d.splice(-e.lgSize,d.length).join(""));d.length>e.gSize;)m.unshift(d.splice(-e.gSize,d.length).join(""));d.length&&m.unshift(d.join("")),u=m.join(pg(n,r)),g.length&&(u+=pg(n,o)+g.join("")),y&&(u+=pg(n,ag.Exponential)+"+"+y)}else u=pg(n,ag.Infinity);return u=t<0&&!l?e.negPre+u+e.negSuf:e.posPre+u+e.posSuf,u}function Zg(t,e,n,r,o){const i=Gg(yg(e,og.Currency),pg(e,ag.MinusSign));i.minFrac=function(t){let e;const n=rg[t];return n&&(e=n[2]),"number"==typeof e?e:2}(r),i.maxFrac=i.minFrac;return zg(t,i,e,ag.CurrencyGroup,ag.CurrencyDecimal,o).replace("¤",n).replace("¤","").trim()}function Gg(t,e="-"){const n={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},r=t.split(";"),o=r[0],i=r[1],s=-1!==o.indexOf($g)?o.split($g):[o.substring(0,o.lastIndexOf(Ug)+1),o.substring(o.lastIndexOf(Ug)+1)],u=s[0],l=s[1]||"";n.posPre=u.substr(0,u.indexOf("#"));for(let t=0;t<l.length;t++){const e=l.charAt(t);e===Ug?n.minFrac=n.maxFrac=t+1:"#"===e?n.maxFrac=t+1:n.posSuf+=e}const a=u.split(",");if(n.gSize=a[1]?a[1].length:0,n.lgSize=a[2]||a[1]?(a[2]||a[1]).length:0,i){const t=o.length-n.posPre.length-n.posSuf.length,e=i.indexOf("#");n.negPre=i.substr(0,e).replace(/'/g,""),n.negSuf=i.substr(e+t).replace(/'/g,"")}else n.negPre=e+n.posPre,n.negSuf=n.posSuf;return n}function Wg(t){const e=parseInt(t);if(isNaN(e))throw new Error("Invalid integer literal when parsing "+t);return e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class qg{}function Yg(t,e,n,r){let o=`=${t}`;if(e.indexOf(o)>-1)return o;if(o=n.getPluralCategory(t,r),e.indexOf(o)>-1)return o;if(e.indexOf("other")>-1)return"other";throw new Error(`No plural message found for value "${t}"`)}class Kg extends qg{constructor(t){super(),this.locale=t}getPluralCategory(t,e){switch(gg(e||this.locale)(t)){case ig.Zero:return"zero";case ig.One:return"one";case ig.Two:return"two";case ig.Few:return"few";case ig.Many:return"many";default:return"other"}}}Kg.ɵfac=function(t){return new(t||Kg)(po(Kp))},Kg.ɵprov=It({token:Kg,factory:Kg.ɵfac});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Qg{constructor(t,e,n,r){this._iterableDiffers=t,this._keyValueDiffers=e,this._ngEl=n,this._renderer=r,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(t){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof t?t.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(t){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof t?t.split(/\s+/):t,this._rawClass&&(_l(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const t=this._iterableDiffer.diff(this._rawClass);t&&this._applyIterableChanges(t)}else if(this._keyValueDiffer){const t=this._keyValueDiffer.diff(this._rawClass);t&&this._applyKeyValueChanges(t)}}_applyKeyValueChanges(t){t.forEachAddedItem((t=>this._toggleClass(t.key,t.currentValue))),t.forEachChangedItem((t=>this._toggleClass(t.key,t.currentValue))),t.forEachRemovedItem((t=>{t.previousValue&&this._toggleClass(t.key,!1)}))}_applyIterableChanges(t){t.forEachAddedItem((t=>{if("string"!=typeof t.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${gt(t.item)}`);this._toggleClass(t.item,!0)})),t.forEachRemovedItem((t=>this._toggleClass(t.item,!1)))}_applyClasses(t){t&&(Array.isArray(t)||t instanceof Set?t.forEach((t=>this._toggleClass(t,!0))):Object.keys(t).forEach((e=>this._toggleClass(e,!!t[e]))))}_removeClasses(t){t&&(Array.isArray(t)||t instanceof Set?t.forEach((t=>this._toggleClass(t,!1))):Object.keys(t).forEach((t=>this._toggleClass(t,!1))))}_toggleClass(t,e){(t=t.trim())&&t.split(/\s+/g).forEach((t=>{e?this._renderer.addClass(this._ngEl.nativeElement,t):this._renderer.removeClass(this._ngEl.nativeElement,t)}))}}Qg.ɵfac=function(t){return new(t||Qg)(wa(My),wa(By),wa(Zh),wa(qh))},Qg.ɵdir=ye({type:Qg,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"}});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Jg{constructor(t){this._viewContainerRef=t,this._componentRef=null,this._moduleRef=null}ngOnChanges(t){if(this._viewContainerRef.clear(),this._componentRef=null,this.ngComponentOutlet){const e=this.ngComponentOutletInjector||this._viewContainerRef.parentInjector;if(t.ngComponentOutletNgModuleFactory)if(this._moduleRef&&this._moduleRef.destroy(),this.ngComponentOutletNgModuleFactory){const t=e.get(ud);this._moduleRef=this.ngComponentOutletNgModuleFactory.create(t.injector)}else this._moduleRef=null;const n=(this._moduleRef?this._moduleRef.componentFactoryResolver:e.get(Uh)).resolveComponentFactory(this.ngComponentOutlet);this._componentRef=this._viewContainerRef.createComponent(n,this._viewContainerRef.length,e,this.ngComponentOutletContent)}}ngOnDestroy(){this._moduleRef&&this._moduleRef.destroy()}}Jg.ɵfac=function(t){return new(t||Jg)(wa(Ud))},Jg.ɵdir=ye({type:Jg,selectors:[["","ngComponentOutlet",""]],inputs:{ngComponentOutlet:"ngComponentOutlet",ngComponentOutletInjector:"ngComponentOutletInjector",ngComponentOutletContent:"ngComponentOutletContent",ngComponentOutletNgModuleFactory:"ngComponentOutletNgModuleFactory"},features:[Oe]});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Xg{constructor(t,e,n,r){this.$implicit=t,this.ngForOf=e,this.index=n,this.count=r}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}class tm{constructor(t,e,n){this._viewContainer=t,this._template=e,this._differs=n,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){const t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){const e=this._viewContainer;t.forEachOperation(((t,n,r)=>{if(null==t.previousIndex)e.createEmbeddedView(this._template,new Xg(t.item,this._ngForOf,-1,-1),null===r?void 0:r);else if(null==r)e.remove(null===n?void 0:n);else if(null!==n){const o=e.get(n);e.move(o,r),em(o,t)}}));for(let t=0,n=e.length;t<n;t++){const r=e.get(t).context;r.index=t,r.count=n,r.ngForOf=this._ngForOf}t.forEachIdentityChange((t=>{em(e.get(t.currentIndex),t)}))}static ngTemplateContextGuard(t,e){return!0}}function em(t,e){t.context.$implicit=e.item}tm.ɵfac=function(t){return new(t||tm)(wa(Ud),wa(Ld),wa(My))},tm.ɵdir=ye({type:tm,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class nm{constructor(t,e){this._viewContainer=t,this._context=new rm,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=e}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){om("ngIfThen",t),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){om("ngIfElse",t),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(t,e){return!0}}nm.ɵfac=function(t){return new(t||nm)(wa(Ud),wa(Ld))},nm.ɵdir=ye({type:nm,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}});class rm{constructor(){this.$implicit=null,this.ngIf=null}}function om(t,e){if(!!(e&&!e.createEmbeddedView))throw new Error(`${t} must be a TemplateRef, but received '${gt(e)}'.`)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class im{constructor(t,e){this._viewContainerRef=t,this._templateRef=e,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(t){t&&!this._created?this.create():!t&&this._created&&this.destroy()}}class sm{constructor(){this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(t){this._ngSwitch=t,0===this._caseCount&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(t){this._defaultViews||(this._defaultViews=[]),this._defaultViews.push(t)}_matchCase(t){const e=t==this._ngSwitch;return this._lastCasesMatched=this._lastCasesMatched||e,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),e}_updateDefaultCases(t){if(this._defaultViews&&t!==this._defaultUsed){this._defaultUsed=t;for(let e=0;e<this._defaultViews.length;e++){this._defaultViews[e].enforceState(t)}}}}sm.ɵfac=function(t){return new(t||sm)},sm.ɵdir=ye({type:sm,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}});class um{constructor(t,e,n){this.ngSwitch=n,n._addCase(),this._view=new im(t,e)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}}um.ɵfac=function(t){return new(t||um)(wa(Ud),wa(Ld),wa(sm,9))},um.ɵdir=ye({type:um,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}});class lm{constructor(t,e,n){n._addDefault(new im(t,e))}}lm.ɵfac=function(t){return new(t||lm)(wa(Ud),wa(Ld),wa(sm,9))},lm.ɵdir=ye({type:lm,selectors:[["","ngSwitchDefault",""]]});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class am{constructor(t){this._localization=t,this._caseViews={}}set ngPlural(t){this._switchValue=t,this._updateView()}addCase(t,e){this._caseViews[t]=e}_updateView(){this._clearViews();const t=Object.keys(this._caseViews),e=Yg(this._switchValue,t,this._localization);this._activateView(this._caseViews[e])}_clearViews(){this._activeView&&this._activeView.destroy()}_activateView(t){t&&(this._activeView=t,this._activeView.create())}}am.ɵfac=function(t){return new(t||am)(wa(qg))},am.ɵdir=ye({type:am,selectors:[["","ngPlural",""]],inputs:{ngPlural:"ngPlural"}});class cm{constructor(t,e,n,r){this.value=t;const o=!isNaN(Number(t));r.addCase(o?`=${t}`:t,new im(n,e))}}cm.ɵfac=function(t){return new(t||cm)(Sr("ngPluralCase"),wa(Ld),wa(Ud),wa(am,1))},cm.ɵdir=ye({type:cm,selectors:[["","ngPluralCase",""]]});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class fm{constructor(t,e,n){this._ngEl=t,this._differs=e,this._renderer=n,this._ngStyle=null,this._differ=null}set ngStyle(t){this._ngStyle=t,!this._differ&&t&&(this._differ=this._differs.find(t).create())}ngDoCheck(){if(this._differ){const t=this._differ.diff(this._ngStyle);t&&this._applyChanges(t)}}_setStyle(t,e){const[n,r]=t.split(".");null!=(e=null!=e&&r?`${e}${r}`:e)?this._renderer.setStyle(this._ngEl.nativeElement,n,e):this._renderer.removeStyle(this._ngEl.nativeElement,n)}_applyChanges(t){t.forEachRemovedItem((t=>this._setStyle(t.key,null))),t.forEachAddedItem((t=>this._setStyle(t.key,t.currentValue))),t.forEachChangedItem((t=>this._setStyle(t.key,t.currentValue)))}}fm.ɵfac=function(t){return new(t||fm)(wa(Zh),wa(By),wa(qh))},fm.ɵdir=ye({type:fm,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class hm{constructor(t){this._viewContainerRef=t,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null}ngOnChanges(t){if(t.ngTemplateOutlet){const t=this._viewContainerRef;this._viewRef&&t.remove(t.indexOf(this._viewRef)),this._viewRef=this.ngTemplateOutlet?t.createEmbeddedView(this.ngTemplateOutlet,this.ngTemplateOutletContext):null}else this._viewRef&&t.ngTemplateOutletContext&&this.ngTemplateOutletContext&&(this._viewRef.context=this.ngTemplateOutletContext)}}hm.ɵfac=function(t){return new(t||hm)(wa(Ud))},hm.ɵdir=ye({type:hm,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet"},features:[Oe]});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function dm(t,e){return Error(`InvalidPipeArgument: '${e}' for pipe '${gt(t)}'`)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const pm=new class{createSubscription(t,e){return t.then(e,(t=>{throw t}))}dispose(t){}onDestroy(t){}},ym=new class{createSubscription(t,e){return t.subscribe({next:e,error:t=>{throw t}})}dispose(t){t.unsubscribe()}onDestroy(t){t.unsubscribe()}};class gm{constructor(t){this._ref=t,this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null}ngOnDestroy(){this._subscription&&this._dispose()}transform(t){return this._obj?t!==this._obj?(this._dispose(),this.transform(t)):this._latestValue:(t&&this._subscribe(t),this._latestValue)}_subscribe(t){this._obj=t,this._strategy=this._selectStrategy(t),this._subscription=this._strategy.createSubscription(t,(e=>this._updateLatestValue(t,e)))}_selectStrategy(t){if(Oa(t))return pm;if(Ma(t))return ym;throw dm(gm,t)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(t,e){t===this._obj&&(this._latestValue=e,this._ref.markForCheck())}}gm.ɵfac=function(t){return new(t||gm)(wa(wy,16))},gm.ɵpipe=ge({name:"async",type:gm,pure:!1});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class mm{transform(t){if(null==t)return null;if("string"!=typeof t)throw dm(mm,t);return t.toLowerCase()}}mm.ɵfac=function(t){return new(t||mm)},mm.ɵpipe=ge({name:"lowercase",type:mm,pure:!0});const Dm=/(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g;class _m{transform(t){if(null==t)return null;if("string"!=typeof t)throw dm(_m,t);return t.replace(Dm,(t=>t[0].toUpperCase()+t.substr(1).toLowerCase()))}}_m.ɵfac=function(t){return new(t||_m)},_m.ɵpipe=ge({name:"titlecase",type:_m,pure:!0});class vm{transform(t){if(null==t)return null;if("string"!=typeof t)throw dm(vm,t);return t.toUpperCase()}}vm.ɵfac=function(t){return new(t||vm)},vm.ɵpipe=ge({name:"uppercase",type:vm,pure:!0});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const wm=new Rr("DATE_PIPE_DEFAULT_TIMEZONE");class Cm{constructor(t,e){this.locale=t,this.defaultTimezone=e}transform(t,e="mediumDate",n,r){if(null==t||""===t||t!=t)return null;try{return xg(t,e,r||this.locale,n??this.defaultTimezone??void 0)}catch(t){throw dm(Cm,t.message)}}}Cm.ɵfac=function(t){return new(t||Cm)(wa(Kp,16),wa(wm,24))},Cm.ɵpipe=ge({name:"date",type:Cm,pure:!0});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const bm=/#/g;class Em{constructor(t){this._localization=t}transform(t,e,n){if(null==t)return"";if("object"!=typeof e||null===e)throw dm(Em,e);return e[Yg(t,Object.keys(e),this._localization,n)].replace(bm,t.toString())}}Em.ɵfac=function(t){return new(t||Em)(wa(qg,16))},Em.ɵpipe=ge({name:"i18nPlural",type:Em,pure:!0});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Fm{transform(t,e){if(null==t)return"";if("object"!=typeof e||"string"!=typeof t)throw dm(Fm,e);return e.hasOwnProperty(t)?e[t]:e.hasOwnProperty("other")?e.other:""}}Fm.ɵfac=function(t){return new(t||Fm)},Fm.ɵpipe=ge({name:"i18nSelect",type:Fm,pure:!0});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Am{transform(t){return JSON.stringify(t,null,2)}}Am.ɵfac=function(t){return new(t||Am)},Am.ɵpipe=ge({name:"json",type:Am,pure:!1});class xm{constructor(t){this.differs=t,this.keyValues=[],this.compareFn=Sm}transform(t,e=Sm){if(!t||!(t instanceof Map)&&"object"!=typeof t)return null;this.differ||(this.differ=this.differs.find(t).create());const n=this.differ.diff(t),r=e!==this.compareFn;return n&&(this.keyValues=[],n.forEachItem((t=>{
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var e,n;this.keyValues.push((e=t.key,n=t.currentValue,{key:e,value:n}))}))),(n||r)&&(this.keyValues.sort(e),this.compareFn=e),this.keyValues}}function Sm(t,e){const n=t.key,r=e.key;if(n===r)return 0;if(void 0===n)return 1;if(void 0===r)return-1;if(null===n)return 1;if(null===r)return-1;if("string"==typeof n&&"string"==typeof r)return n<r?-1:1;if("number"==typeof n&&"number"==typeof r)return n-r;if("boolean"==typeof n&&"boolean"==typeof r)return n<r?-1:1;const o=String(n),i=String(r);return o==i?0:o<i?-1:1}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */xm.ɵfac=function(t){return new(t||xm)(wa(By,16))},xm.ɵpipe=ge({name:"keyvalue",type:xm,pure:!1});class km{constructor(t){this._locale=t}transform(t,e,n){if(!Om(t))return null;n=n||this._locale;try{return function(t,e,n){return zg(t,Gg(yg(e,og.Decimal),pg(e,ag.MinusSign)),e,ag.Group,ag.Decimal,n)}(Mm(t),n,e)}catch(t){throw dm(km,t.message)}}}km.ɵfac=function(t){return new(t||km)(wa(Kp,16))},km.ɵpipe=ge({name:"number",type:km,pure:!0});class Im{constructor(t){this._locale=t}transform(t,e,n){if(!Om(t))return null;n=n||this._locale;try{return function(t,e,n){return zg(t,Gg(yg(e,og.Percent),pg(e,ag.MinusSign)),e,ag.Group,ag.Decimal,n,!0).replace(new RegExp("%","g"),pg(e,ag.PercentSign))}(Mm(t),n,e)}catch(t){throw dm(Im,t.message)}}}Im.ɵfac=function(t){return new(t||Im)(wa(Kp,16))},Im.ɵpipe=ge({name:"percent",type:Im,pure:!0});class Tm{constructor(t,e="USD"){this._locale=t,this._defaultCurrencyCode=e}transform(t,e=this._defaultCurrencyCode,n="symbol",r,o){if(!Om(t))return null;o=o||this._locale,"boolean"==typeof n&&(n=n?"symbol":"code");let i=e||this._defaultCurrencyCode;"code"!==n&&(i="symbol"===n||"symbol-narrow"===n?vg(i,"symbol"===n?"wide":"narrow",o):n);try{return Zg(Mm(t),o,i,e,r)}catch(t){throw dm(Tm,t.message)}}}function Om(t){return!(null==t||""===t||t!=t)}function Mm(t){if("string"==typeof t&&!isNaN(Number(t)-parseFloat(t)))return Number(t);if("number"!=typeof t)throw new Error(`${t} is not a number`);return t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */Tm.ɵfac=function(t){return new(t||Tm)(wa(Kp,16),wa(Qp,16))},Tm.ɵpipe=ge({name:"currency",type:Tm,pure:!0});class Pm{transform(t,e,n){if(null==t)return null;if(!this.supports(t))throw dm(Pm,t);return t.slice(e,n)}supports(t){return"string"==typeof t||Array.isArray(t)}}Pm.ɵfac=function(t){return new(t||Pm)},Pm.ɵpipe=ge({name:"slice",type:Pm,pure:!1});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Bm{}Bm.ɵfac=function(t){return new(t||Bm)},Bm.ɵmod=he({type:Bm}),Bm.ɵinj=Tt({providers:[{provide:qg,useClass:Kg}]});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
new Kh("13.1.1");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Nm{}Nm.ɵprov=It({token:Nm,providedIn:"root",factory:()=>new Rm(po(zy),window)});class Rm{constructor(t,e){this.document=t,this.window=e,this.offset=()=>[0,0]}setOffset(t){Array.isArray(t)?this.offset=()=>t:this.offset=t}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(t){this.supportsScrolling()&&this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){if(!this.supportsScrolling())return;const e=function(t,e){const n=t.getElementById(e)||t.getElementsByName(e)[0];if(n)return n;if("function"==typeof t.createTreeWalker&&t.body&&(t.body.createShadowRoot||t.body.attachShadow)){const n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT);let r=n.currentNode;for(;r;){const t=r.shadowRoot;if(t){const n=t.getElementById(e)||t.querySelector(`[name="${e}"]`);if(n)return n}r=n.nextNode()}}return null}(this.document,t);e&&(this.scrollToElement(e),this.attemptFocus(e))}setHistoryScrollRestoration(t){if(this.supportScrollRestoration()){const e=this.window.history;e&&e.scrollRestoration&&(e.scrollRestoration=t)}}scrollToElement(t){const e=t.getBoundingClientRect(),n=e.left+this.window.pageXOffset,r=e.top+this.window.pageYOffset,o=this.offset();this.window.scrollTo(n-o[0],r-o[1])}attemptFocus(t){return t.focus(),this.document.activeElement===t}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const t=jm(this.window.history)||jm(Object.getPrototypeOf(this.window.history));return!(!t||!t.writable&&!t.set)}catch{return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}function jm(t){return Object.getOwnPropertyDescriptor(t,"scrollRestoration")}console.log(mm)})();