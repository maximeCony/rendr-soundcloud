require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"LentoW":[function(require,module,exports){
'use strict';

var BaseApp = require('rendr/shared/app');

/**
 * Extend the `BaseApp` class, adding any custom methods or overrides.
 */
module.exports = BaseApp.extend();
},{"rendr/shared/app":55}],"app/app":[function(require,module,exports){
module.exports=require('LentoW');
},{}],"rCVOCK":[function(require,module,exports){
var RendrBase = require('rendr/shared/base/collection');

module.exports = RendrBase.extend({});

},{"rendr/shared/base/collection":56}],"app/collections/base":[function(require,module,exports){
module.exports=require('rCVOCK');
},{}],"Jx33pV":[function(require,module,exports){
'use strict';

var Track = require('../models/track');
var Base = require('./base');

module.exports = Base.extend({
  
  model: Track,
  
  url: '/users/:user_id/favorites'

});
module.exports.id = 'Likes';

},{"../models/track":"SIFePP","./base":"rCVOCK"}],"app/collections/likes":[function(require,module,exports){
module.exports=require('Jx33pV');
},{}],"n5JPJf":[function(require,module,exports){
'use strict';

module.exports = {
  index: function(params, callback) {
    callback();
  }
};
},{}],"app/controllers/home_controller":[function(require,module,exports){
module.exports=require('n5JPJf');
},{}],"app/controllers/like_controller":[function(require,module,exports){
module.exports=require('RjKD4d');
},{}],"RjKD4d":[function(require,module,exports){
'use strict';

module.exports = {
  
  index: function(params, callback) {
    // TODO: find a better way
    params.client_id = 'ff4519ae1db0890f2ffb602c3bc0c8bd';
    var spec = {
      collection: { collection: 'Likes', params: params }
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, result);
    });
  }

};
},{}],"app/models/base":[function(require,module,exports){
module.exports=require('qnrstJ');
},{}],"qnrstJ":[function(require,module,exports){
var RendrBase = require('rendr/shared/base/model');

module.exports = RendrBase.extend({});

},{"rendr/shared/base/model":57}],"app/models/track":[function(require,module,exports){
module.exports=require('SIFePP');
},{}],"SIFePP":[function(require,module,exports){
'use strict';

var Base = require('./base');

module.exports = Base.extend({
  url: '/tracks/:track_id'
});
module.exports.id = 'Track';

},{"./base":"qnrstJ"}],"app/router":[function(require,module,exports){
module.exports=require('86KJBY');
},{}],"86KJBY":[function(require,module,exports){
'use strict';

var BaseClientRouter = require('rendr/client/router');

var Router = module.exports = function Router(options) {
  BaseClientRouter.call(this, options);
};

/**
 * Set up inheritance.
 */
Router.prototype = Object.create(BaseClientRouter.prototype);
Router.prototype.constructor = BaseClientRouter;
},{"rendr/client/router":51}],"app/routes":[function(require,module,exports){
module.exports=require('bbl2t2');
},{}],"bbl2t2":[function(require,module,exports){
'use strict';

module.exports = function(match) {
  match('', 'home#index');
  match('/:user_id/likes', 'like#index');
};

},{}],"rFRVhs":[function(require,module,exports){
module.exports = function(Handlebars) {

var templates = {};

templates["home/index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "";
},"useData":true});

templates["like/index"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <li>\n      "
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "\n    </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<h1>Likes</h1>\n\n<ul>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.models : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</ul>\n";
},"useData":true});

return templates;

};
},{}],"app/templates/compiledTemplates":[function(require,module,exports){
module.exports=require('rFRVhs');
},{}],"6kWBjj":[function(require,module,exports){
'use strict';

var RendrView = require('rendr/shared/base/view');

// Create a base view, for adding common extensions to our
// application's views.
module.exports = RendrView.extend({});
},{"rendr/shared/base/view":59}],"app/views/base":[function(require,module,exports){
module.exports=require('6kWBjj');
},{}],"app/views/home/index":[function(require,module,exports){
module.exports=require('to5G6a');
},{}],"to5G6a":[function(require,module,exports){
'use strict';

var BaseView = require('../base');

module.exports = BaseView.extend({
  
  className: 'home_index_view',

  events: {
    'submit #username-form': 'navigateToUserPage'
  },

  navigateToUserPage: function (e) {
    e.preventDefault();
    var username = this.$el.find('input[name=username]').val();
    if (!username) return;
    this.app.router.navigate(username + '/likes');
  }

});
module.exports.id = 'home/index';

},{"../base":"6kWBjj"}],"tdLU7A":[function(require,module,exports){
'use strict';

var BaseView = require('../base');

module.exports = BaseView.extend({
  
  className: 'likes_index_view',

});
module.exports.id = 'like/index';

},{"../base":"6kWBjj"}],"app/views/like/index":[function(require,module,exports){
module.exports=require('tdLU7A');
},{}],"EoZ3ID":[function(require,module,exports){
(function (global){
(function browserifyShim(module, exports, define, browserify_shim__define__module__export__) {
/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);

; browserify_shim__define__module__export__(typeof $ != "undefined" ? $ : window.$);

}).call(global, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"jquery":[function(require,module,exports){
module.exports=require('EoZ3ID');
},{}],29:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],"k+WLb7":[function(require,module,exports){
var Handlebars = require('handlebars');

if (Handlebars['default']) {
  // If we only have the Handlebars runtime available, use that here.
  // Until Handlebars 3, we have to use 'default' instead of just requiring 'handlebars'.
  Handlebars = Handlebars['default'];
}

module.exports = function(options){
  var localExports = {},
      templateFinder = options.templateFinder || require('./shared/templateFinder')(Handlebars);

  /**
   * Export the `Handlebars` object, so other modules can add helpers, partials, etc.
   */
  localExports.Handlebars = Handlebars;

  /**
   * `getTemplate` is available on both client and server.
   */
  localExports.getTemplate = templateFinder.getTemplate;

  /**
   * Expose `templatePatterns` for manipulating how `getTemplate` finds templates.
   */
  localExports.templatePatterns = templateFinder.templatePatterns;

  /**
   * The default pattern `/.+/` is very greedy; it matches anything, including nested paths.
   * To add rules that should match before this default rule, `unshift` them from this array.
   */
  localExports.templatePatterns.push({pattern: /.+/, src: options.entryPath + 'app/templates/compiledTemplates'})

  /**
   * `getLayout` should only be used on the server.
   */
  if (typeof window === 'undefined') {
    // server only, "hide" it from r.js compiler
    // by having require statement with variable
    var serverOnlyLayoutFinderPath = './server/layoutFinder';
    localExports.getLayout = require(serverOnlyLayoutFinderPath)(Handlebars).getLayout;
  } else {
    localExports.getLayout = function() {
      throw new Error('getLayout is only available on the server.');
    };
  }

  /**
   * Register helpers, available on both client and server.
   *
   * Export it so other modules can register helpers as well.
   */
  localExports.registerHelpers = function registerHelpers(helpersModule) {
    var helpers = helpersModule(Handlebars, localExports.getTemplate);

    for (var key in helpers) {
      if (!helpers.hasOwnProperty(key)) continue;
      Handlebars.registerHelper(key, helpers[key]);
    }
  };

  /**
   * Register the pre-bundled Rendr helpers.
   */
  var rendrHelpers = require('./shared/helpers');
  localExports.registerHelpers(rendrHelpers);

  return localExports;
}

},{"./shared/helpers":42,"./shared/templateFinder":49,"handlebars":40}],"rendr-handlebars":[function(require,module,exports){
module.exports=require('k+WLb7');
},{}],32:[function(require,module,exports){
/**
 * Grab important underscored properties from the current context.
 * These properties come from BaseView::decorateTemplateData().
 */
module.exports = function (obj) {
  var options, keys, value;

  keys = [
    '_app',
    '_view',
    '_model',
    '_collection',
    '_block'
  ];

  options = keys.reduce(function(memo, key) {
    value = obj[key];
    if (value) {
      memo[key] = value;
    }
    return memo;
  }, {});

  return options;
};

},{}],33:[function(require,module,exports){
/**
 * Get a property that is being passed down through helpers, such as `_app`
 * or `_view`. It can either live on the context, i.e. `this._app`, or in the
 * `options.data` object passed to the helper, i.e. `options.data._app`, in the
 * case of a block helper like `each`.
 */
module.exports = function (key, context, options) {
  return context[key] || (options.data || {})[key];
}

},{}],34:[function(require,module,exports){
"use strict";
/*globals Handlebars: true */
var base = require("./handlebars/base");

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)
var SafeString = require("./handlebars/safe-string")["default"];
var Exception = require("./handlebars/exception")["default"];
var Utils = require("./handlebars/utils");
var runtime = require("./handlebars/runtime");

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
var create = function() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = SafeString;
  hb.Exception = Exception;
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function(spec) {
    return runtime.template(spec, hb);
  };

  return hb;
};

var Handlebars = create();
Handlebars.create = create;

Handlebars['default'] = Handlebars;

exports["default"] = Handlebars;
},{"./handlebars/base":35,"./handlebars/exception":36,"./handlebars/runtime":37,"./handlebars/safe-string":38,"./handlebars/utils":39}],35:[function(require,module,exports){
"use strict";
var Utils = require("./utils");
var Exception = require("./exception")["default"];

var VERSION = "2.0.0";
exports.VERSION = VERSION;var COMPILER_REVISION = 6;
exports.COMPILER_REVISION = COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1'
};
exports.REVISION_CHANGES = REVISION_CHANGES;
var isArray = Utils.isArray,
    isFunction = Utils.isFunction,
    toString = Utils.toString,
    objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials) {
  this.helpers = helpers || {};
  this.partials = partials || {};

  registerDefaultHelpers(this);
}

exports.HandlebarsEnvironment = HandlebarsEnvironment;HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: logger,
  log: log,

  registerHelper: function(name, fn) {
    if (toString.call(name) === objectType) {
      if (fn) { throw new Exception('Arg not supported with multiple helpers'); }
      Utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function(name) {
    delete this.helpers[name];
  },

  registerPartial: function(name, partial) {
    if (toString.call(name) === objectType) {
      Utils.extend(this.partials,  name);
    } else {
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function(name) {
    delete this.partials[name];
  }
};

function registerDefaultHelpers(instance) {
  instance.registerHelper('helperMissing', function(/* [args, ]options */) {
    if(arguments.length === 1) {
      // A missing field in a {{foo}} constuct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new Exception("Missing helper: '" + arguments[arguments.length-1].name + "'");
    }
  });

  instance.registerHelper('blockHelperMissing', function(context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if(context === true) {
      return fn(this);
    } else if(context === false || context == null) {
      return inverse(this);
    } else if (isArray(context)) {
      if(context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = createFrame(options.data);
        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.name);
        options = {data: data};
      }

      return fn(context, options);
    }
  });

  instance.registerHelper('each', function(context, options) {
    if (!options) {
      throw new Exception('Must pass iterator to #each');
    }

    var fn = options.fn, inverse = options.inverse;
    var i = 0, ret = "", data;

    var contextPath;
    if (options.data && options.ids) {
      contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (isFunction(context)) { context = context.call(this); }

    if (options.data) {
      data = createFrame(options.data);
    }

    if(context && typeof context === 'object') {
      if (isArray(context)) {
        for(var j = context.length; i<j; i++) {
          if (data) {
            data.index = i;
            data.first = (i === 0);
            data.last  = (i === (context.length-1));

            if (contextPath) {
              data.contextPath = contextPath + i;
            }
          }
          ret = ret + fn(context[i], { data: data });
        }
      } else {
        for(var key in context) {
          if(context.hasOwnProperty(key)) {
            if(data) {
              data.key = key;
              data.index = i;
              data.first = (i === 0);

              if (contextPath) {
                data.contextPath = contextPath + key;
              }
            }
            ret = ret + fn(context[key], {data: data});
            i++;
          }
        }
      }
    }

    if(i === 0){
      ret = inverse(this);
    }

    return ret;
  });

  instance.registerHelper('if', function(conditional, options) {
    if (isFunction(conditional)) { conditional = conditional.call(this); }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function(conditional, options) {
    return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
  });

  instance.registerHelper('with', function(context, options) {
    if (isFunction(context)) { context = context.call(this); }

    var fn = options.fn;

    if (!Utils.isEmpty(context)) {
      if (options.data && options.ids) {
        var data = createFrame(options.data);
        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]);
        options = {data:data};
      }

      return fn(context, options);
    } else {
      return options.inverse(this);
    }
  });

  instance.registerHelper('log', function(message, options) {
    var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
    instance.log(level, message);
  });

  instance.registerHelper('lookup', function(obj, field) {
    return obj && obj[field];
  });
}

var logger = {
  methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

  // State enum
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
  level: 3,

  // can be overridden in the host environment
  log: function(level, message) {
    if (logger.level <= level) {
      var method = logger.methodMap[level];
      if (typeof console !== 'undefined' && console[method]) {
        console[method].call(console, message);
      }
    }
  }
};
exports.logger = logger;
var log = logger.log;
exports.log = log;
var createFrame = function(object) {
  var frame = Utils.extend({}, object);
  frame._parent = object;
  return frame;
};
exports.createFrame = createFrame;
},{"./exception":36,"./utils":39}],36:[function(require,module,exports){
"use strict";

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var line;
  if (node && node.firstLine) {
    line = node.firstLine;

    message += ' - ' + line + ':' + node.firstColumn;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  if (line) {
    this.lineNumber = line;
    this.column = node.firstColumn;
  }
}

Exception.prototype = new Error();

exports["default"] = Exception;
},{}],37:[function(require,module,exports){
"use strict";
var Utils = require("./utils");
var Exception = require("./exception")["default"];
var COMPILER_REVISION = require("./base").COMPILER_REVISION;
var REVISION_CHANGES = require("./base").REVISION_CHANGES;
var createFrame = require("./base").createFrame;

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = COMPILER_REVISION;

  if (compilerRevision !== currentRevision) {
    if (compilerRevision < currentRevision) {
      var runtimeVersions = REVISION_CHANGES[currentRevision],
          compilerVersions = REVISION_CHANGES[compilerRevision];
      throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. "+
            "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").");
    } else {
      // Use the embedded version info since the runtime doesn't know about this revision yet
      throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. "+
            "Please update your runtime to a newer version ("+compilerInfo[1]+").");
    }
  }
}

exports.checkRevision = checkRevision;// TODO: Remove this line and break up compilePartial

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new Exception("No environment passed to template");
  }
  if (!templateSpec || !templateSpec.main) {
    throw new Exception('Unknown template object: ' + typeof templateSpec);
  }

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as psuedo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  var invokePartialWrapper = function(partial, indent, name, context, hash, helpers, partials, data, depths) {
    if (hash) {
      context = Utils.extend({}, context, hash);
    }

    var result = env.VM.invokePartial.call(this, partial, name, context, helpers, partials, data, depths);

    if (result == null && env.compile) {
      var options = { helpers: helpers, partials: partials, data: data, depths: depths };
      partials[name] = env.compile(partial, { data: data !== undefined, compat: templateSpec.compat }, env);
      result = partials[name](context, options);
    }
    if (result != null) {
      if (indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
    }
  };

  // Just add water
  var container = {
    lookup: function(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        if (depths[i] && depths[i][name] != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function(i) {
      return templateSpec[i];
    },

    programs: [],
    program: function(i, data, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths) {
        programWrapper = program(this, i, fn, data, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = program(this, i, fn);
      }
      return programWrapper;
    },

    data: function(data, depth) {
      while (data && depth--) {
        data = data._parent;
      }
      return data;
    },
    merge: function(param, common) {
      var ret = param || common;

      if (param && common && (param !== common)) {
        ret = Utils.extend({}, common, param);
      }

      return ret;
    },

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  var ret = function(context, options) {
    options = options || {};
    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths;
    if (templateSpec.useDepths) {
      depths = options.depths ? [context].concat(options.depths) : [context];
    }

    return templateSpec.main.call(container, context, container.helpers, container.partials, data, depths);
  };
  ret.isTop = true;

  ret._setup = function(options) {
    if (!options.partial) {
      container.helpers = container.merge(options.helpers, env.helpers);

      if (templateSpec.usePartial) {
        container.partials = container.merge(options.partials, env.partials);
      }
    } else {
      container.helpers = options.helpers;
      container.partials = options.partials;
    }
  };

  ret._child = function(i, data, depths) {
    if (templateSpec.useDepths && !depths) {
      throw new Exception('must pass parent depths');
    }

    return program(container, i, templateSpec[i], data, depths);
  };
  return ret;
}

exports.template = template;function program(container, i, fn, data, depths) {
  var prog = function(context, options) {
    options = options || {};

    return fn.call(container, context, container.helpers, container.partials, options.data || data, depths && [context].concat(depths));
  };
  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  return prog;
}

exports.program = program;function invokePartial(partial, name, context, helpers, partials, data, depths) {
  var options = { partial: true, helpers: helpers, partials: partials, data: data, depths: depths };

  if(partial === undefined) {
    throw new Exception("The partial " + name + " could not be found");
  } else if(partial instanceof Function) {
    return partial(context, options);
  }
}

exports.invokePartial = invokePartial;function noop() { return ""; }

exports.noop = noop;function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? createFrame(data) : {};
    data.root = context;
  }
  return data;
}
},{"./base":35,"./exception":36,"./utils":39}],38:[function(require,module,exports){
"use strict";
// Build out our basic SafeString type
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = function() {
  return "" + this.string;
};

exports["default"] = SafeString;
},{}],39:[function(require,module,exports){
"use strict";
/*jshint -W004 */
var SafeString = require("./safe-string")["default"];

var escape = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;"
};

var badChars = /[&<>"'`]/g;
var possible = /[&<>"'`]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

exports.extend = extend;var toString = Object.prototype.toString;
exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
var isFunction = function(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  isFunction = function(value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
var isFunction;
exports.isFunction = isFunction;
/* istanbul ignore next */
var isArray = Array.isArray || function(value) {
  return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
};
exports.isArray = isArray;

function escapeExpression(string) {
  // don't escape SafeStrings, since they're already safe
  if (string instanceof SafeString) {
    return string.toString();
  } else if (string == null) {
    return "";
  } else if (!string) {
    return string + '';
  }

  // Force a string conversion as this will be done by the append regardless and
  // the regex test will do this transparently behind the scenes, causing issues if
  // an object's to string has escaped characters in it.
  string = "" + string;

  if(!possible.test(string)) { return string; }
  return string.replace(badChars, escapeChar);
}

exports.escapeExpression = escapeExpression;function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

exports.isEmpty = isEmpty;function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}

exports.appendContextPath = appendContextPath;
},{"./safe-string":38}],40:[function(require,module,exports){
// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports = require('./dist/cjs/handlebars.runtime');

},{"./dist/cjs/handlebars.runtime":34}],41:[function(require,module,exports){
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

},{}],42:[function(require,module,exports){
module.exports = function(Handlebars, getTemplate) {
  return {
    view: require('./helpers/view')(Handlebars),
    partial: require('./helpers/partial')(Handlebars, getTemplate),
    json: require('./helpers/json')(Handlebars),
    each: require('./helpers/each')(Handlebars),
    serverToClientJson: require('./helpers/serverToClientJson')(Handlebars),
    forEach: require('./helpers/forEach')
  };
};

},{"./helpers/each":43,"./helpers/forEach":44,"./helpers/json":45,"./helpers/partial":46,"./helpers/serverToClientJson":47,"./helpers/view":48}],43:[function(require,module,exports){
/**
* Extend `each` to pass through important context.
*/

var _ = require('underscore'),
    getOptionsFromContext = require('../../lib/getOptions'),
    oldEach;

module.exports = function(Handlebars) {
  oldEach = oldEach || Handlebars.helpers.each;

  return function (context, options) {
    options.data = Handlebars.createFrame(options.data || {});

    // Make sure `this._app`, `this._view`, etc are available.
    _.extend(options.data, getOptionsFromContext(this));

    // Call the original helper with new context.
    return oldEach.call(this, context, options);
  }
};

},{"../../lib/getOptions":32,"underscore":41}],44:[function(require,module,exports){
/**
* Create a `forEach` helper that works on a few more cases and gives more flexibility
* when dealing with arrays, objects, or collections
*/
var _ = require('underscore');

module.exports = function (collection, opts) {
  var len = collection && collection.length,
      app = this._app || this.app,
      isCollection = app.modelUtils.isCollection(collection),
      buffer = '';

  if (_.isEmpty(collection)) {
    return opts.inverse(_.extend({}, this, {
      _app: app,
      _model: this._model || this.model,
      _collection: this._collection || this.collection,
      _view: this._view || this.view
    }));
  }

  // iterate the models on a collection
  if (isCollection) {
    collection = collection.models
  }

  _.each(collection, function (value, key) {
    if (isCollection && opts.hash.toJSON) {
      value = value.toJSON();
    }

    var item = _.extend({
      key: key,
      value: value,
      _app: this._app || this.app,
      _model: this._model || this.model,
      _collection: this._collection || this.collection,
      _view: this._view || this.view
    }, opts.hash);

    // adding extra attributes to an item for array traversal
    if (_.isArray(collection) || isCollection) {
      item = _.extend(item, {
        _total: len,
        _isFirst: key === 0,
        _isLast: key === (len - 1)
      });
    }

    buffer += opts.fn(item);
  }.bind(this));

  return buffer;
};

},{"underscore":41}],45:[function(require,module,exports){
module.exports = function (Handlebars) {
  return function (object, spacing) {
    return new Handlebars.SafeString(JSON.stringify(object, null, spacing) || 'null');
  }
}

},{}],46:[function(require,module,exports){
/**
 * create an html partial
 */
var getProperty = require('../../lib/getProperty'),
    _ = require('underscore');

module.exports = function (Handlebars, getTemplate) {
  return function (templateName, options) {
    var data, html, context, template;

    template = getTemplate(templateName);
    context = options.hash || {};

    // First try to use Handlebars' hash arguments as the context for the
    // partial, if present.
    //
    // ex: `{{partial "users/photo" user=user}}`
    if (_.isEmpty(context)) {
      // If there are no hash arguments given, then inherit the parent context.
      //
      // ex: `{{partial "users/photo"}}`
      context = this;
    } else {
      // If a hash argument is given with key `context`, then use that as the context.
      //
      // ex: `{{partial "users/photo" context=user}}`
      if (context.hasOwnProperty('context')) {
        context = context.context;
      }
    }

    context = _.clone(context);
    context._app = getProperty('_app', this, options);
    if (_.isFunction(options.fn)) {
      context._block = options.fn(context);
    }

    html = template(context);
    return new Handlebars.SafeString(html);
  };
};

},{"../../lib/getProperty":33,"underscore":41}],47:[function(require,module,exports){
module.exports = function (Handlebars) {
  return function (obj) {
    var data = escape(JSON.stringify(obj));
    return new Handlebars.SafeString('JSON.parse(unescape("' + data + '"))');
  };
};

},{}],48:[function(require,module,exports){
/**
 * Helper to create new views in the templates
 */

var _ = require('underscore'),
    getProperty = require('../../lib/getProperty'),
    BaseView;

module.exports = function (Handlebars) {
  return function (viewName, options) {
    var isServer = typeof window === 'undefined',
        html, viewOptions, view, app;

    viewOptions = options.hash || {};
    app = getProperty('_app', this, options);

    // Pass through a reference to the app.
    if (app) {
      viewOptions.app = app;
      viewName = app.modelUtils.underscorize(viewName);
    } else{
      throw new Error("An App instance is required when rendering a view, it could not be extracted from the options.")
    }

    // allow views to be passed optional block elements
    if (_.isFunction(options.fn)) {
      var blockOptions = _.extend({}, this, viewOptions);
      viewOptions._block = options.fn(blockOptions);
    }

    if (isServer) {
      var parentView = getProperty('_view', this, options);
      html = getServerHtml(viewName, viewOptions, parentView);
    } else {
      html = getClientPlaceholder(viewName, viewOptions);
    }

    return new Handlebars.SafeString(html);
  };
};

function getServerHtml(viewName, viewOptions, parentView) {
  var ViewClass, view;

  if (!BaseView) { BaseView = require('rendr/shared/base/view'); }

  // Pass through a reference to the parent view.
  if (parentView) { viewOptions.parentView = parentView; }

  // get the Backbone.View based on viewName
  ViewClass = BaseView.getView(viewName, viewOptions.app.options.entryPath);
  view = new ViewClass(viewOptions);

  // create the outerHTML using className, tagName
  return view.getHtml();
}

function getClientPlaceholder(viewName, viewOptions) {
  if (!BaseView) { BaseView = require('rendr/shared/base/view'); }
  var fetchSummary;

  // Builds a fetch_summary attribute
  viewOptions = BaseView.parseModelAndCollection(viewOptions.app.modelUtils, viewOptions);
  fetchSummary = BaseView.extractFetchSummary(viewOptions.app.modelUtils, viewOptions);
  viewOptions['fetch_summary'] = fetchSummary
  viewOptions = _.omit(viewOptions, _.keys(fetchSummary).concat(['model', 'collection', 'app']));

  // create a list of data attributes
  var attrString = _.inject(viewOptions, function(memo, value, key) {
    if (_.isArray(value) || _.isObject(value)) { value = JSON.stringify(value); }
    return memo += " data-" + key + "=\"" + _.escape(value) + "\"";
  }, '');

  return '<div data-render="true"' + attrString +' data-view="'+ viewName +'"></div>';
}

},{"../../lib/getProperty":33,"rendr/shared/base/view":59,"underscore":41}],49:[function(require,module,exports){
var cachedTemplates = {};

module.exports = function(Handlebars) {

  /**
   * Provide a way for apps to specify that different template name patterns
   * should use different compiled template files.
   *
   */
  var templatePatterns = [];

  /**
   * Given a template name, return the compiled Handlebars template.
   */
  function getTemplate(templateName) {
    /**
     * Find the correct source file for this template.
     */
    var src = getSrcForTemplate(templateName);

    /**
    * Allow compiledTemplates to be created asynchronously by lazy-requiring it.
    */
    if (!cachedTemplates[src]) {
      cachedTemplates[src] = require(src);

      /**
       * Make it play nicely with both AMD and CommonJS.
       * The `grunt-contrib-handlebars` module  produces different stucture
       * of compiled templates with `amd` vs `commonjs` options. Accommodate
       * both options here. the `amd` option results in templates as an Object,
       * whereas the `commonjs` option results in templates as a Function.
       */
      if (typeof cachedTemplates[src] == 'function') {
        cachedTemplates[src] = cachedTemplates[src](Handlebars);
      }
    }

    return cachedTemplates[src][templateName];
  }

  /**
   * For a given template name, find the correct compiled templates source file
   * based on pattern matching on the template name.
   */
  function getSrcForTemplate(templateName) {
    var currentPattern = templatePatterns.filter(function(obj) {
      return obj.pattern.test(templateName);
    })[0];

    if (currentPattern == null) {
      throw new Error('No pattern found to match template "' + templateName + '".');
    }

    return currentPattern.src;
  }

  return {
    getTemplate: getTemplate,
    getSrcForTemplate: getSrcForTemplate,
    templatePatterns: templatePatterns
  }
};

},{}],50:[function(require,module,exports){
var _ = require('underscore'),
    Backbone = require('backbone'),
    BaseView = require('../shared/base/view'),
    isServer = (typeof window === 'undefined');


if (!isServer) {
  Backbone.$ = window.$ || require('jquery');
}

module.exports = BaseView.extend({
  el: 'body',

  constructor: function() {
    BaseView.apply(this, arguments);

    _.defaults(this.options, {
      contentEl: '#content'
    });

    /**
     * Grab the element that contains the main view.
     */
    this.$content = Backbone.$(this.options.contentEl);
    this._bindInterceptClick();
  },

  hasPushState: typeof window !== "undefined" && window.history.pushState != null,

  render: function() {},

  setCurrentView: function(view) {
    this.$content.html(view.el);
    view.render();
  },

  _bindInterceptClick: function() {
    this.$el.on('click', 'a:not([data-pass-thru])', this._interceptClick.bind(this));
  },

  _interceptClick: function(e) {
    /**
     * We want the actual value of the attribute, rather than the
     * full URL, so we use jQuery instead of just e.currentTarget.href
     */
    var href = Backbone.$(e.currentTarget).attr('href');
    if (this.shouldInterceptClick(href, e.currentTarget, e)) {
      e.preventDefault();
      this.app.router.redirectTo(href);
    }
  },

  shouldInterceptClick: function(href, el, e) {
    var hashParts, isHashClick;

    if (!(href && this.hasPushState) || e.metaKey || e.shiftKey) {
      return false;
    }

    hashParts = href.split('#');
    isHashClick = hashParts.length > 1 && hashParts[0] === window.location.pathname;
    return !isHashClick && href.slice(0, 1) === '/' && href.slice(0, 2) !== '//';
  }

});

},{"../shared/base/view":59,"backbone":53,"jquery":"EoZ3ID","underscore":54}],51:[function(require,module,exports){
/**
 * Since we make rendr files AMD friendly on app setup stage
 * we need to pretend that this code is pure commonjs
 * means no AMD-style require calls
 */
var requireAMD = require;

var _ = require('underscore'),
    Backbone = require('backbone'),
    BaseRouter = require('../shared/base/router'),
    BaseView = require('../shared/base/view'),
    $ = (typeof window !== 'undefined' && window.$) || require('jquery'),
    extractParamNamesRe = /:(\w+)/g,
    plusRe = /\+/g,
    firstRender = true,
    defaultRootPath = '';

Backbone.$ = $;

module.exports = ClientRouter;

function ClientRouter(options) {
  this._router = new Backbone.Router();
  BaseRouter.apply(this, arguments);

  this.app = options.app;

  var AppView = this.options.appViewClass;

  // We do this here so that it's available in AppView initialization.
  this.app.router = this;

  this.on('route:add', this.addBackboneRoute, this);
  this.on('action:start', this.trackAction, this);
  this.app.on('reload', this.renderView, this);

  this.appView = new AppView({
    app: this.app
  });

  this.appView.render();
  this.buildRoutes();
  this.initialize(options);
}

/**
 * Set up inheritance.
 */
ClientRouter.prototype = Object.create(BaseRouter.prototype);
ClientRouter.prototype.constructor = ClientRouter;

ClientRouter.prototype.currentFragment = null;

ClientRouter.prototype.previousFragment = null;

/**
 * In a controller action, can access the current route
 * definition with `this.currentRoute`.
 */
ClientRouter.prototype.currentRoute = null;

/**
 * Instance of Backbone.Router used to manage browser history.
 */
ClientRouter.prototype._router = null;

/**
 * We need to reverse the routes in the client because
 * Backbone.History matches in reverse.
 */
ClientRouter.prototype.reverseRoutes = true;

ClientRouter.prototype.initialize = _.noop;

/**
 * Piggyback on adding new route definition events
 * to also add to Backbone.Router.
 */
ClientRouter.prototype.addBackboneRoute = function(routeObj) {
  var handler, name, pattern, route;

  // Backbone.History wants no leading slash on strings.
  pattern = (routeObj[0] instanceof RegExp) ? routeObj[0] : routeObj[0].slice(1);
  route = routeObj[1];
  handler = routeObj[2];
  name = route.controller + ":" + route.action;

  this._router.route(pattern, name, handler);
};

ClientRouter.prototype.getHandler = function(action, pattern, route) {
  var router = this;

  // abstract action call
  function actionCall(action, params) {
    action.call(router, params, router.getRenderCallback(route));
  }

  // This returns a function which is called by Backbone.history.
  return function() {
    var params, paramsArray, redirect;

    router.trigger('action:start', route, firstRender);
    router.currentRoute = route;

    if (firstRender) {
      firstRender = false;
      BaseView.attach(router.app, null, function(views) {
        router.currentView = router.getMainView(views);
        router.trigger('action:end', route, true);
      });
    } else {
      paramsArray = _.toArray(arguments);
      params = router.getParamsHash(pattern, paramsArray, window.location.search);

      redirect = router.getRedirect(route, params);
      /**
       * If `redirect` is present, then do a redirect and return.
       */
      if (redirect != null) {
        router.redirectTo(redirect, {replace: true});
      } else {
        if (!action) {
          throw new Error("Missing action \"" + route.action + "\" for controller \"" + route.controller + "\"");
        } else {
          actionCall(action, params);
        }
      }
    }
  };
};

/**
 * Can be overridden by applications
 * if the initial render is more complicated.
 */
ClientRouter.prototype.getMainView = function(views) {
  var $content = this.appView.$content;
  return _.find(views, function(view) {
    return view.$el.parent().is($content);
  });
};

/**
 * Proxy to Backbone.Router.
 */
ClientRouter.prototype.navigate = function(path, options) {
  var fragment = Backbone.history.getFragment(path);

  // check if local router can handle route
  if (this.matchesAnyRoute(fragment)) {
    this._router.navigate.apply(this._router, arguments);
  } else {
    this.redirectTo(fragment, {pushState: false});
  }
};

ClientRouter.prototype.getParamsHash = function(pattern, paramsArray, search) {
  var paramNames, params, query;

  if (pattern instanceof RegExp) {
    paramNames = paramsArray.map(function(val, i) { return String(i); });
  } else {
    paramNames = (pattern.match(extractParamNamesRe) || []).map(function(name) {
      return name.slice(1);
    });
  }

  params = (paramNames || []).reduce(function(memo, name, i) {
    memo[name] = decodeURIComponent(paramsArray[i]);
    return memo;
  }, {});

  query = search.slice(1).split('&').reduce(function(memo, queryPart) {
    var parts = queryPart.split('=');
    if (parts.length > 1) {
      memo[parts[0]] = decodeURIComponent(parts[1].replace(plusRe, ' '));
    }
    return memo;
  }, {});

  return _.extend(query, params);
};

ClientRouter.prototype.matchingRoute = function(path) {
  return _.find(Backbone.history.handlers, function(handler) {
    return handler.route.test(path);
  });
};

ClientRouter.prototype.matchesAnyRoute = function(path) {
  return this.matchingRoute(path) != null;
};

ClientRouter.prototype.redirectTo = function(path, options) {
  var hashParts;

  if (options == null) {
    options = {};
  }
  _.defaults(options, {
    trigger: true,
    pushState: true,
    replace: false
  });

  if (options.pushState === false) {
    // Do a full-page redirect.
    window.location.href = path;
  } else {
    // Do a pushState navigation.
    hashParts = path.split('#');
    path = hashParts[0];

    // But then trigger the hash afterwards.
    if (hashParts.length > 1) {
      this.once('action:end', function() {
        window.location.hash = hashParts[1];
      });
    }

    // Ignore hash for routing.
    this.navigate(path, options);
  }
};

ClientRouter.prototype.handleErr = function(err, route) {
  this.trigger('action:error', err, route);
}

ClientRouter.prototype.getRenderCallback = function(route) {
  return function(err, viewPath, locals) {
    if (err) return this.handleErr(err, route);

    var View, _router = this;

    if (this.currentView) {
      this.currentView.remove();
    }

    var defaults = this.defaultHandlerParams(viewPath, locals, route);
    viewPath = defaults[0];
    locals = defaults[1];

    locals = locals || {};
    _.extend(locals, { fetch_summary: BaseView.extractFetchSummary(this.app.modelUtils, locals) });

    // Inject the app.
    locals.app = this.app;
    this.getView(viewPath, this.options.entryPath, function(View) {
      _router.currentView = new View(locals);
      _router.renderView();

      _router.trigger('action:end', route, firstRender);
    });
  }.bind(this);
};

ClientRouter.prototype.renderView = function() {
  this.appView.setCurrentView(this.currentView);
};

ClientRouter.prototype.start = function() {
  Backbone.history.start({
    pushState: true,
    hashChange: false,
    root: this.options.rootPath || defaultRootPath
  });
};

ClientRouter.prototype.trackAction = function() {
  this.previousFragment = this.currentFragment;
  this.currentFragment = Backbone.history.getFragment();
};

ClientRouter.prototype.getView = function(key, entryPath, callback) {
  var View = BaseView.getView(key, entryPath, function(View) {
    // TODO: Make it function (err, View)
    if (!_.isFunction(View)) {
      throw new Error("View '" + key + "' not found.");
    }

    callback(View);
  });
};

},{"../shared/base/router":58,"../shared/base/view":59,"backbone":53,"jquery":"EoZ3ID","underscore":54}],52:[function(require,module,exports){
(function (process){
/*!
 * async
 * https://github.com/caolan/async
 *
 * Copyright 2010-2014 Caolan McMahon
 * Released under the MIT license
 */
/*jshint onevar: false, indent:4 */
/*global setImmediate: false, setTimeout: false, console: false */
(function () {

    var async = {};

    // global on the server, window in the browser
    var root, previous_async;

    root = this;
    if (root != null) {
      previous_async = root.async;
    }

    async.noConflict = function () {
        root.async = previous_async;
        return async;
    };

    function only_once(fn) {
        var called = false;
        return function() {
            if (called) throw new Error("Callback was already called.");
            called = true;
            fn.apply(root, arguments);
        }
    }

    //// cross-browser compatiblity functions ////

    var _toString = Object.prototype.toString;

    var _isArray = Array.isArray || function (obj) {
        return _toString.call(obj) === '[object Array]';
    };

    var _each = function (arr, iterator) {
        if (arr.forEach) {
            return arr.forEach(iterator);
        }
        for (var i = 0; i < arr.length; i += 1) {
            iterator(arr[i], i, arr);
        }
    };

    var _map = function (arr, iterator) {
        if (arr.map) {
            return arr.map(iterator);
        }
        var results = [];
        _each(arr, function (x, i, a) {
            results.push(iterator(x, i, a));
        });
        return results;
    };

    var _reduce = function (arr, iterator, memo) {
        if (arr.reduce) {
            return arr.reduce(iterator, memo);
        }
        _each(arr, function (x, i, a) {
            memo = iterator(memo, x, i, a);
        });
        return memo;
    };

    var _keys = function (obj) {
        if (Object.keys) {
            return Object.keys(obj);
        }
        var keys = [];
        for (var k in obj) {
            if (obj.hasOwnProperty(k)) {
                keys.push(k);
            }
        }
        return keys;
    };

    //// exported async module functions ////

    //// nextTick implementation with browser-compatible fallback ////
    if (typeof process === 'undefined' || !(process.nextTick)) {
        if (typeof setImmediate === 'function') {
            async.nextTick = function (fn) {
                // not a direct alias for IE10 compatibility
                setImmediate(fn);
            };
            async.setImmediate = async.nextTick;
        }
        else {
            async.nextTick = function (fn) {
                setTimeout(fn, 0);
            };
            async.setImmediate = async.nextTick;
        }
    }
    else {
        async.nextTick = process.nextTick;
        if (typeof setImmediate !== 'undefined') {
            async.setImmediate = function (fn) {
              // not a direct alias for IE10 compatibility
              setImmediate(fn);
            };
        }
        else {
            async.setImmediate = async.nextTick;
        }
    }

    async.each = function (arr, iterator, callback) {
        callback = callback || function () {};
        if (!arr.length) {
            return callback();
        }
        var completed = 0;
        _each(arr, function (x) {
            iterator(x, only_once(done) );
        });
        function done(err) {
          if (err) {
              callback(err);
              callback = function () {};
          }
          else {
              completed += 1;
              if (completed >= arr.length) {
                  callback();
              }
          }
        }
    };
    async.forEach = async.each;

    async.eachSeries = function (arr, iterator, callback) {
        callback = callback || function () {};
        if (!arr.length) {
            return callback();
        }
        var completed = 0;
        var iterate = function () {
            iterator(arr[completed], function (err) {
                if (err) {
                    callback(err);
                    callback = function () {};
                }
                else {
                    completed += 1;
                    if (completed >= arr.length) {
                        callback();
                    }
                    else {
                        iterate();
                    }
                }
            });
        };
        iterate();
    };
    async.forEachSeries = async.eachSeries;

    async.eachLimit = function (arr, limit, iterator, callback) {
        var fn = _eachLimit(limit);
        fn.apply(null, [arr, iterator, callback]);
    };
    async.forEachLimit = async.eachLimit;

    var _eachLimit = function (limit) {

        return function (arr, iterator, callback) {
            callback = callback || function () {};
            if (!arr.length || limit <= 0) {
                return callback();
            }
            var completed = 0;
            var started = 0;
            var running = 0;

            (function replenish () {
                if (completed >= arr.length) {
                    return callback();
                }

                while (running < limit && started < arr.length) {
                    started += 1;
                    running += 1;
                    iterator(arr[started - 1], function (err) {
                        if (err) {
                            callback(err);
                            callback = function () {};
                        }
                        else {
                            completed += 1;
                            running -= 1;
                            if (completed >= arr.length) {
                                callback();
                            }
                            else {
                                replenish();
                            }
                        }
                    });
                }
            })();
        };
    };


    var doParallel = function (fn) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return fn.apply(null, [async.each].concat(args));
        };
    };
    var doParallelLimit = function(limit, fn) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return fn.apply(null, [_eachLimit(limit)].concat(args));
        };
    };
    var doSeries = function (fn) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return fn.apply(null, [async.eachSeries].concat(args));
        };
    };


    var _asyncMap = function (eachfn, arr, iterator, callback) {
        arr = _map(arr, function (x, i) {
            return {index: i, value: x};
        });
        if (!callback) {
            eachfn(arr, function (x, callback) {
                iterator(x.value, function (err) {
                    callback(err);
                });
            });
        } else {
            var results = [];
            eachfn(arr, function (x, callback) {
                iterator(x.value, function (err, v) {
                    results[x.index] = v;
                    callback(err);
                });
            }, function (err) {
                callback(err, results);
            });
        }
    };
    async.map = doParallel(_asyncMap);
    async.mapSeries = doSeries(_asyncMap);
    async.mapLimit = function (arr, limit, iterator, callback) {
        return _mapLimit(limit)(arr, iterator, callback);
    };

    var _mapLimit = function(limit) {
        return doParallelLimit(limit, _asyncMap);
    };

    // reduce only has a series version, as doing reduce in parallel won't
    // work in many situations.
    async.reduce = function (arr, memo, iterator, callback) {
        async.eachSeries(arr, function (x, callback) {
            iterator(memo, x, function (err, v) {
                memo = v;
                callback(err);
            });
        }, function (err) {
            callback(err, memo);
        });
    };
    // inject alias
    async.inject = async.reduce;
    // foldl alias
    async.foldl = async.reduce;

    async.reduceRight = function (arr, memo, iterator, callback) {
        var reversed = _map(arr, function (x) {
            return x;
        }).reverse();
        async.reduce(reversed, memo, iterator, callback);
    };
    // foldr alias
    async.foldr = async.reduceRight;

    var _filter = function (eachfn, arr, iterator, callback) {
        var results = [];
        arr = _map(arr, function (x, i) {
            return {index: i, value: x};
        });
        eachfn(arr, function (x, callback) {
            iterator(x.value, function (v) {
                if (v) {
                    results.push(x);
                }
                callback();
            });
        }, function (err) {
            callback(_map(results.sort(function (a, b) {
                return a.index - b.index;
            }), function (x) {
                return x.value;
            }));
        });
    };
    async.filter = doParallel(_filter);
    async.filterSeries = doSeries(_filter);
    // select alias
    async.select = async.filter;
    async.selectSeries = async.filterSeries;

    var _reject = function (eachfn, arr, iterator, callback) {
        var results = [];
        arr = _map(arr, function (x, i) {
            return {index: i, value: x};
        });
        eachfn(arr, function (x, callback) {
            iterator(x.value, function (v) {
                if (!v) {
                    results.push(x);
                }
                callback();
            });
        }, function (err) {
            callback(_map(results.sort(function (a, b) {
                return a.index - b.index;
            }), function (x) {
                return x.value;
            }));
        });
    };
    async.reject = doParallel(_reject);
    async.rejectSeries = doSeries(_reject);

    var _detect = function (eachfn, arr, iterator, main_callback) {
        eachfn(arr, function (x, callback) {
            iterator(x, function (result) {
                if (result) {
                    main_callback(x);
                    main_callback = function () {};
                }
                else {
                    callback();
                }
            });
        }, function (err) {
            main_callback();
        });
    };
    async.detect = doParallel(_detect);
    async.detectSeries = doSeries(_detect);

    async.some = function (arr, iterator, main_callback) {
        async.each(arr, function (x, callback) {
            iterator(x, function (v) {
                if (v) {
                    main_callback(true);
                    main_callback = function () {};
                }
                callback();
            });
        }, function (err) {
            main_callback(false);
        });
    };
    // any alias
    async.any = async.some;

    async.every = function (arr, iterator, main_callback) {
        async.each(arr, function (x, callback) {
            iterator(x, function (v) {
                if (!v) {
                    main_callback(false);
                    main_callback = function () {};
                }
                callback();
            });
        }, function (err) {
            main_callback(true);
        });
    };
    // all alias
    async.all = async.every;

    async.sortBy = function (arr, iterator, callback) {
        async.map(arr, function (x, callback) {
            iterator(x, function (err, criteria) {
                if (err) {
                    callback(err);
                }
                else {
                    callback(null, {value: x, criteria: criteria});
                }
            });
        }, function (err, results) {
            if (err) {
                return callback(err);
            }
            else {
                var fn = function (left, right) {
                    var a = left.criteria, b = right.criteria;
                    return a < b ? -1 : a > b ? 1 : 0;
                };
                callback(null, _map(results.sort(fn), function (x) {
                    return x.value;
                }));
            }
        });
    };

    async.auto = function (tasks, callback) {
        callback = callback || function () {};
        var keys = _keys(tasks);
        var remainingTasks = keys.length
        if (!remainingTasks) {
            return callback();
        }

        var results = {};

        var listeners = [];
        var addListener = function (fn) {
            listeners.unshift(fn);
        };
        var removeListener = function (fn) {
            for (var i = 0; i < listeners.length; i += 1) {
                if (listeners[i] === fn) {
                    listeners.splice(i, 1);
                    return;
                }
            }
        };
        var taskComplete = function () {
            remainingTasks--
            _each(listeners.slice(0), function (fn) {
                fn();
            });
        };

        addListener(function () {
            if (!remainingTasks) {
                var theCallback = callback;
                // prevent final callback from calling itself if it errors
                callback = function () {};

                theCallback(null, results);
            }
        });

        _each(keys, function (k) {
            var task = _isArray(tasks[k]) ? tasks[k]: [tasks[k]];
            var taskCallback = function (err) {
                var args = Array.prototype.slice.call(arguments, 1);
                if (args.length <= 1) {
                    args = args[0];
                }
                if (err) {
                    var safeResults = {};
                    _each(_keys(results), function(rkey) {
                        safeResults[rkey] = results[rkey];
                    });
                    safeResults[k] = args;
                    callback(err, safeResults);
                    // stop subsequent errors hitting callback multiple times
                    callback = function () {};
                }
                else {
                    results[k] = args;
                    async.setImmediate(taskComplete);
                }
            };
            var requires = task.slice(0, Math.abs(task.length - 1)) || [];
            var ready = function () {
                return _reduce(requires, function (a, x) {
                    return (a && results.hasOwnProperty(x));
                }, true) && !results.hasOwnProperty(k);
            };
            if (ready()) {
                task[task.length - 1](taskCallback, results);
            }
            else {
                var listener = function () {
                    if (ready()) {
                        removeListener(listener);
                        task[task.length - 1](taskCallback, results);
                    }
                };
                addListener(listener);
            }
        });
    };

    async.retry = function(times, task, callback) {
        var DEFAULT_TIMES = 5;
        var attempts = [];
        // Use defaults if times not passed
        if (typeof times === 'function') {
            callback = task;
            task = times;
            times = DEFAULT_TIMES;
        }
        // Make sure times is a number
        times = parseInt(times, 10) || DEFAULT_TIMES;
        var wrappedTask = function(wrappedCallback, wrappedResults) {
            var retryAttempt = function(task, finalAttempt) {
                return function(seriesCallback) {
                    task(function(err, result){
                        seriesCallback(!err || finalAttempt, {err: err, result: result});
                    }, wrappedResults);
                };
            };
            while (times) {
                attempts.push(retryAttempt(task, !(times-=1)));
            }
            async.series(attempts, function(done, data){
                data = data[data.length - 1];
                (wrappedCallback || callback)(data.err, data.result);
            });
        }
        // If a callback is passed, run this as a controll flow
        return callback ? wrappedTask() : wrappedTask
    };

    async.waterfall = function (tasks, callback) {
        callback = callback || function () {};
        if (!_isArray(tasks)) {
          var err = new Error('First argument to waterfall must be an array of functions');
          return callback(err);
        }
        if (!tasks.length) {
            return callback();
        }
        var wrapIterator = function (iterator) {
            return function (err) {
                if (err) {
                    callback.apply(null, arguments);
                    callback = function () {};
                }
                else {
                    var args = Array.prototype.slice.call(arguments, 1);
                    var next = iterator.next();
                    if (next) {
                        args.push(wrapIterator(next));
                    }
                    else {
                        args.push(callback);
                    }
                    async.setImmediate(function () {
                        iterator.apply(null, args);
                    });
                }
            };
        };
        wrapIterator(async.iterator(tasks))();
    };

    var _parallel = function(eachfn, tasks, callback) {
        callback = callback || function () {};
        if (_isArray(tasks)) {
            eachfn.map(tasks, function (fn, callback) {
                if (fn) {
                    fn(function (err) {
                        var args = Array.prototype.slice.call(arguments, 1);
                        if (args.length <= 1) {
                            args = args[0];
                        }
                        callback.call(null, err, args);
                    });
                }
            }, callback);
        }
        else {
            var results = {};
            eachfn.each(_keys(tasks), function (k, callback) {
                tasks[k](function (err) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    if (args.length <= 1) {
                        args = args[0];
                    }
                    results[k] = args;
                    callback(err);
                });
            }, function (err) {
                callback(err, results);
            });
        }
    };

    async.parallel = function (tasks, callback) {
        _parallel({ map: async.map, each: async.each }, tasks, callback);
    };

    async.parallelLimit = function(tasks, limit, callback) {
        _parallel({ map: _mapLimit(limit), each: _eachLimit(limit) }, tasks, callback);
    };

    async.series = function (tasks, callback) {
        callback = callback || function () {};
        if (_isArray(tasks)) {
            async.mapSeries(tasks, function (fn, callback) {
                if (fn) {
                    fn(function (err) {
                        var args = Array.prototype.slice.call(arguments, 1);
                        if (args.length <= 1) {
                            args = args[0];
                        }
                        callback.call(null, err, args);
                    });
                }
            }, callback);
        }
        else {
            var results = {};
            async.eachSeries(_keys(tasks), function (k, callback) {
                tasks[k](function (err) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    if (args.length <= 1) {
                        args = args[0];
                    }
                    results[k] = args;
                    callback(err);
                });
            }, function (err) {
                callback(err, results);
            });
        }
    };

    async.iterator = function (tasks) {
        var makeCallback = function (index) {
            var fn = function () {
                if (tasks.length) {
                    tasks[index].apply(null, arguments);
                }
                return fn.next();
            };
            fn.next = function () {
                return (index < tasks.length - 1) ? makeCallback(index + 1): null;
            };
            return fn;
        };
        return makeCallback(0);
    };

    async.apply = function (fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function () {
            return fn.apply(
                null, args.concat(Array.prototype.slice.call(arguments))
            );
        };
    };

    var _concat = function (eachfn, arr, fn, callback) {
        var r = [];
        eachfn(arr, function (x, cb) {
            fn(x, function (err, y) {
                r = r.concat(y || []);
                cb(err);
            });
        }, function (err) {
            callback(err, r);
        });
    };
    async.concat = doParallel(_concat);
    async.concatSeries = doSeries(_concat);

    async.whilst = function (test, iterator, callback) {
        if (test()) {
            iterator(function (err) {
                if (err) {
                    return callback(err);
                }
                async.whilst(test, iterator, callback);
            });
        }
        else {
            callback();
        }
    };

    async.doWhilst = function (iterator, test, callback) {
        iterator(function (err) {
            if (err) {
                return callback(err);
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if (test.apply(null, args)) {
                async.doWhilst(iterator, test, callback);
            }
            else {
                callback();
            }
        });
    };

    async.until = function (test, iterator, callback) {
        if (!test()) {
            iterator(function (err) {
                if (err) {
                    return callback(err);
                }
                async.until(test, iterator, callback);
            });
        }
        else {
            callback();
        }
    };

    async.doUntil = function (iterator, test, callback) {
        iterator(function (err) {
            if (err) {
                return callback(err);
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if (!test.apply(null, args)) {
                async.doUntil(iterator, test, callback);
            }
            else {
                callback();
            }
        });
    };

    async.queue = function (worker, concurrency) {
        if (concurrency === undefined) {
            concurrency = 1;
        }
        function _insert(q, data, pos, callback) {
          if (!q.started){
            q.started = true;
          }
          if (!_isArray(data)) {
              data = [data];
          }
          if(data.length == 0) {
             // call drain immediately if there are no tasks
             return async.setImmediate(function() {
                 if (q.drain) {
                     q.drain();
                 }
             });
          }
          _each(data, function(task) {
              var item = {
                  data: task,
                  callback: typeof callback === 'function' ? callback : null
              };

              if (pos) {
                q.tasks.unshift(item);
              } else {
                q.tasks.push(item);
              }

              if (q.saturated && q.tasks.length === q.concurrency) {
                  q.saturated();
              }
              async.setImmediate(q.process);
          });
        }

        var workers = 0;
        var q = {
            tasks: [],
            concurrency: concurrency,
            saturated: null,
            empty: null,
            drain: null,
            started: false,
            paused: false,
            push: function (data, callback) {
              _insert(q, data, false, callback);
            },
            kill: function () {
              q.drain = null;
              q.tasks = [];
            },
            unshift: function (data, callback) {
              _insert(q, data, true, callback);
            },
            process: function () {
                if (!q.paused && workers < q.concurrency && q.tasks.length) {
                    var task = q.tasks.shift();
                    if (q.empty && q.tasks.length === 0) {
                        q.empty();
                    }
                    workers += 1;
                    var next = function () {
                        workers -= 1;
                        if (task.callback) {
                            task.callback.apply(task, arguments);
                        }
                        if (q.drain && q.tasks.length + workers === 0) {
                            q.drain();
                        }
                        q.process();
                    };
                    var cb = only_once(next);
                    worker(task.data, cb);
                }
            },
            length: function () {
                return q.tasks.length;
            },
            running: function () {
                return workers;
            },
            idle: function() {
                return q.tasks.length + workers === 0;
            },
            pause: function () {
                if (q.paused === true) { return; }
                q.paused = true;
                q.process();
            },
            resume: function () {
                if (q.paused === false) { return; }
                q.paused = false;
                q.process();
            }
        };
        return q;
    };
    
    async.priorityQueue = function (worker, concurrency) {
        
        function _compareTasks(a, b){
          return a.priority - b.priority;
        };
        
        function _binarySearch(sequence, item, compare) {
          var beg = -1,
              end = sequence.length - 1;
          while (beg < end) {
            var mid = beg + ((end - beg + 1) >>> 1);
            if (compare(item, sequence[mid]) >= 0) {
              beg = mid;
            } else {
              end = mid - 1;
            }
          }
          return beg;
        }
        
        function _insert(q, data, priority, callback) {
          if (!q.started){
            q.started = true;
          }
          if (!_isArray(data)) {
              data = [data];
          }
          if(data.length == 0) {
             // call drain immediately if there are no tasks
             return async.setImmediate(function() {
                 if (q.drain) {
                     q.drain();
                 }
             });
          }
          _each(data, function(task) {
              var item = {
                  data: task,
                  priority: priority,
                  callback: typeof callback === 'function' ? callback : null
              };
              
              q.tasks.splice(_binarySearch(q.tasks, item, _compareTasks) + 1, 0, item);

              if (q.saturated && q.tasks.length === q.concurrency) {
                  q.saturated();
              }
              async.setImmediate(q.process);
          });
        }
        
        // Start with a normal queue
        var q = async.queue(worker, concurrency);
        
        // Override push to accept second parameter representing priority
        q.push = function (data, priority, callback) {
          _insert(q, data, priority, callback);
        };
        
        // Remove unshift function
        delete q.unshift;

        return q;
    };

    async.cargo = function (worker, payload) {
        var working     = false,
            tasks       = [];

        var cargo = {
            tasks: tasks,
            payload: payload,
            saturated: null,
            empty: null,
            drain: null,
            drained: true,
            push: function (data, callback) {
                if (!_isArray(data)) {
                    data = [data];
                }
                _each(data, function(task) {
                    tasks.push({
                        data: task,
                        callback: typeof callback === 'function' ? callback : null
                    });
                    cargo.drained = false;
                    if (cargo.saturated && tasks.length === payload) {
                        cargo.saturated();
                    }
                });
                async.setImmediate(cargo.process);
            },
            process: function process() {
                if (working) return;
                if (tasks.length === 0) {
                    if(cargo.drain && !cargo.drained) cargo.drain();
                    cargo.drained = true;
                    return;
                }

                var ts = typeof payload === 'number'
                            ? tasks.splice(0, payload)
                            : tasks.splice(0, tasks.length);

                var ds = _map(ts, function (task) {
                    return task.data;
                });

                if(cargo.empty) cargo.empty();
                working = true;
                worker(ds, function () {
                    working = false;

                    var args = arguments;
                    _each(ts, function (data) {
                        if (data.callback) {
                            data.callback.apply(null, args);
                        }
                    });

                    process();
                });
            },
            length: function () {
                return tasks.length;
            },
            running: function () {
                return working;
            }
        };
        return cargo;
    };

    var _console_fn = function (name) {
        return function (fn) {
            var args = Array.prototype.slice.call(arguments, 1);
            fn.apply(null, args.concat([function (err) {
                var args = Array.prototype.slice.call(arguments, 1);
                if (typeof console !== 'undefined') {
                    if (err) {
                        if (console.error) {
                            console.error(err);
                        }
                    }
                    else if (console[name]) {
                        _each(args, function (x) {
                            console[name](x);
                        });
                    }
                }
            }]));
        };
    };
    async.log = _console_fn('log');
    async.dir = _console_fn('dir');
    /*async.info = _console_fn('info');
    async.warn = _console_fn('warn');
    async.error = _console_fn('error');*/

    async.memoize = function (fn, hasher) {
        var memo = {};
        var queues = {};
        hasher = hasher || function (x) {
            return x;
        };
        var memoized = function () {
            var args = Array.prototype.slice.call(arguments);
            var callback = args.pop();
            var key = hasher.apply(null, args);
            if (key in memo) {
                async.nextTick(function () {
                    callback.apply(null, memo[key]);
                });
            }
            else if (key in queues) {
                queues[key].push(callback);
            }
            else {
                queues[key] = [callback];
                fn.apply(null, args.concat([function () {
                    memo[key] = arguments;
                    var q = queues[key];
                    delete queues[key];
                    for (var i = 0, l = q.length; i < l; i++) {
                      q[i].apply(null, arguments);
                    }
                }]));
            }
        };
        memoized.memo = memo;
        memoized.unmemoized = fn;
        return memoized;
    };

    async.unmemoize = function (fn) {
      return function () {
        return (fn.unmemoized || fn).apply(null, arguments);
      };
    };

    async.times = function (count, iterator, callback) {
        var counter = [];
        for (var i = 0; i < count; i++) {
            counter.push(i);
        }
        return async.map(counter, iterator, callback);
    };

    async.timesSeries = function (count, iterator, callback) {
        var counter = [];
        for (var i = 0; i < count; i++) {
            counter.push(i);
        }
        return async.mapSeries(counter, iterator, callback);
    };

    async.seq = function (/* functions... */) {
        var fns = arguments;
        return function () {
            var that = this;
            var args = Array.prototype.slice.call(arguments);
            var callback = args.pop();
            async.reduce(fns, args, function (newargs, fn, cb) {
                fn.apply(that, newargs.concat([function () {
                    var err = arguments[0];
                    var nextargs = Array.prototype.slice.call(arguments, 1);
                    cb(err, nextargs);
                }]))
            },
            function (err, results) {
                callback.apply(that, [err].concat(results));
            });
        };
    };

    async.compose = function (/* functions... */) {
      return async.seq.apply(null, Array.prototype.reverse.call(arguments));
    };

    var _applyEach = function (eachfn, fns /*args...*/) {
        var go = function () {
            var that = this;
            var args = Array.prototype.slice.call(arguments);
            var callback = args.pop();
            return eachfn(fns, function (fn, cb) {
                fn.apply(that, args.concat([cb]));
            },
            callback);
        };
        if (arguments.length > 2) {
            var args = Array.prototype.slice.call(arguments, 2);
            return go.apply(this, args);
        }
        else {
            return go;
        }
    };
    async.applyEach = doParallel(_applyEach);
    async.applyEachSeries = doSeries(_applyEach);

    async.forever = function (fn, callback) {
        function next(err) {
            if (err) {
                if (callback) {
                    return callback(err);
                }
                throw err;
            }
            fn(next);
        }
        next();
    };

    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = async;
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([], function () {
            return async;
        });
    }
    // included directly via <script> tag
    else {
        root.async = async;
    }

}());

}).call(this,require("JkpR2F"))
},{"JkpR2F":29}],53:[function(require,module,exports){
//     Backbone.js 1.1.2

//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(root, factory) {

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    factory(root, exports, _);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(this, function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create local references to array methods we'll want to use later.
  var array = [];
  var push = array.push;
  var slice = array.slice;
  var splice = array.splice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.1.2';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {

    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    on: function(name, callback, context) {
      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
      this._events || (this._events = {});
      var events = this._events[name] || (this._events[name] = []);
      events.push({callback: callback, context: context, ctx: context || this});
      return this;
    },

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function(name, callback, context) {
      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
      var self = this;
      var once = _.once(function() {
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      return this.on(name, once, context);
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function(name, callback, context) {
      var retain, ev, events, names, i, l, j, k;
      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
      if (!name && !callback && !context) {
        this._events = void 0;
        return this;
      }
      names = name ? [name] : _.keys(this._events);
      for (i = 0, l = names.length; i < l; i++) {
        name = names[i];
        if (events = this._events[name]) {
          this._events[name] = retain = [];
          if (callback || context) {
            for (j = 0, k = events.length; j < k; j++) {
              ev = events[j];
              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                  (context && context !== ev.context)) {
                retain.push(ev);
              }
            }
          }
          if (!retain.length) delete this._events[name];
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(name) {
      if (!this._events) return this;
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args)) return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, arguments);
      return this;
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function(obj, name, callback) {
      var listeningTo = this._listeningTo;
      if (!listeningTo) return this;
      var remove = !name && !callback;
      if (!callback && typeof name === 'object') callback = this;
      if (obj) (listeningTo = {})[obj._listenId] = obj;
      for (var id in listeningTo) {
        obj = listeningTo[id];
        obj.off(name, callback, this);
        if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
      }
      return this;
    }

  };

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Implement fancy features of the Events API such as multiple event
  // names `"change blur"` and jQuery-style event maps `{change: action}`
  // in terms of the existing API.
  var eventsApi = function(obj, action, name, rest) {
    if (!name) return true;

    // Handle event maps.
    if (typeof name === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
      return false;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, l = names.length; i < l; i++) {
        obj[action].apply(obj, [names[i]].concat(rest));
      }
      return false;
    }

    return true;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
  // listen to an event in another object ... keeping track of what it's
  // listening to.
  _.each(listenMethods, function(implementation, method) {
    Events[method] = function(obj, name, callback) {
      var listeningTo = this._listeningTo || (this._listeningTo = {});
      var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
      listeningTo[id] = obj;
      if (!callback && typeof name === 'object') callback = this;
      obj[implementation](name, callback, this);
      return this;
    };
  });

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId('c');
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      var attr, attrs, unset, changes, silent, changing, prev, current;
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      unset           = options.unset;
      silent          = options.silent;
      changes         = [];
      changing        = this._changing;
      this._changing  = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }
      current = this.attributes, prev = this._previousAttributes;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      // For each `set` attribute, update or delete the current value.
      for (attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          this.changed[attr] = val;
        } else {
          delete this.changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0, l = changes.length; i < l; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server. If the server's representation of the
    // model differs from its current attributes, they will be overridden,
    // triggering a `"change"` event.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        if (!model.set(model.parse(resp, options), options)) return false;
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      var attrs, method, xhr, attributes = this.attributes;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true}, options);

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !options.wait) {
        if (!this.set(attrs, options)) return false;
      } else {
        if (!this._validate(attrs, options)) return false;
      }

      // Set temporary attributes if `{wait: true}`.
      if (attrs && options.wait) {
        this.attributes = _.extend({}, attributes, attrs);
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = model.parse(resp, options);
        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
          return false;
        }
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch') options.attrs = attrs;
      xhr = this.sync(method, this, options);

      // Restore attributes.
      if (attrs && options.wait) this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;

      var destroy = function() {
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (options.wait || model.isNew()) destroy();
        if (success) success(model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      if (this.isNew()) {
        options.success();
        return false;
      }
      wrapError(this, options);

      var xhr = this.sync('delete', this, options);
      if (!options.wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.extend(options || {}, { validate: true }));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model.
  var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  _.each(modelMethods, function(method) {
    Model.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.attributes);
      return _[method].apply(_, args);
    };
  });

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analagous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model){ return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      var singular = !_.isArray(models);
      models = singular ? [models] : _.clone(models);
      options || (options = {});
      var i, l, index, model;
      for (i = 0, l = models.length; i < l; i++) {
        model = models[i] = this.get(models[i]);
        if (!model) continue;
        delete this._byId[model.id];
        delete this._byId[model.cid];
        index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        this._removeReference(model, options);
      }
      return singular ? models[0] : models;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      options = _.defaults({}, options, setOptions);
      if (options.parse) models = this.parse(models, options);
      var singular = !_.isArray(models);
      models = singular ? (models ? [models] : []) : _.clone(models);
      var i, l, id, model, attrs, existing, sort;
      var at = options.at;
      var targetModel = this.model;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
      var toAdd = [], toRemove = [], modelMap = {};
      var add = options.add, merge = options.merge, remove = options.remove;
      var order = !sortable && add && remove ? [] : false;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      for (i = 0, l = models.length; i < l; i++) {
        attrs = models[i] || {};
        if (attrs instanceof Model) {
          id = model = attrs;
        } else {
          id = attrs[targetModel.prototype.idAttribute || 'id'];
        }

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        if (existing = this.get(id)) {
          if (remove) modelMap[existing.cid] = true;
          if (merge) {
            attrs = attrs === model ? model.attributes : attrs;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(attrs, options);
          if (!model) continue;
          toAdd.push(model);
          this._addReference(model, options);
        }

        // Do not add multiple models with the same `id`.
        model = existing || model;
        if (order && (model.isNew() || !modelMap[model.id])) order.push(model);
        modelMap[model.id] = true;
      }

      // Remove nonexistent models if appropriate.
      if (remove) {
        for (i = 0, l = this.length; i < l; ++i) {
          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
        }
        if (toRemove.length) this.remove(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      if (toAdd.length || (order && order.length)) {
        if (sortable) sort = true;
        this.length += toAdd.length;
        if (at != null) {
          for (i = 0, l = toAdd.length; i < l; i++) {
            this.models.splice(at + i, 0, toAdd[i]);
          }
        } else {
          if (order) this.models.length = 0;
          var orderedModels = order || toAdd;
          for (i = 0, l = orderedModels.length; i < l; i++) {
            this.models.push(orderedModels[i]);
          }
        }
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort events.
      if (!options.silent) {
        for (i = 0, l = toAdd.length; i < l; i++) {
          (model = toAdd[i]).trigger('add', model, this, options);
        }
        if (sort || (order && order.length)) this.trigger('sort', this, options);
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options || (options = {});
      for (var i = 0, l = this.models.length; i < l; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid];
    },

    // Get the model at the given index.
    at: function(index) {
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      if (_.isEmpty(attrs)) return first ? void 0 : [];
      return this[first ? 'find' : 'filter'](function(model) {
        for (var key in attrs) {
          if (attrs[key] !== model.get(key)) return false;
        }
        return true;
      });
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      // Run sort based on type of `comparator`.
      if (_.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(_.bind(this.comparator, this));
      }

      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success(collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      if (!(model = this._prepareModel(model, options))) return false;
      if (!options.wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(model, resp) {
        if (options.wait) collection.add(model, options);
        if (success) success(model, resp, options);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models);
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (attrs instanceof Model) return attrs;
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      if (model.id != null) this._byId[model.id] = model;
      if (!model.collection) model.collection = this;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (model && event === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        if (model.id != null) this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
    'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
    'lastIndexOf', 'isEmpty', 'chain', 'sample'];

  // Mix in each Underscore method as a proxy to `Collection#models`.
  _.each(methods, function(method) {
    Collection.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.models);
      return _[method].apply(_, args);
    };
  });

  // Underscore methods that take a property name as an argument.
  var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];

  // Use attributes instead of properties.
  _.each(attributeMethods, function(method) {
    Collection.prototype[method] = function(value, context) {
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _[method](this.models, iterator, context);
    };
  });

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    options || (options = {});
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this.$el.remove();
      this.stopListening();
      return this;
    },

    // Change the view's element (`this.el` property), including event
    // re-delegation.
    setElement: function(element, delegate) {
      if (this.$el) this.undelegateEvents();
      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
      this.el = this.$el[0];
      if (delegate !== false) this.delegateEvents();
      return this;
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents: function(events) {
      if (!(events || (events = _.result(this, 'events')))) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) continue;

        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          this.$el.on(eventName, method);
        } else {
          this.$el.on(eventName, selector, method);
        }
      }
      return this;
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
        this.setElement($el, false);
      } else {
        this.setElement(_.result(this, 'el'), false);
      }
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // If we're sending a `PATCH` request, and we're in an old Internet Explorer
    // that still has ActiveX enabled by default, override jQuery to use that
    // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
    if (params.type === 'PATCH' && noXhrPatch) {
      params.xhr = function() {
        return new ActiveXObject("Microsoft.XMLHTTP");
      };
    }

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  var noXhrPatch =
    typeof window !== 'undefined' && !!window.ActiveXObject &&
      !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        router.execute(callback, args);
        router.trigger.apply(router, ['route:' + name].concat(args));
        router.trigger('route', name, args);
        Backbone.history.trigger('route', router, name, args);
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Cached regex for removing a trailing slash.
  var trailingSlash = /\/$/;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = decodeURI(this.location.pathname + this.location.search);
          var root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error("Backbone.history has already been started");
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      if (oldIE && this._wantsHashChange) {
        var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
        this.iframe = frame.hide().appendTo('body')[0].contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        Backbone.$(window).on('popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        Backbone.$(window).on('hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = this.location;

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          this.fragment = this.getFragment(null, true);
          this.location.replace(this.root + '#' + this.fragment);
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot() && loc.hash) {
          this.fragment = this.getHash().replace(routeStripper, '');
          this.history.replaceState({}, document.title, this.root + this.fragment);
        }

      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      fragment = this.fragment = this.getFragment(fragment);
      return _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      var url = this.root + (fragment = this.getFragment(fragment || ''));

      // Strip the hash for matching.
      fragment = fragment.replace(pathStripper, '');

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // Don't include a trailing slash on the root.
      if (fragment === '' && url !== '/') url = url.slice(0, -1);

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error(model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;

}));

},{"underscore":54}],54:[function(require,module,exports){
module.exports=require(41)
},{}],55:[function(require,module,exports){
/**
 * This is the app instance that is shared between client and server.
 * The client also subclasses it for client-specific stuff.
 */

var Backbone = require('backbone'),
    Fetcher = require('./fetcher'),
    ModelUtils = require('./modelUtils'),
    isServer = (typeof window === 'undefined'),
    ClientRouter;

if (!isServer) {
  ClientRouter = require('app/router');
  Backbone.$ = window.$ || require('jquery');
}

module.exports = Backbone.Model.extend({

  defaults: {
    loading: false,
    templateAdapter: 'rendr-handlebars'
  },

  // Set keys to undefined so runtime V8 is happier
  templateAdapter: undefined,
  req: undefined,
  modelUtils: undefined,
  fetcher: undefined,

  /**
   * @shared
   */
  constructor: function(attributes, options) {
    attributes = attributes || {};
    this.options = options || {};

    var entryPath = this.options.entryPath || '';
    if (!isServer) {
      // the entry path must always be empty for the client
      entryPath =  '';
    }

    this.modelUtils = this.options.modelUtils || new ModelUtils(entryPath);

    /**
     * On the server-side, you can access the Express request, `req`.
     */
    if (this.options.req) {
      this.req = this.options.req;
    }

    /**
     * Initialize the `templateAdapter`, allowing application developers to use whichever
     * templating system they want.
     *
     * We can't use `this.get('templateAdapter')` here because `Backbone.Model`'s
     * constructor has not yet been called.
     */
    if (this.options.templateAdapterInstance) {
      this.templateAdapter = options.templateAdapterInstance;
    } else {
      var templateAdapterModule = attributes.templateAdapter || this.defaults.templateAdapter;
      this.templateAdapter = require(templateAdapterModule)({entryPath: entryPath});
    }

    /**
     * Instantiate the `Fetcher`, which is used on client and server.
     */
    this.fetcher = new Fetcher({
      app: this
    });

    /**
     * Initialize the `ClientRouter` on the client-side.
     */
    if (!isServer) {
      if (this.options.ClientRouter) {
        ClientRouter = this.options.ClientRouter;
      }

      new ClientRouter({
        app: this,
        entryPath: entryPath,
        appViewClass: this.getAppViewClass(),
        rootPath: attributes.rootPath
      });
    }

    Backbone.Model.apply(this, arguments);
  },

  /**
   * @shared
   */
  fetch: function() {
    this.fetcher.fetch.apply(this.fetcher, arguments);
  },

  /**
   * @client
   */
  getAppViewClass: function () {
    return require('../client/app_view');
  },

  /**
   * @client
   */
  bootstrapData: function(modelMap, callback) {
    this.fetcher.bootstrapData(modelMap, callback);
  },

  /**
   * @client
   */
  start: function() {
    this.router.start();
    this.trigger('start');
  }
});

},{"../client/app_view":50,"./fetcher":60,"./modelUtils":61,"app/router":"86KJBY","backbone":53,"jquery":"EoZ3ID"}],56:[function(require,module,exports){
var _ = require('underscore'),
    Backbone = require('backbone'),
    syncer = require('../syncer'),
    BaseModel = require('./model'),
    Super = Backbone.Collection,
    isServer = (typeof window === 'undefined');

if (!isServer) {
  Backbone.$ = window.$ || require('jquery');
}

var BaseCollection = Super.extend({

  model: BaseModel,
  params: undefined,
  meta: undefined,

  /**
   * Provide the ability to set default params for every 'fetch' call.
   */
  defaultParams: null,

  constructor: function(models, options) {
    /**
     * Capture the options as instance variable.
     */
    this.options = options || {};

    /**
     * Store a reference to the app instance.
     */
    this.app = this.options.app;

    /**
     * Store a reference to the params that were used to
     * query for these models.
     */
    this.params = this.options.params || {};
    _.defaults(this.params, this.defaultParams || {});

    /**
     * Add 'meta' property to store the parts of the response
     * that aren't part of the jsonKey.
     */
    this.meta = {};
    if (_.isObject(this.options.meta)) {
      _.extend(this.meta, this.options.meta);
      delete this.options.meta;
    }

    Super.apply(this, arguments);

    this.store();
  },

  /**
   * Make sure that `model.app` is set for all operations like
   * `this.add()`, `this.reset()`, `this.set()`, `this.push()`, etc.
   */
  _prepareModel: function() {
    var model;
    model = Super.prototype._prepareModel.apply(this, arguments);
    model.app = this.app;
    return model;
  },

  /**
   * Idempotent parse
   */
  parse: function(resp, modifyInstance) {
    var jsonResp, meta, parsed;

    if (modifyInstance == null) {
      modifyInstance = true;
    }
    if (resp != null && this.jsonKey && (jsonResp = resp[this.jsonKey])) {
      if (modifyInstance) {
        meta = _.omit(resp, this.jsonKey);
        _.extend(this.meta, meta);
      }
      parsed = jsonResp;
    } else {
      parsed = resp;
    }
    return this.parseModels(parsed);
  },

  parseModels: function(resp) {
    var jsonKey, jsonKeyResp;

    resp = _.clone(resp);
    jsonKey = this.model.prototype.jsonKey;
    _.each(resp, function(modelResp, i) {
      jsonKeyResp = modelResp[jsonKey];
      if (jsonKeyResp) {
        resp[i] = jsonKeyResp;
      }
    });
    return resp;
  },

  fetch: function(options) {
    options = options || {};

    // Each time new models are fetched, store the params used.
    if (options.data) {
      _.defaults(options.data, this.defaultParams || {});
      this.params = options.data;
    }

    return Super.prototype.fetch.apply(this, arguments);
  },

  /**
   * Instance method to store the collection and its models.
   */
  store: function() {
    if (this.app && this.app.fetcher) {
      this.each(function(model) {
        model.store();
      });
      this.app.fetcher.collectionStore.set(this);
    }
  }
});

/**
 * Mix-in the `syncer`, shared between `BaseModel` and `BaseCollection`, which
 * encapsulates logic for fetching data from the API.
 */
_.extend(BaseCollection.prototype, syncer);

module.exports = BaseCollection;

},{"../syncer":65,"./model":57,"backbone":53,"jquery":"EoZ3ID","underscore":54}],57:[function(require,module,exports){
var _ = require('underscore'),
    Backbone = require('backbone'),
    syncer = require('../syncer'),
    isServer = (typeof window === 'undefined');

if (!isServer) {
  Backbone.$ = window.$ || require('jquery');
}

var BaseModel = Backbone.Model.extend({

  constructor: function(attributes, options) {
    // Capture the options as instance variable.
    this.options = options || {};

    // Store a reference to the app instance.
    this.app = this.options.app;

    if (!this.app && this.options.collection) {
      this.app = this.options.collection.app;
    }

    Backbone.Model.apply(this, arguments);

    this.store();
    this.on('change:' + this.idAttribute, this.store, this);
  },

  /**
   * Idempotent parse
   */
  parse: function(resp) {
    if (resp != null && this.jsonKey) {
      return resp[this.jsonKey] || resp;
    } else {
      return resp;
    }
  },

  /**
   * Instance method to store in the modelStore.
   */
  store: function() {
    if (this.id !== undefined && this.app && this.app.fetcher) {
      this.app.fetcher.modelStore.set(this);
    }
  }
});

/**
 * Mix-in the `syncer`, shared between `BaseModel` and `BaseCollection`, which
 * encapsulates logic for fetching data from the API.
 */
_.extend(BaseModel.prototype, syncer);

module.exports = BaseModel;

},{"../syncer":65,"backbone":53,"jquery":"EoZ3ID","underscore":54}],58:[function(require,module,exports){
var _ = require('underscore'),
  Backbone = require('backbone'),
  isServer = (typeof window === 'undefined'),
  isAMDEnvironment = !isServer && (typeof define !== 'undefined'),
  loadNumber = 0;

if (!isServer) {
  Backbone.$ = window.$ || require('jquery');
}


function stringRouteDefinitionToObject(element) {
  var parts = element.split('#');
  return {
    controller: parts[0],
    action: parts[1]
  };
}

function parseRouteDefinitions(definitions) {
  return definitions.reduce(function(route, element) {
    if (_.isString(element)) {
      element = stringRouteDefinitionToObject(element);
    }
    return _.extend(route, element);
  }, {});
}

/**
 * Base router class shared between ClientRouter and ServerRouter.
 */
function BaseRouter(options) {
  this.route = this.route.bind(this);
  this._routes = [];
  this._initOptions(options);
}

_.extend(BaseRouter.prototype, Backbone.Events, {
  /**
   * Config
   *   - errorHandler: function to correctly handle error
   *   - paths
   *     - entryPath (required)
   *     - routes (optional)
   *     - controllerDir (optional)
   */
  options: null,

  /**
   * Internally stored route definitions.
   */
  _routes: null,

  reverseRoutes: false,

  initialize: _.noop,

  _initOptions: function(options) {
    var entryPath;

    options = options || {};
    options.paths = options.paths || {};

    entryPath = options.paths.entryPath || options.entryPath;
    options.paths = _.defaults(options.paths, {
      entryPath: entryPath,
      routes: entryPath + 'app/routes',
      controllerDir: entryPath + 'app/controllers'
    });

    this.options = options;
  },

  getControllerPath: function(controllerName) {
    var controllerDir = this.options.paths.controllerDir;
    return controllerDir + '/' + controllerName + '_controller';
  },

  loadController: function(controllerName) {
    var controllerPath = this.getControllerPath(controllerName);
    return require(controllerPath);
  },

  getAction: function(route) {
    var controller, action;

    if (route.controller) {
      if (isAMDEnvironment) {
        action = this.getControllerPath(route.controller);
      } else {
        controller = this.loadController(route.controller);
        action = controller[route.action];
      }
    }

    return action;
  },

  getRedirect: function(route, params) {
    var redirect = route.redirect;

    if (typeof redirect === 'function') {
      redirect = redirect(params);
    }

    return redirect;
  },

  getRouteBuilder: function() {
    return require(this.options.paths.routes);
  },

  buildRoutes: function() {
    var routeBuilder = this.getRouteBuilder(),
      routes = [];

    function captureRoutes() {
      routes.push(_.toArray(arguments));
    }

    routeBuilder(captureRoutes);
    if (this.reverseRoutes) {
      routes = routes.reverse();
    }

    routes.forEach(this.addRouteDefinition, this);

    return this.routes();
  },

  addRouteDefinition: function(route) {
    try {
      this.route.apply(this, route);
    } catch (error) {
      error.message = 'Error building routes (' + error.message + ')';
      throw error;
    }
  },

  /**
   * Returns a copy of current route definitions.
   */
  routes: function() {
    return this._routes.slice().map(function(route) {
      return route.slice();
    });
  },

  /**
   * Method passed to routes file to build up routes definition.
   * Adds a single route definition.
   */
  route: function(pattern, controller, options) {
    var realAction, action, handler, route, routeObj, routerContext = this;

    route = parseRouteDefinitions([controller, options]);
    realAction = this.getAction(route);

    if (isServer) {
      action = realAction;
    } else {
      action = function(params, callback) {
        var self = this;
        var myLoadNumber = ++loadNumber;
        function next() {
          // To prevent race conditions we ensure that no future requests have been processed in the mean time.
          if (myLoadNumber === loadNumber) {
            callback.apply(self, arguments);
          }
        }
        // in AMD environment realAction is the string containing path to the controller
        // which will be loaded async (might be preloaded)
        // Only used in AMD environment
        if (typeof realAction === 'string') {
          routerContext._requireAMD([realAction], function(controller) {
            // check we have everything we need
            if (typeof controller[route.action] != 'function') {
              throw new Error("Missing action \"" + route.action + "\" for controller \"" + route.controller + "\"");
            }
            controller[route.action].call(self, params, next);
          });
        }
        else {
          realAction.call(self, params, next);
        }
      }
    }

    if (!(pattern instanceof RegExp) && pattern.slice(0, 1) !== '/') {
      pattern = "/" + pattern;
    }

    handler = this.getHandler(action, pattern, route);
    routeObj = [pattern, route, handler];

    this._routes.push(routeObj);
    this.trigger('route:add', routeObj);

    return routeObj;
  },

  /**
   * exposing for mocking in test
   */
  _requireAMD: require,

  /**
   * Support omitting view path; default it to ":controller/:action".
   */
  defaultHandlerParams: function(viewPath, locals, route) {
    if (typeof viewPath !== 'string') {
      locals = viewPath;
      viewPath = route.controller + '/' + route.action;
    }
    return [viewPath, locals];
  },

  /**
   * Methods to be extended by subclasses.
   * -------------------------------------
   */

  /**
   * This is the method that renders the request.
   */
  getHandler: _.noop
});

module.exports = BaseRouter;
module.exports.setAMDEnvironment = function(flag) {
  isAMDEnvironment = flag;
};

},{"backbone":53,"jquery":"EoZ3ID","underscore":54}],59:[function(require,module,exports){
/**
 * Since we make rendr files AMD friendly on app setup stage
 * we need to pretend that this code is pure commonjs
 * means no AMD-style require calls
 */
var requireAMD = require;

var _ = require('underscore'),
    Backbone = require('backbone'),
    async = require('async'),
    isServer = (typeof window === 'undefined'),
    BaseView;

if (!isServer) {
  Backbone.$ = window.$ || require('jquery');
}

module.exports = BaseView = Backbone.View.extend({
  constructor: function(options) {
    this.options = _.extend( this.options || {}, options || {} );

    this.parseOptions(options);
    this.name = this.name || this.app.modelUtils.underscorize(this.constructor.id || this.constructor.name);

    // parseOptions deals w/ models and collections, but the BaseView will override those changes
    Backbone.View.call(this, _.omit(options, ['model', 'collection']));

    this.render = this.render.bind(this);
  },

  parseOptions: function(options) {
    /**
     * Populate `this.options` and alias as `options`.
     */
    var obj;
    options = _.extend(this.options, options || {});

    if (options.app != null) {
      this.app = this.options.app;
    } else {
      throw new Error("options.app expected when initializing a new view")
    }

    if (options.parentView != null) {
      this.parentView = options.parentView;
    }

    options = BaseView.parseModelAndCollection(this.app.modelUtils, _.extend({ parse: true }, options));
    this.model = options.model;
    this.collection = options.collection;
  },

  /**
   * Key for the template
   */
  name: null,

  /**
   * Parent of the current view.
   * We make sure to stick this on the prototype as a runtime optimization
   * for V8. It's best not to add properties to the instance after initialization.
   */
  parentView: null,

  /**
   * Children of the current view.
   */
  childViews: null,

  /**
   * Flag whether or not the view is currently being viewed
   */
  viewing: false,

  /**
   * Gets array of child views by their name
   * Empty array is returned when no match is found
   */
  getChildViewsByName: function(name) {
    return _.where(this.childViews, {name: name});
  },

  /**
   * Get data for template.  This also acts as a view-model.
   * Try to return proper data if model or collection is available.
   */
  getTemplateData: function() {
    var retVal, parsedOptions;

    if (this.model) {
      retVal = this.model.toJSON();
    } else if (this.collection) {
      retVal = {
        models: this.collection.toJSON(),
        meta: this.collection.meta,
        params: this.collection.params
      };
    }

    // Remove options that are duplicates in the templates
    parsedOptions = _.omit(this.options, ['model', 'collection', 'app']);
    return _.extend({}, retVal, parsedOptions);
  },

  /**
   * Add special properties `_app` and `_model` or `_collection` to pass to
   * the templates.
   */
  decorateTemplateData: function(data) {
    if (this.app) {
      data._app = this.app;
    }
    if (this.model) {
      data._model = this.model;
    }
    if (this.collection) {
      data._collection = this.collection;
    }
    data._view = this;
    return data;
  },

  getTemplateName: function() {
    return this.options.template_name || this.name;
  },

  /**
   * Get template function
   */
  getTemplate: function() {
    return this.app.templateAdapter.getTemplate(this.getTemplateName());
  },

  /**
   * Any options not to create data-attributes for.
   */
  nonAttributeOptions: ['id', 'className', 'tagName'],

  /**
   * Get HTML attributes to add to el.
   */
  getAttributes: function() {
    var attributes = {},
        fetchSummary = {},
        modelUtils = this.app.modelUtils,
        nonAttributeOptions = this.nonAttributeOptions;

    if (this.attributes) {
      _.extend(attributes, _.result(this, 'attributes'));
    }
    if (this.id) {
      attributes.id = _.result(this, "id");
    }
    if (this.className) {
      attributes['class'] = _.result(this, "className");
    }

    // Add `data-view` attribute with view key.
    // For now, view key is same as template.
    attributes['data-view'] = this.name;

    // Add model & collection meta data from options,
    // as well as any non-object option values.
    _.each(this.options, function(value, key) {

        if (!_.isObject(value) && !_.include(nonAttributeOptions, key)) {
          attributes["data-" + key] = value;
        }
    });
    fetchSummary = BaseView.extractFetchSummary(modelUtils, this.options);

    if (!_.isEmpty(fetchSummary)) {
      attributes['data-fetch_summary'] = JSON.stringify(fetchSummary);
    }
    return attributes;
  },

  /**
   * Turn template into HTML, minus the wrapper element.
   */
  getInnerHtml: function() {
    var template = this.getTemplate(),
        data;

    this._preRender();
    data = this.getTemplateData();
    data = this.decorateTemplateData(data);
    if (template == null) {
      throw new Error(this.name + ": template \"" + this.getTemplateName() + "\" not found.");
    }
    return template(data);
  },

  /**
   * Get the HTML for the view, including the wrapper element.
   */
  getHtml: function() {
    var html = this.getInnerHtml(),
        attributes = this.getAttributes(),
        tagName = _.result(this, "tagName"),
        attrString;

    attrString = _.inject(attributes, function(memo, value, key) {
      return memo += " " + key + "=\"" + _.escape(value) + "\"";
    }, '');

    return "<" + tagName + attrString + ">" + html + "</" + tagName + ">";
  },

  render: function() {
    var html = this.getInnerHtml();
    this.$el.html(html);

    // Because we only set the attributes of the outer element
    // when calling getHtml() (server), let's make sure it also
    // happens during render() (client).

    this.$el.attr(this.getAttributes());
    this._postRender();
    return this;
  },

  /**
   * If rendered on the client missing its data,
   * fetch it based on the parameters passed in.
   */
  fetchLazy: function() {
    var params = {},
        fetchSpec;

    if (this.options.fetch_params) {
      if (!_.isObject(this.options.fetch_params)) {
        throw new Error('fetch_params must be an object for lazy loaded views')
      }

      params = this.options.fetch_params;
    } else if (this.options.param_name) {
      params[this.options.param_name] = this.options.param_value;
    }

    if (this.options.model_id != null) {
      params.id = this.options.model_id;
    }

    if (this.options.model_name != null) {
      fetchSpec = {
        model: {
          model: this.options.model_name,
          params: params
        }
      };
    } else if (this.options.collection_name != null) {
      fetchSpec = {
        collection: {
          collection: this.options.collection_name,
          params: params
        }
      };
    }

    this.setLoading(true);

    this._preRender();
    this.app.fetch(fetchSpec, this._fetchLazyCallback.bind(this));
  },

  _fetchLazyCallback: function(err, results) {
    this.setLoading(false);
    if (err) {
      console.log("FETCH ERR: " + err);
    } else if (this.viewing) {
      // It's possible that by the time the XHR returns, the user has navigated
      // away to a new page, check for whether we are viewing first
      this.parseOptions(results);
      this.render();
    }
  },

  /**
   * Anything to do before rendering on the client or server.
   * This is useful for i.e. accessing @model in the client after
   * @hydrate() is called, but before @getTemplateData() is called.
   */
  _preRender: function() {
    this.preRender();
    this.trigger('preRender');
  },

  /**
   * Anything to do after rendering on the client, such initializing jQuery
   * plugins like sliders, slideshows, etc.
   */
  _postRender: function() {
    this.attachChildViews();
    this.postRender();
    this.trigger('postRender');
  },

  /**
   * To be overridden by subclasses.
   */
  preRender: _.noop,

  /**
   * To be overridden by subclasses.
   */
  postRender: _.noop,

  setLoading: function(loading) {
    this.$el.toggleClass('loading', loading);
    this.trigger('loading', loading);
  },

  attachOrRender: function(element, parentView) {
    var $el = Backbone.$(element);

    this.parentView = parentView;
    this.viewing = true;

    if (this.options.lazy === true && this.options.collection == null && this.options.model == null) {
      $el.attr('data-view-attached', true);
      this.setElement($el);

      return this.fetchLazy();
    }

    if ($el.data('render')) {
      $el.replaceWith(this.$el);
      this.render();
    } else {
      $el.attr('data-view-attached', true);
      this.setElement($el);
      this.attach();
    }
  },

  /**
   * When HTML is already present (rendered by server),
   * this is what gets called to bind to the element.
   */
  attach: function() {
    /**
     * Call preRender() so we can access things setup by @hydrate()
     * (like @model) in i.e. @getTemplateData().
     */
    this._preRender();

    /**
     * We have to call postRender() so client-only things happen,
     * i.e. initialize slideshows, etc.
     */
    this._postRender();

    this.trigger('attach');
  },

  /**
   * Happens client-side.
   * Find all of sub view DOM elements
   * Get the view key
   * Call this.getView()
   * Attach childView
   */
  attachChildViews: function() {
    var _baseView = this;

    // Remove all child views in case we are re-rendering through
    // manual .render() or 'refresh' being triggered on the view.
    this.removeChildViews();
    BaseView.attach(this.app, this, function(views) {
      _baseView.childViews = views;
    });
  },

  removeChildViews: function() {
    (this.childViews || []).forEach(function(view) {
      view.remove();
    });
  },

  remove: function() {
    // Remove reference to this view from its parentView
    if (this.parentView && this.parentView.childViews) {
      this.parentView.childViews = _.without(this.parentView.childViews, this);
    }

    this.removeChildViews();
    this.childViews = null;
    this.parentView = null;
    this.viewing = false;

    var obj = this.model || this.collection;

    if (obj) {
      obj.off(null, null, this);
    }
    BaseView.__super__.remove.apply(this, arguments);
    this.trigger('remove');
  }
});

/**
 * Class methods
 * -------------
 */

BaseView.getView = function(viewName, entryPath, callback) {
  var viewPath;

  if (!entryPath) entryPath = '';

  viewPath = entryPath + "app/views/" + viewName;
  // check for AMD environment
  if (typeof callback == 'function') {
    // Only used in AMD environment
    if (typeof define != 'undefined') {
      requireAMD([viewPath], callback);
    } else {
      callback(require(viewPath));
    }
  } else {
    return require(viewPath);
  }
};

BaseView.getViewOptions = function ($el) {
  var parsed,
    options = $el.data();

  _.each(options, function(value, key) {
    if (_.isString(value)) {
      parsed = _.unescape(value);
      try {
        parsed = JSON.parse(parsed);
      } catch (err) {}
      options[key] = parsed;
    }
  });

  return options;
};

BaseView.attach = function(app, parentView, callback) {
  var scope = parentView ? parentView.$el : null,
      list = Backbone.$('[data-view]', scope).toArray();

  async.map(list, function(el, cb) {
    var $el, options, viewName, fetchSummary;
    $el = Backbone.$(el);
    if (!$el.data('view-attached')) {
      options = BaseView.getViewOptions($el);
      options.app = app;

      viewName = options.view;

      fetchSummary = options.fetch_summary || {};
      app.fetcher.hydrate(fetchSummary, { app: app }, function (err, results) {
        options = _.extend(options, results);
        BaseView.getView(viewName, app.options.entryPath, function(ViewClass) {
          var view = new ViewClass(options);
          view.attachOrRender($el, parentView);
          cb(null, view);
        });
      });
    } else {
      cb(null, null);
    }
  }, function(err, views) {
    // no error handling originally
    callback(_.compact(views));
  });
};

BaseView.parseModelAndCollection = function(modelUtils, options) {
  if (options.model != null) {
    if (!(options.model instanceof Backbone.Model) && options.model_name) {
      options.model = modelUtils.getModel(options.model_name, options.model, {
        parse: !!options.parse,
        app: options.app
      });
    }
    options.model_name = options.model_name || modelUtils.modelName(options.model.constructor);
    options.model_id = options.model.id;
  }

  if (options.collection != null) {
    if (!(options.collection instanceof Backbone.Collection) && options.collection_name) {
      options.collection = modelUtils.getCollection(options.collection_name, options.collection, {
        parse: !!options.parse,
        app: options.app,
        params: options.collection_params
      });
    }
    options.collection_name = options.collection_name || modelUtils.modelName(options.collection.constructor);
    options.collection_params = options.collection_params || options.collection.params;
  }

  return options;
};

BaseView.extractFetchSummary = function (modelUtils, options) {
    var fetchSummary = {};

    _.each(options, function(value, key) {
        var id, modelOrCollectionId;

        if (value != null) {
            if (_.isFunction(value.constructor) && value.constructor.id != null) {
                modelOrCollectionId = value.constructor.id;
                if (modelUtils.isModel(value)) {
                    id = value.get(value.idAttribute);
                    if (id == null) {
                        // Bail if there's no ID; someone's using `this.model` in a
                        // non-standard way, and that's okay.
                        return;
                    }
                    // Cast the `id` attribute to string to ensure it's included in attributes.
                    // On the server, it can be i.e. an `ObjectId` from Mongoose.
                    value = id.toString();
                    fetchSummary[key] = {model: modelOrCollectionId, id: value};
                    return;
                }
                if (modelUtils.isCollection(value) && value.params != null) {
                    fetchSummary[key] = {collection: modelOrCollectionId, params: value.params};
                    return;
                }
            }
        }
    });

    return fetchSummary;
}

/**
 * Noops on the server, because they do DOM stuff.
 */
if (typeof window === 'undefined') {
  BaseView.prototype._ensureElement = _.noop;
  BaseView.prototype.delegateEvents = _.noop;
}

},{"async":52,"backbone":53,"jquery":"EoZ3ID","underscore":54}],60:[function(require,module,exports){
var _ = require('underscore'),
    Backbone = require('backbone'),
    async = require('async'),
    ModelStore = require('./store/model_store'),
    CollectionStore = require('./store/collection_store'),
    isServer = (typeof window === 'undefined');

if (!isServer) {
  Backbone.$ = window.$ || require('jquery');
}

module.exports = Fetcher;

function Fetcher(options) {
  this.options = options;
  this.app = this.options.app;
  this.modelUtils = this.app.modelUtils;
  this.modelStore = new ModelStore({
    app: this.app,
    modelUtils: this.modelUtils
  });
  this.collectionStore = new CollectionStore({
    app: this.app,
    modelUtils: this.modelUtils
  });
}

Fetcher.prototype.buildOptions = function(additionalOptions, params) {
  var options = {app: this.app, parse: true};
  _.defaults(options, additionalOptions);
  _.defaults(options, params);
  return options;
};

/**
 * Returns an instance of Model or Collection.
 */
Fetcher.prototype.getModelOrCollectionForSpec = function(spec, attrsOrModels, options, callback) {
  if (spec.model) {
    return this.getModelForSpec(spec, attrsOrModels, options, callback);
  } else {
    return this.getCollectionForSpec(spec, attrsOrModels, options, callback);
  }
};

/**
 * Returns an instance of Collection.
 */
Fetcher.prototype.getCollectionForSpec = function(spec, models, options, callback) {
  var collectionOptions = this.buildOptions(options, _.extend({params: spec.params}, spec.params));
  models = models || [];
  return this.modelUtils.getCollection(spec.collection, models, collectionOptions, callback);
};

/**
 * Returns an instance of Model.
 */
Fetcher.prototype.getModelForSpec = function(spec, attributes, options, callback) {
  var modelOptions = this.buildOptions(options);

  attributes = attributes || {};
  _.defaults(attributes, spec.params);

  return this.modelUtils.getModel(spec.model, attributes, modelOptions, callback);
};


/**
 * map fetchSpecs to models and fetch data in parallel
 */
Fetcher.prototype._retrieve = function(fetchSpecs, options, callback) {
  var batchedRequests = {};

  _.each(fetchSpecs, function(spec, name) {
    batchedRequests[name] = function(cb) {
      var model;

      if (!options.readFromCache) {
        this.fetchFromApi(spec, options, cb);
      } else {
        model = null;

        // First, see if we have stored the model or collection.
        if (spec.model != null) {

          this._retrieveModel(spec, function(err, model) {
            this._refreshData(spec, model, options, cb);
          }.bind(this));

        } else if (spec.collection != null) {
          this.collectionStore.get(spec.collection, spec.params, function(collection) {
            this._refreshData(spec, collection, options, cb);
          }.bind(this));

        }

      }
    }.bind(this);
  }, this);
  async.parallel(batchedRequests, callback);
};

Fetcher.prototype._refreshData = function(spec, modelOrCollection, options, cb) {

  // If we found the model/collection in the store, then return that.
  if (!this.needsFetch(modelOrCollection, spec)) {
    cb(null, modelOrCollection);
  } else {
    /**
     * Else, fetch anew.
     */
    this.fetchFromApi(spec, options, cb);
  }
}

Fetcher.prototype._retrieveModel = function(spec, callback) {
  var fetcher = this;

  // Attempt to fetch from the modelStore based on the idAttribute
  this.modelUtils.modelIdAttribute(spec.model, function(idAttribute) {
    var model = fetcher.modelStore.get(spec.model, spec.params[idAttribute]);
    if (model) return callback(null, model);

    // if there are no other keys than the id in the params, return null;
    if (_.isEmpty(_.omit(spec.params, idAttribute)))
      return callback(null, null);

    // Attempt to fetch the model in the modelStore based on the other params
    return callback(null, fetcher.modelStore.find(spec.model, spec.params));
  });
};

Fetcher.prototype.needsFetch = function(modelOrCollection, spec) {
  if (modelOrCollection == null) return true;

  if (this.modelUtils.isModel(modelOrCollection) && this.isMissingKeys(modelOrCollection.attributes, spec.ensureKeys)) {
    return true;
  }

  if (spec.needsFetch === true) return true;
  if (typeof spec.needsFetch === 'function' && spec.needsFetch(modelOrCollection)) return true;
  return false;
};

Fetcher.prototype.isMissingKeys = function(modelData, keys) {
  var key;

  if (keys == null) {
    return false;
  }

  if (!_.isArray(keys)) {
    keys = [keys];
  }

  for (var i = 0, len = keys.length; i < len; i++) {
    key = keys[i];
    if (modelData[key] == null) {
      return true;
    }
  }
  return false;
};

Fetcher.prototype.fetchFromApi = function(spec, options, callback) {
  var model = this.getModelOrCollectionForSpec(spec),
      fetcher = this;

  model.fetch({
    headers: options.headers || {},
    data: spec.params,
    success: function(model, body) {
      callback(null, model);
    },
    error: function(model, resp, options) {
      var body, respOutput, err;

      body = resp.body;
      resp.body = typeof body === 'string' ? body.slice(0, 150) : body;
      respOutput = JSON.stringify(resp);
      err = new Error("ERROR fetching model '" + fetcher.modelUtils.modelName(model.constructor) + "' with options '" + JSON.stringify(options) + "'. Response: " + respOutput);
      err.status = resp.status;
      err.body = body;
      callback(err);
    }
  });
};

Fetcher.prototype.retrieveModelsForCollectionName = function(collectionName, modelIds) {
  var modelName = this.modelUtils.getModelNameForCollectionName(collectionName);
  return this.retrieveModels(modelName, modelIds);
};

Fetcher.prototype.retrieveModels = function(modelName, modelIds) {
  return modelIds.map(function(id) {
    return this.modelStore.get(modelName, id);
  }, this);
};

Fetcher.prototype.summarize = function(modelOrCollection) {
  var summary = {},
      idAttribute;

  if (this.modelUtils.isCollection(modelOrCollection)) {
    idAttribute = modelOrCollection.model.prototype.idAttribute;
    summary = {
      collection: this.modelUtils.modelName(modelOrCollection.constructor),
      ids: modelOrCollection.pluck(idAttribute),
      params: modelOrCollection.params,
      meta: modelOrCollection.meta
    };
  } else if (this.modelUtils.isModel(modelOrCollection)) {
    summary = {
      model: this.modelUtils.modelName(modelOrCollection.constructor),
      id: modelOrCollection.id
    };
  }
  return summary;
};

Fetcher.prototype.storeResults = function(results) {
  _.each(results, function(modelOrCollection) {
    modelOrCollection.store();
  });
};

Fetcher.prototype.bootstrapData = function(modelMap, callback) {
  var results = {},
      fetcher = this;

  async.forEach(_.keys(modelMap), function(name, cb) {
    var map = modelMap[name];
    fetcher.getModelOrCollectionForSpec(map.summary, map.data, _.pick(map.summary, 'params', 'meta'), function(modelOrCollection) {
      results[name] = modelOrCollection;
      cb(null);
    });
  }, function(err) {
    if (_.isFunction(callback)) {
      callback(results);
    }
  });
};

Fetcher.prototype.hydrate = function(summaries, options, callback) {
  var results = {},
      fetcher = this;

  /**
   * Support both (summaries, options, callback)
   * and (summaries, callback).
   */
  if (arguments.length === 2) {
    callback = options;
    options = {};
  } else {
    options = options || {};
  }

  async.forEach(_.keys(summaries), function(name, cb) {
    var summary = summaries[name];
    if (summary.model != null) {
      results[name] = fetcher.modelStore.get(summary.model, summary.id);

      if ((results[name] != null) && (options.app != null)) {
        results[name].app = options.app;
      }

      cb(null);

    } else if (summary.collection != null) {
      // Also support getting all models for a collection.
      fetcher.collectionStore.get(summary.collection, summary.params, function(collection) {
        if (collection == null) {
          throw new Error("Collection of type \"" + summary.collection + "\" not found for params: " + JSON.stringify(summary.params));
        }

        results[name] = collection;

        cb(null);
      });
    }
  }, function(err) {
    callback(err, results);
  });
};

Fetcher.prototype.pendingFetches = 0;

Fetcher.prototype.fetch = function(fetchSpecs, options, callback) {
  var fetcher = this;

  /**
   * Support both (fetchSpecs, options, callback)
   * and (fetchSpecs, callback).
   */
  if (arguments.length === 2) {
    callback = options;
    options = {};
  } else {
    options = options || {};
  }

  // Different defaults for client v server.
  if (isServer) {
    if (options.readFromCache == null) {
      options.readFromCache = false;
    }
    if (options.writeToCache == null) {
      options.writeToCache = false;
    }
  } else {
    if (options.readFromCache == null) {
      options.readFromCache = true;
    }
    if (options.writeToCache == null) {
      options.writeToCache = true;
    }
  }

  this.pendingFetches++;
  this.trigger('fetch:start', fetchSpecs);
  this._retrieve(fetchSpecs, options, function(err, results) {
    fetcher.pendingFetches--;
    fetcher.trigger('fetch:end', fetchSpecs, err, results);
    if (err) return callback(err);
    if (options.writeToCache) {
      fetcher.storeResults(results);
    }
    callback(null, results);
  });
};

// Mixin Backbone.Events for events that work in client & server.
_.extend(Fetcher.prototype, Backbone.Events);

},{"./store/collection_store":62,"./store/model_store":64,"async":52,"backbone":53,"jquery":"EoZ3ID","underscore":54}],61:[function(require,module,exports){
/**
 * Since we make rendr files AMD friendly on app setup stage
 * we need to pretend that this code is pure commonjs
 * means no AMD-style require calls.
 */
var BaseModel = require("./base/model"),
    BaseCollection = require("./base/collection");

var typePath = {
  model: "app/models/",
  collection: "app/collections/"
};

module.exports = ModelUtils;

function ModelUtils(entryPath) {
  this.entryPath = entryPath;
  this._classMap = {};
}

ModelUtils.prototype.getModel = function(path, attrs, options, callback) {
  var Model;
  attrs = attrs || {};
  options = options || {};
  if (typeof callback == 'function') {
    this.getModelConstructor(path, function(Model) {
      callback(new Model(attrs, options));
    });
  } else {
    Model = this.getModelConstructor(path);
    return new Model(attrs, options);
  }
};

ModelUtils.prototype.getCollection = function(path, models, options, callback) {
  var Collection;
  models = models || [];
  options = options || {};
  if (typeof callback == 'function') {
    this.getCollectionConstructor(path, function(Collection) {
      callback(new Collection(models, options));
    });
  } else {
    Collection = this.getCollectionConstructor(path);
    return new Collection(models, options);
  }
};

ModelUtils.prototype.getModelConstructor = function(path, callback) {
  return this.fetchConstructor('model', path, callback);
};

ModelUtils.prototype.getCollectionConstructor = function(path, callback) {
  return this.fetchConstructor('collection', path, callback);
};

ModelUtils.prototype.getFullPath = function(type, path) {
  return this.entryPath + typePath[type] + path;
};

ModelUtils.prototype.fetchConstructor = function(type, path, callback) {
  path = this.underscorize(path);

  var fullPath = this.getFullPath(type, path);

  if (this._classMap[path]) {
    return (typeof callback == 'function') ? callback(this._classMap[path]) : this._classMap[path];
  } else if (typeof callback == 'function') {
    // Only used in AMD environment
    if (typeof define != 'undefined') {
      this._requireAMD([fullPath], callback);
    } else {
      callback(this._require(fullPath));
    }
    return;
  } else {
    return this._require(fullPath);
  }
};

ModelUtils.prototype._require = require;

ModelUtils.prototype._requireAMD = require;

ModelUtils.prototype.isModel = function(obj) {
  return obj instanceof BaseModel;
};

ModelUtils.prototype.isCollection = function(obj) {
  return obj instanceof BaseCollection;
};

ModelUtils.prototype.getModelNameForCollectionName = function(collectionName) {
  var Collection;
  Collection = this.getCollectionConstructor(collectionName);
  return this.modelName(Collection.prototype.model);
};

ModelUtils.uppercaseRe = /([A-Z])/g;

ModelUtils.prototype.underscorize = function(name) {
  if (name == null) {
    return undefined;
  }
  name = name.replace(ModelUtils.uppercaseRe, function(c) {
    return "_" + c.toLowerCase();
  });
  if (name[0] === "_") {
    name = name.slice(1);
  }
  return name;
};

/**
 * The 'name' property is added to the constructor when using a named function,
 * and it cannot be changed.  I.e.:
 *
 * function MyClass(){}
 * MyClass.name
 * -> "MyClass"
 *
 * We first look for the 'id' property of the constructor, which is compatible
 * with standard Backbone-style class inheritance.
 *
 * var MyClass = Backbone.Model.extend({});
 * MyClass.name
 * -> ""
 * MyClass.id = "MyClass"
 */
ModelUtils.prototype.modelName = function(modelOrCollectionClass) {
  return this.underscorize(modelOrCollectionClass.id || modelOrCollectionClass.name);
};

ModelUtils.prototype.modelIdAttribute = function(modelName, callback) {
  this.getModelConstructor(modelName, function(constructor) {
    callback(constructor.prototype.idAttribute);
  });
};

},{"./base/collection":56,"./base/model":57}],62:[function(require,module,exports){
var _ = require('underscore'),
    Super = require('./memory_store');

module.exports = CollectionStore;

function CollectionStore() {
  Super.apply(this, arguments);
}

_.extend(CollectionStore.prototype, Super.prototype, {
  expireSeconds: null,

  set: function(collection, params) {
    var key = this._getStoreKeyForCollection(collection, params);
    return Super.prototype.set.call(this, key, collection, this.expireSeconds);
  },

  get: function(collectionName, params, callback) {
    var self = this,
      cachedCollection;

    this.mergeParams(collectionName, params, function (mergedParams) {
      var key = self._getStoreKey(collectionName, mergedParams);
      cachedCollection = Super.prototype.get.call(self, key);

      if (_.isFunction(callback)) {
        callback(cachedCollection);
      }
    });

    return cachedCollection;
  },

  clear: function(collectionName, params) {
    if (!_.isUndefined(collectionName) && params) {
      var key = this._getStoreKey(collectionName, params);
      return Super.prototype.clear.call(this, key);      
    } else if (!_.isUndefined(collectionName) && !params) {
      var cachedItems = this._getCachedItemsByCollection(collectionName),
        self = this,
        storeKey;
       _.each(cachedItems, function (item) {
          storeKey = self._getStoreKey(collectionName, item.value.params);
          Super.prototype.clear.call(self, storeKey);
        });
    } else {
      return Super.prototype.clear.call(this, null);
    }
  },

  mergeParams: function(collectionName, params, callback) {
    this.modelUtils.getCollectionConstructor(collectionName, function(Collection) {
      var mergedParams = _.extend({}, Collection.prototype.defaultParams, params);
      callback(mergedParams);
    });
  },

  _getCachedItemsByCollection:function(collectionName) {
    var prefix = this._formatKey(this.modelUtils.underscorize(collectionName));

    return _.filter(this.cache, function(val, key) {
      return startsWith(key, prefix);
    });
  },

  _getStoreKeyForCollection: function(collection, params) {
    var collectionName = this.modelUtils.modelName(collection.constructor);

    params = params || collection.params;
    return this._getStoreKey(collectionName, params);
  },

  _getStoreKey: function(collectionName, params) {
    var underscored = this.modelUtils.underscorize(collectionName);
    return underscored + ":" + JSON.stringify(sortParams(params));
  }
});

function sortParams(params) {
  var sorted = {};
  _.chain(params).keys().sort().forEach(function(key) {
    sorted[key] = params[key];
  });
  return sorted;
}

function startsWith(string, prefix) {
  return string.slice(0, prefix.length) == prefix;
}

},{"./memory_store":63,"underscore":54}],63:[function(require,module,exports){
module.exports = MemoryStore;

function MemoryStore(options) {
  this.options = options || {};
  this.app = this.options.app;
  this.modelUtils = this.options.modelUtils;
  this.cache = {};
}

MemoryStore.prototype.cacheVersion = '';

MemoryStore.prototype.get = function(key) {
  if (!key) {
    return;
  }
  return this.validateExpiration(key, this._get(key));
};

MemoryStore.prototype.validateExpiration = function(key, data) {
  if (data && data.expires && Date.now() > data.expires) {
    if (typeof console !== "undefined") {
      console.log("MemoryStore: Expiring key \"" + key + "\".");
    }
    this.clear(key);
    data = undefined;
  } else if (data && data.value) {
    data = data.value;
  }
  return data;
};

MemoryStore.prototype.set = function(key, value, ttlSec) {
  var expires;

  if (!key || value === undefined) {
    return false;
  }
  expires = ttlSec ? Date.now() + ttlSec * 1000 : null;
  this._set(key, {
    value: value,
    expires: expires
  });
  return true;
};

MemoryStore.prototype._get = function(key) {
  return this.cache[this._formatKey(key)];
};

MemoryStore.prototype._set = function(key, data) {
  this.cache[this._formatKey(key)] = data;
};

MemoryStore.prototype._clear = function(key) {
  delete this.cache[this._formatKey(key)];
};

MemoryStore.prototype._clearAll = function() {
  this.cache = {};
};

MemoryStore.prototype.clear = function(key) {
  if (key != null) {
    return this._clear(key);
  } else {
    return this._clearAll();
  }
};

MemoryStore.prototype._versionKey = function(key) {
  return key + ":" + this.cacheVersion;
};

MemoryStore.prototype._formatKey = function(key) {
  return this._versionKey(key);
};

},{}],64:[function(require,module,exports){
var _ = require('underscore'),
    Super = require('./memory_store');

module.exports = ModelStore;

function ModelStore() {
  Super.apply(this, arguments);
}

_.extend(ModelStore.prototype, Super.prototype, {
  expireSeconds: null,

  set: function(model) {
    var key, modelName;

    modelName = this.modelUtils.modelName(model.constructor);
    if (modelName == null) {
      throw new Error('Undefined modelName for model');
    }

    key = this._getModelStoreKey(modelName, model.id);

    // Make sure we have a fully parsed model before we store the attributes
    model.parse(model.attributes);

    return Super.prototype.set.call(this, key, model, this.expireSeconds);
  },

  get: function(modelName, id) {
    var key, model;

    key = this._getModelStoreKey(modelName, id);
    return Super.prototype.get.call(this, key);
  },

  clear: function(modelName, id) {
    if (modelName && id) {
      var key = this._getModelStoreKey(modelName, id);
      return Super.prototype.clear.call(this, key);
    } else if (modelName && !id) {
      var cachedItems = this._getCachedItemsByModel(modelName),
        self = this,
        modelStoreKey;
        _.each(cachedItems, function (item) {
          modelStoreKey = self._getModelStoreKey(modelName, item.value.id);
          Super.prototype.clear.call(self, modelStoreKey);
        });
    } else {
      return Super.prototype.clear.call(this, null);
    }
  },

  find: function(modelName, params) {
    var prefix = this._formatKey(this._keyPrefix(modelName)),
      keys = Object.keys(this.cache),
      affectedKeys = keys.filter(getStartsWithFilter(prefix)),
      self = this,
      foundKey;

    foundKey = _.find(affectedKeys, function (key) {
      var cachedModel = self.cache[key].value,
        modelStoreKey = self._getModelStoreKey(modelName, cachedModel.id),
        model = Super.prototype.get.call(self, modelStoreKey);

      return model && isObjectSubset(params, model.toJSON());
    });

    if (foundKey) {
      return this.cache[foundKey].value;
    }
  },

  _getCachedItemsByModel:function(modelName) {
    var prefix = this._formatKey(this._keyPrefix(modelName));
    return _.filter(this.cache, function(val, key) {
      return startsWith(key, prefix);
    });
  },

  _formatKey: function(key) {
    return Super.prototype._formatKey.call(this, "_ms:" + key);
  },

  _keyPrefix: function(modelName) {
    return this.modelUtils.underscorize(modelName);
  },

  _getModelStoreKey: function(modelName, id) {
    return this._keyPrefix(modelName) + ":" + id;
  }
});

function getStartsWithFilter(prefix) {
  return function (string) {
    return startsWith(string, prefix);
  };
}

function startsWith(string, prefix) {
  return string.slice(0, prefix.length) == prefix;
}

function isObjectSubset(potentialSubset, objectToTest) {
  // check all the keys of the subset, and sure their values are the same in the objectToTest
  return _.all(potentialSubset, function(value, key) {
    return objectToTest[key] == value;
  });
}

},{"./memory_store":63,"underscore":54}],65:[function(require,module,exports){
/**
 * `syncer` is a collection of instance methods that are mixed into the prototypes
 * of `BaseModel` and `BaseCollection`. The purpose is to encapsulate shared logic
 * for fetching data from the API.
 */

var _ = require('underscore'),
    Backbone = require('backbone'),

    // Pull out params in path, like '/users/:id'.
    extractParamNamesRe = /:([a-z_-]+)/ig,

    methodMap = {
      'create': 'POST',
      'update': 'PUT',
      'delete': 'DELETE',
      'read': 'GET'
    },

    isServer = (typeof window === 'undefined');

if (isServer) {
  // hide it from requirejs since it's server only
  var serverOnly_qs = 'qs2';
  var qs = require(serverOnly_qs);
} else {
  var $ = window.$ || require('jquery');
  Backbone.$ = $;
}

var syncer = module.exports;

function clientSync(method, model, options) {
  var error;
  options = _.clone(options);
  if (!_.isUndefined(options.data)) options.data = _.clone(options.data);
  options.url = this.getUrl(options.url, true, options.data);
  error = options.error;
  if (error) {
    options.error = function(xhr) {
      var body = xhr.responseText,
          contentType = xhr.getResponseHeader('content-type'),
          resp;
      if (contentType && contentType.indexOf('application/json') !== -1) {
        try {
          body = JSON.parse(body);
        } catch (e) {}
      }
      resp = {
        body: body,
        status: xhr.status
      };
      error(resp);
    }
  }
  return Backbone.sync(method, model, options);
}

function serverSync(method, model, options) {
  var api, urlParts, verb, req, queryStr;

  options = _.clone(options);
  if (!_.isUndefined(options.data)) options.data = _.clone(options.data);
  options.url = this.getUrl(options.url, false, options.data);
  verb = methodMap[method];
  urlParts = options.url.split('?');
  req = this.app.req;
  queryStr = urlParts[1] || '';
  if (!_.isEmpty(options.data)) queryStr += '&' + qs.stringify(options.data);
  /**
   * if queryStr is initially an empty string, leading '&' will still get parsed correctly by qs.parse below.
   * e.g.  qs.parse('&baz=quux') => { baz: 'quux' }
   */

  api = {
    method: verb,
    path: urlParts[0],
    query: qs.parse(queryStr),
    headers: options.headers || {},
    api: _.result(this, 'api'),
    body: {}
  };

  if (verb === 'POST' || verb === 'PUT') {
    api.body = model.toJSON();
  }

  req.dataAdapter.request(req, api, function(err, response, body) {
    var resp;
    if (err) {
      resp = {
        body: body,
        // Pass through the statusCode, so lower-level code can handle i.e. 401 properly.
        status: err.status
      };

      if (options.error) {
        // This `error` has signature of $.ajax, not Backbone.sync.
        options.error(resp);
      } else {
        throw err;
      }
    } else {
      // This `success` has signature of $.ajax, not Backbone.sync.
      options.success(body);
    }
  });
}

syncer.clientSync = clientSync;
syncer.serverSync = serverSync;
syncer.sync = function sync() {
  var syncMethod = isServer ? serverSync : clientSync;
  return syncMethod.apply(this, arguments);
};

/**
 * 'model' is either a model or collection that
 * has a 'url' property, which can be a string or function.
 */
syncer.getUrl = function getUrl(url, clientPrefix, params) {
  if (clientPrefix == null) {
    clientPrefix = false;
  }
  params = params || {};
  url = url || _.result(this, 'url');
  if (clientPrefix && !~url.indexOf('://')) {
    url = this.formatClientUrl(url, _.result(this, 'api'));
  }
  return this.interpolateParams(this, url, params);
};

syncer.formatClientUrl = function(url, api) {
  var prefix = this.app.get('apiPath') || '/api';
  if (api) {
    prefix += '/' + api;
  }
  prefix += '/-';
  return prefix + url;
};

/**
 * Deeply-compare two objects to see if they differ.
 */
syncer.objectsDiffer = function objectsDiffer(data1, data2) {
  var changed = false,
      keys,
      key,
      value1,
      value2;

  keys = _.unique(_.keys(data1).concat(_.keys(data2)));
  for (var i = 0, len = keys.length; i < len; i++) {
    key = keys[i];
    value1 = data1[key];
    value2 = data2[key];

    // If attribute is an object recurse
    if (_.isObject(value1) && _.isObject(value2)) {
      changed = this.objectsDiffer(value1, value2);
    // Test for equality
    } else if (!_.isEqual(value1, value2)) {
      changed = true;
    }
  }
  return changed;
};

/**
 * This maps i.e. '/listings/:id' to '/listings/3' if
 * the model you supply has model.get('id') == 3.
 */
syncer.interpolateParams = function interpolateParams(model, url, params) {
  var matches = url.match(extractParamNamesRe);

  params = params || {};

  if (matches) {
    matches.forEach(function(param) {
      var property = param.slice(1),
          value;

      // Is collection? Then use options.
      if (model.length != null) {
        value = model.options[property];

      // Otherwise it's a model; use attrs.
      } else {
        value = model.get(property);
      }
      url = url.replace(param, value);

      /**
       * Delete the param from params hash, so we don't get urls like:
       * /v1/threads/1234?id=1234...
       */
      delete params[property];
    });
  }
  /**
   * Separate deletion of idAttribute from params hash necessary if using urlRoot in the model
   * so we don't get urls like: /v1/threads/1234?id=1234
   */
  delete params[model.idAttribute]
  return url;
};

},{"backbone":53,"jquery":"EoZ3ID","underscore":54}]},{},["LentoW","rCVOCK","Jx33pV","n5JPJf","RjKD4d","qnrstJ","SIFePP","86KJBY","bbl2t2","rFRVhs","6kWBjj","to5G6a","tdLU7A"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWVjb255L0RvY3VtZW50cy9ub2RlL3JlbmRyLXNvdW5kY2xvdWQtbGlrZXMvbm9kZV9tb2R1bGVzL2dydW50LWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9tYXhpbWVjb255L0RvY3VtZW50cy9ub2RlL3JlbmRyLXNvdW5kY2xvdWQtbGlrZXMvYXBwL2FwcC5qcyIsIi9Vc2Vycy9tYXhpbWVjb255L0RvY3VtZW50cy9ub2RlL3JlbmRyLXNvdW5kY2xvdWQtbGlrZXMvYXBwL2NvbGxlY3Rpb25zL2Jhc2UuanMiLCIvVXNlcnMvbWF4aW1lY29ueS9Eb2N1bWVudHMvbm9kZS9yZW5kci1zb3VuZGNsb3VkLWxpa2VzL2FwcC9jb2xsZWN0aW9ucy9saWtlcy5qcyIsIi9Vc2Vycy9tYXhpbWVjb255L0RvY3VtZW50cy9ub2RlL3JlbmRyLXNvdW5kY2xvdWQtbGlrZXMvYXBwL2NvbnRyb2xsZXJzL2hvbWVfY29udHJvbGxlci5qcyIsIi9Vc2Vycy9tYXhpbWVjb255L0RvY3VtZW50cy9ub2RlL3JlbmRyLXNvdW5kY2xvdWQtbGlrZXMvYXBwL2NvbnRyb2xsZXJzL2xpa2VfY29udHJvbGxlci5qcyIsIi9Vc2Vycy9tYXhpbWVjb255L0RvY3VtZW50cy9ub2RlL3JlbmRyLXNvdW5kY2xvdWQtbGlrZXMvYXBwL21vZGVscy9iYXNlLmpzIiwiL1VzZXJzL21heGltZWNvbnkvRG9jdW1lbnRzL25vZGUvcmVuZHItc291bmRjbG91ZC1saWtlcy9hcHAvbW9kZWxzL3RyYWNrLmpzIiwiL1VzZXJzL21heGltZWNvbnkvRG9jdW1lbnRzL25vZGUvcmVuZHItc291bmRjbG91ZC1saWtlcy9hcHAvcm91dGVyLmpzIiwiL1VzZXJzL21heGltZWNvbnkvRG9jdW1lbnRzL25vZGUvcmVuZHItc291bmRjbG91ZC1saWtlcy9hcHAvcm91dGVzLmpzIiwiL1VzZXJzL21heGltZWNvbnkvRG9jdW1lbnRzL25vZGUvcmVuZHItc291bmRjbG91ZC1saWtlcy9hcHAvdGVtcGxhdGVzL2NvbXBpbGVkVGVtcGxhdGVzLmpzIiwiL1VzZXJzL21heGltZWNvbnkvRG9jdW1lbnRzL25vZGUvcmVuZHItc291bmRjbG91ZC1saWtlcy9hcHAvdmlld3MvYmFzZS5qcyIsIi9Vc2Vycy9tYXhpbWVjb255L0RvY3VtZW50cy9ub2RlL3JlbmRyLXNvdW5kY2xvdWQtbGlrZXMvYXBwL3ZpZXdzL2hvbWUvaW5kZXguanMiLCIvVXNlcnMvbWF4aW1lY29ueS9Eb2N1bWVudHMvbm9kZS9yZW5kci1zb3VuZGNsb3VkLWxpa2VzL2FwcC92aWV3cy9saWtlL2luZGV4LmpzIiwiL1VzZXJzL21heGltZWNvbnkvRG9jdW1lbnRzL25vZGUvcmVuZHItc291bmRjbG91ZC1saWtlcy9hc3NldHMvdmVuZG9yL2pxdWVyeS0xLjkuMS5taW4uanMiLCIvVXNlcnMvbWF4aW1lY29ueS9Eb2N1bWVudHMvbm9kZS9yZW5kci1zb3VuZGNsb3VkLWxpa2VzL25vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCIvVXNlcnMvbWF4aW1lY29ueS9Eb2N1bWVudHMvbm9kZS9yZW5kci1zb3VuZGNsb3VkLWxpa2VzL25vZGVfbW9kdWxlcy9yZW5kci1oYW5kbGViYXJzL2luZGV4LmpzIiwiL1VzZXJzL21heGltZWNvbnkvRG9jdW1lbnRzL25vZGUvcmVuZHItc291bmRjbG91ZC1saWtlcy9ub2RlX21vZHVsZXMvcmVuZHItaGFuZGxlYmFycy9saWIvZ2V0T3B0aW9ucy5qcyIsIi9Vc2Vycy9tYXhpbWVjb255L0RvY3VtZW50cy9ub2RlL3JlbmRyLXNvdW5kY2xvdWQtbGlrZXMvbm9kZV9tb2R1bGVzL3JlbmRyLWhhbmRsZWJhcnMvbGliL2dldFByb3BlcnR5LmpzIiwiL1VzZXJzL21heGltZWNvbnkvRG9jdW1lbnRzL25vZGUvcmVuZHItc291bmRjbG91ZC1saWtlcy9ub2RlX21vZHVsZXMvcmVuZHItaGFuZGxlYmFycy9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzLnJ1bnRpbWUuanMiLCIvVXNlcnMvbWF4aW1lY29ueS9Eb2N1bWVudHMvbm9kZS9yZW5kci1zb3VuZGNsb3VkLWxpa2VzL25vZGVfbW9kdWxlcy9yZW5kci1oYW5kbGViYXJzL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvYmFzZS5qcyIsIi9Vc2Vycy9tYXhpbWVjb255L0RvY3VtZW50cy9ub2RlL3JlbmRyLXNvdW5kY2xvdWQtbGlrZXMvbm9kZV9tb2R1bGVzL3JlbmRyLWhhbmRsZWJhcnMvbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9leGNlcHRpb24uanMiLCIvVXNlcnMvbWF4aW1lY29ueS9Eb2N1bWVudHMvbm9kZS9yZW5kci1zb3VuZGNsb3VkLWxpa2VzL25vZGVfbW9kdWxlcy9yZW5kci1oYW5kbGViYXJzL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvcnVudGltZS5qcyIsIi9Vc2Vycy9tYXhpbWVjb255L0RvY3VtZW50cy9ub2RlL3JlbmRyLXNvdW5kY2xvdWQtbGlrZXMvbm9kZV9tb2R1bGVzL3JlbmRyLWhhbmRsZWJhcnMvbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9zYWZlLXN0cmluZy5qcyIsIi9Vc2Vycy9tYXhpbWVjb255L0RvY3VtZW50cy9ub2RlL3JlbmRyLXNvdW5kY2xvdWQtbGlrZXMvbm9kZV9tb2R1bGVzL3JlbmRyLWhhbmRsZWJhcnMvbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy91dGlscy5qcyIsIi9Vc2Vycy9tYXhpbWVjb255L0RvY3VtZW50cy9ub2RlL3JlbmRyLXNvdW5kY2xvdWQtbGlrZXMvbm9kZV9tb2R1bGVzL3JlbmRyLWhhbmRsZWJhcnMvbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qcyIsIi9Vc2Vycy9tYXhpbWVjb255L0RvY3VtZW50cy9ub2RlL3JlbmRyLXNvdW5kY2xvdWQtbGlrZXMvbm9kZV9tb2R1bGVzL3JlbmRyLWhhbmRsZWJhcnMvbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvdW5kZXJzY29yZS5qcyIsIi9Vc2Vycy9tYXhpbWVjb255L0RvY3VtZW50cy9ub2RlL3JlbmRyLXNvdW5kY2xvdWQtbGlrZXMvbm9kZV9tb2R1bGVzL3JlbmRyLWhhbmRsZWJhcnMvc2hhcmVkL2hlbHBlcnMuanMiLCIvVXNlcnMvbWF4aW1lY29ueS9Eb2N1bWVudHMvbm9kZS9yZW5kci1zb3VuZGNsb3VkLWxpa2VzL25vZGVfbW9kdWxlcy9yZW5kci1oYW5kbGViYXJzL3NoYXJlZC9oZWxwZXJzL2VhY2guanMiLCIvVXNlcnMvbWF4aW1lY29ueS9Eb2N1bWVudHMvbm9kZS9yZW5kci1zb3VuZGNsb3VkLWxpa2VzL25vZGVfbW9kdWxlcy9yZW5kci1oYW5kbGViYXJzL3NoYXJlZC9oZWxwZXJzL2ZvckVhY2guanMiLCIvVXNlcnMvbWF4aW1lY29ueS9Eb2N1bWVudHMvbm9kZS9yZW5kci1zb3VuZGNsb3VkLWxpa2VzL25vZGVfbW9kdWxlcy9yZW5kci1oYW5kbGViYXJzL3NoYXJlZC9oZWxwZXJzL2pzb24uanMiLCIvVXNlcnMvbWF4aW1lY29ueS9Eb2N1bWVudHMvbm9kZS9yZW5kci1zb3VuZGNsb3VkLWxpa2VzL25vZGVfbW9kdWxlcy9yZW5kci1oYW5kbGViYXJzL3NoYXJlZC9oZWxwZXJzL3BhcnRpYWwuanMiLCIvVXNlcnMvbWF4aW1lY29ueS9Eb2N1bWVudHMvbm9kZS9yZW5kci1zb3VuZGNsb3VkLWxpa2VzL25vZGVfbW9kdWxlcy9yZW5kci1oYW5kbGViYXJzL3NoYXJlZC9oZWxwZXJzL3NlcnZlclRvQ2xpZW50SnNvbi5qcyIsIi9Vc2Vycy9tYXhpbWVjb255L0RvY3VtZW50cy9ub2RlL3JlbmRyLXNvdW5kY2xvdWQtbGlrZXMvbm9kZV9tb2R1bGVzL3JlbmRyLWhhbmRsZWJhcnMvc2hhcmVkL2hlbHBlcnMvdmlldy5qcyIsIi9Vc2Vycy9tYXhpbWVjb255L0RvY3VtZW50cy9ub2RlL3JlbmRyLXNvdW5kY2xvdWQtbGlrZXMvbm9kZV9tb2R1bGVzL3JlbmRyLWhhbmRsZWJhcnMvc2hhcmVkL3RlbXBsYXRlRmluZGVyLmpzIiwiL1VzZXJzL21heGltZWNvbnkvRG9jdW1lbnRzL25vZGUvcmVuZHItc291bmRjbG91ZC1saWtlcy9ub2RlX21vZHVsZXMvcmVuZHIvY2xpZW50L2FwcF92aWV3LmpzIiwiL1VzZXJzL21heGltZWNvbnkvRG9jdW1lbnRzL25vZGUvcmVuZHItc291bmRjbG91ZC1saWtlcy9ub2RlX21vZHVsZXMvcmVuZHIvY2xpZW50L3JvdXRlci5qcyIsIi9Vc2Vycy9tYXhpbWVjb255L0RvY3VtZW50cy9ub2RlL3JlbmRyLXNvdW5kY2xvdWQtbGlrZXMvbm9kZV9tb2R1bGVzL3JlbmRyL25vZGVfbW9kdWxlcy9hc3luYy9saWIvYXN5bmMuanMiLCIvVXNlcnMvbWF4aW1lY29ueS9Eb2N1bWVudHMvbm9kZS9yZW5kci1zb3VuZGNsb3VkLWxpa2VzL25vZGVfbW9kdWxlcy9yZW5kci9ub2RlX21vZHVsZXMvYmFja2JvbmUvYmFja2JvbmUuanMiLCIvVXNlcnMvbWF4aW1lY29ueS9Eb2N1bWVudHMvbm9kZS9yZW5kci1zb3VuZGNsb3VkLWxpa2VzL25vZGVfbW9kdWxlcy9yZW5kci9zaGFyZWQvYXBwLmpzIiwiL1VzZXJzL21heGltZWNvbnkvRG9jdW1lbnRzL25vZGUvcmVuZHItc291bmRjbG91ZC1saWtlcy9ub2RlX21vZHVsZXMvcmVuZHIvc2hhcmVkL2Jhc2UvY29sbGVjdGlvbi5qcyIsIi9Vc2Vycy9tYXhpbWVjb255L0RvY3VtZW50cy9ub2RlL3JlbmRyLXNvdW5kY2xvdWQtbGlrZXMvbm9kZV9tb2R1bGVzL3JlbmRyL3NoYXJlZC9iYXNlL21vZGVsLmpzIiwiL1VzZXJzL21heGltZWNvbnkvRG9jdW1lbnRzL25vZGUvcmVuZHItc291bmRjbG91ZC1saWtlcy9ub2RlX21vZHVsZXMvcmVuZHIvc2hhcmVkL2Jhc2Uvcm91dGVyLmpzIiwiL1VzZXJzL21heGltZWNvbnkvRG9jdW1lbnRzL25vZGUvcmVuZHItc291bmRjbG91ZC1saWtlcy9ub2RlX21vZHVsZXMvcmVuZHIvc2hhcmVkL2Jhc2Uvdmlldy5qcyIsIi9Vc2Vycy9tYXhpbWVjb255L0RvY3VtZW50cy9ub2RlL3JlbmRyLXNvdW5kY2xvdWQtbGlrZXMvbm9kZV9tb2R1bGVzL3JlbmRyL3NoYXJlZC9mZXRjaGVyLmpzIiwiL1VzZXJzL21heGltZWNvbnkvRG9jdW1lbnRzL25vZGUvcmVuZHItc291bmRjbG91ZC1saWtlcy9ub2RlX21vZHVsZXMvcmVuZHIvc2hhcmVkL21vZGVsVXRpbHMuanMiLCIvVXNlcnMvbWF4aW1lY29ueS9Eb2N1bWVudHMvbm9kZS9yZW5kci1zb3VuZGNsb3VkLWxpa2VzL25vZGVfbW9kdWxlcy9yZW5kci9zaGFyZWQvc3RvcmUvY29sbGVjdGlvbl9zdG9yZS5qcyIsIi9Vc2Vycy9tYXhpbWVjb255L0RvY3VtZW50cy9ub2RlL3JlbmRyLXNvdW5kY2xvdWQtbGlrZXMvbm9kZV9tb2R1bGVzL3JlbmRyL3NoYXJlZC9zdG9yZS9tZW1vcnlfc3RvcmUuanMiLCIvVXNlcnMvbWF4aW1lY29ueS9Eb2N1bWVudHMvbm9kZS9yZW5kci1zb3VuZGNsb3VkLWxpa2VzL25vZGVfbW9kdWxlcy9yZW5kci9zaGFyZWQvc3RvcmUvbW9kZWxfc3RvcmUuanMiLCIvVXNlcnMvbWF4aW1lY29ueS9Eb2N1bWVudHMvbm9kZS9yZW5kci1zb3VuZGNsb3VkLWxpa2VzL25vZGVfbW9kdWxlcy9yZW5kci9zaGFyZWQvc3luY2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNWdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNybUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDeGtEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1aEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQmFzZUFwcCA9IHJlcXVpcmUoJ3JlbmRyL3NoYXJlZC9hcHAnKTtcblxuLyoqXG4gKiBFeHRlbmQgdGhlIGBCYXNlQXBwYCBjbGFzcywgYWRkaW5nIGFueSBjdXN0b20gbWV0aG9kcyBvciBvdmVycmlkZXMuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gQmFzZUFwcC5leHRlbmQoKTsiLCJ2YXIgUmVuZHJCYXNlID0gcmVxdWlyZSgncmVuZHIvc2hhcmVkL2Jhc2UvY29sbGVjdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRyQmFzZS5leHRlbmQoe30pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVHJhY2sgPSByZXF1aXJlKCcuLi9tb2RlbHMvdHJhY2snKTtcbnZhciBCYXNlID0gcmVxdWlyZSgnLi9iYXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZS5leHRlbmQoe1xuICBcbiAgbW9kZWw6IFRyYWNrLFxuICBcbiAgdXJsOiAnL3VzZXJzLzp1c2VyX2lkL2Zhdm9yaXRlcydcblxufSk7XG5tb2R1bGUuZXhwb3J0cy5pZCA9ICdMaWtlcyc7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbmRleDogZnVuY3Rpb24ocGFyYW1zLCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKCk7XG4gIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgXG4gIGluZGV4OiBmdW5jdGlvbihwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgLy8gVE9ETzogZmluZCBhIGJldHRlciB3YXlcbiAgICBwYXJhbXMuY2xpZW50X2lkID0gJ2ZmNDUxOWFlMWRiMDg5MGYyZmZiNjAyYzNiYzBjOGJkJztcbiAgICB2YXIgc3BlYyA9IHtcbiAgICAgIGNvbGxlY3Rpb246IHsgY29sbGVjdGlvbjogJ0xpa2VzJywgcGFyYW1zOiBwYXJhbXMgfVxuICAgIH07XG4gICAgdGhpcy5hcHAuZmV0Y2goc3BlYywgZnVuY3Rpb24oZXJyLCByZXN1bHQpIHtcbiAgICAgIGNhbGxiYWNrKGVyciwgcmVzdWx0KTtcbiAgICB9KTtcbiAgfVxuXG59OyIsInZhciBSZW5kckJhc2UgPSByZXF1aXJlKCdyZW5kci9zaGFyZWQvYmFzZS9tb2RlbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRyQmFzZS5leHRlbmQoe30pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQmFzZSA9IHJlcXVpcmUoJy4vYmFzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2UuZXh0ZW5kKHtcbiAgdXJsOiAnL3RyYWNrcy86dHJhY2tfaWQnXG59KTtcbm1vZHVsZS5leHBvcnRzLmlkID0gJ1RyYWNrJztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEJhc2VDbGllbnRSb3V0ZXIgPSByZXF1aXJlKCdyZW5kci9jbGllbnQvcm91dGVyJyk7XG5cbnZhciBSb3V0ZXIgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFJvdXRlcihvcHRpb25zKSB7XG4gIEJhc2VDbGllbnRSb3V0ZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbn07XG5cbi8qKlxuICogU2V0IHVwIGluaGVyaXRhbmNlLlxuICovXG5Sb3V0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNlQ2xpZW50Um91dGVyLnByb3RvdHlwZSk7XG5Sb3V0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQmFzZUNsaWVudFJvdXRlcjsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obWF0Y2gpIHtcbiAgbWF0Y2goJycsICdob21lI2luZGV4Jyk7XG4gIG1hdGNoKCcvOnVzZXJfaWQvbGlrZXMnLCAnbGlrZSNpbmRleCcpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSGFuZGxlYmFycykge1xuXG52YXIgdGVtcGxhdGVzID0ge307XG5cbnRlbXBsYXRlc1tcImhvbWUvaW5kZXhcIl0gPSBIYW5kbGViYXJzLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICByZXR1cm4gXCJcIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG50ZW1wbGF0ZXNbXCJsaWtlL2luZGV4XCJdID0gSGFuZGxlYmFycy50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgaGVscGVyLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZywgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb247XG4gIHJldHVybiBcIiAgICA8bGk+XFxuICAgICAgXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy50aXRsZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudGl0bGUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxuICAgIDwvbGk+XFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGJ1ZmZlciA9IFwiPGgxPkxpa2VzPC9oMT5cXG5cXG48dWw+XFxuXCI7XG4gIHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGRlcHRoMCwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm1vZGVscyA6IGRlcHRoMCksIHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDEsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMubm9vcCxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIHJldHVybiBidWZmZXIgKyBcIjwvdWw+XFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxucmV0dXJuIHRlbXBsYXRlcztcblxufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBSZW5kclZpZXcgPSByZXF1aXJlKCdyZW5kci9zaGFyZWQvYmFzZS92aWV3Jyk7XG5cbi8vIENyZWF0ZSBhIGJhc2UgdmlldywgZm9yIGFkZGluZyBjb21tb24gZXh0ZW5zaW9ucyB0byBvdXJcbi8vIGFwcGxpY2F0aW9uJ3Mgdmlld3MuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRyVmlldy5leHRlbmQoe30pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEJhc2VWaWV3ID0gcmVxdWlyZSgnLi4vYmFzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2VWaWV3LmV4dGVuZCh7XG4gIFxuICBjbGFzc05hbWU6ICdob21lX2luZGV4X3ZpZXcnLFxuXG4gIGV2ZW50czoge1xuICAgICdzdWJtaXQgI3VzZXJuYW1lLWZvcm0nOiAnbmF2aWdhdGVUb1VzZXJQYWdlJ1xuICB9LFxuXG4gIG5hdmlnYXRlVG9Vc2VyUGFnZTogZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIHVzZXJuYW1lID0gdGhpcy4kZWwuZmluZCgnaW5wdXRbbmFtZT11c2VybmFtZV0nKS52YWwoKTtcbiAgICBpZiAoIXVzZXJuYW1lKSByZXR1cm47XG4gICAgdGhpcy5hcHAucm91dGVyLm5hdmlnYXRlKHVzZXJuYW1lICsgJy9saWtlcycpO1xuICB9XG5cbn0pO1xubW9kdWxlLmV4cG9ydHMuaWQgPSAnaG9tZS9pbmRleCc7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBCYXNlVmlldyA9IHJlcXVpcmUoJy4uL2Jhc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlVmlldy5leHRlbmQoe1xuICBcbiAgY2xhc3NOYW1lOiAnbGlrZXNfaW5kZXhfdmlldycsXG5cbn0pO1xubW9kdWxlLmV4cG9ydHMuaWQgPSAnbGlrZS9pbmRleCc7XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG4oZnVuY3Rpb24gYnJvd3NlcmlmeVNoaW0obW9kdWxlLCBleHBvcnRzLCBkZWZpbmUsIGJyb3dzZXJpZnlfc2hpbV9fZGVmaW5lX19tb2R1bGVfX2V4cG9ydF9fKSB7XG4vKiEgalF1ZXJ5IHYxLjkuMSB8IChjKSAyMDA1LCAyMDEyIGpRdWVyeSBGb3VuZGF0aW9uLCBJbmMuIHwganF1ZXJ5Lm9yZy9saWNlbnNlXG4qLyhmdW5jdGlvbihlLHQpe3ZhciBuLHIsaT10eXBlb2YgdCxvPWUuZG9jdW1lbnQsYT1lLmxvY2F0aW9uLHM9ZS5qUXVlcnksdT1lLiQsbD17fSxjPVtdLHA9XCIxLjkuMVwiLGY9Yy5jb25jYXQsZD1jLnB1c2gsaD1jLnNsaWNlLGc9Yy5pbmRleE9mLG09bC50b1N0cmluZyx5PWwuaGFzT3duUHJvcGVydHksdj1wLnRyaW0sYj1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcgYi5mbi5pbml0KGUsdCxyKX0seD0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2Usdz0vXFxTKy9nLFQ9L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLE49L14oPzooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0qKSkkLyxDPS9ePChcXHcrKVxccypcXC8/Pig/OjxcXC9cXDE+fCkkLyxrPS9eW1xcXSw6e31cXHNdKiQvLEU9Lyg/Ol58OnwsKSg/OlxccypcXFspKy9nLFM9L1xcXFwoPzpbXCJcXFxcXFwvYmZucnRdfHVbXFxkYS1mQS1GXXs0fSkvZyxBPS9cIlteXCJcXFxcXFxyXFxuXSpcInx0cnVlfGZhbHNlfG51bGx8LT8oPzpcXGQrXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpL2csaj0vXi1tcy0vLEQ9Ly0oW1xcZGEtel0pL2dpLEw9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC50b1VwcGVyQ2FzZSgpfSxIPWZ1bmN0aW9uKGUpeyhvLmFkZEV2ZW50TGlzdGVuZXJ8fFwibG9hZFwiPT09ZS50eXBlfHxcImNvbXBsZXRlXCI9PT1vLnJlYWR5U3RhdGUpJiYocSgpLGIucmVhZHkoKSl9LHE9ZnVuY3Rpb24oKXtvLmFkZEV2ZW50TGlzdGVuZXI/KG8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixILCExKSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsSCwhMSkpOihvLmRldGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsSCksZS5kZXRhY2hFdmVudChcIm9ubG9hZFwiLEgpKX07Yi5mbj1iLnByb3RvdHlwZT17anF1ZXJ5OnAsY29uc3RydWN0b3I6Yixpbml0OmZ1bmN0aW9uKGUsbixyKXt2YXIgaSxhO2lmKCFlKXJldHVybiB0aGlzO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXtpZihpPVwiPFwiPT09ZS5jaGFyQXQoMCkmJlwiPlwiPT09ZS5jaGFyQXQoZS5sZW5ndGgtMSkmJmUubGVuZ3RoPj0zP1tudWxsLGUsbnVsbF06Ti5leGVjKGUpLCFpfHwhaVsxXSYmbilyZXR1cm4hbnx8bi5qcXVlcnk/KG58fHIpLmZpbmQoZSk6dGhpcy5jb25zdHJ1Y3RvcihuKS5maW5kKGUpO2lmKGlbMV0pe2lmKG49biBpbnN0YW5jZW9mIGI/blswXTpuLGIubWVyZ2UodGhpcyxiLnBhcnNlSFRNTChpWzFdLG4mJm4ubm9kZVR5cGU/bi5vd25lckRvY3VtZW50fHxuOm8sITApKSxDLnRlc3QoaVsxXSkmJmIuaXNQbGFpbk9iamVjdChuKSlmb3IoaSBpbiBuKWIuaXNGdW5jdGlvbih0aGlzW2ldKT90aGlzW2ldKG5baV0pOnRoaXMuYXR0cihpLG5baV0pO3JldHVybiB0aGlzfWlmKGE9by5nZXRFbGVtZW50QnlJZChpWzJdKSxhJiZhLnBhcmVudE5vZGUpe2lmKGEuaWQhPT1pWzJdKXJldHVybiByLmZpbmQoZSk7dGhpcy5sZW5ndGg9MSx0aGlzWzBdPWF9cmV0dXJuIHRoaXMuY29udGV4dD1vLHRoaXMuc2VsZWN0b3I9ZSx0aGlzfXJldHVybiBlLm5vZGVUeXBlPyh0aGlzLmNvbnRleHQ9dGhpc1swXT1lLHRoaXMubGVuZ3RoPTEsdGhpcyk6Yi5pc0Z1bmN0aW9uKGUpP3IucmVhZHkoZSk6KGUuc2VsZWN0b3IhPT10JiYodGhpcy5zZWxlY3Rvcj1lLnNlbGVjdG9yLHRoaXMuY29udGV4dD1lLmNvbnRleHQpLGIubWFrZUFycmF5KGUsdGhpcykpfSxzZWxlY3RvcjpcIlwiLGxlbmd0aDowLHNpemU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5sZW5ndGh9LHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gaC5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/dGhpcy50b0FycmF5KCk6MD5lP3RoaXNbdGhpcy5sZW5ndGgrZV06dGhpc1tlXX0scHVzaFN0YWNrOmZ1bmN0aW9uKGUpe3ZhciB0PWIubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGUpO3JldHVybiB0LnByZXZPYmplY3Q9dGhpcyx0LmNvbnRleHQ9dGhpcy5jb250ZXh0LHR9LGVhY2g6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gYi5lYWNoKHRoaXMsZSx0KX0scmVhZHk6ZnVuY3Rpb24oZSl7cmV0dXJuIGIucmVhZHkucHJvbWlzZSgpLmRvbmUoZSksdGhpc30sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soaC5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxlcTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLmxlbmd0aCxuPStlKygwPmU/dDowKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobj49MCYmdD5uP1t0aGlzW25dXTpbXSl9LG1hcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soYi5tYXAodGhpcyxmdW5jdGlvbih0LG4pe3JldHVybiBlLmNhbGwodCxuLHQpfSkpfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKG51bGwpfSxwdXNoOmQsc29ydDpbXS5zb3J0LHNwbGljZTpbXS5zcGxpY2V9LGIuZm4uaW5pdC5wcm90b3R5cGU9Yi5mbixiLmV4dGVuZD1iLmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBlLG4scixpLG8sYSxzPWFyZ3VtZW50c1swXXx8e30sdT0xLGw9YXJndW1lbnRzLmxlbmd0aCxjPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIHMmJihjPXMscz1hcmd1bWVudHNbMV18fHt9LHU9MiksXCJvYmplY3RcIj09dHlwZW9mIHN8fGIuaXNGdW5jdGlvbihzKXx8KHM9e30pLGw9PT11JiYocz10aGlzLC0tdSk7bD51O3UrKylpZihudWxsIT0obz1hcmd1bWVudHNbdV0pKWZvcihpIGluIG8pZT1zW2ldLHI9b1tpXSxzIT09ciYmKGMmJnImJihiLmlzUGxhaW5PYmplY3Qocil8fChuPWIuaXNBcnJheShyKSkpPyhuPyhuPSExLGE9ZSYmYi5pc0FycmF5KGUpP2U6W10pOmE9ZSYmYi5pc1BsYWluT2JqZWN0KGUpP2U6e30sc1tpXT1iLmV4dGVuZChjLGEscikpOnIhPT10JiYoc1tpXT1yKSk7cmV0dXJuIHN9LGIuZXh0ZW5kKHtub0NvbmZsaWN0OmZ1bmN0aW9uKHQpe3JldHVybiBlLiQ9PT1iJiYoZS4kPXUpLHQmJmUualF1ZXJ5PT09YiYmKGUualF1ZXJ5PXMpLGJ9LGlzUmVhZHk6ITEscmVhZHlXYWl0OjEsaG9sZFJlYWR5OmZ1bmN0aW9uKGUpe2U/Yi5yZWFkeVdhaXQrKzpiLnJlYWR5KCEwKX0scmVhZHk6ZnVuY3Rpb24oZSl7aWYoZT09PSEwPyEtLWIucmVhZHlXYWl0OiFiLmlzUmVhZHkpe2lmKCFvLmJvZHkpcmV0dXJuIHNldFRpbWVvdXQoYi5yZWFkeSk7Yi5pc1JlYWR5PSEwLGUhPT0hMCYmLS1iLnJlYWR5V2FpdD4wfHwobi5yZXNvbHZlV2l0aChvLFtiXSksYi5mbi50cmlnZ2VyJiZiKG8pLnRyaWdnZXIoXCJyZWFkeVwiKS5vZmYoXCJyZWFkeVwiKSl9fSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09PWIudHlwZShlKX0saXNBcnJheTpBcnJheS5pc0FycmF5fHxmdW5jdGlvbihlKXtyZXR1cm5cImFycmF5XCI9PT1iLnR5cGUoZSl9LGlzV2luZG93OmZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lJiZlPT1lLndpbmRvd30saXNOdW1lcmljOmZ1bmN0aW9uKGUpe3JldHVybiFpc05hTihwYXJzZUZsb2F0KGUpKSYmaXNGaW5pdGUoZSl9LHR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/ZStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2xbbS5jYWxsKGUpXXx8XCJvYmplY3RcIjp0eXBlb2YgZX0saXNQbGFpbk9iamVjdDpmdW5jdGlvbihlKXtpZighZXx8XCJvYmplY3RcIiE9PWIudHlwZShlKXx8ZS5ub2RlVHlwZXx8Yi5pc1dpbmRvdyhlKSlyZXR1cm4hMTt0cnl7aWYoZS5jb25zdHJ1Y3RvciYmIXkuY2FsbChlLFwiY29uc3RydWN0b3JcIikmJiF5LmNhbGwoZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsXCJpc1Byb3RvdHlwZU9mXCIpKXJldHVybiExfWNhdGNoKG4pe3JldHVybiExfXZhciByO2ZvcihyIGluIGUpO3JldHVybiByPT09dHx8eS5jYWxsKGUscil9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oZSl7dmFyIHQ7Zm9yKHQgaW4gZSlyZXR1cm4hMTtyZXR1cm4hMH0sZXJyb3I6ZnVuY3Rpb24oZSl7dGhyb3cgRXJyb3IoZSl9LHBhcnNlSFRNTDpmdW5jdGlvbihlLHQsbil7aWYoIWV8fFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiBudWxsO1wiYm9vbGVhblwiPT10eXBlb2YgdCYmKG49dCx0PSExKSx0PXR8fG87dmFyIHI9Qy5leGVjKGUpLGk9IW4mJltdO3JldHVybiByP1t0LmNyZWF0ZUVsZW1lbnQoclsxXSldOihyPWIuYnVpbGRGcmFnbWVudChbZV0sdCxpKSxpJiZiKGkpLnJlbW92ZSgpLGIubWVyZ2UoW10sci5jaGlsZE5vZGVzKSl9LHBhcnNlSlNPTjpmdW5jdGlvbihuKXtyZXR1cm4gZS5KU09OJiZlLkpTT04ucGFyc2U/ZS5KU09OLnBhcnNlKG4pOm51bGw9PT1uP246XCJzdHJpbmdcIj09dHlwZW9mIG4mJihuPWIudHJpbShuKSxuJiZrLnRlc3Qobi5yZXBsYWNlKFMsXCJAXCIpLnJlcGxhY2UoQSxcIl1cIikucmVwbGFjZShFLFwiXCIpKSk/RnVuY3Rpb24oXCJyZXR1cm4gXCIrbikoKTooYi5lcnJvcihcIkludmFsaWQgSlNPTjogXCIrbiksdCl9LHBhcnNlWE1MOmZ1bmN0aW9uKG4pe3ZhciByLGk7aWYoIW58fFwic3RyaW5nXCIhPXR5cGVvZiBuKXJldHVybiBudWxsO3RyeXtlLkRPTVBhcnNlcj8oaT1uZXcgRE9NUGFyc2VyLHI9aS5wYXJzZUZyb21TdHJpbmcobixcInRleHQveG1sXCIpKToocj1uZXcgQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxET01cIiksci5hc3luYz1cImZhbHNlXCIsci5sb2FkWE1MKG4pKX1jYXRjaChvKXtyPXR9cmV0dXJuIHImJnIuZG9jdW1lbnRFbGVtZW50JiYhci5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aHx8Yi5lcnJvcihcIkludmFsaWQgWE1MOiBcIituKSxyfSxub29wOmZ1bmN0aW9uKCl7fSxnbG9iYWxFdmFsOmZ1bmN0aW9uKHQpe3QmJmIudHJpbSh0KSYmKGUuZXhlY1NjcmlwdHx8ZnVuY3Rpb24odCl7ZS5ldmFsLmNhbGwoZSx0KX0pKHQpfSxjYW1lbENhc2U6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZShqLFwibXMtXCIpLnJlcGxhY2UoRCxMKX0sbm9kZU5hbWU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5ub2RlTmFtZSYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09dC50b0xvd2VyQ2FzZSgpfSxlYWNoOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpPTAsbz1lLmxlbmd0aCxhPU0oZSk7aWYobil7aWYoYSl7Zm9yKDtvPmk7aSsrKWlmKHI9dC5hcHBseShlW2ldLG4pLHI9PT0hMSlicmVha31lbHNlIGZvcihpIGluIGUpaWYocj10LmFwcGx5KGVbaV0sbikscj09PSExKWJyZWFrfWVsc2UgaWYoYSl7Zm9yKDtvPmk7aSsrKWlmKHI9dC5jYWxsKGVbaV0saSxlW2ldKSxyPT09ITEpYnJlYWt9ZWxzZSBmb3IoaSBpbiBlKWlmKHI9dC5jYWxsKGVbaV0saSxlW2ldKSxyPT09ITEpYnJlYWs7cmV0dXJuIGV9LHRyaW06diYmIXYuY2FsbChcIlxcdWZlZmZcXHUwMGEwXCIpP2Z1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1wiXCI6di5jYWxsKGUpfTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOihlK1wiXCIpLnJlcGxhY2UoVCxcIlwiKX0sbWFrZUFycmF5OmZ1bmN0aW9uKGUsdCl7dmFyIG49dHx8W107cmV0dXJuIG51bGwhPWUmJihNKE9iamVjdChlKSk/Yi5tZXJnZShuLFwic3RyaW5nXCI9PXR5cGVvZiBlP1tlXTplKTpkLmNhbGwobixlKSksbn0saW5BcnJheTpmdW5jdGlvbihlLHQsbil7dmFyIHI7aWYodCl7aWYoZylyZXR1cm4gZy5jYWxsKHQsZSxuKTtmb3Iocj10Lmxlbmd0aCxuPW4/MD5uP01hdGgubWF4KDAscituKTpuOjA7cj5uO24rKylpZihuIGluIHQmJnRbbl09PT1lKXJldHVybiBufXJldHVybi0xfSxtZXJnZTpmdW5jdGlvbihlLG4pe3ZhciByPW4ubGVuZ3RoLGk9ZS5sZW5ndGgsbz0wO2lmKFwibnVtYmVyXCI9PXR5cGVvZiByKWZvcig7cj5vO28rKyllW2krK109bltvXTtlbHNlIHdoaWxlKG5bb10hPT10KWVbaSsrXT1uW28rK107cmV0dXJuIGUubGVuZ3RoPWksZX0sZ3JlcDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaT1bXSxvPTAsYT1lLmxlbmd0aDtmb3Iobj0hIW47YT5vO28rKylyPSEhdChlW29dLG8pLG4hPT1yJiZpLnB1c2goZVtvXSk7cmV0dXJuIGl9LG1hcDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaT0wLG89ZS5sZW5ndGgsYT1NKGUpLHM9W107aWYoYSlmb3IoO28+aTtpKyspcj10KGVbaV0saSxuKSxudWxsIT1yJiYoc1tzLmxlbmd0aF09cik7ZWxzZSBmb3IoaSBpbiBlKXI9dChlW2ldLGksbiksbnVsbCE9ciYmKHNbcy5sZW5ndGhdPXIpO3JldHVybiBmLmFwcGx5KFtdLHMpfSxndWlkOjEscHJveHk6ZnVuY3Rpb24oZSxuKXt2YXIgcixpLG87cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIG4mJihvPWVbbl0sbj1lLGU9byksYi5pc0Z1bmN0aW9uKGUpPyhyPWguY2FsbChhcmd1bWVudHMsMiksaT1mdW5jdGlvbigpe3JldHVybiBlLmFwcGx5KG58fHRoaXMsci5jb25jYXQoaC5jYWxsKGFyZ3VtZW50cykpKX0saS5ndWlkPWUuZ3VpZD1lLmd1aWR8fGIuZ3VpZCsrLGkpOnR9LGFjY2VzczpmdW5jdGlvbihlLG4scixpLG8sYSxzKXt2YXIgdT0wLGw9ZS5sZW5ndGgsYz1udWxsPT1yO2lmKFwib2JqZWN0XCI9PT1iLnR5cGUocikpe289ITA7Zm9yKHUgaW4gciliLmFjY2VzcyhlLG4sdSxyW3VdLCEwLGEscyl9ZWxzZSBpZihpIT09dCYmKG89ITAsYi5pc0Z1bmN0aW9uKGkpfHwocz0hMCksYyYmKHM/KG4uY2FsbChlLGkpLG49bnVsbCk6KGM9bixuPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gYy5jYWxsKGIoZSksbil9KSksbikpZm9yKDtsPnU7dSsrKW4oZVt1XSxyLHM/aTppLmNhbGwoZVt1XSx1LG4oZVt1XSxyKSkpO3JldHVybiBvP2U6Yz9uLmNhbGwoZSk6bD9uKGVbMF0scik6YX0sbm93OmZ1bmN0aW9uKCl7cmV0dXJuKG5ldyBEYXRlKS5nZXRUaW1lKCl9fSksYi5yZWFkeS5wcm9taXNlPWZ1bmN0aW9uKHQpe2lmKCFuKWlmKG49Yi5EZWZlcnJlZCgpLFwiY29tcGxldGVcIj09PW8ucmVhZHlTdGF0ZSlzZXRUaW1lb3V0KGIucmVhZHkpO2Vsc2UgaWYoby5hZGRFdmVudExpc3RlbmVyKW8uYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixILCExKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsSCwhMSk7ZWxzZXtvLmF0dGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsSCksZS5hdHRhY2hFdmVudChcIm9ubG9hZFwiLEgpO3ZhciByPSExO3RyeXtyPW51bGw9PWUuZnJhbWVFbGVtZW50JiZvLmRvY3VtZW50RWxlbWVudH1jYXRjaChpKXt9ciYmci5kb1Njcm9sbCYmZnVuY3Rpb24gYSgpe2lmKCFiLmlzUmVhZHkpe3RyeXtyLmRvU2Nyb2xsKFwibGVmdFwiKX1jYXRjaChlKXtyZXR1cm4gc2V0VGltZW91dChhLDUwKX1xKCksYi5yZWFkeSgpfX0oKX1yZXR1cm4gbi5wcm9taXNlKHQpfSxiLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGUsdCl7bFtcIltvYmplY3QgXCIrdCtcIl1cIl09dC50b0xvd2VyQ2FzZSgpfSk7ZnVuY3Rpb24gTShlKXt2YXIgdD1lLmxlbmd0aCxuPWIudHlwZShlKTtyZXR1cm4gYi5pc1dpbmRvdyhlKT8hMToxPT09ZS5ub2RlVHlwZSYmdD8hMDpcImFycmF5XCI9PT1ufHxcImZ1bmN0aW9uXCIhPT1uJiYoMD09PXR8fFwibnVtYmVyXCI9PXR5cGVvZiB0JiZ0PjAmJnQtMSBpbiBlKX1yPWIobyk7dmFyIF89e307ZnVuY3Rpb24gRihlKXt2YXIgdD1fW2VdPXt9O3JldHVybiBiLmVhY2goZS5tYXRjaCh3KXx8W10sZnVuY3Rpb24oZSxuKXt0W25dPSEwfSksdH1iLkNhbGxiYWNrcz1mdW5jdGlvbihlKXtlPVwic3RyaW5nXCI9PXR5cGVvZiBlP19bZV18fEYoZSk6Yi5leHRlbmQoe30sZSk7dmFyIG4scixpLG8sYSxzLHU9W10sbD0hZS5vbmNlJiZbXSxjPWZ1bmN0aW9uKHQpe2ZvcihyPWUubWVtb3J5JiZ0LGk9ITAsYT1zfHwwLHM9MCxvPXUubGVuZ3RoLG49ITA7dSYmbz5hO2ErKylpZih1W2FdLmFwcGx5KHRbMF0sdFsxXSk9PT0hMSYmZS5zdG9wT25GYWxzZSl7cj0hMTticmVha31uPSExLHUmJihsP2wubGVuZ3RoJiZjKGwuc2hpZnQoKSk6cj91PVtdOnAuZGlzYWJsZSgpKX0scD17YWRkOmZ1bmN0aW9uKCl7aWYodSl7dmFyIHQ9dS5sZW5ndGg7KGZ1bmN0aW9uIGkodCl7Yi5lYWNoKHQsZnVuY3Rpb24odCxuKXt2YXIgcj1iLnR5cGUobik7XCJmdW5jdGlvblwiPT09cj9lLnVuaXF1ZSYmcC5oYXMobil8fHUucHVzaChuKTpuJiZuLmxlbmd0aCYmXCJzdHJpbmdcIiE9PXImJmkobil9KX0pKGFyZ3VtZW50cyksbj9vPXUubGVuZ3RoOnImJihzPXQsYyhyKSl9cmV0dXJuIHRoaXN9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiB1JiZiLmVhY2goYXJndW1lbnRzLGZ1bmN0aW9uKGUsdCl7dmFyIHI7d2hpbGUoKHI9Yi5pbkFycmF5KHQsdSxyKSk+LTEpdS5zcGxpY2UociwxKSxuJiYobz49ciYmby0tLGE+PXImJmEtLSl9KSx0aGlzfSxoYXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGU/Yi5pbkFycmF5KGUsdSk+LTE6ISghdXx8IXUubGVuZ3RoKX0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gdT1bXSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIHU9bD1yPXQsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hdX0sbG9jazpmdW5jdGlvbigpe3JldHVybiBsPXQscnx8cC5kaXNhYmxlKCksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuIWx9LGZpcmVXaXRoOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ9dHx8W10sdD1bZSx0LnNsaWNlP3Quc2xpY2UoKTp0XSwhdXx8aSYmIWx8fChuP2wucHVzaCh0KTpjKHQpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIHAuZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFpfX07cmV0dXJuIHB9LGIuZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihlKXt2YXIgdD1bW1wicmVzb2x2ZVwiLFwiZG9uZVwiLGIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixiLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFwicmVqZWN0ZWRcIl0sW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLGIuQ2FsbGJhY2tzKFwibWVtb3J5XCIpXV0sbj1cInBlbmRpbmdcIixyPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBufSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gaS5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LHRoZW46ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHM7cmV0dXJuIGIuRGVmZXJyZWQoZnVuY3Rpb24obil7Yi5lYWNoKHQsZnVuY3Rpb24odCxvKXt2YXIgYT1vWzBdLHM9Yi5pc0Z1bmN0aW9uKGVbdF0pJiZlW3RdO2lbb1sxXV0oZnVuY3Rpb24oKXt2YXIgZT1zJiZzLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtlJiZiLmlzRnVuY3Rpb24oZS5wcm9taXNlKT9lLnByb21pc2UoKS5kb25lKG4ucmVzb2x2ZSkuZmFpbChuLnJlamVjdCkucHJvZ3Jlc3Mobi5ub3RpZnkpOm5bYStcIldpdGhcIl0odGhpcz09PXI/bi5wcm9taXNlKCk6dGhpcyxzP1tlXTphcmd1bWVudHMpfSl9KSxlPW51bGx9KS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWU/Yi5leHRlbmQoZSxyKTpyfX0saT17fTtyZXR1cm4gci5waXBlPXIudGhlbixiLmVhY2godCxmdW5jdGlvbihlLG8pe3ZhciBhPW9bMl0scz1vWzNdO3Jbb1sxXV09YS5hZGQscyYmYS5hZGQoZnVuY3Rpb24oKXtuPXN9LHRbMV5lXVsyXS5kaXNhYmxlLHRbMl1bMl0ubG9jayksaVtvWzBdXT1mdW5jdGlvbigpe3JldHVybiBpW29bMF0rXCJXaXRoXCJdKHRoaXM9PT1pP3I6dGhpcyxhcmd1bWVudHMpLHRoaXN9LGlbb1swXStcIldpdGhcIl09YS5maXJlV2l0aH0pLHIucHJvbWlzZShpKSxlJiZlLmNhbGwoaSxpKSxpfSx3aGVuOmZ1bmN0aW9uKGUpe3ZhciB0PTAsbj1oLmNhbGwoYXJndW1lbnRzKSxyPW4ubGVuZ3RoLGk9MSE9PXJ8fGUmJmIuaXNGdW5jdGlvbihlLnByb21pc2UpP3I6MCxvPTE9PT1pP2U6Yi5EZWZlcnJlZCgpLGE9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBmdW5jdGlvbihyKXt0W2VdPXRoaXMsbltlXT1hcmd1bWVudHMubGVuZ3RoPjE/aC5jYWxsKGFyZ3VtZW50cyk6cixuPT09cz9vLm5vdGlmeVdpdGgodCxuKTotLWl8fG8ucmVzb2x2ZVdpdGgodCxuKX19LHMsdSxsO2lmKHI+MSlmb3Iocz1BcnJheShyKSx1PUFycmF5KHIpLGw9QXJyYXkocik7cj50O3QrKyluW3RdJiZiLmlzRnVuY3Rpb24oblt0XS5wcm9taXNlKT9uW3RdLnByb21pc2UoKS5kb25lKGEodCxsLG4pKS5mYWlsKG8ucmVqZWN0KS5wcm9ncmVzcyhhKHQsdSxzKSk6LS1pO3JldHVybiBpfHxvLnJlc29sdmVXaXRoKGwsbiksby5wcm9taXNlKCl9fSksYi5zdXBwb3J0PWZ1bmN0aW9uKCl7dmFyIHQsbixyLGEscyx1LGwsYyxwLGYsZD1vLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIixcInRcIiksZC5pbm5lckhUTUw9XCIgIDxsaW5rLz48dGFibGU+PC90YWJsZT48YSBocmVmPScvYSc+YTwvYT48aW5wdXQgdHlwZT0nY2hlY2tib3gnLz5cIixuPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLHI9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIilbMF0sIW58fCFyfHwhbi5sZW5ndGgpcmV0dXJue307cz1vLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksbD1zLmFwcGVuZENoaWxkKG8uY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSksYT1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF0sci5zdHlsZS5jc3NUZXh0PVwidG9wOjFweDtmbG9hdDpsZWZ0O29wYWNpdHk6LjVcIix0PXtnZXRTZXRBdHRyaWJ1dGU6XCJ0XCIhPT1kLmNsYXNzTmFtZSxsZWFkaW5nV2hpdGVzcGFjZTozPT09ZC5maXJzdENoaWxkLm5vZGVUeXBlLHRib2R5OiFkLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGJvZHlcIikubGVuZ3RoLGh0bWxTZXJpYWxpemU6ISFkLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKS5sZW5ndGgsc3R5bGU6L3RvcC8udGVzdChyLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpKSxocmVmTm9ybWFsaXplZDpcIi9hXCI9PT1yLmdldEF0dHJpYnV0ZShcImhyZWZcIiksb3BhY2l0eTovXjAuNS8udGVzdChyLnN0eWxlLm9wYWNpdHkpLGNzc0Zsb2F0OiEhci5zdHlsZS5jc3NGbG9hdCxjaGVja09uOiEhYS52YWx1ZSxvcHRTZWxlY3RlZDpsLnNlbGVjdGVkLGVuY3R5cGU6ISFvLmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpLmVuY3R5cGUsaHRtbDVDbG9uZTpcIjw6bmF2PjwvOm5hdj5cIiE9PW8uY3JlYXRlRWxlbWVudChcIm5hdlwiKS5jbG9uZU5vZGUoITApLm91dGVySFRNTCxib3hNb2RlbDpcIkNTUzFDb21wYXRcIj09PW8uY29tcGF0TW9kZSxkZWxldGVFeHBhbmRvOiEwLG5vQ2xvbmVFdmVudDohMCxpbmxpbmVCbG9ja05lZWRzTGF5b3V0OiExLHNocmlua1dyYXBCbG9ja3M6ITEscmVsaWFibGVNYXJnaW5SaWdodDohMCxib3hTaXppbmdSZWxpYWJsZTohMCxwaXhlbFBvc2l0aW9uOiExfSxhLmNoZWNrZWQ9ITAsdC5ub0Nsb25lQ2hlY2tlZD1hLmNsb25lTm9kZSghMCkuY2hlY2tlZCxzLmRpc2FibGVkPSEwLHQub3B0RGlzYWJsZWQ9IWwuZGlzYWJsZWQ7dHJ5e2RlbGV0ZSBkLnRlc3R9Y2F0Y2goaCl7dC5kZWxldGVFeHBhbmRvPSExfWE9by5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLHQuaW5wdXQ9XCJcIj09PWEuZ2V0QXR0cmlidXRlKFwidmFsdWVcIiksYS52YWx1ZT1cInRcIixhLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpLHQucmFkaW9WYWx1ZT1cInRcIj09PWEudmFsdWUsYS5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJ0XCIpLGEuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSx1PW8uY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHUuYXBwZW5kQ2hpbGQoYSksdC5hcHBlbmRDaGVja2VkPWEuY2hlY2tlZCx0LmNoZWNrQ2xvbmU9dS5jbG9uZU5vZGUoITApLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmNoZWNrZWQsZC5hdHRhY2hFdmVudCYmKGQuYXR0YWNoRXZlbnQoXCJvbmNsaWNrXCIsZnVuY3Rpb24oKXt0Lm5vQ2xvbmVFdmVudD0hMX0pLGQuY2xvbmVOb2RlKCEwKS5jbGljaygpKTtmb3IoZiBpbntzdWJtaXQ6ITAsY2hhbmdlOiEwLGZvY3VzaW46ITB9KWQuc2V0QXR0cmlidXRlKGM9XCJvblwiK2YsXCJ0XCIpLHRbZitcIkJ1YmJsZXNcIl09YyBpbiBlfHxkLmF0dHJpYnV0ZXNbY10uZXhwYW5kbz09PSExO3JldHVybiBkLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiY29udGVudC1ib3hcIixkLmNsb25lTm9kZSghMCkuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJcIix0LmNsZWFyQ2xvbmVTdHlsZT1cImNvbnRlbnQtYm94XCI9PT1kLnN0eWxlLmJhY2tncm91bmRDbGlwLGIoZnVuY3Rpb24oKXt2YXIgbixyLGEscz1cInBhZGRpbmc6MDttYXJnaW46MDtib3JkZXI6MDtkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Y29udGVudC1ib3g7LW1vei1ib3gtc2l6aW5nOmNvbnRlbnQtYm94Oy13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDtcIix1PW8uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO3UmJihuPW8uY3JlYXRlRWxlbWVudChcImRpdlwiKSxuLnN0eWxlLmNzc1RleHQ9XCJib3JkZXI6MDt3aWR0aDowO2hlaWdodDowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6LTk5OTlweDttYXJnaW4tdG9wOjFweFwiLHUuYXBwZW5kQ2hpbGQobikuYXBwZW5kQ2hpbGQoZCksZC5pbm5lckhUTUw9XCI8dGFibGU+PHRyPjx0ZD48L3RkPjx0ZD50PC90ZD48L3RyPjwvdGFibGU+XCIsYT1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGRcIiksYVswXS5zdHlsZS5jc3NUZXh0PVwicGFkZGluZzowO21hcmdpbjowO2JvcmRlcjowO2Rpc3BsYXk6bm9uZVwiLHA9MD09PWFbMF0ub2Zmc2V0SGVpZ2h0LGFbMF0uc3R5bGUuZGlzcGxheT1cIlwiLGFbMV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIix0LnJlbGlhYmxlSGlkZGVuT2Zmc2V0cz1wJiYwPT09YVswXS5vZmZzZXRIZWlnaHQsZC5pbm5lckhUTUw9XCJcIixkLnN0eWxlLmNzc1RleHQ9XCJib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzoxcHg7Ym9yZGVyOjFweDtkaXNwbGF5OmJsb2NrO3dpZHRoOjRweDttYXJnaW4tdG9wOjElO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxJTtcIix0LmJveFNpemluZz00PT09ZC5vZmZzZXRXaWR0aCx0LmRvZXNOb3RJbmNsdWRlTWFyZ2luSW5Cb2R5T2Zmc2V0PTEhPT11Lm9mZnNldFRvcCxlLmdldENvbXB1dGVkU3R5bGUmJih0LnBpeGVsUG9zaXRpb249XCIxJVwiIT09KGUuZ2V0Q29tcHV0ZWRTdHlsZShkLG51bGwpfHx7fSkudG9wLHQuYm94U2l6aW5nUmVsaWFibGU9XCI0cHhcIj09PShlLmdldENvbXB1dGVkU3R5bGUoZCxudWxsKXx8e3dpZHRoOlwiNHB4XCJ9KS53aWR0aCxyPWQuYXBwZW5kQ2hpbGQoby5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxyLnN0eWxlLmNzc1RleHQ9ZC5zdHlsZS5jc3NUZXh0PXMsci5zdHlsZS5tYXJnaW5SaWdodD1yLnN0eWxlLndpZHRoPVwiMFwiLGQuc3R5bGUud2lkdGg9XCIxcHhcIix0LnJlbGlhYmxlTWFyZ2luUmlnaHQ9IXBhcnNlRmxvYXQoKGUuZ2V0Q29tcHV0ZWRTdHlsZShyLG51bGwpfHx7fSkubWFyZ2luUmlnaHQpKSx0eXBlb2YgZC5zdHlsZS56b29tIT09aSYmKGQuaW5uZXJIVE1MPVwiXCIsZC5zdHlsZS5jc3NUZXh0PXMrXCJ3aWR0aDoxcHg7cGFkZGluZzoxcHg7ZGlzcGxheTppbmxpbmU7em9vbToxXCIsdC5pbmxpbmVCbG9ja05lZWRzTGF5b3V0PTM9PT1kLm9mZnNldFdpZHRoLGQuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsZC5pbm5lckhUTUw9XCI8ZGl2PjwvZGl2PlwiLGQuZmlyc3RDaGlsZC5zdHlsZS53aWR0aD1cIjVweFwiLHQuc2hyaW5rV3JhcEJsb2Nrcz0zIT09ZC5vZmZzZXRXaWR0aCx0LmlubGluZUJsb2NrTmVlZHNMYXlvdXQmJih1LnN0eWxlLnpvb209MSkpLHUucmVtb3ZlQ2hpbGQobiksbj1kPWE9cj1udWxsKX0pLG49cz11PWw9cj1hPW51bGwsdH0oKTt2YXIgTz0vKD86XFx7W1xcc1xcU10qXFx9fFxcW1tcXHNcXFNdKlxcXSkkLyxCPS8oW0EtWl0pL2c7ZnVuY3Rpb24gUChlLG4scixpKXtpZihiLmFjY2VwdERhdGEoZSkpe3ZhciBvLGEscz1iLmV4cGFuZG8sdT1cInN0cmluZ1wiPT10eXBlb2YgbixsPWUubm9kZVR5cGUscD1sP2IuY2FjaGU6ZSxmPWw/ZVtzXTplW3NdJiZzO2lmKGYmJnBbZl0mJihpfHxwW2ZdLmRhdGEpfHwhdXx8ciE9PXQpcmV0dXJuIGZ8fChsP2Vbc109Zj1jLnBvcCgpfHxiLmd1aWQrKzpmPXMpLHBbZl18fChwW2ZdPXt9LGx8fChwW2ZdLnRvSlNPTj1iLm5vb3ApKSwoXCJvYmplY3RcIj09dHlwZW9mIG58fFwiZnVuY3Rpb25cIj09dHlwZW9mIG4pJiYoaT9wW2ZdPWIuZXh0ZW5kKHBbZl0sbik6cFtmXS5kYXRhPWIuZXh0ZW5kKHBbZl0uZGF0YSxuKSksbz1wW2ZdLGl8fChvLmRhdGF8fChvLmRhdGE9e30pLG89by5kYXRhKSxyIT09dCYmKG9bYi5jYW1lbENhc2UobildPXIpLHU/KGE9b1tuXSxudWxsPT1hJiYoYT1vW2IuY2FtZWxDYXNlKG4pXSkpOmE9byxhfX1mdW5jdGlvbiBSKGUsdCxuKXtpZihiLmFjY2VwdERhdGEoZSkpe3ZhciByLGksbyxhPWUubm9kZVR5cGUscz1hP2IuY2FjaGU6ZSx1PWE/ZVtiLmV4cGFuZG9dOmIuZXhwYW5kbztpZihzW3VdKXtpZih0JiYobz1uP3NbdV06c1t1XS5kYXRhKSl7Yi5pc0FycmF5KHQpP3Q9dC5jb25jYXQoYi5tYXAodCxiLmNhbWVsQ2FzZSkpOnQgaW4gbz90PVt0XToodD1iLmNhbWVsQ2FzZSh0KSx0PXQgaW4gbz9bdF06dC5zcGxpdChcIiBcIikpO2ZvcihyPTAsaT10Lmxlbmd0aDtpPnI7cisrKWRlbGV0ZSBvW3Rbcl1dO2lmKCEobj8kOmIuaXNFbXB0eU9iamVjdCkobykpcmV0dXJufShufHwoZGVsZXRlIHNbdV0uZGF0YSwkKHNbdV0pKSkmJihhP2IuY2xlYW5EYXRhKFtlXSwhMCk6Yi5zdXBwb3J0LmRlbGV0ZUV4cGFuZG98fHMhPXMud2luZG93P2RlbGV0ZSBzW3VdOnNbdV09bnVsbCl9fX1iLmV4dGVuZCh7Y2FjaGU6e30sZXhwYW5kbzpcImpRdWVyeVwiKyhwK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLG5vRGF0YTp7ZW1iZWQ6ITAsb2JqZWN0OlwiY2xzaWQ6RDI3Q0RCNkUtQUU2RC0xMWNmLTk2QjgtNDQ0NTUzNTQwMDAwXCIsYXBwbGV0OiEwfSxoYXNEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiBlPWUubm9kZVR5cGU/Yi5jYWNoZVtlW2IuZXhwYW5kb11dOmVbYi5leHBhbmRvXSwhIWUmJiEkKGUpfSxkYXRhOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gUChlLHQsbil9LHJlbW92ZURhdGE6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gUihlLHQpfSxfZGF0YTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFAoZSx0LG4sITApfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe3JldHVybiBSKGUsdCwhMCl9LGFjY2VwdERhdGE6ZnVuY3Rpb24oZSl7aWYoZS5ub2RlVHlwZSYmMSE9PWUubm9kZVR5cGUmJjkhPT1lLm5vZGVUeXBlKXJldHVybiExO3ZhciB0PWUubm9kZU5hbWUmJmIubm9EYXRhW2Uubm9kZU5hbWUudG9Mb3dlckNhc2UoKV07cmV0dXJuIXR8fHQhPT0hMCYmZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc2lkXCIpPT09dH19KSxiLmZuLmV4dGVuZCh7ZGF0YTpmdW5jdGlvbihlLG4pe3ZhciByLGksbz10aGlzWzBdLGE9MCxzPW51bGw7aWYoZT09PXQpe2lmKHRoaXMubGVuZ3RoJiYocz1iLmRhdGEobyksMT09PW8ubm9kZVR5cGUmJiFiLl9kYXRhKG8sXCJwYXJzZWRBdHRyc1wiKSkpe2ZvcihyPW8uYXR0cmlidXRlcztyLmxlbmd0aD5hO2ErKylpPXJbYV0ubmFtZSxpLmluZGV4T2YoXCJkYXRhLVwiKXx8KGk9Yi5jYW1lbENhc2UoaS5zbGljZSg1KSksVyhvLGksc1tpXSkpO2IuX2RhdGEobyxcInBhcnNlZEF0dHJzXCIsITApfXJldHVybiBzfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlP3RoaXMuZWFjaChmdW5jdGlvbigpe2IuZGF0YSh0aGlzLGUpfSk6Yi5hY2Nlc3ModGhpcyxmdW5jdGlvbihuKXtyZXR1cm4gbj09PXQ/bz9XKG8sZSxiLmRhdGEobyxlKSk6bnVsbDoodGhpcy5lYWNoKGZ1bmN0aW9uKCl7Yi5kYXRhKHRoaXMsZSxuKX0pLHQpfSxudWxsLG4sYXJndW1lbnRzLmxlbmd0aD4xLG51bGwsITApfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtiLnJlbW92ZURhdGEodGhpcyxlKX0pfX0pO2Z1bmN0aW9uIFcoZSxuLHIpe2lmKHI9PT10JiYxPT09ZS5ub2RlVHlwZSl7dmFyIGk9XCJkYXRhLVwiK24ucmVwbGFjZShCLFwiLSQxXCIpLnRvTG93ZXJDYXNlKCk7aWYocj1lLmdldEF0dHJpYnV0ZShpKSxcInN0cmluZ1wiPT10eXBlb2Ygcil7dHJ5e3I9XCJ0cnVlXCI9PT1yPyEwOlwiZmFsc2VcIj09PXI/ITE6XCJudWxsXCI9PT1yP251bGw6K3IrXCJcIj09PXI/K3I6Ty50ZXN0KHIpP2IucGFyc2VKU09OKHIpOnJ9Y2F0Y2gobyl7fWIuZGF0YShlLG4scil9ZWxzZSByPXR9cmV0dXJuIHJ9ZnVuY3Rpb24gJChlKXt2YXIgdDtmb3IodCBpbiBlKWlmKChcImRhdGFcIiE9PXR8fCFiLmlzRW1wdHlPYmplY3QoZVt0XSkpJiZcInRvSlNPTlwiIT09dClyZXR1cm4hMTtyZXR1cm4hMH1iLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oZSxuLHIpe3ZhciBpO3JldHVybiBlPyhuPShufHxcImZ4XCIpK1wicXVldWVcIixpPWIuX2RhdGEoZSxuKSxyJiYoIWl8fGIuaXNBcnJheShyKT9pPWIuX2RhdGEoZSxuLGIubWFrZUFycmF5KHIpKTppLnB1c2gocikpLGl8fFtdKTp0fSxkZXF1ZXVlOmZ1bmN0aW9uKGUsdCl7dD10fHxcImZ4XCI7dmFyIG49Yi5xdWV1ZShlLHQpLHI9bi5sZW5ndGgsaT1uLnNoaWZ0KCksbz1iLl9xdWV1ZUhvb2tzKGUsdCksYT1mdW5jdGlvbigpe2IuZGVxdWV1ZShlLHQpfTtcImlucHJvZ3Jlc3NcIj09PWkmJihpPW4uc2hpZnQoKSxyLS0pLG8uY3VyPWksaSYmKFwiZnhcIj09PXQmJm4udW5zaGlmdChcImlucHJvZ3Jlc3NcIiksZGVsZXRlIG8uc3RvcCxpLmNhbGwoZSxhLG8pKSwhciYmbyYmby5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGUsdCl7dmFyIG49dCtcInF1ZXVlSG9va3NcIjtyZXR1cm4gYi5fZGF0YShlLG4pfHxiLl9kYXRhKGUsbix7ZW1wdHk6Yi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKS5hZGQoZnVuY3Rpb24oKXtiLl9yZW1vdmVEYXRhKGUsdCtcInF1ZXVlXCIpLGIuX3JlbW92ZURhdGEoZSxuKX0pfSl9fSksYi5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGUsbil7dmFyIHI9MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgZSYmKG49ZSxlPVwiZnhcIixyLS0pLHI+YXJndW1lbnRzLmxlbmd0aD9iLnF1ZXVlKHRoaXNbMF0sZSk6bj09PXQ/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdD1iLnF1ZXVlKHRoaXMsZSxuKTtiLl9xdWV1ZUhvb2tzKHRoaXMsZSksXCJmeFwiPT09ZSYmXCJpbnByb2dyZXNzXCIhPT10WzBdJiZiLmRlcXVldWUodGhpcyxlKX0pfSxkZXF1ZXVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtiLmRlcXVldWUodGhpcyxlKX0pfSxkZWxheTpmdW5jdGlvbihlLHQpe3JldHVybiBlPWIuZng/Yi5meC5zcGVlZHNbZV18fGU6ZSx0PXR8fFwiZnhcIix0aGlzLnF1ZXVlKHQsZnVuY3Rpb24odCxuKXt2YXIgcj1zZXRUaW1lb3V0KHQsZSk7bi5zdG9wPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHIpfX0pfSxjbGVhclF1ZXVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnF1ZXVlKGV8fFwiZnhcIixbXSl9LHByb21pc2U6ZnVuY3Rpb24oZSxuKXt2YXIgcixpPTEsbz1iLkRlZmVycmVkKCksYT10aGlzLHM9dGhpcy5sZW5ndGgsdT1mdW5jdGlvbigpey0taXx8by5yZXNvbHZlV2l0aChhLFthXSl9O1wic3RyaW5nXCIhPXR5cGVvZiBlJiYobj1lLGU9dCksZT1lfHxcImZ4XCI7d2hpbGUocy0tKXI9Yi5fZGF0YShhW3NdLGUrXCJxdWV1ZUhvb2tzXCIpLHImJnIuZW1wdHkmJihpKyssci5lbXB0eS5hZGQodSkpO3JldHVybiB1KCksby5wcm9taXNlKG4pfX0pO3ZhciBJLHosWD0vW1xcdFxcclxcbl0vZyxVPS9cXHIvZyxWPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbnxvYmplY3QpJC9pLFk9L14oPzphfGFyZWEpJC9pLEo9L14oPzpjaGVja2VkfHNlbGVjdGVkfGF1dG9mb2N1c3xhdXRvcGxheXxhc3luY3xjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZCkkL2ksRz0vXig/OmNoZWNrZWR8c2VsZWN0ZWQpJC9pLFE9Yi5zdXBwb3J0LmdldFNldEF0dHJpYnV0ZSxLPWIuc3VwcG9ydC5pbnB1dDtiLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihlLHQpe3JldHVybiBiLmFjY2Vzcyh0aGlzLGIuYXR0cixlLHQsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Yi5yZW1vdmVBdHRyKHRoaXMsZSl9KX0scHJvcDpmdW5jdGlvbihlLHQpe3JldHVybiBiLmFjY2Vzcyh0aGlzLGIucHJvcCxlLHQsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihlKXtyZXR1cm4gZT1iLnByb3BGaXhbZV18fGUsdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dHJ5e3RoaXNbZV09dCxkZWxldGUgdGhpc1tlXX1jYXRjaChuKXt9fSl9LGFkZENsYXNzOmZ1bmN0aW9uKGUpe3ZhciB0LG4scixpLG8sYT0wLHM9dGhpcy5sZW5ndGgsdT1cInN0cmluZ1wiPT10eXBlb2YgZSYmZTtpZihiLmlzRnVuY3Rpb24oZSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbih0KXtiKHRoaXMpLmFkZENsYXNzKGUuY2FsbCh0aGlzLHQsdGhpcy5jbGFzc05hbWUpKX0pO2lmKHUpZm9yKHQ9KGV8fFwiXCIpLm1hdGNoKHcpfHxbXTtzPmE7YSsrKWlmKG49dGhpc1thXSxyPTE9PT1uLm5vZGVUeXBlJiYobi5jbGFzc05hbWU/KFwiIFwiK24uY2xhc3NOYW1lK1wiIFwiKS5yZXBsYWNlKFgsXCIgXCIpOlwiIFwiKSl7bz0wO3doaWxlKGk9dFtvKytdKTA+ci5pbmRleE9mKFwiIFwiK2krXCIgXCIpJiYocis9aStcIiBcIik7bi5jbGFzc05hbWU9Yi50cmltKHIpfXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbihlKXt2YXIgdCxuLHIsaSxvLGE9MCxzPXRoaXMubGVuZ3RoLHU9MD09PWFyZ3VtZW50cy5sZW5ndGh8fFwic3RyaW5nXCI9PXR5cGVvZiBlJiZlO2lmKGIuaXNGdW5jdGlvbihlKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKHQpe2IodGhpcykucmVtb3ZlQ2xhc3MoZS5jYWxsKHRoaXMsdCx0aGlzLmNsYXNzTmFtZSkpfSk7aWYodSlmb3IodD0oZXx8XCJcIikubWF0Y2godyl8fFtdO3M+YTthKyspaWYobj10aGlzW2FdLHI9MT09PW4ubm9kZVR5cGUmJihuLmNsYXNzTmFtZT8oXCIgXCIrbi5jbGFzc05hbWUrXCIgXCIpLnJlcGxhY2UoWCxcIiBcIik6XCJcIikpe289MDt3aGlsZShpPXRbbysrXSl3aGlsZShyLmluZGV4T2YoXCIgXCIraStcIiBcIik+PTApcj1yLnJlcGxhY2UoXCIgXCIraStcIiBcIixcIiBcIik7bi5jbGFzc05hbWU9ZT9iLnRyaW0ocik6XCJcIn1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oZSx0KXt2YXIgbj10eXBlb2YgZSxyPVwiYm9vbGVhblwiPT10eXBlb2YgdDtyZXR1cm4gYi5pc0Z1bmN0aW9uKGUpP3RoaXMuZWFjaChmdW5jdGlvbihuKXtiKHRoaXMpLnRvZ2dsZUNsYXNzKGUuY2FsbCh0aGlzLG4sdGhpcy5jbGFzc05hbWUsdCksdCl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXtpZihcInN0cmluZ1wiPT09bil7dmFyIG8sYT0wLHM9Yih0aGlzKSx1PXQsbD1lLm1hdGNoKHcpfHxbXTt3aGlsZShvPWxbYSsrXSl1PXI/dTohcy5oYXNDbGFzcyhvKSxzW3U/XCJhZGRDbGFzc1wiOlwicmVtb3ZlQ2xhc3NcIl0obyl9ZWxzZShuPT09aXx8XCJib29sZWFuXCI9PT1uKSYmKHRoaXMuY2xhc3NOYW1lJiZiLl9kYXRhKHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsdGhpcy5jbGFzc05hbWUpLHRoaXMuY2xhc3NOYW1lPXRoaXMuY2xhc3NOYW1lfHxlPT09ITE/XCJcIjpiLl9kYXRhKHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKX0pfSxoYXNDbGFzczpmdW5jdGlvbihlKXt2YXIgdD1cIiBcIitlK1wiIFwiLG49MCxyPXRoaXMubGVuZ3RoO2Zvcig7cj5uO24rKylpZigxPT09dGhpc1tuXS5ub2RlVHlwZSYmKFwiIFwiK3RoaXNbbl0uY2xhc3NOYW1lK1wiIFwiKS5yZXBsYWNlKFgsXCIgXCIpLmluZGV4T2YodCk+PTApcmV0dXJuITA7cmV0dXJuITF9LHZhbDpmdW5jdGlvbihlKXt2YXIgbixyLGksbz10aGlzWzBdO3tpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiBpPWIuaXNGdW5jdGlvbihlKSx0aGlzLmVhY2goZnVuY3Rpb24obil7dmFyIG8sYT1iKHRoaXMpOzE9PT10aGlzLm5vZGVUeXBlJiYobz1pP2UuY2FsbCh0aGlzLG4sYS52YWwoKSk6ZSxudWxsPT1vP289XCJcIjpcIm51bWJlclwiPT10eXBlb2Ygbz9vKz1cIlwiOmIuaXNBcnJheShvKSYmKG89Yi5tYXAobyxmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOmUrXCJcIn0pKSxyPWIudmFsSG9va3NbdGhpcy50eXBlXXx8Yi52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLHImJlwic2V0XCJpbiByJiZyLnNldCh0aGlzLG8sXCJ2YWx1ZVwiKSE9PXR8fCh0aGlzLnZhbHVlPW8pKX0pO2lmKG8pcmV0dXJuIHI9Yi52YWxIb29rc1tvLnR5cGVdfHxiLnZhbEhvb2tzW28ubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sciYmXCJnZXRcImluIHImJihuPXIuZ2V0KG8sXCJ2YWx1ZVwiKSkhPT10P246KG49by52YWx1ZSxcInN0cmluZ1wiPT10eXBlb2Ygbj9uLnJlcGxhY2UoVSxcIlwiKTpudWxsPT1uP1wiXCI6bil9fX0pLGIuZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5hdHRyaWJ1dGVzLnZhbHVlO3JldHVybiF0fHx0LnNwZWNpZmllZD9lLnZhbHVlOmUudGV4dH19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0LG4scj1lLm9wdGlvbnMsaT1lLnNlbGVjdGVkSW5kZXgsbz1cInNlbGVjdC1vbmVcIj09PWUudHlwZXx8MD5pLGE9bz9udWxsOltdLHM9bz9pKzE6ci5sZW5ndGgsdT0wPmk/czpvP2k6MDtmb3IoO3M+dTt1KyspaWYobj1yW3VdLCEoIW4uc2VsZWN0ZWQmJnUhPT1pfHwoYi5zdXBwb3J0Lm9wdERpc2FibGVkP24uZGlzYWJsZWQ6bnVsbCE9PW4uZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikpfHxuLnBhcmVudE5vZGUuZGlzYWJsZWQmJmIubm9kZU5hbWUobi5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZih0PWIobikudmFsKCksbylyZXR1cm4gdDthLnB1c2godCl9cmV0dXJuIGF9LHNldDpmdW5jdGlvbihlLHQpe3ZhciBuPWIubWFrZUFycmF5KHQpO3JldHVybiBiKGUpLmZpbmQoXCJvcHRpb25cIikuZWFjaChmdW5jdGlvbigpe3RoaXMuc2VsZWN0ZWQ9Yi5pbkFycmF5KGIodGhpcykudmFsKCksbik+PTB9KSxuLmxlbmd0aHx8KGUuc2VsZWN0ZWRJbmRleD0tMSksbn19fSxhdHRyOmZ1bmN0aW9uKGUsbixyKXt2YXIgbyxhLHMsdT1lLm5vZGVUeXBlO2lmKGUmJjMhPT11JiY4IT09dSYmMiE9PXUpcmV0dXJuIHR5cGVvZiBlLmdldEF0dHJpYnV0ZT09PWk/Yi5wcm9wKGUsbixyKTooYT0xIT09dXx8IWIuaXNYTUxEb2MoZSksYSYmKG49bi50b0xvd2VyQ2FzZSgpLG89Yi5hdHRySG9va3Nbbl18fChKLnRlc3Qobik/ejpJKSkscj09PXQ/byYmYSYmXCJnZXRcImluIG8mJm51bGwhPT0ocz1vLmdldChlLG4pKT9zOih0eXBlb2YgZS5nZXRBdHRyaWJ1dGUhPT1pJiYocz1lLmdldEF0dHJpYnV0ZShuKSksbnVsbD09cz90OnMpOm51bGwhPT1yP28mJmEmJlwic2V0XCJpbiBvJiYocz1vLnNldChlLHIsbikpIT09dD9zOihlLnNldEF0dHJpYnV0ZShuLHIrXCJcIikscik6KGIucmVtb3ZlQXR0cihlLG4pLHQpKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlLHQpe3ZhciBuLHIsaT0wLG89dCYmdC5tYXRjaCh3KTtpZihvJiYxPT09ZS5ub2RlVHlwZSl3aGlsZShuPW9baSsrXSlyPWIucHJvcEZpeFtuXXx8bixKLnRlc3Qobik/IVEmJkcudGVzdChuKT9lW2IuY2FtZWxDYXNlKFwiZGVmYXVsdC1cIituKV09ZVtyXT0hMTplW3JdPSExOmIuYXR0cihlLG4sXCJcIiksZS5yZW1vdmVBdHRyaWJ1dGUoUT9uOnIpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihlLHQpe2lmKCFiLnN1cHBvcnQucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09dCYmYi5ub2RlTmFtZShlLFwiaW5wdXRcIikpe3ZhciBuPWUudmFsdWU7cmV0dXJuIGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLHQpLG4mJihlLnZhbHVlPW4pLHR9fX19LHByb3BGaXg6e3RhYmluZGV4OlwidGFiSW5kZXhcIixyZWFkb25seTpcInJlYWRPbmx5XCIsXCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIixtYXhsZW5ndGg6XCJtYXhMZW5ndGhcIixjZWxsc3BhY2luZzpcImNlbGxTcGFjaW5nXCIsY2VsbHBhZGRpbmc6XCJjZWxsUGFkZGluZ1wiLHJvd3NwYW46XCJyb3dTcGFuXCIsY29sc3BhbjpcImNvbFNwYW5cIix1c2VtYXA6XCJ1c2VNYXBcIixmcmFtZWJvcmRlcjpcImZyYW1lQm9yZGVyXCIsY29udGVudGVkaXRhYmxlOlwiY29udGVudEVkaXRhYmxlXCJ9LHByb3A6ZnVuY3Rpb24oZSxuLHIpe3ZhciBpLG8sYSxzPWUubm9kZVR5cGU7aWYoZSYmMyE9PXMmJjghPT1zJiYyIT09cylyZXR1cm4gYT0xIT09c3x8IWIuaXNYTUxEb2MoZSksYSYmKG49Yi5wcm9wRml4W25dfHxuLG89Yi5wcm9wSG9va3Nbbl0pLHIhPT10P28mJlwic2V0XCJpbiBvJiYoaT1vLnNldChlLHIsbikpIT09dD9pOmVbbl09cjpvJiZcImdldFwiaW4gbyYmbnVsbCE9PShpPW8uZ2V0KGUsbikpP2k6ZVtuXX0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciBuPWUuZ2V0QXR0cmlidXRlTm9kZShcInRhYmluZGV4XCIpO3JldHVybiBuJiZuLnNwZWNpZmllZD9wYXJzZUludChuLnZhbHVlLDEwKTpWLnRlc3QoZS5ub2RlTmFtZSl8fFkudGVzdChlLm5vZGVOYW1lKSYmZS5ocmVmPzA6dH19fX0pLHo9e2dldDpmdW5jdGlvbihlLG4pe3ZhciByPWIucHJvcChlLG4pLGk9XCJib29sZWFuXCI9PXR5cGVvZiByJiZlLmdldEF0dHJpYnV0ZShuKSxvPVwiYm9vbGVhblwiPT10eXBlb2Ygcj9LJiZRP251bGwhPWk6Ry50ZXN0KG4pP2VbYi5jYW1lbENhc2UoXCJkZWZhdWx0LVwiK24pXTohIWk6ZS5nZXRBdHRyaWJ1dGVOb2RlKG4pO3JldHVybiBvJiZvLnZhbHVlIT09ITE/bi50b0xvd2VyQ2FzZSgpOnR9LHNldDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHQ9PT0hMT9iLnJlbW92ZUF0dHIoZSxuKTpLJiZRfHwhRy50ZXN0KG4pP2Uuc2V0QXR0cmlidXRlKCFRJiZiLnByb3BGaXhbbl18fG4sbik6ZVtiLmNhbWVsQ2FzZShcImRlZmF1bHQtXCIrbildPWVbbl09ITAsbn19LEsmJlF8fChiLmF0dHJIb29rcy52YWx1ZT17Z2V0OmZ1bmN0aW9uKGUsbil7dmFyIHI9ZS5nZXRBdHRyaWJ1dGVOb2RlKG4pO3JldHVybiBiLm5vZGVOYW1lKGUsXCJpbnB1dFwiKT9lLmRlZmF1bHRWYWx1ZTpyJiZyLnNwZWNpZmllZD9yLnZhbHVlOnR9LHNldDpmdW5jdGlvbihlLG4scil7cmV0dXJuIGIubm9kZU5hbWUoZSxcImlucHV0XCIpPyhlLmRlZmF1bHRWYWx1ZT1uLHQpOkkmJkkuc2V0KGUsbixyKX19KSxRfHwoST1iLnZhbEhvb2tzLmJ1dHRvbj17Z2V0OmZ1bmN0aW9uKGUsbil7dmFyIHI9ZS5nZXRBdHRyaWJ1dGVOb2RlKG4pO3JldHVybiByJiYoXCJpZFwiPT09bnx8XCJuYW1lXCI9PT1ufHxcImNvb3Jkc1wiPT09bj9cIlwiIT09ci52YWx1ZTpyLnNwZWNpZmllZCk/ci52YWx1ZTp0fSxzZXQ6ZnVuY3Rpb24oZSxuLHIpe3ZhciBpPWUuZ2V0QXR0cmlidXRlTm9kZShyKTtyZXR1cm4gaXx8ZS5zZXRBdHRyaWJ1dGVOb2RlKGk9ZS5vd25lckRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShyKSksaS52YWx1ZT1uKz1cIlwiLFwidmFsdWVcIj09PXJ8fG49PT1lLmdldEF0dHJpYnV0ZShyKT9uOnR9fSxiLmF0dHJIb29rcy5jb250ZW50ZWRpdGFibGU9e2dldDpJLmdldCxzZXQ6ZnVuY3Rpb24oZSx0LG4pe0kuc2V0KGUsXCJcIj09PXQ/ITE6dCxuKX19LGIuZWFjaChbXCJ3aWR0aFwiLFwiaGVpZ2h0XCJdLGZ1bmN0aW9uKGUsbil7Yi5hdHRySG9va3Nbbl09Yi5leHRlbmQoYi5hdHRySG9va3Nbbl0se3NldDpmdW5jdGlvbihlLHIpe3JldHVyblwiXCI9PT1yPyhlLnNldEF0dHJpYnV0ZShuLFwiYXV0b1wiKSxyKTp0fX0pfSkpLGIuc3VwcG9ydC5ocmVmTm9ybWFsaXplZHx8KGIuZWFjaChbXCJocmVmXCIsXCJzcmNcIixcIndpZHRoXCIsXCJoZWlnaHRcIl0sZnVuY3Rpb24oZSxuKXtiLmF0dHJIb29rc1tuXT1iLmV4dGVuZChiLmF0dHJIb29rc1tuXSx7Z2V0OmZ1bmN0aW9uKGUpe3ZhciByPWUuZ2V0QXR0cmlidXRlKG4sMik7cmV0dXJuIG51bGw9PXI/dDpyfX0pfSksYi5lYWNoKFtcImhyZWZcIixcInNyY1wiXSxmdW5jdGlvbihlLHQpe2IucHJvcEhvb2tzW3RdPXtnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlKHQsNCl9fX0pKSxiLnN1cHBvcnQuc3R5bGV8fChiLmF0dHJIb29rcy5zdHlsZT17Z2V0OmZ1bmN0aW9uKGUpe3JldHVybiBlLnN0eWxlLmNzc1RleHR8fHR9LHNldDpmdW5jdGlvbihlLHQpe3JldHVybiBlLnN0eWxlLmNzc1RleHQ9dCtcIlwifX0pLGIuc3VwcG9ydC5vcHRTZWxlY3RlZHx8KGIucHJvcEhvb2tzLnNlbGVjdGVkPWIuZXh0ZW5kKGIucHJvcEhvb2tzLnNlbGVjdGVkLHtnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3JldHVybiB0JiYodC5zZWxlY3RlZEluZGV4LHQucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgpLG51bGx9fSkpLGIuc3VwcG9ydC5lbmN0eXBlfHwoYi5wcm9wRml4LmVuY3R5cGU9XCJlbmNvZGluZ1wiKSxiLnN1cHBvcnQuY2hlY2tPbnx8Yi5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe2IudmFsSG9va3NbdGhpc109e2dldDpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09PWUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmUudmFsdWV9fX0pLGIuZWFjaChbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0sZnVuY3Rpb24oKXtiLnZhbEhvb2tzW3RoaXNdPWIuZXh0ZW5kKGIudmFsSG9va3NbdGhpc10se3NldDpmdW5jdGlvbihlLG4pe3JldHVybiBiLmlzQXJyYXkobik/ZS5jaGVja2VkPWIuaW5BcnJheShiKGUpLnZhbCgpLG4pPj0wOnR9fSl9KTt2YXIgWj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYSkkL2ksZXQ9L15rZXkvLHR0PS9eKD86bW91c2V8Y29udGV4dG1lbnUpfGNsaWNrLyxudD0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC8scnQ9L14oW14uXSopKD86XFwuKC4rKXwpJC87ZnVuY3Rpb24gaXQoKXtyZXR1cm4hMH1mdW5jdGlvbiBvdCgpe3JldHVybiExfWIuZXZlbnQ9e2dsb2JhbDp7fSxhZGQ6ZnVuY3Rpb24oZSxuLHIsbyxhKXt2YXIgcyx1LGwsYyxwLGYsZCxoLGcsbSx5LHY9Yi5fZGF0YShlKTtpZih2KXtyLmhhbmRsZXImJihjPXIscj1jLmhhbmRsZXIsYT1jLnNlbGVjdG9yKSxyLmd1aWR8fChyLmd1aWQ9Yi5ndWlkKyspLCh1PXYuZXZlbnRzKXx8KHU9di5ldmVudHM9e30pLChmPXYuaGFuZGxlKXx8KGY9di5oYW5kbGU9ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBiPT09aXx8ZSYmYi5ldmVudC50cmlnZ2VyZWQ9PT1lLnR5cGU/dDpiLmV2ZW50LmRpc3BhdGNoLmFwcGx5KGYuZWxlbSxhcmd1bWVudHMpfSxmLmVsZW09ZSksbj0obnx8XCJcIikubWF0Y2godyl8fFtcIlwiXSxsPW4ubGVuZ3RoO3doaWxlKGwtLSlzPXJ0LmV4ZWMobltsXSl8fFtdLGc9eT1zWzFdLG09KHNbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCkscD1iLmV2ZW50LnNwZWNpYWxbZ118fHt9LGc9KGE/cC5kZWxlZ2F0ZVR5cGU6cC5iaW5kVHlwZSl8fGcscD1iLmV2ZW50LnNwZWNpYWxbZ118fHt9LGQ9Yi5leHRlbmQoe3R5cGU6ZyxvcmlnVHlwZTp5LGRhdGE6byxoYW5kbGVyOnIsZ3VpZDpyLmd1aWQsc2VsZWN0b3I6YSxuZWVkc0NvbnRleHQ6YSYmYi5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGEpLG5hbWVzcGFjZTptLmpvaW4oXCIuXCIpfSxjKSwoaD11W2ddKXx8KGg9dVtnXT1bXSxoLmRlbGVnYXRlQ291bnQ9MCxwLnNldHVwJiZwLnNldHVwLmNhbGwoZSxvLG0sZikhPT0hMXx8KGUuYWRkRXZlbnRMaXN0ZW5lcj9lLmFkZEV2ZW50TGlzdGVuZXIoZyxmLCExKTplLmF0dGFjaEV2ZW50JiZlLmF0dGFjaEV2ZW50KFwib25cIitnLGYpKSkscC5hZGQmJihwLmFkZC5jYWxsKGUsZCksZC5oYW5kbGVyLmd1aWR8fChkLmhhbmRsZXIuZ3VpZD1yLmd1aWQpKSxhP2guc3BsaWNlKGguZGVsZWdhdGVDb3VudCsrLDAsZCk6aC5wdXNoKGQpLGIuZXZlbnQuZ2xvYmFsW2ddPSEwO2U9bnVsbH19LHJlbW92ZTpmdW5jdGlvbihlLHQsbixyLGkpe3ZhciBvLGEscyx1LGwsYyxwLGYsZCxoLGcsbT1iLmhhc0RhdGEoZSkmJmIuX2RhdGEoZSk7aWYobSYmKGM9bS5ldmVudHMpKXt0PSh0fHxcIlwiKS5tYXRjaCh3KXx8W1wiXCJdLGw9dC5sZW5ndGg7d2hpbGUobC0tKWlmKHM9cnQuZXhlYyh0W2xdKXx8W10sZD1nPXNbMV0saD0oc1syXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxkKXtwPWIuZXZlbnQuc3BlY2lhbFtkXXx8e30sZD0ocj9wLmRlbGVnYXRlVHlwZTpwLmJpbmRUeXBlKXx8ZCxmPWNbZF18fFtdLHM9c1syXSYmUmVnRXhwKFwiKF58XFxcXC4pXCIraC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksdT1vPWYubGVuZ3RoO3doaWxlKG8tLSlhPWZbb10sIWkmJmchPT1hLm9yaWdUeXBlfHxuJiZuLmd1aWQhPT1hLmd1aWR8fHMmJiFzLnRlc3QoYS5uYW1lc3BhY2UpfHxyJiZyIT09YS5zZWxlY3RvciYmKFwiKipcIiE9PXJ8fCFhLnNlbGVjdG9yKXx8KGYuc3BsaWNlKG8sMSksYS5zZWxlY3RvciYmZi5kZWxlZ2F0ZUNvdW50LS0scC5yZW1vdmUmJnAucmVtb3ZlLmNhbGwoZSxhKSk7dSYmIWYubGVuZ3RoJiYocC50ZWFyZG93biYmcC50ZWFyZG93bi5jYWxsKGUsaCxtLmhhbmRsZSkhPT0hMXx8Yi5yZW1vdmVFdmVudChlLGQsbS5oYW5kbGUpLGRlbGV0ZSBjW2RdKX1lbHNlIGZvcihkIGluIGMpYi5ldmVudC5yZW1vdmUoZSxkK3RbbF0sbixyLCEwKTtiLmlzRW1wdHlPYmplY3QoYykmJihkZWxldGUgbS5oYW5kbGUsYi5fcmVtb3ZlRGF0YShlLFwiZXZlbnRzXCIpKX19LHRyaWdnZXI6ZnVuY3Rpb24obixyLGksYSl7dmFyIHMsdSxsLGMscCxmLGQsaD1baXx8b10sZz15LmNhbGwobixcInR5cGVcIik/bi50eXBlOm4sbT15LmNhbGwobixcIm5hbWVzcGFjZVwiKT9uLm5hbWVzcGFjZS5zcGxpdChcIi5cIik6W107aWYobD1mPWk9aXx8bywzIT09aS5ub2RlVHlwZSYmOCE9PWkubm9kZVR5cGUmJiFudC50ZXN0KGcrYi5ldmVudC50cmlnZ2VyZWQpJiYoZy5pbmRleE9mKFwiLlwiKT49MCYmKG09Zy5zcGxpdChcIi5cIiksZz1tLnNoaWZ0KCksbS5zb3J0KCkpLHU9MD5nLmluZGV4T2YoXCI6XCIpJiZcIm9uXCIrZyxuPW5bYi5leHBhbmRvXT9uOm5ldyBiLkV2ZW50KGcsXCJvYmplY3RcIj09dHlwZW9mIG4mJm4pLG4uaXNUcmlnZ2VyPSEwLG4ubmFtZXNwYWNlPW0uam9pbihcIi5cIiksbi5uYW1lc3BhY2VfcmU9bi5uYW1lc3BhY2U/UmVnRXhwKFwiKF58XFxcXC4pXCIrbS5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIik6bnVsbCxuLnJlc3VsdD10LG4udGFyZ2V0fHwobi50YXJnZXQ9aSkscj1udWxsPT1yP1tuXTpiLm1ha2VBcnJheShyLFtuXSkscD1iLmV2ZW50LnNwZWNpYWxbZ118fHt9LGF8fCFwLnRyaWdnZXJ8fHAudHJpZ2dlci5hcHBseShpLHIpIT09ITEpKXtpZighYSYmIXAubm9CdWJibGUmJiFiLmlzV2luZG93KGkpKXtmb3IoYz1wLmRlbGVnYXRlVHlwZXx8ZyxudC50ZXN0KGMrZyl8fChsPWwucGFyZW50Tm9kZSk7bDtsPWwucGFyZW50Tm9kZSloLnB1c2gobCksZj1sO2Y9PT0oaS5vd25lckRvY3VtZW50fHxvKSYmaC5wdXNoKGYuZGVmYXVsdFZpZXd8fGYucGFyZW50V2luZG93fHxlKX1kPTA7d2hpbGUoKGw9aFtkKytdKSYmIW4uaXNQcm9wYWdhdGlvblN0b3BwZWQoKSluLnR5cGU9ZD4xP2M6cC5iaW5kVHlwZXx8ZyxzPShiLl9kYXRhKGwsXCJldmVudHNcIil8fHt9KVtuLnR5cGVdJiZiLl9kYXRhKGwsXCJoYW5kbGVcIikscyYmcy5hcHBseShsLHIpLHM9dSYmbFt1XSxzJiZiLmFjY2VwdERhdGEobCkmJnMuYXBwbHkmJnMuYXBwbHkobCxyKT09PSExJiZuLnByZXZlbnREZWZhdWx0KCk7aWYobi50eXBlPWcsIShhfHxuLmlzRGVmYXVsdFByZXZlbnRlZCgpfHxwLl9kZWZhdWx0JiZwLl9kZWZhdWx0LmFwcGx5KGkub3duZXJEb2N1bWVudCxyKSE9PSExfHxcImNsaWNrXCI9PT1nJiZiLm5vZGVOYW1lKGksXCJhXCIpfHwhYi5hY2NlcHREYXRhKGkpfHwhdXx8IWlbZ118fGIuaXNXaW5kb3coaSkpKXtmPWlbdV0sZiYmKGlbdV09bnVsbCksYi5ldmVudC50cmlnZ2VyZWQ9Zzt0cnl7aVtnXSgpfWNhdGNoKHYpe31iLmV2ZW50LnRyaWdnZXJlZD10LGYmJihpW3VdPWYpfXJldHVybiBuLnJlc3VsdH19LGRpc3BhdGNoOmZ1bmN0aW9uKGUpe2U9Yi5ldmVudC5maXgoZSk7dmFyIG4scixpLG8sYSxzPVtdLHU9aC5jYWxsKGFyZ3VtZW50cyksbD0oYi5fZGF0YSh0aGlzLFwiZXZlbnRzXCIpfHx7fSlbZS50eXBlXXx8W10sYz1iLmV2ZW50LnNwZWNpYWxbZS50eXBlXXx8e307aWYodVswXT1lLGUuZGVsZWdhdGVUYXJnZXQ9dGhpcywhYy5wcmVEaXNwYXRjaHx8Yy5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsZSkhPT0hMSl7cz1iLmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyxlLGwpLG49MDt3aGlsZSgobz1zW24rK10pJiYhZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXtlLmN1cnJlbnRUYXJnZXQ9by5lbGVtLGE9MDt3aGlsZSgoaT1vLmhhbmRsZXJzW2ErK10pJiYhZS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKSghZS5uYW1lc3BhY2VfcmV8fGUubmFtZXNwYWNlX3JlLnRlc3QoaS5uYW1lc3BhY2UpKSYmKGUuaGFuZGxlT2JqPWksZS5kYXRhPWkuZGF0YSxyPSgoYi5ldmVudC5zcGVjaWFsW2kub3JpZ1R5cGVdfHx7fSkuaGFuZGxlfHxpLmhhbmRsZXIpLmFwcGx5KG8uZWxlbSx1KSxyIT09dCYmKGUucmVzdWx0PXIpPT09ITEmJihlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBjLnBvc3REaXNwYXRjaCYmYy5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLGUpLGUucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oZSxuKXt2YXIgcixpLG8sYSxzPVtdLHU9bi5kZWxlZ2F0ZUNvdW50LGw9ZS50YXJnZXQ7aWYodSYmbC5ub2RlVHlwZSYmKCFlLmJ1dHRvbnx8XCJjbGlja1wiIT09ZS50eXBlKSlmb3IoO2whPXRoaXM7bD1sLnBhcmVudE5vZGV8fHRoaXMpaWYoMT09PWwubm9kZVR5cGUmJihsLmRpc2FibGVkIT09ITB8fFwiY2xpY2tcIiE9PWUudHlwZSkpe2ZvcihvPVtdLGE9MDt1PmE7YSsrKWk9blthXSxyPWkuc2VsZWN0b3IrXCIgXCIsb1tyXT09PXQmJihvW3JdPWkubmVlZHNDb250ZXh0P2Iocix0aGlzKS5pbmRleChsKT49MDpiLmZpbmQocix0aGlzLG51bGwsW2xdKS5sZW5ndGgpLG9bcl0mJm8ucHVzaChpKTtvLmxlbmd0aCYmcy5wdXNoKHtlbGVtOmwsaGFuZGxlcnM6b30pfXJldHVybiBuLmxlbmd0aD51JiZzLnB1c2goe2VsZW06dGhpcyxoYW5kbGVyczpuLnNsaWNlKHUpfSksc30sZml4OmZ1bmN0aW9uKGUpe2lmKGVbYi5leHBhbmRvXSlyZXR1cm4gZTt2YXIgdCxuLHIsaT1lLnR5cGUsYT1lLHM9dGhpcy5maXhIb29rc1tpXTtzfHwodGhpcy5maXhIb29rc1tpXT1zPXR0LnRlc3QoaSk/dGhpcy5tb3VzZUhvb2tzOmV0LnRlc3QoaSk/dGhpcy5rZXlIb29rczp7fSkscj1zLnByb3BzP3RoaXMucHJvcHMuY29uY2F0KHMucHJvcHMpOnRoaXMucHJvcHMsZT1uZXcgYi5FdmVudChhKSx0PXIubGVuZ3RoO3doaWxlKHQtLSluPXJbdF0sZVtuXT1hW25dO3JldHVybiBlLnRhcmdldHx8KGUudGFyZ2V0PWEuc3JjRWxlbWVudHx8byksMz09PWUudGFyZ2V0Lm5vZGVUeXBlJiYoZS50YXJnZXQ9ZS50YXJnZXQucGFyZW50Tm9kZSksZS5tZXRhS2V5PSEhZS5tZXRhS2V5LHMuZmlsdGVyP3MuZmlsdGVyKGUsYSk6ZX0scHJvcHM6XCJhbHRLZXkgYnViYmxlcyBjYW5jZWxhYmxlIGN0cmxLZXkgY3VycmVudFRhcmdldCBldmVudFBoYXNlIG1ldGFLZXkgcmVsYXRlZFRhcmdldCBzaGlmdEtleSB0YXJnZXQgdGltZVN0YW1wIHZpZXcgd2hpY2hcIi5zcGxpdChcIiBcIiksZml4SG9va3M6e30sa2V5SG9va3M6e3Byb3BzOlwiY2hhciBjaGFyQ29kZSBrZXkga2V5Q29kZVwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbnVsbD09ZS53aGljaCYmKGUud2hpY2g9bnVsbCE9dC5jaGFyQ29kZT90LmNoYXJDb2RlOnQua2V5Q29kZSksZX19LG1vdXNlSG9va3M6e3Byb3BzOlwiYnV0dG9uIGJ1dHRvbnMgY2xpZW50WCBjbGllbnRZIGZyb21FbGVtZW50IG9mZnNldFggb2Zmc2V0WSBwYWdlWCBwYWdlWSBzY3JlZW5YIHNjcmVlblkgdG9FbGVtZW50XCIuc3BsaXQoXCIgXCIpLGZpbHRlcjpmdW5jdGlvbihlLG4pe3ZhciByLGksYSxzPW4uYnV0dG9uLHU9bi5mcm9tRWxlbWVudDtyZXR1cm4gbnVsbD09ZS5wYWdlWCYmbnVsbCE9bi5jbGllbnRYJiYoaT1lLnRhcmdldC5vd25lckRvY3VtZW50fHxvLGE9aS5kb2N1bWVudEVsZW1lbnQscj1pLmJvZHksZS5wYWdlWD1uLmNsaWVudFgrKGEmJmEuc2Nyb2xsTGVmdHx8ciYmci5zY3JvbGxMZWZ0fHwwKS0oYSYmYS5jbGllbnRMZWZ0fHxyJiZyLmNsaWVudExlZnR8fDApLGUucGFnZVk9bi5jbGllbnRZKyhhJiZhLnNjcm9sbFRvcHx8ciYmci5zY3JvbGxUb3B8fDApLShhJiZhLmNsaWVudFRvcHx8ciYmci5jbGllbnRUb3B8fDApKSwhZS5yZWxhdGVkVGFyZ2V0JiZ1JiYoZS5yZWxhdGVkVGFyZ2V0PXU9PT1lLnRhcmdldD9uLnRvRWxlbWVudDp1KSxlLndoaWNofHxzPT09dHx8KGUud2hpY2g9MSZzPzE6MiZzPzM6NCZzPzI6MCksZX19LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxjbGljazp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiBiLm5vZGVOYW1lKHRoaXMsXCJpbnB1dFwiKSYmXCJjaGVja2JveFwiPT09dGhpcy50eXBlJiZ0aGlzLmNsaWNrPyh0aGlzLmNsaWNrKCksITEpOnR9fSxmb2N1czp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXMhPT1vLmFjdGl2ZUVsZW1lbnQmJnRoaXMuZm9jdXMpdHJ5e3JldHVybiB0aGlzLmZvY3VzKCksITF9Y2F0Y2goZSl7fX0sZGVsZWdhdGVUeXBlOlwiZm9jdXNpblwifSxibHVyOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXM9PT1vLmFjdGl2ZUVsZW1lbnQmJnRoaXMuYmx1cj8odGhpcy5ibHVyKCksITEpOnR9LGRlbGVnYXRlVHlwZTpcImZvY3Vzb3V0XCJ9LGJlZm9yZXVubG9hZDp7cG9zdERpc3BhdGNoOmZ1bmN0aW9uKGUpe2UucmVzdWx0IT09dCYmKGUub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1lLnJlc3VsdCl9fX0sc2ltdWxhdGU6ZnVuY3Rpb24oZSx0LG4scil7dmFyIGk9Yi5leHRlbmQobmV3IGIuRXZlbnQsbix7dHlwZTplLGlzU2ltdWxhdGVkOiEwLG9yaWdpbmFsRXZlbnQ6e319KTtyP2IuZXZlbnQudHJpZ2dlcihpLG51bGwsdCk6Yi5ldmVudC5kaXNwYXRjaC5jYWxsKHQsaSksaS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmbi5wcmV2ZW50RGVmYXVsdCgpfX0sYi5yZW1vdmVFdmVudD1vLnJlbW92ZUV2ZW50TGlzdGVuZXI/ZnVuY3Rpb24oZSx0LG4pe2UucmVtb3ZlRXZlbnRMaXN0ZW5lciYmZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsbiwhMSl9OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1cIm9uXCIrdDtlLmRldGFjaEV2ZW50JiYodHlwZW9mIGVbcl09PT1pJiYoZVtyXT1udWxsKSxlLmRldGFjaEV2ZW50KHIsbikpfSxiLkV2ZW50PWZ1bmN0aW9uKGUsbil7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBiLkV2ZW50PyhlJiZlLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1lLHRoaXMudHlwZT1lLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9ZS5kZWZhdWx0UHJldmVudGVkfHxlLnJldHVyblZhbHVlPT09ITF8fGUuZ2V0UHJldmVudERlZmF1bHQmJmUuZ2V0UHJldmVudERlZmF1bHQoKT9pdDpvdCk6dGhpcy50eXBlPWUsbiYmYi5leHRlbmQodGhpcyxuKSx0aGlzLnRpbWVTdGFtcD1lJiZlLnRpbWVTdGFtcHx8Yi5ub3coKSx0aGlzW2IuZXhwYW5kb109ITAsdCk6bmV3IGIuRXZlbnQoZSxuKX0sYi5FdmVudC5wcm90b3R5cGU9e2lzRGVmYXVsdFByZXZlbnRlZDpvdCxpc1Byb3BhZ2F0aW9uU3RvcHBlZDpvdCxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDpvdCxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1pdCxlJiYoZS5wcmV2ZW50RGVmYXVsdD9lLnByZXZlbnREZWZhdWx0KCk6ZS5yZXR1cm5WYWx1ZT0hMSl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPWl0LGUmJihlLnN0b3BQcm9wYWdhdGlvbiYmZS5zdG9wUHJvcGFnYXRpb24oKSxlLmNhbmNlbEJ1YmJsZT0hMCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3RoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9aXQsdGhpcy5zdG9wUHJvcGFnYXRpb24oKX19LGIuZWFjaCh7bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwifSxmdW5jdGlvbihlLHQpe2IuZXZlbnQuc3BlY2lhbFtlXT17ZGVsZWdhdGVUeXBlOnQsYmluZFR5cGU6dCxoYW5kbGU6ZnVuY3Rpb24oZSl7dmFyIG4scj10aGlzLGk9ZS5yZWxhdGVkVGFyZ2V0LG89ZS5oYW5kbGVPYmo7XG5yZXR1cm4oIWl8fGkhPT1yJiYhYi5jb250YWlucyhyLGkpKSYmKGUudHlwZT1vLm9yaWdUeXBlLG49by5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxlLnR5cGU9dCksbn19fSksYi5zdXBwb3J0LnN1Ym1pdEJ1YmJsZXN8fChiLmV2ZW50LnNwZWNpYWwuc3VibWl0PXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiBiLm5vZGVOYW1lKHRoaXMsXCJmb3JtXCIpPyExOihiLmV2ZW50LmFkZCh0aGlzLFwiY2xpY2suX3N1Ym1pdCBrZXlwcmVzcy5fc3VibWl0XCIsZnVuY3Rpb24oZSl7dmFyIG49ZS50YXJnZXQscj1iLm5vZGVOYW1lKG4sXCJpbnB1dFwiKXx8Yi5ub2RlTmFtZShuLFwiYnV0dG9uXCIpP24uZm9ybTp0O3ImJiFiLl9kYXRhKHIsXCJzdWJtaXRCdWJibGVzXCIpJiYoYi5ldmVudC5hZGQocixcInN1Ym1pdC5fc3VibWl0XCIsZnVuY3Rpb24oZSl7ZS5fc3VibWl0X2J1YmJsZT0hMH0pLGIuX2RhdGEocixcInN1Ym1pdEJ1YmJsZXNcIiwhMCkpfSksdCl9LHBvc3REaXNwYXRjaDpmdW5jdGlvbihlKXtlLl9zdWJtaXRfYnViYmxlJiYoZGVsZXRlIGUuX3N1Ym1pdF9idWJibGUsdGhpcy5wYXJlbnROb2RlJiYhZS5pc1RyaWdnZXImJmIuZXZlbnQuc2ltdWxhdGUoXCJzdWJtaXRcIix0aGlzLnBhcmVudE5vZGUsZSwhMCkpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3JldHVybiBiLm5vZGVOYW1lKHRoaXMsXCJmb3JtXCIpPyExOihiLmV2ZW50LnJlbW92ZSh0aGlzLFwiLl9zdWJtaXRcIiksdCl9fSksYi5zdXBwb3J0LmNoYW5nZUJ1YmJsZXN8fChiLmV2ZW50LnNwZWNpYWwuY2hhbmdlPXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiBaLnRlc3QodGhpcy5ub2RlTmFtZSk/KChcImNoZWNrYm94XCI9PT10aGlzLnR5cGV8fFwicmFkaW9cIj09PXRoaXMudHlwZSkmJihiLmV2ZW50LmFkZCh0aGlzLFwicHJvcGVydHljaGFuZ2UuX2NoYW5nZVwiLGZ1bmN0aW9uKGUpe1wiY2hlY2tlZFwiPT09ZS5vcmlnaW5hbEV2ZW50LnByb3BlcnR5TmFtZSYmKHRoaXMuX2p1c3RfY2hhbmdlZD0hMCl9KSxiLmV2ZW50LmFkZCh0aGlzLFwiY2xpY2suX2NoYW5nZVwiLGZ1bmN0aW9uKGUpe3RoaXMuX2p1c3RfY2hhbmdlZCYmIWUuaXNUcmlnZ2VyJiYodGhpcy5fanVzdF9jaGFuZ2VkPSExKSxiLmV2ZW50LnNpbXVsYXRlKFwiY2hhbmdlXCIsdGhpcyxlLCEwKX0pKSwhMSk6KGIuZXZlbnQuYWRkKHRoaXMsXCJiZWZvcmVhY3RpdmF0ZS5fY2hhbmdlXCIsZnVuY3Rpb24oZSl7dmFyIHQ9ZS50YXJnZXQ7Wi50ZXN0KHQubm9kZU5hbWUpJiYhYi5fZGF0YSh0LFwiY2hhbmdlQnViYmxlc1wiKSYmKGIuZXZlbnQuYWRkKHQsXCJjaGFuZ2UuX2NoYW5nZVwiLGZ1bmN0aW9uKGUpeyF0aGlzLnBhcmVudE5vZGV8fGUuaXNTaW11bGF0ZWR8fGUuaXNUcmlnZ2VyfHxiLmV2ZW50LnNpbXVsYXRlKFwiY2hhbmdlXCIsdGhpcy5wYXJlbnROb2RlLGUsITApfSksYi5fZGF0YSh0LFwiY2hhbmdlQnViYmxlc1wiLCEwKSl9KSx0KX0saGFuZGxlOmZ1bmN0aW9uKGUpe3ZhciBuPWUudGFyZ2V0O3JldHVybiB0aGlzIT09bnx8ZS5pc1NpbXVsYXRlZHx8ZS5pc1RyaWdnZXJ8fFwicmFkaW9cIiE9PW4udHlwZSYmXCJjaGVja2JveFwiIT09bi50eXBlP2UuaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpOnR9LHRlYXJkb3duOmZ1bmN0aW9uKCl7cmV0dXJuIGIuZXZlbnQucmVtb3ZlKHRoaXMsXCIuX2NoYW5nZVwiKSwhWi50ZXN0KHRoaXMubm9kZU5hbWUpfX0pLGIuc3VwcG9ydC5mb2N1c2luQnViYmxlc3x8Yi5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oZSx0KXt2YXIgbj0wLHI9ZnVuY3Rpb24oZSl7Yi5ldmVudC5zaW11bGF0ZSh0LGUudGFyZ2V0LGIuZXZlbnQuZml4KGUpLCEwKX07Yi5ldmVudC5zcGVjaWFsW3RdPXtzZXR1cDpmdW5jdGlvbigpezA9PT1uKysmJm8uYWRkRXZlbnRMaXN0ZW5lcihlLHIsITApfSx0ZWFyZG93bjpmdW5jdGlvbigpezA9PT0tLW4mJm8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLHIsITApfX19KSxiLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oZSxuLHIsaSxvKXt2YXIgYSxzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBlKXtcInN0cmluZ1wiIT10eXBlb2YgbiYmKHI9cnx8bixuPXQpO2ZvcihhIGluIGUpdGhpcy5vbihhLG4scixlW2FdLG8pO3JldHVybiB0aGlzfWlmKG51bGw9PXImJm51bGw9PWk/KGk9bixyPW49dCk6bnVsbD09aSYmKFwic3RyaW5nXCI9PXR5cGVvZiBuPyhpPXIscj10KTooaT1yLHI9bixuPXQpKSxpPT09ITEpaT1vdDtlbHNlIGlmKCFpKXJldHVybiB0aGlzO3JldHVybiAxPT09byYmKHM9aSxpPWZ1bmN0aW9uKGUpe3JldHVybiBiKCkub2ZmKGUpLHMuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxpLmd1aWQ9cy5ndWlkfHwocy5ndWlkPWIuZ3VpZCsrKSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Yi5ldmVudC5hZGQodGhpcyxlLGkscixuKX0pfSxvbmU6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMub24oZSx0LG4sciwxKX0sb2ZmOmZ1bmN0aW9uKGUsbixyKXt2YXIgaSxvO2lmKGUmJmUucHJldmVudERlZmF1bHQmJmUuaGFuZGxlT2JqKXJldHVybiBpPWUuaGFuZGxlT2JqLGIoZS5kZWxlZ2F0ZVRhcmdldCkub2ZmKGkubmFtZXNwYWNlP2kub3JpZ1R5cGUrXCIuXCIraS5uYW1lc3BhY2U6aS5vcmlnVHlwZSxpLnNlbGVjdG9yLGkuaGFuZGxlciksdGhpcztpZihcIm9iamVjdFwiPT10eXBlb2YgZSl7Zm9yKG8gaW4gZSl0aGlzLm9mZihvLG4sZVtvXSk7cmV0dXJuIHRoaXN9cmV0dXJuKG49PT0hMXx8XCJmdW5jdGlvblwiPT10eXBlb2YgbikmJihyPW4sbj10KSxyPT09ITEmJihyPW90KSx0aGlzLmVhY2goZnVuY3Rpb24oKXtiLmV2ZW50LnJlbW92ZSh0aGlzLGUscixuKX0pfSxiaW5kOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdGhpcy5vbihlLG51bGwsdCxuKX0sdW5iaW5kOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMub2ZmKGUsbnVsbCx0KX0sZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMub24odCxlLG4scil9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihlLFwiKipcIik6dGhpcy5vZmYodCxlfHxcIioqXCIsbil9LHRyaWdnZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Yi5ldmVudC50cmlnZ2VyKGUsdCx0aGlzKX0pfSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihlLG4pe3ZhciByPXRoaXNbMF07cmV0dXJuIHI/Yi5ldmVudC50cmlnZ2VyKGUsbixyLCEwKTp0fX0pLGZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYSxzLHUsbCxjLHAsZixkLGgsZyxtLHksdix4PVwic2l6emxlXCIrLW5ldyBEYXRlLHc9ZS5kb2N1bWVudCxUPXt9LE49MCxDPTAsaz1pdCgpLEU9aXQoKSxTPWl0KCksQT10eXBlb2YgdCxqPTE8PDMxLEQ9W10sTD1ELnBvcCxIPUQucHVzaCxxPUQuc2xpY2UsTT1ELmluZGV4T2Z8fGZ1bmN0aW9uKGUpe3ZhciB0PTAsbj10aGlzLmxlbmd0aDtmb3IoO24+dDt0KyspaWYodGhpc1t0XT09PWUpcmV0dXJuIHQ7cmV0dXJuLTF9LF89XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLEY9XCIoPzpcXFxcXFxcXC58W1xcXFx3LV18W15cXFxceDAwLVxcXFx4YTBdKStcIixPPUYucmVwbGFjZShcIndcIixcIncjXCIpLEI9XCIoWypeJHwhfl0/PSlcIixQPVwiXFxcXFtcIitfK1wiKihcIitGK1wiKVwiK18rXCIqKD86XCIrQitfK1wiKig/OihbJ1xcXCJdKSgoPzpcXFxcXFxcXC58W15cXFxcXFxcXF0pKj8pXFxcXDN8KFwiK08rXCIpfCl8KVwiK18rXCIqXFxcXF1cIixSPVwiOihcIitGK1wiKSg/OlxcXFwoKChbJ1xcXCJdKSgoPzpcXFxcXFxcXC58W15cXFxcXFxcXF0pKj8pXFxcXDN8KCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiK1AucmVwbGFjZSgzLDgpK1wiKSopfC4qKVxcXFwpfClcIixXPVJlZ0V4cChcIl5cIitfK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitfK1wiKyRcIixcImdcIiksJD1SZWdFeHAoXCJeXCIrXytcIiosXCIrXytcIipcIiksST1SZWdFeHAoXCJeXCIrXytcIiooW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZj4rfl0pXCIrXytcIipcIiksej1SZWdFeHAoUiksWD1SZWdFeHAoXCJeXCIrTytcIiRcIiksVT17SUQ6UmVnRXhwKFwiXiMoXCIrRitcIilcIiksQ0xBU1M6UmVnRXhwKFwiXlxcXFwuKFwiK0YrXCIpXCIpLE5BTUU6UmVnRXhwKFwiXlxcXFxbbmFtZT1bJ1xcXCJdPyhcIitGK1wiKVsnXFxcIl0/XFxcXF1cIiksVEFHOlJlZ0V4cChcIl4oXCIrRi5yZXBsYWNlKFwid1wiLFwidypcIikrXCIpXCIpLEFUVFI6UmVnRXhwKFwiXlwiK1ApLFBTRVVETzpSZWdFeHAoXCJeXCIrUiksQ0hJTEQ6UmVnRXhwKFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIitfK1wiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIrXytcIiooPzooWystXXwpXCIrXytcIiooXFxcXGQrKXwpKVwiK18rXCIqXFxcXCl8KVwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6UmVnRXhwKFwiXlwiK18rXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiK18rXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiK18rXCIqXFxcXCl8KSg/PVteLV18JClcIixcImlcIil9LFY9L1tcXHgyMFxcdFxcclxcblxcZl0qWyt+XS8sWT0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBjb2RlLyxKPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLEc9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxRPS9eaFxcZCQvaSxLPS8nfFxcXFwvZyxaPS9cXD1bXFx4MjBcXHRcXHJcXG5cXGZdKihbXidcIlxcXV0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFxdL2csZXQ9L1xcXFwoW1xcZGEtZkEtRl17MSw2fVtcXHgyMFxcdFxcclxcblxcZl0/fC4pL2csdHQ9ZnVuY3Rpb24oZSx0KXt2YXIgbj1cIjB4XCIrdC02NTUzNjtyZXR1cm4gbiE9PW4/dDowPm4/U3RyaW5nLmZyb21DaGFyQ29kZShuKzY1NTM2KTpTdHJpbmcuZnJvbUNoYXJDb2RlKDU1Mjk2fG4+PjEwLDU2MzIwfDEwMjMmbil9O3RyeXtxLmNhbGwody5kb2N1bWVudEVsZW1lbnQuY2hpbGROb2RlcywwKVswXS5ub2RlVHlwZX1jYXRjaChudCl7cT1mdW5jdGlvbihlKXt2YXIgdCxuPVtdO3doaWxlKHQ9dGhpc1tlKytdKW4ucHVzaCh0KTtyZXR1cm4gbn19ZnVuY3Rpb24gcnQoZSl7cmV0dXJuIFkudGVzdChlK1wiXCIpfWZ1bmN0aW9uIGl0KCl7dmFyIGUsdD1bXTtyZXR1cm4gZT1mdW5jdGlvbihuLHIpe3JldHVybiB0LnB1c2gobis9XCIgXCIpPmkuY2FjaGVMZW5ndGgmJmRlbGV0ZSBlW3Quc2hpZnQoKV0sZVtuXT1yfX1mdW5jdGlvbiBvdChlKXtyZXR1cm4gZVt4XT0hMCxlfWZ1bmN0aW9uIGF0KGUpe3ZhciB0PXAuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0cnl7cmV0dXJuIGUodCl9Y2F0Y2gobil7cmV0dXJuITF9ZmluYWxseXt0PW51bGx9fWZ1bmN0aW9uIHN0KGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbCxmLGcsbSx2O2lmKCh0P3Qub3duZXJEb2N1bWVudHx8dDp3KSE9PXAmJmModCksdD10fHxwLG49bnx8W10sIWV8fFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiBuO2lmKDEhPT0ocz10Lm5vZGVUeXBlKSYmOSE9PXMpcmV0dXJuW107aWYoIWQmJiFyKXtpZihpPUouZXhlYyhlKSlpZihhPWlbMV0pe2lmKDk9PT1zKXtpZihvPXQuZ2V0RWxlbWVudEJ5SWQoYSksIW98fCFvLnBhcmVudE5vZGUpcmV0dXJuIG47aWYoby5pZD09PWEpcmV0dXJuIG4ucHVzaChvKSxufWVsc2UgaWYodC5vd25lckRvY3VtZW50JiYobz10Lm93bmVyRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYSkpJiZ5KHQsbykmJm8uaWQ9PT1hKXJldHVybiBuLnB1c2gobyksbn1lbHNle2lmKGlbMl0pcmV0dXJuIEguYXBwbHkobixxLmNhbGwodC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKSwwKSksbjtpZigoYT1pWzNdKSYmVC5nZXRCeUNsYXNzTmFtZSYmdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXJldHVybiBILmFwcGx5KG4scS5jYWxsKHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShhKSwwKSksbn1pZihULnFzYSYmIWgudGVzdChlKSl7aWYoZj0hMCxnPXgsbT10LHY9OT09PXMmJmUsMT09PXMmJlwib2JqZWN0XCIhPT10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpe2w9ZnQoZSksKGY9dC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/Zz1mLnJlcGxhY2UoSyxcIlxcXFwkJlwiKTp0LnNldEF0dHJpYnV0ZShcImlkXCIsZyksZz1cIltpZD0nXCIrZytcIiddIFwiLHU9bC5sZW5ndGg7d2hpbGUodS0tKWxbdV09ZytkdChsW3VdKTttPVYudGVzdChlKSYmdC5wYXJlbnROb2RlfHx0LHY9bC5qb2luKFwiLFwiKX1pZih2KXRyeXtyZXR1cm4gSC5hcHBseShuLHEuY2FsbChtLnF1ZXJ5U2VsZWN0b3JBbGwodiksMCkpLG59Y2F0Y2goYil7fWZpbmFsbHl7Znx8dC5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKX19fXJldHVybiB3dChlLnJlcGxhY2UoVyxcIiQxXCIpLHQsbixyKX1hPXN0LmlzWE1MPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJihlLm93bmVyRG9jdW1lbnR8fGUpLmRvY3VtZW50RWxlbWVudDtyZXR1cm4gdD9cIkhUTUxcIiE9PXQubm9kZU5hbWU6ITF9LGM9c3Quc2V0RG9jdW1lbnQ9ZnVuY3Rpb24oZSl7dmFyIG49ZT9lLm93bmVyRG9jdW1lbnR8fGU6dztyZXR1cm4gbiE9PXAmJjk9PT1uLm5vZGVUeXBlJiZuLmRvY3VtZW50RWxlbWVudD8ocD1uLGY9bi5kb2N1bWVudEVsZW1lbnQsZD1hKG4pLFQudGFnTmFtZU5vQ29tbWVudHM9YXQoZnVuY3Rpb24oZSl7cmV0dXJuIGUuYXBwZW5kQ2hpbGQobi5jcmVhdGVDb21tZW50KFwiXCIpKSwhZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RofSksVC5hdHRyaWJ1dGVzPWF0KGZ1bmN0aW9uKGUpe2UuaW5uZXJIVE1MPVwiPHNlbGVjdD48L3NlbGVjdD5cIjt2YXIgdD10eXBlb2YgZS5sYXN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwibXVsdGlwbGVcIik7cmV0dXJuXCJib29sZWFuXCIhPT10JiZcInN0cmluZ1wiIT09dH0pLFQuZ2V0QnlDbGFzc05hbWU9YXQoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPGRpdiBjbGFzcz0naGlkZGVuIGUnPjwvZGl2PjxkaXYgY2xhc3M9J2hpZGRlbic+PC9kaXY+XCIsZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlXCIpLmxlbmd0aD8oZS5sYXN0Q2hpbGQuY2xhc3NOYW1lPVwiZVwiLDI9PT1lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlXCIpLmxlbmd0aCk6ITF9KSxULmdldEJ5TmFtZT1hdChmdW5jdGlvbihlKXtlLmlkPXgrMCxlLmlubmVySFRNTD1cIjxhIG5hbWU9J1wiK3grXCInPjwvYT48ZGl2IG5hbWU9J1wiK3grXCInPjwvZGl2PlwiLGYuaW5zZXJ0QmVmb3JlKGUsZi5maXJzdENoaWxkKTt2YXIgdD1uLmdldEVsZW1lbnRzQnlOYW1lJiZuLmdldEVsZW1lbnRzQnlOYW1lKHgpLmxlbmd0aD09PTIrbi5nZXRFbGVtZW50c0J5TmFtZSh4KzApLmxlbmd0aDtyZXR1cm4gVC5nZXRJZE5vdE5hbWU9IW4uZ2V0RWxlbWVudEJ5SWQoeCksZi5yZW1vdmVDaGlsZChlKSx0fSksaS5hdHRySGFuZGxlPWF0KGZ1bmN0aW9uKGUpe3JldHVybiBlLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixlLmZpcnN0Q2hpbGQmJnR5cGVvZiBlLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlIT09QSYmXCIjXCI9PT1lLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKX0pP3t9OntocmVmOmZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZShcImhyZWZcIiwyKX0sdHlwZTpmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpfX0sVC5nZXRJZE5vdE5hbWU/KGkuZmluZC5JRD1mdW5jdGlvbihlLHQpe2lmKHR5cGVvZiB0LmdldEVsZW1lbnRCeUlkIT09QSYmIWQpe3ZhciBuPXQuZ2V0RWxlbWVudEJ5SWQoZSk7cmV0dXJuIG4mJm4ucGFyZW50Tm9kZT9bbl06W119fSxpLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UoZXQsdHQpO3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PXR9fSk6KGkuZmluZC5JRD1mdW5jdGlvbihlLG4pe2lmKHR5cGVvZiBuLmdldEVsZW1lbnRCeUlkIT09QSYmIWQpe3ZhciByPW4uZ2V0RWxlbWVudEJ5SWQoZSk7cmV0dXJuIHI/ci5pZD09PWV8fHR5cGVvZiByLmdldEF0dHJpYnV0ZU5vZGUhPT1BJiZyLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKS52YWx1ZT09PWU/W3JdOnQ6W119fSxpLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UoZXQsdHQpO3JldHVybiBmdW5jdGlvbihlKXt2YXIgbj10eXBlb2YgZS5nZXRBdHRyaWJ1dGVOb2RlIT09QSYmZS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7cmV0dXJuIG4mJm4udmFsdWU9PT10fX0pLGkuZmluZC5UQUc9VC50YWdOYW1lTm9Db21tZW50cz9mdW5jdGlvbihlLG4pe3JldHVybiB0eXBlb2Ygbi5nZXRFbGVtZW50c0J5VGFnTmFtZSE9PUE/bi5nZXRFbGVtZW50c0J5VGFnTmFtZShlKTp0fTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9W10saT0wLG89dC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKTtpZihcIipcIj09PWUpe3doaWxlKG49b1tpKytdKTE9PT1uLm5vZGVUeXBlJiZyLnB1c2gobik7cmV0dXJuIHJ9cmV0dXJuIG99LGkuZmluZC5OQU1FPVQuZ2V0QnlOYW1lJiZmdW5jdGlvbihlLG4pe3JldHVybiB0eXBlb2Ygbi5nZXRFbGVtZW50c0J5TmFtZSE9PUE/bi5nZXRFbGVtZW50c0J5TmFtZShuYW1lKTp0fSxpLmZpbmQuQ0xBU1M9VC5nZXRCeUNsYXNzTmFtZSYmZnVuY3Rpb24oZSxuKXtyZXR1cm4gdHlwZW9mIG4uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT09PUF8fGQ/dDpuLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZSl9LGc9W10saD1bXCI6Zm9jdXNcIl0sKFQucXNhPXJ0KG4ucXVlcnlTZWxlY3RvckFsbCkpJiYoYXQoZnVuY3Rpb24oZSl7ZS5pbm5lckhUTUw9XCI8c2VsZWN0PjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCIsZS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fGgucHVzaChcIlxcXFxbXCIrXytcIiooPzpjaGVja2VkfGRpc2FibGVkfGlzbWFwfG11bHRpcGxlfHJlYWRvbmx5fHNlbGVjdGVkfHZhbHVlKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGh8fGgucHVzaChcIjpjaGVja2VkXCIpfSksYXQoZnVuY3Rpb24oZSl7ZS5pbm5lckhUTUw9XCI8aW5wdXQgdHlwZT0naGlkZGVuJyBpPScnLz5cIixlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaV49JyddXCIpLmxlbmd0aCYmaC5wdXNoKFwiWypeJF09XCIrXytcIiooPzpcXFwiXFxcInwnJylcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RofHxoLnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIiksaC5wdXNoKFwiLC4qOlwiKX0pKSwoVC5tYXRjaGVzU2VsZWN0b3I9cnQobT1mLm1hdGNoZXNTZWxlY3Rvcnx8Zi5tb3pNYXRjaGVzU2VsZWN0b3J8fGYud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxmLm9NYXRjaGVzU2VsZWN0b3J8fGYubXNNYXRjaGVzU2VsZWN0b3IpKSYmYXQoZnVuY3Rpb24oZSl7VC5kaXNjb25uZWN0ZWRNYXRjaD1tLmNhbGwoZSxcImRpdlwiKSxtLmNhbGwoZSxcIltzIT0nJ106eFwiKSxnLnB1c2goXCIhPVwiLFIpfSksaD1SZWdFeHAoaC5qb2luKFwifFwiKSksZz1SZWdFeHAoZy5qb2luKFwifFwiKSkseT1ydChmLmNvbnRhaW5zKXx8Zi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbj9mdW5jdGlvbihlLHQpe3ZhciBuPTk9PT1lLm5vZGVUeXBlP2UuZG9jdW1lbnRFbGVtZW50OmUscj10JiZ0LnBhcmVudE5vZGU7cmV0dXJuIGU9PT1yfHwhKCFyfHwxIT09ci5ub2RlVHlwZXx8IShuLmNvbnRhaW5zP24uY29udGFpbnMocik6ZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmMTYmZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihyKSkpfTpmdW5jdGlvbihlLHQpe2lmKHQpd2hpbGUodD10LnBhcmVudE5vZGUpaWYodD09PWUpcmV0dXJuITA7cmV0dXJuITF9LHY9Zi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbj9mdW5jdGlvbihlLHQpe3ZhciByO3JldHVybiBlPT09dD8odT0hMCwwKToocj10LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHQpKT8xJnJ8fGUucGFyZW50Tm9kZSYmMTE9PT1lLnBhcmVudE5vZGUubm9kZVR5cGU/ZT09PW58fHkodyxlKT8tMTp0PT09bnx8eSh3LHQpPzE6MDo0JnI/LTE6MTplLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uPy0xOjF9OmZ1bmN0aW9uKGUsdCl7dmFyIHIsaT0wLG89ZS5wYXJlbnROb2RlLGE9dC5wYXJlbnROb2RlLHM9W2VdLGw9W3RdO2lmKGU9PT10KXJldHVybiB1PSEwLDA7aWYoIW98fCFhKXJldHVybiBlPT09bj8tMTp0PT09bj8xOm8/LTE6YT8xOjA7aWYobz09PWEpcmV0dXJuIHV0KGUsdCk7cj1lO3doaWxlKHI9ci5wYXJlbnROb2RlKXMudW5zaGlmdChyKTtyPXQ7d2hpbGUocj1yLnBhcmVudE5vZGUpbC51bnNoaWZ0KHIpO3doaWxlKHNbaV09PT1sW2ldKWkrKztyZXR1cm4gaT91dChzW2ldLGxbaV0pOnNbaV09PT13Py0xOmxbaV09PT13PzE6MH0sdT0hMSxbMCwwXS5zb3J0KHYpLFQuZGV0ZWN0RHVwbGljYXRlcz11LHApOnB9LHN0Lm1hdGNoZXM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gc3QoZSxudWxsLG51bGwsdCl9LHN0Lm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihlLHQpe2lmKChlLm93bmVyRG9jdW1lbnR8fGUpIT09cCYmYyhlKSx0PXQucmVwbGFjZShaLFwiPSckMSddXCIpLCEoIVQubWF0Y2hlc1NlbGVjdG9yfHxkfHxnJiZnLnRlc3QodCl8fGgudGVzdCh0KSkpdHJ5e3ZhciBuPW0uY2FsbChlLHQpO2lmKG58fFQuZGlzY29ubmVjdGVkTWF0Y2h8fGUuZG9jdW1lbnQmJjExIT09ZS5kb2N1bWVudC5ub2RlVHlwZSlyZXR1cm4gbn1jYXRjaChyKXt9cmV0dXJuIHN0KHQscCxudWxsLFtlXSkubGVuZ3RoPjB9LHN0LmNvbnRhaW5zPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKGUub3duZXJEb2N1bWVudHx8ZSkhPT1wJiZjKGUpLHkoZSx0KX0sc3QuYXR0cj1mdW5jdGlvbihlLHQpe3ZhciBuO3JldHVybihlLm93bmVyRG9jdW1lbnR8fGUpIT09cCYmYyhlKSxkfHwodD10LnRvTG93ZXJDYXNlKCkpLChuPWkuYXR0ckhhbmRsZVt0XSk/bihlKTpkfHxULmF0dHJpYnV0ZXM/ZS5nZXRBdHRyaWJ1dGUodCk6KChuPWUuZ2V0QXR0cmlidXRlTm9kZSh0KSl8fGUuZ2V0QXR0cmlidXRlKHQpKSYmZVt0XT09PSEwP3Q6biYmbi5zcGVjaWZpZWQ/bi52YWx1ZTpudWxsfSxzdC5lcnJvcj1mdW5jdGlvbihlKXt0aHJvdyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiK2UpfSxzdC51bmlxdWVTb3J0PWZ1bmN0aW9uKGUpe3ZhciB0LG49W10scj0xLGk9MDtpZih1PSFULmRldGVjdER1cGxpY2F0ZXMsZS5zb3J0KHYpLHUpe2Zvcig7dD1lW3JdO3IrKyl0PT09ZVtyLTFdJiYoaT1uLnB1c2gocikpO3doaWxlKGktLSllLnNwbGljZShuW2ldLDEpfXJldHVybiBlfTtmdW5jdGlvbiB1dChlLHQpe3ZhciBuPXQmJmUscj1uJiYofnQuc291cmNlSW5kZXh8fGopLSh+ZS5zb3VyY2VJbmRleHx8aik7aWYocilyZXR1cm4gcjtpZihuKXdoaWxlKG49bi5uZXh0U2libGluZylpZihuPT09dClyZXR1cm4tMTtyZXR1cm4gZT8xOi0xfWZ1bmN0aW9uIGx0KGUpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgbj10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09biYmdC50eXBlPT09ZX19ZnVuY3Rpb24gY3QoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBuPXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4oXCJpbnB1dFwiPT09bnx8XCJidXR0b25cIj09PW4pJiZ0LnR5cGU9PT1lfX1mdW5jdGlvbiBwdChlKXtyZXR1cm4gb3QoZnVuY3Rpb24odCl7cmV0dXJuIHQ9K3Qsb3QoZnVuY3Rpb24obixyKXt2YXIgaSxvPWUoW10sbi5sZW5ndGgsdCksYT1vLmxlbmd0aDt3aGlsZShhLS0pbltpPW9bYV1dJiYobltpXT0hKHJbaV09bltpXSkpfSl9KX1vPXN0LmdldFRleHQ9ZnVuY3Rpb24oZSl7dmFyIHQsbj1cIlwiLHI9MCxpPWUubm9kZVR5cGU7aWYoaSl7aWYoMT09PWl8fDk9PT1pfHwxMT09PWkpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlLnRleHRDb250ZW50KXJldHVybiBlLnRleHRDb250ZW50O2ZvcihlPWUuZmlyc3RDaGlsZDtlO2U9ZS5uZXh0U2libGluZyluKz1vKGUpfWVsc2UgaWYoMz09PWl8fDQ9PT1pKXJldHVybiBlLm5vZGVWYWx1ZX1lbHNlIGZvcig7dD1lW3JdO3IrKyluKz1vKHQpO3JldHVybiBufSxpPXN0LnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOm90LG1hdGNoOlUsZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDohMH0sXCIgXCI6e2RpcjpcInBhcmVudE5vZGVcIn0sXCIrXCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wiLGZpcnN0OiEwfSxcIn5cIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCJ9fSxwcmVGaWx0ZXI6e0FUVFI6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbMV09ZVsxXS5yZXBsYWNlKGV0LHR0KSxlWzNdPShlWzRdfHxlWzVdfHxcIlwiKS5yZXBsYWNlKGV0LHR0KSxcIn49XCI9PT1lWzJdJiYoZVszXT1cIiBcIitlWzNdK1wiIFwiKSxlLnNsaWNlKDAsNCl9LENISUxEOmZ1bmN0aW9uKGUpe3JldHVybiBlWzFdPWVbMV0udG9Mb3dlckNhc2UoKSxcIm50aFwiPT09ZVsxXS5zbGljZSgwLDMpPyhlWzNdfHxzdC5lcnJvcihlWzBdKSxlWzRdPSsoZVs0XT9lWzVdKyhlWzZdfHwxKToyKihcImV2ZW5cIj09PWVbM118fFwib2RkXCI9PT1lWzNdKSksZVs1XT0rKGVbN10rZVs4XXx8XCJvZGRcIj09PWVbM10pKTplWzNdJiZzdC5lcnJvcihlWzBdKSxlfSxQU0VVRE86ZnVuY3Rpb24oZSl7dmFyIHQsbj0hZVs1XSYmZVsyXTtyZXR1cm4gVS5DSElMRC50ZXN0KGVbMF0pP251bGw6KGVbNF0/ZVsyXT1lWzRdOm4mJnoudGVzdChuKSYmKHQ9ZnQobiwhMCkpJiYodD1uLmluZGV4T2YoXCIpXCIsbi5sZW5ndGgtdCktbi5sZW5ndGgpJiYoZVswXT1lWzBdLnNsaWNlKDAsdCksZVsyXT1uLnNsaWNlKDAsdCkpLGUuc2xpY2UoMCwzKSl9fSxmaWx0ZXI6e1RBRzpmdW5jdGlvbihlKXtyZXR1cm5cIipcIj09PWU/ZnVuY3Rpb24oKXtyZXR1cm4hMH06KGU9ZS5yZXBsYWNlKGV0LHR0KS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKHQpe3JldHVybiB0Lm5vZGVOYW1lJiZ0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1lfSl9LENMQVNTOmZ1bmN0aW9uKGUpe3ZhciB0PWtbZStcIiBcIl07cmV0dXJuIHR8fCh0PVJlZ0V4cChcIihefFwiK18rXCIpXCIrZStcIihcIitfK1wifCQpXCIpKSYmayhlLGZ1bmN0aW9uKGUpe3JldHVybiB0LnRlc3QoZS5jbGFzc05hbWV8fHR5cGVvZiBlLmdldEF0dHJpYnV0ZSE9PUEmJmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpfSl9LEFUVFI6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBmdW5jdGlvbihyKXt2YXIgaT1zdC5hdHRyKHIsZSk7cmV0dXJuIG51bGw9PWk/XCIhPVwiPT09dDp0PyhpKz1cIlwiLFwiPVwiPT09dD9pPT09bjpcIiE9XCI9PT10P2khPT1uOlwiXj1cIj09PXQ/biYmMD09PWkuaW5kZXhPZihuKTpcIio9XCI9PT10P24mJmkuaW5kZXhPZihuKT4tMTpcIiQ9XCI9PT10P24mJmkuc2xpY2UoLW4ubGVuZ3RoKT09PW46XCJ+PVwiPT09dD8oXCIgXCIraStcIiBcIikuaW5kZXhPZihuKT4tMTpcInw9XCI9PT10P2k9PT1ufHxpLnNsaWNlKDAsbi5sZW5ndGgrMSk9PT1uK1wiLVwiOiExKTohMH19LENISUxEOmZ1bmN0aW9uKGUsdCxuLHIsaSl7dmFyIG89XCJudGhcIiE9PWUuc2xpY2UoMCwzKSxhPVwibGFzdFwiIT09ZS5zbGljZSgtNCkscz1cIm9mLXR5cGVcIj09PXQ7cmV0dXJuIDE9PT1yJiYwPT09aT9mdW5jdGlvbihlKXtyZXR1cm4hIWUucGFyZW50Tm9kZX06ZnVuY3Rpb24odCxuLHUpe3ZhciBsLGMscCxmLGQsaCxnPW8hPT1hP1wibmV4dFNpYmxpbmdcIjpcInByZXZpb3VzU2libGluZ1wiLG09dC5wYXJlbnROb2RlLHk9cyYmdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLHY9IXUmJiFzO2lmKG0pe2lmKG8pe3doaWxlKGcpe3A9dDt3aGlsZShwPXBbZ10paWYocz9wLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT15OjE9PT1wLm5vZGVUeXBlKXJldHVybiExO2g9Zz1cIm9ubHlcIj09PWUmJiFoJiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYoaD1bYT9tLmZpcnN0Q2hpbGQ6bS5sYXN0Q2hpbGRdLGEmJnYpe2M9bVt4XXx8KG1beF09e30pLGw9Y1tlXXx8W10sZD1sWzBdPT09TiYmbFsxXSxmPWxbMF09PT1OJiZsWzJdLHA9ZCYmbS5jaGlsZE5vZGVzW2RdO3doaWxlKHA9KytkJiZwJiZwW2ddfHwoZj1kPTApfHxoLnBvcCgpKWlmKDE9PT1wLm5vZGVUeXBlJiYrK2YmJnA9PT10KXtjW2VdPVtOLGQsZl07YnJlYWt9fWVsc2UgaWYodiYmKGw9KHRbeF18fCh0W3hdPXt9KSlbZV0pJiZsWzBdPT09TilmPWxbMV07ZWxzZSB3aGlsZShwPSsrZCYmcCYmcFtnXXx8KGY9ZD0wKXx8aC5wb3AoKSlpZigocz9wLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT15OjE9PT1wLm5vZGVUeXBlKSYmKytmJiYodiYmKChwW3hdfHwocFt4XT17fSkpW2VdPVtOLGZdKSxwPT09dCkpYnJlYWs7cmV0dXJuIGYtPWksZj09PXJ8fDA9PT1mJXImJmYvcj49MH19fSxQU0VVRE86ZnVuY3Rpb24oZSx0KXt2YXIgbixyPWkucHNldWRvc1tlXXx8aS5zZXRGaWx0ZXJzW2UudG9Mb3dlckNhc2UoKV18fHN0LmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIitlKTtyZXR1cm4gclt4XT9yKHQpOnIubGVuZ3RoPjE/KG49W2UsZSxcIlwiLHRdLGkuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShlLnRvTG93ZXJDYXNlKCkpP290KGZ1bmN0aW9uKGUsbil7dmFyIGksbz1yKGUsdCksYT1vLmxlbmd0aDt3aGlsZShhLS0paT1NLmNhbGwoZSxvW2FdKSxlW2ldPSEobltpXT1vW2FdKX0pOmZ1bmN0aW9uKGUpe3JldHVybiByKGUsMCxuKX0pOnJ9fSxwc2V1ZG9zOntub3Q6b3QoZnVuY3Rpb24oZSl7dmFyIHQ9W10sbj1bXSxyPXMoZS5yZXBsYWNlKFcsXCIkMVwiKSk7cmV0dXJuIHJbeF0/b3QoZnVuY3Rpb24oZSx0LG4saSl7dmFyIG8sYT1yKGUsbnVsbCxpLFtdKSxzPWUubGVuZ3RoO3doaWxlKHMtLSkobz1hW3NdKSYmKGVbc109ISh0W3NdPW8pKX0pOmZ1bmN0aW9uKGUsaSxvKXtyZXR1cm4gdFswXT1lLHIodCxudWxsLG8sbiksIW4ucG9wKCl9fSksaGFzOm90KGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gc3QoZSx0KS5sZW5ndGg+MH19KSxjb250YWluczpvdChmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuKHQudGV4dENvbnRlbnR8fHQuaW5uZXJUZXh0fHxvKHQpKS5pbmRleE9mKGUpPi0xfX0pLGxhbmc6b3QoZnVuY3Rpb24oZSl7cmV0dXJuIFgudGVzdChlfHxcIlwiKXx8c3QuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIitlKSxlPWUucmVwbGFjZShldCx0dCkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbih0KXt2YXIgbjtkbyBpZihuPWQ/dC5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8dC5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpOnQubGFuZylyZXR1cm4gbj1uLnRvTG93ZXJDYXNlKCksbj09PWV8fDA9PT1uLmluZGV4T2YoZStcIi1cIik7d2hpbGUoKHQ9dC5wYXJlbnROb2RlKSYmMT09PXQubm9kZVR5cGUpO3JldHVybiExfX0pLHRhcmdldDpmdW5jdGlvbih0KXt2YXIgbj1lLmxvY2F0aW9uJiZlLmxvY2F0aW9uLmhhc2g7cmV0dXJuIG4mJm4uc2xpY2UoMSk9PT10LmlkfSxyb290OmZ1bmN0aW9uKGUpe3JldHVybiBlPT09Zn0sZm9jdXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1wLmFjdGl2ZUVsZW1lbnQmJighcC5oYXNGb2N1c3x8cC5oYXNGb2N1cygpKSYmISEoZS50eXBlfHxlLmhyZWZ8fH5lLnRhYkluZGV4KX0sZW5hYmxlZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5kaXNhYmxlZD09PSExfSxkaXNhYmxlZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5kaXNhYmxlZD09PSEwfSxjaGVja2VkOmZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT10JiYhIWUuY2hlY2tlZHx8XCJvcHRpb25cIj09PXQmJiEhZS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsZS5zZWxlY3RlZD09PSEwfSxlbXB0eTpmdW5jdGlvbihlKXtmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpaWYoZS5ub2RlTmFtZT5cIkBcInx8Mz09PWUubm9kZVR5cGV8fDQ9PT1lLm5vZGVUeXBlKXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIWkucHNldWRvcy5lbXB0eShlKX0saGVhZGVyOmZ1bmN0aW9uKGUpe3JldHVybiBRLnRlc3QoZS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGUpe3JldHVybiBHLnRlc3QoZS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09dCYmXCJidXR0b25cIj09PWUudHlwZXx8XCJidXR0b25cIj09PXR9LHRleHQ6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWUudHlwZSYmKG51bGw9PSh0PWUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fHQudG9Mb3dlckNhc2UoKT09PWUudHlwZSl9LGZpcnN0OnB0KGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSksbGFzdDpwdChmdW5jdGlvbihlLHQpe3JldHVyblt0LTFdfSksZXE6cHQoZnVuY3Rpb24oZSx0LG4pe3JldHVyblswPm4/bit0Om5dfSksZXZlbjpwdChmdW5jdGlvbihlLHQpe3ZhciBuPTA7Zm9yKDt0Pm47bis9MillLnB1c2gobik7cmV0dXJuIGV9KSxvZGQ6cHQoZnVuY3Rpb24oZSx0KXt2YXIgbj0xO2Zvcig7dD5uO24rPTIpZS5wdXNoKG4pO3JldHVybiBlfSksbHQ6cHQoZnVuY3Rpb24oZSx0LG4pe3ZhciByPTA+bj9uK3Q6bjtmb3IoOy0tcj49MDspZS5wdXNoKHIpO3JldHVybiBlfSksZ3Q6cHQoZnVuY3Rpb24oZSx0LG4pe3ZhciByPTA+bj9uK3Q6bjtmb3IoO3Q+KytyOyllLnB1c2gocik7cmV0dXJuIGV9KX19O2ZvcihuIGlue3JhZGlvOiEwLGNoZWNrYm94OiEwLGZpbGU6ITAscGFzc3dvcmQ6ITAsaW1hZ2U6ITB9KWkucHNldWRvc1tuXT1sdChuKTtmb3IobiBpbntzdWJtaXQ6ITAscmVzZXQ6ITB9KWkucHNldWRvc1tuXT1jdChuKTtmdW5jdGlvbiBmdChlLHQpe3ZhciBuLHIsbyxhLHMsdSxsLGM9RVtlK1wiIFwiXTtpZihjKXJldHVybiB0PzA6Yy5zbGljZSgwKTtzPWUsdT1bXSxsPWkucHJlRmlsdGVyO3doaWxlKHMpeyghbnx8KHI9JC5leGVjKHMpKSkmJihyJiYocz1zLnNsaWNlKHJbMF0ubGVuZ3RoKXx8cyksdS5wdXNoKG89W10pKSxuPSExLChyPUkuZXhlYyhzKSkmJihuPXIuc2hpZnQoKSxvLnB1c2goe3ZhbHVlOm4sdHlwZTpyWzBdLnJlcGxhY2UoVyxcIiBcIil9KSxzPXMuc2xpY2Uobi5sZW5ndGgpKTtmb3IoYSBpbiBpLmZpbHRlcikhKHI9VVthXS5leGVjKHMpKXx8bFthXSYmIShyPWxbYV0ocikpfHwobj1yLnNoaWZ0KCksby5wdXNoKHt2YWx1ZTpuLHR5cGU6YSxtYXRjaGVzOnJ9KSxzPXMuc2xpY2Uobi5sZW5ndGgpKTtpZighbilicmVha31yZXR1cm4gdD9zLmxlbmd0aDpzP3N0LmVycm9yKGUpOkUoZSx1KS5zbGljZSgwKX1mdW5jdGlvbiBkdChlKXt2YXIgdD0wLG49ZS5sZW5ndGgscj1cIlwiO2Zvcig7bj50O3QrKylyKz1lW3RdLnZhbHVlO3JldHVybiByfWZ1bmN0aW9uIGh0KGUsdCxuKXt2YXIgaT10LmRpcixvPW4mJlwicGFyZW50Tm9kZVwiPT09aSxhPUMrKztyZXR1cm4gdC5maXJzdD9mdW5jdGlvbih0LG4scil7d2hpbGUodD10W2ldKWlmKDE9PT10Lm5vZGVUeXBlfHxvKXJldHVybiBlKHQsbixyKX06ZnVuY3Rpb24odCxuLHMpe3ZhciB1LGwsYyxwPU4rXCIgXCIrYTtpZihzKXt3aGlsZSh0PXRbaV0paWYoKDE9PT10Lm5vZGVUeXBlfHxvKSYmZSh0LG4scykpcmV0dXJuITB9ZWxzZSB3aGlsZSh0PXRbaV0paWYoMT09PXQubm9kZVR5cGV8fG8paWYoYz10W3hdfHwodFt4XT17fSksKGw9Y1tpXSkmJmxbMF09PT1wKXtpZigodT1sWzFdKT09PSEwfHx1PT09cilyZXR1cm4gdT09PSEwfWVsc2UgaWYobD1jW2ldPVtwXSxsWzFdPWUodCxuLHMpfHxyLGxbMV09PT0hMClyZXR1cm4hMH19ZnVuY3Rpb24gZ3QoZSl7cmV0dXJuIGUubGVuZ3RoPjE/ZnVuY3Rpb24odCxuLHIpe3ZhciBpPWUubGVuZ3RoO3doaWxlKGktLSlpZighZVtpXSh0LG4scikpcmV0dXJuITE7cmV0dXJuITB9OmVbMF19ZnVuY3Rpb24gbXQoZSx0LG4scixpKXt2YXIgbyxhPVtdLHM9MCx1PWUubGVuZ3RoLGw9bnVsbCE9dDtmb3IoO3U+cztzKyspKG89ZVtzXSkmJighbnx8bihvLHIsaSkpJiYoYS5wdXNoKG8pLGwmJnQucHVzaChzKSk7cmV0dXJuIGF9ZnVuY3Rpb24geXQoZSx0LG4scixpLG8pe3JldHVybiByJiYhclt4XSYmKHI9eXQocikpLGkmJiFpW3hdJiYoaT15dChpLG8pKSxvdChmdW5jdGlvbihvLGEscyx1KXt2YXIgbCxjLHAsZj1bXSxkPVtdLGg9YS5sZW5ndGgsZz1vfHx4dCh0fHxcIipcIixzLm5vZGVUeXBlP1tzXTpzLFtdKSxtPSFlfHwhbyYmdD9nOm10KGcsZixlLHMsdSkseT1uP2l8fChvP2U6aHx8cik/W106YTptO2lmKG4mJm4obSx5LHMsdSkscil7bD1tdCh5LGQpLHIobCxbXSxzLHUpLGM9bC5sZW5ndGg7d2hpbGUoYy0tKShwPWxbY10pJiYoeVtkW2NdXT0hKG1bZFtjXV09cCkpfWlmKG8pe2lmKGl8fGUpe2lmKGkpe2w9W10sYz15Lmxlbmd0aDt3aGlsZShjLS0pKHA9eVtjXSkmJmwucHVzaChtW2NdPXApO2kobnVsbCx5PVtdLGwsdSl9Yz15Lmxlbmd0aDt3aGlsZShjLS0pKHA9eVtjXSkmJihsPWk/TS5jYWxsKG8scCk6ZltjXSk+LTEmJihvW2xdPSEoYVtsXT1wKSl9fWVsc2UgeT1tdCh5PT09YT95LnNwbGljZShoLHkubGVuZ3RoKTp5KSxpP2kobnVsbCxhLHksdSk6SC5hcHBseShhLHkpfSl9ZnVuY3Rpb24gdnQoZSl7dmFyIHQsbixyLG89ZS5sZW5ndGgsYT1pLnJlbGF0aXZlW2VbMF0udHlwZV0scz1hfHxpLnJlbGF0aXZlW1wiIFwiXSx1PWE/MTowLGM9aHQoZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT10fSxzLCEwKSxwPWh0KGZ1bmN0aW9uKGUpe3JldHVybiBNLmNhbGwodCxlKT4tMX0scywhMCksZj1bZnVuY3Rpb24oZSxuLHIpe3JldHVybiFhJiYocnx8biE9PWwpfHwoKHQ9bikubm9kZVR5cGU/YyhlLG4scik6cChlLG4scikpfV07Zm9yKDtvPnU7dSsrKWlmKG49aS5yZWxhdGl2ZVtlW3VdLnR5cGVdKWY9W2h0KGd0KGYpLG4pXTtlbHNle2lmKG49aS5maWx0ZXJbZVt1XS50eXBlXS5hcHBseShudWxsLGVbdV0ubWF0Y2hlcyksblt4XSl7Zm9yKHI9Kyt1O28+cjtyKyspaWYoaS5yZWxhdGl2ZVtlW3JdLnR5cGVdKWJyZWFrO3JldHVybiB5dCh1PjEmJmd0KGYpLHU+MSYmZHQoZS5zbGljZSgwLHUtMSkpLnJlcGxhY2UoVyxcIiQxXCIpLG4scj51JiZ2dChlLnNsaWNlKHUscikpLG8+ciYmdnQoZT1lLnNsaWNlKHIpKSxvPnImJmR0KGUpKX1mLnB1c2gobil9cmV0dXJuIGd0KGYpfWZ1bmN0aW9uIGJ0KGUsdCl7dmFyIG49MCxvPXQubGVuZ3RoPjAsYT1lLmxlbmd0aD4wLHM9ZnVuY3Rpb24ocyx1LGMsZixkKXt2YXIgaCxnLG0seT1bXSx2PTAsYj1cIjBcIix4PXMmJltdLHc9bnVsbCE9ZCxUPWwsQz1zfHxhJiZpLmZpbmQuVEFHKFwiKlwiLGQmJnUucGFyZW50Tm9kZXx8dSksaz1OKz1udWxsPT1UPzE6TWF0aC5yYW5kb20oKXx8LjE7Zm9yKHcmJihsPXUhPT1wJiZ1LHI9bik7bnVsbCE9KGg9Q1tiXSk7YisrKXtpZihhJiZoKXtnPTA7d2hpbGUobT1lW2crK10paWYobShoLHUsYykpe2YucHVzaChoKTticmVha313JiYoTj1rLHI9KytuKX1vJiYoKGg9IW0mJmgpJiZ2LS0scyYmeC5wdXNoKGgpKX1pZih2Kz1iLG8mJmIhPT12KXtnPTA7d2hpbGUobT10W2crK10pbSh4LHksdSxjKTtpZihzKXtpZih2PjApd2hpbGUoYi0tKXhbYl18fHlbYl18fCh5W2JdPUwuY2FsbChmKSk7eT1tdCh5KX1ILmFwcGx5KGYseSksdyYmIXMmJnkubGVuZ3RoPjAmJnYrdC5sZW5ndGg+MSYmc3QudW5pcXVlU29ydChmKX1yZXR1cm4gdyYmKE49ayxsPVQpLHh9O3JldHVybiBvP290KHMpOnN9cz1zdC5jb21waWxlPWZ1bmN0aW9uKGUsdCl7dmFyIG4scj1bXSxpPVtdLG89U1tlK1wiIFwiXTtpZighbyl7dHx8KHQ9ZnQoZSkpLG49dC5sZW5ndGg7d2hpbGUobi0tKW89dnQodFtuXSksb1t4XT9yLnB1c2gobyk6aS5wdXNoKG8pO289UyhlLGJ0KGkscikpfXJldHVybiBvfTtmdW5jdGlvbiB4dChlLHQsbil7dmFyIHI9MCxpPXQubGVuZ3RoO2Zvcig7aT5yO3IrKylzdChlLHRbcl0sbik7cmV0dXJuIG59ZnVuY3Rpb24gd3QoZSx0LG4scil7dmFyIG8sYSx1LGwsYyxwPWZ0KGUpO2lmKCFyJiYxPT09cC5sZW5ndGgpe2lmKGE9cFswXT1wWzBdLnNsaWNlKDApLGEubGVuZ3RoPjImJlwiSURcIj09PSh1PWFbMF0pLnR5cGUmJjk9PT10Lm5vZGVUeXBlJiYhZCYmaS5yZWxhdGl2ZVthWzFdLnR5cGVdKXtpZih0PWkuZmluZC5JRCh1Lm1hdGNoZXNbMF0ucmVwbGFjZShldCx0dCksdClbMF0sIXQpcmV0dXJuIG47ZT1lLnNsaWNlKGEuc2hpZnQoKS52YWx1ZS5sZW5ndGgpfW89VS5uZWVkc0NvbnRleHQudGVzdChlKT8wOmEubGVuZ3RoO3doaWxlKG8tLSl7aWYodT1hW29dLGkucmVsYXRpdmVbbD11LnR5cGVdKWJyZWFrO2lmKChjPWkuZmluZFtsXSkmJihyPWModS5tYXRjaGVzWzBdLnJlcGxhY2UoZXQsdHQpLFYudGVzdChhWzBdLnR5cGUpJiZ0LnBhcmVudE5vZGV8fHQpKSl7aWYoYS5zcGxpY2UobywxKSxlPXIubGVuZ3RoJiZkdChhKSwhZSlyZXR1cm4gSC5hcHBseShuLHEuY2FsbChyLDApKSxuO2JyZWFrfX19cmV0dXJuIHMoZSxwKShyLHQsZCxuLFYudGVzdChlKSksbn1pLnBzZXVkb3MubnRoPWkucHNldWRvcy5lcTtmdW5jdGlvbiBUdCgpe31pLmZpbHRlcnM9VHQucHJvdG90eXBlPWkucHNldWRvcyxpLnNldEZpbHRlcnM9bmV3IFR0LGMoKSxzdC5hdHRyPWIuYXR0cixiLmZpbmQ9c3QsYi5leHByPXN0LnNlbGVjdG9ycyxiLmV4cHJbXCI6XCJdPWIuZXhwci5wc2V1ZG9zLGIudW5pcXVlPXN0LnVuaXF1ZVNvcnQsYi50ZXh0PXN0LmdldFRleHQsYi5pc1hNTERvYz1zdC5pc1hNTCxiLmNvbnRhaW5zPXN0LmNvbnRhaW5zfShlKTt2YXIgYXQ9L1VudGlsJC8sc3Q9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sdXQ9L14uW146I1xcW1xcLixdKiQvLGx0PWIuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQsY3Q9e2NoaWxkcmVuOiEwLGNvbnRlbnRzOiEwLG5leHQ6ITAscHJldjohMH07Yi5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGk9dGhpcy5sZW5ndGg7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIHI9dGhpcyx0aGlzLnB1c2hTdGFjayhiKGUpLmZpbHRlcihmdW5jdGlvbigpe2Zvcih0PTA7aT50O3QrKylpZihiLmNvbnRhaW5zKHJbdF0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKG49W10sdD0wO2k+dDt0KyspYi5maW5kKGUsdGhpc1t0XSxuKTtyZXR1cm4gbj10aGlzLnB1c2hTdGFjayhpPjE/Yi51bmlxdWUobik6biksbi5zZWxlY3Rvcj0odGhpcy5zZWxlY3Rvcj90aGlzLnNlbGVjdG9yK1wiIFwiOlwiXCIpK2Usbn0saGFzOmZ1bmN0aW9uKGUpe3ZhciB0LG49YihlLHRoaXMpLHI9bi5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHQ9MDtyPnQ7dCsrKWlmKGIuY29udGFpbnModGhpcyxuW3RdKSlyZXR1cm4hMH0pfSxub3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGZ0KHRoaXMsZSwhMSkpfSxmaWx0ZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGZ0KHRoaXMsZSwhMCkpfSxpczpmdW5jdGlvbihlKXtyZXR1cm4hIWUmJihcInN0cmluZ1wiPT10eXBlb2YgZT9sdC50ZXN0KGUpP2IoZSx0aGlzLmNvbnRleHQpLmluZGV4KHRoaXNbMF0pPj0wOmIuZmlsdGVyKGUsdGhpcykubGVuZ3RoPjA6dGhpcy5maWx0ZXIoZSkubGVuZ3RoPjApfSxjbG9zZXN0OmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wLGk9dGhpcy5sZW5ndGgsbz1bXSxhPWx0LnRlc3QoZSl8fFwic3RyaW5nXCIhPXR5cGVvZiBlP2IoZSx0fHx0aGlzLmNvbnRleHQpOjA7Zm9yKDtpPnI7cisrKXtuPXRoaXNbcl07d2hpbGUobiYmbi5vd25lckRvY3VtZW50JiZuIT09dCYmMTEhPT1uLm5vZGVUeXBlKXtpZihhP2EuaW5kZXgobik+LTE6Yi5maW5kLm1hdGNoZXNTZWxlY3RvcihuLGUpKXtvLnB1c2gobik7YnJlYWt9bj1uLnBhcmVudE5vZGV9fXJldHVybiB0aGlzLnB1c2hTdGFjayhvLmxlbmd0aD4xP2IudW5pcXVlKG8pOm8pfSxpbmRleDpmdW5jdGlvbihlKXtyZXR1cm4gZT9cInN0cmluZ1wiPT10eXBlb2YgZT9iLmluQXJyYXkodGhpc1swXSxiKGUpKTpiLmluQXJyYXkoZS5qcXVlcnk/ZVswXTplLHRoaXMpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGUsdCl7dmFyIG49XCJzdHJpbmdcIj09dHlwZW9mIGU/YihlLHQpOmIubWFrZUFycmF5KGUmJmUubm9kZVR5cGU/W2VdOmUpLHI9Yi5tZXJnZSh0aGlzLmdldCgpLG4pO3JldHVybiB0aGlzLnB1c2hTdGFjayhiLnVuaXF1ZShyKSl9LGFkZEJhY2s6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWU/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoZSkpfX0pLGIuZm4uYW5kU2VsZj1iLmZuLmFkZEJhY2s7ZnVuY3Rpb24gcHQoZSx0KXtkbyBlPWVbdF07d2hpbGUoZSYmMSE9PWUubm9kZVR5cGUpO3JldHVybiBlfWIuZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTtyZXR1cm4gdCYmMTEhPT10Lm5vZGVUeXBlP3Q6bnVsbH0scGFyZW50czpmdW5jdGlvbihlKXtyZXR1cm4gYi5kaXIoZSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGIuZGlyKGUsXCJwYXJlbnROb2RlXCIsbil9LG5leHQ6ZnVuY3Rpb24oZSl7cmV0dXJuIHB0KGUsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihlKXtyZXR1cm4gcHQoZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihlKXtyZXR1cm4gYi5kaXIoZSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2QWxsOmZ1bmN0aW9uKGUpe3JldHVybiBiLmRpcihlLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBiLmRpcihlLFwibmV4dFNpYmxpbmdcIixuKX0scHJldlVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gYi5kaXIoZSxcInByZXZpb3VzU2libGluZ1wiLG4pfSxzaWJsaW5nczpmdW5jdGlvbihlKXtyZXR1cm4gYi5zaWJsaW5nKChlLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGUpfSxjaGlsZHJlbjpmdW5jdGlvbihlKXtyZXR1cm4gYi5zaWJsaW5nKGUuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGUpe3JldHVybiBiLm5vZGVOYW1lKGUsXCJpZnJhbWVcIik/ZS5jb250ZW50RG9jdW1lbnR8fGUuY29udGVudFdpbmRvdy5kb2N1bWVudDpiLm1lcmdlKFtdLGUuY2hpbGROb2Rlcyl9fSxmdW5jdGlvbihlLHQpe2IuZm5bZV09ZnVuY3Rpb24obixyKXt2YXIgaT1iLm1hcCh0aGlzLHQsbik7cmV0dXJuIGF0LnRlc3QoZSl8fChyPW4pLHImJlwic3RyaW5nXCI9PXR5cGVvZiByJiYoaT1iLmZpbHRlcihyLGkpKSxpPXRoaXMubGVuZ3RoPjEmJiFjdFtlXT9iLnVuaXF1ZShpKTppLHRoaXMubGVuZ3RoPjEmJnN0LnRlc3QoZSkmJihpPWkucmV2ZXJzZSgpKSx0aGlzLnB1c2hTdGFjayhpKX19KSxiLmV4dGVuZCh7ZmlsdGVyOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbiYmKGU9XCI6bm90KFwiK2UrXCIpXCIpLDE9PT10Lmxlbmd0aD9iLmZpbmQubWF0Y2hlc1NlbGVjdG9yKHRbMF0sZSk/W3RbMF1dOltdOmIuZmluZC5tYXRjaGVzKGUsdCl9LGRpcjpmdW5jdGlvbihlLG4scil7dmFyIGk9W10sbz1lW25dO3doaWxlKG8mJjkhPT1vLm5vZGVUeXBlJiYocj09PXR8fDEhPT1vLm5vZGVUeXBlfHwhYihvKS5pcyhyKSkpMT09PW8ubm9kZVR5cGUmJmkucHVzaChvKSxvPW9bbl07cmV0dXJuIGl9LHNpYmxpbmc6ZnVuY3Rpb24oZSx0KXt2YXIgbj1bXTtmb3IoO2U7ZT1lLm5leHRTaWJsaW5nKTE9PT1lLm5vZGVUeXBlJiZlIT09dCYmbi5wdXNoKGUpO3JldHVybiBufX0pO2Z1bmN0aW9uIGZ0KGUsdCxuKXtpZih0PXR8fDAsYi5pc0Z1bmN0aW9uKHQpKXJldHVybiBiLmdyZXAoZSxmdW5jdGlvbihlLHIpe3ZhciBpPSEhdC5jYWxsKGUscixlKTtyZXR1cm4gaT09PW59KTtpZih0Lm5vZGVUeXBlKXJldHVybiBiLmdyZXAoZSxmdW5jdGlvbihlKXtyZXR1cm4gZT09PXQ9PT1ufSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe3ZhciByPWIuZ3JlcChlLGZ1bmN0aW9uKGUpe3JldHVybiAxPT09ZS5ub2RlVHlwZX0pO2lmKHV0LnRlc3QodCkpcmV0dXJuIGIuZmlsdGVyKHQsciwhbik7dD1iLmZpbHRlcih0LHIpfXJldHVybiBiLmdyZXAoZSxmdW5jdGlvbihlKXtyZXR1cm4gYi5pbkFycmF5KGUsdCk+PTA9PT1ufSl9ZnVuY3Rpb24gZHQoZSl7dmFyIHQ9aHQuc3BsaXQoXCJ8XCIpLG49ZS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7aWYobi5jcmVhdGVFbGVtZW50KXdoaWxlKHQubGVuZ3RoKW4uY3JlYXRlRWxlbWVudCh0LnBvcCgpKTtyZXR1cm4gbn12YXIgaHQ9XCJhYmJyfGFydGljbGV8YXNpZGV8YXVkaW98YmRpfGNhbnZhc3xkYXRhfGRhdGFsaXN0fGRldGFpbHN8ZmlnY2FwdGlvbnxmaWd1cmV8Zm9vdGVyfGhlYWRlcnxoZ3JvdXB8bWFya3xtZXRlcnxuYXZ8b3V0cHV0fHByb2dyZXNzfHNlY3Rpb258c3VtbWFyeXx0aW1lfHZpZGVvXCIsZ3Q9LyBqUXVlcnlcXGQrPVwiKD86bnVsbHxcXGQrKVwiL2csbXQ9UmVnRXhwKFwiPCg/OlwiK2h0K1wiKVtcXFxccy8+XVwiLFwiaVwiKSx5dD0vXlxccysvLHZ0PS88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFtcXHc6XSspW14+XSopXFwvPi9naSxidD0vPChbXFx3Ol0rKS8seHQ9Lzx0Ym9keS9pLHd0PS88fCYjP1xcdys7LyxUdD0vPCg/OnNjcmlwdHxzdHlsZXxsaW5rKS9pLE50PS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pLEN0PS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksa3Q9L14kfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSxFdD0vXnRydWVcXC8oLiopLyxTdD0vXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2csQXQ9e29wdGlvbjpbMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSxsZWdlbmQ6WzEsXCI8ZmllbGRzZXQ+XCIsXCI8L2ZpZWxkc2V0PlwiXSxhcmVhOlsxLFwiPG1hcD5cIixcIjwvbWFwPlwiXSxwYXJhbTpbMSxcIjxvYmplY3Q+XCIsXCI8L29iamVjdD5cIl0sdGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48dGJvZHk+PC90Ym9keT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6Yi5zdXBwb3J0Lmh0bWxTZXJpYWxpemU/WzAsXCJcIixcIlwiXTpbMSxcIlg8ZGl2PlwiLFwiPC9kaXY+XCJdfSxqdD1kdChvKSxEdD1qdC5hcHBlbmRDaGlsZChvLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO0F0Lm9wdGdyb3VwPUF0Lm9wdGlvbixBdC50Ym9keT1BdC50Zm9vdD1BdC5jb2xncm91cD1BdC5jYXB0aW9uPUF0LnRoZWFkLEF0LnRoPUF0LnRkLGIuZm4uZXh0ZW5kKHt0ZXh0OmZ1bmN0aW9uKGUpe3JldHVybiBiLmFjY2Vzcyh0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiBlPT09dD9iLnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmFwcGVuZCgodGhpc1swXSYmdGhpc1swXS5vd25lckRvY3VtZW50fHxvKS5jcmVhdGVUZXh0Tm9kZShlKSl9LG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0sd3JhcEFsbDpmdW5jdGlvbihlKXtpZihiLmlzRnVuY3Rpb24oZSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbih0KXtiKHRoaXMpLndyYXBBbGwoZS5jYWxsKHRoaXMsdCkpfSk7aWYodGhpc1swXSl7dmFyIHQ9YihlLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApO3RoaXNbMF0ucGFyZW50Tm9kZSYmdC5pbnNlcnRCZWZvcmUodGhpc1swXSksdC5tYXAoZnVuY3Rpb24oKXt2YXIgZT10aGlzO3doaWxlKGUuZmlyc3RDaGlsZCYmMT09PWUuZmlyc3RDaGlsZC5ub2RlVHlwZSllPWUuZmlyc3RDaGlsZDtyZXR1cm4gZX0pLmFwcGVuZCh0aGlzKX1yZXR1cm4gdGhpc30sd3JhcElubmVyOmZ1bmN0aW9uKGUpe3JldHVybiBiLmlzRnVuY3Rpb24oZSk/dGhpcy5lYWNoKGZ1bmN0aW9uKHQpe2IodGhpcykud3JhcElubmVyKGUuY2FsbCh0aGlzLHQpKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0PWIodGhpcyksbj10LmNvbnRlbnRzKCk7bi5sZW5ndGg/bi53cmFwQWxsKGUpOnQuYXBwZW5kKGUpfSl9LHdyYXA6ZnVuY3Rpb24oZSl7dmFyIHQ9Yi5pc0Z1bmN0aW9uKGUpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24obil7Yih0aGlzKS53cmFwQWxsKHQ/ZS5jYWxsKHRoaXMsbik6ZSl9KX0sdW53cmFwOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGFyZW50KCkuZWFjaChmdW5jdGlvbigpe2Iubm9kZU5hbWUodGhpcyxcImJvZHlcIil8fGIodGhpcykucmVwbGFjZVdpdGgodGhpcy5jaGlsZE5vZGVzKX0pLmVuZCgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsITAsZnVuY3Rpb24oZSl7KDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKSYmdGhpcy5hcHBlbmRDaGlsZChlKX0pfSxwcmVwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLCEwLGZ1bmN0aW9uKGUpeygxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSkmJnRoaXMuaW5zZXJ0QmVmb3JlKGUsdGhpcy5maXJzdENoaWxkKX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsITEsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsITEsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcy5uZXh0U2libGluZyl9KX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wO2Zvcig7bnVsbCE9KG49dGhpc1tyXSk7cisrKSghZXx8Yi5maWx0ZXIoZSxbbl0pLmxlbmd0aD4wKSYmKHR8fDEhPT1uLm5vZGVUeXBlfHxiLmNsZWFuRGF0YShPdChuKSksbi5wYXJlbnROb2RlJiYodCYmYi5jb250YWlucyhuLm93bmVyRG9jdW1lbnQsbikmJk10KE90KG4sXCJzY3JpcHRcIikpLG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKSkpO3JldHVybiB0aGlzfSxlbXB0eTpmdW5jdGlvbigpe3ZhciBlLHQ9MDtmb3IoO251bGwhPShlPXRoaXNbdF0pO3QrKyl7MT09PWUubm9kZVR5cGUmJmIuY2xlYW5EYXRhKE90KGUsITEpKTt3aGlsZShlLmZpcnN0Q2hpbGQpZS5yZW1vdmVDaGlsZChlLmZpcnN0Q2hpbGQpO2Uub3B0aW9ucyYmYi5ub2RlTmFtZShlLFwic2VsZWN0XCIpJiYoZS5vcHRpb25zLmxlbmd0aD0wKX1yZXR1cm4gdGhpc30sY2xvbmU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT1udWxsPT1lPyExOmUsdD1udWxsPT10P2U6dCx0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiBiLmNsb25lKHRoaXMsZSx0KX0pfSxodG1sOmZ1bmN0aW9uKGUpe3JldHVybiBiLmFjY2Vzcyh0aGlzLGZ1bmN0aW9uKGUpe3ZhciBuPXRoaXNbMF18fHt9LHI9MCxpPXRoaXMubGVuZ3RoO2lmKGU9PT10KXJldHVybiAxPT09bi5ub2RlVHlwZT9uLmlubmVySFRNTC5yZXBsYWNlKGd0LFwiXCIpOnQ7aWYoIShcInN0cmluZ1wiIT10eXBlb2YgZXx8VHQudGVzdChlKXx8IWIuc3VwcG9ydC5odG1sU2VyaWFsaXplJiZtdC50ZXN0KGUpfHwhYi5zdXBwb3J0LmxlYWRpbmdXaGl0ZXNwYWNlJiZ5dC50ZXN0KGUpfHxBdFsoYnQuZXhlYyhlKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCldKSl7ZT1lLnJlcGxhY2UodnQsXCI8JDE+PC8kMj5cIik7dHJ5e2Zvcig7aT5yO3IrKyluPXRoaXNbcl18fHt9LDE9PT1uLm5vZGVUeXBlJiYoYi5jbGVhbkRhdGEoT3QobiwhMSkpLG4uaW5uZXJIVE1MPWUpO249MH1jYXRjaChvKXt9fW4mJnRoaXMuZW1wdHkoKS5hcHBlbmQoZSl9LG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oZSl7dmFyIHQ9Yi5pc0Z1bmN0aW9uKGUpO3JldHVybiB0fHxcInN0cmluZ1wiPT10eXBlb2YgZXx8KGU9YihlKS5ub3QodGhpcykuZGV0YWNoKCkpLHRoaXMuZG9tTWFuaXAoW2VdLCEwLGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMubmV4dFNpYmxpbmcsbj10aGlzLnBhcmVudE5vZGU7biYmKGIodGhpcykucmVtb3ZlKCksbi5pbnNlcnRCZWZvcmUoZSx0KSl9KX0sZGV0YWNoOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnJlbW92ZShlLCEwKX0sZG9tTWFuaXA6ZnVuY3Rpb24oZSxuLHIpe2U9Zi5hcHBseShbXSxlKTt2YXIgaSxvLGEscyx1LGwsYz0wLHA9dGhpcy5sZW5ndGgsZD10aGlzLGg9cC0xLGc9ZVswXSxtPWIuaXNGdW5jdGlvbihnKTtpZihtfHwhKDE+PXB8fFwic3RyaW5nXCIhPXR5cGVvZiBnfHxiLnN1cHBvcnQuY2hlY2tDbG9uZSkmJkN0LnRlc3QoZykpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihpKXt2YXIgbz1kLmVxKGkpO20mJihlWzBdPWcuY2FsbCh0aGlzLGksbj9vLmh0bWwoKTp0KSksby5kb21NYW5pcChlLG4scil9KTtpZihwJiYobD1iLmJ1aWxkRnJhZ21lbnQoZSx0aGlzWzBdLm93bmVyRG9jdW1lbnQsITEsdGhpcyksaT1sLmZpcnN0Q2hpbGQsMT09PWwuY2hpbGROb2Rlcy5sZW5ndGgmJihsPWkpLGkpKXtmb3Iobj1uJiZiLm5vZGVOYW1lKGksXCJ0clwiKSxzPWIubWFwKE90KGwsXCJzY3JpcHRcIiksSHQpLGE9cy5sZW5ndGg7cD5jO2MrKylvPWwsYyE9PWgmJihvPWIuY2xvbmUobywhMCwhMCksYSYmYi5tZXJnZShzLE90KG8sXCJzY3JpcHRcIikpKSxyLmNhbGwobiYmYi5ub2RlTmFtZSh0aGlzW2NdLFwidGFibGVcIik/THQodGhpc1tjXSxcInRib2R5XCIpOnRoaXNbY10sbyxjKTtpZihhKWZvcih1PXNbcy5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxiLm1hcChzLHF0KSxjPTA7YT5jO2MrKylvPXNbY10sa3QudGVzdChvLnR5cGV8fFwiXCIpJiYhYi5fZGF0YShvLFwiZ2xvYmFsRXZhbFwiKSYmYi5jb250YWlucyh1LG8pJiYoby5zcmM/Yi5hamF4KHt1cmw6by5zcmMsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsYXN5bmM6ITEsZ2xvYmFsOiExLFwidGhyb3dzXCI6ITB9KTpiLmdsb2JhbEV2YWwoKG8udGV4dHx8by50ZXh0Q29udGVudHx8by5pbm5lckhUTUx8fFwiXCIpLnJlcGxhY2UoU3QsXCJcIikpKTtsPWk9bnVsbH1yZXR1cm4gdGhpc319KTtmdW5jdGlvbiBMdChlLHQpe3JldHVybiBlLmdldEVsZW1lbnRzQnlUYWdOYW1lKHQpWzBdfHxlLmFwcGVuZENoaWxkKGUub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KHQpKX1mdW5jdGlvbiBIdChlKXt2YXIgdD1lLmdldEF0dHJpYnV0ZU5vZGUoXCJ0eXBlXCIpO3JldHVybiBlLnR5cGU9KHQmJnQuc3BlY2lmaWVkKStcIi9cIitlLnR5cGUsZX1mdW5jdGlvbiBxdChlKXt2YXIgdD1FdC5leGVjKGUudHlwZSk7cmV0dXJuIHQ/ZS50eXBlPXRbMV06ZS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGV9ZnVuY3Rpb24gTXQoZSx0KXt2YXIgbixyPTA7Zm9yKDtudWxsIT0obj1lW3JdKTtyKyspYi5fZGF0YShuLFwiZ2xvYmFsRXZhbFwiLCF0fHxiLl9kYXRhKHRbcl0sXCJnbG9iYWxFdmFsXCIpKX1mdW5jdGlvbiBfdChlLHQpe2lmKDE9PT10Lm5vZGVUeXBlJiZiLmhhc0RhdGEoZSkpe3ZhciBuLHIsaSxvPWIuX2RhdGEoZSksYT1iLl9kYXRhKHQsbykscz1vLmV2ZW50cztpZihzKXtkZWxldGUgYS5oYW5kbGUsYS5ldmVudHM9e307Zm9yKG4gaW4gcylmb3Iocj0wLGk9c1tuXS5sZW5ndGg7aT5yO3IrKyliLmV2ZW50LmFkZCh0LG4sc1tuXVtyXSl9YS5kYXRhJiYoYS5kYXRhPWIuZXh0ZW5kKHt9LGEuZGF0YSkpfX1mdW5jdGlvbiBGdChlLHQpe3ZhciBuLHIsaTtpZigxPT09dC5ub2RlVHlwZSl7aWYobj10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksIWIuc3VwcG9ydC5ub0Nsb25lRXZlbnQmJnRbYi5leHBhbmRvXSl7aT1iLl9kYXRhKHQpO2ZvcihyIGluIGkuZXZlbnRzKWIucmVtb3ZlRXZlbnQodCxyLGkuaGFuZGxlKTt0LnJlbW92ZUF0dHJpYnV0ZShiLmV4cGFuZG8pfVwic2NyaXB0XCI9PT1uJiZ0LnRleHQhPT1lLnRleHQ/KEh0KHQpLnRleHQ9ZS50ZXh0LHF0KHQpKTpcIm9iamVjdFwiPT09bj8odC5wYXJlbnROb2RlJiYodC5vdXRlckhUTUw9ZS5vdXRlckhUTUwpLGIuc3VwcG9ydC5odG1sNUNsb25lJiZlLmlubmVySFRNTCYmIWIudHJpbSh0LmlubmVySFRNTCkmJih0LmlubmVySFRNTD1lLmlubmVySFRNTCkpOlwiaW5wdXRcIj09PW4mJk50LnRlc3QoZS50eXBlKT8odC5kZWZhdWx0Q2hlY2tlZD10LmNoZWNrZWQ9ZS5jaGVja2VkLHQudmFsdWUhPT1lLnZhbHVlJiYodC52YWx1ZT1lLnZhbHVlKSk6XCJvcHRpb25cIj09PW4/dC5kZWZhdWx0U2VsZWN0ZWQ9dC5zZWxlY3RlZD1lLmRlZmF1bHRTZWxlY3RlZDooXCJpbnB1dFwiPT09bnx8XCJ0ZXh0YXJlYVwiPT09bikmJih0LmRlZmF1bHRWYWx1ZT1lLmRlZmF1bHRWYWx1ZSl9fWIuZWFjaCh7YXBwZW5kVG86XCJhcHBlbmRcIixwcmVwZW5kVG86XCJwcmVwZW5kXCIsaW5zZXJ0QmVmb3JlOlwiYmVmb3JlXCIsaW5zZXJ0QWZ0ZXI6XCJhZnRlclwiLHJlcGxhY2VBbGw6XCJyZXBsYWNlV2l0aFwifSxmdW5jdGlvbihlLHQpe2IuZm5bZV09ZnVuY3Rpb24oZSl7dmFyIG4scj0wLGk9W10sbz1iKGUpLGE9by5sZW5ndGgtMTtmb3IoO2E+PXI7cisrKW49cj09PWE/dGhpczp0aGlzLmNsb25lKCEwKSxiKG9bcl0pW3RdKG4pLGQuYXBwbHkoaSxuLmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soaSl9fSk7ZnVuY3Rpb24gT3QoZSxuKXt2YXIgcixvLGE9MCxzPXR5cGVvZiBlLmdldEVsZW1lbnRzQnlUYWdOYW1lIT09aT9lLmdldEVsZW1lbnRzQnlUYWdOYW1lKG58fFwiKlwiKTp0eXBlb2YgZS5xdWVyeVNlbGVjdG9yQWxsIT09aT9lLnF1ZXJ5U2VsZWN0b3JBbGwobnx8XCIqXCIpOnQ7aWYoIXMpZm9yKHM9W10scj1lLmNoaWxkTm9kZXN8fGU7bnVsbCE9KG89clthXSk7YSsrKSFufHxiLm5vZGVOYW1lKG8sbik/cy5wdXNoKG8pOmIubWVyZ2UocyxPdChvLG4pKTtyZXR1cm4gbj09PXR8fG4mJmIubm9kZU5hbWUoZSxuKT9iLm1lcmdlKFtlXSxzKTpzfWZ1bmN0aW9uIEJ0KGUpe050LnRlc3QoZS50eXBlKSYmKGUuZGVmYXVsdENoZWNrZWQ9ZS5jaGVja2VkKX1iLmV4dGVuZCh7Y2xvbmU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdT1iLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKTtpZihiLnN1cHBvcnQuaHRtbDVDbG9uZXx8Yi5pc1hNTERvYyhlKXx8IW10LnRlc3QoXCI8XCIrZS5ub2RlTmFtZStcIj5cIik/bz1lLmNsb25lTm9kZSghMCk6KER0LmlubmVySFRNTD1lLm91dGVySFRNTCxEdC5yZW1vdmVDaGlsZChvPUR0LmZpcnN0Q2hpbGQpKSwhKGIuc3VwcG9ydC5ub0Nsb25lRXZlbnQmJmIuc3VwcG9ydC5ub0Nsb25lQ2hlY2tlZHx8MSE9PWUubm9kZVR5cGUmJjExIT09ZS5ub2RlVHlwZXx8Yi5pc1hNTERvYyhlKSkpZm9yKHI9T3Qobykscz1PdChlKSxhPTA7bnVsbCE9KGk9c1thXSk7KythKXJbYV0mJkZ0KGksclthXSk7aWYodClpZihuKWZvcihzPXN8fE90KGUpLHI9cnx8T3QobyksYT0wO251bGwhPShpPXNbYV0pO2ErKylfdChpLHJbYV0pO2Vsc2UgX3QoZSxvKTtyZXR1cm4gcj1PdChvLFwic2NyaXB0XCIpLHIubGVuZ3RoPjAmJk10KHIsIXUmJk90KGUsXCJzY3JpcHRcIikpLHI9cz1pPW51bGwsb30sYnVpbGRGcmFnbWVudDpmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscyx1LGwsYyxwPWUubGVuZ3RoLGY9ZHQodCksZD1bXSxoPTA7Zm9yKDtwPmg7aCsrKWlmKG89ZVtoXSxvfHwwPT09bylpZihcIm9iamVjdFwiPT09Yi50eXBlKG8pKWIubWVyZ2UoZCxvLm5vZGVUeXBlP1tvXTpvKTtlbHNlIGlmKHd0LnRlc3Qobykpe3M9c3x8Zi5hcHBlbmRDaGlsZCh0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLHU9KGJ0LmV4ZWMobyl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLGM9QXRbdV18fEF0Ll9kZWZhdWx0LHMuaW5uZXJIVE1MPWNbMV0rby5yZXBsYWNlKHZ0LFwiPCQxPjwvJDI+XCIpK2NbMl0saT1jWzBdO3doaWxlKGktLSlzPXMubGFzdENoaWxkO2lmKCFiLnN1cHBvcnQubGVhZGluZ1doaXRlc3BhY2UmJnl0LnRlc3QobykmJmQucHVzaCh0LmNyZWF0ZVRleHROb2RlKHl0LmV4ZWMobylbMF0pKSwhYi5zdXBwb3J0LnRib2R5KXtvPVwidGFibGVcIiE9PXV8fHh0LnRlc3Qobyk/XCI8dGFibGU+XCIhPT1jWzFdfHx4dC50ZXN0KG8pPzA6czpzLmZpcnN0Q2hpbGQsaT1vJiZvLmNoaWxkTm9kZXMubGVuZ3RoO3doaWxlKGktLSliLm5vZGVOYW1lKGw9by5jaGlsZE5vZGVzW2ldLFwidGJvZHlcIikmJiFsLmNoaWxkTm9kZXMubGVuZ3RoJiZvLnJlbW92ZUNoaWxkKGwpXG59Yi5tZXJnZShkLHMuY2hpbGROb2Rlcykscy50ZXh0Q29udGVudD1cIlwiO3doaWxlKHMuZmlyc3RDaGlsZClzLnJlbW92ZUNoaWxkKHMuZmlyc3RDaGlsZCk7cz1mLmxhc3RDaGlsZH1lbHNlIGQucHVzaCh0LmNyZWF0ZVRleHROb2RlKG8pKTtzJiZmLnJlbW92ZUNoaWxkKHMpLGIuc3VwcG9ydC5hcHBlbmRDaGVja2VkfHxiLmdyZXAoT3QoZCxcImlucHV0XCIpLEJ0KSxoPTA7d2hpbGUobz1kW2grK10paWYoKCFyfHwtMT09PWIuaW5BcnJheShvLHIpKSYmKGE9Yi5jb250YWlucyhvLm93bmVyRG9jdW1lbnQsbykscz1PdChmLmFwcGVuZENoaWxkKG8pLFwic2NyaXB0XCIpLGEmJk10KHMpLG4pKXtpPTA7d2hpbGUobz1zW2krK10pa3QudGVzdChvLnR5cGV8fFwiXCIpJiZuLnB1c2gobyl9cmV0dXJuIHM9bnVsbCxmfSxjbGVhbkRhdGE6ZnVuY3Rpb24oZSx0KXt2YXIgbixyLG8sYSxzPTAsdT1iLmV4cGFuZG8sbD1iLmNhY2hlLHA9Yi5zdXBwb3J0LmRlbGV0ZUV4cGFuZG8sZj1iLmV2ZW50LnNwZWNpYWw7Zm9yKDtudWxsIT0obj1lW3NdKTtzKyspaWYoKHR8fGIuYWNjZXB0RGF0YShuKSkmJihvPW5bdV0sYT1vJiZsW29dKSl7aWYoYS5ldmVudHMpZm9yKHIgaW4gYS5ldmVudHMpZltyXT9iLmV2ZW50LnJlbW92ZShuLHIpOmIucmVtb3ZlRXZlbnQobixyLGEuaGFuZGxlKTtsW29dJiYoZGVsZXRlIGxbb10scD9kZWxldGUgblt1XTp0eXBlb2Ygbi5yZW1vdmVBdHRyaWJ1dGUhPT1pP24ucmVtb3ZlQXR0cmlidXRlKHUpOm5bdV09bnVsbCxjLnB1c2gobykpfX19KTt2YXIgUHQsUnQsV3QsJHQ9L2FscGhhXFwoW14pXSpcXCkvaSxJdD0vb3BhY2l0eVxccyo9XFxzKihbXildKikvLHp0PS9eKHRvcHxyaWdodHxib3R0b218bGVmdCkkLyxYdD0vXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sVXQ9L15tYXJnaW4vLFZ0PVJlZ0V4cChcIl4oXCIreCtcIikoLiopJFwiLFwiaVwiKSxZdD1SZWdFeHAoXCJeKFwiK3grXCIpKD8hcHgpW2EteiVdKyRcIixcImlcIiksSnQ9UmVnRXhwKFwiXihbKy1dKT0oXCIreCtcIilcIixcImlcIiksR3Q9e0JPRFk6XCJibG9ja1wifSxRdD17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIn0sS3Q9e2xldHRlclNwYWNpbmc6MCxmb250V2VpZ2h0OjQwMH0sWnQ9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLGVuPVtcIldlYmtpdFwiLFwiT1wiLFwiTW96XCIsXCJtc1wiXTtmdW5jdGlvbiB0bihlLHQpe2lmKHQgaW4gZSlyZXR1cm4gdDt2YXIgbj10LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSkscj10LGk9ZW4ubGVuZ3RoO3doaWxlKGktLSlpZih0PWVuW2ldK24sdCBpbiBlKXJldHVybiB0O3JldHVybiByfWZ1bmN0aW9uIG5uKGUsdCl7cmV0dXJuIGU9dHx8ZSxcIm5vbmVcIj09PWIuY3NzKGUsXCJkaXNwbGF5XCIpfHwhYi5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSl9ZnVuY3Rpb24gcm4oZSx0KXt2YXIgbixyLGksbz1bXSxhPTAscz1lLmxlbmd0aDtmb3IoO3M+YTthKyspcj1lW2FdLHIuc3R5bGUmJihvW2FdPWIuX2RhdGEocixcIm9sZGRpc3BsYXlcIiksbj1yLnN0eWxlLmRpc3BsYXksdD8ob1thXXx8XCJub25lXCIhPT1ufHwoci5zdHlsZS5kaXNwbGF5PVwiXCIpLFwiXCI9PT1yLnN0eWxlLmRpc3BsYXkmJm5uKHIpJiYob1thXT1iLl9kYXRhKHIsXCJvbGRkaXNwbGF5XCIsdW4oci5ub2RlTmFtZSkpKSk6b1thXXx8KGk9bm4ociksKG4mJlwibm9uZVwiIT09bnx8IWkpJiZiLl9kYXRhKHIsXCJvbGRkaXNwbGF5XCIsaT9uOmIuY3NzKHIsXCJkaXNwbGF5XCIpKSkpO2ZvcihhPTA7cz5hO2ErKylyPWVbYV0sci5zdHlsZSYmKHQmJlwibm9uZVwiIT09ci5zdHlsZS5kaXNwbGF5JiZcIlwiIT09ci5zdHlsZS5kaXNwbGF5fHwoci5zdHlsZS5kaXNwbGF5PXQ/b1thXXx8XCJcIjpcIm5vbmVcIikpO3JldHVybiBlfWIuZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oZSxuKXtyZXR1cm4gYi5hY2Nlc3ModGhpcyxmdW5jdGlvbihlLG4scil7dmFyIGksbyxhPXt9LHM9MDtpZihiLmlzQXJyYXkobikpe2ZvcihvPVJ0KGUpLGk9bi5sZW5ndGg7aT5zO3MrKylhW25bc11dPWIuY3NzKGUsbltzXSwhMSxvKTtyZXR1cm4gYX1yZXR1cm4gciE9PXQ/Yi5zdHlsZShlLG4scik6Yi5jc3MoZSxuKX0sZSxuLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHNob3c6ZnVuY3Rpb24oKXtyZXR1cm4gcm4odGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gcm4odGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihlKXt2YXIgdD1cImJvb2xlYW5cIj09dHlwZW9mIGU7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpeyh0P2U6bm4odGhpcykpP2IodGhpcykuc2hvdygpOmIodGhpcykuaGlkZSgpfSl9fSksYi5leHRlbmQoe2Nzc0hvb2tzOntvcGFjaXR5OntnZXQ6ZnVuY3Rpb24oZSx0KXtpZih0KXt2YXIgbj1XdChlLFwib3BhY2l0eVwiKTtyZXR1cm5cIlwiPT09bj9cIjFcIjpufX19fSxjc3NOdW1iZXI6e2NvbHVtbkNvdW50OiEwLGZpbGxPcGFjaXR5OiEwLGZvbnRXZWlnaHQ6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9ycGhhbnM6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwfSxjc3NQcm9wczp7XCJmbG9hdFwiOmIuc3VwcG9ydC5jc3NGbG9hdD9cImNzc0Zsb2F0XCI6XCJzdHlsZUZsb2F0XCJ9LHN0eWxlOmZ1bmN0aW9uKGUsbixyLGkpe2lmKGUmJjMhPT1lLm5vZGVUeXBlJiY4IT09ZS5ub2RlVHlwZSYmZS5zdHlsZSl7dmFyIG8sYSxzLHU9Yi5jYW1lbENhc2UobiksbD1lLnN0eWxlO2lmKG49Yi5jc3NQcm9wc1t1XXx8KGIuY3NzUHJvcHNbdV09dG4obCx1KSkscz1iLmNzc0hvb2tzW25dfHxiLmNzc0hvb2tzW3VdLHI9PT10KXJldHVybiBzJiZcImdldFwiaW4gcyYmKG89cy5nZXQoZSwhMSxpKSkhPT10P286bFtuXTtpZihhPXR5cGVvZiByLFwic3RyaW5nXCI9PT1hJiYobz1KdC5leGVjKHIpKSYmKHI9KG9bMV0rMSkqb1syXStwYXJzZUZsb2F0KGIuY3NzKGUsbikpLGE9XCJudW1iZXJcIiksIShudWxsPT1yfHxcIm51bWJlclwiPT09YSYmaXNOYU4ocil8fChcIm51bWJlclwiIT09YXx8Yi5jc3NOdW1iZXJbdV18fChyKz1cInB4XCIpLGIuc3VwcG9ydC5jbGVhckNsb25lU3R5bGV8fFwiXCIhPT1yfHwwIT09bi5pbmRleE9mKFwiYmFja2dyb3VuZFwiKXx8KGxbbl09XCJpbmhlcml0XCIpLHMmJlwic2V0XCJpbiBzJiYocj1zLnNldChlLHIsaSkpPT09dCkpKXRyeXtsW25dPXJ9Y2F0Y2goYyl7fX19LGNzczpmdW5jdGlvbihlLG4scixpKXt2YXIgbyxhLHMsdT1iLmNhbWVsQ2FzZShuKTtyZXR1cm4gbj1iLmNzc1Byb3BzW3VdfHwoYi5jc3NQcm9wc1t1XT10bihlLnN0eWxlLHUpKSxzPWIuY3NzSG9va3Nbbl18fGIuY3NzSG9va3NbdV0scyYmXCJnZXRcImluIHMmJihhPXMuZ2V0KGUsITAscikpLGE9PT10JiYoYT1XdChlLG4saSkpLFwibm9ybWFsXCI9PT1hJiZuIGluIEt0JiYoYT1LdFtuXSksXCJcIj09PXJ8fHI/KG89cGFyc2VGbG9hdChhKSxyPT09ITB8fGIuaXNOdW1lcmljKG8pP298fDA6YSk6YX0sc3dhcDpmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGE9e307Zm9yKG8gaW4gdClhW29dPWUuc3R5bGVbb10sZS5zdHlsZVtvXT10W29dO2k9bi5hcHBseShlLHJ8fFtdKTtmb3IobyBpbiB0KWUuc3R5bGVbb109YVtvXTtyZXR1cm4gaX19KSxlLmdldENvbXB1dGVkU3R5bGU/KFJ0PWZ1bmN0aW9uKHQpe3JldHVybiBlLmdldENvbXB1dGVkU3R5bGUodCxudWxsKX0sV3Q9ZnVuY3Rpb24oZSxuLHIpe3ZhciBpLG8sYSxzPXJ8fFJ0KGUpLHU9cz9zLmdldFByb3BlcnR5VmFsdWUobil8fHNbbl06dCxsPWUuc3R5bGU7cmV0dXJuIHMmJihcIlwiIT09dXx8Yi5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSl8fCh1PWIuc3R5bGUoZSxuKSksWXQudGVzdCh1KSYmVXQudGVzdChuKSYmKGk9bC53aWR0aCxvPWwubWluV2lkdGgsYT1sLm1heFdpZHRoLGwubWluV2lkdGg9bC5tYXhXaWR0aD1sLndpZHRoPXUsdT1zLndpZHRoLGwud2lkdGg9aSxsLm1pbldpZHRoPW8sbC5tYXhXaWR0aD1hKSksdX0pOm8uZG9jdW1lbnRFbGVtZW50LmN1cnJlbnRTdHlsZSYmKFJ0PWZ1bmN0aW9uKGUpe3JldHVybiBlLmN1cnJlbnRTdHlsZX0sV3Q9ZnVuY3Rpb24oZSxuLHIpe3ZhciBpLG8sYSxzPXJ8fFJ0KGUpLHU9cz9zW25dOnQsbD1lLnN0eWxlO3JldHVybiBudWxsPT11JiZsJiZsW25dJiYodT1sW25dKSxZdC50ZXN0KHUpJiYhenQudGVzdChuKSYmKGk9bC5sZWZ0LG89ZS5ydW50aW1lU3R5bGUsYT1vJiZvLmxlZnQsYSYmKG8ubGVmdD1lLmN1cnJlbnRTdHlsZS5sZWZ0KSxsLmxlZnQ9XCJmb250U2l6ZVwiPT09bj9cIjFlbVwiOnUsdT1sLnBpeGVsTGVmdCtcInB4XCIsbC5sZWZ0PWksYSYmKG8ubGVmdD1hKSksXCJcIj09PXU/XCJhdXRvXCI6dX0pO2Z1bmN0aW9uIG9uKGUsdCxuKXt2YXIgcj1WdC5leGVjKHQpO3JldHVybiByP01hdGgubWF4KDAsclsxXS0obnx8MCkpKyhyWzJdfHxcInB4XCIpOnR9ZnVuY3Rpb24gYW4oZSx0LG4scixpKXt2YXIgbz1uPT09KHI/XCJib3JkZXJcIjpcImNvbnRlbnRcIik/NDpcIndpZHRoXCI9PT10PzE6MCxhPTA7Zm9yKDs0Pm87bys9MilcIm1hcmdpblwiPT09biYmKGErPWIuY3NzKGUsbitadFtvXSwhMCxpKSkscj8oXCJjb250ZW50XCI9PT1uJiYoYS09Yi5jc3MoZSxcInBhZGRpbmdcIitadFtvXSwhMCxpKSksXCJtYXJnaW5cIiE9PW4mJihhLT1iLmNzcyhlLFwiYm9yZGVyXCIrWnRbb10rXCJXaWR0aFwiLCEwLGkpKSk6KGErPWIuY3NzKGUsXCJwYWRkaW5nXCIrWnRbb10sITAsaSksXCJwYWRkaW5nXCIhPT1uJiYoYSs9Yi5jc3MoZSxcImJvcmRlclwiK1p0W29dK1wiV2lkdGhcIiwhMCxpKSkpO3JldHVybiBhfWZ1bmN0aW9uIHNuKGUsdCxuKXt2YXIgcj0hMCxpPVwid2lkdGhcIj09PXQ/ZS5vZmZzZXRXaWR0aDplLm9mZnNldEhlaWdodCxvPVJ0KGUpLGE9Yi5zdXBwb3J0LmJveFNpemluZyYmXCJib3JkZXItYm94XCI9PT1iLmNzcyhlLFwiYm94U2l6aW5nXCIsITEsbyk7aWYoMD49aXx8bnVsbD09aSl7aWYoaT1XdChlLHQsbyksKDA+aXx8bnVsbD09aSkmJihpPWUuc3R5bGVbdF0pLFl0LnRlc3QoaSkpcmV0dXJuIGk7cj1hJiYoYi5zdXBwb3J0LmJveFNpemluZ1JlbGlhYmxlfHxpPT09ZS5zdHlsZVt0XSksaT1wYXJzZUZsb2F0KGkpfHwwfXJldHVybiBpK2FuKGUsdCxufHwoYT9cImJvcmRlclwiOlwiY29udGVudFwiKSxyLG8pK1wicHhcIn1mdW5jdGlvbiB1bihlKXt2YXIgdD1vLG49R3RbZV07cmV0dXJuIG58fChuPWxuKGUsdCksXCJub25lXCIhPT1uJiZufHwoUHQ9KFB0fHxiKFwiPGlmcmFtZSBmcmFtZWJvcmRlcj0nMCcgd2lkdGg9JzAnIGhlaWdodD0nMCcvPlwiKS5jc3MoXCJjc3NUZXh0XCIsXCJkaXNwbGF5OmJsb2NrICFpbXBvcnRhbnRcIikpLmFwcGVuZFRvKHQuZG9jdW1lbnRFbGVtZW50KSx0PShQdFswXS5jb250ZW50V2luZG93fHxQdFswXS5jb250ZW50RG9jdW1lbnQpLmRvY3VtZW50LHQud3JpdGUoXCI8IWRvY3R5cGUgaHRtbD48aHRtbD48Ym9keT5cIiksdC5jbG9zZSgpLG49bG4oZSx0KSxQdC5kZXRhY2goKSksR3RbZV09biksbn1mdW5jdGlvbiBsbihlLHQpe3ZhciBuPWIodC5jcmVhdGVFbGVtZW50KGUpKS5hcHBlbmRUbyh0LmJvZHkpLHI9Yi5jc3MoblswXSxcImRpc3BsYXlcIik7cmV0dXJuIG4ucmVtb3ZlKCkscn1iLmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihlLG4pe2IuY3NzSG9va3Nbbl09e2dldDpmdW5jdGlvbihlLHIsaSl7cmV0dXJuIHI/MD09PWUub2Zmc2V0V2lkdGgmJlh0LnRlc3QoYi5jc3MoZSxcImRpc3BsYXlcIikpP2Iuc3dhcChlLFF0LGZ1bmN0aW9uKCl7cmV0dXJuIHNuKGUsbixpKX0pOnNuKGUsbixpKTp0fSxzZXQ6ZnVuY3Rpb24oZSx0LHIpe3ZhciBpPXImJlJ0KGUpO3JldHVybiBvbihlLHQscj9hbihlLG4scixiLnN1cHBvcnQuYm94U2l6aW5nJiZcImJvcmRlci1ib3hcIj09PWIuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxpKSxpKTowKX19fSksYi5zdXBwb3J0Lm9wYWNpdHl8fChiLmNzc0hvb2tzLm9wYWNpdHk9e2dldDpmdW5jdGlvbihlLHQpe3JldHVybiBJdC50ZXN0KCh0JiZlLmN1cnJlbnRTdHlsZT9lLmN1cnJlbnRTdHlsZS5maWx0ZXI6ZS5zdHlsZS5maWx0ZXIpfHxcIlwiKT8uMDEqcGFyc2VGbG9hdChSZWdFeHAuJDEpK1wiXCI6dD9cIjFcIjpcIlwifSxzZXQ6ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLnN0eWxlLHI9ZS5jdXJyZW50U3R5bGUsaT1iLmlzTnVtZXJpYyh0KT9cImFscGhhKG9wYWNpdHk9XCIrMTAwKnQrXCIpXCI6XCJcIixvPXImJnIuZmlsdGVyfHxuLmZpbHRlcnx8XCJcIjtuLnpvb209MSwodD49MXx8XCJcIj09PXQpJiZcIlwiPT09Yi50cmltKG8ucmVwbGFjZSgkdCxcIlwiKSkmJm4ucmVtb3ZlQXR0cmlidXRlJiYobi5yZW1vdmVBdHRyaWJ1dGUoXCJmaWx0ZXJcIiksXCJcIj09PXR8fHImJiFyLmZpbHRlcil8fChuLmZpbHRlcj0kdC50ZXN0KG8pP28ucmVwbGFjZSgkdCxpKTpvK1wiIFwiK2kpfX0pLGIoZnVuY3Rpb24oKXtiLnN1cHBvcnQucmVsaWFibGVNYXJnaW5SaWdodHx8KGIuY3NzSG9va3MubWFyZ2luUmlnaHQ9e2dldDpmdW5jdGlvbihlLG4pe3JldHVybiBuP2Iuc3dhcChlLHtkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCJ9LFd0LFtlLFwibWFyZ2luUmlnaHRcIl0pOnR9fSksIWIuc3VwcG9ydC5waXhlbFBvc2l0aW9uJiZiLmZuLnBvc2l0aW9uJiZiLmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGUsbil7Yi5jc3NIb29rc1tuXT17Z2V0OmZ1bmN0aW9uKGUscil7cmV0dXJuIHI/KHI9V3QoZSxuKSxZdC50ZXN0KHIpP2IoZSkucG9zaXRpb24oKVtuXStcInB4XCI6cik6dH19fSl9KSxiLmV4cHImJmIuZXhwci5maWx0ZXJzJiYoYi5leHByLmZpbHRlcnMuaGlkZGVuPWZ1bmN0aW9uKGUpe3JldHVybiAwPj1lLm9mZnNldFdpZHRoJiYwPj1lLm9mZnNldEhlaWdodHx8IWIuc3VwcG9ydC5yZWxpYWJsZUhpZGRlbk9mZnNldHMmJlwibm9uZVwiPT09KGUuc3R5bGUmJmUuc3R5bGUuZGlzcGxheXx8Yi5jc3MoZSxcImRpc3BsYXlcIikpfSxiLmV4cHIuZmlsdGVycy52aXNpYmxlPWZ1bmN0aW9uKGUpe3JldHVybiFiLmV4cHIuZmlsdGVycy5oaWRkZW4oZSl9KSxiLmVhY2goe21hcmdpbjpcIlwiLHBhZGRpbmc6XCJcIixib3JkZXI6XCJXaWR0aFwifSxmdW5jdGlvbihlLHQpe2IuY3NzSG9va3NbZSt0XT17ZXhwYW5kOmZ1bmN0aW9uKG4pe3ZhciByPTAsaT17fSxvPVwic3RyaW5nXCI9PXR5cGVvZiBuP24uc3BsaXQoXCIgXCIpOltuXTtmb3IoOzQ+cjtyKyspaVtlK1p0W3JdK3RdPW9bcl18fG9bci0yXXx8b1swXTtyZXR1cm4gaX19LFV0LnRlc3QoZSl8fChiLmNzc0hvb2tzW2UrdF0uc2V0PW9uKX0pO3ZhciBjbj0vJTIwL2cscG49L1xcW1xcXSQvLGZuPS9cXHI/XFxuL2csZG49L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLGhuPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtiLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIGIucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgZT1iLnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBlP2IubWFrZUFycmF5KGUpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgZT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIWIodGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJmhuLnRlc3QodGhpcy5ub2RlTmFtZSkmJiFkbi50ZXN0KGUpJiYodGhpcy5jaGVja2VkfHwhTnQudGVzdChlKSl9KS5tYXAoZnVuY3Rpb24oZSx0KXt2YXIgbj1iKHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1uP251bGw6Yi5pc0FycmF5KG4pP2IubWFwKG4sZnVuY3Rpb24oZSl7cmV0dXJue25hbWU6dC5uYW1lLHZhbHVlOmUucmVwbGFjZShmbixcIlxcclxcblwiKX19KTp7bmFtZTp0Lm5hbWUsdmFsdWU6bi5yZXBsYWNlKGZuLFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pLGIucGFyYW09ZnVuY3Rpb24oZSxuKXt2YXIgcixpPVtdLG89ZnVuY3Rpb24oZSx0KXt0PWIuaXNGdW5jdGlvbih0KT90KCk6bnVsbD09dD9cIlwiOnQsaVtpLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGUpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudCh0KX07aWYobj09PXQmJihuPWIuYWpheFNldHRpbmdzJiZiLmFqYXhTZXR0aW5ncy50cmFkaXRpb25hbCksYi5pc0FycmF5KGUpfHxlLmpxdWVyeSYmIWIuaXNQbGFpbk9iamVjdChlKSliLmVhY2goZSxmdW5jdGlvbigpe28odGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IociBpbiBlKWduKHIsZVtyXSxuLG8pO3JldHVybiBpLmpvaW4oXCImXCIpLnJlcGxhY2UoY24sXCIrXCIpfTtmdW5jdGlvbiBnbihlLHQsbixyKXt2YXIgaTtpZihiLmlzQXJyYXkodCkpYi5lYWNoKHQsZnVuY3Rpb24odCxpKXtufHxwbi50ZXN0KGUpP3IoZSxpKTpnbihlK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgaT90OlwiXCIpK1wiXVwiLGksbixyKX0pO2Vsc2UgaWYobnx8XCJvYmplY3RcIiE9PWIudHlwZSh0KSlyKGUsdCk7ZWxzZSBmb3IoaSBpbiB0KWduKGUrXCJbXCIraStcIl1cIix0W2ldLG4scil9Yi5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IGxvYWQgcmVzaXplIHNjcm9sbCB1bmxvYWQgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBlcnJvciBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihlLHQpe2IuZm5bdF09ZnVuY3Rpb24oZSxuKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4wP3RoaXMub24odCxudWxsLGUsbik6dGhpcy50cmlnZ2VyKHQpfX0pLGIuZm4uaG92ZXI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGUpLm1vdXNlbGVhdmUodHx8ZSl9O3ZhciBtbix5bix2bj1iLm5vdygpLGJuPS9cXD8vLHhuPS8jLiokLyx3bj0vKFs/Jl0pXz1bXiZdKi8sVG49L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopXFxyPyQvZ20sTm49L14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8sQ249L14oPzpHRVR8SEVBRCkkLyxrbj0vXlxcL1xcLy8sRW49L14oW1xcdy4rLV0rOikoPzpcXC9cXC8oW15cXC8/IzpdKikoPzo6KFxcZCspfCl8KS8sU249Yi5mbi5sb2FkLEFuPXt9LGpuPXt9LERuPVwiKi9cIi5jb25jYXQoXCIqXCIpO3RyeXt5bj1hLmhyZWZ9Y2F0Y2goTG4pe3luPW8uY3JlYXRlRWxlbWVudChcImFcIikseW4uaHJlZj1cIlwiLHluPXluLmhyZWZ9bW49RW4uZXhlYyh5bi50b0xvd2VyQ2FzZSgpKXx8W107ZnVuY3Rpb24gSG4oZSl7cmV0dXJuIGZ1bmN0aW9uKHQsbil7XCJzdHJpbmdcIiE9dHlwZW9mIHQmJihuPXQsdD1cIipcIik7dmFyIHIsaT0wLG89dC50b0xvd2VyQ2FzZSgpLm1hdGNoKHcpfHxbXTtpZihiLmlzRnVuY3Rpb24obikpd2hpbGUocj1vW2krK10pXCIrXCI9PT1yWzBdPyhyPXIuc2xpY2UoMSl8fFwiKlwiLChlW3JdPWVbcl18fFtdKS51bnNoaWZ0KG4pKTooZVtyXT1lW3JdfHxbXSkucHVzaChuKX19ZnVuY3Rpb24gcW4oZSxuLHIsaSl7dmFyIG89e30sYT1lPT09am47ZnVuY3Rpb24gcyh1KXt2YXIgbDtyZXR1cm4gb1t1XT0hMCxiLmVhY2goZVt1XXx8W10sZnVuY3Rpb24oZSx1KXt2YXIgYz11KG4scixpKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgY3x8YXx8b1tjXT9hPyEobD1jKTp0OihuLmRhdGFUeXBlcy51bnNoaWZ0KGMpLHMoYyksITEpfSksbH1yZXR1cm4gcyhuLmRhdGFUeXBlc1swXSl8fCFvW1wiKlwiXSYmcyhcIipcIil9ZnVuY3Rpb24gTW4oZSxuKXt2YXIgcixpLG89Yi5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihpIGluIG4pbltpXSE9PXQmJigob1tpXT9lOnJ8fChyPXt9KSlbaV09bltpXSk7cmV0dXJuIHImJmIuZXh0ZW5kKCEwLGUsciksZX1iLmZuLmxvYWQ9ZnVuY3Rpb24oZSxuLHIpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlJiZTbilyZXR1cm4gU24uYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciBpLG8sYSxzPXRoaXMsdT1lLmluZGV4T2YoXCIgXCIpO3JldHVybiB1Pj0wJiYoaT1lLnNsaWNlKHUsZS5sZW5ndGgpLGU9ZS5zbGljZSgwLHUpKSxiLmlzRnVuY3Rpb24obik/KHI9bixuPXQpOm4mJlwib2JqZWN0XCI9PXR5cGVvZiBuJiYoYT1cIlBPU1RcIikscy5sZW5ndGg+MCYmYi5hamF4KHt1cmw6ZSx0eXBlOmEsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTpufSkuZG9uZShmdW5jdGlvbihlKXtvPWFyZ3VtZW50cyxzLmh0bWwoaT9iKFwiPGRpdj5cIikuYXBwZW5kKGIucGFyc2VIVE1MKGUpKS5maW5kKGkpOmUpfSkuY29tcGxldGUociYmZnVuY3Rpb24oZSx0KXtzLmVhY2gocixvfHxbZS5yZXNwb25zZVRleHQsdCxlXSl9KSx0aGlzfSxiLmVhY2goW1wiYWpheFN0YXJ0XCIsXCJhamF4U3RvcFwiLFwiYWpheENvbXBsZXRlXCIsXCJhamF4RXJyb3JcIixcImFqYXhTdWNjZXNzXCIsXCJhamF4U2VuZFwiXSxmdW5jdGlvbihlLHQpe2IuZm5bdF09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMub24odCxlKX19KSxiLmVhY2goW1wiZ2V0XCIsXCJwb3N0XCJdLGZ1bmN0aW9uKGUsbil7YltuXT1mdW5jdGlvbihlLHIsaSxvKXtyZXR1cm4gYi5pc0Z1bmN0aW9uKHIpJiYobz1vfHxpLGk9cixyPXQpLGIuYWpheCh7dXJsOmUsdHlwZTpuLGRhdGFUeXBlOm8sZGF0YTpyLHN1Y2Nlc3M6aX0pfX0pLGIuZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDp5bix0eXBlOlwiR0VUXCIsaXNMb2NhbDpObi50ZXN0KG1uWzFdKSxnbG9iYWw6ITAscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixhY2NlcHRzOntcIipcIjpEbix0ZXh0OlwidGV4dC9wbGFpblwiLGh0bWw6XCJ0ZXh0L2h0bWxcIix4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwifSxjb250ZW50czp7eG1sOi94bWwvLGh0bWw6L2h0bWwvLGpzb246L2pzb24vfSxyZXNwb25zZUZpZWxkczp7eG1sOlwicmVzcG9uc2VYTUxcIix0ZXh0OlwicmVzcG9uc2VUZXh0XCJ9LGNvbnZlcnRlcnM6e1wiKiB0ZXh0XCI6ZS5TdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOmIucGFyc2VKU09OLFwidGV4dCB4bWxcIjpiLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD9NbihNbihlLGIuYWpheFNldHRpbmdzKSx0KTpNbihiLmFqYXhTZXR0aW5ncyxlKX0sYWpheFByZWZpbHRlcjpIbihBbiksYWpheFRyYW5zcG9ydDpIbihqbiksYWpheDpmdW5jdGlvbihlLG4pe1wib2JqZWN0XCI9PXR5cGVvZiBlJiYobj1lLGU9dCksbj1ufHx7fTt2YXIgcixpLG8sYSxzLHUsbCxjLHA9Yi5hamF4U2V0dXAoe30sbiksZj1wLmNvbnRleHR8fHAsZD1wLmNvbnRleHQmJihmLm5vZGVUeXBlfHxmLmpxdWVyeSk/YihmKTpiLmV2ZW50LGg9Yi5EZWZlcnJlZCgpLGc9Yi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxtPXAuc3RhdHVzQ29kZXx8e30seT17fSx2PXt9LHg9MCxUPVwiY2FuY2VsZWRcIixOPXtyZWFkeVN0YXRlOjAsZ2V0UmVzcG9uc2VIZWFkZXI6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoMj09PXgpe2lmKCFjKXtjPXt9O3doaWxlKHQ9VG4uZXhlYyhhKSljW3RbMV0udG9Mb3dlckNhc2UoKV09dFsyXX10PWNbZS50b0xvd2VyQ2FzZSgpXX1yZXR1cm4gbnVsbD09dD9udWxsOnR9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiAyPT09eD9hOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuIHh8fChlPXZbbl09dltuXXx8ZSx5W2VdPXQpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuIHh8fChwLm1pbWVUeXBlPWUpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoZSlpZigyPngpZm9yKHQgaW4gZSltW3RdPVttW3RdLGVbdF1dO2Vsc2UgTi5hbHdheXMoZVtOLnN0YXR1c10pO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihlKXt2YXIgdD1lfHxUO3JldHVybiBsJiZsLmFib3J0KHQpLGsoMCx0KSx0aGlzfX07aWYoaC5wcm9taXNlKE4pLmNvbXBsZXRlPWcuYWRkLE4uc3VjY2Vzcz1OLmRvbmUsTi5lcnJvcj1OLmZhaWwscC51cmw9KChlfHxwLnVybHx8eW4pK1wiXCIpLnJlcGxhY2UoeG4sXCJcIikucmVwbGFjZShrbixtblsxXStcIi8vXCIpLHAudHlwZT1uLm1ldGhvZHx8bi50eXBlfHxwLm1ldGhvZHx8cC50eXBlLHAuZGF0YVR5cGVzPWIudHJpbShwLmRhdGFUeXBlfHxcIipcIikudG9Mb3dlckNhc2UoKS5tYXRjaCh3KXx8W1wiXCJdLG51bGw9PXAuY3Jvc3NEb21haW4mJihyPUVuLmV4ZWMocC51cmwudG9Mb3dlckNhc2UoKSkscC5jcm9zc0RvbWFpbj0hKCFyfHxyWzFdPT09bW5bMV0mJnJbMl09PT1tblsyXSYmKHJbM118fChcImh0dHA6XCI9PT1yWzFdPzgwOjQ0MykpPT0obW5bM118fChcImh0dHA6XCI9PT1tblsxXT84MDo0NDMpKSkpLHAuZGF0YSYmcC5wcm9jZXNzRGF0YSYmXCJzdHJpbmdcIiE9dHlwZW9mIHAuZGF0YSYmKHAuZGF0YT1iLnBhcmFtKHAuZGF0YSxwLnRyYWRpdGlvbmFsKSkscW4oQW4scCxuLE4pLDI9PT14KXJldHVybiBOO3U9cC5nbG9iYWwsdSYmMD09PWIuYWN0aXZlKysmJmIuZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSxwLnR5cGU9cC50eXBlLnRvVXBwZXJDYXNlKCkscC5oYXNDb250ZW50PSFDbi50ZXN0KHAudHlwZSksbz1wLnVybCxwLmhhc0NvbnRlbnR8fChwLmRhdGEmJihvPXAudXJsKz0oYm4udGVzdChvKT9cIiZcIjpcIj9cIikrcC5kYXRhLGRlbGV0ZSBwLmRhdGEpLHAuY2FjaGU9PT0hMSYmKHAudXJsPXduLnRlc3Qobyk/by5yZXBsYWNlKHduLFwiJDFfPVwiK3ZuKyspOm8rKGJuLnRlc3Qobyk/XCImXCI6XCI/XCIpK1wiXz1cIit2bisrKSkscC5pZk1vZGlmaWVkJiYoYi5sYXN0TW9kaWZpZWRbb10mJk4uc2V0UmVxdWVzdEhlYWRlcihcIklmLU1vZGlmaWVkLVNpbmNlXCIsYi5sYXN0TW9kaWZpZWRbb10pLGIuZXRhZ1tvXSYmTi5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLGIuZXRhZ1tvXSkpLChwLmRhdGEmJnAuaGFzQ29udGVudCYmcC5jb250ZW50VHlwZSE9PSExfHxuLmNvbnRlbnRUeXBlKSYmTi5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIscC5jb250ZW50VHlwZSksTi5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIscC5kYXRhVHlwZXNbMF0mJnAuYWNjZXB0c1twLmRhdGFUeXBlc1swXV0/cC5hY2NlcHRzW3AuZGF0YVR5cGVzWzBdXSsoXCIqXCIhPT1wLmRhdGFUeXBlc1swXT9cIiwgXCIrRG4rXCI7IHE9MC4wMVwiOlwiXCIpOnAuYWNjZXB0c1tcIipcIl0pO2ZvcihpIGluIHAuaGVhZGVycylOLnNldFJlcXVlc3RIZWFkZXIoaSxwLmhlYWRlcnNbaV0pO2lmKHAuYmVmb3JlU2VuZCYmKHAuYmVmb3JlU2VuZC5jYWxsKGYsTixwKT09PSExfHwyPT09eCkpcmV0dXJuIE4uYWJvcnQoKTtUPVwiYWJvcnRcIjtmb3IoaSBpbntzdWNjZXNzOjEsZXJyb3I6MSxjb21wbGV0ZToxfSlOW2ldKHBbaV0pO2lmKGw9cW4oam4scCxuLE4pKXtOLnJlYWR5U3RhdGU9MSx1JiZkLnRyaWdnZXIoXCJhamF4U2VuZFwiLFtOLHBdKSxwLmFzeW5jJiZwLnRpbWVvdXQ+MCYmKHM9c2V0VGltZW91dChmdW5jdGlvbigpe04uYWJvcnQoXCJ0aW1lb3V0XCIpfSxwLnRpbWVvdXQpKTt0cnl7eD0xLGwuc2VuZCh5LGspfWNhdGNoKEMpe2lmKCEoMj54KSl0aHJvdyBDO2soLTEsQyl9fWVsc2UgaygtMSxcIk5vIFRyYW5zcG9ydFwiKTtmdW5jdGlvbiBrKGUsbixyLGkpe3ZhciBjLHksdix3LFQsQz1uOzIhPT14JiYoeD0yLHMmJmNsZWFyVGltZW91dChzKSxsPXQsYT1pfHxcIlwiLE4ucmVhZHlTdGF0ZT1lPjA/NDowLHImJih3PV9uKHAsTixyKSksZT49MjAwJiYzMDA+ZXx8MzA0PT09ZT8ocC5pZk1vZGlmaWVkJiYoVD1OLmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSxUJiYoYi5sYXN0TW9kaWZpZWRbb109VCksVD1OLmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSxUJiYoYi5ldGFnW29dPVQpKSwyMDQ9PT1lPyhjPSEwLEM9XCJub2NvbnRlbnRcIik6MzA0PT09ZT8oYz0hMCxDPVwibm90bW9kaWZpZWRcIik6KGM9Rm4ocCx3KSxDPWMuc3RhdGUseT1jLmRhdGEsdj1jLmVycm9yLGM9IXYpKToodj1DLChlfHwhQykmJihDPVwiZXJyb3JcIiwwPmUmJihlPTApKSksTi5zdGF0dXM9ZSxOLnN0YXR1c1RleHQ9KG58fEMpK1wiXCIsYz9oLnJlc29sdmVXaXRoKGYsW3ksQyxOXSk6aC5yZWplY3RXaXRoKGYsW04sQyx2XSksTi5zdGF0dXNDb2RlKG0pLG09dCx1JiZkLnRyaWdnZXIoYz9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbTixwLGM/eTp2XSksZy5maXJlV2l0aChmLFtOLENdKSx1JiYoZC50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW04scF0pLC0tYi5hY3RpdmV8fGIuZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIE59LGdldFNjcmlwdDpmdW5jdGlvbihlLG4pe3JldHVybiBiLmdldChlLHQsbixcInNjcmlwdFwiKX0sZ2V0SlNPTjpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGIuZ2V0KGUsdCxuLFwianNvblwiKX19KTtmdW5jdGlvbiBfbihlLG4scil7dmFyIGksbyxhLHMsdT1lLmNvbnRlbnRzLGw9ZS5kYXRhVHlwZXMsYz1lLnJlc3BvbnNlRmllbGRzO2ZvcihzIGluIGMpcyBpbiByJiYobltjW3NdXT1yW3NdKTt3aGlsZShcIipcIj09PWxbMF0pbC5zaGlmdCgpLG89PT10JiYobz1lLm1pbWVUeXBlfHxuLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihvKWZvcihzIGluIHUpaWYodVtzXSYmdVtzXS50ZXN0KG8pKXtsLnVuc2hpZnQocyk7YnJlYWt9aWYobFswXWluIHIpYT1sWzBdO2Vsc2V7Zm9yKHMgaW4gcil7aWYoIWxbMF18fGUuY29udmVydGVyc1tzK1wiIFwiK2xbMF1dKXthPXM7YnJlYWt9aXx8KGk9cyl9YT1hfHxpfXJldHVybiBhPyhhIT09bFswXSYmbC51bnNoaWZ0KGEpLHJbYV0pOnR9ZnVuY3Rpb24gRm4oZSx0KXt2YXIgbixyLGksbyxhPXt9LHM9MCx1PWUuZGF0YVR5cGVzLnNsaWNlKCksbD11WzBdO2lmKGUuZGF0YUZpbHRlciYmKHQ9ZS5kYXRhRmlsdGVyKHQsZS5kYXRhVHlwZSkpLHVbMV0pZm9yKGkgaW4gZS5jb252ZXJ0ZXJzKWFbaS50b0xvd2VyQ2FzZSgpXT1lLmNvbnZlcnRlcnNbaV07Zm9yKDtyPXVbKytzXTspaWYoXCIqXCIhPT1yKXtpZihcIipcIiE9PWwmJmwhPT1yKXtpZihpPWFbbCtcIiBcIityXXx8YVtcIiogXCIrcl0sIWkpZm9yKG4gaW4gYSlpZihvPW4uc3BsaXQoXCIgXCIpLG9bMV09PT1yJiYoaT1hW2wrXCIgXCIrb1swXV18fGFbXCIqIFwiK29bMF1dKSl7aT09PSEwP2k9YVtuXTphW25dIT09ITAmJihyPW9bMF0sdS5zcGxpY2Uocy0tLDAscikpO2JyZWFrfWlmKGkhPT0hMClpZihpJiZlW1widGhyb3dzXCJdKXQ9aSh0KTtlbHNlIHRyeXt0PWkodCl9Y2F0Y2goYyl7cmV0dXJue3N0YXRlOlwicGFyc2VyZXJyb3JcIixlcnJvcjppP2M6XCJObyBjb252ZXJzaW9uIGZyb20gXCIrbCtcIiB0byBcIityfX19bD1yfXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOnR9fWIuYWpheFNldHVwKHthY2NlcHRzOntzY3JpcHQ6XCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdFwifSxjb250ZW50czp7c2NyaXB0Oi8oPzpqYXZhfGVjbWEpc2NyaXB0L30sY29udmVydGVyczp7XCJ0ZXh0IHNjcmlwdFwiOmZ1bmN0aW9uKGUpe3JldHVybiBiLmdsb2JhbEV2YWwoZSksZX19fSksYi5hamF4UHJlZmlsdGVyKFwic2NyaXB0XCIsZnVuY3Rpb24oZSl7ZS5jYWNoZT09PXQmJihlLmNhY2hlPSExKSxlLmNyb3NzRG9tYWluJiYoZS50eXBlPVwiR0VUXCIsZS5nbG9iYWw9ITEpfSksYi5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24oZSl7aWYoZS5jcm9zc0RvbWFpbil7dmFyIG4scj1vLmhlYWR8fGIoXCJoZWFkXCIpWzBdfHxvLmRvY3VtZW50RWxlbWVudDtyZXR1cm57c2VuZDpmdW5jdGlvbih0LGkpe249by5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLG4uYXN5bmM9ITAsZS5zY3JpcHRDaGFyc2V0JiYobi5jaGFyc2V0PWUuc2NyaXB0Q2hhcnNldCksbi5zcmM9ZS51cmwsbi5vbmxvYWQ9bi5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oZSx0KXsodHx8IW4ucmVhZHlTdGF0ZXx8L2xvYWRlZHxjb21wbGV0ZS8udGVzdChuLnJlYWR5U3RhdGUpKSYmKG4ub25sb2FkPW4ub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsbi5wYXJlbnROb2RlJiZuLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobiksbj1udWxsLHR8fGkoMjAwLFwic3VjY2Vzc1wiKSl9LHIuaW5zZXJ0QmVmb3JlKG4sci5maXJzdENoaWxkKX0sYWJvcnQ6ZnVuY3Rpb24oKXtuJiZuLm9ubG9hZCh0LCEwKX19fX0pO3ZhciBPbj1bXSxCbj0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO2IuYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBlPU9uLnBvcCgpfHxiLmV4cGFuZG8rXCJfXCIrdm4rKztyZXR1cm4gdGhpc1tlXT0hMCxlfX0pLGIuYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihuLHIsaSl7dmFyIG8sYSxzLHU9bi5qc29ucCE9PSExJiYoQm4udGVzdChuLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2Ygbi5kYXRhJiYhKG4uY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJkJuLnRlc3Qobi5kYXRhKSYmXCJkYXRhXCIpO3JldHVybiB1fHxcImpzb25wXCI9PT1uLmRhdGFUeXBlc1swXT8obz1uLmpzb25wQ2FsbGJhY2s9Yi5pc0Z1bmN0aW9uKG4uanNvbnBDYWxsYmFjayk/bi5qc29ucENhbGxiYWNrKCk6bi5qc29ucENhbGxiYWNrLHU/blt1XT1uW3VdLnJlcGxhY2UoQm4sXCIkMVwiK28pOm4uanNvbnAhPT0hMSYmKG4udXJsKz0oYm4udGVzdChuLnVybCk/XCImXCI6XCI/XCIpK24uanNvbnArXCI9XCIrbyksbi5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gc3x8Yi5lcnJvcihvK1wiIHdhcyBub3QgY2FsbGVkXCIpLHNbMF19LG4uZGF0YVR5cGVzWzBdPVwianNvblwiLGE9ZVtvXSxlW29dPWZ1bmN0aW9uKCl7cz1hcmd1bWVudHN9LGkuYWx3YXlzKGZ1bmN0aW9uKCl7ZVtvXT1hLG5bb10mJihuLmpzb25wQ2FsbGJhY2s9ci5qc29ucENhbGxiYWNrLE9uLnB1c2gobykpLHMmJmIuaXNGdW5jdGlvbihhKSYmYShzWzBdKSxzPWE9dH0pLFwic2NyaXB0XCIpOnR9KTt2YXIgUG4sUm4sV249MCwkbj1lLkFjdGl2ZVhPYmplY3QmJmZ1bmN0aW9uKCl7dmFyIGU7Zm9yKGUgaW4gUG4pUG5bZV0odCwhMCl9O2Z1bmN0aW9uIEluKCl7dHJ5e3JldHVybiBuZXcgZS5YTUxIdHRwUmVxdWVzdH1jYXRjaCh0KXt9fWZ1bmN0aW9uIHpuKCl7dHJ5e3JldHVybiBuZXcgZS5BY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIil9Y2F0Y2godCl7fX1iLmFqYXhTZXR0aW5ncy54aHI9ZS5BY3RpdmVYT2JqZWN0P2Z1bmN0aW9uKCl7cmV0dXJuIXRoaXMuaXNMb2NhbCYmSW4oKXx8em4oKX06SW4sUm49Yi5hamF4U2V0dGluZ3MueGhyKCksYi5zdXBwb3J0LmNvcnM9ISFSbiYmXCJ3aXRoQ3JlZGVudGlhbHNcImluIFJuLFJuPWIuc3VwcG9ydC5hamF4PSEhUm4sUm4mJmIuYWpheFRyYW5zcG9ydChmdW5jdGlvbihuKXtpZighbi5jcm9zc0RvbWFpbnx8Yi5zdXBwb3J0LmNvcnMpe3ZhciByO3JldHVybntzZW5kOmZ1bmN0aW9uKGksbyl7dmFyIGEscyx1PW4ueGhyKCk7aWYobi51c2VybmFtZT91Lm9wZW4obi50eXBlLG4udXJsLG4uYXN5bmMsbi51c2VybmFtZSxuLnBhc3N3b3JkKTp1Lm9wZW4obi50eXBlLG4udXJsLG4uYXN5bmMpLG4ueGhyRmllbGRzKWZvcihzIGluIG4ueGhyRmllbGRzKXVbc109bi54aHJGaWVsZHNbc107bi5taW1lVHlwZSYmdS5vdmVycmlkZU1pbWVUeXBlJiZ1Lm92ZXJyaWRlTWltZVR5cGUobi5taW1lVHlwZSksbi5jcm9zc0RvbWFpbnx8aVtcIlgtUmVxdWVzdGVkLVdpdGhcIl18fChpW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCIpO3RyeXtmb3IocyBpbiBpKXUuc2V0UmVxdWVzdEhlYWRlcihzLGlbc10pfWNhdGNoKGwpe311LnNlbmQobi5oYXNDb250ZW50JiZuLmRhdGF8fG51bGwpLHI9ZnVuY3Rpb24oZSxpKXt2YXIgcyxsLGMscDt0cnl7aWYociYmKGl8fDQ9PT11LnJlYWR5U3RhdGUpKWlmKHI9dCxhJiYodS5vbnJlYWR5c3RhdGVjaGFuZ2U9Yi5ub29wLCRuJiZkZWxldGUgUG5bYV0pLGkpNCE9PXUucmVhZHlTdGF0ZSYmdS5hYm9ydCgpO2Vsc2V7cD17fSxzPXUuc3RhdHVzLGw9dS5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSxcInN0cmluZ1wiPT10eXBlb2YgdS5yZXNwb25zZVRleHQmJihwLnRleHQ9dS5yZXNwb25zZVRleHQpO3RyeXtjPXUuc3RhdHVzVGV4dH1jYXRjaChmKXtjPVwiXCJ9c3x8IW4uaXNMb2NhbHx8bi5jcm9zc0RvbWFpbj8xMjIzPT09cyYmKHM9MjA0KTpzPXAudGV4dD8yMDA6NDA0fX1jYXRjaChkKXtpfHxvKC0xLGQpfXAmJm8ocyxjLHAsbCl9LG4uYXN5bmM/ND09PXUucmVhZHlTdGF0ZT9zZXRUaW1lb3V0KHIpOihhPSsrV24sJG4mJihQbnx8KFBuPXt9LGIoZSkudW5sb2FkKCRuKSksUG5bYV09ciksdS5vbnJlYWR5c3RhdGVjaGFuZ2U9cik6cigpfSxhYm9ydDpmdW5jdGlvbigpe3ImJnIodCwhMCl9fX19KTt2YXIgWG4sVW4sVm49L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLFluPVJlZ0V4cChcIl4oPzooWystXSk9fCkoXCIreCtcIikoW2EteiVdKikkXCIsXCJpXCIpLEpuPS9xdWV1ZUhvb2tzJC8sR249W25yXSxRbj17XCIqXCI6W2Z1bmN0aW9uKGUsdCl7dmFyIG4scixpPXRoaXMuY3JlYXRlVHdlZW4oZSx0KSxvPVluLmV4ZWModCksYT1pLmN1cigpLHM9K2F8fDAsdT0xLGw9MjA7aWYobyl7aWYobj0rb1syXSxyPW9bM118fChiLmNzc051bWJlcltlXT9cIlwiOlwicHhcIiksXCJweFwiIT09ciYmcyl7cz1iLmNzcyhpLmVsZW0sZSwhMCl8fG58fDE7ZG8gdT11fHxcIi41XCIscy89dSxiLnN0eWxlKGkuZWxlbSxlLHMrcik7d2hpbGUodSE9PSh1PWkuY3VyKCkvYSkmJjEhPT11JiYtLWwpfWkudW5pdD1yLGkuc3RhcnQ9cyxpLmVuZD1vWzFdP3MrKG9bMV0rMSkqbjpufXJldHVybiBpfV19O2Z1bmN0aW9uIEtuKCl7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtYbj10fSksWG49Yi5ub3coKX1mdW5jdGlvbiBabihlLHQpe2IuZWFjaCh0LGZ1bmN0aW9uKHQsbil7dmFyIHI9KFFuW3RdfHxbXSkuY29uY2F0KFFuW1wiKlwiXSksaT0wLG89ci5sZW5ndGg7Zm9yKDtvPmk7aSsrKWlmKHJbaV0uY2FsbChlLHQsbikpcmV0dXJufSl9ZnVuY3Rpb24gZXIoZSx0LG4pe3ZhciByLGksbz0wLGE9R24ubGVuZ3RoLHM9Yi5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbigpe2RlbGV0ZSB1LmVsZW19KSx1PWZ1bmN0aW9uKCl7aWYoaSlyZXR1cm4hMTt2YXIgdD1Ybnx8S24oKSxuPU1hdGgubWF4KDAsbC5zdGFydFRpbWUrbC5kdXJhdGlvbi10KSxyPW4vbC5kdXJhdGlvbnx8MCxvPTEtcixhPTAsdT1sLnR3ZWVucy5sZW5ndGg7Zm9yKDt1PmE7YSsrKWwudHdlZW5zW2FdLnJ1bihvKTtyZXR1cm4gcy5ub3RpZnlXaXRoKGUsW2wsbyxuXSksMT5vJiZ1P246KHMucmVzb2x2ZVdpdGgoZSxbbF0pLCExKX0sbD1zLnByb21pc2Uoe2VsZW06ZSxwcm9wczpiLmV4dGVuZCh7fSx0KSxvcHRzOmIuZXh0ZW5kKCEwLHtzcGVjaWFsRWFzaW5nOnt9fSxuKSxvcmlnaW5hbFByb3BlcnRpZXM6dCxvcmlnaW5hbE9wdGlvbnM6bixzdGFydFRpbWU6WG58fEtuKCksZHVyYXRpb246bi5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24odCxuKXt2YXIgcj1iLlR3ZWVuKGUsbC5vcHRzLHQsbixsLm9wdHMuc3BlY2lhbEVhc2luZ1t0XXx8bC5vcHRzLmVhc2luZyk7cmV0dXJuIGwudHdlZW5zLnB1c2gocikscn0sc3RvcDpmdW5jdGlvbih0KXt2YXIgbj0wLHI9dD9sLnR3ZWVucy5sZW5ndGg6MDtpZihpKXJldHVybiB0aGlzO2ZvcihpPSEwO3I+bjtuKyspbC50d2VlbnNbbl0ucnVuKDEpO3JldHVybiB0P3MucmVzb2x2ZVdpdGgoZSxbbCx0XSk6cy5yZWplY3RXaXRoKGUsW2wsdF0pLHRoaXN9fSksYz1sLnByb3BzO2Zvcih0cihjLGwub3B0cy5zcGVjaWFsRWFzaW5nKTthPm87bysrKWlmKHI9R25bb10uY2FsbChsLGUsYyxsLm9wdHMpKXJldHVybiByO3JldHVybiBabihsLGMpLGIuaXNGdW5jdGlvbihsLm9wdHMuc3RhcnQpJiZsLm9wdHMuc3RhcnQuY2FsbChlLGwpLGIuZngudGltZXIoYi5leHRlbmQodSx7ZWxlbTplLGFuaW06bCxxdWV1ZTpsLm9wdHMucXVldWV9KSksbC5wcm9ncmVzcyhsLm9wdHMucHJvZ3Jlc3MpLmRvbmUobC5vcHRzLmRvbmUsbC5vcHRzLmNvbXBsZXRlKS5mYWlsKGwub3B0cy5mYWlsKS5hbHdheXMobC5vcHRzLmFsd2F5cyl9ZnVuY3Rpb24gdHIoZSx0KXt2YXIgbixyLGksbyxhO2ZvcihpIGluIGUpaWYocj1iLmNhbWVsQ2FzZShpKSxvPXRbcl0sbj1lW2ldLGIuaXNBcnJheShuKSYmKG89blsxXSxuPWVbaV09blswXSksaSE9PXImJihlW3JdPW4sZGVsZXRlIGVbaV0pLGE9Yi5jc3NIb29rc1tyXSxhJiZcImV4cGFuZFwiaW4gYSl7bj1hLmV4cGFuZChuKSxkZWxldGUgZVtyXTtmb3IoaSBpbiBuKWkgaW4gZXx8KGVbaV09bltpXSx0W2ldPW8pfWVsc2UgdFtyXT1vfWIuQW5pbWF0aW9uPWIuZXh0ZW5kKGVyLHt0d2VlbmVyOmZ1bmN0aW9uKGUsdCl7Yi5pc0Z1bmN0aW9uKGUpPyh0PWUsZT1bXCIqXCJdKTplPWUuc3BsaXQoXCIgXCIpO3ZhciBuLHI9MCxpPWUubGVuZ3RoO2Zvcig7aT5yO3IrKyluPWVbcl0sUW5bbl09UW5bbl18fFtdLFFuW25dLnVuc2hpZnQodCl9LHByZWZpbHRlcjpmdW5jdGlvbihlLHQpe3Q/R24udW5zaGlmdChlKTpHbi5wdXNoKGUpfX0pO2Z1bmN0aW9uIG5yKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbCxjLHAsZj10aGlzLGQ9ZS5zdHlsZSxoPXt9LGc9W10sbT1lLm5vZGVUeXBlJiZubihlKTtuLnF1ZXVlfHwoYz1iLl9xdWV1ZUhvb2tzKGUsXCJmeFwiKSxudWxsPT1jLnVucXVldWVkJiYoYy51bnF1ZXVlZD0wLHA9Yy5lbXB0eS5maXJlLGMuZW1wdHkuZmlyZT1mdW5jdGlvbigpe2MudW5xdWV1ZWR8fHAoKX0pLGMudW5xdWV1ZWQrKyxmLmFsd2F5cyhmdW5jdGlvbigpe2YuYWx3YXlzKGZ1bmN0aW9uKCl7Yy51bnF1ZXVlZC0tLGIucXVldWUoZSxcImZ4XCIpLmxlbmd0aHx8Yy5lbXB0eS5maXJlKCl9KX0pKSwxPT09ZS5ub2RlVHlwZSYmKFwiaGVpZ2h0XCJpbiB0fHxcIndpZHRoXCJpbiB0KSYmKG4ub3ZlcmZsb3c9W2Qub3ZlcmZsb3csZC5vdmVyZmxvd1gsZC5vdmVyZmxvd1ldLFwiaW5saW5lXCI9PT1iLmNzcyhlLFwiZGlzcGxheVwiKSYmXCJub25lXCI9PT1iLmNzcyhlLFwiZmxvYXRcIikmJihiLnN1cHBvcnQuaW5saW5lQmxvY2tOZWVkc0xheW91dCYmXCJpbmxpbmVcIiE9PXVuKGUubm9kZU5hbWUpP2Quem9vbT0xOmQuZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksbi5vdmVyZmxvdyYmKGQub3ZlcmZsb3c9XCJoaWRkZW5cIixiLnN1cHBvcnQuc2hyaW5rV3JhcEJsb2Nrc3x8Zi5hbHdheXMoZnVuY3Rpb24oKXtkLm92ZXJmbG93PW4ub3ZlcmZsb3dbMF0sZC5vdmVyZmxvd1g9bi5vdmVyZmxvd1sxXSxkLm92ZXJmbG93WT1uLm92ZXJmbG93WzJdfSkpO2ZvcihpIGluIHQpaWYoYT10W2ldLFZuLmV4ZWMoYSkpe2lmKGRlbGV0ZSB0W2ldLHU9dXx8XCJ0b2dnbGVcIj09PWEsYT09PShtP1wiaGlkZVwiOlwic2hvd1wiKSljb250aW51ZTtnLnB1c2goaSl9aWYobz1nLmxlbmd0aCl7cz1iLl9kYXRhKGUsXCJmeHNob3dcIil8fGIuX2RhdGEoZSxcImZ4c2hvd1wiLHt9KSxcImhpZGRlblwiaW4gcyYmKG09cy5oaWRkZW4pLHUmJihzLmhpZGRlbj0hbSksbT9iKGUpLnNob3coKTpmLmRvbmUoZnVuY3Rpb24oKXtiKGUpLmhpZGUoKX0pLGYuZG9uZShmdW5jdGlvbigpe3ZhciB0O2IuX3JlbW92ZURhdGEoZSxcImZ4c2hvd1wiKTtmb3IodCBpbiBoKWIuc3R5bGUoZSx0LGhbdF0pfSk7Zm9yKGk9MDtvPmk7aSsrKXI9Z1tpXSxsPWYuY3JlYXRlVHdlZW4ocixtP3Nbcl06MCksaFtyXT1zW3JdfHxiLnN0eWxlKGUsciksciBpbiBzfHwoc1tyXT1sLnN0YXJ0LG0mJihsLmVuZD1sLnN0YXJ0LGwuc3RhcnQ9XCJ3aWR0aFwiPT09cnx8XCJoZWlnaHRcIj09PXI/MTowKSl9fWZ1bmN0aW9uIHJyKGUsdCxuLHIsaSl7cmV0dXJuIG5ldyByci5wcm90b3R5cGUuaW5pdChlLHQsbixyLGkpfWIuVHdlZW49cnIscnIucHJvdG90eXBlPXtjb25zdHJ1Y3Rvcjpycixpbml0OmZ1bmN0aW9uKGUsdCxuLHIsaSxvKXt0aGlzLmVsZW09ZSx0aGlzLnByb3A9bix0aGlzLmVhc2luZz1pfHxcInN3aW5nXCIsdGhpcy5vcHRpb25zPXQsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPXIsdGhpcy51bml0PW98fChiLmNzc051bWJlcltuXT9cIlwiOlwicHhcIil9LGN1cjpmdW5jdGlvbigpe3ZhciBlPXJyLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBlJiZlLmdldD9lLmdldCh0aGlzKTpyci5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpfSxydW46ZnVuY3Rpb24oZSl7dmFyIHQsbj1yci5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gdGhpcy5wb3M9dD10aGlzLm9wdGlvbnMuZHVyYXRpb24/Yi5lYXNpbmdbdGhpcy5lYXNpbmddKGUsdGhpcy5vcHRpb25zLmR1cmF0aW9uKmUsMCwxLHRoaXMub3B0aW9ucy5kdXJhdGlvbik6ZSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqdCt0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxuJiZuLnNldD9uLnNldCh0aGlzKTpyci5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSxyci5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGU9cnIucHJvdG90eXBlLHJyLnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gbnVsbD09ZS5lbGVtW2UucHJvcF18fGUuZWxlbS5zdHlsZSYmbnVsbCE9ZS5lbGVtLnN0eWxlW2UucHJvcF0/KHQ9Yi5jc3MoZS5lbGVtLGUucHJvcCxcIlwiKSx0JiZcImF1dG9cIiE9PXQ/dDowKTplLmVsZW1bZS5wcm9wXX0sc2V0OmZ1bmN0aW9uKGUpe2IuZnguc3RlcFtlLnByb3BdP2IuZnguc3RlcFtlLnByb3BdKGUpOmUuZWxlbS5zdHlsZSYmKG51bGwhPWUuZWxlbS5zdHlsZVtiLmNzc1Byb3BzW2UucHJvcF1dfHxiLmNzc0hvb2tzW2UucHJvcF0pP2Iuc3R5bGUoZS5lbGVtLGUucHJvcCxlLm5vdytlLnVuaXQpOmUuZWxlbVtlLnByb3BdPWUubm93fX19LHJyLnByb3BIb29rcy5zY3JvbGxUb3A9cnIucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbihlKXtlLmVsZW0ubm9kZVR5cGUmJmUuZWxlbS5wYXJlbnROb2RlJiYoZS5lbGVtW2UucHJvcF09ZS5ub3cpfX0sYi5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSxmdW5jdGlvbihlLHQpe3ZhciBuPWIuZm5bdF07Yi5mblt0XT1mdW5jdGlvbihlLHIsaSl7cmV0dXJuIG51bGw9PWV8fFwiYm9vbGVhblwiPT10eXBlb2YgZT9uLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUoaXIodCwhMCksZSxyLGkpfX0pLGIuZm4uZXh0ZW5kKHtmYWRlVG86ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMuZmlsdGVyKG5uKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2hvdygpLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6dH0sZSxuLHIpfSxhbmltYXRlOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpPWIuaXNFbXB0eU9iamVjdChlKSxvPWIuc3BlZWQodCxuLHIpLGE9ZnVuY3Rpb24oKXt2YXIgdD1lcih0aGlzLGIuZXh0ZW5kKHt9LGUpLG8pO2EuZmluaXNoPWZ1bmN0aW9uKCl7dC5zdG9wKCEwKX0sKGl8fGIuX2RhdGEodGhpcyxcImZpbmlzaFwiKSkmJnQuc3RvcCghMCl9O3JldHVybiBhLmZpbmlzaD1hLGl8fG8ucXVldWU9PT0hMT90aGlzLmVhY2goYSk6dGhpcy5xdWV1ZShvLnF1ZXVlLGEpfSxzdG9wOmZ1bmN0aW9uKGUsbixyKXt2YXIgaT1mdW5jdGlvbihlKXt2YXIgdD1lLnN0b3A7ZGVsZXRlIGUuc3RvcCx0KHIpfTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgZSYmKHI9bixuPWUsZT10KSxuJiZlIT09ITEmJnRoaXMucXVldWUoZXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdD0hMCxuPW51bGwhPWUmJmUrXCJxdWV1ZUhvb2tzXCIsbz1iLnRpbWVycyxhPWIuX2RhdGEodGhpcyk7aWYobilhW25dJiZhW25dLnN0b3AmJmkoYVtuXSk7ZWxzZSBmb3IobiBpbiBhKWFbbl0mJmFbbl0uc3RvcCYmSm4udGVzdChuKSYmaShhW25dKTtmb3Iobj1vLmxlbmd0aDtuLS07KW9bbl0uZWxlbSE9PXRoaXN8fG51bGwhPWUmJm9bbl0ucXVldWUhPT1lfHwob1tuXS5hbmltLnN0b3AociksdD0hMSxvLnNwbGljZShuLDEpKTsodHx8IXIpJiZiLmRlcXVldWUodGhpcyxlKX0pfSxmaW5pc2g6ZnVuY3Rpb24oZSl7cmV0dXJuIGUhPT0hMSYmKGU9ZXx8XCJmeFwiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdCxuPWIuX2RhdGEodGhpcykscj1uW2UrXCJxdWV1ZVwiXSxpPW5bZStcInF1ZXVlSG9va3NcIl0sbz1iLnRpbWVycyxhPXI/ci5sZW5ndGg6MDtmb3Iobi5maW5pc2g9ITAsYi5xdWV1ZSh0aGlzLGUsW10pLGkmJmkuY3VyJiZpLmN1ci5maW5pc2gmJmkuY3VyLmZpbmlzaC5jYWxsKHRoaXMpLHQ9by5sZW5ndGg7dC0tOylvW3RdLmVsZW09PT10aGlzJiZvW3RdLnF1ZXVlPT09ZSYmKG9bdF0uYW5pbS5zdG9wKCEwKSxvLnNwbGljZSh0LDEpKTtmb3IodD0wO2E+dDt0Kyspclt0XSYmclt0XS5maW5pc2gmJnJbdF0uZmluaXNoLmNhbGwodGhpcyk7ZGVsZXRlIG4uZmluaXNofSl9fSk7ZnVuY3Rpb24gaXIoZSx0KXt2YXIgbixyPXtoZWlnaHQ6ZX0saT0wO2Zvcih0PXQ/MTowOzQ+aTtpKz0yLXQpbj1adFtpXSxyW1wibWFyZ2luXCIrbl09cltcInBhZGRpbmdcIituXT1lO3JldHVybiB0JiYoci5vcGFjaXR5PXIud2lkdGg9ZSkscn1iLmVhY2goe3NsaWRlRG93bjppcihcInNob3dcIiksc2xpZGVVcDppcihcImhpZGVcIiksc2xpZGVUb2dnbGU6aXIoXCJ0b2dnbGVcIiksZmFkZUluOntvcGFjaXR5Olwic2hvd1wifSxmYWRlT3V0OntvcGFjaXR5OlwiaGlkZVwifSxmYWRlVG9nZ2xlOntvcGFjaXR5OlwidG9nZ2xlXCJ9fSxmdW5jdGlvbihlLHQpe2IuZm5bZV09ZnVuY3Rpb24oZSxuLHIpe3JldHVybiB0aGlzLmFuaW1hdGUodCxlLG4scil9fSksYi5zcGVlZD1mdW5jdGlvbihlLHQsbil7dmFyIHI9ZSYmXCJvYmplY3RcIj09dHlwZW9mIGU/Yi5leHRlbmQoe30sZSk6e2NvbXBsZXRlOm58fCFuJiZ0fHxiLmlzRnVuY3Rpb24oZSkmJmUsZHVyYXRpb246ZSxlYXNpbmc6biYmdHx8dCYmIWIuaXNGdW5jdGlvbih0KSYmdH07cmV0dXJuIHIuZHVyYXRpb249Yi5meC5vZmY/MDpcIm51bWJlclwiPT10eXBlb2Ygci5kdXJhdGlvbj9yLmR1cmF0aW9uOnIuZHVyYXRpb24gaW4gYi5meC5zcGVlZHM/Yi5meC5zcGVlZHNbci5kdXJhdGlvbl06Yi5meC5zcGVlZHMuX2RlZmF1bHQsKG51bGw9PXIucXVldWV8fHIucXVldWU9PT0hMCkmJihyLnF1ZXVlPVwiZnhcIiksci5vbGQ9ci5jb21wbGV0ZSxyLmNvbXBsZXRlPWZ1bmN0aW9uKCl7Yi5pc0Z1bmN0aW9uKHIub2xkKSYmci5vbGQuY2FsbCh0aGlzKSxyLnF1ZXVlJiZiLmRlcXVldWUodGhpcyxyLnF1ZXVlKX0scn0sYi5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sc3dpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuLjUtTWF0aC5jb3MoZSpNYXRoLlBJKS8yfX0sYi50aW1lcnM9W10sYi5meD1yci5wcm90b3R5cGUuaW5pdCxiLmZ4LnRpY2s9ZnVuY3Rpb24oKXt2YXIgZSxuPWIudGltZXJzLHI9MDtmb3IoWG49Yi5ub3coKTtuLmxlbmd0aD5yO3IrKyllPW5bcl0sZSgpfHxuW3JdIT09ZXx8bi5zcGxpY2Uoci0tLDEpO24ubGVuZ3RofHxiLmZ4LnN0b3AoKSxYbj10fSxiLmZ4LnRpbWVyPWZ1bmN0aW9uKGUpe2UoKSYmYi50aW1lcnMucHVzaChlKSYmYi5meC5zdGFydCgpfSxiLmZ4LmludGVydmFsPTEzLGIuZnguc3RhcnQ9ZnVuY3Rpb24oKXtVbnx8KFVuPXNldEludGVydmFsKGIuZngudGljayxiLmZ4LmludGVydmFsKSl9LGIuZnguc3RvcD1mdW5jdGlvbigpe2NsZWFySW50ZXJ2YWwoVW4pLFVuPW51bGx9LGIuZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LGIuZnguc3RlcD17fSxiLmV4cHImJmIuZXhwci5maWx0ZXJzJiYoYi5leHByLmZpbHRlcnMuYW5pbWF0ZWQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGIuZ3JlcChiLnRpbWVycyxmdW5jdGlvbih0KXtyZXR1cm4gZT09PXQuZWxlbX0pLmxlbmd0aH0pLGIuZm4ub2Zmc2V0PWZ1bmN0aW9uKGUpe2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGU9PT10P3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKHQpe2Iub2Zmc2V0LnNldE9mZnNldCh0aGlzLGUsdCl9KTt2YXIgbixyLG89e3RvcDowLGxlZnQ6MH0sYT10aGlzWzBdLHM9YSYmYS5vd25lckRvY3VtZW50O2lmKHMpcmV0dXJuIG49cy5kb2N1bWVudEVsZW1lbnQsYi5jb250YWlucyhuLGEpPyh0eXBlb2YgYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QhPT1pJiYobz1hLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSxyPW9yKHMpLHt0b3A6by50b3ArKHIucGFnZVlPZmZzZXR8fG4uc2Nyb2xsVG9wKS0obi5jbGllbnRUb3B8fDApLGxlZnQ6by5sZWZ0KyhyLnBhZ2VYT2Zmc2V0fHxuLnNjcm9sbExlZnQpLShuLmNsaWVudExlZnR8fDApfSk6b30sYi5vZmZzZXQ9e3NldE9mZnNldDpmdW5jdGlvbihlLHQsbil7dmFyIHI9Yi5jc3MoZSxcInBvc2l0aW9uXCIpO1wic3RhdGljXCI9PT1yJiYoZS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpO3ZhciBpPWIoZSksbz1pLm9mZnNldCgpLGE9Yi5jc3MoZSxcInRvcFwiKSxzPWIuY3NzKGUsXCJsZWZ0XCIpLHU9KFwiYWJzb2x1dGVcIj09PXJ8fFwiZml4ZWRcIj09PXIpJiZiLmluQXJyYXkoXCJhdXRvXCIsW2Esc10pPi0xLGw9e30sYz17fSxwLGY7dT8oYz1pLnBvc2l0aW9uKCkscD1jLnRvcCxmPWMubGVmdCk6KHA9cGFyc2VGbG9hdChhKXx8MCxmPXBhcnNlRmxvYXQocyl8fDApLGIuaXNGdW5jdGlvbih0KSYmKHQ9dC5jYWxsKGUsbixvKSksbnVsbCE9dC50b3AmJihsLnRvcD10LnRvcC1vLnRvcCtwKSxudWxsIT10LmxlZnQmJihsLmxlZnQ9dC5sZWZ0LW8ubGVmdCtmKSxcInVzaW5nXCJpbiB0P3QudXNpbmcuY2FsbChlLGwpOmkuY3NzKGwpfX0sYi5mbi5leHRlbmQoe3Bvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGUsdCxuPXt0b3A6MCxsZWZ0OjB9LHI9dGhpc1swXTtyZXR1cm5cImZpeGVkXCI9PT1iLmNzcyhyLFwicG9zaXRpb25cIik/dD1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOihlPXRoaXMub2Zmc2V0UGFyZW50KCksdD10aGlzLm9mZnNldCgpLGIubm9kZU5hbWUoZVswXSxcImh0bWxcIil8fChuPWUub2Zmc2V0KCkpLG4udG9wKz1iLmNzcyhlWzBdLFwiYm9yZGVyVG9wV2lkdGhcIiwhMCksbi5sZWZ0Kz1iLmNzcyhlWzBdLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApKSx7dG9wOnQudG9wLW4udG9wLWIuY3NzKHIsXCJtYXJnaW5Ub3BcIiwhMCksbGVmdDp0LmxlZnQtbi5sZWZ0LWIuY3NzKHIsXCJtYXJnaW5MZWZ0XCIsITApfX19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBlPXRoaXMub2Zmc2V0UGFyZW50fHxvLmRvY3VtZW50RWxlbWVudDt3aGlsZShlJiYhYi5ub2RlTmFtZShlLFwiaHRtbFwiKSYmXCJzdGF0aWNcIj09PWIuY3NzKGUsXCJwb3NpdGlvblwiKSllPWUub2Zmc2V0UGFyZW50O3JldHVybiBlfHxvLmRvY3VtZW50RWxlbWVudH0pfX0pLGIuZWFjaCh7c2Nyb2xsTGVmdDpcInBhZ2VYT2Zmc2V0XCIsc2Nyb2xsVG9wOlwicGFnZVlPZmZzZXRcIn0sZnVuY3Rpb24oZSxuKXt2YXIgcj0vWS8udGVzdChuKTtiLmZuW2VdPWZ1bmN0aW9uKGkpe3JldHVybiBiLmFjY2Vzcyh0aGlzLGZ1bmN0aW9uKGUsaSxvKXt2YXIgYT1vcihlKTtyZXR1cm4gbz09PXQ/YT9uIGluIGE/YVtuXTphLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtpXTplW2ldOihhP2Euc2Nyb2xsVG8ocj9iKGEpLnNjcm9sbExlZnQoKTpvLHI/bzpiKGEpLnNjcm9sbFRvcCgpKTplW2ldPW8sdCl9LGUsaSxhcmd1bWVudHMubGVuZ3RoLG51bGwpfX0pO2Z1bmN0aW9uIG9yKGUpe3JldHVybiBiLmlzV2luZG93KGUpP2U6OT09PWUubm9kZVR5cGU/ZS5kZWZhdWx0Vmlld3x8ZS5wYXJlbnRXaW5kb3c6ITF9Yi5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGUsbil7Yi5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIitlLGNvbnRlbnQ6bixcIlwiOlwib3V0ZXJcIitlfSxmdW5jdGlvbihyLGkpe2IuZm5baV09ZnVuY3Rpb24oaSxvKXt2YXIgYT1hcmd1bWVudHMubGVuZ3RoJiYocnx8XCJib29sZWFuXCIhPXR5cGVvZiBpKSxzPXJ8fChpPT09ITB8fG89PT0hMD9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiBiLmFjY2Vzcyh0aGlzLGZ1bmN0aW9uKG4scixpKXt2YXIgbztyZXR1cm4gYi5pc1dpbmRvdyhuKT9uLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK2VdOjk9PT1uLm5vZGVUeXBlPyhvPW4uZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KG4uYm9keVtcInNjcm9sbFwiK2VdLG9bXCJzY3JvbGxcIitlXSxuLmJvZHlbXCJvZmZzZXRcIitlXSxvW1wib2Zmc2V0XCIrZV0sb1tcImNsaWVudFwiK2VdKSk6aT09PXQ/Yi5jc3MobixyLHMpOmIuc3R5bGUobixyLGkscyl9LG4sYT9pOnQsYSxudWxsKX19KX0pLGUualF1ZXJ5PWUuJD1iLFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lLmFtZC5qUXVlcnkmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIGJ9KX0pKHdpbmRvdyk7XG5cbjsgYnJvd3NlcmlmeV9zaGltX19kZWZpbmVfX21vZHVsZV9fZXhwb3J0X18odHlwZW9mICQgIT0gXCJ1bmRlZmluZWRcIiA/ICQgOiB3aW5kb3cuJCk7XG5cbn0pLmNhbGwoZ2xvYmFsLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBmdW5jdGlvbiBkZWZpbmVFeHBvcnQoZXgpIHsgbW9kdWxlLmV4cG9ydHMgPSBleDsgfSk7XG5cbn0pLmNhbGwodGhpcyx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxucHJvY2Vzcy5uZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhblNldEltbWVkaWF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICB2YXIgY2FuUG9zdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnBvc3RNZXNzYWdlICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgO1xuXG4gICAgaWYgKGNhblNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHdpbmRvdy5zZXRJbW1lZGlhdGUoZikgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB2YXIgcXVldWUgPSBbXTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBldi5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoKHNvdXJjZSA9PT0gd2luZG93IHx8IHNvdXJjZSA9PT0gbnVsbCkgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufVxuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG4iLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoJ2hhbmRsZWJhcnMnKTtcblxuaWYgKEhhbmRsZWJhcnNbJ2RlZmF1bHQnXSkge1xuICAvLyBJZiB3ZSBvbmx5IGhhdmUgdGhlIEhhbmRsZWJhcnMgcnVudGltZSBhdmFpbGFibGUsIHVzZSB0aGF0IGhlcmUuXG4gIC8vIFVudGlsIEhhbmRsZWJhcnMgMywgd2UgaGF2ZSB0byB1c2UgJ2RlZmF1bHQnIGluc3RlYWQgb2YganVzdCByZXF1aXJpbmcgJ2hhbmRsZWJhcnMnLlxuICBIYW5kbGViYXJzID0gSGFuZGxlYmFyc1snZGVmYXVsdCddO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICB2YXIgbG9jYWxFeHBvcnRzID0ge30sXG4gICAgICB0ZW1wbGF0ZUZpbmRlciA9IG9wdGlvbnMudGVtcGxhdGVGaW5kZXIgfHwgcmVxdWlyZSgnLi9zaGFyZWQvdGVtcGxhdGVGaW5kZXInKShIYW5kbGViYXJzKTtcblxuICAvKipcbiAgICogRXhwb3J0IHRoZSBgSGFuZGxlYmFyc2Agb2JqZWN0LCBzbyBvdGhlciBtb2R1bGVzIGNhbiBhZGQgaGVscGVycywgcGFydGlhbHMsIGV0Yy5cbiAgICovXG4gIGxvY2FsRXhwb3J0cy5IYW5kbGViYXJzID0gSGFuZGxlYmFycztcblxuICAvKipcbiAgICogYGdldFRlbXBsYXRlYCBpcyBhdmFpbGFibGUgb24gYm90aCBjbGllbnQgYW5kIHNlcnZlci5cbiAgICovXG4gIGxvY2FsRXhwb3J0cy5nZXRUZW1wbGF0ZSA9IHRlbXBsYXRlRmluZGVyLmdldFRlbXBsYXRlO1xuXG4gIC8qKlxuICAgKiBFeHBvc2UgYHRlbXBsYXRlUGF0dGVybnNgIGZvciBtYW5pcHVsYXRpbmcgaG93IGBnZXRUZW1wbGF0ZWAgZmluZHMgdGVtcGxhdGVzLlxuICAgKi9cbiAgbG9jYWxFeHBvcnRzLnRlbXBsYXRlUGF0dGVybnMgPSB0ZW1wbGF0ZUZpbmRlci50ZW1wbGF0ZVBhdHRlcm5zO1xuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBwYXR0ZXJuIGAvLisvYCBpcyB2ZXJ5IGdyZWVkeTsgaXQgbWF0Y2hlcyBhbnl0aGluZywgaW5jbHVkaW5nIG5lc3RlZCBwYXRocy5cbiAgICogVG8gYWRkIHJ1bGVzIHRoYXQgc2hvdWxkIG1hdGNoIGJlZm9yZSB0aGlzIGRlZmF1bHQgcnVsZSwgYHVuc2hpZnRgIHRoZW0gZnJvbSB0aGlzIGFycmF5LlxuICAgKi9cbiAgbG9jYWxFeHBvcnRzLnRlbXBsYXRlUGF0dGVybnMucHVzaCh7cGF0dGVybjogLy4rLywgc3JjOiBvcHRpb25zLmVudHJ5UGF0aCArICdhcHAvdGVtcGxhdGVzL2NvbXBpbGVkVGVtcGxhdGVzJ30pXG5cbiAgLyoqXG4gICAqIGBnZXRMYXlvdXRgIHNob3VsZCBvbmx5IGJlIHVzZWQgb24gdGhlIHNlcnZlci5cbiAgICovXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vIHNlcnZlciBvbmx5LCBcImhpZGVcIiBpdCBmcm9tIHIuanMgY29tcGlsZXJcbiAgICAvLyBieSBoYXZpbmcgcmVxdWlyZSBzdGF0ZW1lbnQgd2l0aCB2YXJpYWJsZVxuICAgIHZhciBzZXJ2ZXJPbmx5TGF5b3V0RmluZGVyUGF0aCA9ICcuL3NlcnZlci9sYXlvdXRGaW5kZXInO1xuICAgIGxvY2FsRXhwb3J0cy5nZXRMYXlvdXQgPSByZXF1aXJlKHNlcnZlck9ubHlMYXlvdXRGaW5kZXJQYXRoKShIYW5kbGViYXJzKS5nZXRMYXlvdXQ7XG4gIH0gZWxzZSB7XG4gICAgbG9jYWxFeHBvcnRzLmdldExheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZXRMYXlvdXQgaXMgb25seSBhdmFpbGFibGUgb24gdGhlIHNlcnZlci4nKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGhlbHBlcnMsIGF2YWlsYWJsZSBvbiBib3RoIGNsaWVudCBhbmQgc2VydmVyLlxuICAgKlxuICAgKiBFeHBvcnQgaXQgc28gb3RoZXIgbW9kdWxlcyBjYW4gcmVnaXN0ZXIgaGVscGVycyBhcyB3ZWxsLlxuICAgKi9cbiAgbG9jYWxFeHBvcnRzLnJlZ2lzdGVySGVscGVycyA9IGZ1bmN0aW9uIHJlZ2lzdGVySGVscGVycyhoZWxwZXJzTW9kdWxlKSB7XG4gICAgdmFyIGhlbHBlcnMgPSBoZWxwZXJzTW9kdWxlKEhhbmRsZWJhcnMsIGxvY2FsRXhwb3J0cy5nZXRUZW1wbGF0ZSk7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gaGVscGVycykge1xuICAgICAgaWYgKCFoZWxwZXJzLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xuICAgICAgSGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihrZXksIGhlbHBlcnNba2V5XSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZWdpc3RlciB0aGUgcHJlLWJ1bmRsZWQgUmVuZHIgaGVscGVycy5cbiAgICovXG4gIHZhciByZW5kckhlbHBlcnMgPSByZXF1aXJlKCcuL3NoYXJlZC9oZWxwZXJzJyk7XG4gIGxvY2FsRXhwb3J0cy5yZWdpc3RlckhlbHBlcnMocmVuZHJIZWxwZXJzKTtcblxuICByZXR1cm4gbG9jYWxFeHBvcnRzO1xufVxuIiwiLyoqXG4gKiBHcmFiIGltcG9ydGFudCB1bmRlcnNjb3JlZCBwcm9wZXJ0aWVzIGZyb20gdGhlIGN1cnJlbnQgY29udGV4dC5cbiAqIFRoZXNlIHByb3BlcnRpZXMgY29tZSBmcm9tIEJhc2VWaWV3OjpkZWNvcmF0ZVRlbXBsYXRlRGF0YSgpLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIG9wdGlvbnMsIGtleXMsIHZhbHVlO1xuXG4gIGtleXMgPSBbXG4gICAgJ19hcHAnLFxuICAgICdfdmlldycsXG4gICAgJ19tb2RlbCcsXG4gICAgJ19jb2xsZWN0aW9uJyxcbiAgICAnX2Jsb2NrJ1xuICBdO1xuXG4gIG9wdGlvbnMgPSBrZXlzLnJlZHVjZShmdW5jdGlvbihtZW1vLCBrZXkpIHtcbiAgICB2YWx1ZSA9IG9ialtrZXldO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbWVtb1trZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBtZW1vO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59O1xuIiwiLyoqXG4gKiBHZXQgYSBwcm9wZXJ0eSB0aGF0IGlzIGJlaW5nIHBhc3NlZCBkb3duIHRocm91Z2ggaGVscGVycywgc3VjaCBhcyBgX2FwcGBcbiAqIG9yIGBfdmlld2AuIEl0IGNhbiBlaXRoZXIgbGl2ZSBvbiB0aGUgY29udGV4dCwgaS5lLiBgdGhpcy5fYXBwYCwgb3IgaW4gdGhlXG4gKiBgb3B0aW9ucy5kYXRhYCBvYmplY3QgcGFzc2VkIHRvIHRoZSBoZWxwZXIsIGkuZS4gYG9wdGlvbnMuZGF0YS5fYXBwYCwgaW4gdGhlXG4gKiBjYXNlIG9mIGEgYmxvY2sgaGVscGVyIGxpa2UgYGVhY2hgLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGNvbnRleHRba2V5XSB8fCAob3B0aW9ucy5kYXRhIHx8IHt9KVtrZXldO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKmdsb2JhbHMgSGFuZGxlYmFyczogdHJ1ZSAqL1xudmFyIGJhc2UgPSByZXF1aXJlKFwiLi9oYW5kbGViYXJzL2Jhc2VcIik7XG5cbi8vIEVhY2ggb2YgdGhlc2UgYXVnbWVudCB0aGUgSGFuZGxlYmFycyBvYmplY3QuIE5vIG5lZWQgdG8gc2V0dXAgaGVyZS5cbi8vIChUaGlzIGlzIGRvbmUgdG8gZWFzaWx5IHNoYXJlIGNvZGUgYmV0d2VlbiBjb21tb25qcyBhbmQgYnJvd3NlIGVudnMpXG52YXIgU2FmZVN0cmluZyA9IHJlcXVpcmUoXCIuL2hhbmRsZWJhcnMvc2FmZS1zdHJpbmdcIilbXCJkZWZhdWx0XCJdO1xudmFyIEV4Y2VwdGlvbiA9IHJlcXVpcmUoXCIuL2hhbmRsZWJhcnMvZXhjZXB0aW9uXCIpW1wiZGVmYXVsdFwiXTtcbnZhciBVdGlscyA9IHJlcXVpcmUoXCIuL2hhbmRsZWJhcnMvdXRpbHNcIik7XG52YXIgcnVudGltZSA9IHJlcXVpcmUoXCIuL2hhbmRsZWJhcnMvcnVudGltZVwiKTtcblxuLy8gRm9yIGNvbXBhdGliaWxpdHkgYW5kIHVzYWdlIG91dHNpZGUgb2YgbW9kdWxlIHN5c3RlbXMsIG1ha2UgdGhlIEhhbmRsZWJhcnMgb2JqZWN0IGEgbmFtZXNwYWNlXG52YXIgY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBoYiA9IG5ldyBiYXNlLkhhbmRsZWJhcnNFbnZpcm9ubWVudCgpO1xuXG4gIFV0aWxzLmV4dGVuZChoYiwgYmFzZSk7XG4gIGhiLlNhZmVTdHJpbmcgPSBTYWZlU3RyaW5nO1xuICBoYi5FeGNlcHRpb24gPSBFeGNlcHRpb247XG4gIGhiLlV0aWxzID0gVXRpbHM7XG4gIGhiLmVzY2FwZUV4cHJlc3Npb24gPSBVdGlscy5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIGhiLlZNID0gcnVudGltZTtcbiAgaGIudGVtcGxhdGUgPSBmdW5jdGlvbihzcGVjKSB7XG4gICAgcmV0dXJuIHJ1bnRpbWUudGVtcGxhdGUoc3BlYywgaGIpO1xuICB9O1xuXG4gIHJldHVybiBoYjtcbn07XG5cbnZhciBIYW5kbGViYXJzID0gY3JlYXRlKCk7XG5IYW5kbGViYXJzLmNyZWF0ZSA9IGNyZWF0ZTtcblxuSGFuZGxlYmFyc1snZGVmYXVsdCddID0gSGFuZGxlYmFycztcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBIYW5kbGViYXJzOyIsIlwidXNlIHN0cmljdFwiO1xudmFyIFV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG52YXIgRXhjZXB0aW9uID0gcmVxdWlyZShcIi4vZXhjZXB0aW9uXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIFZFUlNJT04gPSBcIjIuMC4wXCI7XG5leHBvcnRzLlZFUlNJT04gPSBWRVJTSU9OO3ZhciBDT01QSUxFUl9SRVZJU0lPTiA9IDY7XG5leHBvcnRzLkNPTVBJTEVSX1JFVklTSU9OID0gQ09NUElMRVJfUkVWSVNJT047XG52YXIgUkVWSVNJT05fQ0hBTkdFUyA9IHtcbiAgMTogJzw9IDEuMC5yYy4yJywgLy8gMS4wLnJjLjIgaXMgYWN0dWFsbHkgcmV2MiBidXQgZG9lc24ndCByZXBvcnQgaXRcbiAgMjogJz09IDEuMC4wLXJjLjMnLFxuICAzOiAnPT0gMS4wLjAtcmMuNCcsXG4gIDQ6ICc9PSAxLngueCcsXG4gIDU6ICc9PSAyLjAuMC1hbHBoYS54JyxcbiAgNjogJz49IDIuMC4wLWJldGEuMSdcbn07XG5leHBvcnRzLlJFVklTSU9OX0NIQU5HRVMgPSBSRVZJU0lPTl9DSEFOR0VTO1xudmFyIGlzQXJyYXkgPSBVdGlscy5pc0FycmF5LFxuICAgIGlzRnVuY3Rpb24gPSBVdGlscy5pc0Z1bmN0aW9uLFxuICAgIHRvU3RyaW5nID0gVXRpbHMudG9TdHJpbmcsXG4gICAgb2JqZWN0VHlwZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG5mdW5jdGlvbiBIYW5kbGViYXJzRW52aXJvbm1lbnQoaGVscGVycywgcGFydGlhbHMpIHtcbiAgdGhpcy5oZWxwZXJzID0gaGVscGVycyB8fCB7fTtcbiAgdGhpcy5wYXJ0aWFscyA9IHBhcnRpYWxzIHx8IHt9O1xuXG4gIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnModGhpcyk7XG59XG5cbmV4cG9ydHMuSGFuZGxlYmFyc0Vudmlyb25tZW50ID0gSGFuZGxlYmFyc0Vudmlyb25tZW50O0hhbmRsZWJhcnNFbnZpcm9ubWVudC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBIYW5kbGViYXJzRW52aXJvbm1lbnQsXG5cbiAgbG9nZ2VyOiBsb2dnZXIsXG4gIGxvZzogbG9nLFxuXG4gIHJlZ2lzdGVySGVscGVyOiBmdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmICh0b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBpZiAoZm4pIHsgdGhyb3cgbmV3IEV4Y2VwdGlvbignQXJnIG5vdCBzdXBwb3J0ZWQgd2l0aCBtdWx0aXBsZSBoZWxwZXJzJyk7IH1cbiAgICAgIFV0aWxzLmV4dGVuZCh0aGlzLmhlbHBlcnMsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhlbHBlcnNbbmFtZV0gPSBmbjtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5oZWxwZXJzW25hbWVdO1xuICB9LFxuXG4gIHJlZ2lzdGVyUGFydGlhbDogZnVuY3Rpb24obmFtZSwgcGFydGlhbCkge1xuICAgIGlmICh0b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBVdGlscy5leHRlbmQodGhpcy5wYXJ0aWFscywgIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhcnRpYWxzW25hbWVdID0gcGFydGlhbDtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMucGFydGlhbHNbbmFtZV07XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnMoaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbigvKiBbYXJncywgXW9wdGlvbnMgKi8pIHtcbiAgICBpZihhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAvLyBBIG1pc3NpbmcgZmllbGQgaW4gYSB7e2Zvb319IGNvbnN0dWN0LlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU29tZW9uZSBpcyBhY3R1YWxseSB0cnlpbmcgdG8gY2FsbCBzb21ldGhpbmcsIGJsb3cgdXAuXG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKFwiTWlzc2luZyBoZWxwZXI6ICdcIiArIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoLTFdLm5hbWUgKyBcIidcIik7XG4gICAgfVxuICB9KTtcblxuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignYmxvY2tIZWxwZXJNaXNzaW5nJywgZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgIHZhciBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlLFxuICAgICAgICBmbiA9IG9wdGlvbnMuZm47XG5cbiAgICBpZihjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZm4odGhpcyk7XG4gICAgfSBlbHNlIGlmKGNvbnRleHQgPT09IGZhbHNlIHx8IGNvbnRleHQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KGNvbnRleHQpKSB7XG4gICAgICBpZihjb250ZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgICAgICAgb3B0aW9ucy5pZHMgPSBbb3B0aW9ucy5uYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5oZWxwZXJzLmVhY2goY29udGV4dCwgb3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaW52ZXJzZSh0aGlzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuICAgICAgICB2YXIgZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBVdGlscy5hcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMubmFtZSk7XG4gICAgICAgIG9wdGlvbnMgPSB7ZGF0YTogZGF0YX07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gIH0pO1xuXG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdlYWNoJywgZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignTXVzdCBwYXNzIGl0ZXJhdG9yIHRvICNlYWNoJyk7XG4gICAgfVxuXG4gICAgdmFyIGZuID0gb3B0aW9ucy5mbiwgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZTtcbiAgICB2YXIgaSA9IDAsIHJldCA9IFwiXCIsIGRhdGE7XG5cbiAgICB2YXIgY29udGV4dFBhdGg7XG4gICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuICAgICAgY29udGV4dFBhdGggPSBVdGlscy5hcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMuaWRzWzBdKSArICcuJztcbiAgICB9XG5cbiAgICBpZiAoaXNGdW5jdGlvbihjb250ZXh0KSkgeyBjb250ZXh0ID0gY29udGV4dC5jYWxsKHRoaXMpOyB9XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhKSB7XG4gICAgICBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICB9XG5cbiAgICBpZihjb250ZXh0ICYmIHR5cGVvZiBjb250ZXh0ID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKGlzQXJyYXkoY29udGV4dCkpIHtcbiAgICAgICAgZm9yKHZhciBqID0gY29udGV4dC5sZW5ndGg7IGk8ajsgaSsrKSB7XG4gICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIGRhdGEuaW5kZXggPSBpO1xuICAgICAgICAgICAgZGF0YS5maXJzdCA9IChpID09PSAwKTtcbiAgICAgICAgICAgIGRhdGEubGFzdCAgPSAoaSA9PT0gKGNvbnRleHQubGVuZ3RoLTEpKTtcblxuICAgICAgICAgICAgaWYgKGNvbnRleHRQYXRoKSB7XG4gICAgICAgICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBjb250ZXh0UGF0aCArIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldCA9IHJldCArIGZuKGNvbnRleHRbaV0sIHsgZGF0YTogZGF0YSB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gY29udGV4dCkge1xuICAgICAgICAgIGlmKGNvbnRleHQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgaWYoZGF0YSkge1xuICAgICAgICAgICAgICBkYXRhLmtleSA9IGtleTtcbiAgICAgICAgICAgICAgZGF0YS5pbmRleCA9IGk7XG4gICAgICAgICAgICAgIGRhdGEuZmlyc3QgPSAoaSA9PT0gMCk7XG5cbiAgICAgICAgICAgICAgaWYgKGNvbnRleHRQYXRoKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGNvbnRleHRQYXRoICsga2V5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXQgPSByZXQgKyBmbihjb250ZXh0W2tleV0sIHtkYXRhOiBkYXRhfSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoaSA9PT0gMCl7XG4gICAgICByZXQgPSBpbnZlcnNlKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH0pO1xuXG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdpZicsIGZ1bmN0aW9uKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oY29uZGl0aW9uYWwpKSB7IGNvbmRpdGlvbmFsID0gY29uZGl0aW9uYWwuY2FsbCh0aGlzKTsgfVxuXG4gICAgLy8gRGVmYXVsdCBiZWhhdmlvciBpcyB0byByZW5kZXIgdGhlIHBvc2l0aXZlIHBhdGggaWYgdGhlIHZhbHVlIGlzIHRydXRoeSBhbmQgbm90IGVtcHR5LlxuICAgIC8vIFRoZSBgaW5jbHVkZVplcm9gIG9wdGlvbiBtYXkgYmUgc2V0IHRvIHRyZWF0IHRoZSBjb25kdGlvbmFsIGFzIHB1cmVseSBub3QgZW1wdHkgYmFzZWQgb24gdGhlXG4gICAgLy8gYmVoYXZpb3Igb2YgaXNFbXB0eS4gRWZmZWN0aXZlbHkgdGhpcyBkZXRlcm1pbmVzIGlmIDAgaXMgaGFuZGxlZCBieSB0aGUgcG9zaXRpdmUgcGF0aCBvciBuZWdhdGl2ZS5cbiAgICBpZiAoKCFvcHRpb25zLmhhc2guaW5jbHVkZVplcm8gJiYgIWNvbmRpdGlvbmFsKSB8fCBVdGlscy5pc0VtcHR5KGNvbmRpdGlvbmFsKSkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuZm4odGhpcyk7XG4gICAgfVxuICB9KTtcblxuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcigndW5sZXNzJywgZnVuY3Rpb24oY29uZGl0aW9uYWwsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UuaGVscGVyc1snaWYnXS5jYWxsKHRoaXMsIGNvbmRpdGlvbmFsLCB7Zm46IG9wdGlvbnMuaW52ZXJzZSwgaW52ZXJzZTogb3B0aW9ucy5mbiwgaGFzaDogb3B0aW9ucy5oYXNofSk7XG4gIH0pO1xuXG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCd3aXRoJywgZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQpKSB7IGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7IH1cblxuICAgIHZhciBmbiA9IG9wdGlvbnMuZm47XG5cbiAgICBpZiAoIVV0aWxzLmlzRW1wdHkoY29udGV4dCkpIHtcbiAgICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gVXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSk7XG4gICAgICAgIG9wdGlvbnMgPSB7ZGF0YTpkYXRhfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uKG1lc3NhZ2UsIG9wdGlvbnMpIHtcbiAgICB2YXIgbGV2ZWwgPSBvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5kYXRhLmxldmVsICE9IG51bGwgPyBwYXJzZUludChvcHRpb25zLmRhdGEubGV2ZWwsIDEwKSA6IDE7XG4gICAgaW5zdGFuY2UubG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvb2t1cCcsIGZ1bmN0aW9uKG9iaiwgZmllbGQpIHtcbiAgICByZXR1cm4gb2JqICYmIG9ialtmaWVsZF07XG4gIH0pO1xufVxuXG52YXIgbG9nZ2VyID0ge1xuICBtZXRob2RNYXA6IHsgMDogJ2RlYnVnJywgMTogJ2luZm8nLCAyOiAnd2FybicsIDM6ICdlcnJvcicgfSxcblxuICAvLyBTdGF0ZSBlbnVtXG4gIERFQlVHOiAwLFxuICBJTkZPOiAxLFxuICBXQVJOOiAyLFxuICBFUlJPUjogMyxcbiAgbGV2ZWw6IDMsXG5cbiAgLy8gY2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcbiAgbG9nOiBmdW5jdGlvbihsZXZlbCwgbWVzc2FnZSkge1xuICAgIGlmIChsb2dnZXIubGV2ZWwgPD0gbGV2ZWwpIHtcbiAgICAgIHZhciBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZVttZXRob2RdKSB7XG4gICAgICAgIGNvbnNvbGVbbWV0aG9kXS5jYWxsKGNvbnNvbGUsIG1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMubG9nZ2VyID0gbG9nZ2VyO1xudmFyIGxvZyA9IGxvZ2dlci5sb2c7XG5leHBvcnRzLmxvZyA9IGxvZztcbnZhciBjcmVhdGVGcmFtZSA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgZnJhbWUgPSBVdGlscy5leHRlbmQoe30sIG9iamVjdCk7XG4gIGZyYW1lLl9wYXJlbnQgPSBvYmplY3Q7XG4gIHJldHVybiBmcmFtZTtcbn07XG5leHBvcnRzLmNyZWF0ZUZyYW1lID0gY3JlYXRlRnJhbWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBlcnJvclByb3BzID0gWydkZXNjcmlwdGlvbicsICdmaWxlTmFtZScsICdsaW5lTnVtYmVyJywgJ21lc3NhZ2UnLCAnbmFtZScsICdudW1iZXInLCAnc3RhY2snXTtcblxuZnVuY3Rpb24gRXhjZXB0aW9uKG1lc3NhZ2UsIG5vZGUpIHtcbiAgdmFyIGxpbmU7XG4gIGlmIChub2RlICYmIG5vZGUuZmlyc3RMaW5lKSB7XG4gICAgbGluZSA9IG5vZGUuZmlyc3RMaW5lO1xuXG4gICAgbWVzc2FnZSArPSAnIC0gJyArIGxpbmUgKyAnOicgKyBub2RlLmZpcnN0Q29sdW1uO1xuICB9XG5cbiAgdmFyIHRtcCA9IEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1lc3NhZ2UpO1xuXG4gIC8vIFVuZm9ydHVuYXRlbHkgZXJyb3JzIGFyZSBub3QgZW51bWVyYWJsZSBpbiBDaHJvbWUgKGF0IGxlYXN0KSwgc28gYGZvciBwcm9wIGluIHRtcGAgZG9lc24ndCB3b3JrLlxuICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBlcnJvclByb3BzLmxlbmd0aDsgaWR4KyspIHtcbiAgICB0aGlzW2Vycm9yUHJvcHNbaWR4XV0gPSB0bXBbZXJyb3JQcm9wc1tpZHhdXTtcbiAgfVxuXG4gIGlmIChsaW5lKSB7XG4gICAgdGhpcy5saW5lTnVtYmVyID0gbGluZTtcbiAgICB0aGlzLmNvbHVtbiA9IG5vZGUuZmlyc3RDb2x1bW47XG4gIH1cbn1cblxuRXhjZXB0aW9uLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEV4Y2VwdGlvbjsiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBVdGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xudmFyIEV4Y2VwdGlvbiA9IHJlcXVpcmUoXCIuL2V4Y2VwdGlvblwiKVtcImRlZmF1bHRcIl07XG52YXIgQ09NUElMRVJfUkVWSVNJT04gPSByZXF1aXJlKFwiLi9iYXNlXCIpLkNPTVBJTEVSX1JFVklTSU9OO1xudmFyIFJFVklTSU9OX0NIQU5HRVMgPSByZXF1aXJlKFwiLi9iYXNlXCIpLlJFVklTSU9OX0NIQU5HRVM7XG52YXIgY3JlYXRlRnJhbWUgPSByZXF1aXJlKFwiLi9iYXNlXCIpLmNyZWF0ZUZyYW1lO1xuXG5mdW5jdGlvbiBjaGVja1JldmlzaW9uKGNvbXBpbGVySW5mbykge1xuICB2YXIgY29tcGlsZXJSZXZpc2lvbiA9IGNvbXBpbGVySW5mbyAmJiBjb21waWxlckluZm9bMF0gfHwgMSxcbiAgICAgIGN1cnJlbnRSZXZpc2lvbiA9IENPTVBJTEVSX1JFVklTSU9OO1xuXG4gIGlmIChjb21waWxlclJldmlzaW9uICE9PSBjdXJyZW50UmV2aXNpb24pIHtcbiAgICBpZiAoY29tcGlsZXJSZXZpc2lvbiA8IGN1cnJlbnRSZXZpc2lvbikge1xuICAgICAgdmFyIHJ1bnRpbWVWZXJzaW9ucyA9IFJFVklTSU9OX0NIQU5HRVNbY3VycmVudFJldmlzaW9uXSxcbiAgICAgICAgICBjb21waWxlclZlcnNpb25zID0gUkVWSVNJT05fQ0hBTkdFU1tjb21waWxlclJldmlzaW9uXTtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oXCJUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhbiBvbGRlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiBcIitcbiAgICAgICAgICAgIFwiUGxlYXNlIHVwZGF0ZSB5b3VyIHByZWNvbXBpbGVyIHRvIGEgbmV3ZXIgdmVyc2lvbiAoXCIrcnVudGltZVZlcnNpb25zK1wiKSBvciBkb3duZ3JhZGUgeW91ciBydW50aW1lIHRvIGFuIG9sZGVyIHZlcnNpb24gKFwiK2NvbXBpbGVyVmVyc2lvbnMrXCIpLlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXNlIHRoZSBlbWJlZGRlZCB2ZXJzaW9uIGluZm8gc2luY2UgdGhlIHJ1bnRpbWUgZG9lc24ndCBrbm93IGFib3V0IHRoaXMgcmV2aXNpb24geWV0XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKFwiVGVtcGxhdGUgd2FzIHByZWNvbXBpbGVkIHdpdGggYSBuZXdlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiBcIitcbiAgICAgICAgICAgIFwiUGxlYXNlIHVwZGF0ZSB5b3VyIHJ1bnRpbWUgdG8gYSBuZXdlciB2ZXJzaW9uIChcIitjb21waWxlckluZm9bMV0rXCIpLlwiKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5jaGVja1JldmlzaW9uID0gY2hlY2tSZXZpc2lvbjsvLyBUT0RPOiBSZW1vdmUgdGhpcyBsaW5lIGFuZCBicmVhayB1cCBjb21waWxlUGFydGlhbFxuXG5mdW5jdGlvbiB0ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMsIGVudikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoIWVudikge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oXCJObyBlbnZpcm9ubWVudCBwYXNzZWQgdG8gdGVtcGxhdGVcIik7XG4gIH1cbiAgaWYgKCF0ZW1wbGF0ZVNwZWMgfHwgIXRlbXBsYXRlU3BlYy5tYWluKSB7XG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVW5rbm93biB0ZW1wbGF0ZSBvYmplY3Q6ICcgKyB0eXBlb2YgdGVtcGxhdGVTcGVjKTtcbiAgfVxuXG4gIC8vIE5vdGU6IFVzaW5nIGVudi5WTSByZWZlcmVuY2VzIHJhdGhlciB0aGFuIGxvY2FsIHZhciByZWZlcmVuY2VzIHRocm91Z2hvdXQgdGhpcyBzZWN0aW9uIHRvIGFsbG93XG4gIC8vIGZvciBleHRlcm5hbCB1c2VycyB0byBvdmVycmlkZSB0aGVzZSBhcyBwc3VlZG8tc3VwcG9ydGVkIEFQSXMuXG4gIGVudi5WTS5jaGVja1JldmlzaW9uKHRlbXBsYXRlU3BlYy5jb21waWxlcik7XG5cbiAgdmFyIGludm9rZVBhcnRpYWxXcmFwcGVyID0gZnVuY3Rpb24ocGFydGlhbCwgaW5kZW50LCBuYW1lLCBjb250ZXh0LCBoYXNoLCBoZWxwZXJzLCBwYXJ0aWFscywgZGF0YSwgZGVwdGhzKSB7XG4gICAgaWYgKGhhc2gpIHtcbiAgICAgIGNvbnRleHQgPSBVdGlscy5leHRlbmQoe30sIGNvbnRleHQsIGhhc2gpO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBlbnYuVk0uaW52b2tlUGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwsIG5hbWUsIGNvbnRleHQsIGhlbHBlcnMsIHBhcnRpYWxzLCBkYXRhLCBkZXB0aHMpO1xuXG4gICAgaWYgKHJlc3VsdCA9PSBudWxsICYmIGVudi5jb21waWxlKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHsgaGVscGVyczogaGVscGVycywgcGFydGlhbHM6IHBhcnRpYWxzLCBkYXRhOiBkYXRhLCBkZXB0aHM6IGRlcHRocyB9O1xuICAgICAgcGFydGlhbHNbbmFtZV0gPSBlbnYuY29tcGlsZShwYXJ0aWFsLCB7IGRhdGE6IGRhdGEgIT09IHVuZGVmaW5lZCwgY29tcGF0OiB0ZW1wbGF0ZVNwZWMuY29tcGF0IH0sIGVudik7XG4gICAgICByZXN1bHQgPSBwYXJ0aWFsc1tuYW1lXShjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICBpZiAoaW5kZW50KSB7XG4gICAgICAgIHZhciBsaW5lcyA9IHJlc3VsdC5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGluZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFsaW5lc1tpXSAmJiBpICsgMSA9PT0gbCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGluZXNbaV0gPSBpbmRlbnQgKyBsaW5lc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBsaW5lcy5qb2luKCdcXG4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oXCJUaGUgcGFydGlhbCBcIiArIG5hbWUgKyBcIiBjb3VsZCBub3QgYmUgY29tcGlsZWQgd2hlbiBydW5uaW5nIGluIHJ1bnRpbWUtb25seSBtb2RlXCIpO1xuICAgIH1cbiAgfTtcblxuICAvLyBKdXN0IGFkZCB3YXRlclxuICB2YXIgY29udGFpbmVyID0ge1xuICAgIGxvb2t1cDogZnVuY3Rpb24oZGVwdGhzLCBuYW1lKSB7XG4gICAgICB2YXIgbGVuID0gZGVwdGhzLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGRlcHRoc1tpXSAmJiBkZXB0aHNbaV1bbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBkZXB0aHNbaV1bbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxhbWJkYTogZnVuY3Rpb24oY3VycmVudCwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBjdXJyZW50ID09PSAnZnVuY3Rpb24nID8gY3VycmVudC5jYWxsKGNvbnRleHQpIDogY3VycmVudDtcbiAgICB9LFxuXG4gICAgZXNjYXBlRXhwcmVzc2lvbjogVXRpbHMuZXNjYXBlRXhwcmVzc2lvbixcbiAgICBpbnZva2VQYXJ0aWFsOiBpbnZva2VQYXJ0aWFsV3JhcHBlcixcblxuICAgIGZuOiBmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gdGVtcGxhdGVTcGVjW2ldO1xuICAgIH0sXG5cbiAgICBwcm9ncmFtczogW10sXG4gICAgcHJvZ3JhbTogZnVuY3Rpb24oaSwgZGF0YSwgZGVwdGhzKSB7XG4gICAgICB2YXIgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldLFxuICAgICAgICAgIGZuID0gdGhpcy5mbihpKTtcbiAgICAgIGlmIChkYXRhIHx8IGRlcHRocykge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHByb2dyYW0odGhpcywgaSwgZm4sIGRhdGEsIGRlcHRocyk7XG4gICAgICB9IGVsc2UgaWYgKCFwcm9ncmFtV3JhcHBlcikge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0gPSBwcm9ncmFtKHRoaXMsIGksIGZuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9ncmFtV3JhcHBlcjtcbiAgICB9LFxuXG4gICAgZGF0YTogZnVuY3Rpb24oZGF0YSwgZGVwdGgpIHtcbiAgICAgIHdoaWxlIChkYXRhICYmIGRlcHRoLS0pIHtcbiAgICAgICAgZGF0YSA9IGRhdGEuX3BhcmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG4gICAgbWVyZ2U6IGZ1bmN0aW9uKHBhcmFtLCBjb21tb24pIHtcbiAgICAgIHZhciByZXQgPSBwYXJhbSB8fCBjb21tb247XG5cbiAgICAgIGlmIChwYXJhbSAmJiBjb21tb24gJiYgKHBhcmFtICE9PSBjb21tb24pKSB7XG4gICAgICAgIHJldCA9IFV0aWxzLmV4dGVuZCh7fSwgY29tbW9uLCBwYXJhbSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcblxuICAgIG5vb3A6IGVudi5WTS5ub29wLFxuICAgIGNvbXBpbGVySW5mbzogdGVtcGxhdGVTcGVjLmNvbXBpbGVyXG4gIH07XG5cbiAgdmFyIHJldCA9IGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgZGF0YSA9IG9wdGlvbnMuZGF0YTtcblxuICAgIHJldC5fc2V0dXAob3B0aW9ucyk7XG4gICAgaWYgKCFvcHRpb25zLnBhcnRpYWwgJiYgdGVtcGxhdGVTcGVjLnVzZURhdGEpIHtcbiAgICAgIGRhdGEgPSBpbml0RGF0YShjb250ZXh0LCBkYXRhKTtcbiAgICB9XG4gICAgdmFyIGRlcHRocztcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocykge1xuICAgICAgZGVwdGhzID0gb3B0aW9ucy5kZXB0aHMgPyBbY29udGV4dF0uY29uY2F0KG9wdGlvbnMuZGVwdGhzKSA6IFtjb250ZXh0XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcGxhdGVTcGVjLm1haW4uY2FsbChjb250YWluZXIsIGNvbnRleHQsIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsIGRhdGEsIGRlcHRocyk7XG4gIH07XG4gIHJldC5pc1RvcCA9IHRydWU7XG5cbiAgcmV0Ll9zZXR1cCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMucGFydGlhbCkge1xuICAgICAgY29udGFpbmVyLmhlbHBlcnMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5oZWxwZXJzLCBlbnYuaGVscGVycyk7XG5cbiAgICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlUGFydGlhbCkge1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5wYXJ0aWFscywgZW52LnBhcnRpYWxzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLmhlbHBlcnMgPSBvcHRpb25zLmhlbHBlcnM7XG4gICAgICBjb250YWluZXIucGFydGlhbHMgPSBvcHRpb25zLnBhcnRpYWxzO1xuICAgIH1cbiAgfTtcblxuICByZXQuX2NoaWxkID0gZnVuY3Rpb24oaSwgZGF0YSwgZGVwdGhzKSB7XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VEZXB0aHMgJiYgIWRlcHRocykge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignbXVzdCBwYXNzIHBhcmVudCBkZXB0aHMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvZ3JhbShjb250YWluZXIsIGksIHRlbXBsYXRlU3BlY1tpXSwgZGF0YSwgZGVwdGhzKTtcbiAgfTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0cy50ZW1wbGF0ZSA9IHRlbXBsYXRlO2Z1bmN0aW9uIHByb2dyYW0oY29udGFpbmVyLCBpLCBmbiwgZGF0YSwgZGVwdGhzKSB7XG4gIHZhciBwcm9nID0gZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgcmV0dXJuIGZuLmNhbGwoY29udGFpbmVyLCBjb250ZXh0LCBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLCBvcHRpb25zLmRhdGEgfHwgZGF0YSwgZGVwdGhzICYmIFtjb250ZXh0XS5jb25jYXQoZGVwdGhzKSk7XG4gIH07XG4gIHByb2cucHJvZ3JhbSA9IGk7XG4gIHByb2cuZGVwdGggPSBkZXB0aHMgPyBkZXB0aHMubGVuZ3RoIDogMDtcbiAgcmV0dXJuIHByb2c7XG59XG5cbmV4cG9ydHMucHJvZ3JhbSA9IHByb2dyYW07ZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBuYW1lLCBjb250ZXh0LCBoZWxwZXJzLCBwYXJ0aWFscywgZGF0YSwgZGVwdGhzKSB7XG4gIHZhciBvcHRpb25zID0geyBwYXJ0aWFsOiB0cnVlLCBoZWxwZXJzOiBoZWxwZXJzLCBwYXJ0aWFsczogcGFydGlhbHMsIGRhdGE6IGRhdGEsIGRlcHRoczogZGVwdGhzIH07XG5cbiAgaWYocGFydGlhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbihcIlRoZSBwYXJ0aWFsIFwiICsgbmFtZSArIFwiIGNvdWxkIG5vdCBiZSBmb3VuZFwiKTtcbiAgfSBlbHNlIGlmKHBhcnRpYWwgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIHJldHVybiBwYXJ0aWFsKGNvbnRleHQsIG9wdGlvbnMpO1xuICB9XG59XG5cbmV4cG9ydHMuaW52b2tlUGFydGlhbCA9IGludm9rZVBhcnRpYWw7ZnVuY3Rpb24gbm9vcCgpIHsgcmV0dXJuIFwiXCI7IH1cblxuZXhwb3J0cy5ub29wID0gbm9vcDtmdW5jdGlvbiBpbml0RGF0YShjb250ZXh0LCBkYXRhKSB7XG4gIGlmICghZGF0YSB8fCAhKCdyb290JyBpbiBkYXRhKSkge1xuICAgIGRhdGEgPSBkYXRhID8gY3JlYXRlRnJhbWUoZGF0YSkgOiB7fTtcbiAgICBkYXRhLnJvb3QgPSBjb250ZXh0O1xuICB9XG4gIHJldHVybiBkYXRhO1xufSIsIlwidXNlIHN0cmljdFwiO1xuLy8gQnVpbGQgb3V0IG91ciBiYXNpYyBTYWZlU3RyaW5nIHR5cGVcbmZ1bmN0aW9uIFNhZmVTdHJpbmcoc3RyaW5nKSB7XG4gIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xufVxuXG5TYWZlU3RyaW5nLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gXCJcIiArIHRoaXMuc3RyaW5nO1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTYWZlU3RyaW5nOyIsIlwidXNlIHN0cmljdFwiO1xuLypqc2hpbnQgLVcwMDQgKi9cbnZhciBTYWZlU3RyaW5nID0gcmVxdWlyZShcIi4vc2FmZS1zdHJpbmdcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgZXNjYXBlID0ge1xuICBcIiZcIjogXCImYW1wO1wiLFxuICBcIjxcIjogXCImbHQ7XCIsXG4gIFwiPlwiOiBcIiZndDtcIixcbiAgJ1wiJzogXCImcXVvdDtcIixcbiAgXCInXCI6IFwiJiN4Mjc7XCIsXG4gIFwiYFwiOiBcIiYjeDYwO1wiXG59O1xuXG52YXIgYmFkQ2hhcnMgPSAvWyY8PlwiJ2BdL2c7XG52YXIgcG9zc2libGUgPSAvWyY8PlwiJ2BdLztcblxuZnVuY3Rpb24gZXNjYXBlQ2hhcihjaHIpIHtcbiAgcmV0dXJuIGVzY2FwZVtjaHJdO1xufVxuXG5mdW5jdGlvbiBleHRlbmQob2JqIC8qICwgLi4uc291cmNlICovKSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnRzLmV4dGVuZCA9IGV4dGVuZDt2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuZXhwb3J0cy50b1N0cmluZyA9IHRvU3RyaW5nO1xuLy8gU291cmNlZCBmcm9tIGxvZGFzaFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChpc0Z1bmN0aW9uKC94LykpIHtcbiAgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfTtcbn1cbnZhciBpc0Z1bmN0aW9uO1xuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSA/IHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nIDogZmFsc2U7XG59O1xuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcbiAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuICBpZiAoc3RyaW5nIGluc3RhbmNlb2YgU2FmZVN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcudG9TdHJpbmcoKTtcbiAgfSBlbHNlIGlmIChzdHJpbmcgPT0gbnVsbCkge1xuICAgIHJldHVybiBcIlwiO1xuICB9IGVsc2UgaWYgKCFzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nICsgJyc7XG4gIH1cblxuICAvLyBGb3JjZSBhIHN0cmluZyBjb252ZXJzaW9uIGFzIHRoaXMgd2lsbCBiZSBkb25lIGJ5IHRoZSBhcHBlbmQgcmVnYXJkbGVzcyBhbmRcbiAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG4gIC8vIGFuIG9iamVjdCdzIHRvIHN0cmluZyBoYXMgZXNjYXBlZCBjaGFyYWN0ZXJzIGluIGl0LlxuICBzdHJpbmcgPSBcIlwiICsgc3RyaW5nO1xuXG4gIGlmKCFwb3NzaWJsZS50ZXN0KHN0cmluZykpIHsgcmV0dXJuIHN0cmluZzsgfVxuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoYmFkQ2hhcnMsIGVzY2FwZUNoYXIpO1xufVxuXG5leHBvcnRzLmVzY2FwZUV4cHJlc3Npb24gPSBlc2NhcGVFeHByZXNzaW9uO2Z1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnRzLmlzRW1wdHkgPSBpc0VtcHR5O2Z1bmN0aW9uIGFwcGVuZENvbnRleHRQYXRoKGNvbnRleHRQYXRoLCBpZCkge1xuICByZXR1cm4gKGNvbnRleHRQYXRoID8gY29udGV4dFBhdGggKyAnLicgOiAnJykgKyBpZDtcbn1cblxuZXhwb3J0cy5hcHBlbmRDb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoOyIsIi8vIENyZWF0ZSBhIHNpbXBsZSBwYXRoIGFsaWFzIHRvIGFsbG93IGJyb3dzZXJpZnkgdG8gcmVzb2x2ZVxuLy8gdGhlIHJ1bnRpbWUgb24gYSBzdXBwb3J0ZWQgcGF0aC5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2Nqcy9oYW5kbGViYXJzLnJ1bnRpbWUnKTtcbiIsIi8vICAgICBVbmRlcnNjb3JlLmpzIDEuOC4zXG4vLyAgICAgaHR0cDovL3VuZGVyc2NvcmVqcy5vcmdcbi8vICAgICAoYykgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4vLyAgICAgVW5kZXJzY29yZSBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuKGZ1bmN0aW9uKCkge1xuXG4gIC8vIEJhc2VsaW5lIHNldHVwXG4gIC8vIC0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gRXN0YWJsaXNoIHRoZSByb290IG9iamVjdCwgYHdpbmRvd2AgaW4gdGhlIGJyb3dzZXIsIG9yIGBleHBvcnRzYCBvbiB0aGUgc2VydmVyLlxuICB2YXIgcm9vdCA9IHRoaXM7XG5cbiAgLy8gU2F2ZSB0aGUgcHJldmlvdXMgdmFsdWUgb2YgdGhlIGBfYCB2YXJpYWJsZS5cbiAgdmFyIHByZXZpb3VzVW5kZXJzY29yZSA9IHJvb3QuXztcblxuICAvLyBTYXZlIGJ5dGVzIGluIHRoZSBtaW5pZmllZCAoYnV0IG5vdCBnemlwcGVkKSB2ZXJzaW9uOlxuICB2YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSwgT2JqUHJvdG8gPSBPYmplY3QucHJvdG90eXBlLCBGdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgLy8gQ3JlYXRlIHF1aWNrIHJlZmVyZW5jZSB2YXJpYWJsZXMgZm9yIHNwZWVkIGFjY2VzcyB0byBjb3JlIHByb3RvdHlwZXMuXG4gIHZhclxuICAgIHB1c2ggICAgICAgICAgICAgPSBBcnJheVByb3RvLnB1c2gsXG4gICAgc2xpY2UgICAgICAgICAgICA9IEFycmF5UHJvdG8uc2xpY2UsXG4gICAgdG9TdHJpbmcgICAgICAgICA9IE9ialByb3RvLnRvU3RyaW5nLFxuICAgIGhhc093blByb3BlcnR5ICAgPSBPYmpQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuICAvLyBBbGwgKipFQ01BU2NyaXB0IDUqKiBuYXRpdmUgZnVuY3Rpb24gaW1wbGVtZW50YXRpb25zIHRoYXQgd2UgaG9wZSB0byB1c2VcbiAgLy8gYXJlIGRlY2xhcmVkIGhlcmUuXG4gIHZhclxuICAgIG5hdGl2ZUlzQXJyYXkgICAgICA9IEFycmF5LmlzQXJyYXksXG4gICAgbmF0aXZlS2V5cyAgICAgICAgID0gT2JqZWN0LmtleXMsXG4gICAgbmF0aXZlQmluZCAgICAgICAgID0gRnVuY1Byb3RvLmJpbmQsXG4gICAgbmF0aXZlQ3JlYXRlICAgICAgID0gT2JqZWN0LmNyZWF0ZTtcblxuICAvLyBOYWtlZCBmdW5jdGlvbiByZWZlcmVuY2UgZm9yIHN1cnJvZ2F0ZS1wcm90b3R5cGUtc3dhcHBpbmcuXG4gIHZhciBDdG9yID0gZnVuY3Rpb24oKXt9O1xuXG4gIC8vIENyZWF0ZSBhIHNhZmUgcmVmZXJlbmNlIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdCBmb3IgdXNlIGJlbG93LlxuICB2YXIgXyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBfKSByZXR1cm4gb2JqO1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBfKSkgcmV0dXJuIG5ldyBfKG9iaik7XG4gICAgdGhpcy5fd3JhcHBlZCA9IG9iajtcbiAgfTtcblxuICAvLyBFeHBvcnQgdGhlIFVuZGVyc2NvcmUgb2JqZWN0IGZvciAqKk5vZGUuanMqKiwgd2l0aFxuICAvLyBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSBmb3IgdGhlIG9sZCBgcmVxdWlyZSgpYCBBUEkuIElmIHdlJ3JlIGluXG4gIC8vIHRoZSBicm93c2VyLCBhZGQgYF9gIGFzIGEgZ2xvYmFsIG9iamVjdC5cbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gXztcbiAgICB9XG4gICAgZXhwb3J0cy5fID0gXztcbiAgfSBlbHNlIHtcbiAgICByb290Ll8gPSBfO1xuICB9XG5cbiAgLy8gQ3VycmVudCB2ZXJzaW9uLlxuICBfLlZFUlNJT04gPSAnMS44LjMnO1xuXG4gIC8vIEludGVybmFsIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBlZmZpY2llbnQgKGZvciBjdXJyZW50IGVuZ2luZXMpIHZlcnNpb25cbiAgLy8gb2YgdGhlIHBhc3NlZC1pbiBjYWxsYmFjaywgdG8gYmUgcmVwZWF0ZWRseSBhcHBsaWVkIGluIG90aGVyIFVuZGVyc2NvcmVcbiAgLy8gZnVuY3Rpb25zLlxuICB2YXIgb3B0aW1pemVDYiA9IGZ1bmN0aW9uKGZ1bmMsIGNvbnRleHQsIGFyZ0NvdW50KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgcmV0dXJuIGZ1bmM7XG4gICAgc3dpdGNoIChhcmdDb3VudCA9PSBudWxsID8gMyA6IGFyZ0NvdW50KSB7XG4gICAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIHZhbHVlKTtcbiAgICAgIH07XG4gICAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbih2YWx1ZSwgb3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCB2YWx1ZSwgb3RoZXIpO1xuICAgICAgfTtcbiAgICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgICB9O1xuICAgICAgY2FzZSA0OiByZXR1cm4gZnVuY3Rpb24oYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEEgbW9zdGx5LWludGVybmFsIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGNhbGxiYWNrcyB0aGF0IGNhbiBiZSBhcHBsaWVkXG4gIC8vIHRvIGVhY2ggZWxlbWVudCBpbiBhIGNvbGxlY3Rpb24sIHJldHVybmluZyB0aGUgZGVzaXJlZCByZXN1bHQg4oCUIGVpdGhlclxuICAvLyBpZGVudGl0eSwgYW4gYXJiaXRyYXJ5IGNhbGxiYWNrLCBhIHByb3BlcnR5IG1hdGNoZXIsIG9yIGEgcHJvcGVydHkgYWNjZXNzb3IuXG4gIHZhciBjYiA9IGZ1bmN0aW9uKHZhbHVlLCBjb250ZXh0LCBhcmdDb3VudCkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gXy5pZGVudGl0eTtcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKHZhbHVlKSkgcmV0dXJuIG9wdGltaXplQ2IodmFsdWUsIGNvbnRleHQsIGFyZ0NvdW50KTtcbiAgICBpZiAoXy5pc09iamVjdCh2YWx1ZSkpIHJldHVybiBfLm1hdGNoZXIodmFsdWUpO1xuICAgIHJldHVybiBfLnByb3BlcnR5KHZhbHVlKTtcbiAgfTtcbiAgXy5pdGVyYXRlZSA9IGZ1bmN0aW9uKHZhbHVlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNiKHZhbHVlLCBjb250ZXh0LCBJbmZpbml0eSk7XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIGFzc2lnbmVyIGZ1bmN0aW9ucy5cbiAgdmFyIGNyZWF0ZUFzc2lnbmVyID0gZnVuY3Rpb24oa2V5c0Z1bmMsIHVuZGVmaW5lZE9ubHkpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggPCAyIHx8IG9iaiA9PSBudWxsKSByZXR1cm4gb2JqO1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2luZGV4XSxcbiAgICAgICAgICAgIGtleXMgPSBrZXlzRnVuYyhzb3VyY2UpLFxuICAgICAgICAgICAgbCA9IGtleXMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmICghdW5kZWZpbmVkT25seSB8fCBvYmpba2V5XSA9PT0gdm9pZCAwKSBvYmpba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH07XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIGEgbmV3IG9iamVjdCB0aGF0IGluaGVyaXRzIGZyb20gYW5vdGhlci5cbiAgdmFyIGJhc2VDcmVhdGUgPSBmdW5jdGlvbihwcm90b3R5cGUpIHtcbiAgICBpZiAoIV8uaXNPYmplY3QocHJvdG90eXBlKSkgcmV0dXJuIHt9O1xuICAgIGlmIChuYXRpdmVDcmVhdGUpIHJldHVybiBuYXRpdmVDcmVhdGUocHJvdG90eXBlKTtcbiAgICBDdG9yLnByb3RvdHlwZSA9IHByb3RvdHlwZTtcbiAgICB2YXIgcmVzdWx0ID0gbmV3IEN0b3I7XG4gICAgQ3Rvci5wcm90b3R5cGUgPSBudWxsO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIHByb3BlcnR5ID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiA9PSBudWxsID8gdm9pZCAwIDogb2JqW2tleV07XG4gICAgfTtcbiAgfTtcblxuICAvLyBIZWxwZXIgZm9yIGNvbGxlY3Rpb24gbWV0aG9kcyB0byBkZXRlcm1pbmUgd2hldGhlciBhIGNvbGxlY3Rpb25cbiAgLy8gc2hvdWxkIGJlIGl0ZXJhdGVkIGFzIGFuIGFycmF5IG9yIGFzIGFuIG9iamVjdFxuICAvLyBSZWxhdGVkOiBodHRwOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2xlbmd0aFxuICAvLyBBdm9pZHMgYSB2ZXJ5IG5hc3R5IGlPUyA4IEpJVCBidWcgb24gQVJNLTY0LiAjMjA5NFxuICB2YXIgTUFYX0FSUkFZX0lOREVYID0gTWF0aC5wb3coMiwgNTMpIC0gMTtcbiAgdmFyIGdldExlbmd0aCA9IHByb3BlcnR5KCdsZW5ndGgnKTtcbiAgdmFyIGlzQXJyYXlMaWtlID0gZnVuY3Rpb24oY29sbGVjdGlvbikge1xuICAgIHZhciBsZW5ndGggPSBnZXRMZW5ndGgoY29sbGVjdGlvbik7XG4gICAgcmV0dXJuIHR5cGVvZiBsZW5ndGggPT0gJ251bWJlcicgJiYgbGVuZ3RoID49IDAgJiYgbGVuZ3RoIDw9IE1BWF9BUlJBWV9JTkRFWDtcbiAgfTtcblxuICAvLyBDb2xsZWN0aW9uIEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFRoZSBjb3JuZXJzdG9uZSwgYW4gYGVhY2hgIGltcGxlbWVudGF0aW9uLCBha2EgYGZvckVhY2hgLlxuICAvLyBIYW5kbGVzIHJhdyBvYmplY3RzIGluIGFkZGl0aW9uIHRvIGFycmF5LWxpa2VzLiBUcmVhdHMgYWxsXG4gIC8vIHNwYXJzZSBhcnJheS1saWtlcyBhcyBpZiB0aGV5IHdlcmUgZGVuc2UuXG4gIF8uZWFjaCA9IF8uZm9yRWFjaCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRlZSA9IG9wdGltaXplQ2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHZhciBpLCBsZW5ndGg7XG4gICAgaWYgKGlzQXJyYXlMaWtlKG9iaikpIHtcbiAgICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVyYXRlZShvYmpbaV0sIGksIG9iaik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZXJhdGVlKG9ialtrZXlzW2ldXSwga2V5c1tpXSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIHJlc3VsdHMgb2YgYXBwbHlpbmcgdGhlIGl0ZXJhdGVlIHRvIGVhY2ggZWxlbWVudC5cbiAgXy5tYXAgPSBfLmNvbGxlY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSAhaXNBcnJheUxpa2Uob2JqKSAmJiBfLmtleXMob2JqKSxcbiAgICAgICAgbGVuZ3RoID0gKGtleXMgfHwgb2JqKS5sZW5ndGgsXG4gICAgICAgIHJlc3VsdHMgPSBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBjdXJyZW50S2V5ID0ga2V5cyA/IGtleXNbaW5kZXhdIDogaW5kZXg7XG4gICAgICByZXN1bHRzW2luZGV4XSA9IGl0ZXJhdGVlKG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIGEgcmVkdWNpbmcgZnVuY3Rpb24gaXRlcmF0aW5nIGxlZnQgb3IgcmlnaHQuXG4gIGZ1bmN0aW9uIGNyZWF0ZVJlZHVjZShkaXIpIHtcbiAgICAvLyBPcHRpbWl6ZWQgaXRlcmF0b3IgZnVuY3Rpb24gYXMgdXNpbmcgYXJndW1lbnRzLmxlbmd0aFxuICAgIC8vIGluIHRoZSBtYWluIGZ1bmN0aW9uIHdpbGwgZGVvcHRpbWl6ZSB0aGUsIHNlZSAjMTk5MS5cbiAgICBmdW5jdGlvbiBpdGVyYXRvcihvYmosIGl0ZXJhdGVlLCBtZW1vLCBrZXlzLCBpbmRleCwgbGVuZ3RoKSB7XG4gICAgICBmb3IgKDsgaW5kZXggPj0gMCAmJiBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gZGlyKSB7XG4gICAgICAgIHZhciBjdXJyZW50S2V5ID0ga2V5cyA/IGtleXNbaW5kZXhdIDogaW5kZXg7XG4gICAgICAgIG1lbW8gPSBpdGVyYXRlZShtZW1vLCBvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWVtbztcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgbWVtbywgY29udGV4dCkge1xuICAgICAgaXRlcmF0ZWUgPSBvcHRpbWl6ZUNiKGl0ZXJhdGVlLCBjb250ZXh0LCA0KTtcbiAgICAgIHZhciBrZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYgXy5rZXlzKG9iaiksXG4gICAgICAgICAgbGVuZ3RoID0gKGtleXMgfHwgb2JqKS5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSBkaXIgPiAwID8gMCA6IGxlbmd0aCAtIDE7XG4gICAgICAvLyBEZXRlcm1pbmUgdGhlIGluaXRpYWwgdmFsdWUgaWYgbm9uZSBpcyBwcm92aWRlZC5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykge1xuICAgICAgICBtZW1vID0gb2JqW2tleXMgPyBrZXlzW2luZGV4XSA6IGluZGV4XTtcbiAgICAgICAgaW5kZXggKz0gZGlyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZXJhdG9yKG9iaiwgaXRlcmF0ZWUsIG1lbW8sIGtleXMsIGluZGV4LCBsZW5ndGgpO1xuICAgIH07XG4gIH1cblxuICAvLyAqKlJlZHVjZSoqIGJ1aWxkcyB1cCBhIHNpbmdsZSByZXN1bHQgZnJvbSBhIGxpc3Qgb2YgdmFsdWVzLCBha2EgYGluamVjdGAsXG4gIC8vIG9yIGBmb2xkbGAuXG4gIF8ucmVkdWNlID0gXy5mb2xkbCA9IF8uaW5qZWN0ID0gY3JlYXRlUmVkdWNlKDEpO1xuXG4gIC8vIFRoZSByaWdodC1hc3NvY2lhdGl2ZSB2ZXJzaW9uIG9mIHJlZHVjZSwgYWxzbyBrbm93biBhcyBgZm9sZHJgLlxuICBfLnJlZHVjZVJpZ2h0ID0gXy5mb2xkciA9IGNyZWF0ZVJlZHVjZSgtMSk7XG5cbiAgLy8gUmV0dXJuIHRoZSBmaXJzdCB2YWx1ZSB3aGljaCBwYXNzZXMgYSB0cnV0aCB0ZXN0LiBBbGlhc2VkIGFzIGBkZXRlY3RgLlxuICBfLmZpbmQgPSBfLmRldGVjdCA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIGtleTtcbiAgICBpZiAoaXNBcnJheUxpa2Uob2JqKSkge1xuICAgICAga2V5ID0gXy5maW5kSW5kZXgob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXkgPSBfLmZpbmRLZXkob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIH1cbiAgICBpZiAoa2V5ICE9PSB2b2lkIDAgJiYga2V5ICE9PSAtMSkgcmV0dXJuIG9ialtrZXldO1xuICB9O1xuXG4gIC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIHRoYXQgcGFzcyBhIHRydXRoIHRlc3QuXG4gIC8vIEFsaWFzZWQgYXMgYHNlbGVjdGAuXG4gIF8uZmlsdGVyID0gXy5zZWxlY3QgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBsaXN0KSkgcmVzdWx0cy5wdXNoKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICAvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyBmb3Igd2hpY2ggYSB0cnV0aCB0ZXN0IGZhaWxzLlxuICBfLnJlamVjdCA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIF8uZmlsdGVyKG9iaiwgXy5uZWdhdGUoY2IocHJlZGljYXRlKSksIGNvbnRleHQpO1xuICB9O1xuXG4gIC8vIERldGVybWluZSB3aGV0aGVyIGFsbCBvZiB0aGUgZWxlbWVudHMgbWF0Y2ggYSB0cnV0aCB0ZXN0LlxuICAvLyBBbGlhc2VkIGFzIGBhbGxgLlxuICBfLmV2ZXJ5ID0gXy5hbGwgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSAhaXNBcnJheUxpa2Uob2JqKSAmJiBfLmtleXMob2JqKSxcbiAgICAgICAgbGVuZ3RoID0gKGtleXMgfHwgb2JqKS5sZW5ndGg7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIGN1cnJlbnRLZXkgPSBrZXlzID8ga2V5c1tpbmRleF0gOiBpbmRleDtcbiAgICAgIGlmICghcHJlZGljYXRlKG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgaWYgYXQgbGVhc3Qgb25lIGVsZW1lbnQgaW4gdGhlIG9iamVjdCBtYXRjaGVzIGEgdHJ1dGggdGVzdC5cbiAgLy8gQWxpYXNlZCBhcyBgYW55YC5cbiAgXy5zb21lID0gXy5hbnkgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSAhaXNBcnJheUxpa2Uob2JqKSAmJiBfLmtleXMob2JqKSxcbiAgICAgICAgbGVuZ3RoID0gKGtleXMgfHwgb2JqKS5sZW5ndGg7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIGN1cnJlbnRLZXkgPSBrZXlzID8ga2V5c1tpbmRleF0gOiBpbmRleDtcbiAgICAgIGlmIChwcmVkaWNhdGUob2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8vIERldGVybWluZSBpZiB0aGUgYXJyYXkgb3Igb2JqZWN0IGNvbnRhaW5zIGEgZ2l2ZW4gaXRlbSAodXNpbmcgYD09PWApLlxuICAvLyBBbGlhc2VkIGFzIGBpbmNsdWRlc2AgYW5kIGBpbmNsdWRlYC5cbiAgXy5jb250YWlucyA9IF8uaW5jbHVkZXMgPSBfLmluY2x1ZGUgPSBmdW5jdGlvbihvYmosIGl0ZW0sIGZyb21JbmRleCwgZ3VhcmQpIHtcbiAgICBpZiAoIWlzQXJyYXlMaWtlKG9iaikpIG9iaiA9IF8udmFsdWVzKG9iaik7XG4gICAgaWYgKHR5cGVvZiBmcm9tSW5kZXggIT0gJ251bWJlcicgfHwgZ3VhcmQpIGZyb21JbmRleCA9IDA7XG4gICAgcmV0dXJuIF8uaW5kZXhPZihvYmosIGl0ZW0sIGZyb21JbmRleCkgPj0gMDtcbiAgfTtcblxuICAvLyBJbnZva2UgYSBtZXRob2QgKHdpdGggYXJndW1lbnRzKSBvbiBldmVyeSBpdGVtIGluIGEgY29sbGVjdGlvbi5cbiAgXy5pbnZva2UgPSBmdW5jdGlvbihvYmosIG1ldGhvZCkge1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHZhciBpc0Z1bmMgPSBfLmlzRnVuY3Rpb24obWV0aG9kKTtcbiAgICByZXR1cm4gXy5tYXAob2JqLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIGZ1bmMgPSBpc0Z1bmMgPyBtZXRob2QgOiB2YWx1ZVttZXRob2RdO1xuICAgICAgcmV0dXJuIGZ1bmMgPT0gbnVsbCA/IGZ1bmMgOiBmdW5jLmFwcGx5KHZhbHVlLCBhcmdzKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBtYXBgOiBmZXRjaGluZyBhIHByb3BlcnR5LlxuICBfLnBsdWNrID0gZnVuY3Rpb24ob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gXy5tYXAob2JqLCBfLnByb3BlcnR5KGtleSkpO1xuICB9O1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYGZpbHRlcmA6IHNlbGVjdGluZyBvbmx5IG9iamVjdHNcbiAgLy8gY29udGFpbmluZyBzcGVjaWZpYyBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy53aGVyZSA9IGZ1bmN0aW9uKG9iaiwgYXR0cnMpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIob2JqLCBfLm1hdGNoZXIoYXR0cnMpKTtcbiAgfTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBmaW5kYDogZ2V0dGluZyB0aGUgZmlyc3Qgb2JqZWN0XG4gIC8vIGNvbnRhaW5pbmcgc3BlY2lmaWMgYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8uZmluZFdoZXJlID0gZnVuY3Rpb24ob2JqLCBhdHRycykge1xuICAgIHJldHVybiBfLmZpbmQob2JqLCBfLm1hdGNoZXIoYXR0cnMpKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIG1heGltdW0gZWxlbWVudCAob3IgZWxlbWVudC1iYXNlZCBjb21wdXRhdGlvbikuXG4gIF8ubWF4ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHQgPSAtSW5maW5pdHksIGxhc3RDb21wdXRlZCA9IC1JbmZpbml0eSxcbiAgICAgICAgdmFsdWUsIGNvbXB1dGVkO1xuICAgIGlmIChpdGVyYXRlZSA9PSBudWxsICYmIG9iaiAhPSBudWxsKSB7XG4gICAgICBvYmogPSBpc0FycmF5TGlrZShvYmopID8gb2JqIDogXy52YWx1ZXMob2JqKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsdWUgPSBvYmpbaV07XG4gICAgICAgIGlmICh2YWx1ZSA+IHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgICAgXy5lYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUodmFsdWUsIGluZGV4LCBsaXN0KTtcbiAgICAgICAgaWYgKGNvbXB1dGVkID4gbGFzdENvbXB1dGVkIHx8IGNvbXB1dGVkID09PSAtSW5maW5pdHkgJiYgcmVzdWx0ID09PSAtSW5maW5pdHkpIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBsYXN0Q29tcHV0ZWQgPSBjb21wdXRlZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBtaW5pbXVtIGVsZW1lbnQgKG9yIGVsZW1lbnQtYmFzZWQgY29tcHV0YXRpb24pLlxuICBfLm1pbiA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0ID0gSW5maW5pdHksIGxhc3RDb21wdXRlZCA9IEluZmluaXR5LFxuICAgICAgICB2YWx1ZSwgY29tcHV0ZWQ7XG4gICAgaWYgKGl0ZXJhdGVlID09IG51bGwgJiYgb2JqICE9IG51bGwpIHtcbiAgICAgIG9iaiA9IGlzQXJyYXlMaWtlKG9iaikgPyBvYmogOiBfLnZhbHVlcyhvYmopO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YWx1ZSA9IG9ialtpXTtcbiAgICAgICAgaWYgKHZhbHVlIDwgcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSh2YWx1ZSwgaW5kZXgsIGxpc3QpO1xuICAgICAgICBpZiAoY29tcHV0ZWQgPCBsYXN0Q29tcHV0ZWQgfHwgY29tcHV0ZWQgPT09IEluZmluaXR5ICYmIHJlc3VsdCA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBsYXN0Q29tcHV0ZWQgPSBjb21wdXRlZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gU2h1ZmZsZSBhIGNvbGxlY3Rpb24sIHVzaW5nIHRoZSBtb2Rlcm4gdmVyc2lvbiBvZiB0aGVcbiAgLy8gW0Zpc2hlci1ZYXRlcyBzaHVmZmxlXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Zpc2hlcuKAk1lhdGVzX3NodWZmbGUpLlxuICBfLnNodWZmbGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgc2V0ID0gaXNBcnJheUxpa2Uob2JqKSA/IG9iaiA6IF8udmFsdWVzKG9iaik7XG4gICAgdmFyIGxlbmd0aCA9IHNldC5sZW5ndGg7XG4gICAgdmFyIHNodWZmbGVkID0gQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpbmRleCA9IDAsIHJhbmQ7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICByYW5kID0gXy5yYW5kb20oMCwgaW5kZXgpO1xuICAgICAgaWYgKHJhbmQgIT09IGluZGV4KSBzaHVmZmxlZFtpbmRleF0gPSBzaHVmZmxlZFtyYW5kXTtcbiAgICAgIHNodWZmbGVkW3JhbmRdID0gc2V0W2luZGV4XTtcbiAgICB9XG4gICAgcmV0dXJuIHNodWZmbGVkO1xuICB9O1xuXG4gIC8vIFNhbXBsZSAqKm4qKiByYW5kb20gdmFsdWVzIGZyb20gYSBjb2xsZWN0aW9uLlxuICAvLyBJZiAqKm4qKiBpcyBub3Qgc3BlY2lmaWVkLCByZXR1cm5zIGEgc2luZ2xlIHJhbmRvbSBlbGVtZW50LlxuICAvLyBUaGUgaW50ZXJuYWwgYGd1YXJkYCBhcmd1bWVudCBhbGxvd3MgaXQgdG8gd29yayB3aXRoIGBtYXBgLlxuICBfLnNhbXBsZSA9IGZ1bmN0aW9uKG9iaiwgbiwgZ3VhcmQpIHtcbiAgICBpZiAobiA9PSBudWxsIHx8IGd1YXJkKSB7XG4gICAgICBpZiAoIWlzQXJyYXlMaWtlKG9iaikpIG9iaiA9IF8udmFsdWVzKG9iaik7XG4gICAgICByZXR1cm4gb2JqW18ucmFuZG9tKG9iai5sZW5ndGggLSAxKV07XG4gICAgfVxuICAgIHJldHVybiBfLnNodWZmbGUob2JqKS5zbGljZSgwLCBNYXRoLm1heCgwLCBuKSk7XG4gIH07XG5cbiAgLy8gU29ydCB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uIHByb2R1Y2VkIGJ5IGFuIGl0ZXJhdGVlLlxuICBfLnNvcnRCeSA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICByZXR1cm4gXy5wbHVjayhfLm1hcChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIGNyaXRlcmlhOiBpdGVyYXRlZSh2YWx1ZSwgaW5kZXgsIGxpc3QpXG4gICAgICB9O1xuICAgIH0pLnNvcnQoZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgICAgIHZhciBhID0gbGVmdC5jcml0ZXJpYTtcbiAgICAgIHZhciBiID0gcmlnaHQuY3JpdGVyaWE7XG4gICAgICBpZiAoYSAhPT0gYikge1xuICAgICAgICBpZiAoYSA+IGIgfHwgYSA9PT0gdm9pZCAwKSByZXR1cm4gMTtcbiAgICAgICAgaWYgKGEgPCBiIHx8IGIgPT09IHZvaWQgMCkgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxlZnQuaW5kZXggLSByaWdodC5pbmRleDtcbiAgICB9KSwgJ3ZhbHVlJyk7XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gdXNlZCBmb3IgYWdncmVnYXRlIFwiZ3JvdXAgYnlcIiBvcGVyYXRpb25zLlxuICB2YXIgZ3JvdXAgPSBmdW5jdGlvbihiZWhhdmlvcikge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICAgIF8uZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgICB2YXIga2V5ID0gaXRlcmF0ZWUodmFsdWUsIGluZGV4LCBvYmopO1xuICAgICAgICBiZWhhdmlvcihyZXN1bHQsIHZhbHVlLCBrZXkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gR3JvdXBzIHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24uIFBhc3MgZWl0aGVyIGEgc3RyaW5nIGF0dHJpYnV0ZVxuICAvLyB0byBncm91cCBieSwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGNyaXRlcmlvbi5cbiAgXy5ncm91cEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gICAgaWYgKF8uaGFzKHJlc3VsdCwga2V5KSkgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSk7IGVsc2UgcmVzdWx0W2tleV0gPSBbdmFsdWVdO1xuICB9KTtcblxuICAvLyBJbmRleGVzIHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24sIHNpbWlsYXIgdG8gYGdyb3VwQnlgLCBidXQgZm9yXG4gIC8vIHdoZW4geW91IGtub3cgdGhhdCB5b3VyIGluZGV4IHZhbHVlcyB3aWxsIGJlIHVuaXF1ZS5cbiAgXy5pbmRleEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgfSk7XG5cbiAgLy8gQ291bnRzIGluc3RhbmNlcyBvZiBhbiBvYmplY3QgdGhhdCBncm91cCBieSBhIGNlcnRhaW4gY3JpdGVyaW9uLiBQYXNzXG4gIC8vIGVpdGhlciBhIHN0cmluZyBhdHRyaWJ1dGUgdG8gY291bnQgYnksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxuICAvLyBjcml0ZXJpb24uXG4gIF8uY291bnRCeSA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICAgIGlmIChfLmhhcyhyZXN1bHQsIGtleSkpIHJlc3VsdFtrZXldKys7IGVsc2UgcmVzdWx0W2tleV0gPSAxO1xuICB9KTtcblxuICAvLyBTYWZlbHkgY3JlYXRlIGEgcmVhbCwgbGl2ZSBhcnJheSBmcm9tIGFueXRoaW5nIGl0ZXJhYmxlLlxuICBfLnRvQXJyYXkgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIW9iaikgcmV0dXJuIFtdO1xuICAgIGlmIChfLmlzQXJyYXkob2JqKSkgcmV0dXJuIHNsaWNlLmNhbGwob2JqKTtcbiAgICBpZiAoaXNBcnJheUxpa2Uob2JqKSkgcmV0dXJuIF8ubWFwKG9iaiwgXy5pZGVudGl0eSk7XG4gICAgcmV0dXJuIF8udmFsdWVzKG9iaik7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gYW4gb2JqZWN0LlxuICBfLnNpemUgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiAwO1xuICAgIHJldHVybiBpc0FycmF5TGlrZShvYmopID8gb2JqLmxlbmd0aCA6IF8ua2V5cyhvYmopLmxlbmd0aDtcbiAgfTtcblxuICAvLyBTcGxpdCBhIGNvbGxlY3Rpb24gaW50byB0d28gYXJyYXlzOiBvbmUgd2hvc2UgZWxlbWVudHMgYWxsIHNhdGlzZnkgdGhlIGdpdmVuXG4gIC8vIHByZWRpY2F0ZSwgYW5kIG9uZSB3aG9zZSBlbGVtZW50cyBhbGwgZG8gbm90IHNhdGlzZnkgdGhlIHByZWRpY2F0ZS5cbiAgXy5wYXJ0aXRpb24gPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgdmFyIHBhc3MgPSBbXSwgZmFpbCA9IFtdO1xuICAgIF8uZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBrZXksIG9iaikge1xuICAgICAgKHByZWRpY2F0ZSh2YWx1ZSwga2V5LCBvYmopID8gcGFzcyA6IGZhaWwpLnB1c2godmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBbcGFzcywgZmFpbF07XG4gIH07XG5cbiAgLy8gQXJyYXkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEdldCB0aGUgZmlyc3QgZWxlbWVudCBvZiBhbiBhcnJheS4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiB0aGUgZmlyc3QgTlxuICAvLyB2YWx1ZXMgaW4gdGhlIGFycmF5LiBBbGlhc2VkIGFzIGBoZWFkYCBhbmQgYHRha2VgLiBUaGUgKipndWFyZCoqIGNoZWNrXG4gIC8vIGFsbG93cyBpdCB0byB3b3JrIHdpdGggYF8ubWFwYC5cbiAgXy5maXJzdCA9IF8uaGVhZCA9IF8udGFrZSA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgIGlmIChuID09IG51bGwgfHwgZ3VhcmQpIHJldHVybiBhcnJheVswXTtcbiAgICByZXR1cm4gXy5pbml0aWFsKGFycmF5LCBhcnJheS5sZW5ndGggLSBuKTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGV2ZXJ5dGhpbmcgYnV0IHRoZSBsYXN0IGVudHJ5IG9mIHRoZSBhcnJheS4gRXNwZWNpYWxseSB1c2VmdWwgb25cbiAgLy8gdGhlIGFyZ3VtZW50cyBvYmplY3QuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gYWxsIHRoZSB2YWx1ZXMgaW5cbiAgLy8gdGhlIGFycmF5LCBleGNsdWRpbmcgdGhlIGxhc3QgTi5cbiAgXy5pbml0aWFsID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIDAsIE1hdGgubWF4KDAsIGFycmF5Lmxlbmd0aCAtIChuID09IG51bGwgfHwgZ3VhcmQgPyAxIDogbikpKTtcbiAgfTtcblxuICAvLyBHZXQgdGhlIGxhc3QgZWxlbWVudCBvZiBhbiBhcnJheS4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiB0aGUgbGFzdCBOXG4gIC8vIHZhbHVlcyBpbiB0aGUgYXJyYXkuXG4gIF8ubGFzdCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgIGlmIChuID09IG51bGwgfHwgZ3VhcmQpIHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4gXy5yZXN0KGFycmF5LCBNYXRoLm1heCgwLCBhcnJheS5sZW5ndGggLSBuKSk7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBldmVyeXRoaW5nIGJ1dCB0aGUgZmlyc3QgZW50cnkgb2YgdGhlIGFycmF5LiBBbGlhc2VkIGFzIGB0YWlsYCBhbmQgYGRyb3BgLlxuICAvLyBFc3BlY2lhbGx5IHVzZWZ1bCBvbiB0aGUgYXJndW1lbnRzIG9iamVjdC4gUGFzc2luZyBhbiAqKm4qKiB3aWxsIHJldHVyblxuICAvLyB0aGUgcmVzdCBOIHZhbHVlcyBpbiB0aGUgYXJyYXkuXG4gIF8ucmVzdCA9IF8udGFpbCA9IF8uZHJvcCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIHJldHVybiBzbGljZS5jYWxsKGFycmF5LCBuID09IG51bGwgfHwgZ3VhcmQgPyAxIDogbik7XG4gIH07XG5cbiAgLy8gVHJpbSBvdXQgYWxsIGZhbHN5IHZhbHVlcyBmcm9tIGFuIGFycmF5LlxuICBfLmNvbXBhY3QgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHJldHVybiBfLmZpbHRlcihhcnJheSwgXy5pZGVudGl0eSk7XG4gIH07XG5cbiAgLy8gSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gb2YgYSByZWN1cnNpdmUgYGZsYXR0ZW5gIGZ1bmN0aW9uLlxuICB2YXIgZmxhdHRlbiA9IGZ1bmN0aW9uKGlucHV0LCBzaGFsbG93LCBzdHJpY3QsIHN0YXJ0SW5kZXgpIHtcbiAgICB2YXIgb3V0cHV0ID0gW10sIGlkeCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IHN0YXJ0SW5kZXggfHwgMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGlucHV0KTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdmFsdWUgPSBpbnB1dFtpXTtcbiAgICAgIGlmIChpc0FycmF5TGlrZSh2YWx1ZSkgJiYgKF8uaXNBcnJheSh2YWx1ZSkgfHwgXy5pc0FyZ3VtZW50cyh2YWx1ZSkpKSB7XG4gICAgICAgIC8vZmxhdHRlbiBjdXJyZW50IGxldmVsIG9mIGFycmF5IG9yIGFyZ3VtZW50cyBvYmplY3RcbiAgICAgICAgaWYgKCFzaGFsbG93KSB2YWx1ZSA9IGZsYXR0ZW4odmFsdWUsIHNoYWxsb3csIHN0cmljdCk7XG4gICAgICAgIHZhciBqID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICBvdXRwdXQubGVuZ3RoICs9IGxlbjtcbiAgICAgICAgd2hpbGUgKGogPCBsZW4pIHtcbiAgICAgICAgICBvdXRwdXRbaWR4KytdID0gdmFsdWVbaisrXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghc3RyaWN0KSB7XG4gICAgICAgIG91dHB1dFtpZHgrK10gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfTtcblxuICAvLyBGbGF0dGVuIG91dCBhbiBhcnJheSwgZWl0aGVyIHJlY3Vyc2l2ZWx5IChieSBkZWZhdWx0KSwgb3IganVzdCBvbmUgbGV2ZWwuXG4gIF8uZmxhdHRlbiA9IGZ1bmN0aW9uKGFycmF5LCBzaGFsbG93KSB7XG4gICAgcmV0dXJuIGZsYXR0ZW4oYXJyYXksIHNoYWxsb3csIGZhbHNlKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSB2ZXJzaW9uIG9mIHRoZSBhcnJheSB0aGF0IGRvZXMgbm90IGNvbnRhaW4gdGhlIHNwZWNpZmllZCB2YWx1ZShzKS5cbiAgXy53aXRob3V0ID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICByZXR1cm4gXy5kaWZmZXJlbmNlKGFycmF5LCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICB9O1xuXG4gIC8vIFByb2R1Y2UgYSBkdXBsaWNhdGUtZnJlZSB2ZXJzaW9uIG9mIHRoZSBhcnJheS4gSWYgdGhlIGFycmF5IGhhcyBhbHJlYWR5XG4gIC8vIGJlZW4gc29ydGVkLCB5b3UgaGF2ZSB0aGUgb3B0aW9uIG9mIHVzaW5nIGEgZmFzdGVyIGFsZ29yaXRobS5cbiAgLy8gQWxpYXNlZCBhcyBgdW5pcXVlYC5cbiAgXy51bmlxID0gXy51bmlxdWUgPSBmdW5jdGlvbihhcnJheSwgaXNTb3J0ZWQsIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaWYgKCFfLmlzQm9vbGVhbihpc1NvcnRlZCkpIHtcbiAgICAgIGNvbnRleHQgPSBpdGVyYXRlZTtcbiAgICAgIGl0ZXJhdGVlID0gaXNTb3J0ZWQ7XG4gICAgICBpc1NvcnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXRlcmF0ZWUgIT0gbnVsbCkgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBzZWVuID0gW107XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChhcnJheSk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHZhbHVlID0gYXJyYXlbaV0sXG4gICAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlLCBpLCBhcnJheSkgOiB2YWx1ZTtcbiAgICAgIGlmIChpc1NvcnRlZCkge1xuICAgICAgICBpZiAoIWkgfHwgc2VlbiAhPT0gY29tcHV0ZWQpIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICAgICAgc2VlbiA9IGNvbXB1dGVkO1xuICAgICAgfSBlbHNlIGlmIChpdGVyYXRlZSkge1xuICAgICAgICBpZiAoIV8uY29udGFpbnMoc2VlbiwgY29tcHV0ZWQpKSB7XG4gICAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIV8uY29udGFpbnMocmVzdWx0LCB2YWx1ZSkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFByb2R1Y2UgYW4gYXJyYXkgdGhhdCBjb250YWlucyB0aGUgdW5pb246IGVhY2ggZGlzdGluY3QgZWxlbWVudCBmcm9tIGFsbCBvZlxuICAvLyB0aGUgcGFzc2VkLWluIGFycmF5cy5cbiAgXy51bmlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfLnVuaXEoZmxhdHRlbihhcmd1bWVudHMsIHRydWUsIHRydWUpKTtcbiAgfTtcblxuICAvLyBQcm9kdWNlIGFuIGFycmF5IHRoYXQgY29udGFpbnMgZXZlcnkgaXRlbSBzaGFyZWQgYmV0d2VlbiBhbGwgdGhlXG4gIC8vIHBhc3NlZC1pbiBhcnJheXMuXG4gIF8uaW50ZXJzZWN0aW9uID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGFyZ3NMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBnZXRMZW5ndGgoYXJyYXkpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gYXJyYXlbaV07XG4gICAgICBpZiAoXy5jb250YWlucyhyZXN1bHQsIGl0ZW0pKSBjb250aW51ZTtcbiAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgYXJnc0xlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICghXy5jb250YWlucyhhcmd1bWVudHNbal0sIGl0ZW0pKSBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChqID09PSBhcmdzTGVuZ3RoKSByZXN1bHQucHVzaChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBUYWtlIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gb25lIGFycmF5IGFuZCBhIG51bWJlciBvZiBvdGhlciBhcnJheXMuXG4gIC8vIE9ubHkgdGhlIGVsZW1lbnRzIHByZXNlbnQgaW4ganVzdCB0aGUgZmlyc3QgYXJyYXkgd2lsbCByZW1haW4uXG4gIF8uZGlmZmVyZW5jZSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgdmFyIHJlc3QgPSBmbGF0dGVuKGFyZ3VtZW50cywgdHJ1ZSwgdHJ1ZSwgMSk7XG4gICAgcmV0dXJuIF8uZmlsdGVyKGFycmF5LCBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICByZXR1cm4gIV8uY29udGFpbnMocmVzdCwgdmFsdWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIFppcCB0b2dldGhlciBtdWx0aXBsZSBsaXN0cyBpbnRvIGEgc2luZ2xlIGFycmF5IC0tIGVsZW1lbnRzIHRoYXQgc2hhcmVcbiAgLy8gYW4gaW5kZXggZ28gdG9nZXRoZXIuXG4gIF8uemlwID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIF8udW56aXAoYXJndW1lbnRzKTtcbiAgfTtcblxuICAvLyBDb21wbGVtZW50IG9mIF8uemlwLiBVbnppcCBhY2NlcHRzIGFuIGFycmF5IG9mIGFycmF5cyBhbmQgZ3JvdXBzXG4gIC8vIGVhY2ggYXJyYXkncyBlbGVtZW50cyBvbiBzaGFyZWQgaW5kaWNlc1xuICBfLnVuemlwID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkgJiYgXy5tYXgoYXJyYXksIGdldExlbmd0aCkubGVuZ3RoIHx8IDA7XG4gICAgdmFyIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICByZXN1bHRbaW5kZXhdID0gXy5wbHVjayhhcnJheSwgaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIENvbnZlcnRzIGxpc3RzIGludG8gb2JqZWN0cy4gUGFzcyBlaXRoZXIgYSBzaW5nbGUgYXJyYXkgb2YgYFtrZXksIHZhbHVlXWBcbiAgLy8gcGFpcnMsIG9yIHR3byBwYXJhbGxlbCBhcnJheXMgb2YgdGhlIHNhbWUgbGVuZ3RoIC0tIG9uZSBvZiBrZXlzLCBhbmQgb25lIG9mXG4gIC8vIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlcy5cbiAgXy5vYmplY3QgPSBmdW5jdGlvbihsaXN0LCB2YWx1ZXMpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChsaXN0KTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodmFsdWVzKSB7XG4gICAgICAgIHJlc3VsdFtsaXN0W2ldXSA9IHZhbHVlc1tpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtsaXN0W2ldWzBdXSA9IGxpc3RbaV1bMV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gR2VuZXJhdG9yIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgZmluZEluZGV4IGFuZCBmaW5kTGFzdEluZGV4IGZ1bmN0aW9uc1xuICBmdW5jdGlvbiBjcmVhdGVQcmVkaWNhdGVJbmRleEZpbmRlcihkaXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oYXJyYXksIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICAgIHZhciBsZW5ndGggPSBnZXRMZW5ndGgoYXJyYXkpO1xuICAgICAgdmFyIGluZGV4ID0gZGlyID4gMCA/IDAgOiBsZW5ndGggLSAxO1xuICAgICAgZm9yICg7IGluZGV4ID49IDAgJiYgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IGRpcikge1xuICAgICAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG4gIH1cblxuICAvLyBSZXR1cm5zIHRoZSBmaXJzdCBpbmRleCBvbiBhbiBhcnJheS1saWtlIHRoYXQgcGFzc2VzIGEgcHJlZGljYXRlIHRlc3RcbiAgXy5maW5kSW5kZXggPSBjcmVhdGVQcmVkaWNhdGVJbmRleEZpbmRlcigxKTtcbiAgXy5maW5kTGFzdEluZGV4ID0gY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIoLTEpO1xuXG4gIC8vIFVzZSBhIGNvbXBhcmF0b3IgZnVuY3Rpb24gdG8gZmlndXJlIG91dCB0aGUgc21hbGxlc3QgaW5kZXggYXQgd2hpY2hcbiAgLy8gYW4gb2JqZWN0IHNob3VsZCBiZSBpbnNlcnRlZCBzbyBhcyB0byBtYWludGFpbiBvcmRlci4gVXNlcyBiaW5hcnkgc2VhcmNoLlxuICBfLnNvcnRlZEluZGV4ID0gZnVuY3Rpb24oYXJyYXksIG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0LCAxKTtcbiAgICB2YXIgdmFsdWUgPSBpdGVyYXRlZShvYmopO1xuICAgIHZhciBsb3cgPSAwLCBoaWdoID0gZ2V0TGVuZ3RoKGFycmF5KTtcbiAgICB3aGlsZSAobG93IDwgaGlnaCkge1xuICAgICAgdmFyIG1pZCA9IE1hdGguZmxvb3IoKGxvdyArIGhpZ2gpIC8gMik7XG4gICAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbbWlkXSkgPCB2YWx1ZSkgbG93ID0gbWlkICsgMTsgZWxzZSBoaWdoID0gbWlkO1xuICAgIH1cbiAgICByZXR1cm4gbG93O1xuICB9O1xuXG4gIC8vIEdlbmVyYXRvciBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIGluZGV4T2YgYW5kIGxhc3RJbmRleE9mIGZ1bmN0aW9uc1xuICBmdW5jdGlvbiBjcmVhdGVJbmRleEZpbmRlcihkaXIsIHByZWRpY2F0ZUZpbmQsIHNvcnRlZEluZGV4KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGFycmF5LCBpdGVtLCBpZHgpIHtcbiAgICAgIHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGFycmF5KTtcbiAgICAgIGlmICh0eXBlb2YgaWR4ID09ICdudW1iZXInKSB7XG4gICAgICAgIGlmIChkaXIgPiAwKSB7XG4gICAgICAgICAgICBpID0gaWR4ID49IDAgPyBpZHggOiBNYXRoLm1heChpZHggKyBsZW5ndGgsIGkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGVuZ3RoID0gaWR4ID49IDAgPyBNYXRoLm1pbihpZHggKyAxLCBsZW5ndGgpIDogaWR4ICsgbGVuZ3RoICsgMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzb3J0ZWRJbmRleCAmJiBpZHggJiYgbGVuZ3RoKSB7XG4gICAgICAgIGlkeCA9IHNvcnRlZEluZGV4KGFycmF5LCBpdGVtKTtcbiAgICAgICAgcmV0dXJuIGFycmF5W2lkeF0gPT09IGl0ZW0gPyBpZHggOiAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtICE9PSBpdGVtKSB7XG4gICAgICAgIGlkeCA9IHByZWRpY2F0ZUZpbmQoc2xpY2UuY2FsbChhcnJheSwgaSwgbGVuZ3RoKSwgXy5pc05hTik7XG4gICAgICAgIHJldHVybiBpZHggPj0gMCA/IGlkeCArIGkgOiAtMTtcbiAgICAgIH1cbiAgICAgIGZvciAoaWR4ID0gZGlyID4gMCA/IGkgOiBsZW5ndGggLSAxOyBpZHggPj0gMCAmJiBpZHggPCBsZW5ndGg7IGlkeCArPSBkaXIpIHtcbiAgICAgICAgaWYgKGFycmF5W2lkeF0gPT09IGl0ZW0pIHJldHVybiBpZHg7XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfTtcbiAgfVxuXG4gIC8vIFJldHVybiB0aGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYW4gaXRlbSBpbiBhbiBhcnJheSxcbiAgLy8gb3IgLTEgaWYgdGhlIGl0ZW0gaXMgbm90IGluY2x1ZGVkIGluIHRoZSBhcnJheS5cbiAgLy8gSWYgdGhlIGFycmF5IGlzIGxhcmdlIGFuZCBhbHJlYWR5IGluIHNvcnQgb3JkZXIsIHBhc3MgYHRydWVgXG4gIC8vIGZvciAqKmlzU29ydGVkKiogdG8gdXNlIGJpbmFyeSBzZWFyY2guXG4gIF8uaW5kZXhPZiA9IGNyZWF0ZUluZGV4RmluZGVyKDEsIF8uZmluZEluZGV4LCBfLnNvcnRlZEluZGV4KTtcbiAgXy5sYXN0SW5kZXhPZiA9IGNyZWF0ZUluZGV4RmluZGVyKC0xLCBfLmZpbmRMYXN0SW5kZXgpO1xuXG4gIC8vIEdlbmVyYXRlIGFuIGludGVnZXIgQXJyYXkgY29udGFpbmluZyBhbiBhcml0aG1ldGljIHByb2dyZXNzaW9uLiBBIHBvcnQgb2ZcbiAgLy8gdGhlIG5hdGl2ZSBQeXRob24gYHJhbmdlKClgIGZ1bmN0aW9uLiBTZWVcbiAgLy8gW3RoZSBQeXRob24gZG9jdW1lbnRhdGlvbl0oaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L2Z1bmN0aW9ucy5odG1sI3JhbmdlKS5cbiAgXy5yYW5nZSA9IGZ1bmN0aW9uKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gICAgaWYgKHN0b3AgPT0gbnVsbCkge1xuICAgICAgc3RvcCA9IHN0YXJ0IHx8IDA7XG4gICAgICBzdGFydCA9IDA7XG4gICAgfVxuICAgIHN0ZXAgPSBzdGVwIHx8IDE7XG5cbiAgICB2YXIgbGVuZ3RoID0gTWF0aC5tYXgoTWF0aC5jZWlsKChzdG9wIC0gc3RhcnQpIC8gc3RlcCksIDApO1xuICAgIHZhciByYW5nZSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBsZW5ndGg7IGlkeCsrLCBzdGFydCArPSBzdGVwKSB7XG4gICAgICByYW5nZVtpZHhdID0gc3RhcnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmdlO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIChhaGVtKSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGV4ZWN1dGUgYSBmdW5jdGlvbiBhcyBhIGNvbnN0cnVjdG9yXG4gIC8vIG9yIGEgbm9ybWFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3ZpZGVkIGFyZ3VtZW50c1xuICB2YXIgZXhlY3V0ZUJvdW5kID0gZnVuY3Rpb24oc291cmNlRnVuYywgYm91bmRGdW5jLCBjb250ZXh0LCBjYWxsaW5nQ29udGV4dCwgYXJncykge1xuICAgIGlmICghKGNhbGxpbmdDb250ZXh0IGluc3RhbmNlb2YgYm91bmRGdW5jKSkgcmV0dXJuIHNvdXJjZUZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgdmFyIHNlbGYgPSBiYXNlQ3JlYXRlKHNvdXJjZUZ1bmMucHJvdG90eXBlKTtcbiAgICB2YXIgcmVzdWx0ID0gc291cmNlRnVuYy5hcHBseShzZWxmLCBhcmdzKTtcbiAgICBpZiAoXy5pc09iamVjdChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhIGZ1bmN0aW9uIGJvdW5kIHRvIGEgZ2l2ZW4gb2JqZWN0IChhc3NpZ25pbmcgYHRoaXNgLCBhbmQgYXJndW1lbnRzLFxuICAvLyBvcHRpb25hbGx5KS4gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYEZ1bmN0aW9uLmJpbmRgIGlmXG4gIC8vIGF2YWlsYWJsZS5cbiAgXy5iaW5kID0gZnVuY3Rpb24oZnVuYywgY29udGV4dCkge1xuICAgIGlmIChuYXRpdmVCaW5kICYmIGZ1bmMuYmluZCA9PT0gbmF0aXZlQmluZCkgcmV0dXJuIG5hdGl2ZUJpbmQuYXBwbHkoZnVuYywgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICBpZiAoIV8uaXNGdW5jdGlvbihmdW5jKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQmluZCBtdXN0IGJlIGNhbGxlZCBvbiBhIGZ1bmN0aW9uJyk7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgdmFyIGJvdW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZXhlY3V0ZUJvdW5kKGZ1bmMsIGJvdW5kLCBjb250ZXh0LCB0aGlzLCBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICB9O1xuICAgIHJldHVybiBib3VuZDtcbiAgfTtcblxuICAvLyBQYXJ0aWFsbHkgYXBwbHkgYSBmdW5jdGlvbiBieSBjcmVhdGluZyBhIHZlcnNpb24gdGhhdCBoYXMgaGFkIHNvbWUgb2YgaXRzXG4gIC8vIGFyZ3VtZW50cyBwcmUtZmlsbGVkLCB3aXRob3V0IGNoYW5naW5nIGl0cyBkeW5hbWljIGB0aGlzYCBjb250ZXh0LiBfIGFjdHNcbiAgLy8gYXMgYSBwbGFjZWhvbGRlciwgYWxsb3dpbmcgYW55IGNvbWJpbmF0aW9uIG9mIGFyZ3VtZW50cyB0byBiZSBwcmUtZmlsbGVkLlxuICBfLnBhcnRpYWwgPSBmdW5jdGlvbihmdW5jKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgYm91bmQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwb3NpdGlvbiA9IDAsIGxlbmd0aCA9IGJvdW5kQXJncy5sZW5ndGg7XG4gICAgICB2YXIgYXJncyA9IEFycmF5KGxlbmd0aCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFyZ3NbaV0gPSBib3VuZEFyZ3NbaV0gPT09IF8gPyBhcmd1bWVudHNbcG9zaXRpb24rK10gOiBib3VuZEFyZ3NbaV07XG4gICAgICB9XG4gICAgICB3aGlsZSAocG9zaXRpb24gPCBhcmd1bWVudHMubGVuZ3RoKSBhcmdzLnB1c2goYXJndW1lbnRzW3Bvc2l0aW9uKytdKTtcbiAgICAgIHJldHVybiBleGVjdXRlQm91bmQoZnVuYywgYm91bmQsIHRoaXMsIHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gICAgcmV0dXJuIGJvdW5kO1xuICB9O1xuXG4gIC8vIEJpbmQgYSBudW1iZXIgb2YgYW4gb2JqZWN0J3MgbWV0aG9kcyB0byB0aGF0IG9iamVjdC4gUmVtYWluaW5nIGFyZ3VtZW50c1xuICAvLyBhcmUgdGhlIG1ldGhvZCBuYW1lcyB0byBiZSBib3VuZC4gVXNlZnVsIGZvciBlbnN1cmluZyB0aGF0IGFsbCBjYWxsYmFja3NcbiAgLy8gZGVmaW5lZCBvbiBhbiBvYmplY3QgYmVsb25nIHRvIGl0LlxuICBfLmJpbmRBbGwgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgaSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCwga2V5O1xuICAgIGlmIChsZW5ndGggPD0gMSkgdGhyb3cgbmV3IEVycm9yKCdiaW5kQWxsIG11c3QgYmUgcGFzc2VkIGZ1bmN0aW9uIG5hbWVzJyk7XG4gICAgZm9yIChpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBhcmd1bWVudHNbaV07XG4gICAgICBvYmpba2V5XSA9IF8uYmluZChvYmpba2V5XSwgb2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBNZW1vaXplIGFuIGV4cGVuc2l2ZSBmdW5jdGlvbiBieSBzdG9yaW5nIGl0cyByZXN1bHRzLlxuICBfLm1lbW9pemUgPSBmdW5jdGlvbihmdW5jLCBoYXNoZXIpIHtcbiAgICB2YXIgbWVtb2l6ZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIGNhY2hlID0gbWVtb2l6ZS5jYWNoZTtcbiAgICAgIHZhciBhZGRyZXNzID0gJycgKyAoaGFzaGVyID8gaGFzaGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiBrZXkpO1xuICAgICAgaWYgKCFfLmhhcyhjYWNoZSwgYWRkcmVzcykpIGNhY2hlW2FkZHJlc3NdID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIGNhY2hlW2FkZHJlc3NdO1xuICAgIH07XG4gICAgbWVtb2l6ZS5jYWNoZSA9IHt9O1xuICAgIHJldHVybiBtZW1vaXplO1xuICB9O1xuXG4gIC8vIERlbGF5cyBhIGZ1bmN0aW9uIGZvciB0aGUgZ2l2ZW4gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgYW5kIHRoZW4gY2FsbHNcbiAgLy8gaXQgd2l0aCB0aGUgYXJndW1lbnRzIHN1cHBsaWVkLlxuICBfLmRlbGF5ID0gZnVuY3Rpb24oZnVuYywgd2FpdCkge1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gZnVuYy5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9LCB3YWl0KTtcbiAgfTtcblxuICAvLyBEZWZlcnMgYSBmdW5jdGlvbiwgc2NoZWR1bGluZyBpdCB0byBydW4gYWZ0ZXIgdGhlIGN1cnJlbnQgY2FsbCBzdGFjayBoYXNcbiAgLy8gY2xlYXJlZC5cbiAgXy5kZWZlciA9IF8ucGFydGlhbChfLmRlbGF5LCBfLCAxKTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIHdoZW4gaW52b2tlZCwgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBhdCBtb3N0IG9uY2VcbiAgLy8gZHVyaW5nIGEgZ2l2ZW4gd2luZG93IG9mIHRpbWUuIE5vcm1hbGx5LCB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHdpbGwgcnVuXG4gIC8vIGFzIG11Y2ggYXMgaXQgY2FuLCB3aXRob3V0IGV2ZXIgZ29pbmcgbW9yZSB0aGFuIG9uY2UgcGVyIGB3YWl0YCBkdXJhdGlvbjtcbiAgLy8gYnV0IGlmIHlvdSdkIGxpa2UgdG8gZGlzYWJsZSB0aGUgZXhlY3V0aW9uIG9uIHRoZSBsZWFkaW5nIGVkZ2UsIHBhc3NcbiAgLy8gYHtsZWFkaW5nOiBmYWxzZX1gLiBUbyBkaXNhYmxlIGV4ZWN1dGlvbiBvbiB0aGUgdHJhaWxpbmcgZWRnZSwgZGl0dG8uXG4gIF8udGhyb3R0bGUgPSBmdW5jdGlvbihmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQsIGFyZ3MsIHJlc3VsdDtcbiAgICB2YXIgdGltZW91dCA9IG51bGw7XG4gICAgdmFyIHByZXZpb3VzID0gMDtcbiAgICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiBfLm5vdygpO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgaWYgKCF0aW1lb3V0KSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbm93ID0gXy5ub3coKTtcbiAgICAgIGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkgcHJldmlvdXMgPSBub3c7XG4gICAgICB2YXIgcmVtYWluaW5nID0gd2FpdCAtIChub3cgLSBwcmV2aW91cyk7XG4gICAgICBjb250ZXh0ID0gdGhpcztcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBpZiAocmVtYWluaW5nIDw9IDAgfHwgcmVtYWluaW5nID4gd2FpdCkge1xuICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBwcmV2aW91cyA9IG5vdztcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgaWYgKCF0aW1lb3V0KSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKCF0aW1lb3V0ICYmIG9wdGlvbnMudHJhaWxpbmcgIT09IGZhbHNlKSB7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCByZW1haW5pbmcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3RcbiAgLy8gYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuICAvLyBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbiAgLy8gbGVhZGluZyBlZGdlLCBpbnN0ZWFkIG9mIHRoZSB0cmFpbGluZy5cbiAgXy5kZWJvdW5jZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICAgIHZhciB0aW1lb3V0LCBhcmdzLCBjb250ZXh0LCB0aW1lc3RhbXAsIHJlc3VsdDtcblxuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGxhc3QgPSBfLm5vdygpIC0gdGltZXN0YW1wO1xuXG4gICAgICBpZiAobGFzdCA8IHdhaXQgJiYgbGFzdCA+PSAwKSB7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IC0gbGFzdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgaWYgKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnRleHQgPSB0aGlzO1xuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHRpbWVzdGFtcCA9IF8ubm93KCk7XG4gICAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICAgIGlmICghdGltZW91dCkgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyB0aGUgZmlyc3QgZnVuY3Rpb24gcGFzc2VkIGFzIGFuIGFyZ3VtZW50IHRvIHRoZSBzZWNvbmQsXG4gIC8vIGFsbG93aW5nIHlvdSB0byBhZGp1c3QgYXJndW1lbnRzLCBydW4gY29kZSBiZWZvcmUgYW5kIGFmdGVyLCBhbmRcbiAgLy8gY29uZGl0aW9uYWxseSBleGVjdXRlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cbiAgXy53cmFwID0gZnVuY3Rpb24oZnVuYywgd3JhcHBlcikge1xuICAgIHJldHVybiBfLnBhcnRpYWwod3JhcHBlciwgZnVuYyk7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIG5lZ2F0ZWQgdmVyc2lvbiBvZiB0aGUgcGFzc2VkLWluIHByZWRpY2F0ZS5cbiAgXy5uZWdhdGUgPSBmdW5jdGlvbihwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gIXByZWRpY2F0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgaXMgdGhlIGNvbXBvc2l0aW9uIG9mIGEgbGlzdCBvZiBmdW5jdGlvbnMsIGVhY2hcbiAgLy8gY29uc3VtaW5nIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHRoYXQgZm9sbG93cy5cbiAgXy5jb21wb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIHN0YXJ0ID0gYXJncy5sZW5ndGggLSAxO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpID0gc3RhcnQ7XG4gICAgICB2YXIgcmVzdWx0ID0gYXJnc1tzdGFydF0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHdoaWxlIChpLS0pIHJlc3VsdCA9IGFyZ3NbaV0uY2FsbCh0aGlzLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgb25seSBiZSBleGVjdXRlZCBvbiBhbmQgYWZ0ZXIgdGhlIE50aCBjYWxsLlxuICBfLmFmdGVyID0gZnVuY3Rpb24odGltZXMsIGZ1bmMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoLS10aW1lcyA8IDEpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgb25seSBiZSBleGVjdXRlZCB1cCB0byAoYnV0IG5vdCBpbmNsdWRpbmcpIHRoZSBOdGggY2FsbC5cbiAgXy5iZWZvcmUgPSBmdW5jdGlvbih0aW1lcywgZnVuYykge1xuICAgIHZhciBtZW1vO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICgtLXRpbWVzID4gMCkge1xuICAgICAgICBtZW1vID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgaWYgKHRpbWVzIDw9IDEpIGZ1bmMgPSBudWxsO1xuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGF0IG1vc3Qgb25lIHRpbWUsIG5vIG1hdHRlciBob3dcbiAgLy8gb2Z0ZW4geW91IGNhbGwgaXQuIFVzZWZ1bCBmb3IgbGF6eSBpbml0aWFsaXphdGlvbi5cbiAgXy5vbmNlID0gXy5wYXJ0aWFsKF8uYmVmb3JlLCAyKTtcblxuICAvLyBPYmplY3QgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBLZXlzIGluIElFIDwgOSB0aGF0IHdvbid0IGJlIGl0ZXJhdGVkIGJ5IGBmb3Iga2V5IGluIC4uLmAgYW5kIHRodXMgbWlzc2VkLlxuICB2YXIgaGFzRW51bUJ1ZyA9ICF7dG9TdHJpbmc6IG51bGx9LnByb3BlcnR5SXNFbnVtZXJhYmxlKCd0b1N0cmluZycpO1xuICB2YXIgbm9uRW51bWVyYWJsZVByb3BzID0gWyd2YWx1ZU9mJywgJ2lzUHJvdG90eXBlT2YnLCAndG9TdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICdoYXNPd25Qcm9wZXJ0eScsICd0b0xvY2FsZVN0cmluZyddO1xuXG4gIGZ1bmN0aW9uIGNvbGxlY3ROb25FbnVtUHJvcHMob2JqLCBrZXlzKSB7XG4gICAgdmFyIG5vbkVudW1JZHggPSBub25FbnVtZXJhYmxlUHJvcHMubGVuZ3RoO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IG9iai5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgcHJvdG8gPSAoXy5pc0Z1bmN0aW9uKGNvbnN0cnVjdG9yKSAmJiBjb25zdHJ1Y3Rvci5wcm90b3R5cGUpIHx8IE9ialByb3RvO1xuXG4gICAgLy8gQ29uc3RydWN0b3IgaXMgYSBzcGVjaWFsIGNhc2UuXG4gICAgdmFyIHByb3AgPSAnY29uc3RydWN0b3InO1xuICAgIGlmIChfLmhhcyhvYmosIHByb3ApICYmICFfLmNvbnRhaW5zKGtleXMsIHByb3ApKSBrZXlzLnB1c2gocHJvcCk7XG5cbiAgICB3aGlsZSAobm9uRW51bUlkeC0tKSB7XG4gICAgICBwcm9wID0gbm9uRW51bWVyYWJsZVByb3BzW25vbkVudW1JZHhdO1xuICAgICAgaWYgKHByb3AgaW4gb2JqICYmIG9ialtwcm9wXSAhPT0gcHJvdG9bcHJvcF0gJiYgIV8uY29udGFpbnMoa2V5cywgcHJvcCkpIHtcbiAgICAgICAga2V5cy5wdXNoKHByb3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFJldHJpZXZlIHRoZSBuYW1lcyBvZiBhbiBvYmplY3QncyBvd24gcHJvcGVydGllcy5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYE9iamVjdC5rZXlzYFxuICBfLmtleXMgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIV8uaXNPYmplY3Qob2JqKSkgcmV0dXJuIFtdO1xuICAgIGlmIChuYXRpdmVLZXlzKSByZXR1cm4gbmF0aXZlS2V5cyhvYmopO1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikgaWYgKF8uaGFzKG9iaiwga2V5KSkga2V5cy5wdXNoKGtleSk7XG4gICAgLy8gQWhlbSwgSUUgPCA5LlxuICAgIGlmIChoYXNFbnVtQnVnKSBjb2xsZWN0Tm9uRW51bVByb3BzKG9iaiwga2V5cyk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH07XG5cbiAgLy8gUmV0cmlldmUgYWxsIHRoZSBwcm9wZXJ0eSBuYW1lcyBvZiBhbiBvYmplY3QuXG4gIF8uYWxsS2V5cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghXy5pc09iamVjdChvYmopKSByZXR1cm4gW107XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBrZXlzLnB1c2goa2V5KTtcbiAgICAvLyBBaGVtLCBJRSA8IDkuXG4gICAgaWYgKGhhc0VudW1CdWcpIGNvbGxlY3ROb25FbnVtUHJvcHMob2JqLCBrZXlzKTtcbiAgICByZXR1cm4ga2V5cztcbiAgfTtcblxuICAvLyBSZXRyaWV2ZSB0aGUgdmFsdWVzIG9mIGFuIG9iamVjdCdzIHByb3BlcnRpZXMuXG4gIF8udmFsdWVzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIHZhbHVlcyA9IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWVzW2ldID0gb2JqW2tleXNbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xuXG4gIC8vIFJldHVybnMgdGhlIHJlc3VsdHMgb2YgYXBwbHlpbmcgdGhlIGl0ZXJhdGVlIHRvIGVhY2ggZWxlbWVudCBvZiB0aGUgb2JqZWN0XG4gIC8vIEluIGNvbnRyYXN0IHRvIF8ubWFwIGl0IHJldHVybnMgYW4gb2JqZWN0XG4gIF8ubWFwT2JqZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHZhciBrZXlzID0gIF8ua2V5cyhvYmopLFxuICAgICAgICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoLFxuICAgICAgICAgIHJlc3VsdHMgPSB7fSxcbiAgICAgICAgICBjdXJyZW50S2V5O1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjdXJyZW50S2V5ID0ga2V5c1tpbmRleF07XG4gICAgICAgIHJlc3VsdHNbY3VycmVudEtleV0gPSBpdGVyYXRlZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICAvLyBDb252ZXJ0IGFuIG9iamVjdCBpbnRvIGEgbGlzdCBvZiBgW2tleSwgdmFsdWVdYCBwYWlycy5cbiAgXy5wYWlycyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBwYWlycyA9IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcGFpcnNbaV0gPSBba2V5c1tpXSwgb2JqW2tleXNbaV1dXTtcbiAgICB9XG4gICAgcmV0dXJuIHBhaXJzO1xuICB9O1xuXG4gIC8vIEludmVydCB0aGUga2V5cyBhbmQgdmFsdWVzIG9mIGFuIG9iamVjdC4gVGhlIHZhbHVlcyBtdXN0IGJlIHNlcmlhbGl6YWJsZS5cbiAgXy5pbnZlcnQgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0W29ialtrZXlzW2ldXV0gPSBrZXlzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHNvcnRlZCBsaXN0IG9mIHRoZSBmdW5jdGlvbiBuYW1lcyBhdmFpbGFibGUgb24gdGhlIG9iamVjdC5cbiAgLy8gQWxpYXNlZCBhcyBgbWV0aG9kc2BcbiAgXy5mdW5jdGlvbnMgPSBfLm1ldGhvZHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgbmFtZXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKG9ialtrZXldKSkgbmFtZXMucHVzaChrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZXMuc29ydCgpO1xuICB9O1xuXG4gIC8vIEV4dGVuZCBhIGdpdmVuIG9iamVjdCB3aXRoIGFsbCB0aGUgcHJvcGVydGllcyBpbiBwYXNzZWQtaW4gb2JqZWN0KHMpLlxuICBfLmV4dGVuZCA9IGNyZWF0ZUFzc2lnbmVyKF8uYWxsS2V5cyk7XG5cbiAgLy8gQXNzaWducyBhIGdpdmVuIG9iamVjdCB3aXRoIGFsbCB0aGUgb3duIHByb3BlcnRpZXMgaW4gdGhlIHBhc3NlZC1pbiBvYmplY3QocylcbiAgLy8gKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9hc3NpZ24pXG4gIF8uZXh0ZW5kT3duID0gXy5hc3NpZ24gPSBjcmVhdGVBc3NpZ25lcihfLmtleXMpO1xuXG4gIC8vIFJldHVybnMgdGhlIGZpcnN0IGtleSBvbiBhbiBvYmplY3QgdGhhdCBwYXNzZXMgYSBwcmVkaWNhdGUgdGVzdFxuICBfLmZpbmRLZXkgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKSwga2V5O1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKHByZWRpY2F0ZShvYmpba2V5XSwga2V5LCBvYmopKSByZXR1cm4ga2V5O1xuICAgIH1cbiAgfTtcblxuICAvLyBSZXR1cm4gYSBjb3B5IG9mIHRoZSBvYmplY3Qgb25seSBjb250YWluaW5nIHRoZSB3aGl0ZWxpc3RlZCBwcm9wZXJ0aWVzLlxuICBfLnBpY2sgPSBmdW5jdGlvbihvYmplY3QsIG9pdGVyYXRlZSwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHQgPSB7fSwgb2JqID0gb2JqZWN0LCBpdGVyYXRlZSwga2V5cztcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHQ7XG4gICAgaWYgKF8uaXNGdW5jdGlvbihvaXRlcmF0ZWUpKSB7XG4gICAgICBrZXlzID0gXy5hbGxLZXlzKG9iaik7XG4gICAgICBpdGVyYXRlZSA9IG9wdGltaXplQ2Iob2l0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5cyA9IGZsYXR0ZW4oYXJndW1lbnRzLCBmYWxzZSwgZmFsc2UsIDEpO1xuICAgICAgaXRlcmF0ZWUgPSBmdW5jdGlvbih2YWx1ZSwga2V5LCBvYmopIHsgcmV0dXJuIGtleSBpbiBvYmo7IH07XG4gICAgICBvYmogPSBPYmplY3Qob2JqKTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgdmFyIHZhbHVlID0gb2JqW2tleV07XG4gICAgICBpZiAoaXRlcmF0ZWUodmFsdWUsIGtleSwgb2JqKSkgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAgLy8gUmV0dXJuIGEgY29weSBvZiB0aGUgb2JqZWN0IHdpdGhvdXQgdGhlIGJsYWNrbGlzdGVkIHByb3BlcnRpZXMuXG4gIF8ub21pdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKGl0ZXJhdGVlKSkge1xuICAgICAgaXRlcmF0ZWUgPSBfLm5lZ2F0ZShpdGVyYXRlZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBrZXlzID0gXy5tYXAoZmxhdHRlbihhcmd1bWVudHMsIGZhbHNlLCBmYWxzZSwgMSksIFN0cmluZyk7XG4gICAgICBpdGVyYXRlZSA9IGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuICFfLmNvbnRhaW5zKGtleXMsIGtleSk7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gXy5waWNrKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpO1xuICB9O1xuXG4gIC8vIEZpbGwgaW4gYSBnaXZlbiBvYmplY3Qgd2l0aCBkZWZhdWx0IHByb3BlcnRpZXMuXG4gIF8uZGVmYXVsdHMgPSBjcmVhdGVBc3NpZ25lcihfLmFsbEtleXMsIHRydWUpO1xuXG4gIC8vIENyZWF0ZXMgYW4gb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSB0aGUgZ2l2ZW4gcHJvdG90eXBlIG9iamVjdC5cbiAgLy8gSWYgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIGFyZSBwcm92aWRlZCB0aGVuIHRoZXkgd2lsbCBiZSBhZGRlZCB0byB0aGVcbiAgLy8gY3JlYXRlZCBvYmplY3QuXG4gIF8uY3JlYXRlID0gZnVuY3Rpb24ocHJvdG90eXBlLCBwcm9wcykge1xuICAgIHZhciByZXN1bHQgPSBiYXNlQ3JlYXRlKHByb3RvdHlwZSk7XG4gICAgaWYgKHByb3BzKSBfLmV4dGVuZE93bihyZXN1bHQsIHByb3BzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhIChzaGFsbG93LWNsb25lZCkgZHVwbGljYXRlIG9mIGFuIG9iamVjdC5cbiAgXy5jbG9uZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghXy5pc09iamVjdChvYmopKSByZXR1cm4gb2JqO1xuICAgIHJldHVybiBfLmlzQXJyYXkob2JqKSA/IG9iai5zbGljZSgpIDogXy5leHRlbmQoe30sIG9iaik7XG4gIH07XG5cbiAgLy8gSW52b2tlcyBpbnRlcmNlcHRvciB3aXRoIHRoZSBvYmosIGFuZCB0aGVuIHJldHVybnMgb2JqLlxuICAvLyBUaGUgcHJpbWFyeSBwdXJwb3NlIG9mIHRoaXMgbWV0aG9kIGlzIHRvIFwidGFwIGludG9cIiBhIG1ldGhvZCBjaGFpbiwgaW5cbiAgLy8gb3JkZXIgdG8gcGVyZm9ybSBvcGVyYXRpb25zIG9uIGludGVybWVkaWF0ZSByZXN1bHRzIHdpdGhpbiB0aGUgY2hhaW4uXG4gIF8udGFwID0gZnVuY3Rpb24ob2JqLCBpbnRlcmNlcHRvcikge1xuICAgIGludGVyY2VwdG9yKG9iaik7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBSZXR1cm5zIHdoZXRoZXIgYW4gb2JqZWN0IGhhcyBhIGdpdmVuIHNldCBvZiBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy5pc01hdGNoID0gZnVuY3Rpb24ob2JqZWN0LCBhdHRycykge1xuICAgIHZhciBrZXlzID0gXy5rZXlzKGF0dHJzKSwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSByZXR1cm4gIWxlbmd0aDtcbiAgICB2YXIgb2JqID0gT2JqZWN0KG9iamVjdCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICBpZiAoYXR0cnNba2V5XSAhPT0gb2JqW2tleV0gfHwgIShrZXkgaW4gb2JqKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuXG4gIC8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgaXNFcXVhbGAuXG4gIHZhciBlcSA9IGZ1bmN0aW9uKGEsIGIsIGFTdGFjaywgYlN0YWNrKSB7XG4gICAgLy8gSWRlbnRpY2FsIG9iamVjdHMgYXJlIGVxdWFsLiBgMCA9PT0gLTBgLCBidXQgdGhleSBhcmVuJ3QgaWRlbnRpY2FsLlxuICAgIC8vIFNlZSB0aGUgW0hhcm1vbnkgYGVnYWxgIHByb3Bvc2FsXShodHRwOi8vd2lraS5lY21hc2NyaXB0Lm9yZy9kb2t1LnBocD9pZD1oYXJtb255OmVnYWwpLlxuICAgIGlmIChhID09PSBiKSByZXR1cm4gYSAhPT0gMCB8fCAxIC8gYSA9PT0gMSAvIGI7XG4gICAgLy8gQSBzdHJpY3QgY29tcGFyaXNvbiBpcyBuZWNlc3NhcnkgYmVjYXVzZSBgbnVsbCA9PSB1bmRlZmluZWRgLlxuICAgIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gYSA9PT0gYjtcbiAgICAvLyBVbndyYXAgYW55IHdyYXBwZWQgb2JqZWN0cy5cbiAgICBpZiAoYSBpbnN0YW5jZW9mIF8pIGEgPSBhLl93cmFwcGVkO1xuICAgIGlmIChiIGluc3RhbmNlb2YgXykgYiA9IGIuX3dyYXBwZWQ7XG4gICAgLy8gQ29tcGFyZSBgW1tDbGFzc11dYCBuYW1lcy5cbiAgICB2YXIgY2xhc3NOYW1lID0gdG9TdHJpbmcuY2FsbChhKTtcbiAgICBpZiAoY2xhc3NOYW1lICE9PSB0b1N0cmluZy5jYWxsKGIpKSByZXR1cm4gZmFsc2U7XG4gICAgc3dpdGNoIChjbGFzc05hbWUpIHtcbiAgICAgIC8vIFN0cmluZ3MsIG51bWJlcnMsIHJlZ3VsYXIgZXhwcmVzc2lvbnMsIGRhdGVzLCBhbmQgYm9vbGVhbnMgYXJlIGNvbXBhcmVkIGJ5IHZhbHVlLlxuICAgICAgY2FzZSAnW29iamVjdCBSZWdFeHBdJzpcbiAgICAgIC8vIFJlZ0V4cHMgYXJlIGNvZXJjZWQgdG8gc3RyaW5ncyBmb3IgY29tcGFyaXNvbiAoTm90ZTogJycgKyAvYS9pID09PSAnL2EvaScpXG4gICAgICBjYXNlICdbb2JqZWN0IFN0cmluZ10nOlxuICAgICAgICAvLyBQcmltaXRpdmVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG9iamVjdCB3cmFwcGVycyBhcmUgZXF1aXZhbGVudDsgdGh1cywgYFwiNVwiYCBpc1xuICAgICAgICAvLyBlcXVpdmFsZW50IHRvIGBuZXcgU3RyaW5nKFwiNVwiKWAuXG4gICAgICAgIHJldHVybiAnJyArIGEgPT09ICcnICsgYjtcbiAgICAgIGNhc2UgJ1tvYmplY3QgTnVtYmVyXSc6XG4gICAgICAgIC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuXG4gICAgICAgIC8vIE9iamVjdChOYU4pIGlzIGVxdWl2YWxlbnQgdG8gTmFOXG4gICAgICAgIGlmICgrYSAhPT0gK2EpIHJldHVybiArYiAhPT0gK2I7XG4gICAgICAgIC8vIEFuIGBlZ2FsYCBjb21wYXJpc29uIGlzIHBlcmZvcm1lZCBmb3Igb3RoZXIgbnVtZXJpYyB2YWx1ZXMuXG4gICAgICAgIHJldHVybiArYSA9PT0gMCA/IDEgLyArYSA9PT0gMSAvIGIgOiArYSA9PT0gK2I7XG4gICAgICBjYXNlICdbb2JqZWN0IERhdGVdJzpcbiAgICAgIGNhc2UgJ1tvYmplY3QgQm9vbGVhbl0nOlxuICAgICAgICAvLyBDb2VyY2UgZGF0ZXMgYW5kIGJvb2xlYW5zIHRvIG51bWVyaWMgcHJpbWl0aXZlIHZhbHVlcy4gRGF0ZXMgYXJlIGNvbXBhcmVkIGJ5IHRoZWlyXG4gICAgICAgIC8vIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9ucy4gTm90ZSB0aGF0IGludmFsaWQgZGF0ZXMgd2l0aCBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnNcbiAgICAgICAgLy8gb2YgYE5hTmAgYXJlIG5vdCBlcXVpdmFsZW50LlxuICAgICAgICByZXR1cm4gK2EgPT09ICtiO1xuICAgIH1cblxuICAgIHZhciBhcmVBcnJheXMgPSBjbGFzc05hbWUgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgaWYgKCFhcmVBcnJheXMpIHtcbiAgICAgIGlmICh0eXBlb2YgYSAhPSAnb2JqZWN0JyB8fCB0eXBlb2YgYiAhPSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAvLyBPYmplY3RzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWl2YWxlbnQsIGJ1dCBgT2JqZWN0YHMgb3IgYEFycmF5YHNcbiAgICAgIC8vIGZyb20gZGlmZmVyZW50IGZyYW1lcyBhcmUuXG4gICAgICB2YXIgYUN0b3IgPSBhLmNvbnN0cnVjdG9yLCBiQ3RvciA9IGIuY29uc3RydWN0b3I7XG4gICAgICBpZiAoYUN0b3IgIT09IGJDdG9yICYmICEoXy5pc0Z1bmN0aW9uKGFDdG9yKSAmJiBhQ3RvciBpbnN0YW5jZW9mIGFDdG9yICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5pc0Z1bmN0aW9uKGJDdG9yKSAmJiBiQ3RvciBpbnN0YW5jZW9mIGJDdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoJ2NvbnN0cnVjdG9yJyBpbiBhICYmICdjb25zdHJ1Y3RvcicgaW4gYikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBBc3N1bWUgZXF1YWxpdHkgZm9yIGN5Y2xpYyBzdHJ1Y3R1cmVzLiBUaGUgYWxnb3JpdGhtIGZvciBkZXRlY3RpbmcgY3ljbGljXG4gICAgLy8gc3RydWN0dXJlcyBpcyBhZGFwdGVkIGZyb20gRVMgNS4xIHNlY3Rpb24gMTUuMTIuMywgYWJzdHJhY3Qgb3BlcmF0aW9uIGBKT2AuXG5cbiAgICAvLyBJbml0aWFsaXppbmcgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgLy8gSXQncyBkb25lIGhlcmUgc2luY2Ugd2Ugb25seSBuZWVkIHRoZW0gZm9yIG9iamVjdHMgYW5kIGFycmF5cyBjb21wYXJpc29uLlxuICAgIGFTdGFjayA9IGFTdGFjayB8fCBbXTtcbiAgICBiU3RhY2sgPSBiU3RhY2sgfHwgW107XG4gICAgdmFyIGxlbmd0aCA9IGFTdGFjay5sZW5ndGg7XG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAvLyBMaW5lYXIgc2VhcmNoLiBQZXJmb3JtYW5jZSBpcyBpbnZlcnNlbHkgcHJvcG9ydGlvbmFsIHRvIHRoZSBudW1iZXIgb2ZcbiAgICAgIC8vIHVuaXF1ZSBuZXN0ZWQgc3RydWN0dXJlcy5cbiAgICAgIGlmIChhU3RhY2tbbGVuZ3RoXSA9PT0gYSkgcmV0dXJuIGJTdGFja1tsZW5ndGhdID09PSBiO1xuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZmlyc3Qgb2JqZWN0IHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucHVzaChhKTtcbiAgICBiU3RhY2sucHVzaChiKTtcblxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyBhbmQgYXJyYXlzLlxuICAgIGlmIChhcmVBcnJheXMpIHtcbiAgICAgIC8vIENvbXBhcmUgYXJyYXkgbGVuZ3RocyB0byBkZXRlcm1pbmUgaWYgYSBkZWVwIGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5LlxuICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gRGVlcCBjb21wYXJlIHRoZSBjb250ZW50cywgaWdub3Jpbmcgbm9uLW51bWVyaWMgcHJvcGVydGllcy5cbiAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICBpZiAoIWVxKGFbbGVuZ3RoXSwgYltsZW5ndGhdLCBhU3RhY2ssIGJTdGFjaykpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVlcCBjb21wYXJlIG9iamVjdHMuXG4gICAgICB2YXIga2V5cyA9IF8ua2V5cyhhKSwga2V5O1xuICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgICAvLyBFbnN1cmUgdGhhdCBib3RoIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBudW1iZXIgb2YgcHJvcGVydGllcyBiZWZvcmUgY29tcGFyaW5nIGRlZXAgZXF1YWxpdHkuXG4gICAgICBpZiAoXy5rZXlzKGIpLmxlbmd0aCAhPT0gbGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgLy8gRGVlcCBjb21wYXJlIGVhY2ggbWVtYmVyXG4gICAgICAgIGtleSA9IGtleXNbbGVuZ3RoXTtcbiAgICAgICAgaWYgKCEoXy5oYXMoYiwga2V5KSAmJiBlcShhW2tleV0sIGJba2V5XSwgYVN0YWNrLCBiU3RhY2spKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IG9iamVjdCBmcm9tIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucG9wKCk7XG4gICAgYlN0YWNrLnBvcCgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8vIFBlcmZvcm0gYSBkZWVwIGNvbXBhcmlzb24gdG8gY2hlY2sgaWYgdHdvIG9iamVjdHMgYXJlIGVxdWFsLlxuICBfLmlzRXF1YWwgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGVxKGEsIGIpO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gYXJyYXksIHN0cmluZywgb3Igb2JqZWN0IGVtcHR5P1xuICAvLyBBbiBcImVtcHR5XCIgb2JqZWN0IGhhcyBubyBlbnVtZXJhYmxlIG93bi1wcm9wZXJ0aWVzLlxuICBfLmlzRW1wdHkgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiB0cnVlO1xuICAgIGlmIChpc0FycmF5TGlrZShvYmopICYmIChfLmlzQXJyYXkob2JqKSB8fCBfLmlzU3RyaW5nKG9iaikgfHwgXy5pc0FyZ3VtZW50cyhvYmopKSkgcmV0dXJuIG9iai5sZW5ndGggPT09IDA7XG4gICAgcmV0dXJuIF8ua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGEgRE9NIGVsZW1lbnQ/XG4gIF8uaXNFbGVtZW50ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuICEhKG9iaiAmJiBvYmoubm9kZVR5cGUgPT09IDEpO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgYW4gYXJyYXk/XG4gIC8vIERlbGVnYXRlcyB0byBFQ01BNSdzIG5hdGl2ZSBBcnJheS5pc0FycmF5XG4gIF8uaXNBcnJheSA9IG5hdGl2ZUlzQXJyYXkgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhcmlhYmxlIGFuIG9iamVjdD9cbiAgXy5pc09iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIG9iajtcbiAgICByZXR1cm4gdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlID09PSAnb2JqZWN0JyAmJiAhIW9iajtcbiAgfTtcblxuICAvLyBBZGQgc29tZSBpc1R5cGUgbWV0aG9kczogaXNBcmd1bWVudHMsIGlzRnVuY3Rpb24sIGlzU3RyaW5nLCBpc051bWJlciwgaXNEYXRlLCBpc1JlZ0V4cCwgaXNFcnJvci5cbiAgXy5lYWNoKFsnQXJndW1lbnRzJywgJ0Z1bmN0aW9uJywgJ1N0cmluZycsICdOdW1iZXInLCAnRGF0ZScsICdSZWdFeHAnLCAnRXJyb3InXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIF9bJ2lzJyArIG5hbWVdID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCAnICsgbmFtZSArICddJztcbiAgICB9O1xuICB9KTtcblxuICAvLyBEZWZpbmUgYSBmYWxsYmFjayB2ZXJzaW9uIG9mIHRoZSBtZXRob2QgaW4gYnJvd3NlcnMgKGFoZW0sIElFIDwgOSksIHdoZXJlXG4gIC8vIHRoZXJlIGlzbid0IGFueSBpbnNwZWN0YWJsZSBcIkFyZ3VtZW50c1wiIHR5cGUuXG4gIGlmICghXy5pc0FyZ3VtZW50cyhhcmd1bWVudHMpKSB7XG4gICAgXy5pc0FyZ3VtZW50cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIF8uaGFzKG9iaiwgJ2NhbGxlZScpO1xuICAgIH07XG4gIH1cblxuICAvLyBPcHRpbWl6ZSBgaXNGdW5jdGlvbmAgaWYgYXBwcm9wcmlhdGUuIFdvcmsgYXJvdW5kIHNvbWUgdHlwZW9mIGJ1Z3MgaW4gb2xkIHY4LFxuICAvLyBJRSAxMSAoIzE2MjEpLCBhbmQgaW4gU2FmYXJpIDggKCMxOTI5KS5cbiAgaWYgKHR5cGVvZiAvLi8gIT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgSW50OEFycmF5ICE9ICdvYmplY3QnKSB7XG4gICAgXy5pc0Z1bmN0aW9uID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PSAnZnVuY3Rpb24nIHx8IGZhbHNlO1xuICAgIH07XG4gIH1cblxuICAvLyBJcyBhIGdpdmVuIG9iamVjdCBhIGZpbml0ZSBudW1iZXI/XG4gIF8uaXNGaW5pdGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gaXNGaW5pdGUob2JqKSAmJiAhaXNOYU4ocGFyc2VGbG9hdChvYmopKTtcbiAgfTtcblxuICAvLyBJcyB0aGUgZ2l2ZW4gdmFsdWUgYE5hTmA/IChOYU4gaXMgdGhlIG9ubHkgbnVtYmVyIHdoaWNoIGRvZXMgbm90IGVxdWFsIGl0c2VsZikuXG4gIF8uaXNOYU4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gXy5pc051bWJlcihvYmopICYmIG9iaiAhPT0gK29iajtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGEgYm9vbGVhbj9cbiAgXy5pc0Jvb2xlYW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB0cnVlIHx8IG9iaiA9PT0gZmFsc2UgfHwgdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBCb29sZWFuXSc7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBlcXVhbCB0byBudWxsP1xuICBfLmlzTnVsbCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IG51bGw7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YXJpYWJsZSB1bmRlZmluZWQ/XG4gIF8uaXNVbmRlZmluZWQgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB2b2lkIDA7XG4gIH07XG5cbiAgLy8gU2hvcnRjdXQgZnVuY3Rpb24gZm9yIGNoZWNraW5nIGlmIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBwcm9wZXJ0eSBkaXJlY3RseVxuICAvLyBvbiBpdHNlbGYgKGluIG90aGVyIHdvcmRzLCBub3Qgb24gYSBwcm90b3R5cGUpLlxuICBfLmhhcyA9IGZ1bmN0aW9uKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIG9iaiAhPSBudWxsICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xuICB9O1xuXG4gIC8vIFV0aWxpdHkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gUnVuIFVuZGVyc2NvcmUuanMgaW4gKm5vQ29uZmxpY3QqIG1vZGUsIHJldHVybmluZyB0aGUgYF9gIHZhcmlhYmxlIHRvIGl0c1xuICAvLyBwcmV2aW91cyBvd25lci4gUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QuXG4gIF8ubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIHJvb3QuXyA9IHByZXZpb3VzVW5kZXJzY29yZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyBLZWVwIHRoZSBpZGVudGl0eSBmdW5jdGlvbiBhcm91bmQgZm9yIGRlZmF1bHQgaXRlcmF0ZWVzLlxuICBfLmlkZW50aXR5ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgLy8gUHJlZGljYXRlLWdlbmVyYXRpbmcgZnVuY3Rpb25zLiBPZnRlbiB1c2VmdWwgb3V0c2lkZSBvZiBVbmRlcnNjb3JlLlxuICBfLmNvbnN0YW50ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgfTtcblxuICBfLm5vb3AgPSBmdW5jdGlvbigpe307XG5cbiAgXy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuXG4gIC8vIEdlbmVyYXRlcyBhIGZ1bmN0aW9uIGZvciBhIGdpdmVuIG9iamVjdCB0aGF0IHJldHVybnMgYSBnaXZlbiBwcm9wZXJ0eS5cbiAgXy5wcm9wZXJ0eU9mID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PSBudWxsID8gZnVuY3Rpb24oKXt9IDogZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gb2JqW2tleV07XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgcHJlZGljYXRlIGZvciBjaGVja2luZyB3aGV0aGVyIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBzZXQgb2ZcbiAgLy8gYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8ubWF0Y2hlciA9IF8ubWF0Y2hlcyA9IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgYXR0cnMgPSBfLmV4dGVuZE93bih7fSwgYXR0cnMpO1xuICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBfLmlzTWF0Y2gob2JqLCBhdHRycyk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSdW4gYSBmdW5jdGlvbiAqKm4qKiB0aW1lcy5cbiAgXy50aW1lcyA9IGZ1bmN0aW9uKG4sIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgdmFyIGFjY3VtID0gQXJyYXkoTWF0aC5tYXgoMCwgbikpO1xuICAgIGl0ZXJhdGVlID0gb3B0aW1pemVDYihpdGVyYXRlZSwgY29udGV4dCwgMSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIGFjY3VtW2ldID0gaXRlcmF0ZWUoaSk7XG4gICAgcmV0dXJuIGFjY3VtO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIGFuZCBtYXggKGluY2x1c2l2ZSkuXG4gIF8ucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICBpZiAobWF4ID09IG51bGwpIHtcbiAgICAgIG1heCA9IG1pbjtcbiAgICAgIG1pbiA9IDA7XG4gICAgfVxuICAgIHJldHVybiBtaW4gKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpO1xuICB9O1xuXG4gIC8vIEEgKHBvc3NpYmx5IGZhc3Rlcikgd2F5IHRvIGdldCB0aGUgY3VycmVudCB0aW1lc3RhbXAgYXMgYW4gaW50ZWdlci5cbiAgXy5ub3cgPSBEYXRlLm5vdyB8fCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH07XG5cbiAgIC8vIExpc3Qgb2YgSFRNTCBlbnRpdGllcyBmb3IgZXNjYXBpbmcuXG4gIHZhciBlc2NhcGVNYXAgPSB7XG4gICAgJyYnOiAnJmFtcDsnLFxuICAgICc8JzogJyZsdDsnLFxuICAgICc+JzogJyZndDsnLFxuICAgICdcIic6ICcmcXVvdDsnLFxuICAgIFwiJ1wiOiAnJiN4Mjc7JyxcbiAgICAnYCc6ICcmI3g2MDsnXG4gIH07XG4gIHZhciB1bmVzY2FwZU1hcCA9IF8uaW52ZXJ0KGVzY2FwZU1hcCk7XG5cbiAgLy8gRnVuY3Rpb25zIGZvciBlc2NhcGluZyBhbmQgdW5lc2NhcGluZyBzdHJpbmdzIHRvL2Zyb20gSFRNTCBpbnRlcnBvbGF0aW9uLlxuICB2YXIgY3JlYXRlRXNjYXBlciA9IGZ1bmN0aW9uKG1hcCkge1xuICAgIHZhciBlc2NhcGVyID0gZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgIHJldHVybiBtYXBbbWF0Y2hdO1xuICAgIH07XG4gICAgLy8gUmVnZXhlcyBmb3IgaWRlbnRpZnlpbmcgYSBrZXkgdGhhdCBuZWVkcyB0byBiZSBlc2NhcGVkXG4gICAgdmFyIHNvdXJjZSA9ICcoPzonICsgXy5rZXlzKG1hcCkuam9pbignfCcpICsgJyknO1xuICAgIHZhciB0ZXN0UmVnZXhwID0gUmVnRXhwKHNvdXJjZSk7XG4gICAgdmFyIHJlcGxhY2VSZWdleHAgPSBSZWdFeHAoc291cmNlLCAnZycpO1xuICAgIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgIHN0cmluZyA9IHN0cmluZyA9PSBudWxsID8gJycgOiAnJyArIHN0cmluZztcbiAgICAgIHJldHVybiB0ZXN0UmVnZXhwLnRlc3Qoc3RyaW5nKSA/IHN0cmluZy5yZXBsYWNlKHJlcGxhY2VSZWdleHAsIGVzY2FwZXIpIDogc3RyaW5nO1xuICAgIH07XG4gIH07XG4gIF8uZXNjYXBlID0gY3JlYXRlRXNjYXBlcihlc2NhcGVNYXApO1xuICBfLnVuZXNjYXBlID0gY3JlYXRlRXNjYXBlcih1bmVzY2FwZU1hcCk7XG5cbiAgLy8gSWYgdGhlIHZhbHVlIG9mIHRoZSBuYW1lZCBgcHJvcGVydHlgIGlzIGEgZnVuY3Rpb24gdGhlbiBpbnZva2UgaXQgd2l0aCB0aGVcbiAgLy8gYG9iamVjdGAgYXMgY29udGV4dDsgb3RoZXJ3aXNlLCByZXR1cm4gaXQuXG4gIF8ucmVzdWx0ID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSwgZmFsbGJhY2spIHtcbiAgICB2YXIgdmFsdWUgPSBvYmplY3QgPT0gbnVsbCA/IHZvaWQgMCA6IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHtcbiAgICAgIHZhbHVlID0gZmFsbGJhY2s7XG4gICAgfVxuICAgIHJldHVybiBfLmlzRnVuY3Rpb24odmFsdWUpID8gdmFsdWUuY2FsbChvYmplY3QpIDogdmFsdWU7XG4gIH07XG5cbiAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgaW50ZWdlciBpZCAodW5pcXVlIHdpdGhpbiB0aGUgZW50aXJlIGNsaWVudCBzZXNzaW9uKS5cbiAgLy8gVXNlZnVsIGZvciB0ZW1wb3JhcnkgRE9NIGlkcy5cbiAgdmFyIGlkQ291bnRlciA9IDA7XG4gIF8udW5pcXVlSWQgPSBmdW5jdGlvbihwcmVmaXgpIHtcbiAgICB2YXIgaWQgPSArK2lkQ291bnRlciArICcnO1xuICAgIHJldHVybiBwcmVmaXggPyBwcmVmaXggKyBpZCA6IGlkO1xuICB9O1xuXG4gIC8vIEJ5IGRlZmF1bHQsIFVuZGVyc2NvcmUgdXNlcyBFUkItc3R5bGUgdGVtcGxhdGUgZGVsaW1pdGVycywgY2hhbmdlIHRoZVxuICAvLyBmb2xsb3dpbmcgdGVtcGxhdGUgc2V0dGluZ3MgdG8gdXNlIGFsdGVybmF0aXZlIGRlbGltaXRlcnMuXG4gIF8udGVtcGxhdGVTZXR0aW5ncyA9IHtcbiAgICBldmFsdWF0ZSAgICA6IC88JShbXFxzXFxTXSs/KSU+L2csXG4gICAgaW50ZXJwb2xhdGUgOiAvPCU9KFtcXHNcXFNdKz8pJT4vZyxcbiAgICBlc2NhcGUgICAgICA6IC88JS0oW1xcc1xcU10rPyklPi9nXG4gIH07XG5cbiAgLy8gV2hlbiBjdXN0b21pemluZyBgdGVtcGxhdGVTZXR0aW5nc2AsIGlmIHlvdSBkb24ndCB3YW50IHRvIGRlZmluZSBhblxuICAvLyBpbnRlcnBvbGF0aW9uLCBldmFsdWF0aW9uIG9yIGVzY2FwaW5nIHJlZ2V4LCB3ZSBuZWVkIG9uZSB0aGF0IGlzXG4gIC8vIGd1YXJhbnRlZWQgbm90IHRvIG1hdGNoLlxuICB2YXIgbm9NYXRjaCA9IC8oLileLztcblxuICAvLyBDZXJ0YWluIGNoYXJhY3RlcnMgbmVlZCB0byBiZSBlc2NhcGVkIHNvIHRoYXQgdGhleSBjYW4gYmUgcHV0IGludG8gYVxuICAvLyBzdHJpbmcgbGl0ZXJhbC5cbiAgdmFyIGVzY2FwZXMgPSB7XG4gICAgXCInXCI6ICAgICAgXCInXCIsXG4gICAgJ1xcXFwnOiAgICAgJ1xcXFwnLFxuICAgICdcXHInOiAgICAgJ3InLFxuICAgICdcXG4nOiAgICAgJ24nLFxuICAgICdcXHUyMDI4JzogJ3UyMDI4JyxcbiAgICAnXFx1MjAyOSc6ICd1MjAyOSdcbiAgfTtcblxuICB2YXIgZXNjYXBlciA9IC9cXFxcfCd8XFxyfFxcbnxcXHUyMDI4fFxcdTIwMjkvZztcblxuICB2YXIgZXNjYXBlQ2hhciA9IGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgcmV0dXJuICdcXFxcJyArIGVzY2FwZXNbbWF0Y2hdO1xuICB9O1xuXG4gIC8vIEphdmFTY3JpcHQgbWljcm8tdGVtcGxhdGluZywgc2ltaWxhciB0byBKb2huIFJlc2lnJ3MgaW1wbGVtZW50YXRpb24uXG4gIC8vIFVuZGVyc2NvcmUgdGVtcGxhdGluZyBoYW5kbGVzIGFyYml0cmFyeSBkZWxpbWl0ZXJzLCBwcmVzZXJ2ZXMgd2hpdGVzcGFjZSxcbiAgLy8gYW5kIGNvcnJlY3RseSBlc2NhcGVzIHF1b3RlcyB3aXRoaW4gaW50ZXJwb2xhdGVkIGNvZGUuXG4gIC8vIE5COiBgb2xkU2V0dGluZ3NgIG9ubHkgZXhpc3RzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgXy50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHRleHQsIHNldHRpbmdzLCBvbGRTZXR0aW5ncykge1xuICAgIGlmICghc2V0dGluZ3MgJiYgb2xkU2V0dGluZ3MpIHNldHRpbmdzID0gb2xkU2V0dGluZ3M7XG4gICAgc2V0dGluZ3MgPSBfLmRlZmF1bHRzKHt9LCBzZXR0aW5ncywgXy50ZW1wbGF0ZVNldHRpbmdzKTtcblxuICAgIC8vIENvbWJpbmUgZGVsaW1pdGVycyBpbnRvIG9uZSByZWd1bGFyIGV4cHJlc3Npb24gdmlhIGFsdGVybmF0aW9uLlxuICAgIHZhciBtYXRjaGVyID0gUmVnRXhwKFtcbiAgICAgIChzZXR0aW5ncy5lc2NhcGUgfHwgbm9NYXRjaCkuc291cmNlLFxuICAgICAgKHNldHRpbmdzLmludGVycG9sYXRlIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAgIChzZXR0aW5ncy5ldmFsdWF0ZSB8fCBub01hdGNoKS5zb3VyY2VcbiAgICBdLmpvaW4oJ3wnKSArICd8JCcsICdnJyk7XG5cbiAgICAvLyBDb21waWxlIHRoZSB0ZW1wbGF0ZSBzb3VyY2UsIGVzY2FwaW5nIHN0cmluZyBsaXRlcmFscyBhcHByb3ByaWF0ZWx5LlxuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHNvdXJjZSA9IFwiX19wKz0nXCI7XG4gICAgdGV4dC5yZXBsYWNlKG1hdGNoZXIsIGZ1bmN0aW9uKG1hdGNoLCBlc2NhcGUsIGludGVycG9sYXRlLCBldmFsdWF0ZSwgb2Zmc2V0KSB7XG4gICAgICBzb3VyY2UgKz0gdGV4dC5zbGljZShpbmRleCwgb2Zmc2V0KS5yZXBsYWNlKGVzY2FwZXIsIGVzY2FwZUNoYXIpO1xuICAgICAgaW5kZXggPSBvZmZzZXQgKyBtYXRjaC5sZW5ndGg7XG5cbiAgICAgIGlmIChlc2NhcGUpIHtcbiAgICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBlc2NhcGUgKyBcIikpPT1udWxsPycnOl8uZXNjYXBlKF9fdCkpK1xcbidcIjtcbiAgICAgIH0gZWxzZSBpZiAoaW50ZXJwb2xhdGUpIHtcbiAgICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBpbnRlcnBvbGF0ZSArIFwiKSk9PW51bGw/Jyc6X190KStcXG4nXCI7XG4gICAgICB9IGVsc2UgaWYgKGV2YWx1YXRlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIic7XFxuXCIgKyBldmFsdWF0ZSArIFwiXFxuX19wKz0nXCI7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkb2JlIFZNcyBuZWVkIHRoZSBtYXRjaCByZXR1cm5lZCB0byBwcm9kdWNlIHRoZSBjb3JyZWN0IG9mZmVzdC5cbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9KTtcbiAgICBzb3VyY2UgKz0gXCInO1xcblwiO1xuXG4gICAgLy8gSWYgYSB2YXJpYWJsZSBpcyBub3Qgc3BlY2lmaWVkLCBwbGFjZSBkYXRhIHZhbHVlcyBpbiBsb2NhbCBzY29wZS5cbiAgICBpZiAoIXNldHRpbmdzLnZhcmlhYmxlKSBzb3VyY2UgPSAnd2l0aChvYmp8fHt9KXtcXG4nICsgc291cmNlICsgJ31cXG4nO1xuXG4gICAgc291cmNlID0gXCJ2YXIgX190LF9fcD0nJyxfX2o9QXJyYXkucHJvdG90eXBlLmpvaW4sXCIgK1xuICAgICAgXCJwcmludD1mdW5jdGlvbigpe19fcCs9X19qLmNhbGwoYXJndW1lbnRzLCcnKTt9O1xcblwiICtcbiAgICAgIHNvdXJjZSArICdyZXR1cm4gX19wO1xcbic7XG5cbiAgICB0cnkge1xuICAgICAgdmFyIHJlbmRlciA9IG5ldyBGdW5jdGlvbihzZXR0aW5ncy52YXJpYWJsZSB8fCAnb2JqJywgJ18nLCBzb3VyY2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGUuc291cmNlID0gc291cmNlO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG5cbiAgICB2YXIgdGVtcGxhdGUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICByZXR1cm4gcmVuZGVyLmNhbGwodGhpcywgZGF0YSwgXyk7XG4gICAgfTtcblxuICAgIC8vIFByb3ZpZGUgdGhlIGNvbXBpbGVkIHNvdXJjZSBhcyBhIGNvbnZlbmllbmNlIGZvciBwcmVjb21waWxhdGlvbi5cbiAgICB2YXIgYXJndW1lbnQgPSBzZXR0aW5ncy52YXJpYWJsZSB8fCAnb2JqJztcbiAgICB0ZW1wbGF0ZS5zb3VyY2UgPSAnZnVuY3Rpb24oJyArIGFyZ3VtZW50ICsgJyl7XFxuJyArIHNvdXJjZSArICd9JztcblxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfTtcblxuICAvLyBBZGQgYSBcImNoYWluXCIgZnVuY3Rpb24uIFN0YXJ0IGNoYWluaW5nIGEgd3JhcHBlZCBVbmRlcnNjb3JlIG9iamVjdC5cbiAgXy5jaGFpbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBpbnN0YW5jZSA9IF8ob2JqKTtcbiAgICBpbnN0YW5jZS5fY2hhaW4gPSB0cnVlO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfTtcblxuICAvLyBPT1BcbiAgLy8gLS0tLS0tLS0tLS0tLS0tXG4gIC8vIElmIFVuZGVyc2NvcmUgaXMgY2FsbGVkIGFzIGEgZnVuY3Rpb24sIGl0IHJldHVybnMgYSB3cmFwcGVkIG9iamVjdCB0aGF0XG4gIC8vIGNhbiBiZSB1c2VkIE9PLXN0eWxlLiBUaGlzIHdyYXBwZXIgaG9sZHMgYWx0ZXJlZCB2ZXJzaW9ucyBvZiBhbGwgdGhlXG4gIC8vIHVuZGVyc2NvcmUgZnVuY3Rpb25zLiBXcmFwcGVkIG9iamVjdHMgbWF5IGJlIGNoYWluZWQuXG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNvbnRpbnVlIGNoYWluaW5nIGludGVybWVkaWF0ZSByZXN1bHRzLlxuICB2YXIgcmVzdWx0ID0gZnVuY3Rpb24oaW5zdGFuY2UsIG9iaikge1xuICAgIHJldHVybiBpbnN0YW5jZS5fY2hhaW4gPyBfKG9iaikuY2hhaW4oKSA6IG9iajtcbiAgfTtcblxuICAvLyBBZGQgeW91ciBvd24gY3VzdG9tIGZ1bmN0aW9ucyB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QuXG4gIF8ubWl4aW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICBfLmVhY2goXy5mdW5jdGlvbnMob2JqKSwgZnVuY3Rpb24obmFtZSkge1xuICAgICAgdmFyIGZ1bmMgPSBfW25hbWVdID0gb2JqW25hbWVdO1xuICAgICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbdGhpcy5fd3JhcHBlZF07XG4gICAgICAgIHB1c2guYXBwbHkoYXJncywgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCh0aGlzLCBmdW5jLmFwcGx5KF8sIGFyZ3MpKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQWRkIGFsbCBvZiB0aGUgVW5kZXJzY29yZSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIgb2JqZWN0LlxuICBfLm1peGluKF8pO1xuXG4gIC8vIEFkZCBhbGwgbXV0YXRvciBBcnJheSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIuXG4gIF8uZWFjaChbJ3BvcCcsICdwdXNoJywgJ3JldmVyc2UnLCAnc2hpZnQnLCAnc29ydCcsICdzcGxpY2UnLCAndW5zaGlmdCddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IEFycmF5UHJvdG9bbmFtZV07XG4gICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvYmogPSB0aGlzLl93cmFwcGVkO1xuICAgICAgbWV0aG9kLmFwcGx5KG9iaiwgYXJndW1lbnRzKTtcbiAgICAgIGlmICgobmFtZSA9PT0gJ3NoaWZ0JyB8fCBuYW1lID09PSAnc3BsaWNlJykgJiYgb2JqLmxlbmd0aCA9PT0gMCkgZGVsZXRlIG9ialswXTtcbiAgICAgIHJldHVybiByZXN1bHQodGhpcywgb2JqKTtcbiAgICB9O1xuICB9KTtcblxuICAvLyBBZGQgYWxsIGFjY2Vzc29yIEFycmF5IGZ1bmN0aW9ucyB0byB0aGUgd3JhcHBlci5cbiAgXy5lYWNoKFsnY29uY2F0JywgJ2pvaW4nLCAnc2xpY2UnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBBcnJheVByb3RvW25hbWVdO1xuICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcmVzdWx0KHRoaXMsIG1ldGhvZC5hcHBseSh0aGlzLl93cmFwcGVkLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9KTtcblxuICAvLyBFeHRyYWN0cyB0aGUgcmVzdWx0IGZyb20gYSB3cmFwcGVkIGFuZCBjaGFpbmVkIG9iamVjdC5cbiAgXy5wcm90b3R5cGUudmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fd3JhcHBlZDtcbiAgfTtcblxuICAvLyBQcm92aWRlIHVud3JhcHBpbmcgcHJveHkgZm9yIHNvbWUgbWV0aG9kcyB1c2VkIGluIGVuZ2luZSBvcGVyYXRpb25zXG4gIC8vIHN1Y2ggYXMgYXJpdGhtZXRpYyBhbmQgSlNPTiBzdHJpbmdpZmljYXRpb24uXG4gIF8ucHJvdG90eXBlLnZhbHVlT2YgPSBfLnByb3RvdHlwZS50b0pTT04gPSBfLnByb3RvdHlwZS52YWx1ZTtcblxuICBfLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAnJyArIHRoaXMuX3dyYXBwZWQ7XG4gIH07XG5cbiAgLy8gQU1EIHJlZ2lzdHJhdGlvbiBoYXBwZW5zIGF0IHRoZSBlbmQgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBTUQgbG9hZGVyc1xuICAvLyB0aGF0IG1heSBub3QgZW5mb3JjZSBuZXh0LXR1cm4gc2VtYW50aWNzIG9uIG1vZHVsZXMuIEV2ZW4gdGhvdWdoIGdlbmVyYWxcbiAgLy8gcHJhY3RpY2UgZm9yIEFNRCByZWdpc3RyYXRpb24gaXMgdG8gYmUgYW5vbnltb3VzLCB1bmRlcnNjb3JlIHJlZ2lzdGVyc1xuICAvLyBhcyBhIG5hbWVkIG1vZHVsZSBiZWNhdXNlLCBsaWtlIGpRdWVyeSwgaXQgaXMgYSBiYXNlIGxpYnJhcnkgdGhhdCBpc1xuICAvLyBwb3B1bGFyIGVub3VnaCB0byBiZSBidW5kbGVkIGluIGEgdGhpcmQgcGFydHkgbGliLCBidXQgbm90IGJlIHBhcnQgb2ZcbiAgLy8gYW4gQU1EIGxvYWQgcmVxdWVzdC4gVGhvc2UgY2FzZXMgY291bGQgZ2VuZXJhdGUgYW4gZXJyb3Igd2hlbiBhblxuICAvLyBhbm9ueW1vdXMgZGVmaW5lKCkgaXMgY2FsbGVkIG91dHNpZGUgb2YgYSBsb2FkZXIgcmVxdWVzdC5cbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZSgndW5kZXJzY29yZScsIFtdLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBfO1xuICAgIH0pO1xuICB9XG59LmNhbGwodGhpcykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihIYW5kbGViYXJzLCBnZXRUZW1wbGF0ZSkge1xuICByZXR1cm4ge1xuICAgIHZpZXc6IHJlcXVpcmUoJy4vaGVscGVycy92aWV3JykoSGFuZGxlYmFycyksXG4gICAgcGFydGlhbDogcmVxdWlyZSgnLi9oZWxwZXJzL3BhcnRpYWwnKShIYW5kbGViYXJzLCBnZXRUZW1wbGF0ZSksXG4gICAganNvbjogcmVxdWlyZSgnLi9oZWxwZXJzL2pzb24nKShIYW5kbGViYXJzKSxcbiAgICBlYWNoOiByZXF1aXJlKCcuL2hlbHBlcnMvZWFjaCcpKEhhbmRsZWJhcnMpLFxuICAgIHNlcnZlclRvQ2xpZW50SnNvbjogcmVxdWlyZSgnLi9oZWxwZXJzL3NlcnZlclRvQ2xpZW50SnNvbicpKEhhbmRsZWJhcnMpLFxuICAgIGZvckVhY2g6IHJlcXVpcmUoJy4vaGVscGVycy9mb3JFYWNoJylcbiAgfTtcbn07XG4iLCIvKipcbiogRXh0ZW5kIGBlYWNoYCB0byBwYXNzIHRocm91Z2ggaW1wb3J0YW50IGNvbnRleHQuXG4qL1xuXG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKSxcbiAgICBnZXRPcHRpb25zRnJvbUNvbnRleHQgPSByZXF1aXJlKCcuLi8uLi9saWIvZ2V0T3B0aW9ucycpLFxuICAgIG9sZEVhY2g7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSGFuZGxlYmFycykge1xuICBvbGRFYWNoID0gb2xkRWFjaCB8fCBIYW5kbGViYXJzLmhlbHBlcnMuZWFjaDtcblxuICByZXR1cm4gZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zLmRhdGEgPSBIYW5kbGViYXJzLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSB8fCB7fSk7XG5cbiAgICAvLyBNYWtlIHN1cmUgYHRoaXMuX2FwcGAsIGB0aGlzLl92aWV3YCwgZXRjIGFyZSBhdmFpbGFibGUuXG4gICAgXy5leHRlbmQob3B0aW9ucy5kYXRhLCBnZXRPcHRpb25zRnJvbUNvbnRleHQodGhpcykpO1xuXG4gICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgaGVscGVyIHdpdGggbmV3IGNvbnRleHQuXG4gICAgcmV0dXJuIG9sZEVhY2guY2FsbCh0aGlzLCBjb250ZXh0LCBvcHRpb25zKTtcbiAgfVxufTtcbiIsIi8qKlxuKiBDcmVhdGUgYSBgZm9yRWFjaGAgaGVscGVyIHRoYXQgd29ya3Mgb24gYSBmZXcgbW9yZSBjYXNlcyBhbmQgZ2l2ZXMgbW9yZSBmbGV4aWJpbGl0eVxuKiB3aGVuIGRlYWxpbmcgd2l0aCBhcnJheXMsIG9iamVjdHMsIG9yIGNvbGxlY3Rpb25zXG4qL1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIG9wdHMpIHtcbiAgdmFyIGxlbiA9IGNvbGxlY3Rpb24gJiYgY29sbGVjdGlvbi5sZW5ndGgsXG4gICAgICBhcHAgPSB0aGlzLl9hcHAgfHwgdGhpcy5hcHAsXG4gICAgICBpc0NvbGxlY3Rpb24gPSBhcHAubW9kZWxVdGlscy5pc0NvbGxlY3Rpb24oY29sbGVjdGlvbiksXG4gICAgICBidWZmZXIgPSAnJztcblxuICBpZiAoXy5pc0VtcHR5KGNvbGxlY3Rpb24pKSB7XG4gICAgcmV0dXJuIG9wdHMuaW52ZXJzZShfLmV4dGVuZCh7fSwgdGhpcywge1xuICAgICAgX2FwcDogYXBwLFxuICAgICAgX21vZGVsOiB0aGlzLl9tb2RlbCB8fCB0aGlzLm1vZGVsLFxuICAgICAgX2NvbGxlY3Rpb246IHRoaXMuX2NvbGxlY3Rpb24gfHwgdGhpcy5jb2xsZWN0aW9uLFxuICAgICAgX3ZpZXc6IHRoaXMuX3ZpZXcgfHwgdGhpcy52aWV3XG4gICAgfSkpO1xuICB9XG5cbiAgLy8gaXRlcmF0ZSB0aGUgbW9kZWxzIG9uIGEgY29sbGVjdGlvblxuICBpZiAoaXNDb2xsZWN0aW9uKSB7XG4gICAgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ubW9kZWxzXG4gIH1cblxuICBfLmVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICBpZiAoaXNDb2xsZWN0aW9uICYmIG9wdHMuaGFzaC50b0pTT04pIHtcbiAgICAgIHZhbHVlID0gdmFsdWUudG9KU09OKCk7XG4gICAgfVxuXG4gICAgdmFyIGl0ZW0gPSBfLmV4dGVuZCh7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIF9hcHA6IHRoaXMuX2FwcCB8fCB0aGlzLmFwcCxcbiAgICAgIF9tb2RlbDogdGhpcy5fbW9kZWwgfHwgdGhpcy5tb2RlbCxcbiAgICAgIF9jb2xsZWN0aW9uOiB0aGlzLl9jb2xsZWN0aW9uIHx8IHRoaXMuY29sbGVjdGlvbixcbiAgICAgIF92aWV3OiB0aGlzLl92aWV3IHx8IHRoaXMudmlld1xuICAgIH0sIG9wdHMuaGFzaCk7XG5cbiAgICAvLyBhZGRpbmcgZXh0cmEgYXR0cmlidXRlcyB0byBhbiBpdGVtIGZvciBhcnJheSB0cmF2ZXJzYWxcbiAgICBpZiAoXy5pc0FycmF5KGNvbGxlY3Rpb24pIHx8IGlzQ29sbGVjdGlvbikge1xuICAgICAgaXRlbSA9IF8uZXh0ZW5kKGl0ZW0sIHtcbiAgICAgICAgX3RvdGFsOiBsZW4sXG4gICAgICAgIF9pc0ZpcnN0OiBrZXkgPT09IDAsXG4gICAgICAgIF9pc0xhc3Q6IGtleSA9PT0gKGxlbiAtIDEpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBidWZmZXIgKz0gb3B0cy5mbihpdGVtKTtcbiAgfS5iaW5kKHRoaXMpKTtcblxuICByZXR1cm4gYnVmZmVyO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEhhbmRsZWJhcnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmplY3QsIHNwYWNpbmcpIHtcbiAgICByZXR1cm4gbmV3IEhhbmRsZWJhcnMuU2FmZVN0cmluZyhKU09OLnN0cmluZ2lmeShvYmplY3QsIG51bGwsIHNwYWNpbmcpIHx8ICdudWxsJyk7XG4gIH1cbn1cbiIsIi8qKlxuICogY3JlYXRlIGFuIGh0bWwgcGFydGlhbFxuICovXG52YXIgZ2V0UHJvcGVydHkgPSByZXF1aXJlKCcuLi8uLi9saWIvZ2V0UHJvcGVydHknKSxcbiAgICBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChIYW5kbGViYXJzLCBnZXRUZW1wbGF0ZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHRlbXBsYXRlTmFtZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXRhLCBodG1sLCBjb250ZXh0LCB0ZW1wbGF0ZTtcblxuICAgIHRlbXBsYXRlID0gZ2V0VGVtcGxhdGUodGVtcGxhdGVOYW1lKTtcbiAgICBjb250ZXh0ID0gb3B0aW9ucy5oYXNoIHx8IHt9O1xuXG4gICAgLy8gRmlyc3QgdHJ5IHRvIHVzZSBIYW5kbGViYXJzJyBoYXNoIGFyZ3VtZW50cyBhcyB0aGUgY29udGV4dCBmb3IgdGhlXG4gICAgLy8gcGFydGlhbCwgaWYgcHJlc2VudC5cbiAgICAvL1xuICAgIC8vIGV4OiBge3twYXJ0aWFsIFwidXNlcnMvcGhvdG9cIiB1c2VyPXVzZXJ9fWBcbiAgICBpZiAoXy5pc0VtcHR5KGNvbnRleHQpKSB7XG4gICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gaGFzaCBhcmd1bWVudHMgZ2l2ZW4sIHRoZW4gaW5oZXJpdCB0aGUgcGFyZW50IGNvbnRleHQuXG4gICAgICAvL1xuICAgICAgLy8gZXg6IGB7e3BhcnRpYWwgXCJ1c2Vycy9waG90b1wifX1gXG4gICAgICBjb250ZXh0ID0gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgYSBoYXNoIGFyZ3VtZW50IGlzIGdpdmVuIHdpdGgga2V5IGBjb250ZXh0YCwgdGhlbiB1c2UgdGhhdCBhcyB0aGUgY29udGV4dC5cbiAgICAgIC8vXG4gICAgICAvLyBleDogYHt7cGFydGlhbCBcInVzZXJzL3Bob3RvXCIgY29udGV4dD11c2VyfX1gXG4gICAgICBpZiAoY29udGV4dC5oYXNPd25Qcm9wZXJ0eSgnY29udGV4dCcpKSB7XG4gICAgICAgIGNvbnRleHQgPSBjb250ZXh0LmNvbnRleHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dCA9IF8uY2xvbmUoY29udGV4dCk7XG4gICAgY29udGV4dC5fYXBwID0gZ2V0UHJvcGVydHkoJ19hcHAnLCB0aGlzLCBvcHRpb25zKTtcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKG9wdGlvbnMuZm4pKSB7XG4gICAgICBjb250ZXh0Ll9ibG9jayA9IG9wdGlvbnMuZm4oY29udGV4dCk7XG4gICAgfVxuXG4gICAgaHRtbCA9IHRlbXBsYXRlKGNvbnRleHQpO1xuICAgIHJldHVybiBuZXcgSGFuZGxlYmFycy5TYWZlU3RyaW5nKGh0bWwpO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEhhbmRsZWJhcnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcbiAgICB2YXIgZGF0YSA9IGVzY2FwZShKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgICByZXR1cm4gbmV3IEhhbmRsZWJhcnMuU2FmZVN0cmluZygnSlNPTi5wYXJzZSh1bmVzY2FwZShcIicgKyBkYXRhICsgJ1wiKSknKTtcbiAgfTtcbn07XG4iLCIvKipcbiAqIEhlbHBlciB0byBjcmVhdGUgbmV3IHZpZXdzIGluIHRoZSB0ZW1wbGF0ZXNcbiAqL1xuXG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKSxcbiAgICBnZXRQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uLy4uL2xpYi9nZXRQcm9wZXJ0eScpLFxuICAgIEJhc2VWaWV3O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChIYW5kbGViYXJzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmlld05hbWUsIG9wdGlvbnMpIHtcbiAgICB2YXIgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyxcbiAgICAgICAgaHRtbCwgdmlld09wdGlvbnMsIHZpZXcsIGFwcDtcblxuICAgIHZpZXdPcHRpb25zID0gb3B0aW9ucy5oYXNoIHx8IHt9O1xuICAgIGFwcCA9IGdldFByb3BlcnR5KCdfYXBwJywgdGhpcywgb3B0aW9ucyk7XG5cbiAgICAvLyBQYXNzIHRocm91Z2ggYSByZWZlcmVuY2UgdG8gdGhlIGFwcC5cbiAgICBpZiAoYXBwKSB7XG4gICAgICB2aWV3T3B0aW9ucy5hcHAgPSBhcHA7XG4gICAgICB2aWV3TmFtZSA9IGFwcC5tb2RlbFV0aWxzLnVuZGVyc2Nvcml6ZSh2aWV3TmFtZSk7XG4gICAgfSBlbHNle1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQW4gQXBwIGluc3RhbmNlIGlzIHJlcXVpcmVkIHdoZW4gcmVuZGVyaW5nIGEgdmlldywgaXQgY291bGQgbm90IGJlIGV4dHJhY3RlZCBmcm9tIHRoZSBvcHRpb25zLlwiKVxuICAgIH1cblxuICAgIC8vIGFsbG93IHZpZXdzIHRvIGJlIHBhc3NlZCBvcHRpb25hbCBibG9jayBlbGVtZW50c1xuICAgIGlmIChfLmlzRnVuY3Rpb24ob3B0aW9ucy5mbikpIHtcbiAgICAgIHZhciBibG9ja09wdGlvbnMgPSBfLmV4dGVuZCh7fSwgdGhpcywgdmlld09wdGlvbnMpO1xuICAgICAgdmlld09wdGlvbnMuX2Jsb2NrID0gb3B0aW9ucy5mbihibG9ja09wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChpc1NlcnZlcikge1xuICAgICAgdmFyIHBhcmVudFZpZXcgPSBnZXRQcm9wZXJ0eSgnX3ZpZXcnLCB0aGlzLCBvcHRpb25zKTtcbiAgICAgIGh0bWwgPSBnZXRTZXJ2ZXJIdG1sKHZpZXdOYW1lLCB2aWV3T3B0aW9ucywgcGFyZW50Vmlldyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGh0bWwgPSBnZXRDbGllbnRQbGFjZWhvbGRlcih2aWV3TmFtZSwgdmlld09wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgSGFuZGxlYmFycy5TYWZlU3RyaW5nKGh0bWwpO1xuICB9O1xufTtcblxuZnVuY3Rpb24gZ2V0U2VydmVySHRtbCh2aWV3TmFtZSwgdmlld09wdGlvbnMsIHBhcmVudFZpZXcpIHtcbiAgdmFyIFZpZXdDbGFzcywgdmlldztcblxuICBpZiAoIUJhc2VWaWV3KSB7IEJhc2VWaWV3ID0gcmVxdWlyZSgncmVuZHIvc2hhcmVkL2Jhc2UvdmlldycpOyB9XG5cbiAgLy8gUGFzcyB0aHJvdWdoIGEgcmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgdmlldy5cbiAgaWYgKHBhcmVudFZpZXcpIHsgdmlld09wdGlvbnMucGFyZW50VmlldyA9IHBhcmVudFZpZXc7IH1cblxuICAvLyBnZXQgdGhlIEJhY2tib25lLlZpZXcgYmFzZWQgb24gdmlld05hbWVcbiAgVmlld0NsYXNzID0gQmFzZVZpZXcuZ2V0Vmlldyh2aWV3TmFtZSwgdmlld09wdGlvbnMuYXBwLm9wdGlvbnMuZW50cnlQYXRoKTtcbiAgdmlldyA9IG5ldyBWaWV3Q2xhc3Modmlld09wdGlvbnMpO1xuXG4gIC8vIGNyZWF0ZSB0aGUgb3V0ZXJIVE1MIHVzaW5nIGNsYXNzTmFtZSwgdGFnTmFtZVxuICByZXR1cm4gdmlldy5nZXRIdG1sKCk7XG59XG5cbmZ1bmN0aW9uIGdldENsaWVudFBsYWNlaG9sZGVyKHZpZXdOYW1lLCB2aWV3T3B0aW9ucykge1xuICBpZiAoIUJhc2VWaWV3KSB7IEJhc2VWaWV3ID0gcmVxdWlyZSgncmVuZHIvc2hhcmVkL2Jhc2UvdmlldycpOyB9XG4gIHZhciBmZXRjaFN1bW1hcnk7XG5cbiAgLy8gQnVpbGRzIGEgZmV0Y2hfc3VtbWFyeSBhdHRyaWJ1dGVcbiAgdmlld09wdGlvbnMgPSBCYXNlVmlldy5wYXJzZU1vZGVsQW5kQ29sbGVjdGlvbih2aWV3T3B0aW9ucy5hcHAubW9kZWxVdGlscywgdmlld09wdGlvbnMpO1xuICBmZXRjaFN1bW1hcnkgPSBCYXNlVmlldy5leHRyYWN0RmV0Y2hTdW1tYXJ5KHZpZXdPcHRpb25zLmFwcC5tb2RlbFV0aWxzLCB2aWV3T3B0aW9ucyk7XG4gIHZpZXdPcHRpb25zWydmZXRjaF9zdW1tYXJ5J10gPSBmZXRjaFN1bW1hcnlcbiAgdmlld09wdGlvbnMgPSBfLm9taXQodmlld09wdGlvbnMsIF8ua2V5cyhmZXRjaFN1bW1hcnkpLmNvbmNhdChbJ21vZGVsJywgJ2NvbGxlY3Rpb24nLCAnYXBwJ10pKTtcblxuICAvLyBjcmVhdGUgYSBsaXN0IG9mIGRhdGEgYXR0cmlidXRlc1xuICB2YXIgYXR0clN0cmluZyA9IF8uaW5qZWN0KHZpZXdPcHRpb25zLCBmdW5jdGlvbihtZW1vLCB2YWx1ZSwga2V5KSB7XG4gICAgaWYgKF8uaXNBcnJheSh2YWx1ZSkgfHwgXy5pc09iamVjdCh2YWx1ZSkpIHsgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7IH1cbiAgICByZXR1cm4gbWVtbyArPSBcIiBkYXRhLVwiICsga2V5ICsgXCI9XFxcIlwiICsgXy5lc2NhcGUodmFsdWUpICsgXCJcXFwiXCI7XG4gIH0sICcnKTtcblxuICByZXR1cm4gJzxkaXYgZGF0YS1yZW5kZXI9XCJ0cnVlXCInICsgYXR0clN0cmluZyArJyBkYXRhLXZpZXc9XCInKyB2aWV3TmFtZSArJ1wiPjwvZGl2Pic7XG59XG4iLCJ2YXIgY2FjaGVkVGVtcGxhdGVzID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSGFuZGxlYmFycykge1xuXG4gIC8qKlxuICAgKiBQcm92aWRlIGEgd2F5IGZvciBhcHBzIHRvIHNwZWNpZnkgdGhhdCBkaWZmZXJlbnQgdGVtcGxhdGUgbmFtZSBwYXR0ZXJuc1xuICAgKiBzaG91bGQgdXNlIGRpZmZlcmVudCBjb21waWxlZCB0ZW1wbGF0ZSBmaWxlcy5cbiAgICpcbiAgICovXG4gIHZhciB0ZW1wbGF0ZVBhdHRlcm5zID0gW107XG5cbiAgLyoqXG4gICAqIEdpdmVuIGEgdGVtcGxhdGUgbmFtZSwgcmV0dXJuIHRoZSBjb21waWxlZCBIYW5kbGViYXJzIHRlbXBsYXRlLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0VGVtcGxhdGUodGVtcGxhdGVOYW1lKSB7XG4gICAgLyoqXG4gICAgICogRmluZCB0aGUgY29ycmVjdCBzb3VyY2UgZmlsZSBmb3IgdGhpcyB0ZW1wbGF0ZS5cbiAgICAgKi9cbiAgICB2YXIgc3JjID0gZ2V0U3JjRm9yVGVtcGxhdGUodGVtcGxhdGVOYW1lKTtcblxuICAgIC8qKlxuICAgICogQWxsb3cgY29tcGlsZWRUZW1wbGF0ZXMgdG8gYmUgY3JlYXRlZCBhc3luY2hyb25vdXNseSBieSBsYXp5LXJlcXVpcmluZyBpdC5cbiAgICAqL1xuICAgIGlmICghY2FjaGVkVGVtcGxhdGVzW3NyY10pIHtcbiAgICAgIGNhY2hlZFRlbXBsYXRlc1tzcmNdID0gcmVxdWlyZShzcmMpO1xuXG4gICAgICAvKipcbiAgICAgICAqIE1ha2UgaXQgcGxheSBuaWNlbHkgd2l0aCBib3RoIEFNRCBhbmQgQ29tbW9uSlMuXG4gICAgICAgKiBUaGUgYGdydW50LWNvbnRyaWItaGFuZGxlYmFyc2AgbW9kdWxlICBwcm9kdWNlcyBkaWZmZXJlbnQgc3R1Y3R1cmVcbiAgICAgICAqIG9mIGNvbXBpbGVkIHRlbXBsYXRlcyB3aXRoIGBhbWRgIHZzIGBjb21tb25qc2Agb3B0aW9ucy4gQWNjb21tb2RhdGVcbiAgICAgICAqIGJvdGggb3B0aW9ucyBoZXJlLiB0aGUgYGFtZGAgb3B0aW9uIHJlc3VsdHMgaW4gdGVtcGxhdGVzIGFzIGFuIE9iamVjdCxcbiAgICAgICAqIHdoZXJlYXMgdGhlIGBjb21tb25qc2Agb3B0aW9uIHJlc3VsdHMgaW4gdGVtcGxhdGVzIGFzIGEgRnVuY3Rpb24uXG4gICAgICAgKi9cbiAgICAgIGlmICh0eXBlb2YgY2FjaGVkVGVtcGxhdGVzW3NyY10gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWNoZWRUZW1wbGF0ZXNbc3JjXSA9IGNhY2hlZFRlbXBsYXRlc1tzcmNdKEhhbmRsZWJhcnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjYWNoZWRUZW1wbGF0ZXNbc3JjXVt0ZW1wbGF0ZU5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBhIGdpdmVuIHRlbXBsYXRlIG5hbWUsIGZpbmQgdGhlIGNvcnJlY3QgY29tcGlsZWQgdGVtcGxhdGVzIHNvdXJjZSBmaWxlXG4gICAqIGJhc2VkIG9uIHBhdHRlcm4gbWF0Y2hpbmcgb24gdGhlIHRlbXBsYXRlIG5hbWUuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRTcmNGb3JUZW1wbGF0ZSh0ZW1wbGF0ZU5hbWUpIHtcbiAgICB2YXIgY3VycmVudFBhdHRlcm4gPSB0ZW1wbGF0ZVBhdHRlcm5zLmZpbHRlcihmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmoucGF0dGVybi50ZXN0KHRlbXBsYXRlTmFtZSk7XG4gICAgfSlbMF07XG5cbiAgICBpZiAoY3VycmVudFBhdHRlcm4gPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBwYXR0ZXJuIGZvdW5kIHRvIG1hdGNoIHRlbXBsYXRlIFwiJyArIHRlbXBsYXRlTmFtZSArICdcIi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudFBhdHRlcm4uc3JjO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUZW1wbGF0ZTogZ2V0VGVtcGxhdGUsXG4gICAgZ2V0U3JjRm9yVGVtcGxhdGU6IGdldFNyY0ZvclRlbXBsYXRlLFxuICAgIHRlbXBsYXRlUGF0dGVybnM6IHRlbXBsYXRlUGF0dGVybnNcbiAgfVxufTtcbiIsInZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpLFxuICAgIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKSxcbiAgICBCYXNlVmlldyA9IHJlcXVpcmUoJy4uL3NoYXJlZC9iYXNlL3ZpZXcnKSxcbiAgICBpc1NlcnZlciA9ICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyk7XG5cblxuaWYgKCFpc1NlcnZlcikge1xuICBCYWNrYm9uZS4kID0gd2luZG93LiQgfHwgcmVxdWlyZSgnanF1ZXJ5Jyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZVZpZXcuZXh0ZW5kKHtcbiAgZWw6ICdib2R5JyxcblxuICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24oKSB7XG4gICAgQmFzZVZpZXcuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIF8uZGVmYXVsdHModGhpcy5vcHRpb25zLCB7XG4gICAgICBjb250ZW50RWw6ICcjY29udGVudCdcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEdyYWIgdGhlIGVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgbWFpbiB2aWV3LlxuICAgICAqL1xuICAgIHRoaXMuJGNvbnRlbnQgPSBCYWNrYm9uZS4kKHRoaXMub3B0aW9ucy5jb250ZW50RWwpO1xuICAgIHRoaXMuX2JpbmRJbnRlcmNlcHRDbGljaygpO1xuICB9LFxuXG4gIGhhc1B1c2hTdGF0ZTogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgIT0gbnVsbCxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge30sXG5cbiAgc2V0Q3VycmVudFZpZXc6IGZ1bmN0aW9uKHZpZXcpIHtcbiAgICB0aGlzLiRjb250ZW50Lmh0bWwodmlldy5lbCk7XG4gICAgdmlldy5yZW5kZXIoKTtcbiAgfSxcblxuICBfYmluZEludGVyY2VwdENsaWNrOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRlbC5vbignY2xpY2snLCAnYTpub3QoW2RhdGEtcGFzcy10aHJ1XSknLCB0aGlzLl9pbnRlcmNlcHRDbGljay5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICBfaW50ZXJjZXB0Q2xpY2s6IGZ1bmN0aW9uKGUpIHtcbiAgICAvKipcbiAgICAgKiBXZSB3YW50IHRoZSBhY3R1YWwgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSwgcmF0aGVyIHRoYW4gdGhlXG4gICAgICogZnVsbCBVUkwsIHNvIHdlIHVzZSBqUXVlcnkgaW5zdGVhZCBvZiBqdXN0IGUuY3VycmVudFRhcmdldC5ocmVmXG4gICAgICovXG4gICAgdmFyIGhyZWYgPSBCYWNrYm9uZS4kKGUuY3VycmVudFRhcmdldCkuYXR0cignaHJlZicpO1xuICAgIGlmICh0aGlzLnNob3VsZEludGVyY2VwdENsaWNrKGhyZWYsIGUuY3VycmVudFRhcmdldCwgZSkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuYXBwLnJvdXRlci5yZWRpcmVjdFRvKGhyZWYpO1xuICAgIH1cbiAgfSxcblxuICBzaG91bGRJbnRlcmNlcHRDbGljazogZnVuY3Rpb24oaHJlZiwgZWwsIGUpIHtcbiAgICB2YXIgaGFzaFBhcnRzLCBpc0hhc2hDbGljaztcblxuICAgIGlmICghKGhyZWYgJiYgdGhpcy5oYXNQdXNoU3RhdGUpIHx8IGUubWV0YUtleSB8fCBlLnNoaWZ0S2V5KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaGFzaFBhcnRzID0gaHJlZi5zcGxpdCgnIycpO1xuICAgIGlzSGFzaENsaWNrID0gaGFzaFBhcnRzLmxlbmd0aCA+IDEgJiYgaGFzaFBhcnRzWzBdID09PSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgcmV0dXJuICFpc0hhc2hDbGljayAmJiBocmVmLnNsaWNlKDAsIDEpID09PSAnLycgJiYgaHJlZi5zbGljZSgwLCAyKSAhPT0gJy8vJztcbiAgfVxuXG59KTtcbiIsIi8qKlxuICogU2luY2Ugd2UgbWFrZSByZW5kciBmaWxlcyBBTUQgZnJpZW5kbHkgb24gYXBwIHNldHVwIHN0YWdlXG4gKiB3ZSBuZWVkIHRvIHByZXRlbmQgdGhhdCB0aGlzIGNvZGUgaXMgcHVyZSBjb21tb25qc1xuICogbWVhbnMgbm8gQU1ELXN0eWxlIHJlcXVpcmUgY2FsbHNcbiAqL1xudmFyIHJlcXVpcmVBTUQgPSByZXF1aXJlO1xuXG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKSxcbiAgICBCYWNrYm9uZSA9IHJlcXVpcmUoJ2JhY2tib25lJyksXG4gICAgQmFzZVJvdXRlciA9IHJlcXVpcmUoJy4uL3NoYXJlZC9iYXNlL3JvdXRlcicpLFxuICAgIEJhc2VWaWV3ID0gcmVxdWlyZSgnLi4vc2hhcmVkL2Jhc2UvdmlldycpLFxuICAgICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LiQpIHx8IHJlcXVpcmUoJ2pxdWVyeScpLFxuICAgIGV4dHJhY3RQYXJhbU5hbWVzUmUgPSAvOihcXHcrKS9nLFxuICAgIHBsdXNSZSA9IC9cXCsvZyxcbiAgICBmaXJzdFJlbmRlciA9IHRydWUsXG4gICAgZGVmYXVsdFJvb3RQYXRoID0gJyc7XG5cbkJhY2tib25lLiQgPSAkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENsaWVudFJvdXRlcjtcblxuZnVuY3Rpb24gQ2xpZW50Um91dGVyKG9wdGlvbnMpIHtcbiAgdGhpcy5fcm91dGVyID0gbmV3IEJhY2tib25lLlJvdXRlcigpO1xuICBCYXNlUm91dGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgdGhpcy5hcHAgPSBvcHRpb25zLmFwcDtcblxuICB2YXIgQXBwVmlldyA9IHRoaXMub3B0aW9ucy5hcHBWaWV3Q2xhc3M7XG5cbiAgLy8gV2UgZG8gdGhpcyBoZXJlIHNvIHRoYXQgaXQncyBhdmFpbGFibGUgaW4gQXBwVmlldyBpbml0aWFsaXphdGlvbi5cbiAgdGhpcy5hcHAucm91dGVyID0gdGhpcztcblxuICB0aGlzLm9uKCdyb3V0ZTphZGQnLCB0aGlzLmFkZEJhY2tib25lUm91dGUsIHRoaXMpO1xuICB0aGlzLm9uKCdhY3Rpb246c3RhcnQnLCB0aGlzLnRyYWNrQWN0aW9uLCB0aGlzKTtcbiAgdGhpcy5hcHAub24oJ3JlbG9hZCcsIHRoaXMucmVuZGVyVmlldywgdGhpcyk7XG5cbiAgdGhpcy5hcHBWaWV3ID0gbmV3IEFwcFZpZXcoe1xuICAgIGFwcDogdGhpcy5hcHBcbiAgfSk7XG5cbiAgdGhpcy5hcHBWaWV3LnJlbmRlcigpO1xuICB0aGlzLmJ1aWxkUm91dGVzKCk7XG4gIHRoaXMuaW5pdGlhbGl6ZShvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBTZXQgdXAgaW5oZXJpdGFuY2UuXG4gKi9cbkNsaWVudFJvdXRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2VSb3V0ZXIucHJvdG90eXBlKTtcbkNsaWVudFJvdXRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDbGllbnRSb3V0ZXI7XG5cbkNsaWVudFJvdXRlci5wcm90b3R5cGUuY3VycmVudEZyYWdtZW50ID0gbnVsbDtcblxuQ2xpZW50Um91dGVyLnByb3RvdHlwZS5wcmV2aW91c0ZyYWdtZW50ID0gbnVsbDtcblxuLyoqXG4gKiBJbiBhIGNvbnRyb2xsZXIgYWN0aW9uLCBjYW4gYWNjZXNzIHRoZSBjdXJyZW50IHJvdXRlXG4gKiBkZWZpbml0aW9uIHdpdGggYHRoaXMuY3VycmVudFJvdXRlYC5cbiAqL1xuQ2xpZW50Um91dGVyLnByb3RvdHlwZS5jdXJyZW50Um91dGUgPSBudWxsO1xuXG4vKipcbiAqIEluc3RhbmNlIG9mIEJhY2tib25lLlJvdXRlciB1c2VkIHRvIG1hbmFnZSBicm93c2VyIGhpc3RvcnkuXG4gKi9cbkNsaWVudFJvdXRlci5wcm90b3R5cGUuX3JvdXRlciA9IG51bGw7XG5cbi8qKlxuICogV2UgbmVlZCB0byByZXZlcnNlIHRoZSByb3V0ZXMgaW4gdGhlIGNsaWVudCBiZWNhdXNlXG4gKiBCYWNrYm9uZS5IaXN0b3J5IG1hdGNoZXMgaW4gcmV2ZXJzZS5cbiAqL1xuQ2xpZW50Um91dGVyLnByb3RvdHlwZS5yZXZlcnNlUm91dGVzID0gdHJ1ZTtcblxuQ2xpZW50Um91dGVyLnByb3RvdHlwZS5pbml0aWFsaXplID0gXy5ub29wO1xuXG4vKipcbiAqIFBpZ2d5YmFjayBvbiBhZGRpbmcgbmV3IHJvdXRlIGRlZmluaXRpb24gZXZlbnRzXG4gKiB0byBhbHNvIGFkZCB0byBCYWNrYm9uZS5Sb3V0ZXIuXG4gKi9cbkNsaWVudFJvdXRlci5wcm90b3R5cGUuYWRkQmFja2JvbmVSb3V0ZSA9IGZ1bmN0aW9uKHJvdXRlT2JqKSB7XG4gIHZhciBoYW5kbGVyLCBuYW1lLCBwYXR0ZXJuLCByb3V0ZTtcblxuICAvLyBCYWNrYm9uZS5IaXN0b3J5IHdhbnRzIG5vIGxlYWRpbmcgc2xhc2ggb24gc3RyaW5ncy5cbiAgcGF0dGVybiA9IChyb3V0ZU9ialswXSBpbnN0YW5jZW9mIFJlZ0V4cCkgPyByb3V0ZU9ialswXSA6IHJvdXRlT2JqWzBdLnNsaWNlKDEpO1xuICByb3V0ZSA9IHJvdXRlT2JqWzFdO1xuICBoYW5kbGVyID0gcm91dGVPYmpbMl07XG4gIG5hbWUgPSByb3V0ZS5jb250cm9sbGVyICsgXCI6XCIgKyByb3V0ZS5hY3Rpb247XG5cbiAgdGhpcy5fcm91dGVyLnJvdXRlKHBhdHRlcm4sIG5hbWUsIGhhbmRsZXIpO1xufTtcblxuQ2xpZW50Um91dGVyLnByb3RvdHlwZS5nZXRIYW5kbGVyID0gZnVuY3Rpb24oYWN0aW9uLCBwYXR0ZXJuLCByb3V0ZSkge1xuICB2YXIgcm91dGVyID0gdGhpcztcblxuICAvLyBhYnN0cmFjdCBhY3Rpb24gY2FsbFxuICBmdW5jdGlvbiBhY3Rpb25DYWxsKGFjdGlvbiwgcGFyYW1zKSB7XG4gICAgYWN0aW9uLmNhbGwocm91dGVyLCBwYXJhbXMsIHJvdXRlci5nZXRSZW5kZXJDYWxsYmFjayhyb3V0ZSkpO1xuICB9XG5cbiAgLy8gVGhpcyByZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGJ5IEJhY2tib25lLmhpc3RvcnkuXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcGFyYW1zLCBwYXJhbXNBcnJheSwgcmVkaXJlY3Q7XG5cbiAgICByb3V0ZXIudHJpZ2dlcignYWN0aW9uOnN0YXJ0Jywgcm91dGUsIGZpcnN0UmVuZGVyKTtcbiAgICByb3V0ZXIuY3VycmVudFJvdXRlID0gcm91dGU7XG5cbiAgICBpZiAoZmlyc3RSZW5kZXIpIHtcbiAgICAgIGZpcnN0UmVuZGVyID0gZmFsc2U7XG4gICAgICBCYXNlVmlldy5hdHRhY2gocm91dGVyLmFwcCwgbnVsbCwgZnVuY3Rpb24odmlld3MpIHtcbiAgICAgICAgcm91dGVyLmN1cnJlbnRWaWV3ID0gcm91dGVyLmdldE1haW5WaWV3KHZpZXdzKTtcbiAgICAgICAgcm91dGVyLnRyaWdnZXIoJ2FjdGlvbjplbmQnLCByb3V0ZSwgdHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1zQXJyYXkgPSBfLnRvQXJyYXkoYXJndW1lbnRzKTtcbiAgICAgIHBhcmFtcyA9IHJvdXRlci5nZXRQYXJhbXNIYXNoKHBhdHRlcm4sIHBhcmFtc0FycmF5LCB3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcblxuICAgICAgcmVkaXJlY3QgPSByb3V0ZXIuZ2V0UmVkaXJlY3Qocm91dGUsIHBhcmFtcyk7XG4gICAgICAvKipcbiAgICAgICAqIElmIGByZWRpcmVjdGAgaXMgcHJlc2VudCwgdGhlbiBkbyBhIHJlZGlyZWN0IGFuZCByZXR1cm4uXG4gICAgICAgKi9cbiAgICAgIGlmIChyZWRpcmVjdCAhPSBudWxsKSB7XG4gICAgICAgIHJvdXRlci5yZWRpcmVjdFRvKHJlZGlyZWN0LCB7cmVwbGFjZTogdHJ1ZX0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGFjdGlvbiBcXFwiXCIgKyByb3V0ZS5hY3Rpb24gKyBcIlxcXCIgZm9yIGNvbnRyb2xsZXIgXFxcIlwiICsgcm91dGUuY29udHJvbGxlciArIFwiXFxcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhY3Rpb25DYWxsKGFjdGlvbiwgcGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbi8qKlxuICogQ2FuIGJlIG92ZXJyaWRkZW4gYnkgYXBwbGljYXRpb25zXG4gKiBpZiB0aGUgaW5pdGlhbCByZW5kZXIgaXMgbW9yZSBjb21wbGljYXRlZC5cbiAqL1xuQ2xpZW50Um91dGVyLnByb3RvdHlwZS5nZXRNYWluVmlldyA9IGZ1bmN0aW9uKHZpZXdzKSB7XG4gIHZhciAkY29udGVudCA9IHRoaXMuYXBwVmlldy4kY29udGVudDtcbiAgcmV0dXJuIF8uZmluZCh2aWV3cywgZnVuY3Rpb24odmlldykge1xuICAgIHJldHVybiB2aWV3LiRlbC5wYXJlbnQoKS5pcygkY29udGVudCk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBQcm94eSB0byBCYWNrYm9uZS5Sb3V0ZXIuXG4gKi9cbkNsaWVudFJvdXRlci5wcm90b3R5cGUubmF2aWdhdGUgPSBmdW5jdGlvbihwYXRoLCBvcHRpb25zKSB7XG4gIHZhciBmcmFnbWVudCA9IEJhY2tib25lLmhpc3RvcnkuZ2V0RnJhZ21lbnQocGF0aCk7XG5cbiAgLy8gY2hlY2sgaWYgbG9jYWwgcm91dGVyIGNhbiBoYW5kbGUgcm91dGVcbiAgaWYgKHRoaXMubWF0Y2hlc0FueVJvdXRlKGZyYWdtZW50KSkge1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZS5hcHBseSh0aGlzLl9yb3V0ZXIsIGFyZ3VtZW50cyk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5yZWRpcmVjdFRvKGZyYWdtZW50LCB7cHVzaFN0YXRlOiBmYWxzZX0pO1xuICB9XG59O1xuXG5DbGllbnRSb3V0ZXIucHJvdG90eXBlLmdldFBhcmFtc0hhc2ggPSBmdW5jdGlvbihwYXR0ZXJuLCBwYXJhbXNBcnJheSwgc2VhcmNoKSB7XG4gIHZhciBwYXJhbU5hbWVzLCBwYXJhbXMsIHF1ZXJ5O1xuXG4gIGlmIChwYXR0ZXJuIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgcGFyYW1OYW1lcyA9IHBhcmFtc0FycmF5Lm1hcChmdW5jdGlvbih2YWwsIGkpIHsgcmV0dXJuIFN0cmluZyhpKTsgfSk7XG4gIH0gZWxzZSB7XG4gICAgcGFyYW1OYW1lcyA9IChwYXR0ZXJuLm1hdGNoKGV4dHJhY3RQYXJhbU5hbWVzUmUpIHx8IFtdKS5tYXAoZnVuY3Rpb24obmFtZSkge1xuICAgICAgcmV0dXJuIG5hbWUuc2xpY2UoMSk7XG4gICAgfSk7XG4gIH1cblxuICBwYXJhbXMgPSAocGFyYW1OYW1lcyB8fCBbXSkucmVkdWNlKGZ1bmN0aW9uKG1lbW8sIG5hbWUsIGkpIHtcbiAgICBtZW1vW25hbWVdID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtc0FycmF5W2ldKTtcbiAgICByZXR1cm4gbWVtbztcbiAgfSwge30pO1xuXG4gIHF1ZXJ5ID0gc2VhcmNoLnNsaWNlKDEpLnNwbGl0KCcmJykucmVkdWNlKGZ1bmN0aW9uKG1lbW8sIHF1ZXJ5UGFydCkge1xuICAgIHZhciBwYXJ0cyA9IHF1ZXJ5UGFydC5zcGxpdCgnPScpO1xuICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICBtZW1vW3BhcnRzWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYXJ0c1sxXS5yZXBsYWNlKHBsdXNSZSwgJyAnKSk7XG4gICAgfVxuICAgIHJldHVybiBtZW1vO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIF8uZXh0ZW5kKHF1ZXJ5LCBwYXJhbXMpO1xufTtcblxuQ2xpZW50Um91dGVyLnByb3RvdHlwZS5tYXRjaGluZ1JvdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gXy5maW5kKEJhY2tib25lLmhpc3RvcnkuaGFuZGxlcnMsIGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICByZXR1cm4gaGFuZGxlci5yb3V0ZS50ZXN0KHBhdGgpO1xuICB9KTtcbn07XG5cbkNsaWVudFJvdXRlci5wcm90b3R5cGUubWF0Y2hlc0FueVJvdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gdGhpcy5tYXRjaGluZ1JvdXRlKHBhdGgpICE9IG51bGw7XG59O1xuXG5DbGllbnRSb3V0ZXIucHJvdG90eXBlLnJlZGlyZWN0VG8gPSBmdW5jdGlvbihwYXRoLCBvcHRpb25zKSB7XG4gIHZhciBoYXNoUGFydHM7XG5cbiAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBfLmRlZmF1bHRzKG9wdGlvbnMsIHtcbiAgICB0cmlnZ2VyOiB0cnVlLFxuICAgIHB1c2hTdGF0ZTogdHJ1ZSxcbiAgICByZXBsYWNlOiBmYWxzZVxuICB9KTtcblxuICBpZiAob3B0aW9ucy5wdXNoU3RhdGUgPT09IGZhbHNlKSB7XG4gICAgLy8gRG8gYSBmdWxsLXBhZ2UgcmVkaXJlY3QuXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRoO1xuICB9IGVsc2Uge1xuICAgIC8vIERvIGEgcHVzaFN0YXRlIG5hdmlnYXRpb24uXG4gICAgaGFzaFBhcnRzID0gcGF0aC5zcGxpdCgnIycpO1xuICAgIHBhdGggPSBoYXNoUGFydHNbMF07XG5cbiAgICAvLyBCdXQgdGhlbiB0cmlnZ2VyIHRoZSBoYXNoIGFmdGVyd2FyZHMuXG4gICAgaWYgKGhhc2hQYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICB0aGlzLm9uY2UoJ2FjdGlvbjplbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoUGFydHNbMV07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBJZ25vcmUgaGFzaCBmb3Igcm91dGluZy5cbiAgICB0aGlzLm5hdmlnYXRlKHBhdGgsIG9wdGlvbnMpO1xuICB9XG59O1xuXG5DbGllbnRSb3V0ZXIucHJvdG90eXBlLmhhbmRsZUVyciA9IGZ1bmN0aW9uKGVyciwgcm91dGUpIHtcbiAgdGhpcy50cmlnZ2VyKCdhY3Rpb246ZXJyb3InLCBlcnIsIHJvdXRlKTtcbn1cblxuQ2xpZW50Um91dGVyLnByb3RvdHlwZS5nZXRSZW5kZXJDYWxsYmFjayA9IGZ1bmN0aW9uKHJvdXRlKSB7XG4gIHJldHVybiBmdW5jdGlvbihlcnIsIHZpZXdQYXRoLCBsb2NhbHMpIHtcbiAgICBpZiAoZXJyKSByZXR1cm4gdGhpcy5oYW5kbGVFcnIoZXJyLCByb3V0ZSk7XG5cbiAgICB2YXIgVmlldywgX3JvdXRlciA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5jdXJyZW50Vmlldykge1xuICAgICAgdGhpcy5jdXJyZW50Vmlldy5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICB2YXIgZGVmYXVsdHMgPSB0aGlzLmRlZmF1bHRIYW5kbGVyUGFyYW1zKHZpZXdQYXRoLCBsb2NhbHMsIHJvdXRlKTtcbiAgICB2aWV3UGF0aCA9IGRlZmF1bHRzWzBdO1xuICAgIGxvY2FscyA9IGRlZmF1bHRzWzFdO1xuXG4gICAgbG9jYWxzID0gbG9jYWxzIHx8IHt9O1xuICAgIF8uZXh0ZW5kKGxvY2FscywgeyBmZXRjaF9zdW1tYXJ5OiBCYXNlVmlldy5leHRyYWN0RmV0Y2hTdW1tYXJ5KHRoaXMuYXBwLm1vZGVsVXRpbHMsIGxvY2FscykgfSk7XG5cbiAgICAvLyBJbmplY3QgdGhlIGFwcC5cbiAgICBsb2NhbHMuYXBwID0gdGhpcy5hcHA7XG4gICAgdGhpcy5nZXRWaWV3KHZpZXdQYXRoLCB0aGlzLm9wdGlvbnMuZW50cnlQYXRoLCBmdW5jdGlvbihWaWV3KSB7XG4gICAgICBfcm91dGVyLmN1cnJlbnRWaWV3ID0gbmV3IFZpZXcobG9jYWxzKTtcbiAgICAgIF9yb3V0ZXIucmVuZGVyVmlldygpO1xuXG4gICAgICBfcm91dGVyLnRyaWdnZXIoJ2FjdGlvbjplbmQnLCByb3V0ZSwgZmlyc3RSZW5kZXIpO1xuICAgIH0pO1xuICB9LmJpbmQodGhpcyk7XG59O1xuXG5DbGllbnRSb3V0ZXIucHJvdG90eXBlLnJlbmRlclZpZXcgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5hcHBWaWV3LnNldEN1cnJlbnRWaWV3KHRoaXMuY3VycmVudFZpZXcpO1xufTtcblxuQ2xpZW50Um91dGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICBCYWNrYm9uZS5oaXN0b3J5LnN0YXJ0KHtcbiAgICBwdXNoU3RhdGU6IHRydWUsXG4gICAgaGFzaENoYW5nZTogZmFsc2UsXG4gICAgcm9vdDogdGhpcy5vcHRpb25zLnJvb3RQYXRoIHx8IGRlZmF1bHRSb290UGF0aFxuICB9KTtcbn07XG5cbkNsaWVudFJvdXRlci5wcm90b3R5cGUudHJhY2tBY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wcmV2aW91c0ZyYWdtZW50ID0gdGhpcy5jdXJyZW50RnJhZ21lbnQ7XG4gIHRoaXMuY3VycmVudEZyYWdtZW50ID0gQmFja2JvbmUuaGlzdG9yeS5nZXRGcmFnbWVudCgpO1xufTtcblxuQ2xpZW50Um91dGVyLnByb3RvdHlwZS5nZXRWaWV3ID0gZnVuY3Rpb24oa2V5LCBlbnRyeVBhdGgsIGNhbGxiYWNrKSB7XG4gIHZhciBWaWV3ID0gQmFzZVZpZXcuZ2V0VmlldyhrZXksIGVudHJ5UGF0aCwgZnVuY3Rpb24oVmlldykge1xuICAgIC8vIFRPRE86IE1ha2UgaXQgZnVuY3Rpb24gKGVyciwgVmlldylcbiAgICBpZiAoIV8uaXNGdW5jdGlvbihWaWV3KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVmlldyAnXCIgKyBrZXkgKyBcIicgbm90IGZvdW5kLlwiKTtcbiAgICB9XG5cbiAgICBjYWxsYmFjayhWaWV3KTtcbiAgfSk7XG59O1xuIiwiKGZ1bmN0aW9uIChwcm9jZXNzKXtcbi8qIVxuICogYXN5bmNcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jYW9sYW4vYXN5bmNcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMC0yMDE0IENhb2xhbiBNY01haG9uXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuLypqc2hpbnQgb25ldmFyOiBmYWxzZSwgaW5kZW50OjQgKi9cbi8qZ2xvYmFsIHNldEltbWVkaWF0ZTogZmFsc2UsIHNldFRpbWVvdXQ6IGZhbHNlLCBjb25zb2xlOiBmYWxzZSAqL1xuKGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBhc3luYyA9IHt9O1xuXG4gICAgLy8gZ2xvYmFsIG9uIHRoZSBzZXJ2ZXIsIHdpbmRvdyBpbiB0aGUgYnJvd3NlclxuICAgIHZhciByb290LCBwcmV2aW91c19hc3luYztcblxuICAgIHJvb3QgPSB0aGlzO1xuICAgIGlmIChyb290ICE9IG51bGwpIHtcbiAgICAgIHByZXZpb3VzX2FzeW5jID0gcm9vdC5hc3luYztcbiAgICB9XG5cbiAgICBhc3luYy5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByb290LmFzeW5jID0gcHJldmlvdXNfYXN5bmM7XG4gICAgICAgIHJldHVybiBhc3luYztcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gb25seV9vbmNlKGZuKSB7XG4gICAgICAgIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGNhbGxlZCkgdGhyb3cgbmV3IEVycm9yKFwiQ2FsbGJhY2sgd2FzIGFscmVhZHkgY2FsbGVkLlwiKTtcbiAgICAgICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICBmbi5hcHBseShyb290LCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8vLyBjcm9zcy1icm93c2VyIGNvbXBhdGlibGl0eSBmdW5jdGlvbnMgLy8vL1xuXG4gICAgdmFyIF90b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbiAgICB2YXIgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIF90b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfTtcblxuICAgIHZhciBfZWFjaCA9IGZ1bmN0aW9uIChhcnIsIGl0ZXJhdG9yKSB7XG4gICAgICAgIGlmIChhcnIuZm9yRWFjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGFyci5mb3JFYWNoKGl0ZXJhdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaXRlcmF0b3IoYXJyW2ldLCBpLCBhcnIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBfbWFwID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IpIHtcbiAgICAgICAgaWYgKGFyci5tYXApIHtcbiAgICAgICAgICAgIHJldHVybiBhcnIubWFwKGl0ZXJhdG9yKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICBfZWFjaChhcnIsIGZ1bmN0aW9uICh4LCBpLCBhKSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2goaXRlcmF0b3IoeCwgaSwgYSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfTtcblxuICAgIHZhciBfcmVkdWNlID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIG1lbW8pIHtcbiAgICAgICAgaWYgKGFyci5yZWR1Y2UpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnIucmVkdWNlKGl0ZXJhdG9yLCBtZW1vKTtcbiAgICAgICAgfVxuICAgICAgICBfZWFjaChhcnIsIGZ1bmN0aW9uICh4LCBpLCBhKSB7XG4gICAgICAgICAgICBtZW1vID0gaXRlcmF0b3IobWVtbywgeCwgaSwgYSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWVtbztcbiAgICB9O1xuXG4gICAgdmFyIF9rZXlzID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICB9XG4gICAgICAgIHZhciBrZXlzID0gW107XG4gICAgICAgIGZvciAodmFyIGsgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGspO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH07XG5cbiAgICAvLy8vIGV4cG9ydGVkIGFzeW5jIG1vZHVsZSBmdW5jdGlvbnMgLy8vL1xuXG4gICAgLy8vLyBuZXh0VGljayBpbXBsZW1lbnRhdGlvbiB3aXRoIGJyb3dzZXItY29tcGF0aWJsZSBmYWxsYmFjayAvLy8vXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyB8fCAhKHByb2Nlc3MubmV4dFRpY2spKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhc3luYy5uZXh0VGljayA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICAgIC8vIG5vdCBhIGRpcmVjdCBhbGlhcyBmb3IgSUUxMCBjb21wYXRpYmlsaXR5XG4gICAgICAgICAgICAgICAgc2V0SW1tZWRpYXRlKGZuKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhc3luYy5zZXRJbW1lZGlhdGUgPSBhc3luYy5uZXh0VGljaztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFzeW5jLm5leHRUaWNrID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYXN5bmMuc2V0SW1tZWRpYXRlID0gYXN5bmMubmV4dFRpY2s7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFzeW5jLm5leHRUaWNrID0gcHJvY2Vzcy5uZXh0VGljaztcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBhc3luYy5zZXRJbW1lZGlhdGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgLy8gbm90IGEgZGlyZWN0IGFsaWFzIGZvciBJRTEwIGNvbXBhdGliaWxpdHlcbiAgICAgICAgICAgICAgc2V0SW1tZWRpYXRlKGZuKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhc3luYy5zZXRJbW1lZGlhdGUgPSBhc3luYy5uZXh0VGljaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jLmVhY2ggPSBmdW5jdGlvbiAoYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29tcGxldGVkID0gMDtcbiAgICAgICAgX2VhY2goYXJyLCBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgaXRlcmF0b3IoeCwgb25seV9vbmNlKGRvbmUpICk7XG4gICAgICAgIH0pO1xuICAgICAgICBmdW5jdGlvbiBkb25lKGVycikge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGNvbXBsZXRlZCArPSAxO1xuICAgICAgICAgICAgICBpZiAoY29tcGxldGVkID49IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGFzeW5jLmZvckVhY2ggPSBhc3luYy5lYWNoO1xuXG4gICAgYXN5bmMuZWFjaFNlcmllcyA9IGZ1bmN0aW9uIChhcnIsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb21wbGV0ZWQgPSAwO1xuICAgICAgICB2YXIgaXRlcmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKGFycltjb21wbGV0ZWRdLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZWQgPj0gYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBpdGVyYXRlKCk7XG4gICAgfTtcbiAgICBhc3luYy5mb3JFYWNoU2VyaWVzID0gYXN5bmMuZWFjaFNlcmllcztcblxuICAgIGFzeW5jLmVhY2hMaW1pdCA9IGZ1bmN0aW9uIChhcnIsIGxpbWl0LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGZuID0gX2VhY2hMaW1pdChsaW1pdCk7XG4gICAgICAgIGZuLmFwcGx5KG51bGwsIFthcnIsIGl0ZXJhdG9yLCBjYWxsYmFja10pO1xuICAgIH07XG4gICAgYXN5bmMuZm9yRWFjaExpbWl0ID0gYXN5bmMuZWFjaExpbWl0O1xuXG4gICAgdmFyIF9lYWNoTGltaXQgPSBmdW5jdGlvbiAobGltaXQpIHtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgaWYgKCFhcnIubGVuZ3RoIHx8IGxpbWl0IDw9IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjb21wbGV0ZWQgPSAwO1xuICAgICAgICAgICAgdmFyIHN0YXJ0ZWQgPSAwO1xuICAgICAgICAgICAgdmFyIHJ1bm5pbmcgPSAwO1xuXG4gICAgICAgICAgICAoZnVuY3Rpb24gcmVwbGVuaXNoICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkID49IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgd2hpbGUgKHJ1bm5pbmcgPCBsaW1pdCAmJiBzdGFydGVkIDwgYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydGVkICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmcgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0b3IoYXJyW3N0YXJ0ZWQgLSAxXSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZCArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5pbmcgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkID49IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxlbmlzaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG5cbiAgICB2YXIgZG9QYXJhbGxlbCA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIFthc3luYy5lYWNoXS5jb25jYXQoYXJncykpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgdmFyIGRvUGFyYWxsZWxMaW1pdCA9IGZ1bmN0aW9uKGxpbWl0LCBmbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIFtfZWFjaExpbWl0KGxpbWl0KV0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHZhciBkb1NlcmllcyA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIFthc3luYy5lYWNoU2VyaWVzXS5jb25jYXQoYXJncykpO1xuICAgICAgICB9O1xuICAgIH07XG5cblxuICAgIHZhciBfYXN5bmNNYXAgPSBmdW5jdGlvbiAoZWFjaGZuLCBhcnIsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICBhcnIgPSBfbWFwKGFyciwgZnVuY3Rpb24gKHgsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiB7aW5kZXg6IGksIHZhbHVlOiB4fTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGVhY2hmbihhcnIsIGZ1bmN0aW9uICh4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yKHgudmFsdWUsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgICAgIGVhY2hmbihhcnIsIGZ1bmN0aW9uICh4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yKHgudmFsdWUsIGZ1bmN0aW9uIChlcnIsIHYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0c1t4LmluZGV4XSA9IHY7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyLCByZXN1bHRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBhc3luYy5tYXAgPSBkb1BhcmFsbGVsKF9hc3luY01hcCk7XG4gICAgYXN5bmMubWFwU2VyaWVzID0gZG9TZXJpZXMoX2FzeW5jTWFwKTtcbiAgICBhc3luYy5tYXBMaW1pdCA9IGZ1bmN0aW9uIChhcnIsIGxpbWl0LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIF9tYXBMaW1pdChsaW1pdCkoYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICB2YXIgX21hcExpbWl0ID0gZnVuY3Rpb24obGltaXQpIHtcbiAgICAgICAgcmV0dXJuIGRvUGFyYWxsZWxMaW1pdChsaW1pdCwgX2FzeW5jTWFwKTtcbiAgICB9O1xuXG4gICAgLy8gcmVkdWNlIG9ubHkgaGFzIGEgc2VyaWVzIHZlcnNpb24sIGFzIGRvaW5nIHJlZHVjZSBpbiBwYXJhbGxlbCB3b24ndFxuICAgIC8vIHdvcmsgaW4gbWFueSBzaXR1YXRpb25zLlxuICAgIGFzeW5jLnJlZHVjZSA9IGZ1bmN0aW9uIChhcnIsIG1lbW8sIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICBhc3luYy5lYWNoU2VyaWVzKGFyciwgZnVuY3Rpb24gKHgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVyYXRvcihtZW1vLCB4LCBmdW5jdGlvbiAoZXJyLCB2KSB7XG4gICAgICAgICAgICAgICAgbWVtbyA9IHY7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIsIG1lbW8pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIGluamVjdCBhbGlhc1xuICAgIGFzeW5jLmluamVjdCA9IGFzeW5jLnJlZHVjZTtcbiAgICAvLyBmb2xkbCBhbGlhc1xuICAgIGFzeW5jLmZvbGRsID0gYXN5bmMucmVkdWNlO1xuXG4gICAgYXN5bmMucmVkdWNlUmlnaHQgPSBmdW5jdGlvbiAoYXJyLCBtZW1vLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHJldmVyc2VkID0gX21hcChhcnIsIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgfSkucmV2ZXJzZSgpO1xuICAgICAgICBhc3luYy5yZWR1Y2UocmV2ZXJzZWQsIG1lbW8sIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgfTtcbiAgICAvLyBmb2xkciBhbGlhc1xuICAgIGFzeW5jLmZvbGRyID0gYXN5bmMucmVkdWNlUmlnaHQ7XG5cbiAgICB2YXIgX2ZpbHRlciA9IGZ1bmN0aW9uIChlYWNoZm4sIGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICAgIGFyciA9IF9tYXAoYXJyLCBmdW5jdGlvbiAoeCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIHtpbmRleDogaSwgdmFsdWU6IHh9O1xuICAgICAgICB9KTtcbiAgICAgICAgZWFjaGZuKGFyciwgZnVuY3Rpb24gKHgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVyYXRvcih4LnZhbHVlLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhfbWFwKHJlc3VsdHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcbiAgICAgICAgICAgIH0pLCBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB4LnZhbHVlO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGFzeW5jLmZpbHRlciA9IGRvUGFyYWxsZWwoX2ZpbHRlcik7XG4gICAgYXN5bmMuZmlsdGVyU2VyaWVzID0gZG9TZXJpZXMoX2ZpbHRlcik7XG4gICAgLy8gc2VsZWN0IGFsaWFzXG4gICAgYXN5bmMuc2VsZWN0ID0gYXN5bmMuZmlsdGVyO1xuICAgIGFzeW5jLnNlbGVjdFNlcmllcyA9IGFzeW5jLmZpbHRlclNlcmllcztcblxuICAgIHZhciBfcmVqZWN0ID0gZnVuY3Rpb24gKGVhY2hmbiwgYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgYXJyID0gX21hcChhcnIsIGZ1bmN0aW9uICh4LCBpKSB7XG4gICAgICAgICAgICByZXR1cm4ge2luZGV4OiBpLCB2YWx1ZTogeH07XG4gICAgICAgIH0pO1xuICAgICAgICBlYWNoZm4oYXJyLCBmdW5jdGlvbiAoeCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKHgudmFsdWUsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhfbWFwKHJlc3VsdHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcbiAgICAgICAgICAgIH0pLCBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB4LnZhbHVlO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGFzeW5jLnJlamVjdCA9IGRvUGFyYWxsZWwoX3JlamVjdCk7XG4gICAgYXN5bmMucmVqZWN0U2VyaWVzID0gZG9TZXJpZXMoX3JlamVjdCk7XG5cbiAgICB2YXIgX2RldGVjdCA9IGZ1bmN0aW9uIChlYWNoZm4sIGFyciwgaXRlcmF0b3IsIG1haW5fY2FsbGJhY2spIHtcbiAgICAgICAgZWFjaGZuKGFyciwgZnVuY3Rpb24gKHgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVyYXRvcih4LCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBtYWluX2NhbGxiYWNrKHgpO1xuICAgICAgICAgICAgICAgICAgICBtYWluX2NhbGxiYWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBtYWluX2NhbGxiYWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgYXN5bmMuZGV0ZWN0ID0gZG9QYXJhbGxlbChfZGV0ZWN0KTtcbiAgICBhc3luYy5kZXRlY3RTZXJpZXMgPSBkb1NlcmllcyhfZGV0ZWN0KTtcblxuICAgIGFzeW5jLnNvbWUgPSBmdW5jdGlvbiAoYXJyLCBpdGVyYXRvciwgbWFpbl9jYWxsYmFjaykge1xuICAgICAgICBhc3luYy5lYWNoKGFyciwgZnVuY3Rpb24gKHgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVyYXRvcih4LCBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgICAgICAgICAgIG1haW5fY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIG1haW5fY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBtYWluX2NhbGxiYWNrKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBhbnkgYWxpYXNcbiAgICBhc3luYy5hbnkgPSBhc3luYy5zb21lO1xuXG4gICAgYXN5bmMuZXZlcnkgPSBmdW5jdGlvbiAoYXJyLCBpdGVyYXRvciwgbWFpbl9jYWxsYmFjaykge1xuICAgICAgICBhc3luYy5lYWNoKGFyciwgZnVuY3Rpb24gKHgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVyYXRvcih4LCBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIGlmICghdikge1xuICAgICAgICAgICAgICAgICAgICBtYWluX2NhbGxiYWNrKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgbWFpbl9jYWxsYmFjayA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIG1haW5fY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gYWxsIGFsaWFzXG4gICAgYXN5bmMuYWxsID0gYXN5bmMuZXZlcnk7XG5cbiAgICBhc3luYy5zb3J0QnkgPSBmdW5jdGlvbiAoYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgYXN5bmMubWFwKGFyciwgZnVuY3Rpb24gKHgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVyYXRvcih4LCBmdW5jdGlvbiAoZXJyLCBjcml0ZXJpYSkge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHt2YWx1ZTogeCwgY3JpdGVyaWE6IGNyaXRlcmlhfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBmbiA9IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGxlZnQuY3JpdGVyaWEsIGIgPSByaWdodC5jcml0ZXJpYTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiAwO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgX21hcChyZXN1bHRzLnNvcnQoZm4pLCBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBhc3luYy5hdXRvID0gZnVuY3Rpb24gKHRhc2tzLCBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICB2YXIga2V5cyA9IF9rZXlzKHRhc2tzKTtcbiAgICAgICAgdmFyIHJlbWFpbmluZ1Rhc2tzID0ga2V5cy5sZW5ndGhcbiAgICAgICAgaWYgKCFyZW1haW5pbmdUYXNrcykge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzdWx0cyA9IHt9O1xuXG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdmFyIGFkZExpc3RlbmVyID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMudW5zaGlmdChmbik7XG4gICAgICAgIH07XG4gICAgICAgIHZhciByZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXJzW2ldID09PSBmbikge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgdGFza0NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVtYWluaW5nVGFza3MtLVxuICAgICAgICAgICAgX2VhY2gobGlzdGVuZXJzLnNsaWNlKDApLCBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgYWRkTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFyZW1haW5pbmdUYXNrcykge1xuICAgICAgICAgICAgICAgIHZhciB0aGVDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIC8vIHByZXZlbnQgZmluYWwgY2FsbGJhY2sgZnJvbSBjYWxsaW5nIGl0c2VsZiBpZiBpdCBlcnJvcnNcbiAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgICAgICAgICAgICAgdGhlQ2FsbGJhY2sobnVsbCwgcmVzdWx0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF9lYWNoKGtleXMsIGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IF9pc0FycmF5KHRhc2tzW2tdKSA/IHRhc2tzW2tdOiBbdGFza3Nba11dO1xuICAgICAgICAgICAgdmFyIHRhc2tDYWxsYmFjayA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJncyA9IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNhZmVSZXN1bHRzID0ge307XG4gICAgICAgICAgICAgICAgICAgIF9lYWNoKF9rZXlzKHJlc3VsdHMpLCBmdW5jdGlvbihya2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYWZlUmVzdWx0c1tya2V5XSA9IHJlc3VsdHNbcmtleV07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzYWZlUmVzdWx0c1trXSA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgc2FmZVJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBzdG9wIHN1YnNlcXVlbnQgZXJyb3JzIGhpdHRpbmcgY2FsbGJhY2sgbXVsdGlwbGUgdGltZXNcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHNba10gPSBhcmdzO1xuICAgICAgICAgICAgICAgICAgICBhc3luYy5zZXRJbW1lZGlhdGUodGFza0NvbXBsZXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHJlcXVpcmVzID0gdGFzay5zbGljZSgwLCBNYXRoLmFicyh0YXNrLmxlbmd0aCAtIDEpKSB8fCBbXTtcbiAgICAgICAgICAgIHZhciByZWFkeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlZHVjZShyZXF1aXJlcywgZnVuY3Rpb24gKGEsIHgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChhICYmIHJlc3VsdHMuaGFzT3duUHJvcGVydHkoeCkpO1xuICAgICAgICAgICAgICAgIH0sIHRydWUpICYmICFyZXN1bHRzLmhhc093blByb3BlcnR5KGspO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChyZWFkeSgpKSB7XG4gICAgICAgICAgICAgICAgdGFza1t0YXNrLmxlbmd0aCAtIDFdKHRhc2tDYWxsYmFjaywgcmVzdWx0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWFkeSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrW3Rhc2subGVuZ3RoIC0gMV0odGFza0NhbGxiYWNrLCByZXN1bHRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYWRkTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgYXN5bmMucmV0cnkgPSBmdW5jdGlvbih0aW1lcywgdGFzaywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIERFRkFVTFRfVElNRVMgPSA1O1xuICAgICAgICB2YXIgYXR0ZW1wdHMgPSBbXTtcbiAgICAgICAgLy8gVXNlIGRlZmF1bHRzIGlmIHRpbWVzIG5vdCBwYXNzZWRcbiAgICAgICAgaWYgKHR5cGVvZiB0aW1lcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSB0YXNrO1xuICAgICAgICAgICAgdGFzayA9IHRpbWVzO1xuICAgICAgICAgICAgdGltZXMgPSBERUZBVUxUX1RJTUVTO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aW1lcyBpcyBhIG51bWJlclxuICAgICAgICB0aW1lcyA9IHBhcnNlSW50KHRpbWVzLCAxMCkgfHwgREVGQVVMVF9USU1FUztcbiAgICAgICAgdmFyIHdyYXBwZWRUYXNrID0gZnVuY3Rpb24od3JhcHBlZENhbGxiYWNrLCB3cmFwcGVkUmVzdWx0cykge1xuICAgICAgICAgICAgdmFyIHJldHJ5QXR0ZW1wdCA9IGZ1bmN0aW9uKHRhc2ssIGZpbmFsQXR0ZW1wdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihzZXJpZXNDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICB0YXNrKGZ1bmN0aW9uKGVyciwgcmVzdWx0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllc0NhbGxiYWNrKCFlcnIgfHwgZmluYWxBdHRlbXB0LCB7ZXJyOiBlcnIsIHJlc3VsdDogcmVzdWx0fSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHdyYXBwZWRSZXN1bHRzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHdoaWxlICh0aW1lcykge1xuICAgICAgICAgICAgICAgIGF0dGVtcHRzLnB1c2gocmV0cnlBdHRlbXB0KHRhc2ssICEodGltZXMtPTEpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhc3luYy5zZXJpZXMoYXR0ZW1wdHMsIGZ1bmN0aW9uKGRvbmUsIGRhdGEpe1xuICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhW2RhdGEubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgKHdyYXBwZWRDYWxsYmFjayB8fCBjYWxsYmFjaykoZGF0YS5lcnIsIGRhdGEucmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGEgY2FsbGJhY2sgaXMgcGFzc2VkLCBydW4gdGhpcyBhcyBhIGNvbnRyb2xsIGZsb3dcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrID8gd3JhcHBlZFRhc2soKSA6IHdyYXBwZWRUYXNrXG4gICAgfTtcblxuICAgIGFzeW5jLndhdGVyZmFsbCA9IGZ1bmN0aW9uICh0YXNrcywgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgaWYgKCFfaXNBcnJheSh0YXNrcykpIHtcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCB0byB3YXRlcmZhbGwgbXVzdCBiZSBhbiBhcnJheSBvZiBmdW5jdGlvbnMnKTtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRhc2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdyYXBJdGVyYXRvciA9IGZ1bmN0aW9uIChpdGVyYXRvcikge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKHdyYXBJdGVyYXRvcihuZXh0KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jLnNldEltbWVkaWF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRvci5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgd3JhcEl0ZXJhdG9yKGFzeW5jLml0ZXJhdG9yKHRhc2tzKSkoKTtcbiAgICB9O1xuXG4gICAgdmFyIF9wYXJhbGxlbCA9IGZ1bmN0aW9uKGVhY2hmbiwgdGFza3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG4gICAgICAgIGlmIChfaXNBcnJheSh0YXNrcykpIHtcbiAgICAgICAgICAgIGVhY2hmbi5tYXAodGFza3MsIGZ1bmN0aW9uIChmbiwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgICAgICAgICAgZm4oZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzID0gYXJnc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwobnVsbCwgZXJyLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSB7fTtcbiAgICAgICAgICAgIGVhY2hmbi5lYWNoKF9rZXlzKHRhc2tzKSwgZnVuY3Rpb24gKGssIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGFza3Nba10oZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzID0gYXJnc1swXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzW2tdID0gYXJncztcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3VsdHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmMucGFyYWxsZWwgPSBmdW5jdGlvbiAodGFza3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIF9wYXJhbGxlbCh7IG1hcDogYXN5bmMubWFwLCBlYWNoOiBhc3luYy5lYWNoIH0sIHRhc2tzLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGFzeW5jLnBhcmFsbGVsTGltaXQgPSBmdW5jdGlvbih0YXNrcywgbGltaXQsIGNhbGxiYWNrKSB7XG4gICAgICAgIF9wYXJhbGxlbCh7IG1hcDogX21hcExpbWl0KGxpbWl0KSwgZWFjaDogX2VhY2hMaW1pdChsaW1pdCkgfSwgdGFza3MsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgYXN5bmMuc2VyaWVzID0gZnVuY3Rpb24gKHRhc2tzLCBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICBpZiAoX2lzQXJyYXkodGFza3MpKSB7XG4gICAgICAgICAgICBhc3luYy5tYXBTZXJpZXModGFza3MsIGZ1bmN0aW9uIChmbiwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgICAgICAgICAgZm4oZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzID0gYXJnc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwobnVsbCwgZXJyLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSB7fTtcbiAgICAgICAgICAgIGFzeW5jLmVhY2hTZXJpZXMoX2tleXModGFza3MpLCBmdW5jdGlvbiAoaywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0YXNrc1trXShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBhcmdzWzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHNba10gPSBhcmdzO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgcmVzdWx0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3luYy5pdGVyYXRvciA9IGZ1bmN0aW9uICh0YXNrcykge1xuICAgICAgICB2YXIgbWFrZUNhbGxiYWNrID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgZm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrc1tpbmRleF0uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZuLm5leHQoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmbi5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoaW5kZXggPCB0YXNrcy5sZW5ndGggLSAxKSA/IG1ha2VDYWxsYmFjayhpbmRleCArIDEpOiBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBmbjtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG1ha2VDYWxsYmFjaygwKTtcbiAgICB9O1xuXG4gICAgYXN5bmMuYXBwbHkgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KFxuICAgICAgICAgICAgICAgIG51bGwsIGFyZ3MuY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICApO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICB2YXIgX2NvbmNhdCA9IGZ1bmN0aW9uIChlYWNoZm4sIGFyciwgZm4sIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciByID0gW107XG4gICAgICAgIGVhY2hmbihhcnIsIGZ1bmN0aW9uICh4LCBjYikge1xuICAgICAgICAgICAgZm4oeCwgZnVuY3Rpb24gKGVyciwgeSkge1xuICAgICAgICAgICAgICAgIHIgPSByLmNvbmNhdCh5IHx8IFtdKTtcbiAgICAgICAgICAgICAgICBjYihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgcik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgYXN5bmMuY29uY2F0ID0gZG9QYXJhbGxlbChfY29uY2F0KTtcbiAgICBhc3luYy5jb25jYXRTZXJpZXMgPSBkb1NlcmllcyhfY29uY2F0KTtcblxuICAgIGFzeW5jLndoaWxzdCA9IGZ1bmN0aW9uICh0ZXN0LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHRlc3QoKSkge1xuICAgICAgICAgICAgaXRlcmF0b3IoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFzeW5jLndoaWxzdCh0ZXN0LCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGFzeW5jLmRvV2hpbHN0ID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCB0ZXN0LCBjYWxsYmFjaykge1xuICAgICAgICBpdGVyYXRvcihmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICBpZiAodGVzdC5hcHBseShudWxsLCBhcmdzKSkge1xuICAgICAgICAgICAgICAgIGFzeW5jLmRvV2hpbHN0KGl0ZXJhdG9yLCB0ZXN0LCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgYXN5bmMudW50aWwgPSBmdW5jdGlvbiAodGVzdCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghdGVzdCgpKSB7XG4gICAgICAgICAgICBpdGVyYXRvcihmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXN5bmMudW50aWwodGVzdCwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3luYy5kb1VudGlsID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCB0ZXN0LCBjYWxsYmFjaykge1xuICAgICAgICBpdGVyYXRvcihmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICBpZiAoIXRlc3QuYXBwbHkobnVsbCwgYXJncykpIHtcbiAgICAgICAgICAgICAgICBhc3luYy5kb1VudGlsKGl0ZXJhdG9yLCB0ZXN0LCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgYXN5bmMucXVldWUgPSBmdW5jdGlvbiAod29ya2VyLCBjb25jdXJyZW5jeSkge1xuICAgICAgICBpZiAoY29uY3VycmVuY3kgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uY3VycmVuY3kgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9pbnNlcnQocSwgZGF0YSwgcG9zLCBjYWxsYmFjaykge1xuICAgICAgICAgIGlmICghcS5zdGFydGVkKXtcbiAgICAgICAgICAgIHEuc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghX2lzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgICAgZGF0YSA9IFtkYXRhXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoZGF0YS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgIC8vIGNhbGwgZHJhaW4gaW1tZWRpYXRlbHkgaWYgdGhlcmUgYXJlIG5vIHRhc2tzXG4gICAgICAgICAgICAgcmV0dXJuIGFzeW5jLnNldEltbWVkaWF0ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgaWYgKHEuZHJhaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgIHEuZHJhaW4oKTtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfZWFjaChkYXRhLCBmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgICAgICAgIHZhciBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgZGF0YTogdGFzayxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBjYWxsYmFjayA6IG51bGxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBpZiAocG9zKSB7XG4gICAgICAgICAgICAgICAgcS50YXNrcy51bnNoaWZ0KGl0ZW0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHEudGFza3MucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChxLnNhdHVyYXRlZCAmJiBxLnRhc2tzLmxlbmd0aCA9PT0gcS5jb25jdXJyZW5jeSkge1xuICAgICAgICAgICAgICAgICAgcS5zYXR1cmF0ZWQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBhc3luYy5zZXRJbW1lZGlhdGUocS5wcm9jZXNzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB3b3JrZXJzID0gMDtcbiAgICAgICAgdmFyIHEgPSB7XG4gICAgICAgICAgICB0YXNrczogW10sXG4gICAgICAgICAgICBjb25jdXJyZW5jeTogY29uY3VycmVuY3ksXG4gICAgICAgICAgICBzYXR1cmF0ZWQ6IG51bGwsXG4gICAgICAgICAgICBlbXB0eTogbnVsbCxcbiAgICAgICAgICAgIGRyYWluOiBudWxsLFxuICAgICAgICAgICAgc3RhcnRlZDogZmFsc2UsXG4gICAgICAgICAgICBwYXVzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcHVzaDogZnVuY3Rpb24gKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIF9pbnNlcnQocSwgZGF0YSwgZmFsc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBraWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHEuZHJhaW4gPSBudWxsO1xuICAgICAgICAgICAgICBxLnRhc2tzID0gW107XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdW5zaGlmdDogZnVuY3Rpb24gKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIF9pbnNlcnQocSwgZGF0YSwgdHJ1ZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXEucGF1c2VkICYmIHdvcmtlcnMgPCBxLmNvbmN1cnJlbmN5ICYmIHEudGFza3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXNrID0gcS50YXNrcy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocS5lbXB0eSAmJiBxLnRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcS5lbXB0eSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdvcmtlcnMgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXJzIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suY2FsbGJhY2suYXBwbHkodGFzaywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxLmRyYWluICYmIHEudGFza3MubGVuZ3RoICsgd29ya2VycyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEuZHJhaW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHEucHJvY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2IgPSBvbmx5X29uY2UobmV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHdvcmtlcih0YXNrLmRhdGEsIGNiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVuZ3RoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHEudGFza3MubGVuZ3RoO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJ1bm5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VycztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpZGxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcS50YXNrcy5sZW5ndGggKyB3b3JrZXJzID09PSAwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdXNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHEucGF1c2VkID09PSB0cnVlKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIHEucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBxLnByb2Nlc3MoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN1bWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAocS5wYXVzZWQgPT09IGZhbHNlKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIHEucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcS5wcm9jZXNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBxO1xuICAgIH07XG4gICAgXG4gICAgYXN5bmMucHJpb3JpdHlRdWV1ZSA9IGZ1bmN0aW9uICh3b3JrZXIsIGNvbmN1cnJlbmN5KSB7XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBfY29tcGFyZVRhc2tzKGEsIGIpe1xuICAgICAgICAgIHJldHVybiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIF9iaW5hcnlTZWFyY2goc2VxdWVuY2UsIGl0ZW0sIGNvbXBhcmUpIHtcbiAgICAgICAgICB2YXIgYmVnID0gLTEsXG4gICAgICAgICAgICAgIGVuZCA9IHNlcXVlbmNlLmxlbmd0aCAtIDE7XG4gICAgICAgICAgd2hpbGUgKGJlZyA8IGVuZCkge1xuICAgICAgICAgICAgdmFyIG1pZCA9IGJlZyArICgoZW5kIC0gYmVnICsgMSkgPj4+IDEpO1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUoaXRlbSwgc2VxdWVuY2VbbWlkXSkgPj0gMCkge1xuICAgICAgICAgICAgICBiZWcgPSBtaWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbmQgPSBtaWQgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYmVnO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBfaW5zZXJ0KHEsIGRhdGEsIHByaW9yaXR5LCBjYWxsYmFjaykge1xuICAgICAgICAgIGlmICghcS5zdGFydGVkKXtcbiAgICAgICAgICAgIHEuc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghX2lzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgICAgZGF0YSA9IFtkYXRhXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoZGF0YS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgIC8vIGNhbGwgZHJhaW4gaW1tZWRpYXRlbHkgaWYgdGhlcmUgYXJlIG5vIHRhc2tzXG4gICAgICAgICAgICAgcmV0dXJuIGFzeW5jLnNldEltbWVkaWF0ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgaWYgKHEuZHJhaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgIHEuZHJhaW4oKTtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfZWFjaChkYXRhLCBmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgICAgICAgIHZhciBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgZGF0YTogdGFzayxcbiAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBjYWxsYmFjayA6IG51bGxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHEudGFza3Muc3BsaWNlKF9iaW5hcnlTZWFyY2gocS50YXNrcywgaXRlbSwgX2NvbXBhcmVUYXNrcykgKyAxLCAwLCBpdGVtKTtcblxuICAgICAgICAgICAgICBpZiAocS5zYXR1cmF0ZWQgJiYgcS50YXNrcy5sZW5ndGggPT09IHEuY29uY3VycmVuY3kpIHtcbiAgICAgICAgICAgICAgICAgIHEuc2F0dXJhdGVkKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYXN5bmMuc2V0SW1tZWRpYXRlKHEucHJvY2Vzcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFN0YXJ0IHdpdGggYSBub3JtYWwgcXVldWVcbiAgICAgICAgdmFyIHEgPSBhc3luYy5xdWV1ZSh3b3JrZXIsIGNvbmN1cnJlbmN5KTtcbiAgICAgICAgXG4gICAgICAgIC8vIE92ZXJyaWRlIHB1c2ggdG8gYWNjZXB0IHNlY29uZCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIHByaW9yaXR5XG4gICAgICAgIHEucHVzaCA9IGZ1bmN0aW9uIChkYXRhLCBwcmlvcml0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgICBfaW5zZXJ0KHEsIGRhdGEsIHByaW9yaXR5LCBjYWxsYmFjayk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvLyBSZW1vdmUgdW5zaGlmdCBmdW5jdGlvblxuICAgICAgICBkZWxldGUgcS51bnNoaWZ0O1xuXG4gICAgICAgIHJldHVybiBxO1xuICAgIH07XG5cbiAgICBhc3luYy5jYXJnbyA9IGZ1bmN0aW9uICh3b3JrZXIsIHBheWxvYWQpIHtcbiAgICAgICAgdmFyIHdvcmtpbmcgICAgID0gZmFsc2UsXG4gICAgICAgICAgICB0YXNrcyAgICAgICA9IFtdO1xuXG4gICAgICAgIHZhciBjYXJnbyA9IHtcbiAgICAgICAgICAgIHRhc2tzOiB0YXNrcyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICAgICAgICBzYXR1cmF0ZWQ6IG51bGwsXG4gICAgICAgICAgICBlbXB0eTogbnVsbCxcbiAgICAgICAgICAgIGRyYWluOiBudWxsLFxuICAgICAgICAgICAgZHJhaW5lZDogdHJ1ZSxcbiAgICAgICAgICAgIHB1c2g6IGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGlmICghX2lzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IFtkYXRhXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2VhY2goZGF0YSwgZnVuY3Rpb24odGFzaykge1xuICAgICAgICAgICAgICAgICAgICB0YXNrcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRhc2ssXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gY2FsbGJhY2sgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjYXJnby5kcmFpbmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJnby5zYXR1cmF0ZWQgJiYgdGFza3MubGVuZ3RoID09PSBwYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJnby5zYXR1cmF0ZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGFzeW5jLnNldEltbWVkaWF0ZShjYXJnby5wcm9jZXNzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9jZXNzOiBmdW5jdGlvbiBwcm9jZXNzKCkge1xuICAgICAgICAgICAgICAgIGlmICh3b3JraW5nKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZihjYXJnby5kcmFpbiAmJiAhY2FyZ28uZHJhaW5lZCkgY2FyZ28uZHJhaW4oKTtcbiAgICAgICAgICAgICAgICAgICAgY2FyZ28uZHJhaW5lZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgdHMgPSB0eXBlb2YgcGF5bG9hZCA9PT0gJ251bWJlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRhc2tzLnNwbGljZSgwLCBwYXlsb2FkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGFza3Muc3BsaWNlKDAsIHRhc2tzLmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZHMgPSBfbWFwKHRzLCBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5kYXRhO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYoY2FyZ28uZW1wdHkpIGNhcmdvLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgd29ya2luZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgd29ya2VyKGRzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdvcmtpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgICAgICAgICAgX2VhY2godHMsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY2FsbGJhY2suYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3MoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZW5ndGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFza3MubGVuZ3RoO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJ1bm5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd29ya2luZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGNhcmdvO1xuICAgIH07XG5cbiAgICB2YXIgX2NvbnNvbGVfZm4gPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICBmbi5hcHBseShudWxsLCBhcmdzLmNvbmNhdChbZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbnNvbGVbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lYWNoKGFyZ3MsIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZVtuYW1lXSh4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGFzeW5jLmxvZyA9IF9jb25zb2xlX2ZuKCdsb2cnKTtcbiAgICBhc3luYy5kaXIgPSBfY29uc29sZV9mbignZGlyJyk7XG4gICAgLyphc3luYy5pbmZvID0gX2NvbnNvbGVfZm4oJ2luZm8nKTtcbiAgICBhc3luYy53YXJuID0gX2NvbnNvbGVfZm4oJ3dhcm4nKTtcbiAgICBhc3luYy5lcnJvciA9IF9jb25zb2xlX2ZuKCdlcnJvcicpOyovXG5cbiAgICBhc3luYy5tZW1vaXplID0gZnVuY3Rpb24gKGZuLCBoYXNoZXIpIHtcbiAgICAgICAgdmFyIG1lbW8gPSB7fTtcbiAgICAgICAgdmFyIHF1ZXVlcyA9IHt9O1xuICAgICAgICBoYXNoZXIgPSBoYXNoZXIgfHwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICB9O1xuICAgICAgICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmdzLnBvcCgpO1xuICAgICAgICAgICAgdmFyIGtleSA9IGhhc2hlci5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgICAgIGlmIChrZXkgaW4gbWVtbykge1xuICAgICAgICAgICAgICAgIGFzeW5jLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgbWVtb1trZXldKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSBpbiBxdWV1ZXMpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZXNba2V5XS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1ZXVlc1trZXldID0gW2NhbGxiYWNrXTtcbiAgICAgICAgICAgICAgICBmbi5hcHBseShudWxsLCBhcmdzLmNvbmNhdChbZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBtZW1vW2tleV0gPSBhcmd1bWVudHM7XG4gICAgICAgICAgICAgICAgICAgIHZhciBxID0gcXVldWVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBxdWV1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBxLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgIHFbaV0uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIG1lbW9pemVkLm1lbW8gPSBtZW1vO1xuICAgICAgICBtZW1vaXplZC51bm1lbW9pemVkID0gZm47XG4gICAgICAgIHJldHVybiBtZW1vaXplZDtcbiAgICB9O1xuXG4gICAgYXN5bmMudW5tZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGZuLnVubWVtb2l6ZWQgfHwgZm4pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBhc3luYy50aW1lcyA9IGZ1bmN0aW9uIChjb3VudCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBjb3VudGVyID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgY291bnRlci5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhc3luYy5tYXAoY291bnRlciwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgYXN5bmMudGltZXNTZXJpZXMgPSBmdW5jdGlvbiAoY291bnQsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgY291bnRlciA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvdW50ZXIucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXN5bmMubWFwU2VyaWVzKGNvdW50ZXIsIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGFzeW5jLnNlcSA9IGZ1bmN0aW9uICgvKiBmdW5jdGlvbnMuLi4gKi8pIHtcbiAgICAgICAgdmFyIGZucyA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3MucG9wKCk7XG4gICAgICAgICAgICBhc3luYy5yZWR1Y2UoZm5zLCBhcmdzLCBmdW5jdGlvbiAobmV3YXJncywgZm4sIGNiKSB7XG4gICAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgbmV3YXJncy5jb25jYXQoW2Z1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgY2IoZXJyLCBuZXh0YXJncyk7XG4gICAgICAgICAgICAgICAgfV0pKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnIsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGF0LCBbZXJyXS5jb25jYXQocmVzdWx0cykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGFzeW5jLmNvbXBvc2UgPSBmdW5jdGlvbiAoLyogZnVuY3Rpb25zLi4uICovKSB7XG4gICAgICByZXR1cm4gYXN5bmMuc2VxLmFwcGx5KG51bGwsIEFycmF5LnByb3RvdHlwZS5yZXZlcnNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfTtcblxuICAgIHZhciBfYXBwbHlFYWNoID0gZnVuY3Rpb24gKGVhY2hmbiwgZm5zIC8qYXJncy4uLiovKSB7XG4gICAgICAgIHZhciBnbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3MucG9wKCk7XG4gICAgICAgICAgICByZXR1cm4gZWFjaGZuKGZucywgZnVuY3Rpb24gKGZuLCBjYikge1xuICAgICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MuY29uY2F0KFtjYl0pKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYWxsYmFjayk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgICAgICAgICAgcmV0dXJuIGdvLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGdvO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBhc3luYy5hcHBseUVhY2ggPSBkb1BhcmFsbGVsKF9hcHBseUVhY2gpO1xuICAgIGFzeW5jLmFwcGx5RWFjaFNlcmllcyA9IGRvU2VyaWVzKF9hcHBseUVhY2gpO1xuXG4gICAgYXN5bmMuZm9yZXZlciA9IGZ1bmN0aW9uIChmbiwgY2FsbGJhY2spIHtcbiAgICAgICAgZnVuY3Rpb24gbmV4dChlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZuKG5leHQpO1xuICAgICAgICB9XG4gICAgICAgIG5leHQoKTtcbiAgICB9O1xuXG4gICAgLy8gTm9kZS5qc1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGFzeW5jO1xuICAgIH1cbiAgICAvLyBBTUQgLyBSZXF1aXJlSlNcbiAgICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lICE9PSAndW5kZWZpbmVkJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGFzeW5jO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gaW5jbHVkZWQgZGlyZWN0bHkgdmlhIDxzY3JpcHQ+IHRhZ1xuICAgIGVsc2Uge1xuICAgICAgICByb290LmFzeW5jID0gYXN5bmM7XG4gICAgfVxuXG59KCkpO1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIkprcFIyRlwiKSkiLCIvLyAgICAgQmFja2JvbmUuanMgMS4xLjJcblxuLy8gICAgIChjKSAyMDEwLTIwMTQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbi8vICAgICBCYWNrYm9uZSBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbi8vICAgICBGb3IgYWxsIGRldGFpbHMgYW5kIGRvY3VtZW50YXRpb246XG4vLyAgICAgaHR0cDovL2JhY2tib25lanMub3JnXG5cbihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG5cbiAgLy8gU2V0IHVwIEJhY2tib25lIGFwcHJvcHJpYXRlbHkgZm9yIHRoZSBlbnZpcm9ubWVudC4gU3RhcnQgd2l0aCBBTUQuXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoWyd1bmRlcnNjb3JlJywgJ2pxdWVyeScsICdleHBvcnRzJ10sIGZ1bmN0aW9uKF8sICQsIGV4cG9ydHMpIHtcbiAgICAgIC8vIEV4cG9ydCBnbG9iYWwgZXZlbiBpbiBBTUQgY2FzZSBpbiBjYXNlIHRoaXMgc2NyaXB0IGlzIGxvYWRlZCB3aXRoXG4gICAgICAvLyBvdGhlcnMgdGhhdCBtYXkgc3RpbGwgZXhwZWN0IGEgZ2xvYmFsIEJhY2tib25lLlxuICAgICAgcm9vdC5CYWNrYm9uZSA9IGZhY3Rvcnkocm9vdCwgZXhwb3J0cywgXywgJCk7XG4gICAgfSk7XG5cbiAgLy8gTmV4dCBmb3IgTm9kZS5qcyBvciBDb21tb25KUy4galF1ZXJ5IG1heSBub3QgYmUgbmVlZGVkIGFzIGEgbW9kdWxlLlxuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xuICAgIGZhY3Rvcnkocm9vdCwgZXhwb3J0cywgXyk7XG5cbiAgLy8gRmluYWxseSwgYXMgYSBicm93c2VyIGdsb2JhbC5cbiAgfSBlbHNlIHtcbiAgICByb290LkJhY2tib25lID0gZmFjdG9yeShyb290LCB7fSwgcm9vdC5fLCAocm9vdC5qUXVlcnkgfHwgcm9vdC5aZXB0byB8fCByb290LmVuZGVyIHx8IHJvb3QuJCkpO1xuICB9XG5cbn0odGhpcywgZnVuY3Rpb24ocm9vdCwgQmFja2JvbmUsIF8sICQpIHtcblxuICAvLyBJbml0aWFsIFNldHVwXG4gIC8vIC0tLS0tLS0tLS0tLS1cblxuICAvLyBTYXZlIHRoZSBwcmV2aW91cyB2YWx1ZSBvZiB0aGUgYEJhY2tib25lYCB2YXJpYWJsZSwgc28gdGhhdCBpdCBjYW4gYmVcbiAgLy8gcmVzdG9yZWQgbGF0ZXIgb24sIGlmIGBub0NvbmZsaWN0YCBpcyB1c2VkLlxuICB2YXIgcHJldmlvdXNCYWNrYm9uZSA9IHJvb3QuQmFja2JvbmU7XG5cbiAgLy8gQ3JlYXRlIGxvY2FsIHJlZmVyZW5jZXMgdG8gYXJyYXkgbWV0aG9kcyB3ZSdsbCB3YW50IHRvIHVzZSBsYXRlci5cbiAgdmFyIGFycmF5ID0gW107XG4gIHZhciBwdXNoID0gYXJyYXkucHVzaDtcbiAgdmFyIHNsaWNlID0gYXJyYXkuc2xpY2U7XG4gIHZhciBzcGxpY2UgPSBhcnJheS5zcGxpY2U7XG5cbiAgLy8gQ3VycmVudCB2ZXJzaW9uIG9mIHRoZSBsaWJyYXJ5LiBLZWVwIGluIHN5bmMgd2l0aCBgcGFja2FnZS5qc29uYC5cbiAgQmFja2JvbmUuVkVSU0lPTiA9ICcxLjEuMic7XG5cbiAgLy8gRm9yIEJhY2tib25lJ3MgcHVycG9zZXMsIGpRdWVyeSwgWmVwdG8sIEVuZGVyLCBvciBNeSBMaWJyYXJ5IChraWRkaW5nKSBvd25zXG4gIC8vIHRoZSBgJGAgdmFyaWFibGUuXG4gIEJhY2tib25lLiQgPSAkO1xuXG4gIC8vIFJ1bnMgQmFja2JvbmUuanMgaW4gKm5vQ29uZmxpY3QqIG1vZGUsIHJldHVybmluZyB0aGUgYEJhY2tib25lYCB2YXJpYWJsZVxuICAvLyB0byBpdHMgcHJldmlvdXMgb3duZXIuIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhpcyBCYWNrYm9uZSBvYmplY3QuXG4gIEJhY2tib25lLm5vQ29uZmxpY3QgPSBmdW5jdGlvbigpIHtcbiAgICByb290LkJhY2tib25lID0gcHJldmlvdXNCYWNrYm9uZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyBUdXJuIG9uIGBlbXVsYXRlSFRUUGAgdG8gc3VwcG9ydCBsZWdhY3kgSFRUUCBzZXJ2ZXJzLiBTZXR0aW5nIHRoaXMgb3B0aW9uXG4gIC8vIHdpbGwgZmFrZSBgXCJQQVRDSFwiYCwgYFwiUFVUXCJgIGFuZCBgXCJERUxFVEVcImAgcmVxdWVzdHMgdmlhIHRoZSBgX21ldGhvZGAgcGFyYW1ldGVyIGFuZFxuICAvLyBzZXQgYSBgWC1IdHRwLU1ldGhvZC1PdmVycmlkZWAgaGVhZGVyLlxuICBCYWNrYm9uZS5lbXVsYXRlSFRUUCA9IGZhbHNlO1xuXG4gIC8vIFR1cm4gb24gYGVtdWxhdGVKU09OYCB0byBzdXBwb3J0IGxlZ2FjeSBzZXJ2ZXJzIHRoYXQgY2FuJ3QgZGVhbCB3aXRoIGRpcmVjdFxuICAvLyBgYXBwbGljYXRpb24vanNvbmAgcmVxdWVzdHMgLi4uIHdpbGwgZW5jb2RlIHRoZSBib2R5IGFzXG4gIC8vIGBhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRgIGluc3RlYWQgYW5kIHdpbGwgc2VuZCB0aGUgbW9kZWwgaW4gYVxuICAvLyBmb3JtIHBhcmFtIG5hbWVkIGBtb2RlbGAuXG4gIEJhY2tib25lLmVtdWxhdGVKU09OID0gZmFsc2U7XG5cbiAgLy8gQmFja2JvbmUuRXZlbnRzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEEgbW9kdWxlIHRoYXQgY2FuIGJlIG1peGVkIGluIHRvICphbnkgb2JqZWN0KiBpbiBvcmRlciB0byBwcm92aWRlIGl0IHdpdGhcbiAgLy8gY3VzdG9tIGV2ZW50cy4gWW91IG1heSBiaW5kIHdpdGggYG9uYCBvciByZW1vdmUgd2l0aCBgb2ZmYCBjYWxsYmFja1xuICAvLyBmdW5jdGlvbnMgdG8gYW4gZXZlbnQ7IGB0cmlnZ2VyYC1pbmcgYW4gZXZlbnQgZmlyZXMgYWxsIGNhbGxiYWNrcyBpblxuICAvLyBzdWNjZXNzaW9uLlxuICAvL1xuICAvLyAgICAgdmFyIG9iamVjdCA9IHt9O1xuICAvLyAgICAgXy5leHRlbmQob2JqZWN0LCBCYWNrYm9uZS5FdmVudHMpO1xuICAvLyAgICAgb2JqZWN0Lm9uKCdleHBhbmQnLCBmdW5jdGlvbigpeyBhbGVydCgnZXhwYW5kZWQnKTsgfSk7XG4gIC8vICAgICBvYmplY3QudHJpZ2dlcignZXhwYW5kJyk7XG4gIC8vXG4gIHZhciBFdmVudHMgPSBCYWNrYm9uZS5FdmVudHMgPSB7XG5cbiAgICAvLyBCaW5kIGFuIGV2ZW50IHRvIGEgYGNhbGxiYWNrYCBmdW5jdGlvbi4gUGFzc2luZyBgXCJhbGxcImAgd2lsbCBiaW5kXG4gICAgLy8gdGhlIGNhbGxiYWNrIHRvIGFsbCBldmVudHMgZmlyZWQuXG4gICAgb246IGZ1bmN0aW9uKG5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICBpZiAoIWV2ZW50c0FwaSh0aGlzLCAnb24nLCBuYW1lLCBbY2FsbGJhY2ssIGNvbnRleHRdKSB8fCAhY2FsbGJhY2spIHJldHVybiB0aGlzO1xuICAgICAgdGhpcy5fZXZlbnRzIHx8ICh0aGlzLl9ldmVudHMgPSB7fSk7XG4gICAgICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzW25hbWVdIHx8ICh0aGlzLl9ldmVudHNbbmFtZV0gPSBbXSk7XG4gICAgICBldmVudHMucHVzaCh7Y2FsbGJhY2s6IGNhbGxiYWNrLCBjb250ZXh0OiBjb250ZXh0LCBjdHg6IGNvbnRleHQgfHwgdGhpc30pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIEJpbmQgYW4gZXZlbnQgdG8gb25seSBiZSB0cmlnZ2VyZWQgYSBzaW5nbGUgdGltZS4gQWZ0ZXIgdGhlIGZpcnN0IHRpbWVcbiAgICAvLyB0aGUgY2FsbGJhY2sgaXMgaW52b2tlZCwgaXQgd2lsbCBiZSByZW1vdmVkLlxuICAgIG9uY2U6IGZ1bmN0aW9uKG5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICBpZiAoIWV2ZW50c0FwaSh0aGlzLCAnb25jZScsIG5hbWUsIFtjYWxsYmFjaywgY29udGV4dF0pIHx8ICFjYWxsYmFjaykgcmV0dXJuIHRoaXM7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgb25jZSA9IF8ub25jZShmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5vZmYobmFtZSwgb25jZSk7XG4gICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9KTtcbiAgICAgIG9uY2UuX2NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICByZXR1cm4gdGhpcy5vbihuYW1lLCBvbmNlLCBjb250ZXh0KTtcbiAgICB9LFxuXG4gICAgLy8gUmVtb3ZlIG9uZSBvciBtYW55IGNhbGxiYWNrcy4gSWYgYGNvbnRleHRgIGlzIG51bGwsIHJlbW92ZXMgYWxsXG4gICAgLy8gY2FsbGJhY2tzIHdpdGggdGhhdCBmdW5jdGlvbi4gSWYgYGNhbGxiYWNrYCBpcyBudWxsLCByZW1vdmVzIGFsbFxuICAgIC8vIGNhbGxiYWNrcyBmb3IgdGhlIGV2ZW50LiBJZiBgbmFtZWAgaXMgbnVsbCwgcmVtb3ZlcyBhbGwgYm91bmRcbiAgICAvLyBjYWxsYmFja3MgZm9yIGFsbCBldmVudHMuXG4gICAgb2ZmOiBmdW5jdGlvbihuYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgdmFyIHJldGFpbiwgZXYsIGV2ZW50cywgbmFtZXMsIGksIGwsIGosIGs7XG4gICAgICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhZXZlbnRzQXBpKHRoaXMsICdvZmYnLCBuYW1lLCBbY2FsbGJhY2ssIGNvbnRleHRdKSkgcmV0dXJuIHRoaXM7XG4gICAgICBpZiAoIW5hbWUgJiYgIWNhbGxiYWNrICYmICFjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IHZvaWQgMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBuYW1lcyA9IG5hbWUgPyBbbmFtZV0gOiBfLmtleXModGhpcy5fZXZlbnRzKTtcbiAgICAgIGZvciAoaSA9IDAsIGwgPSBuYW1lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xuICAgICAgICBpZiAoZXZlbnRzID0gdGhpcy5fZXZlbnRzW25hbWVdKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzW25hbWVdID0gcmV0YWluID0gW107XG4gICAgICAgICAgaWYgKGNhbGxiYWNrIHx8IGNvbnRleHQpIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDAsIGsgPSBldmVudHMubGVuZ3RoOyBqIDwgazsgaisrKSB7XG4gICAgICAgICAgICAgIGV2ID0gZXZlbnRzW2pdO1xuICAgICAgICAgICAgICBpZiAoKGNhbGxiYWNrICYmIGNhbGxiYWNrICE9PSBldi5jYWxsYmFjayAmJiBjYWxsYmFjayAhPT0gZXYuY2FsbGJhY2suX2NhbGxiYWNrKSB8fFxuICAgICAgICAgICAgICAgICAgKGNvbnRleHQgJiYgY29udGV4dCAhPT0gZXYuY29udGV4dCkpIHtcbiAgICAgICAgICAgICAgICByZXRhaW4ucHVzaChldik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFyZXRhaW4ubGVuZ3RoKSBkZWxldGUgdGhpcy5fZXZlbnRzW25hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBUcmlnZ2VyIG9uZSBvciBtYW55IGV2ZW50cywgZmlyaW5nIGFsbCBib3VuZCBjYWxsYmFja3MuIENhbGxiYWNrcyBhcmVcbiAgICAvLyBwYXNzZWQgdGhlIHNhbWUgYXJndW1lbnRzIGFzIGB0cmlnZ2VyYCBpcywgYXBhcnQgZnJvbSB0aGUgZXZlbnQgbmFtZVxuICAgIC8vICh1bmxlc3MgeW91J3JlIGxpc3RlbmluZyBvbiBgXCJhbGxcImAsIHdoaWNoIHdpbGwgY2F1c2UgeW91ciBjYWxsYmFjayB0b1xuICAgIC8vIHJlY2VpdmUgdGhlIHRydWUgbmFtZSBvZiB0aGUgZXZlbnQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50KS5cbiAgICB0cmlnZ2VyOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICBpZiAoIXRoaXMuX2V2ZW50cykgcmV0dXJuIHRoaXM7XG4gICAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIGlmICghZXZlbnRzQXBpKHRoaXMsICd0cmlnZ2VyJywgbmFtZSwgYXJncykpIHJldHVybiB0aGlzO1xuICAgICAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50c1tuYW1lXTtcbiAgICAgIHZhciBhbGxFdmVudHMgPSB0aGlzLl9ldmVudHMuYWxsO1xuICAgICAgaWYgKGV2ZW50cykgdHJpZ2dlckV2ZW50cyhldmVudHMsIGFyZ3MpO1xuICAgICAgaWYgKGFsbEV2ZW50cykgdHJpZ2dlckV2ZW50cyhhbGxFdmVudHMsIGFyZ3VtZW50cyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gVGVsbCB0aGlzIG9iamVjdCB0byBzdG9wIGxpc3RlbmluZyB0byBlaXRoZXIgc3BlY2lmaWMgZXZlbnRzIC4uLiBvclxuICAgIC8vIHRvIGV2ZXJ5IG9iamVjdCBpdCdzIGN1cnJlbnRseSBsaXN0ZW5pbmcgdG8uXG4gICAgc3RvcExpc3RlbmluZzogZnVuY3Rpb24ob2JqLCBuYW1lLCBjYWxsYmFjaykge1xuICAgICAgdmFyIGxpc3RlbmluZ1RvID0gdGhpcy5fbGlzdGVuaW5nVG87XG4gICAgICBpZiAoIWxpc3RlbmluZ1RvKSByZXR1cm4gdGhpcztcbiAgICAgIHZhciByZW1vdmUgPSAhbmFtZSAmJiAhY2FsbGJhY2s7XG4gICAgICBpZiAoIWNhbGxiYWNrICYmIHR5cGVvZiBuYW1lID09PSAnb2JqZWN0JykgY2FsbGJhY2sgPSB0aGlzO1xuICAgICAgaWYgKG9iaikgKGxpc3RlbmluZ1RvID0ge30pW29iai5fbGlzdGVuSWRdID0gb2JqO1xuICAgICAgZm9yICh2YXIgaWQgaW4gbGlzdGVuaW5nVG8pIHtcbiAgICAgICAgb2JqID0gbGlzdGVuaW5nVG9baWRdO1xuICAgICAgICBvYmoub2ZmKG5hbWUsIGNhbGxiYWNrLCB0aGlzKTtcbiAgICAgICAgaWYgKHJlbW92ZSB8fCBfLmlzRW1wdHkob2JqLl9ldmVudHMpKSBkZWxldGUgdGhpcy5fbGlzdGVuaW5nVG9baWRdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gIH07XG5cbiAgLy8gUmVndWxhciBleHByZXNzaW9uIHVzZWQgdG8gc3BsaXQgZXZlbnQgc3RyaW5ncy5cbiAgdmFyIGV2ZW50U3BsaXR0ZXIgPSAvXFxzKy87XG5cbiAgLy8gSW1wbGVtZW50IGZhbmN5IGZlYXR1cmVzIG9mIHRoZSBFdmVudHMgQVBJIHN1Y2ggYXMgbXVsdGlwbGUgZXZlbnRcbiAgLy8gbmFtZXMgYFwiY2hhbmdlIGJsdXJcImAgYW5kIGpRdWVyeS1zdHlsZSBldmVudCBtYXBzIGB7Y2hhbmdlOiBhY3Rpb259YFxuICAvLyBpbiB0ZXJtcyBvZiB0aGUgZXhpc3RpbmcgQVBJLlxuICB2YXIgZXZlbnRzQXBpID0gZnVuY3Rpb24ob2JqLCBhY3Rpb24sIG5hbWUsIHJlc3QpIHtcbiAgICBpZiAoIW5hbWUpIHJldHVybiB0cnVlO1xuXG4gICAgLy8gSGFuZGxlIGV2ZW50IG1hcHMuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0Jykge1xuICAgICAgZm9yICh2YXIga2V5IGluIG5hbWUpIHtcbiAgICAgICAgb2JqW2FjdGlvbl0uYXBwbHkob2JqLCBba2V5LCBuYW1lW2tleV1dLmNvbmNhdChyZXN0KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHNwYWNlIHNlcGFyYXRlZCBldmVudCBuYW1lcy5cbiAgICBpZiAoZXZlbnRTcGxpdHRlci50ZXN0KG5hbWUpKSB7XG4gICAgICB2YXIgbmFtZXMgPSBuYW1lLnNwbGl0KGV2ZW50U3BsaXR0ZXIpO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBuYW1lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgb2JqW2FjdGlvbl0uYXBwbHkob2JqLCBbbmFtZXNbaV1dLmNvbmNhdChyZXN0KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLy8gQSBkaWZmaWN1bHQtdG8tYmVsaWV2ZSwgYnV0IG9wdGltaXplZCBpbnRlcm5hbCBkaXNwYXRjaCBmdW5jdGlvbiBmb3JcbiAgLy8gdHJpZ2dlcmluZyBldmVudHMuIFRyaWVzIHRvIGtlZXAgdGhlIHVzdWFsIGNhc2VzIHNwZWVkeSAobW9zdCBpbnRlcm5hbFxuICAvLyBCYWNrYm9uZSBldmVudHMgaGF2ZSAzIGFyZ3VtZW50cykuXG4gIHZhciB0cmlnZ2VyRXZlbnRzID0gZnVuY3Rpb24oZXZlbnRzLCBhcmdzKSB7XG4gICAgdmFyIGV2LCBpID0gLTEsIGwgPSBldmVudHMubGVuZ3RoLCBhMSA9IGFyZ3NbMF0sIGEyID0gYXJnc1sxXSwgYTMgPSBhcmdzWzJdO1xuICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMDogd2hpbGUgKCsraSA8IGwpIChldiA9IGV2ZW50c1tpXSkuY2FsbGJhY2suY2FsbChldi5jdHgpOyByZXR1cm47XG4gICAgICBjYXNlIDE6IHdoaWxlICgrK2kgPCBsKSAoZXYgPSBldmVudHNbaV0pLmNhbGxiYWNrLmNhbGwoZXYuY3R4LCBhMSk7IHJldHVybjtcbiAgICAgIGNhc2UgMjogd2hpbGUgKCsraSA8IGwpIChldiA9IGV2ZW50c1tpXSkuY2FsbGJhY2suY2FsbChldi5jdHgsIGExLCBhMik7IHJldHVybjtcbiAgICAgIGNhc2UgMzogd2hpbGUgKCsraSA8IGwpIChldiA9IGV2ZW50c1tpXSkuY2FsbGJhY2suY2FsbChldi5jdHgsIGExLCBhMiwgYTMpOyByZXR1cm47XG4gICAgICBkZWZhdWx0OiB3aGlsZSAoKytpIDwgbCkgKGV2ID0gZXZlbnRzW2ldKS5jYWxsYmFjay5hcHBseShldi5jdHgsIGFyZ3MpOyByZXR1cm47XG4gICAgfVxuICB9O1xuXG4gIHZhciBsaXN0ZW5NZXRob2RzID0ge2xpc3RlblRvOiAnb24nLCBsaXN0ZW5Ub09uY2U6ICdvbmNlJ307XG5cbiAgLy8gSW52ZXJzaW9uLW9mLWNvbnRyb2wgdmVyc2lvbnMgb2YgYG9uYCBhbmQgYG9uY2VgLiBUZWxsICp0aGlzKiBvYmplY3QgdG9cbiAgLy8gbGlzdGVuIHRvIGFuIGV2ZW50IGluIGFub3RoZXIgb2JqZWN0IC4uLiBrZWVwaW5nIHRyYWNrIG9mIHdoYXQgaXQnc1xuICAvLyBsaXN0ZW5pbmcgdG8uXG4gIF8uZWFjaChsaXN0ZW5NZXRob2RzLCBmdW5jdGlvbihpbXBsZW1lbnRhdGlvbiwgbWV0aG9kKSB7XG4gICAgRXZlbnRzW21ldGhvZF0gPSBmdW5jdGlvbihvYmosIG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgbGlzdGVuaW5nVG8gPSB0aGlzLl9saXN0ZW5pbmdUbyB8fCAodGhpcy5fbGlzdGVuaW5nVG8gPSB7fSk7XG4gICAgICB2YXIgaWQgPSBvYmouX2xpc3RlbklkIHx8IChvYmouX2xpc3RlbklkID0gXy51bmlxdWVJZCgnbCcpKTtcbiAgICAgIGxpc3RlbmluZ1RvW2lkXSA9IG9iajtcbiAgICAgIGlmICghY2FsbGJhY2sgJiYgdHlwZW9mIG5hbWUgPT09ICdvYmplY3QnKSBjYWxsYmFjayA9IHRoaXM7XG4gICAgICBvYmpbaW1wbGVtZW50YXRpb25dKG5hbWUsIGNhbGxiYWNrLCB0aGlzKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIEFsaWFzZXMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICBFdmVudHMuYmluZCAgID0gRXZlbnRzLm9uO1xuICBFdmVudHMudW5iaW5kID0gRXZlbnRzLm9mZjtcblxuICAvLyBBbGxvdyB0aGUgYEJhY2tib25lYCBvYmplY3QgdG8gc2VydmUgYXMgYSBnbG9iYWwgZXZlbnQgYnVzLCBmb3IgZm9sa3Mgd2hvXG4gIC8vIHdhbnQgZ2xvYmFsIFwicHVic3ViXCIgaW4gYSBjb252ZW5pZW50IHBsYWNlLlxuICBfLmV4dGVuZChCYWNrYm9uZSwgRXZlbnRzKTtcblxuICAvLyBCYWNrYm9uZS5Nb2RlbFxuICAvLyAtLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEJhY2tib25lICoqTW9kZWxzKiogYXJlIHRoZSBiYXNpYyBkYXRhIG9iamVjdCBpbiB0aGUgZnJhbWV3b3JrIC0tXG4gIC8vIGZyZXF1ZW50bHkgcmVwcmVzZW50aW5nIGEgcm93IGluIGEgdGFibGUgaW4gYSBkYXRhYmFzZSBvbiB5b3VyIHNlcnZlci5cbiAgLy8gQSBkaXNjcmV0ZSBjaHVuayBvZiBkYXRhIGFuZCBhIGJ1bmNoIG9mIHVzZWZ1bCwgcmVsYXRlZCBtZXRob2RzIGZvclxuICAvLyBwZXJmb3JtaW5nIGNvbXB1dGF0aW9ucyBhbmQgdHJhbnNmb3JtYXRpb25zIG9uIHRoYXQgZGF0YS5cblxuICAvLyBDcmVhdGUgYSBuZXcgbW9kZWwgd2l0aCB0aGUgc3BlY2lmaWVkIGF0dHJpYnV0ZXMuIEEgY2xpZW50IGlkIChgY2lkYClcbiAgLy8gaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYW5kIGFzc2lnbmVkIGZvciB5b3UuXG4gIHZhciBNb2RlbCA9IEJhY2tib25lLk1vZGVsID0gZnVuY3Rpb24oYXR0cmlidXRlcywgb3B0aW9ucykge1xuICAgIHZhciBhdHRycyA9IGF0dHJpYnV0ZXMgfHwge307XG4gICAgb3B0aW9ucyB8fCAob3B0aW9ucyA9IHt9KTtcbiAgICB0aGlzLmNpZCA9IF8udW5pcXVlSWQoJ2MnKTtcbiAgICB0aGlzLmF0dHJpYnV0ZXMgPSB7fTtcbiAgICBpZiAob3B0aW9ucy5jb2xsZWN0aW9uKSB0aGlzLmNvbGxlY3Rpb24gPSBvcHRpb25zLmNvbGxlY3Rpb247XG4gICAgaWYgKG9wdGlvbnMucGFyc2UpIGF0dHJzID0gdGhpcy5wYXJzZShhdHRycywgb3B0aW9ucykgfHwge307XG4gICAgYXR0cnMgPSBfLmRlZmF1bHRzKHt9LCBhdHRycywgXy5yZXN1bHQodGhpcywgJ2RlZmF1bHRzJykpO1xuICAgIHRoaXMuc2V0KGF0dHJzLCBvcHRpb25zKTtcbiAgICB0aGlzLmNoYW5nZWQgPSB7fTtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICAvLyBBdHRhY2ggYWxsIGluaGVyaXRhYmxlIG1ldGhvZHMgdG8gdGhlIE1vZGVsIHByb3RvdHlwZS5cbiAgXy5leHRlbmQoTW9kZWwucHJvdG90eXBlLCBFdmVudHMsIHtcblxuICAgIC8vIEEgaGFzaCBvZiBhdHRyaWJ1dGVzIHdob3NlIGN1cnJlbnQgYW5kIHByZXZpb3VzIHZhbHVlIGRpZmZlci5cbiAgICBjaGFuZ2VkOiBudWxsLFxuXG4gICAgLy8gVGhlIHZhbHVlIHJldHVybmVkIGR1cmluZyB0aGUgbGFzdCBmYWlsZWQgdmFsaWRhdGlvbi5cbiAgICB2YWxpZGF0aW9uRXJyb3I6IG51bGwsXG5cbiAgICAvLyBUaGUgZGVmYXVsdCBuYW1lIGZvciB0aGUgSlNPTiBgaWRgIGF0dHJpYnV0ZSBpcyBgXCJpZFwiYC4gTW9uZ29EQiBhbmRcbiAgICAvLyBDb3VjaERCIHVzZXJzIG1heSB3YW50IHRvIHNldCB0aGlzIHRvIGBcIl9pZFwiYC5cbiAgICBpZEF0dHJpYnV0ZTogJ2lkJyxcblxuICAgIC8vIEluaXRpYWxpemUgaXMgYW4gZW1wdHkgZnVuY3Rpb24gYnkgZGVmYXVsdC4gT3ZlcnJpZGUgaXQgd2l0aCB5b3VyIG93blxuICAgIC8vIGluaXRpYWxpemF0aW9uIGxvZ2ljLlxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCl7fSxcblxuICAgIC8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG1vZGVsJ3MgYGF0dHJpYnV0ZXNgIG9iamVjdC5cbiAgICB0b0pTT046IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBfLmNsb25lKHRoaXMuYXR0cmlidXRlcyk7XG4gICAgfSxcblxuICAgIC8vIFByb3h5IGBCYWNrYm9uZS5zeW5jYCBieSBkZWZhdWx0IC0tIGJ1dCBvdmVycmlkZSB0aGlzIGlmIHlvdSBuZWVkXG4gICAgLy8gY3VzdG9tIHN5bmNpbmcgc2VtYW50aWNzIGZvciAqdGhpcyogcGFydGljdWxhciBtb2RlbC5cbiAgICBzeW5jOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBCYWNrYm9uZS5zeW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSxcblxuICAgIC8vIEdldCB0aGUgdmFsdWUgb2YgYW4gYXR0cmlidXRlLlxuICAgIGdldDogZnVuY3Rpb24oYXR0cikge1xuICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlc1thdHRyXTtcbiAgICB9LFxuXG4gICAgLy8gR2V0IHRoZSBIVE1MLWVzY2FwZWQgdmFsdWUgb2YgYW4gYXR0cmlidXRlLlxuICAgIGVzY2FwZTogZnVuY3Rpb24oYXR0cikge1xuICAgICAgcmV0dXJuIF8uZXNjYXBlKHRoaXMuZ2V0KGF0dHIpKTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGF0dHJpYnV0ZSBjb250YWlucyBhIHZhbHVlIHRoYXQgaXMgbm90IG51bGxcbiAgICAvLyBvciB1bmRlZmluZWQuXG4gICAgaGFzOiBmdW5jdGlvbihhdHRyKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoYXR0cikgIT0gbnVsbDtcbiAgICB9LFxuXG4gICAgLy8gU2V0IGEgaGFzaCBvZiBtb2RlbCBhdHRyaWJ1dGVzIG9uIHRoZSBvYmplY3QsIGZpcmluZyBgXCJjaGFuZ2VcImAuIFRoaXMgaXNcbiAgICAvLyB0aGUgY29yZSBwcmltaXRpdmUgb3BlcmF0aW9uIG9mIGEgbW9kZWwsIHVwZGF0aW5nIHRoZSBkYXRhIGFuZCBub3RpZnlpbmdcbiAgICAvLyBhbnlvbmUgd2hvIG5lZWRzIHRvIGtub3cgYWJvdXQgdGhlIGNoYW5nZSBpbiBzdGF0ZS4gVGhlIGhlYXJ0IG9mIHRoZSBiZWFzdC5cbiAgICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsLCBvcHRpb25zKSB7XG4gICAgICB2YXIgYXR0ciwgYXR0cnMsIHVuc2V0LCBjaGFuZ2VzLCBzaWxlbnQsIGNoYW5naW5nLCBwcmV2LCBjdXJyZW50O1xuICAgICAgaWYgKGtleSA9PSBudWxsKSByZXR1cm4gdGhpcztcblxuICAgICAgLy8gSGFuZGxlIGJvdGggYFwia2V5XCIsIHZhbHVlYCBhbmQgYHtrZXk6IHZhbHVlfWAgLXN0eWxlIGFyZ3VtZW50cy5cbiAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBhdHRycyA9IGtleTtcbiAgICAgICAgb3B0aW9ucyA9IHZhbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIChhdHRycyA9IHt9KVtrZXldID0gdmFsO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zIHx8IChvcHRpb25zID0ge30pO1xuXG4gICAgICAvLyBSdW4gdmFsaWRhdGlvbi5cbiAgICAgIGlmICghdGhpcy5fdmFsaWRhdGUoYXR0cnMsIG9wdGlvbnMpKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIC8vIEV4dHJhY3QgYXR0cmlidXRlcyBhbmQgb3B0aW9ucy5cbiAgICAgIHVuc2V0ICAgICAgICAgICA9IG9wdGlvbnMudW5zZXQ7XG4gICAgICBzaWxlbnQgICAgICAgICAgPSBvcHRpb25zLnNpbGVudDtcbiAgICAgIGNoYW5nZXMgICAgICAgICA9IFtdO1xuICAgICAgY2hhbmdpbmcgICAgICAgID0gdGhpcy5fY2hhbmdpbmc7XG4gICAgICB0aGlzLl9jaGFuZ2luZyAgPSB0cnVlO1xuXG4gICAgICBpZiAoIWNoYW5naW5nKSB7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzQXR0cmlidXRlcyA9IF8uY2xvbmUodGhpcy5hdHRyaWJ1dGVzKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0ge307XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gdGhpcy5hdHRyaWJ1dGVzLCBwcmV2ID0gdGhpcy5fcHJldmlvdXNBdHRyaWJ1dGVzO1xuXG4gICAgICAvLyBDaGVjayBmb3IgY2hhbmdlcyBvZiBgaWRgLlxuICAgICAgaWYgKHRoaXMuaWRBdHRyaWJ1dGUgaW4gYXR0cnMpIHRoaXMuaWQgPSBhdHRyc1t0aGlzLmlkQXR0cmlidXRlXTtcblxuICAgICAgLy8gRm9yIGVhY2ggYHNldGAgYXR0cmlidXRlLCB1cGRhdGUgb3IgZGVsZXRlIHRoZSBjdXJyZW50IHZhbHVlLlxuICAgICAgZm9yIChhdHRyIGluIGF0dHJzKSB7XG4gICAgICAgIHZhbCA9IGF0dHJzW2F0dHJdO1xuICAgICAgICBpZiAoIV8uaXNFcXVhbChjdXJyZW50W2F0dHJdLCB2YWwpKSBjaGFuZ2VzLnB1c2goYXR0cik7XG4gICAgICAgIGlmICghXy5pc0VxdWFsKHByZXZbYXR0cl0sIHZhbCkpIHtcbiAgICAgICAgICB0aGlzLmNoYW5nZWRbYXR0cl0gPSB2YWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuY2hhbmdlZFthdHRyXTtcbiAgICAgICAgfVxuICAgICAgICB1bnNldCA/IGRlbGV0ZSBjdXJyZW50W2F0dHJdIDogY3VycmVudFthdHRyXSA9IHZhbDtcbiAgICAgIH1cblxuICAgICAgLy8gVHJpZ2dlciBhbGwgcmVsZXZhbnQgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICBpZiAoY2hhbmdlcy5sZW5ndGgpIHRoaXMuX3BlbmRpbmcgPSBvcHRpb25zO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNoYW5nZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy50cmlnZ2VyKCdjaGFuZ2U6JyArIGNoYW5nZXNbaV0sIHRoaXMsIGN1cnJlbnRbY2hhbmdlc1tpXV0sIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFlvdSBtaWdodCBiZSB3b25kZXJpbmcgd2h5IHRoZXJlJ3MgYSBgd2hpbGVgIGxvb3AgaGVyZS4gQ2hhbmdlcyBjYW5cbiAgICAgIC8vIGJlIHJlY3Vyc2l2ZWx5IG5lc3RlZCB3aXRoaW4gYFwiY2hhbmdlXCJgIGV2ZW50cy5cbiAgICAgIGlmIChjaGFuZ2luZykgcmV0dXJuIHRoaXM7XG4gICAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICB3aGlsZSAodGhpcy5fcGVuZGluZykge1xuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLl9wZW5kaW5nO1xuICAgICAgICAgIHRoaXMuX3BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2NoYW5nZScsIHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9wZW5kaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl9jaGFuZ2luZyA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIFJlbW92ZSBhbiBhdHRyaWJ1dGUgZnJvbSB0aGUgbW9kZWwsIGZpcmluZyBgXCJjaGFuZ2VcImAuIGB1bnNldGAgaXMgYSBub29wXG4gICAgLy8gaWYgdGhlIGF0dHJpYnV0ZSBkb2Vzbid0IGV4aXN0LlxuICAgIHVuc2V0OiBmdW5jdGlvbihhdHRyLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoYXR0ciwgdm9pZCAwLCBfLmV4dGVuZCh7fSwgb3B0aW9ucywge3Vuc2V0OiB0cnVlfSkpO1xuICAgIH0sXG5cbiAgICAvLyBDbGVhciBhbGwgYXR0cmlidXRlcyBvbiB0aGUgbW9kZWwsIGZpcmluZyBgXCJjaGFuZ2VcImAuXG4gICAgY2xlYXI6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciBhdHRycyA9IHt9O1xuICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuYXR0cmlidXRlcykgYXR0cnNba2V5XSA9IHZvaWQgMDtcbiAgICAgIHJldHVybiB0aGlzLnNldChhdHRycywgXy5leHRlbmQoe30sIG9wdGlvbnMsIHt1bnNldDogdHJ1ZX0pKTtcbiAgICB9LFxuXG4gICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBtb2RlbCBoYXMgY2hhbmdlZCBzaW5jZSB0aGUgbGFzdCBgXCJjaGFuZ2VcImAgZXZlbnQuXG4gICAgLy8gSWYgeW91IHNwZWNpZnkgYW4gYXR0cmlidXRlIG5hbWUsIGRldGVybWluZSBpZiB0aGF0IGF0dHJpYnV0ZSBoYXMgY2hhbmdlZC5cbiAgICBoYXNDaGFuZ2VkOiBmdW5jdGlvbihhdHRyKSB7XG4gICAgICBpZiAoYXR0ciA9PSBudWxsKSByZXR1cm4gIV8uaXNFbXB0eSh0aGlzLmNoYW5nZWQpO1xuICAgICAgcmV0dXJuIF8uaGFzKHRoaXMuY2hhbmdlZCwgYXR0cik7XG4gICAgfSxcblxuICAgIC8vIFJldHVybiBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIGF0dHJpYnV0ZXMgdGhhdCBoYXZlIGNoYW5nZWQsIG9yXG4gICAgLy8gZmFsc2UgaWYgdGhlcmUgYXJlIG5vIGNoYW5nZWQgYXR0cmlidXRlcy4gVXNlZnVsIGZvciBkZXRlcm1pbmluZyB3aGF0XG4gICAgLy8gcGFydHMgb2YgYSB2aWV3IG5lZWQgdG8gYmUgdXBkYXRlZCBhbmQvb3Igd2hhdCBhdHRyaWJ1dGVzIG5lZWQgdG8gYmVcbiAgICAvLyBwZXJzaXN0ZWQgdG8gdGhlIHNlcnZlci4gVW5zZXQgYXR0cmlidXRlcyB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXG4gICAgLy8gWW91IGNhbiBhbHNvIHBhc3MgYW4gYXR0cmlidXRlcyBvYmplY3QgdG8gZGlmZiBhZ2FpbnN0IHRoZSBtb2RlbCxcbiAgICAvLyBkZXRlcm1pbmluZyBpZiB0aGVyZSAqd291bGQgYmUqIGEgY2hhbmdlLlxuICAgIGNoYW5nZWRBdHRyaWJ1dGVzOiBmdW5jdGlvbihkaWZmKSB7XG4gICAgICBpZiAoIWRpZmYpIHJldHVybiB0aGlzLmhhc0NoYW5nZWQoKSA/IF8uY2xvbmUodGhpcy5jaGFuZ2VkKSA6IGZhbHNlO1xuICAgICAgdmFyIHZhbCwgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgdmFyIG9sZCA9IHRoaXMuX2NoYW5naW5nID8gdGhpcy5fcHJldmlvdXNBdHRyaWJ1dGVzIDogdGhpcy5hdHRyaWJ1dGVzO1xuICAgICAgZm9yICh2YXIgYXR0ciBpbiBkaWZmKSB7XG4gICAgICAgIGlmIChfLmlzRXF1YWwob2xkW2F0dHJdLCAodmFsID0gZGlmZlthdHRyXSkpKSBjb250aW51ZTtcbiAgICAgICAgKGNoYW5nZWQgfHwgKGNoYW5nZWQgPSB7fSkpW2F0dHJdID0gdmFsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNoYW5nZWQ7XG4gICAgfSxcblxuICAgIC8vIEdldCB0aGUgcHJldmlvdXMgdmFsdWUgb2YgYW4gYXR0cmlidXRlLCByZWNvcmRlZCBhdCB0aGUgdGltZSB0aGUgbGFzdFxuICAgIC8vIGBcImNoYW5nZVwiYCBldmVudCB3YXMgZmlyZWQuXG4gICAgcHJldmlvdXM6IGZ1bmN0aW9uKGF0dHIpIHtcbiAgICAgIGlmIChhdHRyID09IG51bGwgfHwgIXRoaXMuX3ByZXZpb3VzQXR0cmlidXRlcykgcmV0dXJuIG51bGw7XG4gICAgICByZXR1cm4gdGhpcy5fcHJldmlvdXNBdHRyaWJ1dGVzW2F0dHJdO1xuICAgIH0sXG5cbiAgICAvLyBHZXQgYWxsIG9mIHRoZSBhdHRyaWJ1dGVzIG9mIHRoZSBtb2RlbCBhdCB0aGUgdGltZSBvZiB0aGUgcHJldmlvdXNcbiAgICAvLyBgXCJjaGFuZ2VcImAgZXZlbnQuXG4gICAgcHJldmlvdXNBdHRyaWJ1dGVzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBfLmNsb25lKHRoaXMuX3ByZXZpb3VzQXR0cmlidXRlcyk7XG4gICAgfSxcblxuICAgIC8vIEZldGNoIHRoZSBtb2RlbCBmcm9tIHRoZSBzZXJ2ZXIuIElmIHRoZSBzZXJ2ZXIncyByZXByZXNlbnRhdGlvbiBvZiB0aGVcbiAgICAvLyBtb2RlbCBkaWZmZXJzIGZyb20gaXRzIGN1cnJlbnQgYXR0cmlidXRlcywgdGhleSB3aWxsIGJlIG92ZXJyaWRkZW4sXG4gICAgLy8gdHJpZ2dlcmluZyBhIGBcImNoYW5nZVwiYCBldmVudC5cbiAgICBmZXRjaDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgPyBfLmNsb25lKG9wdGlvbnMpIDoge307XG4gICAgICBpZiAob3B0aW9ucy5wYXJzZSA9PT0gdm9pZCAwKSBvcHRpb25zLnBhcnNlID0gdHJ1ZTtcbiAgICAgIHZhciBtb2RlbCA9IHRoaXM7XG4gICAgICB2YXIgc3VjY2VzcyA9IG9wdGlvbnMuc3VjY2VzcztcbiAgICAgIG9wdGlvbnMuc3VjY2VzcyA9IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgICAgaWYgKCFtb2RlbC5zZXQobW9kZWwucGFyc2UocmVzcCwgb3B0aW9ucyksIG9wdGlvbnMpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChzdWNjZXNzKSBzdWNjZXNzKG1vZGVsLCByZXNwLCBvcHRpb25zKTtcbiAgICAgICAgbW9kZWwudHJpZ2dlcignc3luYycsIG1vZGVsLCByZXNwLCBvcHRpb25zKTtcbiAgICAgIH07XG4gICAgICB3cmFwRXJyb3IodGhpcywgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gdGhpcy5zeW5jKCdyZWFkJywgdGhpcywgb3B0aW9ucyk7XG4gICAgfSxcblxuICAgIC8vIFNldCBhIGhhc2ggb2YgbW9kZWwgYXR0cmlidXRlcywgYW5kIHN5bmMgdGhlIG1vZGVsIHRvIHRoZSBzZXJ2ZXIuXG4gICAgLy8gSWYgdGhlIHNlcnZlciByZXR1cm5zIGFuIGF0dHJpYnV0ZXMgaGFzaCB0aGF0IGRpZmZlcnMsIHRoZSBtb2RlbCdzXG4gICAgLy8gc3RhdGUgd2lsbCBiZSBgc2V0YCBhZ2Fpbi5cbiAgICBzYXZlOiBmdW5jdGlvbihrZXksIHZhbCwgb3B0aW9ucykge1xuICAgICAgdmFyIGF0dHJzLCBtZXRob2QsIHhociwgYXR0cmlidXRlcyA9IHRoaXMuYXR0cmlidXRlcztcblxuICAgICAgLy8gSGFuZGxlIGJvdGggYFwia2V5XCIsIHZhbHVlYCBhbmQgYHtrZXk6IHZhbHVlfWAgLXN0eWxlIGFyZ3VtZW50cy5cbiAgICAgIGlmIChrZXkgPT0gbnVsbCB8fCB0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBhdHRycyA9IGtleTtcbiAgICAgICAgb3B0aW9ucyA9IHZhbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIChhdHRycyA9IHt9KVtrZXldID0gdmFsO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zID0gXy5leHRlbmQoe3ZhbGlkYXRlOiB0cnVlfSwgb3B0aW9ucyk7XG5cbiAgICAgIC8vIElmIHdlJ3JlIG5vdCB3YWl0aW5nIGFuZCBhdHRyaWJ1dGVzIGV4aXN0LCBzYXZlIGFjdHMgYXNcbiAgICAgIC8vIGBzZXQoYXR0cikuc2F2ZShudWxsLCBvcHRzKWAgd2l0aCB2YWxpZGF0aW9uLiBPdGhlcndpc2UsIGNoZWNrIGlmXG4gICAgICAvLyB0aGUgbW9kZWwgd2lsbCBiZSB2YWxpZCB3aGVuIHRoZSBhdHRyaWJ1dGVzLCBpZiBhbnksIGFyZSBzZXQuXG4gICAgICBpZiAoYXR0cnMgJiYgIW9wdGlvbnMud2FpdCkge1xuICAgICAgICBpZiAoIXRoaXMuc2V0KGF0dHJzLCBvcHRpb25zKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCF0aGlzLl92YWxpZGF0ZShhdHRycywgb3B0aW9ucykpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0IHRlbXBvcmFyeSBhdHRyaWJ1dGVzIGlmIGB7d2FpdDogdHJ1ZX1gLlxuICAgICAgaWYgKGF0dHJzICYmIG9wdGlvbnMud2FpdCkge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBfLmV4dGVuZCh7fSwgYXR0cmlidXRlcywgYXR0cnMpO1xuICAgICAgfVxuXG4gICAgICAvLyBBZnRlciBhIHN1Y2Nlc3NmdWwgc2VydmVyLXNpZGUgc2F2ZSwgdGhlIGNsaWVudCBpcyAob3B0aW9uYWxseSlcbiAgICAgIC8vIHVwZGF0ZWQgd2l0aCB0aGUgc2VydmVyLXNpZGUgc3RhdGUuXG4gICAgICBpZiAob3B0aW9ucy5wYXJzZSA9PT0gdm9pZCAwKSBvcHRpb25zLnBhcnNlID0gdHJ1ZTtcbiAgICAgIHZhciBtb2RlbCA9IHRoaXM7XG4gICAgICB2YXIgc3VjY2VzcyA9IG9wdGlvbnMuc3VjY2VzcztcbiAgICAgIG9wdGlvbnMuc3VjY2VzcyA9IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgICAgLy8gRW5zdXJlIGF0dHJpYnV0ZXMgYXJlIHJlc3RvcmVkIGR1cmluZyBzeW5jaHJvbm91cyBzYXZlcy5cbiAgICAgICAgbW9kZWwuYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG4gICAgICAgIHZhciBzZXJ2ZXJBdHRycyA9IG1vZGVsLnBhcnNlKHJlc3AsIG9wdGlvbnMpO1xuICAgICAgICBpZiAob3B0aW9ucy53YWl0KSBzZXJ2ZXJBdHRycyA9IF8uZXh0ZW5kKGF0dHJzIHx8IHt9LCBzZXJ2ZXJBdHRycyk7XG4gICAgICAgIGlmIChfLmlzT2JqZWN0KHNlcnZlckF0dHJzKSAmJiAhbW9kZWwuc2V0KHNlcnZlckF0dHJzLCBvcHRpb25zKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3VjY2Vzcykgc3VjY2Vzcyhtb2RlbCwgcmVzcCwgb3B0aW9ucyk7XG4gICAgICAgIG1vZGVsLnRyaWdnZXIoJ3N5bmMnLCBtb2RlbCwgcmVzcCwgb3B0aW9ucyk7XG4gICAgICB9O1xuICAgICAgd3JhcEVycm9yKHRoaXMsIG9wdGlvbnMpO1xuXG4gICAgICBtZXRob2QgPSB0aGlzLmlzTmV3KCkgPyAnY3JlYXRlJyA6IChvcHRpb25zLnBhdGNoID8gJ3BhdGNoJyA6ICd1cGRhdGUnKTtcbiAgICAgIGlmIChtZXRob2QgPT09ICdwYXRjaCcpIG9wdGlvbnMuYXR0cnMgPSBhdHRycztcbiAgICAgIHhociA9IHRoaXMuc3luYyhtZXRob2QsIHRoaXMsIG9wdGlvbnMpO1xuXG4gICAgICAvLyBSZXN0b3JlIGF0dHJpYnV0ZXMuXG4gICAgICBpZiAoYXR0cnMgJiYgb3B0aW9ucy53YWl0KSB0aGlzLmF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuXG4gICAgICByZXR1cm4geGhyO1xuICAgIH0sXG5cbiAgICAvLyBEZXN0cm95IHRoaXMgbW9kZWwgb24gdGhlIHNlcnZlciBpZiBpdCB3YXMgYWxyZWFkeSBwZXJzaXN0ZWQuXG4gICAgLy8gT3B0aW1pc3RpY2FsbHkgcmVtb3ZlcyB0aGUgbW9kZWwgZnJvbSBpdHMgY29sbGVjdGlvbiwgaWYgaXQgaGFzIG9uZS5cbiAgICAvLyBJZiBgd2FpdDogdHJ1ZWAgaXMgcGFzc2VkLCB3YWl0cyBmb3IgdGhlIHNlcnZlciB0byByZXNwb25kIGJlZm9yZSByZW1vdmFsLlxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zID8gXy5jbG9uZShvcHRpb25zKSA6IHt9O1xuICAgICAgdmFyIG1vZGVsID0gdGhpcztcbiAgICAgIHZhciBzdWNjZXNzID0gb3B0aW9ucy5zdWNjZXNzO1xuXG4gICAgICB2YXIgZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RlbC50cmlnZ2VyKCdkZXN0cm95JywgbW9kZWwsIG1vZGVsLmNvbGxlY3Rpb24sIG9wdGlvbnMpO1xuICAgICAgfTtcblxuICAgICAgb3B0aW9ucy5zdWNjZXNzID0gZnVuY3Rpb24ocmVzcCkge1xuICAgICAgICBpZiAob3B0aW9ucy53YWl0IHx8IG1vZGVsLmlzTmV3KCkpIGRlc3Ryb3koKTtcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHN1Y2Nlc3MobW9kZWwsIHJlc3AsIG9wdGlvbnMpO1xuICAgICAgICBpZiAoIW1vZGVsLmlzTmV3KCkpIG1vZGVsLnRyaWdnZXIoJ3N5bmMnLCBtb2RlbCwgcmVzcCwgb3B0aW9ucyk7XG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5pc05ldygpKSB7XG4gICAgICAgIG9wdGlvbnMuc3VjY2VzcygpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB3cmFwRXJyb3IodGhpcywgb3B0aW9ucyk7XG5cbiAgICAgIHZhciB4aHIgPSB0aGlzLnN5bmMoJ2RlbGV0ZScsIHRoaXMsIG9wdGlvbnMpO1xuICAgICAgaWYgKCFvcHRpb25zLndhaXQpIGRlc3Ryb3koKTtcbiAgICAgIHJldHVybiB4aHI7XG4gICAgfSxcblxuICAgIC8vIERlZmF1bHQgVVJMIGZvciB0aGUgbW9kZWwncyByZXByZXNlbnRhdGlvbiBvbiB0aGUgc2VydmVyIC0tIGlmIHlvdSdyZVxuICAgIC8vIHVzaW5nIEJhY2tib25lJ3MgcmVzdGZ1bCBtZXRob2RzLCBvdmVycmlkZSB0aGlzIHRvIGNoYW5nZSB0aGUgZW5kcG9pbnRcbiAgICAvLyB0aGF0IHdpbGwgYmUgY2FsbGVkLlxuICAgIHVybDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYmFzZSA9XG4gICAgICAgIF8ucmVzdWx0KHRoaXMsICd1cmxSb290JykgfHxcbiAgICAgICAgXy5yZXN1bHQodGhpcy5jb2xsZWN0aW9uLCAndXJsJykgfHxcbiAgICAgICAgdXJsRXJyb3IoKTtcbiAgICAgIGlmICh0aGlzLmlzTmV3KCkpIHJldHVybiBiYXNlO1xuICAgICAgcmV0dXJuIGJhc2UucmVwbGFjZSgvKFteXFwvXSkkLywgJyQxLycpICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuaWQpO1xuICAgIH0sXG5cbiAgICAvLyAqKnBhcnNlKiogY29udmVydHMgYSByZXNwb25zZSBpbnRvIHRoZSBoYXNoIG9mIGF0dHJpYnV0ZXMgdG8gYmUgYHNldGAgb25cbiAgICAvLyB0aGUgbW9kZWwuIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIGlzIGp1c3QgdG8gcGFzcyB0aGUgcmVzcG9uc2UgYWxvbmcuXG4gICAgcGFyc2U6IGZ1bmN0aW9uKHJlc3AsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiByZXNwO1xuICAgIH0sXG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgbW9kZWwgd2l0aCBpZGVudGljYWwgYXR0cmlidXRlcyB0byB0aGlzIG9uZS5cbiAgICBjbG9uZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcy5hdHRyaWJ1dGVzKTtcbiAgICB9LFxuXG4gICAgLy8gQSBtb2RlbCBpcyBuZXcgaWYgaXQgaGFzIG5ldmVyIGJlZW4gc2F2ZWQgdG8gdGhlIHNlcnZlciwgYW5kIGxhY2tzIGFuIGlkLlxuICAgIGlzTmV3OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAhdGhpcy5oYXModGhpcy5pZEF0dHJpYnV0ZSk7XG4gICAgfSxcblxuICAgIC8vIENoZWNrIGlmIHRoZSBtb2RlbCBpcyBjdXJyZW50bHkgaW4gYSB2YWxpZCBzdGF0ZS5cbiAgICBpc1ZhbGlkOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGUoe30sIF8uZXh0ZW5kKG9wdGlvbnMgfHwge30sIHsgdmFsaWRhdGU6IHRydWUgfSkpO1xuICAgIH0sXG5cbiAgICAvLyBSdW4gdmFsaWRhdGlvbiBhZ2FpbnN0IHRoZSBuZXh0IGNvbXBsZXRlIHNldCBvZiBtb2RlbCBhdHRyaWJ1dGVzLFxuICAgIC8vIHJldHVybmluZyBgdHJ1ZWAgaWYgYWxsIGlzIHdlbGwuIE90aGVyd2lzZSwgZmlyZSBhbiBgXCJpbnZhbGlkXCJgIGV2ZW50LlxuICAgIF92YWxpZGF0ZTogZnVuY3Rpb24oYXR0cnMsIG9wdGlvbnMpIHtcbiAgICAgIGlmICghb3B0aW9ucy52YWxpZGF0ZSB8fCAhdGhpcy52YWxpZGF0ZSkgcmV0dXJuIHRydWU7XG4gICAgICBhdHRycyA9IF8uZXh0ZW5kKHt9LCB0aGlzLmF0dHJpYnV0ZXMsIGF0dHJzKTtcbiAgICAgIHZhciBlcnJvciA9IHRoaXMudmFsaWRhdGlvbkVycm9yID0gdGhpcy52YWxpZGF0ZShhdHRycywgb3B0aW9ucykgfHwgbnVsbDtcbiAgICAgIGlmICghZXJyb3IpIHJldHVybiB0cnVlO1xuICAgICAgdGhpcy50cmlnZ2VyKCdpbnZhbGlkJywgdGhpcywgZXJyb3IsIF8uZXh0ZW5kKG9wdGlvbnMsIHt2YWxpZGF0aW9uRXJyb3I6IGVycm9yfSkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICB9KTtcblxuICAvLyBVbmRlcnNjb3JlIG1ldGhvZHMgdGhhdCB3ZSB3YW50IHRvIGltcGxlbWVudCBvbiB0aGUgTW9kZWwuXG4gIHZhciBtb2RlbE1ldGhvZHMgPSBbJ2tleXMnLCAndmFsdWVzJywgJ3BhaXJzJywgJ2ludmVydCcsICdwaWNrJywgJ29taXQnXTtcblxuICAvLyBNaXggaW4gZWFjaCBVbmRlcnNjb3JlIG1ldGhvZCBhcyBhIHByb3h5IHRvIGBNb2RlbCNhdHRyaWJ1dGVzYC5cbiAgXy5lYWNoKG1vZGVsTWV0aG9kcywgZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgTW9kZWwucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgYXJncy51bnNoaWZ0KHRoaXMuYXR0cmlidXRlcyk7XG4gICAgICByZXR1cm4gX1ttZXRob2RdLmFwcGx5KF8sIGFyZ3MpO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIEJhY2tib25lLkNvbGxlY3Rpb25cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIElmIG1vZGVscyB0ZW5kIHRvIHJlcHJlc2VudCBhIHNpbmdsZSByb3cgb2YgZGF0YSwgYSBCYWNrYm9uZSBDb2xsZWN0aW9uIGlzXG4gIC8vIG1vcmUgYW5hbGFnb3VzIHRvIGEgdGFibGUgZnVsbCBvZiBkYXRhIC4uLiBvciBhIHNtYWxsIHNsaWNlIG9yIHBhZ2Ugb2YgdGhhdFxuICAvLyB0YWJsZSwgb3IgYSBjb2xsZWN0aW9uIG9mIHJvd3MgdGhhdCBiZWxvbmcgdG9nZXRoZXIgZm9yIGEgcGFydGljdWxhciByZWFzb25cbiAgLy8gLS0gYWxsIG9mIHRoZSBtZXNzYWdlcyBpbiB0aGlzIHBhcnRpY3VsYXIgZm9sZGVyLCBhbGwgb2YgdGhlIGRvY3VtZW50c1xuICAvLyBiZWxvbmdpbmcgdG8gdGhpcyBwYXJ0aWN1bGFyIGF1dGhvciwgYW5kIHNvIG9uLiBDb2xsZWN0aW9ucyBtYWludGFpblxuICAvLyBpbmRleGVzIG9mIHRoZWlyIG1vZGVscywgYm90aCBpbiBvcmRlciwgYW5kIGZvciBsb29rdXAgYnkgYGlkYC5cblxuICAvLyBDcmVhdGUgYSBuZXcgKipDb2xsZWN0aW9uKiosIHBlcmhhcHMgdG8gY29udGFpbiBhIHNwZWNpZmljIHR5cGUgb2YgYG1vZGVsYC5cbiAgLy8gSWYgYSBgY29tcGFyYXRvcmAgaXMgc3BlY2lmaWVkLCB0aGUgQ29sbGVjdGlvbiB3aWxsIG1haW50YWluXG4gIC8vIGl0cyBtb2RlbHMgaW4gc29ydCBvcmRlciwgYXMgdGhleSdyZSBhZGRlZCBhbmQgcmVtb3ZlZC5cbiAgdmFyIENvbGxlY3Rpb24gPSBCYWNrYm9uZS5Db2xsZWN0aW9uID0gZnVuY3Rpb24obW9kZWxzLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyB8fCAob3B0aW9ucyA9IHt9KTtcbiAgICBpZiAob3B0aW9ucy5tb2RlbCkgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWw7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyYXRvciAhPT0gdm9pZCAwKSB0aGlzLmNvbXBhcmF0b3IgPSBvcHRpb25zLmNvbXBhcmF0b3I7XG4gICAgdGhpcy5fcmVzZXQoKTtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAobW9kZWxzKSB0aGlzLnJlc2V0KG1vZGVscywgXy5leHRlbmQoe3NpbGVudDogdHJ1ZX0sIG9wdGlvbnMpKTtcbiAgfTtcblxuICAvLyBEZWZhdWx0IG9wdGlvbnMgZm9yIGBDb2xsZWN0aW9uI3NldGAuXG4gIHZhciBzZXRPcHRpb25zID0ge2FkZDogdHJ1ZSwgcmVtb3ZlOiB0cnVlLCBtZXJnZTogdHJ1ZX07XG4gIHZhciBhZGRPcHRpb25zID0ge2FkZDogdHJ1ZSwgcmVtb3ZlOiBmYWxzZX07XG5cbiAgLy8gRGVmaW5lIHRoZSBDb2xsZWN0aW9uJ3MgaW5oZXJpdGFibGUgbWV0aG9kcy5cbiAgXy5leHRlbmQoQ29sbGVjdGlvbi5wcm90b3R5cGUsIEV2ZW50cywge1xuXG4gICAgLy8gVGhlIGRlZmF1bHQgbW9kZWwgZm9yIGEgY29sbGVjdGlvbiBpcyBqdXN0IGEgKipCYWNrYm9uZS5Nb2RlbCoqLlxuICAgIC8vIFRoaXMgc2hvdWxkIGJlIG92ZXJyaWRkZW4gaW4gbW9zdCBjYXNlcy5cbiAgICBtb2RlbDogTW9kZWwsXG5cbiAgICAvLyBJbml0aWFsaXplIGlzIGFuIGVtcHR5IGZ1bmN0aW9uIGJ5IGRlZmF1bHQuIE92ZXJyaWRlIGl0IHdpdGggeW91ciBvd25cbiAgICAvLyBpbml0aWFsaXphdGlvbiBsb2dpYy5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbigpe30sXG5cbiAgICAvLyBUaGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiBhIENvbGxlY3Rpb24gaXMgYW4gYXJyYXkgb2YgdGhlXG4gICAgLy8gbW9kZWxzJyBhdHRyaWJ1dGVzLlxuICAgIHRvSlNPTjogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKG1vZGVsKXsgcmV0dXJuIG1vZGVsLnRvSlNPTihvcHRpb25zKTsgfSk7XG4gICAgfSxcblxuICAgIC8vIFByb3h5IGBCYWNrYm9uZS5zeW5jYCBieSBkZWZhdWx0LlxuICAgIHN5bmM6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIEJhY2tib25lLnN5bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9LFxuXG4gICAgLy8gQWRkIGEgbW9kZWwsIG9yIGxpc3Qgb2YgbW9kZWxzIHRvIHRoZSBzZXQuXG4gICAgYWRkOiBmdW5jdGlvbihtb2RlbHMsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldChtb2RlbHMsIF8uZXh0ZW5kKHttZXJnZTogZmFsc2V9LCBvcHRpb25zLCBhZGRPcHRpb25zKSk7XG4gICAgfSxcblxuICAgIC8vIFJlbW92ZSBhIG1vZGVsLCBvciBhIGxpc3Qgb2YgbW9kZWxzIGZyb20gdGhlIHNldC5cbiAgICByZW1vdmU6IGZ1bmN0aW9uKG1vZGVscywgb3B0aW9ucykge1xuICAgICAgdmFyIHNpbmd1bGFyID0gIV8uaXNBcnJheShtb2RlbHMpO1xuICAgICAgbW9kZWxzID0gc2luZ3VsYXIgPyBbbW9kZWxzXSA6IF8uY2xvbmUobW9kZWxzKTtcbiAgICAgIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG4gICAgICB2YXIgaSwgbCwgaW5kZXgsIG1vZGVsO1xuICAgICAgZm9yIChpID0gMCwgbCA9IG1vZGVscy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbW9kZWwgPSBtb2RlbHNbaV0gPSB0aGlzLmdldChtb2RlbHNbaV0pO1xuICAgICAgICBpZiAoIW1vZGVsKSBjb250aW51ZTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2J5SWRbbW9kZWwuaWRdO1xuICAgICAgICBkZWxldGUgdGhpcy5fYnlJZFttb2RlbC5jaWRdO1xuICAgICAgICBpbmRleCA9IHRoaXMuaW5kZXhPZihtb2RlbCk7XG4gICAgICAgIHRoaXMubW9kZWxzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMubGVuZ3RoLS07XG4gICAgICAgIGlmICghb3B0aW9ucy5zaWxlbnQpIHtcbiAgICAgICAgICBvcHRpb25zLmluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgbW9kZWwudHJpZ2dlcigncmVtb3ZlJywgbW9kZWwsIHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3JlbW92ZVJlZmVyZW5jZShtb2RlbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2luZ3VsYXIgPyBtb2RlbHNbMF0gOiBtb2RlbHM7XG4gICAgfSxcblxuICAgIC8vIFVwZGF0ZSBhIGNvbGxlY3Rpb24gYnkgYHNldGAtaW5nIGEgbmV3IGxpc3Qgb2YgbW9kZWxzLCBhZGRpbmcgbmV3IG9uZXMsXG4gICAgLy8gcmVtb3ZpbmcgbW9kZWxzIHRoYXQgYXJlIG5vIGxvbmdlciBwcmVzZW50LCBhbmQgbWVyZ2luZyBtb2RlbHMgdGhhdFxuICAgIC8vIGFscmVhZHkgZXhpc3QgaW4gdGhlIGNvbGxlY3Rpb24sIGFzIG5lY2Vzc2FyeS4gU2ltaWxhciB0byAqKk1vZGVsI3NldCoqLFxuICAgIC8vIHRoZSBjb3JlIG9wZXJhdGlvbiBmb3IgdXBkYXRpbmcgdGhlIGRhdGEgY29udGFpbmVkIGJ5IHRoZSBjb2xsZWN0aW9uLlxuICAgIHNldDogZnVuY3Rpb24obW9kZWxzLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gXy5kZWZhdWx0cyh7fSwgb3B0aW9ucywgc2V0T3B0aW9ucyk7XG4gICAgICBpZiAob3B0aW9ucy5wYXJzZSkgbW9kZWxzID0gdGhpcy5wYXJzZShtb2RlbHMsIG9wdGlvbnMpO1xuICAgICAgdmFyIHNpbmd1bGFyID0gIV8uaXNBcnJheShtb2RlbHMpO1xuICAgICAgbW9kZWxzID0gc2luZ3VsYXIgPyAobW9kZWxzID8gW21vZGVsc10gOiBbXSkgOiBfLmNsb25lKG1vZGVscyk7XG4gICAgICB2YXIgaSwgbCwgaWQsIG1vZGVsLCBhdHRycywgZXhpc3RpbmcsIHNvcnQ7XG4gICAgICB2YXIgYXQgPSBvcHRpb25zLmF0O1xuICAgICAgdmFyIHRhcmdldE1vZGVsID0gdGhpcy5tb2RlbDtcbiAgICAgIHZhciBzb3J0YWJsZSA9IHRoaXMuY29tcGFyYXRvciAmJiAoYXQgPT0gbnVsbCkgJiYgb3B0aW9ucy5zb3J0ICE9PSBmYWxzZTtcbiAgICAgIHZhciBzb3J0QXR0ciA9IF8uaXNTdHJpbmcodGhpcy5jb21wYXJhdG9yKSA/IHRoaXMuY29tcGFyYXRvciA6IG51bGw7XG4gICAgICB2YXIgdG9BZGQgPSBbXSwgdG9SZW1vdmUgPSBbXSwgbW9kZWxNYXAgPSB7fTtcbiAgICAgIHZhciBhZGQgPSBvcHRpb25zLmFkZCwgbWVyZ2UgPSBvcHRpb25zLm1lcmdlLCByZW1vdmUgPSBvcHRpb25zLnJlbW92ZTtcbiAgICAgIHZhciBvcmRlciA9ICFzb3J0YWJsZSAmJiBhZGQgJiYgcmVtb3ZlID8gW10gOiBmYWxzZTtcblxuICAgICAgLy8gVHVybiBiYXJlIG9iamVjdHMgaW50byBtb2RlbCByZWZlcmVuY2VzLCBhbmQgcHJldmVudCBpbnZhbGlkIG1vZGVsc1xuICAgICAgLy8gZnJvbSBiZWluZyBhZGRlZC5cbiAgICAgIGZvciAoaSA9IDAsIGwgPSBtb2RlbHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGF0dHJzID0gbW9kZWxzW2ldIHx8IHt9O1xuICAgICAgICBpZiAoYXR0cnMgaW5zdGFuY2VvZiBNb2RlbCkge1xuICAgICAgICAgIGlkID0gbW9kZWwgPSBhdHRycztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZCA9IGF0dHJzW3RhcmdldE1vZGVsLnByb3RvdHlwZS5pZEF0dHJpYnV0ZSB8fCAnaWQnXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGEgZHVwbGljYXRlIGlzIGZvdW5kLCBwcmV2ZW50IGl0IGZyb20gYmVpbmcgYWRkZWQgYW5kXG4gICAgICAgIC8vIG9wdGlvbmFsbHkgbWVyZ2UgaXQgaW50byB0aGUgZXhpc3RpbmcgbW9kZWwuXG4gICAgICAgIGlmIChleGlzdGluZyA9IHRoaXMuZ2V0KGlkKSkge1xuICAgICAgICAgIGlmIChyZW1vdmUpIG1vZGVsTWFwW2V4aXN0aW5nLmNpZF0gPSB0cnVlO1xuICAgICAgICAgIGlmIChtZXJnZSkge1xuICAgICAgICAgICAgYXR0cnMgPSBhdHRycyA9PT0gbW9kZWwgPyBtb2RlbC5hdHRyaWJ1dGVzIDogYXR0cnM7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5wYXJzZSkgYXR0cnMgPSBleGlzdGluZy5wYXJzZShhdHRycywgb3B0aW9ucyk7XG4gICAgICAgICAgICBleGlzdGluZy5zZXQoYXR0cnMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHNvcnRhYmxlICYmICFzb3J0ICYmIGV4aXN0aW5nLmhhc0NoYW5nZWQoc29ydEF0dHIpKSBzb3J0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbW9kZWxzW2ldID0gZXhpc3Rpbmc7XG5cbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIG5ldywgdmFsaWQgbW9kZWwsIHB1c2ggaXQgdG8gdGhlIGB0b0FkZGAgbGlzdC5cbiAgICAgICAgfSBlbHNlIGlmIChhZGQpIHtcbiAgICAgICAgICBtb2RlbCA9IG1vZGVsc1tpXSA9IHRoaXMuX3ByZXBhcmVNb2RlbChhdHRycywgb3B0aW9ucyk7XG4gICAgICAgICAgaWYgKCFtb2RlbCkgY29udGludWU7XG4gICAgICAgICAgdG9BZGQucHVzaChtb2RlbCk7XG4gICAgICAgICAgdGhpcy5fYWRkUmVmZXJlbmNlKG1vZGVsLCBvcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvIG5vdCBhZGQgbXVsdGlwbGUgbW9kZWxzIHdpdGggdGhlIHNhbWUgYGlkYC5cbiAgICAgICAgbW9kZWwgPSBleGlzdGluZyB8fCBtb2RlbDtcbiAgICAgICAgaWYgKG9yZGVyICYmIChtb2RlbC5pc05ldygpIHx8ICFtb2RlbE1hcFttb2RlbC5pZF0pKSBvcmRlci5wdXNoKG1vZGVsKTtcbiAgICAgICAgbW9kZWxNYXBbbW9kZWwuaWRdID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlIG5vbmV4aXN0ZW50IG1vZGVscyBpZiBhcHByb3ByaWF0ZS5cbiAgICAgIGlmIChyZW1vdmUpIHtcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgICAgaWYgKCFtb2RlbE1hcFsobW9kZWwgPSB0aGlzLm1vZGVsc1tpXSkuY2lkXSkgdG9SZW1vdmUucHVzaChtb2RlbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvUmVtb3ZlLmxlbmd0aCkgdGhpcy5yZW1vdmUodG9SZW1vdmUsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICAvLyBTZWUgaWYgc29ydGluZyBpcyBuZWVkZWQsIHVwZGF0ZSBgbGVuZ3RoYCBhbmQgc3BsaWNlIGluIG5ldyBtb2RlbHMuXG4gICAgICBpZiAodG9BZGQubGVuZ3RoIHx8IChvcmRlciAmJiBvcmRlci5sZW5ndGgpKSB7XG4gICAgICAgIGlmIChzb3J0YWJsZSkgc29ydCA9IHRydWU7XG4gICAgICAgIHRoaXMubGVuZ3RoICs9IHRvQWRkLmxlbmd0aDtcbiAgICAgICAgaWYgKGF0ICE9IG51bGwpIHtcbiAgICAgICAgICBmb3IgKGkgPSAwLCBsID0gdG9BZGQubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVscy5zcGxpY2UoYXQgKyBpLCAwLCB0b0FkZFtpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChvcmRlcikgdGhpcy5tb2RlbHMubGVuZ3RoID0gMDtcbiAgICAgICAgICB2YXIgb3JkZXJlZE1vZGVscyA9IG9yZGVyIHx8IHRvQWRkO1xuICAgICAgICAgIGZvciAoaSA9IDAsIGwgPSBvcmRlcmVkTW9kZWxzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5tb2RlbHMucHVzaChvcmRlcmVkTW9kZWxzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gU2lsZW50bHkgc29ydCB0aGUgY29sbGVjdGlvbiBpZiBhcHByb3ByaWF0ZS5cbiAgICAgIGlmIChzb3J0KSB0aGlzLnNvcnQoe3NpbGVudDogdHJ1ZX0pO1xuXG4gICAgICAvLyBVbmxlc3Mgc2lsZW5jZWQsIGl0J3MgdGltZSB0byBmaXJlIGFsbCBhcHByb3ByaWF0ZSBhZGQvc29ydCBldmVudHMuXG4gICAgICBpZiAoIW9wdGlvbnMuc2lsZW50KSB7XG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSB0b0FkZC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAobW9kZWwgPSB0b0FkZFtpXSkudHJpZ2dlcignYWRkJywgbW9kZWwsIHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzb3J0IHx8IChvcmRlciAmJiBvcmRlci5sZW5ndGgpKSB0aGlzLnRyaWdnZXIoJ3NvcnQnLCB0aGlzLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmV0dXJuIHRoZSBhZGRlZCAob3IgbWVyZ2VkKSBtb2RlbCAob3IgbW9kZWxzKS5cbiAgICAgIHJldHVybiBzaW5ndWxhciA/IG1vZGVsc1swXSA6IG1vZGVscztcbiAgICB9LFxuXG4gICAgLy8gV2hlbiB5b3UgaGF2ZSBtb3JlIGl0ZW1zIHRoYW4geW91IHdhbnQgdG8gYWRkIG9yIHJlbW92ZSBpbmRpdmlkdWFsbHksXG4gICAgLy8geW91IGNhbiByZXNldCB0aGUgZW50aXJlIHNldCB3aXRoIGEgbmV3IGxpc3Qgb2YgbW9kZWxzLCB3aXRob3V0IGZpcmluZ1xuICAgIC8vIGFueSBncmFudWxhciBgYWRkYCBvciBgcmVtb3ZlYCBldmVudHMuIEZpcmVzIGByZXNldGAgd2hlbiBmaW5pc2hlZC5cbiAgICAvLyBVc2VmdWwgZm9yIGJ1bGsgb3BlcmF0aW9ucyBhbmQgb3B0aW1pemF0aW9ucy5cbiAgICByZXNldDogZnVuY3Rpb24obW9kZWxzLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zIHx8IChvcHRpb25zID0ge30pO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLm1vZGVscy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlUmVmZXJlbmNlKHRoaXMubW9kZWxzW2ldLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIG9wdGlvbnMucHJldmlvdXNNb2RlbHMgPSB0aGlzLm1vZGVscztcbiAgICAgIHRoaXMuX3Jlc2V0KCk7XG4gICAgICBtb2RlbHMgPSB0aGlzLmFkZChtb2RlbHMsIF8uZXh0ZW5kKHtzaWxlbnQ6IHRydWV9LCBvcHRpb25zKSk7XG4gICAgICBpZiAoIW9wdGlvbnMuc2lsZW50KSB0aGlzLnRyaWdnZXIoJ3Jlc2V0JywgdGhpcywgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gbW9kZWxzO1xuICAgIH0sXG5cbiAgICAvLyBBZGQgYSBtb2RlbCB0byB0aGUgZW5kIG9mIHRoZSBjb2xsZWN0aW9uLlxuICAgIHB1c2g6IGZ1bmN0aW9uKG1vZGVsLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGQobW9kZWwsIF8uZXh0ZW5kKHthdDogdGhpcy5sZW5ndGh9LCBvcHRpb25zKSk7XG4gICAgfSxcblxuICAgIC8vIFJlbW92ZSBhIG1vZGVsIGZyb20gdGhlIGVuZCBvZiB0aGUgY29sbGVjdGlvbi5cbiAgICBwb3A6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciBtb2RlbCA9IHRoaXMuYXQodGhpcy5sZW5ndGggLSAxKTtcbiAgICAgIHRoaXMucmVtb3ZlKG1vZGVsLCBvcHRpb25zKTtcbiAgICAgIHJldHVybiBtb2RlbDtcbiAgICB9LFxuXG4gICAgLy8gQWRkIGEgbW9kZWwgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgY29sbGVjdGlvbi5cbiAgICB1bnNoaWZ0OiBmdW5jdGlvbihtb2RlbCwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkKG1vZGVsLCBfLmV4dGVuZCh7YXQ6IDB9LCBvcHRpb25zKSk7XG4gICAgfSxcblxuICAgIC8vIFJlbW92ZSBhIG1vZGVsIGZyb20gdGhlIGJlZ2lubmluZyBvZiB0aGUgY29sbGVjdGlvbi5cbiAgICBzaGlmdDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgdmFyIG1vZGVsID0gdGhpcy5hdCgwKTtcbiAgICAgIHRoaXMucmVtb3ZlKG1vZGVsLCBvcHRpb25zKTtcbiAgICAgIHJldHVybiBtb2RlbDtcbiAgICB9LFxuXG4gICAgLy8gU2xpY2Ugb3V0IGEgc3ViLWFycmF5IG9mIG1vZGVscyBmcm9tIHRoZSBjb2xsZWN0aW9uLlxuICAgIHNsaWNlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzbGljZS5hcHBseSh0aGlzLm1vZGVscywgYXJndW1lbnRzKTtcbiAgICB9LFxuXG4gICAgLy8gR2V0IGEgbW9kZWwgZnJvbSB0aGUgc2V0IGJ5IGlkLlxuICAgIGdldDogZnVuY3Rpb24ob2JqKSB7XG4gICAgICBpZiAob2JqID09IG51bGwpIHJldHVybiB2b2lkIDA7XG4gICAgICByZXR1cm4gdGhpcy5fYnlJZFtvYmpdIHx8IHRoaXMuX2J5SWRbb2JqLmlkXSB8fCB0aGlzLl9ieUlkW29iai5jaWRdO1xuICAgIH0sXG5cbiAgICAvLyBHZXQgdGhlIG1vZGVsIGF0IHRoZSBnaXZlbiBpbmRleC5cbiAgICBhdDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1vZGVsc1tpbmRleF07XG4gICAgfSxcblxuICAgIC8vIFJldHVybiBtb2RlbHMgd2l0aCBtYXRjaGluZyBhdHRyaWJ1dGVzLiBVc2VmdWwgZm9yIHNpbXBsZSBjYXNlcyBvZlxuICAgIC8vIGBmaWx0ZXJgLlxuICAgIHdoZXJlOiBmdW5jdGlvbihhdHRycywgZmlyc3QpIHtcbiAgICAgIGlmIChfLmlzRW1wdHkoYXR0cnMpKSByZXR1cm4gZmlyc3QgPyB2b2lkIDAgOiBbXTtcbiAgICAgIHJldHVybiB0aGlzW2ZpcnN0ID8gJ2ZpbmQnIDogJ2ZpbHRlciddKGZ1bmN0aW9uKG1vZGVsKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBhdHRycykge1xuICAgICAgICAgIGlmIChhdHRyc1trZXldICE9PSBtb2RlbC5nZXQoa2V5KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybiB0aGUgZmlyc3QgbW9kZWwgd2l0aCBtYXRjaGluZyBhdHRyaWJ1dGVzLiBVc2VmdWwgZm9yIHNpbXBsZSBjYXNlc1xuICAgIC8vIG9mIGBmaW5kYC5cbiAgICBmaW5kV2hlcmU6IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgICByZXR1cm4gdGhpcy53aGVyZShhdHRycywgdHJ1ZSk7XG4gICAgfSxcblxuICAgIC8vIEZvcmNlIHRoZSBjb2xsZWN0aW9uIHRvIHJlLXNvcnQgaXRzZWxmLiBZb3UgZG9uJ3QgbmVlZCB0byBjYWxsIHRoaXMgdW5kZXJcbiAgICAvLyBub3JtYWwgY2lyY3Vtc3RhbmNlcywgYXMgdGhlIHNldCB3aWxsIG1haW50YWluIHNvcnQgb3JkZXIgYXMgZWFjaCBpdGVtXG4gICAgLy8gaXMgYWRkZWQuXG4gICAgc29ydDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgaWYgKCF0aGlzLmNvbXBhcmF0b3IpIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHNvcnQgYSBzZXQgd2l0aG91dCBhIGNvbXBhcmF0b3InKTtcbiAgICAgIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG5cbiAgICAgIC8vIFJ1biBzb3J0IGJhc2VkIG9uIHR5cGUgb2YgYGNvbXBhcmF0b3JgLlxuICAgICAgaWYgKF8uaXNTdHJpbmcodGhpcy5jb21wYXJhdG9yKSB8fCB0aGlzLmNvbXBhcmF0b3IubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHRoaXMubW9kZWxzID0gdGhpcy5zb3J0QnkodGhpcy5jb21wYXJhdG9yLCB0aGlzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubW9kZWxzLnNvcnQoXy5iaW5kKHRoaXMuY29tcGFyYXRvciwgdGhpcykpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9wdGlvbnMuc2lsZW50KSB0aGlzLnRyaWdnZXIoJ3NvcnQnLCB0aGlzLCBvcHRpb25zKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBQbHVjayBhbiBhdHRyaWJ1dGUgZnJvbSBlYWNoIG1vZGVsIGluIHRoZSBjb2xsZWN0aW9uLlxuICAgIHBsdWNrOiBmdW5jdGlvbihhdHRyKSB7XG4gICAgICByZXR1cm4gXy5pbnZva2UodGhpcy5tb2RlbHMsICdnZXQnLCBhdHRyKTtcbiAgICB9LFxuXG4gICAgLy8gRmV0Y2ggdGhlIGRlZmF1bHQgc2V0IG9mIG1vZGVscyBmb3IgdGhpcyBjb2xsZWN0aW9uLCByZXNldHRpbmcgdGhlXG4gICAgLy8gY29sbGVjdGlvbiB3aGVuIHRoZXkgYXJyaXZlLiBJZiBgcmVzZXQ6IHRydWVgIGlzIHBhc3NlZCwgdGhlIHJlc3BvbnNlXG4gICAgLy8gZGF0YSB3aWxsIGJlIHBhc3NlZCB0aHJvdWdoIHRoZSBgcmVzZXRgIG1ldGhvZCBpbnN0ZWFkIG9mIGBzZXRgLlxuICAgIGZldGNoOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyA/IF8uY2xvbmUob3B0aW9ucykgOiB7fTtcbiAgICAgIGlmIChvcHRpb25zLnBhcnNlID09PSB2b2lkIDApIG9wdGlvbnMucGFyc2UgPSB0cnVlO1xuICAgICAgdmFyIHN1Y2Nlc3MgPSBvcHRpb25zLnN1Y2Nlc3M7XG4gICAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgICBvcHRpb25zLnN1Y2Nlc3MgPSBmdW5jdGlvbihyZXNwKSB7XG4gICAgICAgIHZhciBtZXRob2QgPSBvcHRpb25zLnJlc2V0ID8gJ3Jlc2V0JyA6ICdzZXQnO1xuICAgICAgICBjb2xsZWN0aW9uW21ldGhvZF0ocmVzcCwgb3B0aW9ucyk7XG4gICAgICAgIGlmIChzdWNjZXNzKSBzdWNjZXNzKGNvbGxlY3Rpb24sIHJlc3AsIG9wdGlvbnMpO1xuICAgICAgICBjb2xsZWN0aW9uLnRyaWdnZXIoJ3N5bmMnLCBjb2xsZWN0aW9uLCByZXNwLCBvcHRpb25zKTtcbiAgICAgIH07XG4gICAgICB3cmFwRXJyb3IodGhpcywgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gdGhpcy5zeW5jKCdyZWFkJywgdGhpcywgb3B0aW9ucyk7XG4gICAgfSxcblxuICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBhIG1vZGVsIGluIHRoaXMgY29sbGVjdGlvbi4gQWRkIHRoZSBtb2RlbCB0byB0aGVcbiAgICAvLyBjb2xsZWN0aW9uIGltbWVkaWF0ZWx5LCB1bmxlc3MgYHdhaXQ6IHRydWVgIGlzIHBhc3NlZCwgaW4gd2hpY2ggY2FzZSB3ZVxuICAgIC8vIHdhaXQgZm9yIHRoZSBzZXJ2ZXIgdG8gYWdyZWUuXG4gICAgY3JlYXRlOiBmdW5jdGlvbihtb2RlbCwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgPyBfLmNsb25lKG9wdGlvbnMpIDoge307XG4gICAgICBpZiAoIShtb2RlbCA9IHRoaXMuX3ByZXBhcmVNb2RlbChtb2RlbCwgb3B0aW9ucykpKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAoIW9wdGlvbnMud2FpdCkgdGhpcy5hZGQobW9kZWwsIG9wdGlvbnMpO1xuICAgICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xuICAgICAgdmFyIHN1Y2Nlc3MgPSBvcHRpb25zLnN1Y2Nlc3M7XG4gICAgICBvcHRpb25zLnN1Y2Nlc3MgPSBmdW5jdGlvbihtb2RlbCwgcmVzcCkge1xuICAgICAgICBpZiAob3B0aW9ucy53YWl0KSBjb2xsZWN0aW9uLmFkZChtb2RlbCwgb3B0aW9ucyk7XG4gICAgICAgIGlmIChzdWNjZXNzKSBzdWNjZXNzKG1vZGVsLCByZXNwLCBvcHRpb25zKTtcbiAgICAgIH07XG4gICAgICBtb2RlbC5zYXZlKG51bGwsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIG1vZGVsO1xuICAgIH0sXG5cbiAgICAvLyAqKnBhcnNlKiogY29udmVydHMgYSByZXNwb25zZSBpbnRvIGEgbGlzdCBvZiBtb2RlbHMgdG8gYmUgYWRkZWQgdG8gdGhlXG4gICAgLy8gY29sbGVjdGlvbi4gVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gaXMganVzdCB0byBwYXNzIGl0IHRocm91Z2guXG4gICAgcGFyc2U6IGZ1bmN0aW9uKHJlc3AsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiByZXNwO1xuICAgIH0sXG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgY29sbGVjdGlvbiB3aXRoIGFuIGlkZW50aWNhbCBsaXN0IG9mIG1vZGVscyBhcyB0aGlzIG9uZS5cbiAgICBjbG9uZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcy5tb2RlbHMpO1xuICAgIH0sXG5cbiAgICAvLyBQcml2YXRlIG1ldGhvZCB0byByZXNldCBhbGwgaW50ZXJuYWwgc3RhdGUuIENhbGxlZCB3aGVuIHRoZSBjb2xsZWN0aW9uXG4gICAgLy8gaXMgZmlyc3QgaW5pdGlhbGl6ZWQgb3IgcmVzZXQuXG4gICAgX3Jlc2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMubW9kZWxzID0gW107XG4gICAgICB0aGlzLl9ieUlkICA9IHt9O1xuICAgIH0sXG5cbiAgICAvLyBQcmVwYXJlIGEgaGFzaCBvZiBhdHRyaWJ1dGVzIChvciBvdGhlciBtb2RlbCkgdG8gYmUgYWRkZWQgdG8gdGhpc1xuICAgIC8vIGNvbGxlY3Rpb24uXG4gICAgX3ByZXBhcmVNb2RlbDogZnVuY3Rpb24oYXR0cnMsIG9wdGlvbnMpIHtcbiAgICAgIGlmIChhdHRycyBpbnN0YW5jZW9mIE1vZGVsKSByZXR1cm4gYXR0cnM7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyA/IF8uY2xvbmUob3B0aW9ucykgOiB7fTtcbiAgICAgIG9wdGlvbnMuY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgICB2YXIgbW9kZWwgPSBuZXcgdGhpcy5tb2RlbChhdHRycywgb3B0aW9ucyk7XG4gICAgICBpZiAoIW1vZGVsLnZhbGlkYXRpb25FcnJvcikgcmV0dXJuIG1vZGVsO1xuICAgICAgdGhpcy50cmlnZ2VyKCdpbnZhbGlkJywgdGhpcywgbW9kZWwudmFsaWRhdGlvbkVycm9yLCBvcHRpb25zKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgLy8gSW50ZXJuYWwgbWV0aG9kIHRvIGNyZWF0ZSBhIG1vZGVsJ3MgdGllcyB0byBhIGNvbGxlY3Rpb24uXG4gICAgX2FkZFJlZmVyZW5jZTogZnVuY3Rpb24obW9kZWwsIG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuX2J5SWRbbW9kZWwuY2lkXSA9IG1vZGVsO1xuICAgICAgaWYgKG1vZGVsLmlkICE9IG51bGwpIHRoaXMuX2J5SWRbbW9kZWwuaWRdID0gbW9kZWw7XG4gICAgICBpZiAoIW1vZGVsLmNvbGxlY3Rpb24pIG1vZGVsLmNvbGxlY3Rpb24gPSB0aGlzO1xuICAgICAgbW9kZWwub24oJ2FsbCcsIHRoaXMuX29uTW9kZWxFdmVudCwgdGhpcyk7XG4gICAgfSxcblxuICAgIC8vIEludGVybmFsIG1ldGhvZCB0byBzZXZlciBhIG1vZGVsJ3MgdGllcyB0byBhIGNvbGxlY3Rpb24uXG4gICAgX3JlbW92ZVJlZmVyZW5jZTogZnVuY3Rpb24obW9kZWwsIG9wdGlvbnMpIHtcbiAgICAgIGlmICh0aGlzID09PSBtb2RlbC5jb2xsZWN0aW9uKSBkZWxldGUgbW9kZWwuY29sbGVjdGlvbjtcbiAgICAgIG1vZGVsLm9mZignYWxsJywgdGhpcy5fb25Nb2RlbEV2ZW50LCB0aGlzKTtcbiAgICB9LFxuXG4gICAgLy8gSW50ZXJuYWwgbWV0aG9kIGNhbGxlZCBldmVyeSB0aW1lIGEgbW9kZWwgaW4gdGhlIHNldCBmaXJlcyBhbiBldmVudC5cbiAgICAvLyBTZXRzIG5lZWQgdG8gdXBkYXRlIHRoZWlyIGluZGV4ZXMgd2hlbiBtb2RlbHMgY2hhbmdlIGlkcy4gQWxsIG90aGVyXG4gICAgLy8gZXZlbnRzIHNpbXBseSBwcm94eSB0aHJvdWdoLiBcImFkZFwiIGFuZCBcInJlbW92ZVwiIGV2ZW50cyB0aGF0IG9yaWdpbmF0ZVxuICAgIC8vIGluIG90aGVyIGNvbGxlY3Rpb25zIGFyZSBpZ25vcmVkLlxuICAgIF9vbk1vZGVsRXZlbnQ6IGZ1bmN0aW9uKGV2ZW50LCBtb2RlbCwgY29sbGVjdGlvbiwgb3B0aW9ucykge1xuICAgICAgaWYgKChldmVudCA9PT0gJ2FkZCcgfHwgZXZlbnQgPT09ICdyZW1vdmUnKSAmJiBjb2xsZWN0aW9uICE9PSB0aGlzKSByZXR1cm47XG4gICAgICBpZiAoZXZlbnQgPT09ICdkZXN0cm95JykgdGhpcy5yZW1vdmUobW9kZWwsIG9wdGlvbnMpO1xuICAgICAgaWYgKG1vZGVsICYmIGV2ZW50ID09PSAnY2hhbmdlOicgKyBtb2RlbC5pZEF0dHJpYnV0ZSkge1xuICAgICAgICBkZWxldGUgdGhpcy5fYnlJZFttb2RlbC5wcmV2aW91cyhtb2RlbC5pZEF0dHJpYnV0ZSldO1xuICAgICAgICBpZiAobW9kZWwuaWQgIT0gbnVsbCkgdGhpcy5fYnlJZFttb2RlbC5pZF0gPSBtb2RlbDtcbiAgICAgIH1cbiAgICAgIHRoaXMudHJpZ2dlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICB9KTtcblxuICAvLyBVbmRlcnNjb3JlIG1ldGhvZHMgdGhhdCB3ZSB3YW50IHRvIGltcGxlbWVudCBvbiB0aGUgQ29sbGVjdGlvbi5cbiAgLy8gOTAlIG9mIHRoZSBjb3JlIHVzZWZ1bG5lc3Mgb2YgQmFja2JvbmUgQ29sbGVjdGlvbnMgaXMgYWN0dWFsbHkgaW1wbGVtZW50ZWRcbiAgLy8gcmlnaHQgaGVyZTpcbiAgdmFyIG1ldGhvZHMgPSBbJ2ZvckVhY2gnLCAnZWFjaCcsICdtYXAnLCAnY29sbGVjdCcsICdyZWR1Y2UnLCAnZm9sZGwnLFxuICAgICdpbmplY3QnLCAncmVkdWNlUmlnaHQnLCAnZm9sZHInLCAnZmluZCcsICdkZXRlY3QnLCAnZmlsdGVyJywgJ3NlbGVjdCcsXG4gICAgJ3JlamVjdCcsICdldmVyeScsICdhbGwnLCAnc29tZScsICdhbnknLCAnaW5jbHVkZScsICdjb250YWlucycsICdpbnZva2UnLFxuICAgICdtYXgnLCAnbWluJywgJ3RvQXJyYXknLCAnc2l6ZScsICdmaXJzdCcsICdoZWFkJywgJ3Rha2UnLCAnaW5pdGlhbCcsICdyZXN0JyxcbiAgICAndGFpbCcsICdkcm9wJywgJ2xhc3QnLCAnd2l0aG91dCcsICdkaWZmZXJlbmNlJywgJ2luZGV4T2YnLCAnc2h1ZmZsZScsXG4gICAgJ2xhc3RJbmRleE9mJywgJ2lzRW1wdHknLCAnY2hhaW4nLCAnc2FtcGxlJ107XG5cbiAgLy8gTWl4IGluIGVhY2ggVW5kZXJzY29yZSBtZXRob2QgYXMgYSBwcm94eSB0byBgQ29sbGVjdGlvbiNtb2RlbHNgLlxuICBfLmVhY2gobWV0aG9kcywgZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgQ29sbGVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICBhcmdzLnVuc2hpZnQodGhpcy5tb2RlbHMpO1xuICAgICAgcmV0dXJuIF9bbWV0aG9kXS5hcHBseShfLCBhcmdzKTtcbiAgICB9O1xuICB9KTtcblxuICAvLyBVbmRlcnNjb3JlIG1ldGhvZHMgdGhhdCB0YWtlIGEgcHJvcGVydHkgbmFtZSBhcyBhbiBhcmd1bWVudC5cbiAgdmFyIGF0dHJpYnV0ZU1ldGhvZHMgPSBbJ2dyb3VwQnknLCAnY291bnRCeScsICdzb3J0QnknLCAnaW5kZXhCeSddO1xuXG4gIC8vIFVzZSBhdHRyaWJ1dGVzIGluc3RlYWQgb2YgcHJvcGVydGllcy5cbiAgXy5lYWNoKGF0dHJpYnV0ZU1ldGhvZHMsIGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIENvbGxlY3Rpb24ucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih2YWx1ZSwgY29udGV4dCkge1xuICAgICAgdmFyIGl0ZXJhdG9yID0gXy5pc0Z1bmN0aW9uKHZhbHVlKSA/IHZhbHVlIDogZnVuY3Rpb24obW9kZWwpIHtcbiAgICAgICAgcmV0dXJuIG1vZGVsLmdldCh2YWx1ZSk7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIF9bbWV0aG9kXSh0aGlzLm1vZGVscywgaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIEJhY2tib25lLlZpZXdcbiAgLy8gLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEJhY2tib25lIFZpZXdzIGFyZSBhbG1vc3QgbW9yZSBjb252ZW50aW9uIHRoYW4gdGhleSBhcmUgYWN0dWFsIGNvZGUuIEEgVmlld1xuICAvLyBpcyBzaW1wbHkgYSBKYXZhU2NyaXB0IG9iamVjdCB0aGF0IHJlcHJlc2VudHMgYSBsb2dpY2FsIGNodW5rIG9mIFVJIGluIHRoZVxuICAvLyBET00uIFRoaXMgbWlnaHQgYmUgYSBzaW5nbGUgaXRlbSwgYW4gZW50aXJlIGxpc3QsIGEgc2lkZWJhciBvciBwYW5lbCwgb3JcbiAgLy8gZXZlbiB0aGUgc3Vycm91bmRpbmcgZnJhbWUgd2hpY2ggd3JhcHMgeW91ciB3aG9sZSBhcHAuIERlZmluaW5nIGEgY2h1bmsgb2ZcbiAgLy8gVUkgYXMgYSAqKlZpZXcqKiBhbGxvd3MgeW91IHRvIGRlZmluZSB5b3VyIERPTSBldmVudHMgZGVjbGFyYXRpdmVseSwgd2l0aG91dFxuICAvLyBoYXZpbmcgdG8gd29ycnkgYWJvdXQgcmVuZGVyIG9yZGVyIC4uLiBhbmQgbWFrZXMgaXQgZWFzeSBmb3IgdGhlIHZpZXcgdG9cbiAgLy8gcmVhY3QgdG8gc3BlY2lmaWMgY2hhbmdlcyBpbiB0aGUgc3RhdGUgb2YgeW91ciBtb2RlbHMuXG5cbiAgLy8gQ3JlYXRpbmcgYSBCYWNrYm9uZS5WaWV3IGNyZWF0ZXMgaXRzIGluaXRpYWwgZWxlbWVudCBvdXRzaWRlIG9mIHRoZSBET00sXG4gIC8vIGlmIGFuIGV4aXN0aW5nIGVsZW1lbnQgaXMgbm90IHByb3ZpZGVkLi4uXG4gIHZhciBWaWV3ID0gQmFja2JvbmUuVmlldyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB0aGlzLmNpZCA9IF8udW5pcXVlSWQoJ3ZpZXcnKTtcbiAgICBvcHRpb25zIHx8IChvcHRpb25zID0ge30pO1xuICAgIF8uZXh0ZW5kKHRoaXMsIF8ucGljayhvcHRpb25zLCB2aWV3T3B0aW9ucykpO1xuICAgIHRoaXMuX2Vuc3VyZUVsZW1lbnQoKTtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmRlbGVnYXRlRXZlbnRzKCk7XG4gIH07XG5cbiAgLy8gQ2FjaGVkIHJlZ2V4IHRvIHNwbGl0IGtleXMgZm9yIGBkZWxlZ2F0ZWAuXG4gIHZhciBkZWxlZ2F0ZUV2ZW50U3BsaXR0ZXIgPSAvXihcXFMrKVxccyooLiopJC87XG5cbiAgLy8gTGlzdCBvZiB2aWV3IG9wdGlvbnMgdG8gYmUgbWVyZ2VkIGFzIHByb3BlcnRpZXMuXG4gIHZhciB2aWV3T3B0aW9ucyA9IFsnbW9kZWwnLCAnY29sbGVjdGlvbicsICdlbCcsICdpZCcsICdhdHRyaWJ1dGVzJywgJ2NsYXNzTmFtZScsICd0YWdOYW1lJywgJ2V2ZW50cyddO1xuXG4gIC8vIFNldCB1cCBhbGwgaW5oZXJpdGFibGUgKipCYWNrYm9uZS5WaWV3KiogcHJvcGVydGllcyBhbmQgbWV0aG9kcy5cbiAgXy5leHRlbmQoVmlldy5wcm90b3R5cGUsIEV2ZW50cywge1xuXG4gICAgLy8gVGhlIGRlZmF1bHQgYHRhZ05hbWVgIG9mIGEgVmlldydzIGVsZW1lbnQgaXMgYFwiZGl2XCJgLlxuICAgIHRhZ05hbWU6ICdkaXYnLFxuXG4gICAgLy8galF1ZXJ5IGRlbGVnYXRlIGZvciBlbGVtZW50IGxvb2t1cCwgc2NvcGVkIHRvIERPTSBlbGVtZW50cyB3aXRoaW4gdGhlXG4gICAgLy8gY3VycmVudCB2aWV3LiBUaGlzIHNob3VsZCBiZSBwcmVmZXJyZWQgdG8gZ2xvYmFsIGxvb2t1cHMgd2hlcmUgcG9zc2libGUuXG4gICAgJDogZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiB0aGlzLiRlbC5maW5kKHNlbGVjdG9yKTtcbiAgICB9LFxuXG4gICAgLy8gSW5pdGlhbGl6ZSBpcyBhbiBlbXB0eSBmdW5jdGlvbiBieSBkZWZhdWx0LiBPdmVycmlkZSBpdCB3aXRoIHlvdXIgb3duXG4gICAgLy8gaW5pdGlhbGl6YXRpb24gbG9naWMuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKXt9LFxuXG4gICAgLy8gKipyZW5kZXIqKiBpcyB0aGUgY29yZSBmdW5jdGlvbiB0aGF0IHlvdXIgdmlldyBzaG91bGQgb3ZlcnJpZGUsIGluIG9yZGVyXG4gICAgLy8gdG8gcG9wdWxhdGUgaXRzIGVsZW1lbnQgKGB0aGlzLmVsYCksIHdpdGggdGhlIGFwcHJvcHJpYXRlIEhUTUwuIFRoZVxuICAgIC8vIGNvbnZlbnRpb24gaXMgZm9yICoqcmVuZGVyKiogdG8gYWx3YXlzIHJldHVybiBgdGhpc2AuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBSZW1vdmUgdGhpcyB2aWV3IGJ5IHRha2luZyB0aGUgZWxlbWVudCBvdXQgb2YgdGhlIERPTSwgYW5kIHJlbW92aW5nIGFueVxuICAgIC8vIGFwcGxpY2FibGUgQmFja2JvbmUuRXZlbnRzIGxpc3RlbmVycy5cbiAgICByZW1vdmU6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy4kZWwucmVtb3ZlKCk7XG4gICAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcncyBlbGVtZW50IChgdGhpcy5lbGAgcHJvcGVydHkpLCBpbmNsdWRpbmcgZXZlbnRcbiAgICAvLyByZS1kZWxlZ2F0aW9uLlxuICAgIHNldEVsZW1lbnQ6IGZ1bmN0aW9uKGVsZW1lbnQsIGRlbGVnYXRlKSB7XG4gICAgICBpZiAodGhpcy4kZWwpIHRoaXMudW5kZWxlZ2F0ZUV2ZW50cygpO1xuICAgICAgdGhpcy4kZWwgPSBlbGVtZW50IGluc3RhbmNlb2YgQmFja2JvbmUuJCA/IGVsZW1lbnQgOiBCYWNrYm9uZS4kKGVsZW1lbnQpO1xuICAgICAgdGhpcy5lbCA9IHRoaXMuJGVsWzBdO1xuICAgICAgaWYgKGRlbGVnYXRlICE9PSBmYWxzZSkgdGhpcy5kZWxlZ2F0ZUV2ZW50cygpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIFNldCBjYWxsYmFja3MsIHdoZXJlIGB0aGlzLmV2ZW50c2AgaXMgYSBoYXNoIG9mXG4gICAgLy9cbiAgICAvLyAqe1wiZXZlbnQgc2VsZWN0b3JcIjogXCJjYWxsYmFja1wifSpcbiAgICAvL1xuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgJ21vdXNlZG93biAudGl0bGUnOiAgJ2VkaXQnLFxuICAgIC8vICAgICAgICdjbGljayAuYnV0dG9uJzogICAgICdzYXZlJyxcbiAgICAvLyAgICAgICAnY2xpY2sgLm9wZW4nOiAgICAgICBmdW5jdGlvbihlKSB7IC4uLiB9XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vIHBhaXJzLiBDYWxsYmFja3Mgd2lsbCBiZSBib3VuZCB0byB0aGUgdmlldywgd2l0aCBgdGhpc2Agc2V0IHByb3Blcmx5LlxuICAgIC8vIFVzZXMgZXZlbnQgZGVsZWdhdGlvbiBmb3IgZWZmaWNpZW5jeS5cbiAgICAvLyBPbWl0dGluZyB0aGUgc2VsZWN0b3IgYmluZHMgdGhlIGV2ZW50IHRvIGB0aGlzLmVsYC5cbiAgICAvLyBUaGlzIG9ubHkgd29ya3MgZm9yIGRlbGVnYXRlLWFibGUgZXZlbnRzOiBub3QgYGZvY3VzYCwgYGJsdXJgLCBhbmRcbiAgICAvLyBub3QgYGNoYW5nZWAsIGBzdWJtaXRgLCBhbmQgYHJlc2V0YCBpbiBJbnRlcm5ldCBFeHBsb3Jlci5cbiAgICBkZWxlZ2F0ZUV2ZW50czogZnVuY3Rpb24oZXZlbnRzKSB7XG4gICAgICBpZiAoIShldmVudHMgfHwgKGV2ZW50cyA9IF8ucmVzdWx0KHRoaXMsICdldmVudHMnKSkpKSByZXR1cm4gdGhpcztcbiAgICAgIHRoaXMudW5kZWxlZ2F0ZUV2ZW50cygpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGV2ZW50cykge1xuICAgICAgICB2YXIgbWV0aG9kID0gZXZlbnRzW2tleV07XG4gICAgICAgIGlmICghXy5pc0Z1bmN0aW9uKG1ldGhvZCkpIG1ldGhvZCA9IHRoaXNbZXZlbnRzW2tleV1dO1xuICAgICAgICBpZiAoIW1ldGhvZCkgY29udGludWU7XG5cbiAgICAgICAgdmFyIG1hdGNoID0ga2V5Lm1hdGNoKGRlbGVnYXRlRXZlbnRTcGxpdHRlcik7XG4gICAgICAgIHZhciBldmVudE5hbWUgPSBtYXRjaFsxXSwgc2VsZWN0b3IgPSBtYXRjaFsyXTtcbiAgICAgICAgbWV0aG9kID0gXy5iaW5kKG1ldGhvZCwgdGhpcyk7XG4gICAgICAgIGV2ZW50TmFtZSArPSAnLmRlbGVnYXRlRXZlbnRzJyArIHRoaXMuY2lkO1xuICAgICAgICBpZiAoc2VsZWN0b3IgPT09ICcnKSB7XG4gICAgICAgICAgdGhpcy4kZWwub24oZXZlbnROYW1lLCBtZXRob2QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuJGVsLm9uKGV2ZW50TmFtZSwgc2VsZWN0b3IsIG1ldGhvZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBDbGVhcnMgYWxsIGNhbGxiYWNrcyBwcmV2aW91c2x5IGJvdW5kIHRvIHRoZSB2aWV3IHdpdGggYGRlbGVnYXRlRXZlbnRzYC5cbiAgICAvLyBZb3UgdXN1YWxseSBkb24ndCBuZWVkIHRvIHVzZSB0aGlzLCBidXQgbWF5IHdpc2ggdG8gaWYgeW91IGhhdmUgbXVsdGlwbGVcbiAgICAvLyBCYWNrYm9uZSB2aWV3cyBhdHRhY2hlZCB0byB0aGUgc2FtZSBET00gZWxlbWVudC5cbiAgICB1bmRlbGVnYXRlRXZlbnRzOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuJGVsLm9mZignLmRlbGVnYXRlRXZlbnRzJyArIHRoaXMuY2lkKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBFbnN1cmUgdGhhdCB0aGUgVmlldyBoYXMgYSBET00gZWxlbWVudCB0byByZW5kZXIgaW50by5cbiAgICAvLyBJZiBgdGhpcy5lbGAgaXMgYSBzdHJpbmcsIHBhc3MgaXQgdGhyb3VnaCBgJCgpYCwgdGFrZSB0aGUgZmlyc3RcbiAgICAvLyBtYXRjaGluZyBlbGVtZW50LCBhbmQgcmUtYXNzaWduIGl0IHRvIGBlbGAuIE90aGVyd2lzZSwgY3JlYXRlXG4gICAgLy8gYW4gZWxlbWVudCBmcm9tIHRoZSBgaWRgLCBgY2xhc3NOYW1lYCBhbmQgYHRhZ05hbWVgIHByb3BlcnRpZXMuXG4gICAgX2Vuc3VyZUVsZW1lbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCF0aGlzLmVsKSB7XG4gICAgICAgIHZhciBhdHRycyA9IF8uZXh0ZW5kKHt9LCBfLnJlc3VsdCh0aGlzLCAnYXR0cmlidXRlcycpKTtcbiAgICAgICAgaWYgKHRoaXMuaWQpIGF0dHJzLmlkID0gXy5yZXN1bHQodGhpcywgJ2lkJyk7XG4gICAgICAgIGlmICh0aGlzLmNsYXNzTmFtZSkgYXR0cnNbJ2NsYXNzJ10gPSBfLnJlc3VsdCh0aGlzLCAnY2xhc3NOYW1lJyk7XG4gICAgICAgIHZhciAkZWwgPSBCYWNrYm9uZS4kKCc8JyArIF8ucmVzdWx0KHRoaXMsICd0YWdOYW1lJykgKyAnPicpLmF0dHIoYXR0cnMpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnQoJGVsLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEVsZW1lbnQoXy5yZXN1bHQodGhpcywgJ2VsJyksIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfSk7XG5cbiAgLy8gQmFja2JvbmUuc3luY1xuICAvLyAtLS0tLS0tLS0tLS0tXG5cbiAgLy8gT3ZlcnJpZGUgdGhpcyBmdW5jdGlvbiB0byBjaGFuZ2UgdGhlIG1hbm5lciBpbiB3aGljaCBCYWNrYm9uZSBwZXJzaXN0c1xuICAvLyBtb2RlbHMgdG8gdGhlIHNlcnZlci4gWW91IHdpbGwgYmUgcGFzc2VkIHRoZSB0eXBlIG9mIHJlcXVlc3QsIGFuZCB0aGVcbiAgLy8gbW9kZWwgaW4gcXVlc3Rpb24uIEJ5IGRlZmF1bHQsIG1ha2VzIGEgUkVTVGZ1bCBBamF4IHJlcXVlc3RcbiAgLy8gdG8gdGhlIG1vZGVsJ3MgYHVybCgpYC4gU29tZSBwb3NzaWJsZSBjdXN0b21pemF0aW9ucyBjb3VsZCBiZTpcbiAgLy9cbiAgLy8gKiBVc2UgYHNldFRpbWVvdXRgIHRvIGJhdGNoIHJhcGlkLWZpcmUgdXBkYXRlcyBpbnRvIGEgc2luZ2xlIHJlcXVlc3QuXG4gIC8vICogU2VuZCB1cCB0aGUgbW9kZWxzIGFzIFhNTCBpbnN0ZWFkIG9mIEpTT04uXG4gIC8vICogUGVyc2lzdCBtb2RlbHMgdmlhIFdlYlNvY2tldHMgaW5zdGVhZCBvZiBBamF4LlxuICAvL1xuICAvLyBUdXJuIG9uIGBCYWNrYm9uZS5lbXVsYXRlSFRUUGAgaW4gb3JkZXIgdG8gc2VuZCBgUFVUYCBhbmQgYERFTEVURWAgcmVxdWVzdHNcbiAgLy8gYXMgYFBPU1RgLCB3aXRoIGEgYF9tZXRob2RgIHBhcmFtZXRlciBjb250YWluaW5nIHRoZSB0cnVlIEhUVFAgbWV0aG9kLFxuICAvLyBhcyB3ZWxsIGFzIGFsbCByZXF1ZXN0cyB3aXRoIHRoZSBib2R5IGFzIGBhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRgXG4gIC8vIGluc3RlYWQgb2YgYGFwcGxpY2F0aW9uL2pzb25gIHdpdGggdGhlIG1vZGVsIGluIGEgcGFyYW0gbmFtZWQgYG1vZGVsYC5cbiAgLy8gVXNlZnVsIHdoZW4gaW50ZXJmYWNpbmcgd2l0aCBzZXJ2ZXItc2lkZSBsYW5ndWFnZXMgbGlrZSAqKlBIUCoqIHRoYXQgbWFrZVxuICAvLyBpdCBkaWZmaWN1bHQgdG8gcmVhZCB0aGUgYm9keSBvZiBgUFVUYCByZXF1ZXN0cy5cbiAgQmFja2JvbmUuc3luYyA9IGZ1bmN0aW9uKG1ldGhvZCwgbW9kZWwsIG9wdGlvbnMpIHtcbiAgICB2YXIgdHlwZSA9IG1ldGhvZE1hcFttZXRob2RdO1xuXG4gICAgLy8gRGVmYXVsdCBvcHRpb25zLCB1bmxlc3Mgc3BlY2lmaWVkLlxuICAgIF8uZGVmYXVsdHMob3B0aW9ucyB8fCAob3B0aW9ucyA9IHt9KSwge1xuICAgICAgZW11bGF0ZUhUVFA6IEJhY2tib25lLmVtdWxhdGVIVFRQLFxuICAgICAgZW11bGF0ZUpTT046IEJhY2tib25lLmVtdWxhdGVKU09OXG4gICAgfSk7XG5cbiAgICAvLyBEZWZhdWx0IEpTT04tcmVxdWVzdCBvcHRpb25zLlxuICAgIHZhciBwYXJhbXMgPSB7dHlwZTogdHlwZSwgZGF0YVR5cGU6ICdqc29uJ307XG5cbiAgICAvLyBFbnN1cmUgdGhhdCB3ZSBoYXZlIGEgVVJMLlxuICAgIGlmICghb3B0aW9ucy51cmwpIHtcbiAgICAgIHBhcmFtcy51cmwgPSBfLnJlc3VsdChtb2RlbCwgJ3VybCcpIHx8IHVybEVycm9yKCk7XG4gICAgfVxuXG4gICAgLy8gRW5zdXJlIHRoYXQgd2UgaGF2ZSB0aGUgYXBwcm9wcmlhdGUgcmVxdWVzdCBkYXRhLlxuICAgIGlmIChvcHRpb25zLmRhdGEgPT0gbnVsbCAmJiBtb2RlbCAmJiAobWV0aG9kID09PSAnY3JlYXRlJyB8fCBtZXRob2QgPT09ICd1cGRhdGUnIHx8IG1ldGhvZCA9PT0gJ3BhdGNoJykpIHtcbiAgICAgIHBhcmFtcy5jb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgIHBhcmFtcy5kYXRhID0gSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5hdHRycyB8fCBtb2RlbC50b0pTT04ob3B0aW9ucykpO1xuICAgIH1cblxuICAgIC8vIEZvciBvbGRlciBzZXJ2ZXJzLCBlbXVsYXRlIEpTT04gYnkgZW5jb2RpbmcgdGhlIHJlcXVlc3QgaW50byBhbiBIVE1MLWZvcm0uXG4gICAgaWYgKG9wdGlvbnMuZW11bGF0ZUpTT04pIHtcbiAgICAgIHBhcmFtcy5jb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnO1xuICAgICAgcGFyYW1zLmRhdGEgPSBwYXJhbXMuZGF0YSA/IHttb2RlbDogcGFyYW1zLmRhdGF9IDoge307XG4gICAgfVxuXG4gICAgLy8gRm9yIG9sZGVyIHNlcnZlcnMsIGVtdWxhdGUgSFRUUCBieSBtaW1pY2tpbmcgdGhlIEhUVFAgbWV0aG9kIHdpdGggYF9tZXRob2RgXG4gICAgLy8gQW5kIGFuIGBYLUhUVFAtTWV0aG9kLU92ZXJyaWRlYCBoZWFkZXIuXG4gICAgaWYgKG9wdGlvbnMuZW11bGF0ZUhUVFAgJiYgKHR5cGUgPT09ICdQVVQnIHx8IHR5cGUgPT09ICdERUxFVEUnIHx8IHR5cGUgPT09ICdQQVRDSCcpKSB7XG4gICAgICBwYXJhbXMudHlwZSA9ICdQT1NUJztcbiAgICAgIGlmIChvcHRpb25zLmVtdWxhdGVKU09OKSBwYXJhbXMuZGF0YS5fbWV0aG9kID0gdHlwZTtcbiAgICAgIHZhciBiZWZvcmVTZW5kID0gb3B0aW9ucy5iZWZvcmVTZW5kO1xuICAgICAgb3B0aW9ucy5iZWZvcmVTZW5kID0gZnVuY3Rpb24oeGhyKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLUhUVFAtTWV0aG9kLU92ZXJyaWRlJywgdHlwZSk7XG4gICAgICAgIGlmIChiZWZvcmVTZW5kKSByZXR1cm4gYmVmb3JlU2VuZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBEb24ndCBwcm9jZXNzIGRhdGEgb24gYSBub24tR0VUIHJlcXVlc3QuXG4gICAgaWYgKHBhcmFtcy50eXBlICE9PSAnR0VUJyAmJiAhb3B0aW9ucy5lbXVsYXRlSlNPTikge1xuICAgICAgcGFyYW1zLnByb2Nlc3NEYXRhID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gSWYgd2UncmUgc2VuZGluZyBhIGBQQVRDSGAgcmVxdWVzdCwgYW5kIHdlJ3JlIGluIGFuIG9sZCBJbnRlcm5ldCBFeHBsb3JlclxuICAgIC8vIHRoYXQgc3RpbGwgaGFzIEFjdGl2ZVggZW5hYmxlZCBieSBkZWZhdWx0LCBvdmVycmlkZSBqUXVlcnkgdG8gdXNlIHRoYXRcbiAgICAvLyBmb3IgWEhSIGluc3RlYWQuIFJlbW92ZSB0aGlzIGxpbmUgd2hlbiBqUXVlcnkgc3VwcG9ydHMgYFBBVENIYCBvbiBJRTguXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnUEFUQ0gnICYmIG5vWGhyUGF0Y2gpIHtcbiAgICAgIHBhcmFtcy54aHIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIik7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIE1ha2UgdGhlIHJlcXVlc3QsIGFsbG93aW5nIHRoZSB1c2VyIHRvIG92ZXJyaWRlIGFueSBBamF4IG9wdGlvbnMuXG4gICAgdmFyIHhociA9IG9wdGlvbnMueGhyID0gQmFja2JvbmUuYWpheChfLmV4dGVuZChwYXJhbXMsIG9wdGlvbnMpKTtcbiAgICBtb2RlbC50cmlnZ2VyKCdyZXF1ZXN0JywgbW9kZWwsIHhociwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHhocjtcbiAgfTtcblxuICB2YXIgbm9YaHJQYXRjaCA9XG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgISF3aW5kb3cuQWN0aXZlWE9iamVjdCAmJlxuICAgICAgISh3aW5kb3cuWE1MSHR0cFJlcXVlc3QgJiYgKG5ldyBYTUxIdHRwUmVxdWVzdCkuZGlzcGF0Y2hFdmVudCk7XG5cbiAgLy8gTWFwIGZyb20gQ1JVRCB0byBIVFRQIGZvciBvdXIgZGVmYXVsdCBgQmFja2JvbmUuc3luY2AgaW1wbGVtZW50YXRpb24uXG4gIHZhciBtZXRob2RNYXAgPSB7XG4gICAgJ2NyZWF0ZSc6ICdQT1NUJyxcbiAgICAndXBkYXRlJzogJ1BVVCcsXG4gICAgJ3BhdGNoJzogICdQQVRDSCcsXG4gICAgJ2RlbGV0ZSc6ICdERUxFVEUnLFxuICAgICdyZWFkJzogICAnR0VUJ1xuICB9O1xuXG4gIC8vIFNldCB0aGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiBgQmFja2JvbmUuYWpheGAgdG8gcHJveHkgdGhyb3VnaCB0byBgJGAuXG4gIC8vIE92ZXJyaWRlIHRoaXMgaWYgeW91J2QgbGlrZSB0byB1c2UgYSBkaWZmZXJlbnQgbGlicmFyeS5cbiAgQmFja2JvbmUuYWpheCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBCYWNrYm9uZS4kLmFqYXguYXBwbHkoQmFja2JvbmUuJCwgYXJndW1lbnRzKTtcbiAgfTtcblxuICAvLyBCYWNrYm9uZS5Sb3V0ZXJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gUm91dGVycyBtYXAgZmF1eC1VUkxzIHRvIGFjdGlvbnMsIGFuZCBmaXJlIGV2ZW50cyB3aGVuIHJvdXRlcyBhcmVcbiAgLy8gbWF0Y2hlZC4gQ3JlYXRpbmcgYSBuZXcgb25lIHNldHMgaXRzIGByb3V0ZXNgIGhhc2gsIGlmIG5vdCBzZXQgc3RhdGljYWxseS5cbiAgdmFyIFJvdXRlciA9IEJhY2tib25lLlJvdXRlciA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zIHx8IChvcHRpb25zID0ge30pO1xuICAgIGlmIChvcHRpb25zLnJvdXRlcykgdGhpcy5yb3V0ZXMgPSBvcHRpb25zLnJvdXRlcztcbiAgICB0aGlzLl9iaW5kUm91dGVzKCk7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgLy8gQ2FjaGVkIHJlZ3VsYXIgZXhwcmVzc2lvbnMgZm9yIG1hdGNoaW5nIG5hbWVkIHBhcmFtIHBhcnRzIGFuZCBzcGxhdHRlZFxuICAvLyBwYXJ0cyBvZiByb3V0ZSBzdHJpbmdzLlxuICB2YXIgb3B0aW9uYWxQYXJhbSA9IC9cXCgoLio/KVxcKS9nO1xuICB2YXIgbmFtZWRQYXJhbSAgICA9IC8oXFwoXFw/KT86XFx3Ky9nO1xuICB2YXIgc3BsYXRQYXJhbSAgICA9IC9cXCpcXHcrL2c7XG4gIHZhciBlc2NhcGVSZWdFeHAgID0gL1tcXC17fVxcW1xcXSs/LixcXFxcXFxeJHwjXFxzXS9nO1xuXG4gIC8vIFNldCB1cCBhbGwgaW5oZXJpdGFibGUgKipCYWNrYm9uZS5Sb3V0ZXIqKiBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzLlxuICBfLmV4dGVuZChSb3V0ZXIucHJvdG90eXBlLCBFdmVudHMsIHtcblxuICAgIC8vIEluaXRpYWxpemUgaXMgYW4gZW1wdHkgZnVuY3Rpb24gYnkgZGVmYXVsdC4gT3ZlcnJpZGUgaXQgd2l0aCB5b3VyIG93blxuICAgIC8vIGluaXRpYWxpemF0aW9uIGxvZ2ljLlxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCl7fSxcblxuICAgIC8vIE1hbnVhbGx5IGJpbmQgYSBzaW5nbGUgbmFtZWQgcm91dGUgdG8gYSBjYWxsYmFjay4gRm9yIGV4YW1wbGU6XG4gICAgLy9cbiAgICAvLyAgICAgdGhpcy5yb3V0ZSgnc2VhcmNoLzpxdWVyeS9wOm51bScsICdzZWFyY2gnLCBmdW5jdGlvbihxdWVyeSwgbnVtKSB7XG4gICAgLy8gICAgICAgLi4uXG4gICAgLy8gICAgIH0pO1xuICAgIC8vXG4gICAgcm91dGU6IGZ1bmN0aW9uKHJvdXRlLCBuYW1lLCBjYWxsYmFjaykge1xuICAgICAgaWYgKCFfLmlzUmVnRXhwKHJvdXRlKSkgcm91dGUgPSB0aGlzLl9yb3V0ZVRvUmVnRXhwKHJvdXRlKTtcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24obmFtZSkpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuYW1lO1xuICAgICAgICBuYW1lID0gJyc7XG4gICAgICB9XG4gICAgICBpZiAoIWNhbGxiYWNrKSBjYWxsYmFjayA9IHRoaXNbbmFtZV07XG4gICAgICB2YXIgcm91dGVyID0gdGhpcztcbiAgICAgIEJhY2tib25lLmhpc3Rvcnkucm91dGUocm91dGUsIGZ1bmN0aW9uKGZyYWdtZW50KSB7XG4gICAgICAgIHZhciBhcmdzID0gcm91dGVyLl9leHRyYWN0UGFyYW1ldGVycyhyb3V0ZSwgZnJhZ21lbnQpO1xuICAgICAgICByb3V0ZXIuZXhlY3V0ZShjYWxsYmFjaywgYXJncyk7XG4gICAgICAgIHJvdXRlci50cmlnZ2VyLmFwcGx5KHJvdXRlciwgWydyb3V0ZTonICsgbmFtZV0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgcm91dGVyLnRyaWdnZXIoJ3JvdXRlJywgbmFtZSwgYXJncyk7XG4gICAgICAgIEJhY2tib25lLmhpc3RvcnkudHJpZ2dlcigncm91dGUnLCByb3V0ZXIsIG5hbWUsIGFyZ3MpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gRXhlY3V0ZSBhIHJvdXRlIGhhbmRsZXIgd2l0aCB0aGUgcHJvdmlkZWQgcGFyYW1ldGVycy4gIFRoaXMgaXMgYW5cbiAgICAvLyBleGNlbGxlbnQgcGxhY2UgdG8gZG8gcHJlLXJvdXRlIHNldHVwIG9yIHBvc3Qtcm91dGUgY2xlYW51cC5cbiAgICBleGVjdXRlOiBmdW5jdGlvbihjYWxsYmFjaywgYXJncykge1xuICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9LFxuXG4gICAgLy8gU2ltcGxlIHByb3h5IHRvIGBCYWNrYm9uZS5oaXN0b3J5YCB0byBzYXZlIGEgZnJhZ21lbnQgaW50byB0aGUgaGlzdG9yeS5cbiAgICBuYXZpZ2F0ZTogZnVuY3Rpb24oZnJhZ21lbnQsIG9wdGlvbnMpIHtcbiAgICAgIEJhY2tib25lLmhpc3RvcnkubmF2aWdhdGUoZnJhZ21lbnQsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIEJpbmQgYWxsIGRlZmluZWQgcm91dGVzIHRvIGBCYWNrYm9uZS5oaXN0b3J5YC4gV2UgaGF2ZSB0byByZXZlcnNlIHRoZVxuICAgIC8vIG9yZGVyIG9mIHRoZSByb3V0ZXMgaGVyZSB0byBzdXBwb3J0IGJlaGF2aW9yIHdoZXJlIHRoZSBtb3N0IGdlbmVyYWxcbiAgICAvLyByb3V0ZXMgY2FuIGJlIGRlZmluZWQgYXQgdGhlIGJvdHRvbSBvZiB0aGUgcm91dGUgbWFwLlxuICAgIF9iaW5kUm91dGVzOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5yb3V0ZXMpIHJldHVybjtcbiAgICAgIHRoaXMucm91dGVzID0gXy5yZXN1bHQodGhpcywgJ3JvdXRlcycpO1xuICAgICAgdmFyIHJvdXRlLCByb3V0ZXMgPSBfLmtleXModGhpcy5yb3V0ZXMpO1xuICAgICAgd2hpbGUgKChyb3V0ZSA9IHJvdXRlcy5wb3AoKSkgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJvdXRlKHJvdXRlLCB0aGlzLnJvdXRlc1tyb3V0ZV0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgcm91dGUgc3RyaW5nIGludG8gYSByZWd1bGFyIGV4cHJlc3Npb24sIHN1aXRhYmxlIGZvciBtYXRjaGluZ1xuICAgIC8vIGFnYWluc3QgdGhlIGN1cnJlbnQgbG9jYXRpb24gaGFzaC5cbiAgICBfcm91dGVUb1JlZ0V4cDogZnVuY3Rpb24ocm91dGUpIHtcbiAgICAgIHJvdXRlID0gcm91dGUucmVwbGFjZShlc2NhcGVSZWdFeHAsICdcXFxcJCYnKVxuICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKG9wdGlvbmFsUGFyYW0sICcoPzokMSk/JylcbiAgICAgICAgICAgICAgICAgICAucmVwbGFjZShuYW1lZFBhcmFtLCBmdW5jdGlvbihtYXRjaCwgb3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25hbCA/IG1hdGNoIDogJyhbXi8/XSspJztcbiAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKHNwbGF0UGFyYW0sICcoW14/XSo/KScpO1xuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgcm91dGUgKyAnKD86XFxcXD8oW1xcXFxzXFxcXFNdKikpPyQnKTtcbiAgICB9LFxuXG4gICAgLy8gR2l2ZW4gYSByb3V0ZSwgYW5kIGEgVVJMIGZyYWdtZW50IHRoYXQgaXQgbWF0Y2hlcywgcmV0dXJuIHRoZSBhcnJheSBvZlxuICAgIC8vIGV4dHJhY3RlZCBkZWNvZGVkIHBhcmFtZXRlcnMuIEVtcHR5IG9yIHVubWF0Y2hlZCBwYXJhbWV0ZXJzIHdpbGwgYmVcbiAgICAvLyB0cmVhdGVkIGFzIGBudWxsYCB0byBub3JtYWxpemUgY3Jvc3MtYnJvd3NlciBiZWhhdmlvci5cbiAgICBfZXh0cmFjdFBhcmFtZXRlcnM6IGZ1bmN0aW9uKHJvdXRlLCBmcmFnbWVudCkge1xuICAgICAgdmFyIHBhcmFtcyA9IHJvdXRlLmV4ZWMoZnJhZ21lbnQpLnNsaWNlKDEpO1xuICAgICAgcmV0dXJuIF8ubWFwKHBhcmFtcywgZnVuY3Rpb24ocGFyYW0sIGkpIHtcbiAgICAgICAgLy8gRG9uJ3QgZGVjb2RlIHRoZSBzZWFyY2ggcGFyYW1zLlxuICAgICAgICBpZiAoaSA9PT0gcGFyYW1zLmxlbmd0aCAtIDEpIHJldHVybiBwYXJhbSB8fCBudWxsO1xuICAgICAgICByZXR1cm4gcGFyYW0gPyBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pIDogbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9KTtcblxuICAvLyBCYWNrYm9uZS5IaXN0b3J5XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBIYW5kbGVzIGNyb3NzLWJyb3dzZXIgaGlzdG9yeSBtYW5hZ2VtZW50LCBiYXNlZCBvbiBlaXRoZXJcbiAgLy8gW3B1c2hTdGF0ZV0oaHR0cDovL2RpdmVpbnRvaHRtbDUuaW5mby9oaXN0b3J5Lmh0bWwpIGFuZCByZWFsIFVSTHMsIG9yXG4gIC8vIFtvbmhhc2hjaGFuZ2VdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvRE9NL3dpbmRvdy5vbmhhc2hjaGFuZ2UpXG4gIC8vIGFuZCBVUkwgZnJhZ21lbnRzLiBJZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBuZWl0aGVyIChvbGQgSUUsIG5hdGNoKSxcbiAgLy8gZmFsbHMgYmFjayB0byBwb2xsaW5nLlxuICB2YXIgSGlzdG9yeSA9IEJhY2tib25lLkhpc3RvcnkgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gICAgXy5iaW5kQWxsKHRoaXMsICdjaGVja1VybCcpO1xuXG4gICAgLy8gRW5zdXJlIHRoYXQgYEhpc3RvcnlgIGNhbiBiZSB1c2VkIG91dHNpZGUgb2YgdGhlIGJyb3dzZXIuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uO1xuICAgICAgdGhpcy5oaXN0b3J5ID0gd2luZG93Lmhpc3Rvcnk7XG4gICAgfVxuICB9O1xuXG4gIC8vIENhY2hlZCByZWdleCBmb3Igc3RyaXBwaW5nIGEgbGVhZGluZyBoYXNoL3NsYXNoIGFuZCB0cmFpbGluZyBzcGFjZS5cbiAgdmFyIHJvdXRlU3RyaXBwZXIgPSAvXlsjXFwvXXxcXHMrJC9nO1xuXG4gIC8vIENhY2hlZCByZWdleCBmb3Igc3RyaXBwaW5nIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMuXG4gIHZhciByb290U3RyaXBwZXIgPSAvXlxcLyt8XFwvKyQvZztcblxuICAvLyBDYWNoZWQgcmVnZXggZm9yIGRldGVjdGluZyBNU0lFLlxuICB2YXIgaXNFeHBsb3JlciA9IC9tc2llIFtcXHcuXSsvO1xuXG4gIC8vIENhY2hlZCByZWdleCBmb3IgcmVtb3ZpbmcgYSB0cmFpbGluZyBzbGFzaC5cbiAgdmFyIHRyYWlsaW5nU2xhc2ggPSAvXFwvJC87XG5cbiAgLy8gQ2FjaGVkIHJlZ2V4IGZvciBzdHJpcHBpbmcgdXJscyBvZiBoYXNoLlxuICB2YXIgcGF0aFN0cmlwcGVyID0gLyMuKiQvO1xuXG4gIC8vIEhhcyB0aGUgaGlzdG9yeSBoYW5kbGluZyBhbHJlYWR5IGJlZW4gc3RhcnRlZD9cbiAgSGlzdG9yeS5zdGFydGVkID0gZmFsc2U7XG5cbiAgLy8gU2V0IHVwIGFsbCBpbmhlcml0YWJsZSAqKkJhY2tib25lLkhpc3RvcnkqKiBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzLlxuICBfLmV4dGVuZChIaXN0b3J5LnByb3RvdHlwZSwgRXZlbnRzLCB7XG5cbiAgICAvLyBUaGUgZGVmYXVsdCBpbnRlcnZhbCB0byBwb2xsIGZvciBoYXNoIGNoYW5nZXMsIGlmIG5lY2Vzc2FyeSwgaXNcbiAgICAvLyB0d2VudHkgdGltZXMgYSBzZWNvbmQuXG4gICAgaW50ZXJ2YWw6IDUwLFxuXG4gICAgLy8gQXJlIHdlIGF0IHRoZSBhcHAgcm9vdD9cbiAgICBhdFJvb3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvW15cXC9dJC8sICckJi8nKSA9PT0gdGhpcy5yb290O1xuICAgIH0sXG5cbiAgICAvLyBHZXRzIHRoZSB0cnVlIGhhc2ggdmFsdWUuIENhbm5vdCB1c2UgbG9jYXRpb24uaGFzaCBkaXJlY3RseSBkdWUgdG8gYnVnXG4gICAgLy8gaW4gRmlyZWZveCB3aGVyZSBsb2NhdGlvbi5oYXNoIHdpbGwgYWx3YXlzIGJlIGRlY29kZWQuXG4gICAgZ2V0SGFzaDogZnVuY3Rpb24od2luZG93KSB7XG4gICAgICB2YXIgbWF0Y2ggPSAod2luZG93IHx8IHRoaXMpLmxvY2F0aW9uLmhyZWYubWF0Y2goLyMoLiopJC8pO1xuICAgICAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0gOiAnJztcbiAgICB9LFxuXG4gICAgLy8gR2V0IHRoZSBjcm9zcy1icm93c2VyIG5vcm1hbGl6ZWQgVVJMIGZyYWdtZW50LCBlaXRoZXIgZnJvbSB0aGUgVVJMLFxuICAgIC8vIHRoZSBoYXNoLCBvciB0aGUgb3ZlcnJpZGUuXG4gICAgZ2V0RnJhZ21lbnQ6IGZ1bmN0aW9uKGZyYWdtZW50LCBmb3JjZVB1c2hTdGF0ZSkge1xuICAgICAgaWYgKGZyYWdtZW50ID09IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMuX2hhc1B1c2hTdGF0ZSB8fCAhdGhpcy5fd2FudHNIYXNoQ2hhbmdlIHx8IGZvcmNlUHVzaFN0YXRlKSB7XG4gICAgICAgICAgZnJhZ21lbnQgPSBkZWNvZGVVUkkodGhpcy5sb2NhdGlvbi5wYXRobmFtZSArIHRoaXMubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgICB2YXIgcm9vdCA9IHRoaXMucm9vdC5yZXBsYWNlKHRyYWlsaW5nU2xhc2gsICcnKTtcbiAgICAgICAgICBpZiAoIWZyYWdtZW50LmluZGV4T2Yocm9vdCkpIGZyYWdtZW50ID0gZnJhZ21lbnQuc2xpY2Uocm9vdC5sZW5ndGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZyYWdtZW50ID0gdGhpcy5nZXRIYXNoKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmcmFnbWVudC5yZXBsYWNlKHJvdXRlU3RyaXBwZXIsICcnKTtcbiAgICB9LFxuXG4gICAgLy8gU3RhcnQgdGhlIGhhc2ggY2hhbmdlIGhhbmRsaW5nLCByZXR1cm5pbmcgYHRydWVgIGlmIHRoZSBjdXJyZW50IFVSTCBtYXRjaGVzXG4gICAgLy8gYW4gZXhpc3Rpbmcgcm91dGUsIGFuZCBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICBzdGFydDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgaWYgKEhpc3Rvcnkuc3RhcnRlZCkgdGhyb3cgbmV3IEVycm9yKFwiQmFja2JvbmUuaGlzdG9yeSBoYXMgYWxyZWFkeSBiZWVuIHN0YXJ0ZWRcIik7XG4gICAgICBIaXN0b3J5LnN0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgICAvLyBGaWd1cmUgb3V0IHRoZSBpbml0aWFsIGNvbmZpZ3VyYXRpb24uIERvIHdlIG5lZWQgYW4gaWZyYW1lP1xuICAgICAgLy8gSXMgcHVzaFN0YXRlIGRlc2lyZWQgLi4uIGlzIGl0IGF2YWlsYWJsZT9cbiAgICAgIHRoaXMub3B0aW9ucyAgICAgICAgICA9IF8uZXh0ZW5kKHtyb290OiAnLyd9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgdGhpcy5yb290ICAgICAgICAgICAgID0gdGhpcy5vcHRpb25zLnJvb3Q7XG4gICAgICB0aGlzLl93YW50c0hhc2hDaGFuZ2UgPSB0aGlzLm9wdGlvbnMuaGFzaENoYW5nZSAhPT0gZmFsc2U7XG4gICAgICB0aGlzLl93YW50c1B1c2hTdGF0ZSAgPSAhIXRoaXMub3B0aW9ucy5wdXNoU3RhdGU7XG4gICAgICB0aGlzLl9oYXNQdXNoU3RhdGUgICAgPSAhISh0aGlzLm9wdGlvbnMucHVzaFN0YXRlICYmIHRoaXMuaGlzdG9yeSAmJiB0aGlzLmhpc3RvcnkucHVzaFN0YXRlKTtcbiAgICAgIHZhciBmcmFnbWVudCAgICAgICAgICA9IHRoaXMuZ2V0RnJhZ21lbnQoKTtcbiAgICAgIHZhciBkb2NNb2RlICAgICAgICAgICA9IGRvY3VtZW50LmRvY3VtZW50TW9kZTtcbiAgICAgIHZhciBvbGRJRSAgICAgICAgICAgICA9IChpc0V4cGxvcmVyLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKSAmJiAoIWRvY01vZGUgfHwgZG9jTW9kZSA8PSA3KSk7XG5cbiAgICAgIC8vIE5vcm1hbGl6ZSByb290IHRvIGFsd2F5cyBpbmNsdWRlIGEgbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2guXG4gICAgICB0aGlzLnJvb3QgPSAoJy8nICsgdGhpcy5yb290ICsgJy8nKS5yZXBsYWNlKHJvb3RTdHJpcHBlciwgJy8nKTtcblxuICAgICAgaWYgKG9sZElFICYmIHRoaXMuX3dhbnRzSGFzaENoYW5nZSkge1xuICAgICAgICB2YXIgZnJhbWUgPSBCYWNrYm9uZS4kKCc8aWZyYW1lIHNyYz1cImphdmFzY3JpcHQ6MFwiIHRhYmluZGV4PVwiLTFcIj4nKTtcbiAgICAgICAgdGhpcy5pZnJhbWUgPSBmcmFtZS5oaWRlKCkuYXBwZW5kVG8oJ2JvZHknKVswXS5jb250ZW50V2luZG93O1xuICAgICAgICB0aGlzLm5hdmlnYXRlKGZyYWdtZW50KTtcbiAgICAgIH1cblxuICAgICAgLy8gRGVwZW5kaW5nIG9uIHdoZXRoZXIgd2UncmUgdXNpbmcgcHVzaFN0YXRlIG9yIGhhc2hlcywgYW5kIHdoZXRoZXJcbiAgICAgIC8vICdvbmhhc2hjaGFuZ2UnIGlzIHN1cHBvcnRlZCwgZGV0ZXJtaW5lIGhvdyB3ZSBjaGVjayB0aGUgVVJMIHN0YXRlLlxuICAgICAgaWYgKHRoaXMuX2hhc1B1c2hTdGF0ZSkge1xuICAgICAgICBCYWNrYm9uZS4kKHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhpcy5jaGVja1VybCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3dhbnRzSGFzaENoYW5nZSAmJiAoJ29uaGFzaGNoYW5nZScgaW4gd2luZG93KSAmJiAhb2xkSUUpIHtcbiAgICAgICAgQmFja2JvbmUuJCh3aW5kb3cpLm9uKCdoYXNoY2hhbmdlJywgdGhpcy5jaGVja1VybCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3dhbnRzSGFzaENoYW5nZSkge1xuICAgICAgICB0aGlzLl9jaGVja1VybEludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5jaGVja1VybCwgdGhpcy5pbnRlcnZhbCk7XG4gICAgICB9XG5cbiAgICAgIC8vIERldGVybWluZSBpZiB3ZSBuZWVkIHRvIGNoYW5nZSB0aGUgYmFzZSB1cmwsIGZvciBhIHB1c2hTdGF0ZSBsaW5rXG4gICAgICAvLyBvcGVuZWQgYnkgYSBub24tcHVzaFN0YXRlIGJyb3dzZXIuXG4gICAgICB0aGlzLmZyYWdtZW50ID0gZnJhZ21lbnQ7XG4gICAgICB2YXIgbG9jID0gdGhpcy5sb2NhdGlvbjtcblxuICAgICAgLy8gVHJhbnNpdGlvbiBmcm9tIGhhc2hDaGFuZ2UgdG8gcHVzaFN0YXRlIG9yIHZpY2UgdmVyc2EgaWYgYm90aCBhcmVcbiAgICAgIC8vIHJlcXVlc3RlZC5cbiAgICAgIGlmICh0aGlzLl93YW50c0hhc2hDaGFuZ2UgJiYgdGhpcy5fd2FudHNQdXNoU3RhdGUpIHtcblxuICAgICAgICAvLyBJZiB3ZSd2ZSBzdGFydGVkIG9mZiB3aXRoIGEgcm91dGUgZnJvbSBhIGBwdXNoU3RhdGVgLWVuYWJsZWRcbiAgICAgICAgLy8gYnJvd3NlciwgYnV0IHdlJ3JlIGN1cnJlbnRseSBpbiBhIGJyb3dzZXIgdGhhdCBkb2Vzbid0IHN1cHBvcnQgaXQuLi5cbiAgICAgICAgaWYgKCF0aGlzLl9oYXNQdXNoU3RhdGUgJiYgIXRoaXMuYXRSb290KCkpIHtcbiAgICAgICAgICB0aGlzLmZyYWdtZW50ID0gdGhpcy5nZXRGcmFnbWVudChudWxsLCB0cnVlKTtcbiAgICAgICAgICB0aGlzLmxvY2F0aW9uLnJlcGxhY2UodGhpcy5yb290ICsgJyMnICsgdGhpcy5mcmFnbWVudCk7XG4gICAgICAgICAgLy8gUmV0dXJuIGltbWVkaWF0ZWx5IGFzIGJyb3dzZXIgd2lsbCBkbyByZWRpcmVjdCB0byBuZXcgdXJsXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgLy8gT3IgaWYgd2UndmUgc3RhcnRlZCBvdXQgd2l0aCBhIGhhc2gtYmFzZWQgcm91dGUsIGJ1dCB3ZSdyZSBjdXJyZW50bHlcbiAgICAgICAgLy8gaW4gYSBicm93c2VyIHdoZXJlIGl0IGNvdWxkIGJlIGBwdXNoU3RhdGVgLWJhc2VkIGluc3RlYWQuLi5cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9oYXNQdXNoU3RhdGUgJiYgdGhpcy5hdFJvb3QoKSAmJiBsb2MuaGFzaCkge1xuICAgICAgICAgIHRoaXMuZnJhZ21lbnQgPSB0aGlzLmdldEhhc2goKS5yZXBsYWNlKHJvdXRlU3RyaXBwZXIsICcnKTtcbiAgICAgICAgICB0aGlzLmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgdGhpcy5yb290ICsgdGhpcy5mcmFnbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5zaWxlbnQpIHJldHVybiB0aGlzLmxvYWRVcmwoKTtcbiAgICB9LFxuXG4gICAgLy8gRGlzYWJsZSBCYWNrYm9uZS5oaXN0b3J5LCBwZXJoYXBzIHRlbXBvcmFyaWx5LiBOb3QgdXNlZnVsIGluIGEgcmVhbCBhcHAsXG4gICAgLy8gYnV0IHBvc3NpYmx5IHVzZWZ1bCBmb3IgdW5pdCB0ZXN0aW5nIFJvdXRlcnMuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICBCYWNrYm9uZS4kKHdpbmRvdykub2ZmKCdwb3BzdGF0ZScsIHRoaXMuY2hlY2tVcmwpLm9mZignaGFzaGNoYW5nZScsIHRoaXMuY2hlY2tVcmwpO1xuICAgICAgaWYgKHRoaXMuX2NoZWNrVXJsSW50ZXJ2YWwpIGNsZWFySW50ZXJ2YWwodGhpcy5fY2hlY2tVcmxJbnRlcnZhbCk7XG4gICAgICBIaXN0b3J5LnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgLy8gQWRkIGEgcm91dGUgdG8gYmUgdGVzdGVkIHdoZW4gdGhlIGZyYWdtZW50IGNoYW5nZXMuIFJvdXRlcyBhZGRlZCBsYXRlclxuICAgIC8vIG1heSBvdmVycmlkZSBwcmV2aW91cyByb3V0ZXMuXG4gICAgcm91dGU6IGZ1bmN0aW9uKHJvdXRlLCBjYWxsYmFjaykge1xuICAgICAgdGhpcy5oYW5kbGVycy51bnNoaWZ0KHtyb3V0ZTogcm91dGUsIGNhbGxiYWNrOiBjYWxsYmFja30pO1xuICAgIH0sXG5cbiAgICAvLyBDaGVja3MgdGhlIGN1cnJlbnQgVVJMIHRvIHNlZSBpZiBpdCBoYXMgY2hhbmdlZCwgYW5kIGlmIGl0IGhhcyxcbiAgICAvLyBjYWxscyBgbG9hZFVybGAsIG5vcm1hbGl6aW5nIGFjcm9zcyB0aGUgaGlkZGVuIGlmcmFtZS5cbiAgICBjaGVja1VybDogZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLmdldEZyYWdtZW50KCk7XG4gICAgICBpZiAoY3VycmVudCA9PT0gdGhpcy5mcmFnbWVudCAmJiB0aGlzLmlmcmFtZSkge1xuICAgICAgICBjdXJyZW50ID0gdGhpcy5nZXRGcmFnbWVudCh0aGlzLmdldEhhc2godGhpcy5pZnJhbWUpKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50ID09PSB0aGlzLmZyYWdtZW50KSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAodGhpcy5pZnJhbWUpIHRoaXMubmF2aWdhdGUoY3VycmVudCk7XG4gICAgICB0aGlzLmxvYWRVcmwoKTtcbiAgICB9LFxuXG4gICAgLy8gQXR0ZW1wdCB0byBsb2FkIHRoZSBjdXJyZW50IFVSTCBmcmFnbWVudC4gSWYgYSByb3V0ZSBzdWNjZWVkcyB3aXRoIGFcbiAgICAvLyBtYXRjaCwgcmV0dXJucyBgdHJ1ZWAuIElmIG5vIGRlZmluZWQgcm91dGVzIG1hdGNoZXMgdGhlIGZyYWdtZW50LFxuICAgIC8vIHJldHVybnMgYGZhbHNlYC5cbiAgICBsb2FkVXJsOiBmdW5jdGlvbihmcmFnbWVudCkge1xuICAgICAgZnJhZ21lbnQgPSB0aGlzLmZyYWdtZW50ID0gdGhpcy5nZXRGcmFnbWVudChmcmFnbWVudCk7XG4gICAgICByZXR1cm4gXy5hbnkodGhpcy5oYW5kbGVycywgZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICBpZiAoaGFuZGxlci5yb3V0ZS50ZXN0KGZyYWdtZW50KSkge1xuICAgICAgICAgIGhhbmRsZXIuY2FsbGJhY2soZnJhZ21lbnQpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8gU2F2ZSBhIGZyYWdtZW50IGludG8gdGhlIGhhc2ggaGlzdG9yeSwgb3IgcmVwbGFjZSB0aGUgVVJMIHN0YXRlIGlmIHRoZVxuICAgIC8vICdyZXBsYWNlJyBvcHRpb24gaXMgcGFzc2VkLiBZb3UgYXJlIHJlc3BvbnNpYmxlIGZvciBwcm9wZXJseSBVUkwtZW5jb2RpbmdcbiAgICAvLyB0aGUgZnJhZ21lbnQgaW4gYWR2YW5jZS5cbiAgICAvL1xuICAgIC8vIFRoZSBvcHRpb25zIG9iamVjdCBjYW4gY29udGFpbiBgdHJpZ2dlcjogdHJ1ZWAgaWYgeW91IHdpc2ggdG8gaGF2ZSB0aGVcbiAgICAvLyByb3V0ZSBjYWxsYmFjayBiZSBmaXJlZCAobm90IHVzdWFsbHkgZGVzaXJhYmxlKSwgb3IgYHJlcGxhY2U6IHRydWVgLCBpZlxuICAgIC8vIHlvdSB3aXNoIHRvIG1vZGlmeSB0aGUgY3VycmVudCBVUkwgd2l0aG91dCBhZGRpbmcgYW4gZW50cnkgdG8gdGhlIGhpc3RvcnkuXG4gICAgbmF2aWdhdGU6IGZ1bmN0aW9uKGZyYWdtZW50LCBvcHRpb25zKSB7XG4gICAgICBpZiAoIUhpc3Rvcnkuc3RhcnRlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKCFvcHRpb25zIHx8IG9wdGlvbnMgPT09IHRydWUpIG9wdGlvbnMgPSB7dHJpZ2dlcjogISFvcHRpb25zfTtcblxuICAgICAgdmFyIHVybCA9IHRoaXMucm9vdCArIChmcmFnbWVudCA9IHRoaXMuZ2V0RnJhZ21lbnQoZnJhZ21lbnQgfHwgJycpKTtcblxuICAgICAgLy8gU3RyaXAgdGhlIGhhc2ggZm9yIG1hdGNoaW5nLlxuICAgICAgZnJhZ21lbnQgPSBmcmFnbWVudC5yZXBsYWNlKHBhdGhTdHJpcHBlciwgJycpO1xuXG4gICAgICBpZiAodGhpcy5mcmFnbWVudCA9PT0gZnJhZ21lbnQpIHJldHVybjtcbiAgICAgIHRoaXMuZnJhZ21lbnQgPSBmcmFnbWVudDtcblxuICAgICAgLy8gRG9uJ3QgaW5jbHVkZSBhIHRyYWlsaW5nIHNsYXNoIG9uIHRoZSByb290LlxuICAgICAgaWYgKGZyYWdtZW50ID09PSAnJyAmJiB1cmwgIT09ICcvJykgdXJsID0gdXJsLnNsaWNlKDAsIC0xKTtcblxuICAgICAgLy8gSWYgcHVzaFN0YXRlIGlzIGF2YWlsYWJsZSwgd2UgdXNlIGl0IHRvIHNldCB0aGUgZnJhZ21lbnQgYXMgYSByZWFsIFVSTC5cbiAgICAgIGlmICh0aGlzLl9oYXNQdXNoU3RhdGUpIHtcbiAgICAgICAgdGhpcy5oaXN0b3J5W29wdGlvbnMucmVwbGFjZSA/ICdyZXBsYWNlU3RhdGUnIDogJ3B1c2hTdGF0ZSddKHt9LCBkb2N1bWVudC50aXRsZSwgdXJsKTtcblxuICAgICAgLy8gSWYgaGFzaCBjaGFuZ2VzIGhhdmVuJ3QgYmVlbiBleHBsaWNpdGx5IGRpc2FibGVkLCB1cGRhdGUgdGhlIGhhc2hcbiAgICAgIC8vIGZyYWdtZW50IHRvIHN0b3JlIGhpc3RvcnkuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3dhbnRzSGFzaENoYW5nZSkge1xuICAgICAgICB0aGlzLl91cGRhdGVIYXNoKHRoaXMubG9jYXRpb24sIGZyYWdtZW50LCBvcHRpb25zLnJlcGxhY2UpO1xuICAgICAgICBpZiAodGhpcy5pZnJhbWUgJiYgKGZyYWdtZW50ICE9PSB0aGlzLmdldEZyYWdtZW50KHRoaXMuZ2V0SGFzaCh0aGlzLmlmcmFtZSkpKSkge1xuICAgICAgICAgIC8vIE9wZW5pbmcgYW5kIGNsb3NpbmcgdGhlIGlmcmFtZSB0cmlja3MgSUU3IGFuZCBlYXJsaWVyIHRvIHB1c2ggYVxuICAgICAgICAgIC8vIGhpc3RvcnkgZW50cnkgb24gaGFzaC10YWcgY2hhbmdlLiAgV2hlbiByZXBsYWNlIGlzIHRydWUsIHdlIGRvbid0XG4gICAgICAgICAgLy8gd2FudCB0aGlzLlxuICAgICAgICAgIGlmKCFvcHRpb25zLnJlcGxhY2UpIHRoaXMuaWZyYW1lLmRvY3VtZW50Lm9wZW4oKS5jbG9zZSgpO1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUhhc2godGhpcy5pZnJhbWUubG9jYXRpb24sIGZyYWdtZW50LCBvcHRpb25zLnJlcGxhY2UpO1xuICAgICAgICB9XG5cbiAgICAgIC8vIElmIHlvdSd2ZSB0b2xkIHVzIHRoYXQgeW91IGV4cGxpY2l0bHkgZG9uJ3Qgd2FudCBmYWxsYmFjayBoYXNoY2hhbmdlLVxuICAgICAgLy8gYmFzZWQgaGlzdG9yeSwgdGhlbiBgbmF2aWdhdGVgIGJlY29tZXMgYSBwYWdlIHJlZnJlc2guXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhdGlvbi5hc3NpZ24odXJsKTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLnRyaWdnZXIpIHJldHVybiB0aGlzLmxvYWRVcmwoZnJhZ21lbnQpO1xuICAgIH0sXG5cbiAgICAvLyBVcGRhdGUgdGhlIGhhc2ggbG9jYXRpb24sIGVpdGhlciByZXBsYWNpbmcgdGhlIGN1cnJlbnQgZW50cnksIG9yIGFkZGluZ1xuICAgIC8vIGEgbmV3IG9uZSB0byB0aGUgYnJvd3NlciBoaXN0b3J5LlxuICAgIF91cGRhdGVIYXNoOiBmdW5jdGlvbihsb2NhdGlvbiwgZnJhZ21lbnQsIHJlcGxhY2UpIHtcbiAgICAgIGlmIChyZXBsYWNlKSB7XG4gICAgICAgIHZhciBocmVmID0gbG9jYXRpb24uaHJlZi5yZXBsYWNlKC8oamF2YXNjcmlwdDp8IykuKiQvLCAnJyk7XG4gICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoaHJlZiArICcjJyArIGZyYWdtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNvbWUgYnJvd3NlcnMgcmVxdWlyZSB0aGF0IGBoYXNoYCBjb250YWlucyBhIGxlYWRpbmcgIy5cbiAgICAgICAgbG9jYXRpb24uaGFzaCA9ICcjJyArIGZyYWdtZW50O1xuICAgICAgfVxuICAgIH1cblxuICB9KTtcblxuICAvLyBDcmVhdGUgdGhlIGRlZmF1bHQgQmFja2JvbmUuaGlzdG9yeS5cbiAgQmFja2JvbmUuaGlzdG9yeSA9IG5ldyBIaXN0b3J5O1xuXG4gIC8vIEhlbHBlcnNcbiAgLy8gLS0tLS0tLVxuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBjb3JyZWN0bHkgc2V0IHVwIHRoZSBwcm90b3R5cGUgY2hhaW4sIGZvciBzdWJjbGFzc2VzLlxuICAvLyBTaW1pbGFyIHRvIGBnb29nLmluaGVyaXRzYCwgYnV0IHVzZXMgYSBoYXNoIG9mIHByb3RvdHlwZSBwcm9wZXJ0aWVzIGFuZFxuICAvLyBjbGFzcyBwcm9wZXJ0aWVzIHRvIGJlIGV4dGVuZGVkLlxuICB2YXIgZXh0ZW5kID0gZnVuY3Rpb24ocHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcztcbiAgICB2YXIgY2hpbGQ7XG5cbiAgICAvLyBUaGUgY29uc3RydWN0b3IgZnVuY3Rpb24gZm9yIHRoZSBuZXcgc3ViY2xhc3MgaXMgZWl0aGVyIGRlZmluZWQgYnkgeW91XG4gICAgLy8gKHRoZSBcImNvbnN0cnVjdG9yXCIgcHJvcGVydHkgaW4geW91ciBgZXh0ZW5kYCBkZWZpbml0aW9uKSwgb3IgZGVmYXVsdGVkXG4gICAgLy8gYnkgdXMgdG8gc2ltcGx5IGNhbGwgdGhlIHBhcmVudCdzIGNvbnN0cnVjdG9yLlxuICAgIGlmIChwcm90b1Byb3BzICYmIF8uaGFzKHByb3RvUHJvcHMsICdjb25zdHJ1Y3RvcicpKSB7XG4gICAgICBjaGlsZCA9IHByb3RvUHJvcHMuY29uc3RydWN0b3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkID0gZnVuY3Rpb24oKXsgcmV0dXJuIHBhcmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICAgIH1cblxuICAgIC8vIEFkZCBzdGF0aWMgcHJvcGVydGllcyB0byB0aGUgY29uc3RydWN0b3IgZnVuY3Rpb24sIGlmIHN1cHBsaWVkLlxuICAgIF8uZXh0ZW5kKGNoaWxkLCBwYXJlbnQsIHN0YXRpY1Byb3BzKTtcblxuICAgIC8vIFNldCB0aGUgcHJvdG90eXBlIGNoYWluIHRvIGluaGVyaXQgZnJvbSBgcGFyZW50YCwgd2l0aG91dCBjYWxsaW5nXG4gICAgLy8gYHBhcmVudGAncyBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAgICB2YXIgU3Vycm9nYXRlID0gZnVuY3Rpb24oKXsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9O1xuICAgIFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xuICAgIGNoaWxkLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGU7XG5cbiAgICAvLyBBZGQgcHJvdG90eXBlIHByb3BlcnRpZXMgKGluc3RhbmNlIHByb3BlcnRpZXMpIHRvIHRoZSBzdWJjbGFzcyxcbiAgICAvLyBpZiBzdXBwbGllZC5cbiAgICBpZiAocHJvdG9Qcm9wcykgXy5leHRlbmQoY2hpbGQucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcblxuICAgIC8vIFNldCBhIGNvbnZlbmllbmNlIHByb3BlcnR5IGluIGNhc2UgdGhlIHBhcmVudCdzIHByb3RvdHlwZSBpcyBuZWVkZWRcbiAgICAvLyBsYXRlci5cbiAgICBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlO1xuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9O1xuXG4gIC8vIFNldCB1cCBpbmhlcml0YW5jZSBmb3IgdGhlIG1vZGVsLCBjb2xsZWN0aW9uLCByb3V0ZXIsIHZpZXcgYW5kIGhpc3RvcnkuXG4gIE1vZGVsLmV4dGVuZCA9IENvbGxlY3Rpb24uZXh0ZW5kID0gUm91dGVyLmV4dGVuZCA9IFZpZXcuZXh0ZW5kID0gSGlzdG9yeS5leHRlbmQgPSBleHRlbmQ7XG5cbiAgLy8gVGhyb3cgYW4gZXJyb3Igd2hlbiBhIFVSTCBpcyBuZWVkZWQsIGFuZCBub25lIGlzIHN1cHBsaWVkLlxuICB2YXIgdXJsRXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgXCJ1cmxcIiBwcm9wZXJ0eSBvciBmdW5jdGlvbiBtdXN0IGJlIHNwZWNpZmllZCcpO1xuICB9O1xuXG4gIC8vIFdyYXAgYW4gb3B0aW9uYWwgZXJyb3IgY2FsbGJhY2sgd2l0aCBhIGZhbGxiYWNrIGVycm9yIGV2ZW50LlxuICB2YXIgd3JhcEVycm9yID0gZnVuY3Rpb24obW9kZWwsIG9wdGlvbnMpIHtcbiAgICB2YXIgZXJyb3IgPSBvcHRpb25zLmVycm9yO1xuICAgIG9wdGlvbnMuZXJyb3IgPSBmdW5jdGlvbihyZXNwKSB7XG4gICAgICBpZiAoZXJyb3IpIGVycm9yKG1vZGVsLCByZXNwLCBvcHRpb25zKTtcbiAgICAgIG1vZGVsLnRyaWdnZXIoJ2Vycm9yJywgbW9kZWwsIHJlc3AsIG9wdGlvbnMpO1xuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIEJhY2tib25lO1xuXG59KSk7XG4iLCIvKipcbiAqIFRoaXMgaXMgdGhlIGFwcCBpbnN0YW5jZSB0aGF0IGlzIHNoYXJlZCBiZXR3ZWVuIGNsaWVudCBhbmQgc2VydmVyLlxuICogVGhlIGNsaWVudCBhbHNvIHN1YmNsYXNzZXMgaXQgZm9yIGNsaWVudC1zcGVjaWZpYyBzdHVmZi5cbiAqL1xuXG52YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpLFxuICAgIEZldGNoZXIgPSByZXF1aXJlKCcuL2ZldGNoZXInKSxcbiAgICBNb2RlbFV0aWxzID0gcmVxdWlyZSgnLi9tb2RlbFV0aWxzJyksXG4gICAgaXNTZXJ2ZXIgPSAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpLFxuICAgIENsaWVudFJvdXRlcjtcblxuaWYgKCFpc1NlcnZlcikge1xuICBDbGllbnRSb3V0ZXIgPSByZXF1aXJlKCdhcHAvcm91dGVyJyk7XG4gIEJhY2tib25lLiQgPSB3aW5kb3cuJCB8fCByZXF1aXJlKCdqcXVlcnknKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYWNrYm9uZS5Nb2RlbC5leHRlbmQoe1xuXG4gIGRlZmF1bHRzOiB7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgdGVtcGxhdGVBZGFwdGVyOiAncmVuZHItaGFuZGxlYmFycydcbiAgfSxcblxuICAvLyBTZXQga2V5cyB0byB1bmRlZmluZWQgc28gcnVudGltZSBWOCBpcyBoYXBwaWVyXG4gIHRlbXBsYXRlQWRhcHRlcjogdW5kZWZpbmVkLFxuICByZXE6IHVuZGVmaW5lZCxcbiAgbW9kZWxVdGlsczogdW5kZWZpbmVkLFxuICBmZXRjaGVyOiB1bmRlZmluZWQsXG5cbiAgLyoqXG4gICAqIEBzaGFyZWRcbiAgICovXG4gIGNvbnN0cnVjdG9yOiBmdW5jdGlvbihhdHRyaWJ1dGVzLCBvcHRpb25zKSB7XG4gICAgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXMgfHwge307XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIHZhciBlbnRyeVBhdGggPSB0aGlzLm9wdGlvbnMuZW50cnlQYXRoIHx8ICcnO1xuICAgIGlmICghaXNTZXJ2ZXIpIHtcbiAgICAgIC8vIHRoZSBlbnRyeSBwYXRoIG11c3QgYWx3YXlzIGJlIGVtcHR5IGZvciB0aGUgY2xpZW50XG4gICAgICBlbnRyeVBhdGggPSAgJyc7XG4gICAgfVxuXG4gICAgdGhpcy5tb2RlbFV0aWxzID0gdGhpcy5vcHRpb25zLm1vZGVsVXRpbHMgfHwgbmV3IE1vZGVsVXRpbHMoZW50cnlQYXRoKTtcblxuICAgIC8qKlxuICAgICAqIE9uIHRoZSBzZXJ2ZXItc2lkZSwgeW91IGNhbiBhY2Nlc3MgdGhlIEV4cHJlc3MgcmVxdWVzdCwgYHJlcWAuXG4gICAgICovXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZXEpIHtcbiAgICAgIHRoaXMucmVxID0gdGhpcy5vcHRpb25zLnJlcTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHRoZSBgdGVtcGxhdGVBZGFwdGVyYCwgYWxsb3dpbmcgYXBwbGljYXRpb24gZGV2ZWxvcGVycyB0byB1c2Ugd2hpY2hldmVyXG4gICAgICogdGVtcGxhdGluZyBzeXN0ZW0gdGhleSB3YW50LlxuICAgICAqXG4gICAgICogV2UgY2FuJ3QgdXNlIGB0aGlzLmdldCgndGVtcGxhdGVBZGFwdGVyJylgIGhlcmUgYmVjYXVzZSBgQmFja2JvbmUuTW9kZWxgJ3NcbiAgICAgKiBjb25zdHJ1Y3RvciBoYXMgbm90IHlldCBiZWVuIGNhbGxlZC5cbiAgICAgKi9cbiAgICBpZiAodGhpcy5vcHRpb25zLnRlbXBsYXRlQWRhcHRlckluc3RhbmNlKSB7XG4gICAgICB0aGlzLnRlbXBsYXRlQWRhcHRlciA9IG9wdGlvbnMudGVtcGxhdGVBZGFwdGVySW5zdGFuY2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0ZW1wbGF0ZUFkYXB0ZXJNb2R1bGUgPSBhdHRyaWJ1dGVzLnRlbXBsYXRlQWRhcHRlciB8fCB0aGlzLmRlZmF1bHRzLnRlbXBsYXRlQWRhcHRlcjtcbiAgICAgIHRoaXMudGVtcGxhdGVBZGFwdGVyID0gcmVxdWlyZSh0ZW1wbGF0ZUFkYXB0ZXJNb2R1bGUpKHtlbnRyeVBhdGg6IGVudHJ5UGF0aH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc3RhbnRpYXRlIHRoZSBgRmV0Y2hlcmAsIHdoaWNoIGlzIHVzZWQgb24gY2xpZW50IGFuZCBzZXJ2ZXIuXG4gICAgICovXG4gICAgdGhpcy5mZXRjaGVyID0gbmV3IEZldGNoZXIoe1xuICAgICAgYXBwOiB0aGlzXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHRoZSBgQ2xpZW50Um91dGVyYCBvbiB0aGUgY2xpZW50LXNpZGUuXG4gICAgICovXG4gICAgaWYgKCFpc1NlcnZlcikge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5DbGllbnRSb3V0ZXIpIHtcbiAgICAgICAgQ2xpZW50Um91dGVyID0gdGhpcy5vcHRpb25zLkNsaWVudFJvdXRlcjtcbiAgICAgIH1cblxuICAgICAgbmV3IENsaWVudFJvdXRlcih7XG4gICAgICAgIGFwcDogdGhpcyxcbiAgICAgICAgZW50cnlQYXRoOiBlbnRyeVBhdGgsXG4gICAgICAgIGFwcFZpZXdDbGFzczogdGhpcy5nZXRBcHBWaWV3Q2xhc3MoKSxcbiAgICAgICAgcm9vdFBhdGg6IGF0dHJpYnV0ZXMucm9vdFBhdGhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIEJhY2tib25lLk1vZGVsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBzaGFyZWRcbiAgICovXG4gIGZldGNoOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmZldGNoZXIuZmV0Y2guYXBwbHkodGhpcy5mZXRjaGVyLCBhcmd1bWVudHMpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAY2xpZW50XG4gICAqL1xuICBnZXRBcHBWaWV3Q2xhc3M6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmVxdWlyZSgnLi4vY2xpZW50L2FwcF92aWV3Jyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBjbGllbnRcbiAgICovXG4gIGJvb3RzdHJhcERhdGE6IGZ1bmN0aW9uKG1vZGVsTWFwLCBjYWxsYmFjaykge1xuICAgIHRoaXMuZmV0Y2hlci5ib290c3RyYXBEYXRhKG1vZGVsTWFwLCBjYWxsYmFjayk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBjbGllbnRcbiAgICovXG4gIHN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJvdXRlci5zdGFydCgpO1xuICAgIHRoaXMudHJpZ2dlcignc3RhcnQnKTtcbiAgfVxufSk7XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKSxcbiAgICBCYWNrYm9uZSA9IHJlcXVpcmUoJ2JhY2tib25lJyksXG4gICAgc3luY2VyID0gcmVxdWlyZSgnLi4vc3luY2VyJyksXG4gICAgQmFzZU1vZGVsID0gcmVxdWlyZSgnLi9tb2RlbCcpLFxuICAgIFN1cGVyID0gQmFja2JvbmUuQ29sbGVjdGlvbixcbiAgICBpc1NlcnZlciA9ICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyk7XG5cbmlmICghaXNTZXJ2ZXIpIHtcbiAgQmFja2JvbmUuJCA9IHdpbmRvdy4kIHx8IHJlcXVpcmUoJ2pxdWVyeScpO1xufVxuXG52YXIgQmFzZUNvbGxlY3Rpb24gPSBTdXBlci5leHRlbmQoe1xuXG4gIG1vZGVsOiBCYXNlTW9kZWwsXG4gIHBhcmFtczogdW5kZWZpbmVkLFxuICBtZXRhOiB1bmRlZmluZWQsXG5cbiAgLyoqXG4gICAqIFByb3ZpZGUgdGhlIGFiaWxpdHkgdG8gc2V0IGRlZmF1bHQgcGFyYW1zIGZvciBldmVyeSAnZmV0Y2gnIGNhbGwuXG4gICAqL1xuICBkZWZhdWx0UGFyYW1zOiBudWxsLFxuXG4gIGNvbnN0cnVjdG9yOiBmdW5jdGlvbihtb2RlbHMsIG9wdGlvbnMpIHtcbiAgICAvKipcbiAgICAgKiBDYXB0dXJlIHRoZSBvcHRpb25zIGFzIGluc3RhbmNlIHZhcmlhYmxlLlxuICAgICAqL1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAvKipcbiAgICAgKiBTdG9yZSBhIHJlZmVyZW5jZSB0byB0aGUgYXBwIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHRoaXMuYXBwID0gdGhpcy5vcHRpb25zLmFwcDtcblxuICAgIC8qKlxuICAgICAqIFN0b3JlIGEgcmVmZXJlbmNlIHRvIHRoZSBwYXJhbXMgdGhhdCB3ZXJlIHVzZWQgdG9cbiAgICAgKiBxdWVyeSBmb3IgdGhlc2UgbW9kZWxzLlxuICAgICAqL1xuICAgIHRoaXMucGFyYW1zID0gdGhpcy5vcHRpb25zLnBhcmFtcyB8fCB7fTtcbiAgICBfLmRlZmF1bHRzKHRoaXMucGFyYW1zLCB0aGlzLmRlZmF1bHRQYXJhbXMgfHwge30pO1xuXG4gICAgLyoqXG4gICAgICogQWRkICdtZXRhJyBwcm9wZXJ0eSB0byBzdG9yZSB0aGUgcGFydHMgb2YgdGhlIHJlc3BvbnNlXG4gICAgICogdGhhdCBhcmVuJ3QgcGFydCBvZiB0aGUganNvbktleS5cbiAgICAgKi9cbiAgICB0aGlzLm1ldGEgPSB7fTtcbiAgICBpZiAoXy5pc09iamVjdCh0aGlzLm9wdGlvbnMubWV0YSkpIHtcbiAgICAgIF8uZXh0ZW5kKHRoaXMubWV0YSwgdGhpcy5vcHRpb25zLm1ldGEpO1xuICAgICAgZGVsZXRlIHRoaXMub3B0aW9ucy5tZXRhO1xuICAgIH1cblxuICAgIFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB0aGlzLnN0b3JlKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIE1ha2Ugc3VyZSB0aGF0IGBtb2RlbC5hcHBgIGlzIHNldCBmb3IgYWxsIG9wZXJhdGlvbnMgbGlrZVxuICAgKiBgdGhpcy5hZGQoKWAsIGB0aGlzLnJlc2V0KClgLCBgdGhpcy5zZXQoKWAsIGB0aGlzLnB1c2goKWAsIGV0Yy5cbiAgICovXG4gIF9wcmVwYXJlTW9kZWw6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBtb2RlbDtcbiAgICBtb2RlbCA9IFN1cGVyLnByb3RvdHlwZS5fcHJlcGFyZU1vZGVsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgbW9kZWwuYXBwID0gdGhpcy5hcHA7XG4gICAgcmV0dXJuIG1vZGVsO1xuICB9LFxuXG4gIC8qKlxuICAgKiBJZGVtcG90ZW50IHBhcnNlXG4gICAqL1xuICBwYXJzZTogZnVuY3Rpb24ocmVzcCwgbW9kaWZ5SW5zdGFuY2UpIHtcbiAgICB2YXIganNvblJlc3AsIG1ldGEsIHBhcnNlZDtcblxuICAgIGlmIChtb2RpZnlJbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICBtb2RpZnlJbnN0YW5jZSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChyZXNwICE9IG51bGwgJiYgdGhpcy5qc29uS2V5ICYmIChqc29uUmVzcCA9IHJlc3BbdGhpcy5qc29uS2V5XSkpIHtcbiAgICAgIGlmIChtb2RpZnlJbnN0YW5jZSkge1xuICAgICAgICBtZXRhID0gXy5vbWl0KHJlc3AsIHRoaXMuanNvbktleSk7XG4gICAgICAgIF8uZXh0ZW5kKHRoaXMubWV0YSwgbWV0YSk7XG4gICAgICB9XG4gICAgICBwYXJzZWQgPSBqc29uUmVzcDtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkID0gcmVzcDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucGFyc2VNb2RlbHMocGFyc2VkKTtcbiAgfSxcblxuICBwYXJzZU1vZGVsczogZnVuY3Rpb24ocmVzcCkge1xuICAgIHZhciBqc29uS2V5LCBqc29uS2V5UmVzcDtcblxuICAgIHJlc3AgPSBfLmNsb25lKHJlc3ApO1xuICAgIGpzb25LZXkgPSB0aGlzLm1vZGVsLnByb3RvdHlwZS5qc29uS2V5O1xuICAgIF8uZWFjaChyZXNwLCBmdW5jdGlvbihtb2RlbFJlc3AsIGkpIHtcbiAgICAgIGpzb25LZXlSZXNwID0gbW9kZWxSZXNwW2pzb25LZXldO1xuICAgICAgaWYgKGpzb25LZXlSZXNwKSB7XG4gICAgICAgIHJlc3BbaV0gPSBqc29uS2V5UmVzcDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzcDtcbiAgfSxcblxuICBmZXRjaDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgLy8gRWFjaCB0aW1lIG5ldyBtb2RlbHMgYXJlIGZldGNoZWQsIHN0b3JlIHRoZSBwYXJhbXMgdXNlZC5cbiAgICBpZiAob3B0aW9ucy5kYXRhKSB7XG4gICAgICBfLmRlZmF1bHRzKG9wdGlvbnMuZGF0YSwgdGhpcy5kZWZhdWx0UGFyYW1zIHx8IHt9KTtcbiAgICAgIHRoaXMucGFyYW1zID0gb3B0aW9ucy5kYXRhO1xuICAgIH1cblxuICAgIHJldHVybiBTdXBlci5wcm90b3R5cGUuZmV0Y2guYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfSxcblxuICAvKipcbiAgICogSW5zdGFuY2UgbWV0aG9kIHRvIHN0b3JlIHRoZSBjb2xsZWN0aW9uIGFuZCBpdHMgbW9kZWxzLlxuICAgKi9cbiAgc3RvcmU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmFwcCAmJiB0aGlzLmFwcC5mZXRjaGVyKSB7XG4gICAgICB0aGlzLmVhY2goZnVuY3Rpb24obW9kZWwpIHtcbiAgICAgICAgbW9kZWwuc3RvcmUoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hcHAuZmV0Y2hlci5jb2xsZWN0aW9uU3RvcmUuc2V0KHRoaXMpO1xuICAgIH1cbiAgfVxufSk7XG5cbi8qKlxuICogTWl4LWluIHRoZSBgc3luY2VyYCwgc2hhcmVkIGJldHdlZW4gYEJhc2VNb2RlbGAgYW5kIGBCYXNlQ29sbGVjdGlvbmAsIHdoaWNoXG4gKiBlbmNhcHN1bGF0ZXMgbG9naWMgZm9yIGZldGNoaW5nIGRhdGEgZnJvbSB0aGUgQVBJLlxuICovXG5fLmV4dGVuZChCYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUsIHN5bmNlcik7XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZUNvbGxlY3Rpb247XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKSxcbiAgICBCYWNrYm9uZSA9IHJlcXVpcmUoJ2JhY2tib25lJyksXG4gICAgc3luY2VyID0gcmVxdWlyZSgnLi4vc3luY2VyJyksXG4gICAgaXNTZXJ2ZXIgPSAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpO1xuXG5pZiAoIWlzU2VydmVyKSB7XG4gIEJhY2tib25lLiQgPSB3aW5kb3cuJCB8fCByZXF1aXJlKCdqcXVlcnknKTtcbn1cblxudmFyIEJhc2VNb2RlbCA9IEJhY2tib25lLk1vZGVsLmV4dGVuZCh7XG5cbiAgY29uc3RydWN0b3I6IGZ1bmN0aW9uKGF0dHJpYnV0ZXMsIG9wdGlvbnMpIHtcbiAgICAvLyBDYXB0dXJlIHRoZSBvcHRpb25zIGFzIGluc3RhbmNlIHZhcmlhYmxlLlxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAvLyBTdG9yZSBhIHJlZmVyZW5jZSB0byB0aGUgYXBwIGluc3RhbmNlLlxuICAgIHRoaXMuYXBwID0gdGhpcy5vcHRpb25zLmFwcDtcblxuICAgIGlmICghdGhpcy5hcHAgJiYgdGhpcy5vcHRpb25zLmNvbGxlY3Rpb24pIHtcbiAgICAgIHRoaXMuYXBwID0gdGhpcy5vcHRpb25zLmNvbGxlY3Rpb24uYXBwO1xuICAgIH1cblxuICAgIEJhY2tib25lLk1vZGVsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB0aGlzLnN0b3JlKCk7XG4gICAgdGhpcy5vbignY2hhbmdlOicgKyB0aGlzLmlkQXR0cmlidXRlLCB0aGlzLnN0b3JlLCB0aGlzKTtcbiAgfSxcblxuICAvKipcbiAgICogSWRlbXBvdGVudCBwYXJzZVxuICAgKi9cbiAgcGFyc2U6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICBpZiAocmVzcCAhPSBudWxsICYmIHRoaXMuanNvbktleSkge1xuICAgICAgcmV0dXJuIHJlc3BbdGhpcy5qc29uS2V5XSB8fCByZXNwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzcDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluc3RhbmNlIG1ldGhvZCB0byBzdG9yZSBpbiB0aGUgbW9kZWxTdG9yZS5cbiAgICovXG4gIHN0b3JlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5pZCAhPT0gdW5kZWZpbmVkICYmIHRoaXMuYXBwICYmIHRoaXMuYXBwLmZldGNoZXIpIHtcbiAgICAgIHRoaXMuYXBwLmZldGNoZXIubW9kZWxTdG9yZS5zZXQodGhpcyk7XG4gICAgfVxuICB9XG59KTtcblxuLyoqXG4gKiBNaXgtaW4gdGhlIGBzeW5jZXJgLCBzaGFyZWQgYmV0d2VlbiBgQmFzZU1vZGVsYCBhbmQgYEJhc2VDb2xsZWN0aW9uYCwgd2hpY2hcbiAqIGVuY2Fwc3VsYXRlcyBsb2dpYyBmb3IgZmV0Y2hpbmcgZGF0YSBmcm9tIHRoZSBBUEkuXG4gKi9cbl8uZXh0ZW5kKEJhc2VNb2RlbC5wcm90b3R5cGUsIHN5bmNlcik7XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZU1vZGVsO1xuIiwidmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyksXG4gIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKSxcbiAgaXNTZXJ2ZXIgPSAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpLFxuICBpc0FNREVudmlyb25tZW50ID0gIWlzU2VydmVyICYmICh0eXBlb2YgZGVmaW5lICE9PSAndW5kZWZpbmVkJyksXG4gIGxvYWROdW1iZXIgPSAwO1xuXG5pZiAoIWlzU2VydmVyKSB7XG4gIEJhY2tib25lLiQgPSB3aW5kb3cuJCB8fCByZXF1aXJlKCdqcXVlcnknKTtcbn1cblxuXG5mdW5jdGlvbiBzdHJpbmdSb3V0ZURlZmluaXRpb25Ub09iamVjdChlbGVtZW50KSB7XG4gIHZhciBwYXJ0cyA9IGVsZW1lbnQuc3BsaXQoJyMnKTtcbiAgcmV0dXJuIHtcbiAgICBjb250cm9sbGVyOiBwYXJ0c1swXSxcbiAgICBhY3Rpb246IHBhcnRzWzFdXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlUm91dGVEZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICByZXR1cm4gZGVmaW5pdGlvbnMucmVkdWNlKGZ1bmN0aW9uKHJvdXRlLCBlbGVtZW50KSB7XG4gICAgaWYgKF8uaXNTdHJpbmcoZWxlbWVudCkpIHtcbiAgICAgIGVsZW1lbnQgPSBzdHJpbmdSb3V0ZURlZmluaXRpb25Ub09iamVjdChlbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIF8uZXh0ZW5kKHJvdXRlLCBlbGVtZW50KTtcbiAgfSwge30pO1xufVxuXG4vKipcbiAqIEJhc2Ugcm91dGVyIGNsYXNzIHNoYXJlZCBiZXR3ZWVuIENsaWVudFJvdXRlciBhbmQgU2VydmVyUm91dGVyLlxuICovXG5mdW5jdGlvbiBCYXNlUm91dGVyKG9wdGlvbnMpIHtcbiAgdGhpcy5yb3V0ZSA9IHRoaXMucm91dGUuYmluZCh0aGlzKTtcbiAgdGhpcy5fcm91dGVzID0gW107XG4gIHRoaXMuX2luaXRPcHRpb25zKG9wdGlvbnMpO1xufVxuXG5fLmV4dGVuZChCYXNlUm91dGVyLnByb3RvdHlwZSwgQmFja2JvbmUuRXZlbnRzLCB7XG4gIC8qKlxuICAgKiBDb25maWdcbiAgICogICAtIGVycm9ySGFuZGxlcjogZnVuY3Rpb24gdG8gY29ycmVjdGx5IGhhbmRsZSBlcnJvclxuICAgKiAgIC0gcGF0aHNcbiAgICogICAgIC0gZW50cnlQYXRoIChyZXF1aXJlZClcbiAgICogICAgIC0gcm91dGVzIChvcHRpb25hbClcbiAgICogICAgIC0gY29udHJvbGxlckRpciAob3B0aW9uYWwpXG4gICAqL1xuICBvcHRpb25zOiBudWxsLFxuXG4gIC8qKlxuICAgKiBJbnRlcm5hbGx5IHN0b3JlZCByb3V0ZSBkZWZpbml0aW9ucy5cbiAgICovXG4gIF9yb3V0ZXM6IG51bGwsXG5cbiAgcmV2ZXJzZVJvdXRlczogZmFsc2UsXG5cbiAgaW5pdGlhbGl6ZTogXy5ub29wLFxuXG4gIF9pbml0T3B0aW9uczogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHZhciBlbnRyeVBhdGg7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLnBhdGhzID0gb3B0aW9ucy5wYXRocyB8fCB7fTtcblxuICAgIGVudHJ5UGF0aCA9IG9wdGlvbnMucGF0aHMuZW50cnlQYXRoIHx8IG9wdGlvbnMuZW50cnlQYXRoO1xuICAgIG9wdGlvbnMucGF0aHMgPSBfLmRlZmF1bHRzKG9wdGlvbnMucGF0aHMsIHtcbiAgICAgIGVudHJ5UGF0aDogZW50cnlQYXRoLFxuICAgICAgcm91dGVzOiBlbnRyeVBhdGggKyAnYXBwL3JvdXRlcycsXG4gICAgICBjb250cm9sbGVyRGlyOiBlbnRyeVBhdGggKyAnYXBwL2NvbnRyb2xsZXJzJ1xuICAgIH0pO1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfSxcblxuICBnZXRDb250cm9sbGVyUGF0aDogZnVuY3Rpb24oY29udHJvbGxlck5hbWUpIHtcbiAgICB2YXIgY29udHJvbGxlckRpciA9IHRoaXMub3B0aW9ucy5wYXRocy5jb250cm9sbGVyRGlyO1xuICAgIHJldHVybiBjb250cm9sbGVyRGlyICsgJy8nICsgY29udHJvbGxlck5hbWUgKyAnX2NvbnRyb2xsZXInO1xuICB9LFxuXG4gIGxvYWRDb250cm9sbGVyOiBmdW5jdGlvbihjb250cm9sbGVyTmFtZSkge1xuICAgIHZhciBjb250cm9sbGVyUGF0aCA9IHRoaXMuZ2V0Q29udHJvbGxlclBhdGgoY29udHJvbGxlck5hbWUpO1xuICAgIHJldHVybiByZXF1aXJlKGNvbnRyb2xsZXJQYXRoKTtcbiAgfSxcblxuICBnZXRBY3Rpb246IGZ1bmN0aW9uKHJvdXRlKSB7XG4gICAgdmFyIGNvbnRyb2xsZXIsIGFjdGlvbjtcblxuICAgIGlmIChyb3V0ZS5jb250cm9sbGVyKSB7XG4gICAgICBpZiAoaXNBTURFbnZpcm9ubWVudCkge1xuICAgICAgICBhY3Rpb24gPSB0aGlzLmdldENvbnRyb2xsZXJQYXRoKHJvdXRlLmNvbnRyb2xsZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udHJvbGxlciA9IHRoaXMubG9hZENvbnRyb2xsZXIocm91dGUuY29udHJvbGxlcik7XG4gICAgICAgIGFjdGlvbiA9IGNvbnRyb2xsZXJbcm91dGUuYWN0aW9uXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9LFxuXG4gIGdldFJlZGlyZWN0OiBmdW5jdGlvbihyb3V0ZSwgcGFyYW1zKSB7XG4gICAgdmFyIHJlZGlyZWN0ID0gcm91dGUucmVkaXJlY3Q7XG5cbiAgICBpZiAodHlwZW9mIHJlZGlyZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZWRpcmVjdCA9IHJlZGlyZWN0KHBhcmFtcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZGlyZWN0O1xuICB9LFxuXG4gIGdldFJvdXRlQnVpbGRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHJlcXVpcmUodGhpcy5vcHRpb25zLnBhdGhzLnJvdXRlcyk7XG4gIH0sXG5cbiAgYnVpbGRSb3V0ZXM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciByb3V0ZUJ1aWxkZXIgPSB0aGlzLmdldFJvdXRlQnVpbGRlcigpLFxuICAgICAgcm91dGVzID0gW107XG5cbiAgICBmdW5jdGlvbiBjYXB0dXJlUm91dGVzKCkge1xuICAgICAgcm91dGVzLnB1c2goXy50b0FycmF5KGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIHJvdXRlQnVpbGRlcihjYXB0dXJlUm91dGVzKTtcbiAgICBpZiAodGhpcy5yZXZlcnNlUm91dGVzKSB7XG4gICAgICByb3V0ZXMgPSByb3V0ZXMucmV2ZXJzZSgpO1xuICAgIH1cblxuICAgIHJvdXRlcy5mb3JFYWNoKHRoaXMuYWRkUm91dGVEZWZpbml0aW9uLCB0aGlzKTtcblxuICAgIHJldHVybiB0aGlzLnJvdXRlcygpO1xuICB9LFxuXG4gIGFkZFJvdXRlRGVmaW5pdGlvbjogZnVuY3Rpb24ocm91dGUpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5yb3V0ZS5hcHBseSh0aGlzLCByb3V0ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGVycm9yLm1lc3NhZ2UgPSAnRXJyb3IgYnVpbGRpbmcgcm91dGVzICgnICsgZXJyb3IubWVzc2FnZSArICcpJztcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhIGNvcHkgb2YgY3VycmVudCByb3V0ZSBkZWZpbml0aW9ucy5cbiAgICovXG4gIHJvdXRlczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvdXRlcy5zbGljZSgpLm1hcChmdW5jdGlvbihyb3V0ZSkge1xuICAgICAgcmV0dXJuIHJvdXRlLnNsaWNlKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIE1ldGhvZCBwYXNzZWQgdG8gcm91dGVzIGZpbGUgdG8gYnVpbGQgdXAgcm91dGVzIGRlZmluaXRpb24uXG4gICAqIEFkZHMgYSBzaW5nbGUgcm91dGUgZGVmaW5pdGlvbi5cbiAgICovXG4gIHJvdXRlOiBmdW5jdGlvbihwYXR0ZXJuLCBjb250cm9sbGVyLCBvcHRpb25zKSB7XG4gICAgdmFyIHJlYWxBY3Rpb24sIGFjdGlvbiwgaGFuZGxlciwgcm91dGUsIHJvdXRlT2JqLCByb3V0ZXJDb250ZXh0ID0gdGhpcztcblxuICAgIHJvdXRlID0gcGFyc2VSb3V0ZURlZmluaXRpb25zKFtjb250cm9sbGVyLCBvcHRpb25zXSk7XG4gICAgcmVhbEFjdGlvbiA9IHRoaXMuZ2V0QWN0aW9uKHJvdXRlKTtcblxuICAgIGlmIChpc1NlcnZlcikge1xuICAgICAgYWN0aW9uID0gcmVhbEFjdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aW9uID0gZnVuY3Rpb24ocGFyYW1zLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBteUxvYWROdW1iZXIgPSArK2xvYWROdW1iZXI7XG4gICAgICAgIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgLy8gVG8gcHJldmVudCByYWNlIGNvbmRpdGlvbnMgd2UgZW5zdXJlIHRoYXQgbm8gZnV0dXJlIHJlcXVlc3RzIGhhdmUgYmVlbiBwcm9jZXNzZWQgaW4gdGhlIG1lYW4gdGltZS5cbiAgICAgICAgICBpZiAobXlMb2FkTnVtYmVyID09PSBsb2FkTnVtYmVyKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpbiBBTUQgZW52aXJvbm1lbnQgcmVhbEFjdGlvbiBpcyB0aGUgc3RyaW5nIGNvbnRhaW5pbmcgcGF0aCB0byB0aGUgY29udHJvbGxlclxuICAgICAgICAvLyB3aGljaCB3aWxsIGJlIGxvYWRlZCBhc3luYyAobWlnaHQgYmUgcHJlbG9hZGVkKVxuICAgICAgICAvLyBPbmx5IHVzZWQgaW4gQU1EIGVudmlyb25tZW50XG4gICAgICAgIGlmICh0eXBlb2YgcmVhbEFjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByb3V0ZXJDb250ZXh0Ll9yZXF1aXJlQU1EKFtyZWFsQWN0aW9uXSwgZnVuY3Rpb24oY29udHJvbGxlcikge1xuICAgICAgICAgICAgLy8gY2hlY2sgd2UgaGF2ZSBldmVyeXRoaW5nIHdlIG5lZWRcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udHJvbGxlcltyb3V0ZS5hY3Rpb25dICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBhY3Rpb24gXFxcIlwiICsgcm91dGUuYWN0aW9uICsgXCJcXFwiIGZvciBjb250cm9sbGVyIFxcXCJcIiArIHJvdXRlLmNvbnRyb2xsZXIgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250cm9sbGVyW3JvdXRlLmFjdGlvbl0uY2FsbChzZWxmLCBwYXJhbXMsIG5leHQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJlYWxBY3Rpb24uY2FsbChzZWxmLCBwYXJhbXMsIG5leHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEocGF0dGVybiBpbnN0YW5jZW9mIFJlZ0V4cCkgJiYgcGF0dGVybi5zbGljZSgwLCAxKSAhPT0gJy8nKSB7XG4gICAgICBwYXR0ZXJuID0gXCIvXCIgKyBwYXR0ZXJuO1xuICAgIH1cblxuICAgIGhhbmRsZXIgPSB0aGlzLmdldEhhbmRsZXIoYWN0aW9uLCBwYXR0ZXJuLCByb3V0ZSk7XG4gICAgcm91dGVPYmogPSBbcGF0dGVybiwgcm91dGUsIGhhbmRsZXJdO1xuXG4gICAgdGhpcy5fcm91dGVzLnB1c2gocm91dGVPYmopO1xuICAgIHRoaXMudHJpZ2dlcigncm91dGU6YWRkJywgcm91dGVPYmopO1xuXG4gICAgcmV0dXJuIHJvdXRlT2JqO1xuICB9LFxuXG4gIC8qKlxuICAgKiBleHBvc2luZyBmb3IgbW9ja2luZyBpbiB0ZXN0XG4gICAqL1xuICBfcmVxdWlyZUFNRDogcmVxdWlyZSxcblxuICAvKipcbiAgICogU3VwcG9ydCBvbWl0dGluZyB2aWV3IHBhdGg7IGRlZmF1bHQgaXQgdG8gXCI6Y29udHJvbGxlci86YWN0aW9uXCIuXG4gICAqL1xuICBkZWZhdWx0SGFuZGxlclBhcmFtczogZnVuY3Rpb24odmlld1BhdGgsIGxvY2Fscywgcm91dGUpIHtcbiAgICBpZiAodHlwZW9mIHZpZXdQYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgbG9jYWxzID0gdmlld1BhdGg7XG4gICAgICB2aWV3UGF0aCA9IHJvdXRlLmNvbnRyb2xsZXIgKyAnLycgKyByb3V0ZS5hY3Rpb247XG4gICAgfVxuICAgIHJldHVybiBbdmlld1BhdGgsIGxvY2Fsc107XG4gIH0sXG5cbiAgLyoqXG4gICAqIE1ldGhvZHMgdG8gYmUgZXh0ZW5kZWQgYnkgc3ViY2xhc3Nlcy5cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgbWV0aG9kIHRoYXQgcmVuZGVycyB0aGUgcmVxdWVzdC5cbiAgICovXG4gIGdldEhhbmRsZXI6IF8ubm9vcFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZVJvdXRlcjtcbm1vZHVsZS5leHBvcnRzLnNldEFNREVudmlyb25tZW50ID0gZnVuY3Rpb24oZmxhZykge1xuICBpc0FNREVudmlyb25tZW50ID0gZmxhZztcbn07XG4iLCIvKipcbiAqIFNpbmNlIHdlIG1ha2UgcmVuZHIgZmlsZXMgQU1EIGZyaWVuZGx5IG9uIGFwcCBzZXR1cCBzdGFnZVxuICogd2UgbmVlZCB0byBwcmV0ZW5kIHRoYXQgdGhpcyBjb2RlIGlzIHB1cmUgY29tbW9uanNcbiAqIG1lYW5zIG5vIEFNRC1zdHlsZSByZXF1aXJlIGNhbGxzXG4gKi9cbnZhciByZXF1aXJlQU1EID0gcmVxdWlyZTtcblxudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyksXG4gICAgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpLFxuICAgIGFzeW5jID0gcmVxdWlyZSgnYXN5bmMnKSxcbiAgICBpc1NlcnZlciA9ICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyksXG4gICAgQmFzZVZpZXc7XG5cbmlmICghaXNTZXJ2ZXIpIHtcbiAgQmFja2JvbmUuJCA9IHdpbmRvdy4kIHx8IHJlcXVpcmUoJ2pxdWVyeScpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2VWaWV3ID0gQmFja2JvbmUuVmlldy5leHRlbmQoe1xuICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IF8uZXh0ZW5kKCB0aGlzLm9wdGlvbnMgfHwge30sIG9wdGlvbnMgfHwge30gKTtcblxuICAgIHRoaXMucGFyc2VPcHRpb25zKG9wdGlvbnMpO1xuICAgIHRoaXMubmFtZSA9IHRoaXMubmFtZSB8fCB0aGlzLmFwcC5tb2RlbFV0aWxzLnVuZGVyc2Nvcml6ZSh0aGlzLmNvbnN0cnVjdG9yLmlkIHx8IHRoaXMuY29uc3RydWN0b3IubmFtZSk7XG5cbiAgICAvLyBwYXJzZU9wdGlvbnMgZGVhbHMgdy8gbW9kZWxzIGFuZCBjb2xsZWN0aW9ucywgYnV0IHRoZSBCYXNlVmlldyB3aWxsIG92ZXJyaWRlIHRob3NlIGNoYW5nZXNcbiAgICBCYWNrYm9uZS5WaWV3LmNhbGwodGhpcywgXy5vbWl0KG9wdGlvbnMsIFsnbW9kZWwnLCAnY29sbGVjdGlvbiddKSk7XG5cbiAgICB0aGlzLnJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyk7XG4gIH0sXG5cbiAgcGFyc2VPcHRpb25zOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgLyoqXG4gICAgICogUG9wdWxhdGUgYHRoaXMub3B0aW9uc2AgYW5kIGFsaWFzIGFzIGBvcHRpb25zYC5cbiAgICAgKi9cbiAgICB2YXIgb2JqO1xuICAgIG9wdGlvbnMgPSBfLmV4dGVuZCh0aGlzLm9wdGlvbnMsIG9wdGlvbnMgfHwge30pO1xuXG4gICAgaWYgKG9wdGlvbnMuYXBwICE9IG51bGwpIHtcbiAgICAgIHRoaXMuYXBwID0gdGhpcy5vcHRpb25zLmFwcDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwib3B0aW9ucy5hcHAgZXhwZWN0ZWQgd2hlbiBpbml0aWFsaXppbmcgYSBuZXcgdmlld1wiKVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnBhcmVudFZpZXcgIT0gbnVsbCkge1xuICAgICAgdGhpcy5wYXJlbnRWaWV3ID0gb3B0aW9ucy5wYXJlbnRWaWV3O1xuICAgIH1cblxuICAgIG9wdGlvbnMgPSBCYXNlVmlldy5wYXJzZU1vZGVsQW5kQ29sbGVjdGlvbih0aGlzLmFwcC5tb2RlbFV0aWxzLCBfLmV4dGVuZCh7IHBhcnNlOiB0cnVlIH0sIG9wdGlvbnMpKTtcbiAgICB0aGlzLm1vZGVsID0gb3B0aW9ucy5tb2RlbDtcbiAgICB0aGlzLmNvbGxlY3Rpb24gPSBvcHRpb25zLmNvbGxlY3Rpb247XG4gIH0sXG5cbiAgLyoqXG4gICAqIEtleSBmb3IgdGhlIHRlbXBsYXRlXG4gICAqL1xuICBuYW1lOiBudWxsLFxuXG4gIC8qKlxuICAgKiBQYXJlbnQgb2YgdGhlIGN1cnJlbnQgdmlldy5cbiAgICogV2UgbWFrZSBzdXJlIHRvIHN0aWNrIHRoaXMgb24gdGhlIHByb3RvdHlwZSBhcyBhIHJ1bnRpbWUgb3B0aW1pemF0aW9uXG4gICAqIGZvciBWOC4gSXQncyBiZXN0IG5vdCB0byBhZGQgcHJvcGVydGllcyB0byB0aGUgaW5zdGFuY2UgYWZ0ZXIgaW5pdGlhbGl6YXRpb24uXG4gICAqL1xuICBwYXJlbnRWaWV3OiBudWxsLFxuXG4gIC8qKlxuICAgKiBDaGlsZHJlbiBvZiB0aGUgY3VycmVudCB2aWV3LlxuICAgKi9cbiAgY2hpbGRWaWV3czogbnVsbCxcblxuICAvKipcbiAgICogRmxhZyB3aGV0aGVyIG9yIG5vdCB0aGUgdmlldyBpcyBjdXJyZW50bHkgYmVpbmcgdmlld2VkXG4gICAqL1xuICB2aWV3aW5nOiBmYWxzZSxcblxuICAvKipcbiAgICogR2V0cyBhcnJheSBvZiBjaGlsZCB2aWV3cyBieSB0aGVpciBuYW1lXG4gICAqIEVtcHR5IGFycmF5IGlzIHJldHVybmVkIHdoZW4gbm8gbWF0Y2ggaXMgZm91bmRcbiAgICovXG4gIGdldENoaWxkVmlld3NCeU5hbWU6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gXy53aGVyZSh0aGlzLmNoaWxkVmlld3MsIHtuYW1lOiBuYW1lfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldCBkYXRhIGZvciB0ZW1wbGF0ZS4gIFRoaXMgYWxzbyBhY3RzIGFzIGEgdmlldy1tb2RlbC5cbiAgICogVHJ5IHRvIHJldHVybiBwcm9wZXIgZGF0YSBpZiBtb2RlbCBvciBjb2xsZWN0aW9uIGlzIGF2YWlsYWJsZS5cbiAgICovXG4gIGdldFRlbXBsYXRlRGF0YTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJldFZhbCwgcGFyc2VkT3B0aW9ucztcblxuICAgIGlmICh0aGlzLm1vZGVsKSB7XG4gICAgICByZXRWYWwgPSB0aGlzLm1vZGVsLnRvSlNPTigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb2xsZWN0aW9uKSB7XG4gICAgICByZXRWYWwgPSB7XG4gICAgICAgIG1vZGVsczogdGhpcy5jb2xsZWN0aW9uLnRvSlNPTigpLFxuICAgICAgICBtZXRhOiB0aGlzLmNvbGxlY3Rpb24ubWV0YSxcbiAgICAgICAgcGFyYW1zOiB0aGlzLmNvbGxlY3Rpb24ucGFyYW1zXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBvcHRpb25zIHRoYXQgYXJlIGR1cGxpY2F0ZXMgaW4gdGhlIHRlbXBsYXRlc1xuICAgIHBhcnNlZE9wdGlvbnMgPSBfLm9taXQodGhpcy5vcHRpb25zLCBbJ21vZGVsJywgJ2NvbGxlY3Rpb24nLCAnYXBwJ10pO1xuICAgIHJldHVybiBfLmV4dGVuZCh7fSwgcmV0VmFsLCBwYXJzZWRPcHRpb25zKTtcbiAgfSxcblxuICAvKipcbiAgICogQWRkIHNwZWNpYWwgcHJvcGVydGllcyBgX2FwcGAgYW5kIGBfbW9kZWxgIG9yIGBfY29sbGVjdGlvbmAgdG8gcGFzcyB0b1xuICAgKiB0aGUgdGVtcGxhdGVzLlxuICAgKi9cbiAgZGVjb3JhdGVUZW1wbGF0ZURhdGE6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAodGhpcy5hcHApIHtcbiAgICAgIGRhdGEuX2FwcCA9IHRoaXMuYXBwO1xuICAgIH1cbiAgICBpZiAodGhpcy5tb2RlbCkge1xuICAgICAgZGF0YS5fbW9kZWwgPSB0aGlzLm1vZGVsO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2xsZWN0aW9uKSB7XG4gICAgICBkYXRhLl9jb2xsZWN0aW9uID0gdGhpcy5jb2xsZWN0aW9uO1xuICAgIH1cbiAgICBkYXRhLl92aWV3ID0gdGhpcztcbiAgICByZXR1cm4gZGF0YTtcbiAgfSxcblxuICBnZXRUZW1wbGF0ZU5hbWU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMudGVtcGxhdGVfbmFtZSB8fCB0aGlzLm5hbWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldCB0ZW1wbGF0ZSBmdW5jdGlvblxuICAgKi9cbiAgZ2V0VGVtcGxhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmFwcC50ZW1wbGF0ZUFkYXB0ZXIuZ2V0VGVtcGxhdGUodGhpcy5nZXRUZW1wbGF0ZU5hbWUoKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFueSBvcHRpb25zIG5vdCB0byBjcmVhdGUgZGF0YS1hdHRyaWJ1dGVzIGZvci5cbiAgICovXG4gIG5vbkF0dHJpYnV0ZU9wdGlvbnM6IFsnaWQnLCAnY2xhc3NOYW1lJywgJ3RhZ05hbWUnXSxcblxuICAvKipcbiAgICogR2V0IEhUTUwgYXR0cmlidXRlcyB0byBhZGQgdG8gZWwuXG4gICAqL1xuICBnZXRBdHRyaWJ1dGVzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9IHt9LFxuICAgICAgICBmZXRjaFN1bW1hcnkgPSB7fSxcbiAgICAgICAgbW9kZWxVdGlscyA9IHRoaXMuYXBwLm1vZGVsVXRpbHMsXG4gICAgICAgIG5vbkF0dHJpYnV0ZU9wdGlvbnMgPSB0aGlzLm5vbkF0dHJpYnV0ZU9wdGlvbnM7XG5cbiAgICBpZiAodGhpcy5hdHRyaWJ1dGVzKSB7XG4gICAgICBfLmV4dGVuZChhdHRyaWJ1dGVzLCBfLnJlc3VsdCh0aGlzLCAnYXR0cmlidXRlcycpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaWQpIHtcbiAgICAgIGF0dHJpYnV0ZXMuaWQgPSBfLnJlc3VsdCh0aGlzLCBcImlkXCIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jbGFzc05hbWUpIHtcbiAgICAgIGF0dHJpYnV0ZXNbJ2NsYXNzJ10gPSBfLnJlc3VsdCh0aGlzLCBcImNsYXNzTmFtZVwiKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgYGRhdGEtdmlld2AgYXR0cmlidXRlIHdpdGggdmlldyBrZXkuXG4gICAgLy8gRm9yIG5vdywgdmlldyBrZXkgaXMgc2FtZSBhcyB0ZW1wbGF0ZS5cbiAgICBhdHRyaWJ1dGVzWydkYXRhLXZpZXcnXSA9IHRoaXMubmFtZTtcblxuICAgIC8vIEFkZCBtb2RlbCAmIGNvbGxlY3Rpb24gbWV0YSBkYXRhIGZyb20gb3B0aW9ucyxcbiAgICAvLyBhcyB3ZWxsIGFzIGFueSBub24tb2JqZWN0IG9wdGlvbiB2YWx1ZXMuXG4gICAgXy5lYWNoKHRoaXMub3B0aW9ucywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuXG4gICAgICAgIGlmICghXy5pc09iamVjdCh2YWx1ZSkgJiYgIV8uaW5jbHVkZShub25BdHRyaWJ1dGVPcHRpb25zLCBrZXkpKSB7XG4gICAgICAgICAgYXR0cmlidXRlc1tcImRhdGEtXCIgKyBrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBmZXRjaFN1bW1hcnkgPSBCYXNlVmlldy5leHRyYWN0RmV0Y2hTdW1tYXJ5KG1vZGVsVXRpbHMsIHRoaXMub3B0aW9ucyk7XG5cbiAgICBpZiAoIV8uaXNFbXB0eShmZXRjaFN1bW1hcnkpKSB7XG4gICAgICBhdHRyaWJ1dGVzWydkYXRhLWZldGNoX3N1bW1hcnknXSA9IEpTT04uc3RyaW5naWZ5KGZldGNoU3VtbWFyeSk7XG4gICAgfVxuICAgIHJldHVybiBhdHRyaWJ1dGVzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUdXJuIHRlbXBsYXRlIGludG8gSFRNTCwgbWludXMgdGhlIHdyYXBwZXIgZWxlbWVudC5cbiAgICovXG4gIGdldElubmVySHRtbDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRlbXBsYXRlID0gdGhpcy5nZXRUZW1wbGF0ZSgpLFxuICAgICAgICBkYXRhO1xuXG4gICAgdGhpcy5fcHJlUmVuZGVyKCk7XG4gICAgZGF0YSA9IHRoaXMuZ2V0VGVtcGxhdGVEYXRhKCk7XG4gICAgZGF0YSA9IHRoaXMuZGVjb3JhdGVUZW1wbGF0ZURhdGEoZGF0YSk7XG4gICAgaWYgKHRlbXBsYXRlID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcih0aGlzLm5hbWUgKyBcIjogdGVtcGxhdGUgXFxcIlwiICsgdGhpcy5nZXRUZW1wbGF0ZU5hbWUoKSArIFwiXFxcIiBub3QgZm91bmQuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcGxhdGUoZGF0YSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgSFRNTCBmb3IgdGhlIHZpZXcsIGluY2x1ZGluZyB0aGUgd3JhcHBlciBlbGVtZW50LlxuICAgKi9cbiAgZ2V0SHRtbDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGh0bWwgPSB0aGlzLmdldElubmVySHRtbCgpLFxuICAgICAgICBhdHRyaWJ1dGVzID0gdGhpcy5nZXRBdHRyaWJ1dGVzKCksXG4gICAgICAgIHRhZ05hbWUgPSBfLnJlc3VsdCh0aGlzLCBcInRhZ05hbWVcIiksXG4gICAgICAgIGF0dHJTdHJpbmc7XG5cbiAgICBhdHRyU3RyaW5nID0gXy5pbmplY3QoYXR0cmlidXRlcywgZnVuY3Rpb24obWVtbywgdmFsdWUsIGtleSkge1xuICAgICAgcmV0dXJuIG1lbW8gKz0gXCIgXCIgKyBrZXkgKyBcIj1cXFwiXCIgKyBfLmVzY2FwZSh2YWx1ZSkgKyBcIlxcXCJcIjtcbiAgICB9LCAnJyk7XG5cbiAgICByZXR1cm4gXCI8XCIgKyB0YWdOYW1lICsgYXR0clN0cmluZyArIFwiPlwiICsgaHRtbCArIFwiPC9cIiArIHRhZ05hbWUgKyBcIj5cIjtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBodG1sID0gdGhpcy5nZXRJbm5lckh0bWwoKTtcbiAgICB0aGlzLiRlbC5odG1sKGh0bWwpO1xuXG4gICAgLy8gQmVjYXVzZSB3ZSBvbmx5IHNldCB0aGUgYXR0cmlidXRlcyBvZiB0aGUgb3V0ZXIgZWxlbWVudFxuICAgIC8vIHdoZW4gY2FsbGluZyBnZXRIdG1sKCkgKHNlcnZlciksIGxldCdzIG1ha2Ugc3VyZSBpdCBhbHNvXG4gICAgLy8gaGFwcGVucyBkdXJpbmcgcmVuZGVyKCkgKGNsaWVudCkuXG5cbiAgICB0aGlzLiRlbC5hdHRyKHRoaXMuZ2V0QXR0cmlidXRlcygpKTtcbiAgICB0aGlzLl9wb3N0UmVuZGVyKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIElmIHJlbmRlcmVkIG9uIHRoZSBjbGllbnQgbWlzc2luZyBpdHMgZGF0YSxcbiAgICogZmV0Y2ggaXQgYmFzZWQgb24gdGhlIHBhcmFtZXRlcnMgcGFzc2VkIGluLlxuICAgKi9cbiAgZmV0Y2hMYXp5OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcGFyYW1zID0ge30sXG4gICAgICAgIGZldGNoU3BlYztcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZmV0Y2hfcGFyYW1zKSB7XG4gICAgICBpZiAoIV8uaXNPYmplY3QodGhpcy5vcHRpb25zLmZldGNoX3BhcmFtcykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmZXRjaF9wYXJhbXMgbXVzdCBiZSBhbiBvYmplY3QgZm9yIGxhenkgbG9hZGVkIHZpZXdzJylcbiAgICAgIH1cblxuICAgICAgcGFyYW1zID0gdGhpcy5vcHRpb25zLmZldGNoX3BhcmFtcztcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5wYXJhbV9uYW1lKSB7XG4gICAgICBwYXJhbXNbdGhpcy5vcHRpb25zLnBhcmFtX25hbWVdID0gdGhpcy5vcHRpb25zLnBhcmFtX3ZhbHVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMubW9kZWxfaWQgIT0gbnVsbCkge1xuICAgICAgcGFyYW1zLmlkID0gdGhpcy5vcHRpb25zLm1vZGVsX2lkO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMubW9kZWxfbmFtZSAhPSBudWxsKSB7XG4gICAgICBmZXRjaFNwZWMgPSB7XG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgbW9kZWw6IHRoaXMub3B0aW9ucy5tb2RlbF9uYW1lLFxuICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuY29sbGVjdGlvbl9uYW1lICE9IG51bGwpIHtcbiAgICAgIGZldGNoU3BlYyA9IHtcbiAgICAgICAgY29sbGVjdGlvbjoge1xuICAgICAgICAgIGNvbGxlY3Rpb246IHRoaXMub3B0aW9ucy5jb2xsZWN0aW9uX25hbWUsXG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLnNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICB0aGlzLl9wcmVSZW5kZXIoKTtcbiAgICB0aGlzLmFwcC5mZXRjaChmZXRjaFNwZWMsIHRoaXMuX2ZldGNoTGF6eUNhbGxiYWNrLmJpbmQodGhpcykpO1xuICB9LFxuXG4gIF9mZXRjaExhenlDYWxsYmFjazogZnVuY3Rpb24oZXJyLCByZXN1bHRzKSB7XG4gICAgdGhpcy5zZXRMb2FkaW5nKGZhbHNlKTtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkZFVENIIEVSUjogXCIgKyBlcnIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy52aWV3aW5nKSB7XG4gICAgICAvLyBJdCdzIHBvc3NpYmxlIHRoYXQgYnkgdGhlIHRpbWUgdGhlIFhIUiByZXR1cm5zLCB0aGUgdXNlciBoYXMgbmF2aWdhdGVkXG4gICAgICAvLyBhd2F5IHRvIGEgbmV3IHBhZ2UsIGNoZWNrIGZvciB3aGV0aGVyIHdlIGFyZSB2aWV3aW5nIGZpcnN0XG4gICAgICB0aGlzLnBhcnNlT3B0aW9ucyhyZXN1bHRzKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBBbnl0aGluZyB0byBkbyBiZWZvcmUgcmVuZGVyaW5nIG9uIHRoZSBjbGllbnQgb3Igc2VydmVyLlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3IgaS5lLiBhY2Nlc3NpbmcgQG1vZGVsIGluIHRoZSBjbGllbnQgYWZ0ZXJcbiAgICogQGh5ZHJhdGUoKSBpcyBjYWxsZWQsIGJ1dCBiZWZvcmUgQGdldFRlbXBsYXRlRGF0YSgpIGlzIGNhbGxlZC5cbiAgICovXG4gIF9wcmVSZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucHJlUmVuZGVyKCk7XG4gICAgdGhpcy50cmlnZ2VyKCdwcmVSZW5kZXInKTtcbiAgfSxcblxuICAvKipcbiAgICogQW55dGhpbmcgdG8gZG8gYWZ0ZXIgcmVuZGVyaW5nIG9uIHRoZSBjbGllbnQsIHN1Y2ggaW5pdGlhbGl6aW5nIGpRdWVyeVxuICAgKiBwbHVnaW5zIGxpa2Ugc2xpZGVycywgc2xpZGVzaG93cywgZXRjLlxuICAgKi9cbiAgX3Bvc3RSZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYXR0YWNoQ2hpbGRWaWV3cygpO1xuICAgIHRoaXMucG9zdFJlbmRlcigpO1xuICAgIHRoaXMudHJpZ2dlcigncG9zdFJlbmRlcicpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUbyBiZSBvdmVycmlkZGVuIGJ5IHN1YmNsYXNzZXMuXG4gICAqL1xuICBwcmVSZW5kZXI6IF8ubm9vcCxcblxuICAvKipcbiAgICogVG8gYmUgb3ZlcnJpZGRlbiBieSBzdWJjbGFzc2VzLlxuICAgKi9cbiAgcG9zdFJlbmRlcjogXy5ub29wLFxuXG4gIHNldExvYWRpbmc6IGZ1bmN0aW9uKGxvYWRpbmcpIHtcbiAgICB0aGlzLiRlbC50b2dnbGVDbGFzcygnbG9hZGluZycsIGxvYWRpbmcpO1xuICAgIHRoaXMudHJpZ2dlcignbG9hZGluZycsIGxvYWRpbmcpO1xuICB9LFxuXG4gIGF0dGFjaE9yUmVuZGVyOiBmdW5jdGlvbihlbGVtZW50LCBwYXJlbnRWaWV3KSB7XG4gICAgdmFyICRlbCA9IEJhY2tib25lLiQoZWxlbWVudCk7XG5cbiAgICB0aGlzLnBhcmVudFZpZXcgPSBwYXJlbnRWaWV3O1xuICAgIHRoaXMudmlld2luZyA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmxhenkgPT09IHRydWUgJiYgdGhpcy5vcHRpb25zLmNvbGxlY3Rpb24gPT0gbnVsbCAmJiB0aGlzLm9wdGlvbnMubW9kZWwgPT0gbnVsbCkge1xuICAgICAgJGVsLmF0dHIoJ2RhdGEtdmlldy1hdHRhY2hlZCcsIHRydWUpO1xuICAgICAgdGhpcy5zZXRFbGVtZW50KCRlbCk7XG5cbiAgICAgIHJldHVybiB0aGlzLmZldGNoTGF6eSgpO1xuICAgIH1cblxuICAgIGlmICgkZWwuZGF0YSgncmVuZGVyJykpIHtcbiAgICAgICRlbC5yZXBsYWNlV2l0aCh0aGlzLiRlbCk7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkZWwuYXR0cignZGF0YS12aWV3LWF0dGFjaGVkJywgdHJ1ZSk7XG4gICAgICB0aGlzLnNldEVsZW1lbnQoJGVsKTtcbiAgICAgIHRoaXMuYXR0YWNoKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBXaGVuIEhUTUwgaXMgYWxyZWFkeSBwcmVzZW50IChyZW5kZXJlZCBieSBzZXJ2ZXIpLFxuICAgKiB0aGlzIGlzIHdoYXQgZ2V0cyBjYWxsZWQgdG8gYmluZCB0byB0aGUgZWxlbWVudC5cbiAgICovXG4gIGF0dGFjaDogZnVuY3Rpb24oKSB7XG4gICAgLyoqXG4gICAgICogQ2FsbCBwcmVSZW5kZXIoKSBzbyB3ZSBjYW4gYWNjZXNzIHRoaW5ncyBzZXR1cCBieSBAaHlkcmF0ZSgpXG4gICAgICogKGxpa2UgQG1vZGVsKSBpbiBpLmUuIEBnZXRUZW1wbGF0ZURhdGEoKS5cbiAgICAgKi9cbiAgICB0aGlzLl9wcmVSZW5kZXIoKTtcblxuICAgIC8qKlxuICAgICAqIFdlIGhhdmUgdG8gY2FsbCBwb3N0UmVuZGVyKCkgc28gY2xpZW50LW9ubHkgdGhpbmdzIGhhcHBlbixcbiAgICAgKiBpLmUuIGluaXRpYWxpemUgc2xpZGVzaG93cywgZXRjLlxuICAgICAqL1xuICAgIHRoaXMuX3Bvc3RSZW5kZXIoKTtcblxuICAgIHRoaXMudHJpZ2dlcignYXR0YWNoJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhhcHBlbnMgY2xpZW50LXNpZGUuXG4gICAqIEZpbmQgYWxsIG9mIHN1YiB2aWV3IERPTSBlbGVtZW50c1xuICAgKiBHZXQgdGhlIHZpZXcga2V5XG4gICAqIENhbGwgdGhpcy5nZXRWaWV3KClcbiAgICogQXR0YWNoIGNoaWxkVmlld1xuICAgKi9cbiAgYXR0YWNoQ2hpbGRWaWV3czogZnVuY3Rpb24oKSB7XG4gICAgdmFyIF9iYXNlVmlldyA9IHRoaXM7XG5cbiAgICAvLyBSZW1vdmUgYWxsIGNoaWxkIHZpZXdzIGluIGNhc2Ugd2UgYXJlIHJlLXJlbmRlcmluZyB0aHJvdWdoXG4gICAgLy8gbWFudWFsIC5yZW5kZXIoKSBvciAncmVmcmVzaCcgYmVpbmcgdHJpZ2dlcmVkIG9uIHRoZSB2aWV3LlxuICAgIHRoaXMucmVtb3ZlQ2hpbGRWaWV3cygpO1xuICAgIEJhc2VWaWV3LmF0dGFjaCh0aGlzLmFwcCwgdGhpcywgZnVuY3Rpb24odmlld3MpIHtcbiAgICAgIF9iYXNlVmlldy5jaGlsZFZpZXdzID0gdmlld3M7XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVtb3ZlQ2hpbGRWaWV3czogZnVuY3Rpb24oKSB7XG4gICAgKHRoaXMuY2hpbGRWaWV3cyB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbih2aWV3KSB7XG4gICAgICB2aWV3LnJlbW92ZSgpO1xuICAgIH0pO1xuICB9LFxuXG4gIHJlbW92ZTogZnVuY3Rpb24oKSB7XG4gICAgLy8gUmVtb3ZlIHJlZmVyZW5jZSB0byB0aGlzIHZpZXcgZnJvbSBpdHMgcGFyZW50Vmlld1xuICAgIGlmICh0aGlzLnBhcmVudFZpZXcgJiYgdGhpcy5wYXJlbnRWaWV3LmNoaWxkVmlld3MpIHtcbiAgICAgIHRoaXMucGFyZW50Vmlldy5jaGlsZFZpZXdzID0gXy53aXRob3V0KHRoaXMucGFyZW50Vmlldy5jaGlsZFZpZXdzLCB0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZUNoaWxkVmlld3MoKTtcbiAgICB0aGlzLmNoaWxkVmlld3MgPSBudWxsO1xuICAgIHRoaXMucGFyZW50VmlldyA9IG51bGw7XG4gICAgdGhpcy52aWV3aW5nID0gZmFsc2U7XG5cbiAgICB2YXIgb2JqID0gdGhpcy5tb2RlbCB8fCB0aGlzLmNvbGxlY3Rpb247XG5cbiAgICBpZiAob2JqKSB7XG4gICAgICBvYmoub2ZmKG51bGwsIG51bGwsIHRoaXMpO1xuICAgIH1cbiAgICBCYXNlVmlldy5fX3N1cGVyX18ucmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy50cmlnZ2VyKCdyZW1vdmUnKTtcbiAgfVxufSk7XG5cbi8qKlxuICogQ2xhc3MgbWV0aG9kc1xuICogLS0tLS0tLS0tLS0tLVxuICovXG5cbkJhc2VWaWV3LmdldFZpZXcgPSBmdW5jdGlvbih2aWV3TmFtZSwgZW50cnlQYXRoLCBjYWxsYmFjaykge1xuICB2YXIgdmlld1BhdGg7XG5cbiAgaWYgKCFlbnRyeVBhdGgpIGVudHJ5UGF0aCA9ICcnO1xuXG4gIHZpZXdQYXRoID0gZW50cnlQYXRoICsgXCJhcHAvdmlld3MvXCIgKyB2aWV3TmFtZTtcbiAgLy8gY2hlY2sgZm9yIEFNRCBlbnZpcm9ubWVudFxuICBpZiAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBPbmx5IHVzZWQgaW4gQU1EIGVudmlyb25tZW50XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlcXVpcmVBTUQoW3ZpZXdQYXRoXSwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayhyZXF1aXJlKHZpZXdQYXRoKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXF1aXJlKHZpZXdQYXRoKTtcbiAgfVxufTtcblxuQmFzZVZpZXcuZ2V0Vmlld09wdGlvbnMgPSBmdW5jdGlvbiAoJGVsKSB7XG4gIHZhciBwYXJzZWQsXG4gICAgb3B0aW9ucyA9ICRlbC5kYXRhKCk7XG5cbiAgXy5lYWNoKG9wdGlvbnMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICBpZiAoXy5pc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgIHBhcnNlZCA9IF8udW5lc2NhcGUodmFsdWUpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkID0gSlNPTi5wYXJzZShwYXJzZWQpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgb3B0aW9uc1trZXldID0gcGFyc2VkO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59O1xuXG5CYXNlVmlldy5hdHRhY2ggPSBmdW5jdGlvbihhcHAsIHBhcmVudFZpZXcsIGNhbGxiYWNrKSB7XG4gIHZhciBzY29wZSA9IHBhcmVudFZpZXcgPyBwYXJlbnRWaWV3LiRlbCA6IG51bGwsXG4gICAgICBsaXN0ID0gQmFja2JvbmUuJCgnW2RhdGEtdmlld10nLCBzY29wZSkudG9BcnJheSgpO1xuXG4gIGFzeW5jLm1hcChsaXN0LCBmdW5jdGlvbihlbCwgY2IpIHtcbiAgICB2YXIgJGVsLCBvcHRpb25zLCB2aWV3TmFtZSwgZmV0Y2hTdW1tYXJ5O1xuICAgICRlbCA9IEJhY2tib25lLiQoZWwpO1xuICAgIGlmICghJGVsLmRhdGEoJ3ZpZXctYXR0YWNoZWQnKSkge1xuICAgICAgb3B0aW9ucyA9IEJhc2VWaWV3LmdldFZpZXdPcHRpb25zKCRlbCk7XG4gICAgICBvcHRpb25zLmFwcCA9IGFwcDtcblxuICAgICAgdmlld05hbWUgPSBvcHRpb25zLnZpZXc7XG5cbiAgICAgIGZldGNoU3VtbWFyeSA9IG9wdGlvbnMuZmV0Y2hfc3VtbWFyeSB8fMKge307XG4gICAgICBhcHAuZmV0Y2hlci5oeWRyYXRlKGZldGNoU3VtbWFyeSwgeyBhcHA6IGFwcCB9LCBmdW5jdGlvbiAoZXJyLCByZXN1bHRzKSB7XG4gICAgICAgIG9wdGlvbnMgPSBfLmV4dGVuZChvcHRpb25zLCByZXN1bHRzKTtcbiAgICAgICAgQmFzZVZpZXcuZ2V0Vmlldyh2aWV3TmFtZSwgYXBwLm9wdGlvbnMuZW50cnlQYXRoLCBmdW5jdGlvbihWaWV3Q2xhc3MpIHtcbiAgICAgICAgICB2YXIgdmlldyA9IG5ldyBWaWV3Q2xhc3Mob3B0aW9ucyk7XG4gICAgICAgICAgdmlldy5hdHRhY2hPclJlbmRlcigkZWwsIHBhcmVudFZpZXcpO1xuICAgICAgICAgIGNiKG51bGwsIHZpZXcpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYihudWxsLCBudWxsKTtcbiAgICB9XG4gIH0sIGZ1bmN0aW9uKGVyciwgdmlld3MpIHtcbiAgICAvLyBubyBlcnJvciBoYW5kbGluZyBvcmlnaW5hbGx5XG4gICAgY2FsbGJhY2soXy5jb21wYWN0KHZpZXdzKSk7XG4gIH0pO1xufTtcblxuQmFzZVZpZXcucGFyc2VNb2RlbEFuZENvbGxlY3Rpb24gPSBmdW5jdGlvbihtb2RlbFV0aWxzLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLm1vZGVsICE9IG51bGwpIHtcbiAgICBpZiAoIShvcHRpb25zLm1vZGVsIGluc3RhbmNlb2YgQmFja2JvbmUuTW9kZWwpICYmIG9wdGlvbnMubW9kZWxfbmFtZSkge1xuICAgICAgb3B0aW9ucy5tb2RlbCA9IG1vZGVsVXRpbHMuZ2V0TW9kZWwob3B0aW9ucy5tb2RlbF9uYW1lLCBvcHRpb25zLm1vZGVsLCB7XG4gICAgICAgIHBhcnNlOiAhIW9wdGlvbnMucGFyc2UsXG4gICAgICAgIGFwcDogb3B0aW9ucy5hcHBcbiAgICAgIH0pO1xuICAgIH1cbiAgICBvcHRpb25zLm1vZGVsX25hbWUgPSBvcHRpb25zLm1vZGVsX25hbWUgfHwgbW9kZWxVdGlscy5tb2RlbE5hbWUob3B0aW9ucy5tb2RlbC5jb25zdHJ1Y3Rvcik7XG4gICAgb3B0aW9ucy5tb2RlbF9pZCA9IG9wdGlvbnMubW9kZWwuaWQ7XG4gIH1cblxuICBpZiAob3B0aW9ucy5jb2xsZWN0aW9uICE9IG51bGwpIHtcbiAgICBpZiAoIShvcHRpb25zLmNvbGxlY3Rpb24gaW5zdGFuY2VvZiBCYWNrYm9uZS5Db2xsZWN0aW9uKSAmJiBvcHRpb25zLmNvbGxlY3Rpb25fbmFtZSkge1xuICAgICAgb3B0aW9ucy5jb2xsZWN0aW9uID0gbW9kZWxVdGlscy5nZXRDb2xsZWN0aW9uKG9wdGlvbnMuY29sbGVjdGlvbl9uYW1lLCBvcHRpb25zLmNvbGxlY3Rpb24sIHtcbiAgICAgICAgcGFyc2U6ICEhb3B0aW9ucy5wYXJzZSxcbiAgICAgICAgYXBwOiBvcHRpb25zLmFwcCxcbiAgICAgICAgcGFyYW1zOiBvcHRpb25zLmNvbGxlY3Rpb25fcGFyYW1zXG4gICAgICB9KTtcbiAgICB9XG4gICAgb3B0aW9ucy5jb2xsZWN0aW9uX25hbWUgPSBvcHRpb25zLmNvbGxlY3Rpb25fbmFtZSB8fCBtb2RlbFV0aWxzLm1vZGVsTmFtZShvcHRpb25zLmNvbGxlY3Rpb24uY29uc3RydWN0b3IpO1xuICAgIG9wdGlvbnMuY29sbGVjdGlvbl9wYXJhbXMgPSBvcHRpb25zLmNvbGxlY3Rpb25fcGFyYW1zIHx8IG9wdGlvbnMuY29sbGVjdGlvbi5wYXJhbXM7XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucztcbn07XG5cbkJhc2VWaWV3LmV4dHJhY3RGZXRjaFN1bW1hcnkgPSBmdW5jdGlvbiAobW9kZWxVdGlscywgb3B0aW9ucykge1xuICAgIHZhciBmZXRjaFN1bW1hcnkgPSB7fTtcblxuICAgIF8uZWFjaChvcHRpb25zLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICAgIHZhciBpZCwgbW9kZWxPckNvbGxlY3Rpb25JZDtcblxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbih2YWx1ZS5jb25zdHJ1Y3RvcikgJiYgdmFsdWUuY29uc3RydWN0b3IuaWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG1vZGVsT3JDb2xsZWN0aW9uSWQgPSB2YWx1ZS5jb25zdHJ1Y3Rvci5pZDtcbiAgICAgICAgICAgICAgICBpZiAobW9kZWxVdGlscy5pc01vZGVsKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBpZCA9IHZhbHVlLmdldCh2YWx1ZS5pZEF0dHJpYnV0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpZCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCYWlsIGlmIHRoZXJlJ3Mgbm8gSUQ7IHNvbWVvbmUncyB1c2luZyBgdGhpcy5tb2RlbGAgaW4gYVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9uLXN0YW5kYXJkIHdheSwgYW5kIHRoYXQncyBva2F5LlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIENhc3QgdGhlIGBpZGAgYXR0cmlidXRlIHRvIHN0cmluZyB0byBlbnN1cmUgaXQncyBpbmNsdWRlZCBpbiBhdHRyaWJ1dGVzLlxuICAgICAgICAgICAgICAgICAgICAvLyBPbiB0aGUgc2VydmVyLCBpdCBjYW4gYmUgaS5lLiBhbiBgT2JqZWN0SWRgIGZyb20gTW9uZ29vc2UuXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gaWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hTdW1tYXJ5W2tleV0gPSB7bW9kZWw6IG1vZGVsT3JDb2xsZWN0aW9uSWQsIGlkOiB2YWx1ZX07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1vZGVsVXRpbHMuaXNDb2xsZWN0aW9uKHZhbHVlKSAmJiB2YWx1ZS5wYXJhbXMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBmZXRjaFN1bW1hcnlba2V5XSA9IHtjb2xsZWN0aW9uOiBtb2RlbE9yQ29sbGVjdGlvbklkLCBwYXJhbXM6IHZhbHVlLnBhcmFtc307XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmZXRjaFN1bW1hcnk7XG59XG5cbi8qKlxuICogTm9vcHMgb24gdGhlIHNlcnZlciwgYmVjYXVzZSB0aGV5IGRvIERPTSBzdHVmZi5cbiAqL1xuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIEJhc2VWaWV3LnByb3RvdHlwZS5fZW5zdXJlRWxlbWVudCA9IF8ubm9vcDtcbiAgQmFzZVZpZXcucHJvdG90eXBlLmRlbGVnYXRlRXZlbnRzID0gXy5ub29wO1xufVxuIiwidmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyksXG4gICAgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpLFxuICAgIGFzeW5jID0gcmVxdWlyZSgnYXN5bmMnKSxcbiAgICBNb2RlbFN0b3JlID0gcmVxdWlyZSgnLi9zdG9yZS9tb2RlbF9zdG9yZScpLFxuICAgIENvbGxlY3Rpb25TdG9yZSA9IHJlcXVpcmUoJy4vc3RvcmUvY29sbGVjdGlvbl9zdG9yZScpLFxuICAgIGlzU2VydmVyID0gKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKTtcblxuaWYgKCFpc1NlcnZlcikge1xuICBCYWNrYm9uZS4kID0gd2luZG93LiQgfHwgcmVxdWlyZSgnanF1ZXJ5Jyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmV0Y2hlcjtcblxuZnVuY3Rpb24gRmV0Y2hlcihvcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIHRoaXMuYXBwID0gdGhpcy5vcHRpb25zLmFwcDtcbiAgdGhpcy5tb2RlbFV0aWxzID0gdGhpcy5hcHAubW9kZWxVdGlscztcbiAgdGhpcy5tb2RlbFN0b3JlID0gbmV3IE1vZGVsU3RvcmUoe1xuICAgIGFwcDogdGhpcy5hcHAsXG4gICAgbW9kZWxVdGlsczogdGhpcy5tb2RlbFV0aWxzXG4gIH0pO1xuICB0aGlzLmNvbGxlY3Rpb25TdG9yZSA9IG5ldyBDb2xsZWN0aW9uU3RvcmUoe1xuICAgIGFwcDogdGhpcy5hcHAsXG4gICAgbW9kZWxVdGlsczogdGhpcy5tb2RlbFV0aWxzXG4gIH0pO1xufVxuXG5GZXRjaGVyLnByb3RvdHlwZS5idWlsZE9wdGlvbnMgPSBmdW5jdGlvbihhZGRpdGlvbmFsT3B0aW9ucywgcGFyYW1zKSB7XG4gIHZhciBvcHRpb25zID0ge2FwcDogdGhpcy5hcHAsIHBhcnNlOiB0cnVlfTtcbiAgXy5kZWZhdWx0cyhvcHRpb25zLCBhZGRpdGlvbmFsT3B0aW9ucyk7XG4gIF8uZGVmYXVsdHMob3B0aW9ucywgcGFyYW1zKTtcbiAgcmV0dXJuIG9wdGlvbnM7XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgTW9kZWwgb3IgQ29sbGVjdGlvbi5cbiAqL1xuRmV0Y2hlci5wcm90b3R5cGUuZ2V0TW9kZWxPckNvbGxlY3Rpb25Gb3JTcGVjID0gZnVuY3Rpb24oc3BlYywgYXR0cnNPck1vZGVscywgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgaWYgKHNwZWMubW9kZWwpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRNb2RlbEZvclNwZWMoc3BlYywgYXR0cnNPck1vZGVscywgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLmdldENvbGxlY3Rpb25Gb3JTcGVjKHNwZWMsIGF0dHJzT3JNb2RlbHMsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIENvbGxlY3Rpb24uXG4gKi9cbkZldGNoZXIucHJvdG90eXBlLmdldENvbGxlY3Rpb25Gb3JTcGVjID0gZnVuY3Rpb24oc3BlYywgbW9kZWxzLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgY29sbGVjdGlvbk9wdGlvbnMgPSB0aGlzLmJ1aWxkT3B0aW9ucyhvcHRpb25zLCBfLmV4dGVuZCh7cGFyYW1zOiBzcGVjLnBhcmFtc30sIHNwZWMucGFyYW1zKSk7XG4gIG1vZGVscyA9IG1vZGVscyB8fCBbXTtcbiAgcmV0dXJuIHRoaXMubW9kZWxVdGlscy5nZXRDb2xsZWN0aW9uKHNwZWMuY29sbGVjdGlvbiwgbW9kZWxzLCBjb2xsZWN0aW9uT3B0aW9ucywgY2FsbGJhY2spO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIE1vZGVsLlxuICovXG5GZXRjaGVyLnByb3RvdHlwZS5nZXRNb2RlbEZvclNwZWMgPSBmdW5jdGlvbihzcGVjLCBhdHRyaWJ1dGVzLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgbW9kZWxPcHRpb25zID0gdGhpcy5idWlsZE9wdGlvbnMob3B0aW9ucyk7XG5cbiAgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXMgfHwge307XG4gIF8uZGVmYXVsdHMoYXR0cmlidXRlcywgc3BlYy5wYXJhbXMpO1xuXG4gIHJldHVybiB0aGlzLm1vZGVsVXRpbHMuZ2V0TW9kZWwoc3BlYy5tb2RlbCwgYXR0cmlidXRlcywgbW9kZWxPcHRpb25zLCBjYWxsYmFjayk7XG59O1xuXG5cbi8qKlxuICogbWFwIGZldGNoU3BlY3MgdG8gbW9kZWxzIGFuZCBmZXRjaCBkYXRhIGluIHBhcmFsbGVsXG4gKi9cbkZldGNoZXIucHJvdG90eXBlLl9yZXRyaWV2ZSA9IGZ1bmN0aW9uKGZldGNoU3BlY3MsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBiYXRjaGVkUmVxdWVzdHMgPSB7fTtcblxuICBfLmVhY2goZmV0Y2hTcGVjcywgZnVuY3Rpb24oc3BlYywgbmFtZSkge1xuICAgIGJhdGNoZWRSZXF1ZXN0c1tuYW1lXSA9IGZ1bmN0aW9uKGNiKSB7XG4gICAgICB2YXIgbW9kZWw7XG5cbiAgICAgIGlmICghb3B0aW9ucy5yZWFkRnJvbUNhY2hlKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hGcm9tQXBpKHNwZWMsIG9wdGlvbnMsIGNiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZGVsID0gbnVsbDtcblxuICAgICAgICAvLyBGaXJzdCwgc2VlIGlmIHdlIGhhdmUgc3RvcmVkIHRoZSBtb2RlbCBvciBjb2xsZWN0aW9uLlxuICAgICAgICBpZiAoc3BlYy5tb2RlbCAhPSBudWxsKSB7XG5cbiAgICAgICAgICB0aGlzLl9yZXRyaWV2ZU1vZGVsKHNwZWMsIGZ1bmN0aW9uKGVyciwgbW9kZWwpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlZnJlc2hEYXRhKHNwZWMsIG1vZGVsLCBvcHRpb25zLCBjYik7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKHNwZWMuY29sbGVjdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5jb2xsZWN0aW9uU3RvcmUuZ2V0KHNwZWMuY29sbGVjdGlvbiwgc3BlYy5wYXJhbXMsIGZ1bmN0aW9uKGNvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX3JlZnJlc2hEYXRhKHNwZWMsIGNvbGxlY3Rpb24sIG9wdGlvbnMsIGNiKTtcbiAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKTtcbiAgfSwgdGhpcyk7XG4gIGFzeW5jLnBhcmFsbGVsKGJhdGNoZWRSZXF1ZXN0cywgY2FsbGJhY2spO1xufTtcblxuRmV0Y2hlci5wcm90b3R5cGUuX3JlZnJlc2hEYXRhID0gZnVuY3Rpb24oc3BlYywgbW9kZWxPckNvbGxlY3Rpb24sIG9wdGlvbnMsIGNiKSB7XG5cbiAgLy8gSWYgd2UgZm91bmQgdGhlIG1vZGVsL2NvbGxlY3Rpb24gaW4gdGhlIHN0b3JlLCB0aGVuIHJldHVybiB0aGF0LlxuICBpZiAoIXRoaXMubmVlZHNGZXRjaChtb2RlbE9yQ29sbGVjdGlvbiwgc3BlYykpIHtcbiAgICBjYihudWxsLCBtb2RlbE9yQ29sbGVjdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgLyoqXG4gICAgICogRWxzZSwgZmV0Y2ggYW5ldy5cbiAgICAgKi9cbiAgICB0aGlzLmZldGNoRnJvbUFwaShzcGVjLCBvcHRpb25zLCBjYik7XG4gIH1cbn1cblxuRmV0Y2hlci5wcm90b3R5cGUuX3JldHJpZXZlTW9kZWwgPSBmdW5jdGlvbihzcGVjLCBjYWxsYmFjaykge1xuICB2YXIgZmV0Y2hlciA9IHRoaXM7XG5cbiAgLy8gQXR0ZW1wdCB0byBmZXRjaCBmcm9tIHRoZSBtb2RlbFN0b3JlIGJhc2VkIG9uIHRoZSBpZEF0dHJpYnV0ZVxuICB0aGlzLm1vZGVsVXRpbHMubW9kZWxJZEF0dHJpYnV0ZShzcGVjLm1vZGVsLCBmdW5jdGlvbihpZEF0dHJpYnV0ZSkge1xuICAgIHZhciBtb2RlbCA9IGZldGNoZXIubW9kZWxTdG9yZS5nZXQoc3BlYy5tb2RlbCwgc3BlYy5wYXJhbXNbaWRBdHRyaWJ1dGVdKTtcbiAgICBpZiAobW9kZWwpIHJldHVybiBjYWxsYmFjayhudWxsLCBtb2RlbCk7XG5cbiAgICAvLyBpZiB0aGVyZSBhcmUgbm8gb3RoZXIga2V5cyB0aGFuIHRoZSBpZCBpbiB0aGUgcGFyYW1zLCByZXR1cm4gbnVsbDtcbiAgICBpZiAoXy5pc0VtcHR5KF8ub21pdChzcGVjLnBhcmFtcywgaWRBdHRyaWJ1dGUpKSlcbiAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBudWxsKTtcblxuICAgIC8vIEF0dGVtcHQgdG8gZmV0Y2ggdGhlIG1vZGVsIGluIHRoZSBtb2RlbFN0b3JlIGJhc2VkIG9uIHRoZSBvdGhlciBwYXJhbXNcbiAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgZmV0Y2hlci5tb2RlbFN0b3JlLmZpbmQoc3BlYy5tb2RlbCwgc3BlYy5wYXJhbXMpKTtcbiAgfSk7XG59O1xuXG5GZXRjaGVyLnByb3RvdHlwZS5uZWVkc0ZldGNoID0gZnVuY3Rpb24obW9kZWxPckNvbGxlY3Rpb24sIHNwZWMpIHtcbiAgaWYgKG1vZGVsT3JDb2xsZWN0aW9uID09IG51bGwpIHJldHVybiB0cnVlO1xuXG4gIGlmICh0aGlzLm1vZGVsVXRpbHMuaXNNb2RlbChtb2RlbE9yQ29sbGVjdGlvbikgJiYgdGhpcy5pc01pc3NpbmdLZXlzKG1vZGVsT3JDb2xsZWN0aW9uLmF0dHJpYnV0ZXMsIHNwZWMuZW5zdXJlS2V5cykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChzcGVjLm5lZWRzRmV0Y2ggPT09IHRydWUpIHJldHVybiB0cnVlO1xuICBpZiAodHlwZW9mIHNwZWMubmVlZHNGZXRjaCA9PT0gJ2Z1bmN0aW9uJyAmJiBzcGVjLm5lZWRzRmV0Y2gobW9kZWxPckNvbGxlY3Rpb24pKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuRmV0Y2hlci5wcm90b3R5cGUuaXNNaXNzaW5nS2V5cyA9IGZ1bmN0aW9uKG1vZGVsRGF0YSwga2V5cykge1xuICB2YXIga2V5O1xuXG4gIGlmIChrZXlzID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIV8uaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0ga2V5cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGtleSA9IGtleXNbaV07XG4gICAgaWYgKG1vZGVsRGF0YVtrZXldID09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5GZXRjaGVyLnByb3RvdHlwZS5mZXRjaEZyb21BcGkgPSBmdW5jdGlvbihzcGVjLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgbW9kZWwgPSB0aGlzLmdldE1vZGVsT3JDb2xsZWN0aW9uRm9yU3BlYyhzcGVjKSxcbiAgICAgIGZldGNoZXIgPSB0aGlzO1xuXG4gIG1vZGVsLmZldGNoKHtcbiAgICBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMgfHwge30sXG4gICAgZGF0YTogc3BlYy5wYXJhbXMsXG4gICAgc3VjY2VzczogZnVuY3Rpb24obW9kZWwsIGJvZHkpIHtcbiAgICAgIGNhbGxiYWNrKG51bGwsIG1vZGVsKTtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihtb2RlbCwgcmVzcCwgb3B0aW9ucykge1xuICAgICAgdmFyIGJvZHksIHJlc3BPdXRwdXQsIGVycjtcblxuICAgICAgYm9keSA9IHJlc3AuYm9keTtcbiAgICAgIHJlc3AuYm9keSA9IHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJyA/IGJvZHkuc2xpY2UoMCwgMTUwKSA6IGJvZHk7XG4gICAgICByZXNwT3V0cHV0ID0gSlNPTi5zdHJpbmdpZnkocmVzcCk7XG4gICAgICBlcnIgPSBuZXcgRXJyb3IoXCJFUlJPUiBmZXRjaGluZyBtb2RlbCAnXCIgKyBmZXRjaGVyLm1vZGVsVXRpbHMubW9kZWxOYW1lKG1vZGVsLmNvbnN0cnVjdG9yKSArIFwiJyB3aXRoIG9wdGlvbnMgJ1wiICsgSlNPTi5zdHJpbmdpZnkob3B0aW9ucykgKyBcIicuIFJlc3BvbnNlOiBcIiArIHJlc3BPdXRwdXQpO1xuICAgICAgZXJyLnN0YXR1cyA9IHJlc3Auc3RhdHVzO1xuICAgICAgZXJyLmJvZHkgPSBib2R5O1xuICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICB9XG4gIH0pO1xufTtcblxuRmV0Y2hlci5wcm90b3R5cGUucmV0cmlldmVNb2RlbHNGb3JDb2xsZWN0aW9uTmFtZSA9IGZ1bmN0aW9uKGNvbGxlY3Rpb25OYW1lLCBtb2RlbElkcykge1xuICB2YXIgbW9kZWxOYW1lID0gdGhpcy5tb2RlbFV0aWxzLmdldE1vZGVsTmFtZUZvckNvbGxlY3Rpb25OYW1lKGNvbGxlY3Rpb25OYW1lKTtcbiAgcmV0dXJuIHRoaXMucmV0cmlldmVNb2RlbHMobW9kZWxOYW1lLCBtb2RlbElkcyk7XG59O1xuXG5GZXRjaGVyLnByb3RvdHlwZS5yZXRyaWV2ZU1vZGVscyA9IGZ1bmN0aW9uKG1vZGVsTmFtZSwgbW9kZWxJZHMpIHtcbiAgcmV0dXJuIG1vZGVsSWRzLm1hcChmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsU3RvcmUuZ2V0KG1vZGVsTmFtZSwgaWQpO1xuICB9LCB0aGlzKTtcbn07XG5cbkZldGNoZXIucHJvdG90eXBlLnN1bW1hcml6ZSA9IGZ1bmN0aW9uKG1vZGVsT3JDb2xsZWN0aW9uKSB7XG4gIHZhciBzdW1tYXJ5ID0ge30sXG4gICAgICBpZEF0dHJpYnV0ZTtcblxuICBpZiAodGhpcy5tb2RlbFV0aWxzLmlzQ29sbGVjdGlvbihtb2RlbE9yQ29sbGVjdGlvbikpIHtcbiAgICBpZEF0dHJpYnV0ZSA9IG1vZGVsT3JDb2xsZWN0aW9uLm1vZGVsLnByb3RvdHlwZS5pZEF0dHJpYnV0ZTtcbiAgICBzdW1tYXJ5ID0ge1xuICAgICAgY29sbGVjdGlvbjogdGhpcy5tb2RlbFV0aWxzLm1vZGVsTmFtZShtb2RlbE9yQ29sbGVjdGlvbi5jb25zdHJ1Y3RvciksXG4gICAgICBpZHM6IG1vZGVsT3JDb2xsZWN0aW9uLnBsdWNrKGlkQXR0cmlidXRlKSxcbiAgICAgIHBhcmFtczogbW9kZWxPckNvbGxlY3Rpb24ucGFyYW1zLFxuICAgICAgbWV0YTogbW9kZWxPckNvbGxlY3Rpb24ubWV0YVxuICAgIH07XG4gIH0gZWxzZSBpZiAodGhpcy5tb2RlbFV0aWxzLmlzTW9kZWwobW9kZWxPckNvbGxlY3Rpb24pKSB7XG4gICAgc3VtbWFyeSA9IHtcbiAgICAgIG1vZGVsOiB0aGlzLm1vZGVsVXRpbHMubW9kZWxOYW1lKG1vZGVsT3JDb2xsZWN0aW9uLmNvbnN0cnVjdG9yKSxcbiAgICAgIGlkOiBtb2RlbE9yQ29sbGVjdGlvbi5pZFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHN1bW1hcnk7XG59O1xuXG5GZXRjaGVyLnByb3RvdHlwZS5zdG9yZVJlc3VsdHMgPSBmdW5jdGlvbihyZXN1bHRzKSB7XG4gIF8uZWFjaChyZXN1bHRzLCBmdW5jdGlvbihtb2RlbE9yQ29sbGVjdGlvbikge1xuICAgIG1vZGVsT3JDb2xsZWN0aW9uLnN0b3JlKCk7XG4gIH0pO1xufTtcblxuRmV0Y2hlci5wcm90b3R5cGUuYm9vdHN0cmFwRGF0YSA9IGZ1bmN0aW9uKG1vZGVsTWFwLCBjYWxsYmFjaykge1xuICB2YXIgcmVzdWx0cyA9IHt9LFxuICAgICAgZmV0Y2hlciA9IHRoaXM7XG5cbiAgYXN5bmMuZm9yRWFjaChfLmtleXMobW9kZWxNYXApLCBmdW5jdGlvbihuYW1lLCBjYikge1xuICAgIHZhciBtYXAgPSBtb2RlbE1hcFtuYW1lXTtcbiAgICBmZXRjaGVyLmdldE1vZGVsT3JDb2xsZWN0aW9uRm9yU3BlYyhtYXAuc3VtbWFyeSwgbWFwLmRhdGEsIF8ucGljayhtYXAuc3VtbWFyeSwgJ3BhcmFtcycsICdtZXRhJyksIGZ1bmN0aW9uKG1vZGVsT3JDb2xsZWN0aW9uKSB7XG4gICAgICByZXN1bHRzW25hbWVdID0gbW9kZWxPckNvbGxlY3Rpb247XG4gICAgICBjYihudWxsKTtcbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgaWYgKF8uaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgIGNhbGxiYWNrKHJlc3VsdHMpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5GZXRjaGVyLnByb3RvdHlwZS5oeWRyYXRlID0gZnVuY3Rpb24oc3VtbWFyaWVzLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgcmVzdWx0cyA9IHt9LFxuICAgICAgZmV0Y2hlciA9IHRoaXM7XG5cbiAgLyoqXG4gICAqIFN1cHBvcnQgYm90aCAoc3VtbWFyaWVzLCBvcHRpb25zLCBjYWxsYmFjaylcbiAgICogYW5kIChzdW1tYXJpZXMsIGNhbGxiYWNrKS5cbiAgICovXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgfVxuXG4gIGFzeW5jLmZvckVhY2goXy5rZXlzKHN1bW1hcmllcyksIGZ1bmN0aW9uKG5hbWUsIGNiKSB7XG4gICAgdmFyIHN1bW1hcnkgPSBzdW1tYXJpZXNbbmFtZV07XG4gICAgaWYgKHN1bW1hcnkubW9kZWwgIT0gbnVsbCkge1xuICAgICAgcmVzdWx0c1tuYW1lXSA9IGZldGNoZXIubW9kZWxTdG9yZS5nZXQoc3VtbWFyeS5tb2RlbCwgc3VtbWFyeS5pZCk7XG5cbiAgICAgIGlmICgocmVzdWx0c1tuYW1lXSAhPSBudWxsKSAmJiAob3B0aW9ucy5hcHAgIT0gbnVsbCkpIHtcbiAgICAgICAgcmVzdWx0c1tuYW1lXS5hcHAgPSBvcHRpb25zLmFwcDtcbiAgICAgIH1cblxuICAgICAgY2IobnVsbCk7XG5cbiAgICB9IGVsc2UgaWYgKHN1bW1hcnkuY29sbGVjdGlvbiAhPSBudWxsKSB7XG4gICAgICAvLyBBbHNvIHN1cHBvcnQgZ2V0dGluZyBhbGwgbW9kZWxzIGZvciBhIGNvbGxlY3Rpb24uXG4gICAgICBmZXRjaGVyLmNvbGxlY3Rpb25TdG9yZS5nZXQoc3VtbWFyeS5jb2xsZWN0aW9uLCBzdW1tYXJ5LnBhcmFtcywgZnVuY3Rpb24oY29sbGVjdGlvbikge1xuICAgICAgICBpZiAoY29sbGVjdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29sbGVjdGlvbiBvZiB0eXBlIFxcXCJcIiArIHN1bW1hcnkuY29sbGVjdGlvbiArIFwiXFxcIiBub3QgZm91bmQgZm9yIHBhcmFtczogXCIgKyBKU09OLnN0cmluZ2lmeShzdW1tYXJ5LnBhcmFtcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0c1tuYW1lXSA9IGNvbGxlY3Rpb247XG5cbiAgICAgICAgY2IobnVsbCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIGZ1bmN0aW9uKGVycikge1xuICAgIGNhbGxiYWNrKGVyciwgcmVzdWx0cyk7XG4gIH0pO1xufTtcblxuRmV0Y2hlci5wcm90b3R5cGUucGVuZGluZ0ZldGNoZXMgPSAwO1xuXG5GZXRjaGVyLnByb3RvdHlwZS5mZXRjaCA9IGZ1bmN0aW9uKGZldGNoU3BlY3MsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBmZXRjaGVyID0gdGhpcztcblxuICAvKipcbiAgICogU3VwcG9ydCBib3RoIChmZXRjaFNwZWNzLCBvcHRpb25zLCBjYWxsYmFjaylcbiAgICogYW5kIChmZXRjaFNwZWNzLCBjYWxsYmFjaykuXG4gICAqL1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICBvcHRpb25zID0ge307XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIH1cblxuICAvLyBEaWZmZXJlbnQgZGVmYXVsdHMgZm9yIGNsaWVudCB2IHNlcnZlci5cbiAgaWYgKGlzU2VydmVyKSB7XG4gICAgaWYgKG9wdGlvbnMucmVhZEZyb21DYWNoZSA9PSBudWxsKSB7XG4gICAgICBvcHRpb25zLnJlYWRGcm9tQ2FjaGUgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMud3JpdGVUb0NhY2hlID09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMud3JpdGVUb0NhY2hlID0gZmFsc2U7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChvcHRpb25zLnJlYWRGcm9tQ2FjaGUgPT0gbnVsbCkge1xuICAgICAgb3B0aW9ucy5yZWFkRnJvbUNhY2hlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMud3JpdGVUb0NhY2hlID09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMud3JpdGVUb0NhY2hlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICB0aGlzLnBlbmRpbmdGZXRjaGVzKys7XG4gIHRoaXMudHJpZ2dlcignZmV0Y2g6c3RhcnQnLCBmZXRjaFNwZWNzKTtcbiAgdGhpcy5fcmV0cmlldmUoZmV0Y2hTcGVjcywgb3B0aW9ucywgZnVuY3Rpb24oZXJyLCByZXN1bHRzKSB7XG4gICAgZmV0Y2hlci5wZW5kaW5nRmV0Y2hlcy0tO1xuICAgIGZldGNoZXIudHJpZ2dlcignZmV0Y2g6ZW5kJywgZmV0Y2hTcGVjcywgZXJyLCByZXN1bHRzKTtcbiAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICBpZiAob3B0aW9ucy53cml0ZVRvQ2FjaGUpIHtcbiAgICAgIGZldGNoZXIuc3RvcmVSZXN1bHRzKHJlc3VsdHMpO1xuICAgIH1cbiAgICBjYWxsYmFjayhudWxsLCByZXN1bHRzKTtcbiAgfSk7XG59O1xuXG4vLyBNaXhpbiBCYWNrYm9uZS5FdmVudHMgZm9yIGV2ZW50cyB0aGF0IHdvcmsgaW4gY2xpZW50ICYgc2VydmVyLlxuXy5leHRlbmQoRmV0Y2hlci5wcm90b3R5cGUsIEJhY2tib25lLkV2ZW50cyk7XG4iLCIvKipcbiAqIFNpbmNlIHdlIG1ha2UgcmVuZHIgZmlsZXMgQU1EIGZyaWVuZGx5IG9uIGFwcCBzZXR1cCBzdGFnZVxuICogd2UgbmVlZCB0byBwcmV0ZW5kIHRoYXQgdGhpcyBjb2RlIGlzIHB1cmUgY29tbW9uanNcbiAqIG1lYW5zIG5vIEFNRC1zdHlsZSByZXF1aXJlIGNhbGxzLlxuICovXG52YXIgQmFzZU1vZGVsID0gcmVxdWlyZShcIi4vYmFzZS9tb2RlbFwiKSxcbiAgICBCYXNlQ29sbGVjdGlvbiA9IHJlcXVpcmUoXCIuL2Jhc2UvY29sbGVjdGlvblwiKTtcblxudmFyIHR5cGVQYXRoID0ge1xuICBtb2RlbDogXCJhcHAvbW9kZWxzL1wiLFxuICBjb2xsZWN0aW9uOiBcImFwcC9jb2xsZWN0aW9ucy9cIlxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb2RlbFV0aWxzO1xuXG5mdW5jdGlvbiBNb2RlbFV0aWxzKGVudHJ5UGF0aCkge1xuICB0aGlzLmVudHJ5UGF0aCA9IGVudHJ5UGF0aDtcbiAgdGhpcy5fY2xhc3NNYXAgPSB7fTtcbn1cblxuTW9kZWxVdGlscy5wcm90b3R5cGUuZ2V0TW9kZWwgPSBmdW5jdGlvbihwYXRoLCBhdHRycywgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIE1vZGVsO1xuICBhdHRycyA9IGF0dHJzIHx8IHt9O1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5nZXRNb2RlbENvbnN0cnVjdG9yKHBhdGgsIGZ1bmN0aW9uKE1vZGVsKSB7XG4gICAgICBjYWxsYmFjayhuZXcgTW9kZWwoYXR0cnMsIG9wdGlvbnMpKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBNb2RlbCA9IHRoaXMuZ2V0TW9kZWxDb25zdHJ1Y3RvcihwYXRoKTtcbiAgICByZXR1cm4gbmV3IE1vZGVsKGF0dHJzLCBvcHRpb25zKTtcbiAgfVxufTtcblxuTW9kZWxVdGlscy5wcm90b3R5cGUuZ2V0Q29sbGVjdGlvbiA9IGZ1bmN0aW9uKHBhdGgsIG1vZGVscywgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIENvbGxlY3Rpb247XG4gIG1vZGVscyA9IG1vZGVscyB8fCBbXTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuZ2V0Q29sbGVjdGlvbkNvbnN0cnVjdG9yKHBhdGgsIGZ1bmN0aW9uKENvbGxlY3Rpb24pIHtcbiAgICAgIGNhbGxiYWNrKG5ldyBDb2xsZWN0aW9uKG1vZGVscywgb3B0aW9ucykpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIENvbGxlY3Rpb24gPSB0aGlzLmdldENvbGxlY3Rpb25Db25zdHJ1Y3RvcihwYXRoKTtcbiAgICByZXR1cm4gbmV3IENvbGxlY3Rpb24obW9kZWxzLCBvcHRpb25zKTtcbiAgfVxufTtcblxuTW9kZWxVdGlscy5wcm90b3R5cGUuZ2V0TW9kZWxDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKHBhdGgsIGNhbGxiYWNrKSB7XG4gIHJldHVybiB0aGlzLmZldGNoQ29uc3RydWN0b3IoJ21vZGVsJywgcGF0aCwgY2FsbGJhY2spO1xufTtcblxuTW9kZWxVdGlscy5wcm90b3R5cGUuZ2V0Q29sbGVjdGlvbkNvbnN0cnVjdG9yID0gZnVuY3Rpb24ocGF0aCwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIHRoaXMuZmV0Y2hDb25zdHJ1Y3RvcignY29sbGVjdGlvbicsIHBhdGgsIGNhbGxiYWNrKTtcbn07XG5cbk1vZGVsVXRpbHMucHJvdG90eXBlLmdldEZ1bGxQYXRoID0gZnVuY3Rpb24odHlwZSwgcGF0aCkge1xuICByZXR1cm4gdGhpcy5lbnRyeVBhdGggKyB0eXBlUGF0aFt0eXBlXSArIHBhdGg7XG59O1xuXG5Nb2RlbFV0aWxzLnByb3RvdHlwZS5mZXRjaENvbnN0cnVjdG9yID0gZnVuY3Rpb24odHlwZSwgcGF0aCwgY2FsbGJhY2spIHtcbiAgcGF0aCA9IHRoaXMudW5kZXJzY29yaXplKHBhdGgpO1xuXG4gIHZhciBmdWxsUGF0aCA9IHRoaXMuZ2V0RnVsbFBhdGgodHlwZSwgcGF0aCk7XG5cbiAgaWYgKHRoaXMuX2NsYXNzTWFwW3BhdGhdKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykgPyBjYWxsYmFjayh0aGlzLl9jbGFzc01hcFtwYXRoXSkgOiB0aGlzLl9jbGFzc01hcFtwYXRoXTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIE9ubHkgdXNlZCBpbiBBTUQgZW52aXJvbm1lbnRcbiAgICBpZiAodHlwZW9mIGRlZmluZSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5fcmVxdWlyZUFNRChbZnVsbFBhdGhdLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKHRoaXMuX3JlcXVpcmUoZnVsbFBhdGgpKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlKGZ1bGxQYXRoKTtcbiAgfVxufTtcblxuTW9kZWxVdGlscy5wcm90b3R5cGUuX3JlcXVpcmUgPSByZXF1aXJlO1xuXG5Nb2RlbFV0aWxzLnByb3RvdHlwZS5fcmVxdWlyZUFNRCA9IHJlcXVpcmU7XG5cbk1vZGVsVXRpbHMucHJvdG90eXBlLmlzTW9kZWwgPSBmdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEJhc2VNb2RlbDtcbn07XG5cbk1vZGVsVXRpbHMucHJvdG90eXBlLmlzQ29sbGVjdGlvbiA9IGZ1bmN0aW9uKG9iaikge1xuICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQmFzZUNvbGxlY3Rpb247XG59O1xuXG5Nb2RlbFV0aWxzLnByb3RvdHlwZS5nZXRNb2RlbE5hbWVGb3JDb2xsZWN0aW9uTmFtZSA9IGZ1bmN0aW9uKGNvbGxlY3Rpb25OYW1lKSB7XG4gIHZhciBDb2xsZWN0aW9uO1xuICBDb2xsZWN0aW9uID0gdGhpcy5nZXRDb2xsZWN0aW9uQ29uc3RydWN0b3IoY29sbGVjdGlvbk5hbWUpO1xuICByZXR1cm4gdGhpcy5tb2RlbE5hbWUoQ29sbGVjdGlvbi5wcm90b3R5cGUubW9kZWwpO1xufTtcblxuTW9kZWxVdGlscy51cHBlcmNhc2VSZSA9IC8oW0EtWl0pL2c7XG5cbk1vZGVsVXRpbHMucHJvdG90eXBlLnVuZGVyc2Nvcml6ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgaWYgKG5hbWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgbmFtZSA9IG5hbWUucmVwbGFjZShNb2RlbFV0aWxzLnVwcGVyY2FzZVJlLCBmdW5jdGlvbihjKSB7XG4gICAgcmV0dXJuIFwiX1wiICsgYy50b0xvd2VyQ2FzZSgpO1xuICB9KTtcbiAgaWYgKG5hbWVbMF0gPT09IFwiX1wiKSB7XG4gICAgbmFtZSA9IG5hbWUuc2xpY2UoMSk7XG4gIH1cbiAgcmV0dXJuIG5hbWU7XG59O1xuXG4vKipcbiAqIFRoZSAnbmFtZScgcHJvcGVydHkgaXMgYWRkZWQgdG8gdGhlIGNvbnN0cnVjdG9yIHdoZW4gdXNpbmcgYSBuYW1lZCBmdW5jdGlvbixcbiAqIGFuZCBpdCBjYW5ub3QgYmUgY2hhbmdlZC4gIEkuZS46XG4gKlxuICogZnVuY3Rpb24gTXlDbGFzcygpe31cbiAqIE15Q2xhc3MubmFtZVxuICogLT4gXCJNeUNsYXNzXCJcbiAqXG4gKiBXZSBmaXJzdCBsb29rIGZvciB0aGUgJ2lkJyBwcm9wZXJ0eSBvZiB0aGUgY29uc3RydWN0b3IsIHdoaWNoIGlzIGNvbXBhdGlibGVcbiAqIHdpdGggc3RhbmRhcmQgQmFja2JvbmUtc3R5bGUgY2xhc3MgaW5oZXJpdGFuY2UuXG4gKlxuICogdmFyIE15Q2xhc3MgPSBCYWNrYm9uZS5Nb2RlbC5leHRlbmQoe30pO1xuICogTXlDbGFzcy5uYW1lXG4gKiAtPiBcIlwiXG4gKiBNeUNsYXNzLmlkID0gXCJNeUNsYXNzXCJcbiAqL1xuTW9kZWxVdGlscy5wcm90b3R5cGUubW9kZWxOYW1lID0gZnVuY3Rpb24obW9kZWxPckNvbGxlY3Rpb25DbGFzcykge1xuICByZXR1cm4gdGhpcy51bmRlcnNjb3JpemUobW9kZWxPckNvbGxlY3Rpb25DbGFzcy5pZCB8fCBtb2RlbE9yQ29sbGVjdGlvbkNsYXNzLm5hbWUpO1xufTtcblxuTW9kZWxVdGlscy5wcm90b3R5cGUubW9kZWxJZEF0dHJpYnV0ZSA9IGZ1bmN0aW9uKG1vZGVsTmFtZSwgY2FsbGJhY2spIHtcbiAgdGhpcy5nZXRNb2RlbENvbnN0cnVjdG9yKG1vZGVsTmFtZSwgZnVuY3Rpb24oY29uc3RydWN0b3IpIHtcbiAgICBjYWxsYmFjayhjb25zdHJ1Y3Rvci5wcm90b3R5cGUuaWRBdHRyaWJ1dGUpO1xuICB9KTtcbn07XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKSxcbiAgICBTdXBlciA9IHJlcXVpcmUoJy4vbWVtb3J5X3N0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sbGVjdGlvblN0b3JlO1xuXG5mdW5jdGlvbiBDb2xsZWN0aW9uU3RvcmUoKSB7XG4gIFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbl8uZXh0ZW5kKENvbGxlY3Rpb25TdG9yZS5wcm90b3R5cGUsIFN1cGVyLnByb3RvdHlwZSwge1xuICBleHBpcmVTZWNvbmRzOiBudWxsLFxuXG4gIHNldDogZnVuY3Rpb24oY29sbGVjdGlvbiwgcGFyYW1zKSB7XG4gICAgdmFyIGtleSA9IHRoaXMuX2dldFN0b3JlS2V5Rm9yQ29sbGVjdGlvbihjb2xsZWN0aW9uLCBwYXJhbXMpO1xuICAgIHJldHVybiBTdXBlci5wcm90b3R5cGUuc2V0LmNhbGwodGhpcywga2V5LCBjb2xsZWN0aW9uLCB0aGlzLmV4cGlyZVNlY29uZHMpO1xuICB9LFxuXG4gIGdldDogZnVuY3Rpb24oY29sbGVjdGlvbk5hbWUsIHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICBjYWNoZWRDb2xsZWN0aW9uO1xuXG4gICAgdGhpcy5tZXJnZVBhcmFtcyhjb2xsZWN0aW9uTmFtZSwgcGFyYW1zLCBmdW5jdGlvbiAobWVyZ2VkUGFyYW1zKSB7XG4gICAgICB2YXIga2V5ID0gc2VsZi5fZ2V0U3RvcmVLZXkoY29sbGVjdGlvbk5hbWUsIG1lcmdlZFBhcmFtcyk7XG4gICAgICBjYWNoZWRDb2xsZWN0aW9uID0gU3VwZXIucHJvdG90eXBlLmdldC5jYWxsKHNlbGYsIGtleSk7XG5cbiAgICAgIGlmIChfLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICAgIGNhbGxiYWNrKGNhY2hlZENvbGxlY3Rpb24pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNhY2hlZENvbGxlY3Rpb247XG4gIH0sXG5cbiAgY2xlYXI6IGZ1bmN0aW9uKGNvbGxlY3Rpb25OYW1lLCBwYXJhbXMpIHtcbiAgICBpZiAoIV8uaXNVbmRlZmluZWQoY29sbGVjdGlvbk5hbWUpICYmIHBhcmFtcykge1xuICAgICAgdmFyIGtleSA9IHRoaXMuX2dldFN0b3JlS2V5KGNvbGxlY3Rpb25OYW1lLCBwYXJhbXMpO1xuICAgICAgcmV0dXJuIFN1cGVyLnByb3RvdHlwZS5jbGVhci5jYWxsKHRoaXMsIGtleSk7ICAgICAgXG4gICAgfSBlbHNlIGlmICghXy5pc1VuZGVmaW5lZChjb2xsZWN0aW9uTmFtZSkgJiYgIXBhcmFtcykge1xuICAgICAgdmFyIGNhY2hlZEl0ZW1zID0gdGhpcy5fZ2V0Q2FjaGVkSXRlbXNCeUNvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpLFxuICAgICAgICBzZWxmID0gdGhpcyxcbiAgICAgICAgc3RvcmVLZXk7XG4gICAgICAgXy5lYWNoKGNhY2hlZEl0ZW1zLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIHN0b3JlS2V5ID0gc2VsZi5fZ2V0U3RvcmVLZXkoY29sbGVjdGlvbk5hbWUsIGl0ZW0udmFsdWUucGFyYW1zKTtcbiAgICAgICAgICBTdXBlci5wcm90b3R5cGUuY2xlYXIuY2FsbChzZWxmLCBzdG9yZUtleSk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gU3VwZXIucHJvdG90eXBlLmNsZWFyLmNhbGwodGhpcywgbnVsbCk7XG4gICAgfVxuICB9LFxuXG4gIG1lcmdlUGFyYW1zOiBmdW5jdGlvbihjb2xsZWN0aW9uTmFtZSwgcGFyYW1zLCBjYWxsYmFjaykge1xuICAgIHRoaXMubW9kZWxVdGlscy5nZXRDb2xsZWN0aW9uQ29uc3RydWN0b3IoY29sbGVjdGlvbk5hbWUsIGZ1bmN0aW9uKENvbGxlY3Rpb24pIHtcbiAgICAgIHZhciBtZXJnZWRQYXJhbXMgPSBfLmV4dGVuZCh7fSwgQ29sbGVjdGlvbi5wcm90b3R5cGUuZGVmYXVsdFBhcmFtcywgcGFyYW1zKTtcbiAgICAgIGNhbGxiYWNrKG1lcmdlZFBhcmFtcyk7XG4gICAgfSk7XG4gIH0sXG5cbiAgX2dldENhY2hlZEl0ZW1zQnlDb2xsZWN0aW9uOmZ1bmN0aW9uKGNvbGxlY3Rpb25OYW1lKSB7XG4gICAgdmFyIHByZWZpeCA9IHRoaXMuX2Zvcm1hdEtleSh0aGlzLm1vZGVsVXRpbHMudW5kZXJzY29yaXplKGNvbGxlY3Rpb25OYW1lKSk7XG5cbiAgICByZXR1cm4gXy5maWx0ZXIodGhpcy5jYWNoZSwgZnVuY3Rpb24odmFsLCBrZXkpIHtcbiAgICAgIHJldHVybiBzdGFydHNXaXRoKGtleSwgcHJlZml4KTtcbiAgICB9KTtcbiAgfSxcblxuICBfZ2V0U3RvcmVLZXlGb3JDb2xsZWN0aW9uOiBmdW5jdGlvbihjb2xsZWN0aW9uLCBwYXJhbXMpIHtcbiAgICB2YXIgY29sbGVjdGlvbk5hbWUgPSB0aGlzLm1vZGVsVXRpbHMubW9kZWxOYW1lKGNvbGxlY3Rpb24uY29uc3RydWN0b3IpO1xuXG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IGNvbGxlY3Rpb24ucGFyYW1zO1xuICAgIHJldHVybiB0aGlzLl9nZXRTdG9yZUtleShjb2xsZWN0aW9uTmFtZSwgcGFyYW1zKTtcbiAgfSxcblxuICBfZ2V0U3RvcmVLZXk6IGZ1bmN0aW9uKGNvbGxlY3Rpb25OYW1lLCBwYXJhbXMpIHtcbiAgICB2YXIgdW5kZXJzY29yZWQgPSB0aGlzLm1vZGVsVXRpbHMudW5kZXJzY29yaXplKGNvbGxlY3Rpb25OYW1lKTtcbiAgICByZXR1cm4gdW5kZXJzY29yZWQgKyBcIjpcIiArIEpTT04uc3RyaW5naWZ5KHNvcnRQYXJhbXMocGFyYW1zKSk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzb3J0UGFyYW1zKHBhcmFtcykge1xuICB2YXIgc29ydGVkID0ge307XG4gIF8uY2hhaW4ocGFyYW1zKS5rZXlzKCkuc29ydCgpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgc29ydGVkW2tleV0gPSBwYXJhbXNba2V5XTtcbiAgfSk7XG4gIHJldHVybiBzb3J0ZWQ7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0c1dpdGgoc3RyaW5nLCBwcmVmaXgpIHtcbiAgcmV0dXJuIHN0cmluZy5zbGljZSgwLCBwcmVmaXgubGVuZ3RoKSA9PSBwcmVmaXg7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IE1lbW9yeVN0b3JlO1xuXG5mdW5jdGlvbiBNZW1vcnlTdG9yZShvcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHRoaXMuYXBwID0gdGhpcy5vcHRpb25zLmFwcDtcbiAgdGhpcy5tb2RlbFV0aWxzID0gdGhpcy5vcHRpb25zLm1vZGVsVXRpbHM7XG4gIHRoaXMuY2FjaGUgPSB7fTtcbn1cblxuTWVtb3J5U3RvcmUucHJvdG90eXBlLmNhY2hlVmVyc2lvbiA9ICcnO1xuXG5NZW1vcnlTdG9yZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oa2V5KSB7XG4gIGlmICgha2V5KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiB0aGlzLnZhbGlkYXRlRXhwaXJhdGlvbihrZXksIHRoaXMuX2dldChrZXkpKTtcbn07XG5cbk1lbW9yeVN0b3JlLnByb3RvdHlwZS52YWxpZGF0ZUV4cGlyYXRpb24gPSBmdW5jdGlvbihrZXksIGRhdGEpIHtcbiAgaWYgKGRhdGEgJiYgZGF0YS5leHBpcmVzICYmIERhdGUubm93KCkgPiBkYXRhLmV4cGlyZXMpIHtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTWVtb3J5U3RvcmU6IEV4cGlyaW5nIGtleSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIuXCIpO1xuICAgIH1cbiAgICB0aGlzLmNsZWFyKGtleSk7XG4gICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgfSBlbHNlIGlmIChkYXRhICYmIGRhdGEudmFsdWUpIHtcbiAgICBkYXRhID0gZGF0YS52YWx1ZTtcbiAgfVxuICByZXR1cm4gZGF0YTtcbn07XG5cbk1lbW9yeVN0b3JlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihrZXksIHZhbHVlLCB0dGxTZWMpIHtcbiAgdmFyIGV4cGlyZXM7XG5cbiAgaWYgKCFrZXkgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBleHBpcmVzID0gdHRsU2VjID8gRGF0ZS5ub3coKSArIHR0bFNlYyAqIDEwMDAgOiBudWxsO1xuICB0aGlzLl9zZXQoa2V5LCB7XG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGV4cGlyZXM6IGV4cGlyZXNcbiAgfSk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuTWVtb3J5U3RvcmUucHJvdG90eXBlLl9nZXQgPSBmdW5jdGlvbihrZXkpIHtcbiAgcmV0dXJuIHRoaXMuY2FjaGVbdGhpcy5fZm9ybWF0S2V5KGtleSldO1xufTtcblxuTWVtb3J5U3RvcmUucHJvdG90eXBlLl9zZXQgPSBmdW5jdGlvbihrZXksIGRhdGEpIHtcbiAgdGhpcy5jYWNoZVt0aGlzLl9mb3JtYXRLZXkoa2V5KV0gPSBkYXRhO1xufTtcblxuTWVtb3J5U3RvcmUucHJvdG90eXBlLl9jbGVhciA9IGZ1bmN0aW9uKGtleSkge1xuICBkZWxldGUgdGhpcy5jYWNoZVt0aGlzLl9mb3JtYXRLZXkoa2V5KV07XG59O1xuXG5NZW1vcnlTdG9yZS5wcm90b3R5cGUuX2NsZWFyQWxsID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuY2FjaGUgPSB7fTtcbn07XG5cbk1lbW9yeVN0b3JlLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKGtleSkge1xuICBpZiAoa2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xlYXIoa2V5KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5fY2xlYXJBbGwoKTtcbiAgfVxufTtcblxuTWVtb3J5U3RvcmUucHJvdG90eXBlLl92ZXJzaW9uS2V5ID0gZnVuY3Rpb24oa2V5KSB7XG4gIHJldHVybiBrZXkgKyBcIjpcIiArIHRoaXMuY2FjaGVWZXJzaW9uO1xufTtcblxuTWVtb3J5U3RvcmUucHJvdG90eXBlLl9mb3JtYXRLZXkgPSBmdW5jdGlvbihrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX3ZlcnNpb25LZXkoa2V5KTtcbn07XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKSxcbiAgICBTdXBlciA9IHJlcXVpcmUoJy4vbWVtb3J5X3N0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kZWxTdG9yZTtcblxuZnVuY3Rpb24gTW9kZWxTdG9yZSgpIHtcbiAgU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuXy5leHRlbmQoTW9kZWxTdG9yZS5wcm90b3R5cGUsIFN1cGVyLnByb3RvdHlwZSwge1xuICBleHBpcmVTZWNvbmRzOiBudWxsLFxuXG4gIHNldDogZnVuY3Rpb24obW9kZWwpIHtcbiAgICB2YXIga2V5LCBtb2RlbE5hbWU7XG5cbiAgICBtb2RlbE5hbWUgPSB0aGlzLm1vZGVsVXRpbHMubW9kZWxOYW1lKG1vZGVsLmNvbnN0cnVjdG9yKTtcbiAgICBpZiAobW9kZWxOYW1lID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5kZWZpbmVkIG1vZGVsTmFtZSBmb3IgbW9kZWwnKTtcbiAgICB9XG5cbiAgICBrZXkgPSB0aGlzLl9nZXRNb2RlbFN0b3JlS2V5KG1vZGVsTmFtZSwgbW9kZWwuaWQpO1xuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGhhdmUgYSBmdWxseSBwYXJzZWQgbW9kZWwgYmVmb3JlIHdlIHN0b3JlIHRoZSBhdHRyaWJ1dGVzXG4gICAgbW9kZWwucGFyc2UobW9kZWwuYXR0cmlidXRlcyk7XG5cbiAgICByZXR1cm4gU3VwZXIucHJvdG90eXBlLnNldC5jYWxsKHRoaXMsIGtleSwgbW9kZWwsIHRoaXMuZXhwaXJlU2Vjb25kcyk7XG4gIH0sXG5cbiAgZ2V0OiBmdW5jdGlvbihtb2RlbE5hbWUsIGlkKSB7XG4gICAgdmFyIGtleSwgbW9kZWw7XG5cbiAgICBrZXkgPSB0aGlzLl9nZXRNb2RlbFN0b3JlS2V5KG1vZGVsTmFtZSwgaWQpO1xuICAgIHJldHVybiBTdXBlci5wcm90b3R5cGUuZ2V0LmNhbGwodGhpcywga2V5KTtcbiAgfSxcblxuICBjbGVhcjogZnVuY3Rpb24obW9kZWxOYW1lLCBpZCkge1xuICAgIGlmIChtb2RlbE5hbWUgJiYgaWQpIHtcbiAgICAgIHZhciBrZXkgPSB0aGlzLl9nZXRNb2RlbFN0b3JlS2V5KG1vZGVsTmFtZSwgaWQpO1xuICAgICAgcmV0dXJuIFN1cGVyLnByb3RvdHlwZS5jbGVhci5jYWxsKHRoaXMsIGtleSk7XG4gICAgfSBlbHNlIGlmIChtb2RlbE5hbWUgJiYgIWlkKSB7XG4gICAgICB2YXIgY2FjaGVkSXRlbXMgPSB0aGlzLl9nZXRDYWNoZWRJdGVtc0J5TW9kZWwobW9kZWxOYW1lKSxcbiAgICAgICAgc2VsZiA9IHRoaXMsXG4gICAgICAgIG1vZGVsU3RvcmVLZXk7XG4gICAgICAgIF8uZWFjaChjYWNoZWRJdGVtcywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBtb2RlbFN0b3JlS2V5ID0gc2VsZi5fZ2V0TW9kZWxTdG9yZUtleShtb2RlbE5hbWUsIGl0ZW0udmFsdWUuaWQpO1xuICAgICAgICAgIFN1cGVyLnByb3RvdHlwZS5jbGVhci5jYWxsKHNlbGYsIG1vZGVsU3RvcmVLZXkpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFN1cGVyLnByb3RvdHlwZS5jbGVhci5jYWxsKHRoaXMsIG51bGwpO1xuICAgIH1cbiAgfSxcblxuICBmaW5kOiBmdW5jdGlvbihtb2RlbE5hbWUsIHBhcmFtcykge1xuICAgIHZhciBwcmVmaXggPSB0aGlzLl9mb3JtYXRLZXkodGhpcy5fa2V5UHJlZml4KG1vZGVsTmFtZSkpLFxuICAgICAga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuY2FjaGUpLFxuICAgICAgYWZmZWN0ZWRLZXlzID0ga2V5cy5maWx0ZXIoZ2V0U3RhcnRzV2l0aEZpbHRlcihwcmVmaXgpKSxcbiAgICAgIHNlbGYgPSB0aGlzLFxuICAgICAgZm91bmRLZXk7XG5cbiAgICBmb3VuZEtleSA9IF8uZmluZChhZmZlY3RlZEtleXMsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBjYWNoZWRNb2RlbCA9IHNlbGYuY2FjaGVba2V5XS52YWx1ZSxcbiAgICAgICAgbW9kZWxTdG9yZUtleSA9IHNlbGYuX2dldE1vZGVsU3RvcmVLZXkobW9kZWxOYW1lLCBjYWNoZWRNb2RlbC5pZCksXG4gICAgICAgIG1vZGVsID0gU3VwZXIucHJvdG90eXBlLmdldC5jYWxsKHNlbGYsIG1vZGVsU3RvcmVLZXkpO1xuXG4gICAgICByZXR1cm4gbW9kZWwgJiYgaXNPYmplY3RTdWJzZXQocGFyYW1zLCBtb2RlbC50b0pTT04oKSk7XG4gICAgfSk7XG5cbiAgICBpZiAoZm91bmRLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlW2ZvdW5kS2V5XS52YWx1ZTtcbiAgICB9XG4gIH0sXG5cbiAgX2dldENhY2hlZEl0ZW1zQnlNb2RlbDpmdW5jdGlvbihtb2RlbE5hbWUpIHtcbiAgICB2YXIgcHJlZml4ID0gdGhpcy5fZm9ybWF0S2V5KHRoaXMuX2tleVByZWZpeChtb2RlbE5hbWUpKTtcbiAgICByZXR1cm4gXy5maWx0ZXIodGhpcy5jYWNoZSwgZnVuY3Rpb24odmFsLCBrZXkpIHtcbiAgICAgIHJldHVybiBzdGFydHNXaXRoKGtleSwgcHJlZml4KTtcbiAgICB9KTtcbiAgfSxcblxuICBfZm9ybWF0S2V5OiBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gU3VwZXIucHJvdG90eXBlLl9mb3JtYXRLZXkuY2FsbCh0aGlzLCBcIl9tczpcIiArIGtleSk7XG4gIH0sXG5cbiAgX2tleVByZWZpeDogZnVuY3Rpb24obW9kZWxOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWxVdGlscy51bmRlcnNjb3JpemUobW9kZWxOYW1lKTtcbiAgfSxcblxuICBfZ2V0TW9kZWxTdG9yZUtleTogZnVuY3Rpb24obW9kZWxOYW1lLCBpZCkge1xuICAgIHJldHVybiB0aGlzLl9rZXlQcmVmaXgobW9kZWxOYW1lKSArIFwiOlwiICsgaWQ7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBnZXRTdGFydHNXaXRoRmlsdGVyKHByZWZpeCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHJldHVybiBzdGFydHNXaXRoKHN0cmluZywgcHJlZml4KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3RhcnRzV2l0aChzdHJpbmcsIHByZWZpeCkge1xuICByZXR1cm4gc3RyaW5nLnNsaWNlKDAsIHByZWZpeC5sZW5ndGgpID09IHByZWZpeDtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3RTdWJzZXQocG90ZW50aWFsU3Vic2V0LCBvYmplY3RUb1Rlc3QpIHtcbiAgLy8gY2hlY2sgYWxsIHRoZSBrZXlzIG9mIHRoZSBzdWJzZXQsIGFuZCBzdXJlIHRoZWlyIHZhbHVlcyBhcmUgdGhlIHNhbWUgaW4gdGhlIG9iamVjdFRvVGVzdFxuICByZXR1cm4gXy5hbGwocG90ZW50aWFsU3Vic2V0LCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmV0dXJuIG9iamVjdFRvVGVzdFtrZXldID09IHZhbHVlO1xuICB9KTtcbn1cbiIsIi8qKlxuICogYHN5bmNlcmAgaXMgYSBjb2xsZWN0aW9uIG9mIGluc3RhbmNlIG1ldGhvZHMgdGhhdCBhcmUgbWl4ZWQgaW50byB0aGUgcHJvdG90eXBlc1xuICogb2YgYEJhc2VNb2RlbGAgYW5kIGBCYXNlQ29sbGVjdGlvbmAuIFRoZSBwdXJwb3NlIGlzIHRvIGVuY2Fwc3VsYXRlIHNoYXJlZCBsb2dpY1xuICogZm9yIGZldGNoaW5nIGRhdGEgZnJvbSB0aGUgQVBJLlxuICovXG5cbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpLFxuICAgIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKSxcblxuICAgIC8vIFB1bGwgb3V0IHBhcmFtcyBpbiBwYXRoLCBsaWtlICcvdXNlcnMvOmlkJy5cbiAgICBleHRyYWN0UGFyYW1OYW1lc1JlID0gLzooW2Etel8tXSspL2lnLFxuXG4gICAgbWV0aG9kTWFwID0ge1xuICAgICAgJ2NyZWF0ZSc6ICdQT1NUJyxcbiAgICAgICd1cGRhdGUnOiAnUFVUJyxcbiAgICAgICdkZWxldGUnOiAnREVMRVRFJyxcbiAgICAgICdyZWFkJzogJ0dFVCdcbiAgICB9LFxuXG4gICAgaXNTZXJ2ZXIgPSAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpO1xuXG5pZiAoaXNTZXJ2ZXIpIHtcbiAgLy8gaGlkZSBpdCBmcm9tIHJlcXVpcmVqcyBzaW5jZSBpdCdzIHNlcnZlciBvbmx5XG4gIHZhciBzZXJ2ZXJPbmx5X3FzID0gJ3FzMic7XG4gIHZhciBxcyA9IHJlcXVpcmUoc2VydmVyT25seV9xcyk7XG59IGVsc2Uge1xuICB2YXIgJCA9IHdpbmRvdy4kIHx8IHJlcXVpcmUoJ2pxdWVyeScpO1xuICBCYWNrYm9uZS4kID0gJDtcbn1cblxudmFyIHN5bmNlciA9IG1vZHVsZS5leHBvcnRzO1xuXG5mdW5jdGlvbiBjbGllbnRTeW5jKG1ldGhvZCwgbW9kZWwsIG9wdGlvbnMpIHtcbiAgdmFyIGVycm9yO1xuICBvcHRpb25zID0gXy5jbG9uZShvcHRpb25zKTtcbiAgaWYgKCFfLmlzVW5kZWZpbmVkKG9wdGlvbnMuZGF0YSkpIG9wdGlvbnMuZGF0YSA9IF8uY2xvbmUob3B0aW9ucy5kYXRhKTtcbiAgb3B0aW9ucy51cmwgPSB0aGlzLmdldFVybChvcHRpb25zLnVybCwgdHJ1ZSwgb3B0aW9ucy5kYXRhKTtcbiAgZXJyb3IgPSBvcHRpb25zLmVycm9yO1xuICBpZiAoZXJyb3IpIHtcbiAgICBvcHRpb25zLmVycm9yID0gZnVuY3Rpb24oeGhyKSB7XG4gICAgICB2YXIgYm9keSA9IHhoci5yZXNwb25zZVRleHQsXG4gICAgICAgICAgY29udGVudFR5cGUgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ2NvbnRlbnQtdHlwZScpLFxuICAgICAgICAgIHJlc3A7XG4gICAgICBpZiAoY29udGVudFR5cGUgJiYgY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24vanNvbicpICE9PSAtMSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGJvZHkgPSBKU09OLnBhcnNlKGJvZHkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgICAgcmVzcCA9IHtcbiAgICAgICAgYm9keTogYm9keSxcbiAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzXG4gICAgICB9O1xuICAgICAgZXJyb3IocmVzcCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBCYWNrYm9uZS5zeW5jKG1ldGhvZCwgbW9kZWwsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBzZXJ2ZXJTeW5jKG1ldGhvZCwgbW9kZWwsIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSwgdXJsUGFydHMsIHZlcmIsIHJlcSwgcXVlcnlTdHI7XG5cbiAgb3B0aW9ucyA9IF8uY2xvbmUob3B0aW9ucyk7XG4gIGlmICghXy5pc1VuZGVmaW5lZChvcHRpb25zLmRhdGEpKSBvcHRpb25zLmRhdGEgPSBfLmNsb25lKG9wdGlvbnMuZGF0YSk7XG4gIG9wdGlvbnMudXJsID0gdGhpcy5nZXRVcmwob3B0aW9ucy51cmwsIGZhbHNlLCBvcHRpb25zLmRhdGEpO1xuICB2ZXJiID0gbWV0aG9kTWFwW21ldGhvZF07XG4gIHVybFBhcnRzID0gb3B0aW9ucy51cmwuc3BsaXQoJz8nKTtcbiAgcmVxID0gdGhpcy5hcHAucmVxO1xuICBxdWVyeVN0ciA9IHVybFBhcnRzWzFdIHx8ICcnO1xuICBpZiAoIV8uaXNFbXB0eShvcHRpb25zLmRhdGEpKSBxdWVyeVN0ciArPSAnJicgKyBxcy5zdHJpbmdpZnkob3B0aW9ucy5kYXRhKTtcbiAgLyoqXG4gICAqIGlmIHF1ZXJ5U3RyIGlzIGluaXRpYWxseSBhbiBlbXB0eSBzdHJpbmcsIGxlYWRpbmcgJyYnIHdpbGwgc3RpbGwgZ2V0IHBhcnNlZCBjb3JyZWN0bHkgYnkgcXMucGFyc2UgYmVsb3cuXG4gICAqIGUuZy4gIHFzLnBhcnNlKCcmYmF6PXF1dXgnKSA9PiB7IGJhejogJ3F1dXgnIH1cbiAgICovXG5cbiAgYXBpID0ge1xuICAgIG1ldGhvZDogdmVyYixcbiAgICBwYXRoOiB1cmxQYXJ0c1swXSxcbiAgICBxdWVyeTogcXMucGFyc2UocXVlcnlTdHIpLFxuICAgIGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycyB8fCB7fSxcbiAgICBhcGk6IF8ucmVzdWx0KHRoaXMsICdhcGknKSxcbiAgICBib2R5OiB7fVxuICB9O1xuXG4gIGlmICh2ZXJiID09PSAnUE9TVCcgfHwgdmVyYiA9PT0gJ1BVVCcpIHtcbiAgICBhcGkuYm9keSA9IG1vZGVsLnRvSlNPTigpO1xuICB9XG5cbiAgcmVxLmRhdGFBZGFwdGVyLnJlcXVlc3QocmVxLCBhcGksIGZ1bmN0aW9uKGVyciwgcmVzcG9uc2UsIGJvZHkpIHtcbiAgICB2YXIgcmVzcDtcbiAgICBpZiAoZXJyKSB7XG4gICAgICByZXNwID0ge1xuICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICAvLyBQYXNzIHRocm91Z2ggdGhlIHN0YXR1c0NvZGUsIHNvIGxvd2VyLWxldmVsIGNvZGUgY2FuIGhhbmRsZSBpLmUuIDQwMSBwcm9wZXJseS5cbiAgICAgICAgc3RhdHVzOiBlcnIuc3RhdHVzXG4gICAgICB9O1xuXG4gICAgICBpZiAob3B0aW9ucy5lcnJvcikge1xuICAgICAgICAvLyBUaGlzIGBlcnJvcmAgaGFzIHNpZ25hdHVyZSBvZiAkLmFqYXgsIG5vdCBCYWNrYm9uZS5zeW5jLlxuICAgICAgICBvcHRpb25zLmVycm9yKHJlc3ApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGlzIGBzdWNjZXNzYCBoYXMgc2lnbmF0dXJlIG9mICQuYWpheCwgbm90IEJhY2tib25lLnN5bmMuXG4gICAgICBvcHRpb25zLnN1Y2Nlc3MoYm9keSk7XG4gICAgfVxuICB9KTtcbn1cblxuc3luY2VyLmNsaWVudFN5bmMgPSBjbGllbnRTeW5jO1xuc3luY2VyLnNlcnZlclN5bmMgPSBzZXJ2ZXJTeW5jO1xuc3luY2VyLnN5bmMgPSBmdW5jdGlvbiBzeW5jKCkge1xuICB2YXIgc3luY01ldGhvZCA9IGlzU2VydmVyID8gc2VydmVyU3luYyA6IGNsaWVudFN5bmM7XG4gIHJldHVybiBzeW5jTWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqICdtb2RlbCcgaXMgZWl0aGVyIGEgbW9kZWwgb3IgY29sbGVjdGlvbiB0aGF0XG4gKiBoYXMgYSAndXJsJyBwcm9wZXJ0eSwgd2hpY2ggY2FuIGJlIGEgc3RyaW5nIG9yIGZ1bmN0aW9uLlxuICovXG5zeW5jZXIuZ2V0VXJsID0gZnVuY3Rpb24gZ2V0VXJsKHVybCwgY2xpZW50UHJlZml4LCBwYXJhbXMpIHtcbiAgaWYgKGNsaWVudFByZWZpeCA9PSBudWxsKSB7XG4gICAgY2xpZW50UHJlZml4ID0gZmFsc2U7XG4gIH1cbiAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuICB1cmwgPSB1cmwgfHwgXy5yZXN1bHQodGhpcywgJ3VybCcpO1xuICBpZiAoY2xpZW50UHJlZml4ICYmICF+dXJsLmluZGV4T2YoJzovLycpKSB7XG4gICAgdXJsID0gdGhpcy5mb3JtYXRDbGllbnRVcmwodXJsLCBfLnJlc3VsdCh0aGlzLCAnYXBpJykpO1xuICB9XG4gIHJldHVybiB0aGlzLmludGVycG9sYXRlUGFyYW1zKHRoaXMsIHVybCwgcGFyYW1zKTtcbn07XG5cbnN5bmNlci5mb3JtYXRDbGllbnRVcmwgPSBmdW5jdGlvbih1cmwsIGFwaSkge1xuICB2YXIgcHJlZml4ID0gdGhpcy5hcHAuZ2V0KCdhcGlQYXRoJykgfHwgJy9hcGknO1xuICBpZiAoYXBpKSB7XG4gICAgcHJlZml4ICs9ICcvJyArIGFwaTtcbiAgfVxuICBwcmVmaXggKz0gJy8tJztcbiAgcmV0dXJuIHByZWZpeCArIHVybDtcbn07XG5cbi8qKlxuICogRGVlcGx5LWNvbXBhcmUgdHdvIG9iamVjdHMgdG8gc2VlIGlmIHRoZXkgZGlmZmVyLlxuICovXG5zeW5jZXIub2JqZWN0c0RpZmZlciA9IGZ1bmN0aW9uIG9iamVjdHNEaWZmZXIoZGF0YTEsIGRhdGEyKSB7XG4gIHZhciBjaGFuZ2VkID0gZmFsc2UsXG4gICAgICBrZXlzLFxuICAgICAga2V5LFxuICAgICAgdmFsdWUxLFxuICAgICAgdmFsdWUyO1xuXG4gIGtleXMgPSBfLnVuaXF1ZShfLmtleXMoZGF0YTEpLmNvbmNhdChfLmtleXMoZGF0YTIpKSk7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBrZXlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAga2V5ID0ga2V5c1tpXTtcbiAgICB2YWx1ZTEgPSBkYXRhMVtrZXldO1xuICAgIHZhbHVlMiA9IGRhdGEyW2tleV07XG5cbiAgICAvLyBJZiBhdHRyaWJ1dGUgaXMgYW4gb2JqZWN0IHJlY3Vyc2VcbiAgICBpZiAoXy5pc09iamVjdCh2YWx1ZTEpICYmIF8uaXNPYmplY3QodmFsdWUyKSkge1xuICAgICAgY2hhbmdlZCA9IHRoaXMub2JqZWN0c0RpZmZlcih2YWx1ZTEsIHZhbHVlMik7XG4gICAgLy8gVGVzdCBmb3IgZXF1YWxpdHlcbiAgICB9IGVsc2UgaWYgKCFfLmlzRXF1YWwodmFsdWUxLCB2YWx1ZTIpKSB7XG4gICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNoYW5nZWQ7XG59O1xuXG4vKipcbiAqIFRoaXMgbWFwcyBpLmUuICcvbGlzdGluZ3MvOmlkJyB0byAnL2xpc3RpbmdzLzMnIGlmXG4gKiB0aGUgbW9kZWwgeW91IHN1cHBseSBoYXMgbW9kZWwuZ2V0KCdpZCcpID09IDMuXG4gKi9cbnN5bmNlci5pbnRlcnBvbGF0ZVBhcmFtcyA9IGZ1bmN0aW9uIGludGVycG9sYXRlUGFyYW1zKG1vZGVsLCB1cmwsIHBhcmFtcykge1xuICB2YXIgbWF0Y2hlcyA9IHVybC5tYXRjaChleHRyYWN0UGFyYW1OYW1lc1JlKTtcblxuICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgaWYgKG1hdGNoZXMpIHtcbiAgICBtYXRjaGVzLmZvckVhY2goZnVuY3Rpb24ocGFyYW0pIHtcbiAgICAgIHZhciBwcm9wZXJ0eSA9IHBhcmFtLnNsaWNlKDEpLFxuICAgICAgICAgIHZhbHVlO1xuXG4gICAgICAvLyBJcyBjb2xsZWN0aW9uPyBUaGVuIHVzZSBvcHRpb25zLlxuICAgICAgaWYgKG1vZGVsLmxlbmd0aCAhPSBudWxsKSB7XG4gICAgICAgIHZhbHVlID0gbW9kZWwub3B0aW9uc1twcm9wZXJ0eV07XG5cbiAgICAgIC8vIE90aGVyd2lzZSBpdCdzIGEgbW9kZWw7IHVzZSBhdHRycy5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gbW9kZWwuZ2V0KHByb3BlcnR5KTtcbiAgICAgIH1cbiAgICAgIHVybCA9IHVybC5yZXBsYWNlKHBhcmFtLCB2YWx1ZSk7XG5cbiAgICAgIC8qKlxuICAgICAgICogRGVsZXRlIHRoZSBwYXJhbSBmcm9tIHBhcmFtcyBoYXNoLCBzbyB3ZSBkb24ndCBnZXQgdXJscyBsaWtlOlxuICAgICAgICogL3YxL3RocmVhZHMvMTIzND9pZD0xMjM0Li4uXG4gICAgICAgKi9cbiAgICAgIGRlbGV0ZSBwYXJhbXNbcHJvcGVydHldO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBTZXBhcmF0ZSBkZWxldGlvbiBvZiBpZEF0dHJpYnV0ZSBmcm9tIHBhcmFtcyBoYXNoIG5lY2Vzc2FyeSBpZiB1c2luZyB1cmxSb290IGluIHRoZSBtb2RlbFxuICAgKiBzbyB3ZSBkb24ndCBnZXQgdXJscyBsaWtlOiAvdjEvdGhyZWFkcy8xMjM0P2lkPTEyMzRcbiAgICovXG4gIGRlbGV0ZSBwYXJhbXNbbW9kZWwuaWRBdHRyaWJ1dGVdXG4gIHJldHVybiB1cmw7XG59O1xuIl19
