(function(){'use strict';var f=function(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")},h=function(a){if(f(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&f(a))return a;return null},k=function(a,b){return b!=a.getAttribute("source")?(a.setAttribute("source",b),!0):!1};var l=function(a,b){var c=document.createEvent("Event");c.initEvent(a,!0,!0);b.dispatchEvent(c)},m=function(a,b,c){var d=function(e){a.removeEventListener(b,d);c(e)};a.addEventListener(b,d)};var n=function(a){a||(a="");return/^[\s\xa0]*$/.test(a)},p=function(){};goog.inherits(p,HTMLElement);
p.prototype.createdCallback=function(){for(var a;a=this.firstChild;)this.removeChild(a);this.c="gwd_imagebutton_"+(2147483648*Math.random()|0);this.i="ontouchstart"in window||0<window.navigator.MaxTouchPoints||0<window.navigator.msMaxTouchPoints;this.a=document.createElement("div");this.a.className=this.c;this.appendChild(this.a);this.h=null;this.o=this.b=!1;this.j=document.createElement("gwd-image");this.g=document.createElement("gwd-image");this.f=document.createElement("gwd-image");this.l=document.createElement("gwd-page");
this.m=this.s.bind(this);this.v=this.u.bind(this);this.style.display="inline-block";this.style.padding=0;this.a.style.backgroundRepeat="no-repeat";this.a.style.width="100%";this.a.style.height="100%"};p.prototype.attachedCallback=function(){this.a.addEventListener("click",this.m,!1);if("function"==typeof this.gwdLoad&&"function"==typeof this.gwdIsLoaded&&!this.gwdIsLoaded()){var a=h(this),b=a&&"function"==typeof a.gwdIsLoaded;(!a||b&&a.gwdIsLoaded())&&this.gwdLoad()}};
p.prototype.detachedCallback=function(){this.a.removeEventListener("click",this.m,!1)};
p.prototype.attributeChangedCallback=function(a){var b=this.getAttribute(a);switch(a){case "alignment":b?this.a.style.backgroundPosition=b:this.setAttribute(a,"center");break;case "scaling":b?this.a.style.backgroundSize=b:this.setAttribute(a,"auto");break;case "up-image":q(this,this.j,b);break;case "over-image":this.i||q(this,this.g,b);break;case "down-image":q(this,this.f,b);break;case "disabled":this.b=this.hasAttribute("disabled")&&"false"!=this.getAttribute("disabled");r(this);this.a.style.cursor=
this.b?"default":"pointer";break;case "bgcolor":this.a.style.backgroundColor=n(b)?"":b}};var q=function(a,b,c){n(c)?r(a):(b.setAttribute("source",c),t(a))};p.prototype.gwdIsLoaded=function(){return this.o};p.prototype.gwdLoad=function(){for(var a=["bgcolor","alignment","scaling","disabled"],b=0;b<a.length;b++)this.attributeChangedCallback(a[b],null,null);t(this)};
var t=function(a,b,c,d){var e=document.createElement("gwd-page");e.style.display="none";void 0==b&&(b=a.getAttribute("up-image"));void 0==c&&(c=a.getAttribute("over-image"));void 0==d&&(d=a.getAttribute("down-image"));var g=!1;g=k(a.j,b||"")||g;a.i||(g=k(a.g,c||"")||g);if(g=k(a.f,d||"")||g)e.appendChild(a.j),a.i||e.appendChild(a.g),e.appendChild(a.f),a.l=e,m(e,"attached",e.gwdLoad.bind(e)),m(e,"pageload",a.v),a.a.appendChild(a.l)};
p.prototype.u=function(a){if(a){a.target===this.l&&(this.o=!0,r(this),l("ready",this),l("imagebuttonloaded",this));var b=a.target.parentNode||a.target.parentElement;b&&b.removeChild(a.target)}};p.prototype.s=function(a){this.b&&a.stopPropagation()};
var r=function(a){if(a.h){var b=a.h;(b=b.ownerNode||b.owningElement||b)&&b.parentNode&&b.parentNode.removeChild(b);a.h=null}b="";var c=a.j.getAttribute("source");n(c)||(b+="."+a.c+' { background-image: url("'+c+'"); }');a.b||a.i||(c=a.g.getAttribute("source"),n(c)||(b+="."+a.c+':hover { background-image: url("'+c+'"); }'));c=a.f.getAttribute("source");n(c)||a.b||(b+="."+a.c+':active { background-image: url("'+c+'"); }');var d=document;if(-1!=navigator.userAgent.indexOf("MSIE")&&d.createStyleSheet)d=
d.createStyleSheet(),d.cssText=b;else{c=d.getElementsByTagName("head")[0];if(!c){var e=d.getElementsByTagName("body")[0];c=d.createElement("head");e.parentNode.insertBefore(c,e)}d=d.createElement("style");d.textContent=b;c.appendChild(d)}a.h=d};p.prototype.toggleEnable=function(){(this.b=!this.b)?this.setAttribute("disabled","true"):this.removeAttribute("disabled")};p.prototype.setImages=function(a,b,c){t(this,a,b,c)};document.registerElement("gwd-imagebutton",{prototype:p.prototype});}).call(this);