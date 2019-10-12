if (self.CavalryLogger) { CavalryLogger.start_js(["muxu9"]); }

__d("MRedirectToNative",["Event","MPageController","QE2Logger","URI","goURI","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=!1,i=null;function j(){i&&(i.remove(),i=null)}function k(){if(h)return;h=!0;b("QE2Logger").logExposureForUser("mtouch_messenger_diode_post_return")}function l(){k(),j(),b("setTimeoutAcrossTransitions")(function(){b("MPageController").load("/home.php")},5)}function m(){i=b("Event").listen(window,"blur",function(){j(),l()}),b("setTimeoutAcrossTransitions")(j,5e3)}function a(a,c){k();j();if(c&&c.returnToFeed===!0){c=!!c.newTab;var d=a.toString();m();c?(g||(g=b("URI"))).goURIOnNewWindow(d):b("goURI")(d)}else a.go()}function c(a,c){c=!!(c&&c.returnToFeed===!0);c&&a.setAttribute("target","_blank");c=c?m:k;b("Event").listen(a,"click",c)}e.exports={redirect:a,setReturnToFeed:c}}),null);
__d("MSiteDiodeSourceGroup",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MESSENGER:"messenger",MLITE:"mlite"})}),null);
__d("MessengerLiteDiodeTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:MessengerLiteDiodeLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:MessengerLiteDiodeLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:MessengerLiteDiodeLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setEvent=function(a){this.$1.event=a;return this};c.setMsiteDiodePromotableApp=function(a){this.$1.msite_diode_promotable_app=a;return this};c.setMsiteDiodeStateFromClient=function(a){this.$1.msite_diode_state_from_client=a;return this};c.setSource=function(a){this.$1.source=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={event:!0,msite_diode_promotable_app:!0,msite_diode_state_from_client:!0,source:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("XMSiteDiodeMessengerLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/messenger/log/",{log:{type:"Bool",defaultValue:!1}})}),null);
__d("MessagesJewelNativeAppRedirect",["DOM","Event","MessengerLiteDiodeTypedLogger","MHistory","MJewel","MJewels","MRedirectToNative","MRequest","MSiteDiodeSourceGroup","MSiteMessengerDiodeTypedLogger","Run","Stratcom","URI","XMSiteDiodeMessengerLoggingController","$"],(function(a,b,c,d,e,f){__p&&__p();var g;function h(a){function c(b){b.getData().jewel==="messages"&&a()}b("Stratcom").listen("m:jewel:flyout:open",null,c)}function i(a){var c=b("$")(b("MJewel").JEWEL_NAV_NODE_ID);c=b("DOM").find(c,"div","messages");if(!c)return;c=b("DOM").find(c,"*","icon");b("Event").listen(c,"click",a)}function j(a,c,d,e,f,h,i,j){var k=b("XMSiteDiodeMessengerLoggingController").getURIBuilder().setBool("log",!0).getURI();new(b("MRequest"))(k).send();j=!!(j&&!f);if(d){i==="mlite"?new(b("MessengerLiteDiodeTypedLogger"))().setEvent("fastswitch_attempt").setMsiteDiodeStateFromClient(e).setMsiteDiodePromotableApp(h).log():new(b("MSiteMessengerDiodeTypedLogger"))().setEvent("fast_app_switch_attempt").setMessagingEntryPoint(c).setMsiteDiodeStateFromClient(e).log();k=new(g||(g=b("URI")))(a);b("MRedirectToNative").redirect(k,{returnToFeed:j,newTab:f});f&&b("MHistory").popSoftState(b("MJewels").MESSAGES)}}a={registerRedirect:function(a,c,d,e,f,g,k,l,m,n){var o=function(){return j(a,c,d,e,f,g,k,l)},p=function(){m?i(o):h(o)};n?b("Run").onAfterLoad(p):p()}};e.exports=a}),null);
__d("MSiteMessengerDiodeLoggerEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({FAST_APP_SWITCH_ATTEMPT:"fast_app_switch_attempt",FAST_APP_SWITCH_FAIL:"fast_app_switch_fail",DIODE_ROADBLOCK_QP_LOAD_FAIL:"diode_roadblock_qp_load_fail",DIODE_ROADBLOCK_QP_LOAD_SUCCESS:"diode_roadblock_qp_load_success"})}),null);
__d("MessengerLiteDiodeEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PLAY_STORE_INSTALL_CLICK:"play_click",SIDELOAD_INSTALL_CLICK:"sideload_click",FAST_SWITCH_ATTEMPT:"fastswitch_attempt",FAST_SWITCH_FAIL:"fastswitch_fail"})}),null);
__d("MessengerRedirectOnClick",["MessengerLiteDiodeEvent","MessengerLiteDiodeTypedLogger","MRedirectToNative","MRequest","MSiteDiodeSourceGroup","MSiteMessengerDiodeLoggerEvent","MSiteMessengerDiodeTypedLogger","URI","XMSiteDiodeMessengerLoggingController"],(function(a,b,c,d,e,f){__p&&__p();var g;function h(a,c,d){b("MRedirectToNative").redirect(a,{returnToFeed:c,newTab:d})}a={register:function(a,c,d,e,f,i,j,k){__p&&__p();c.onclick=function(){__p&&__p();var c=b("XMSiteDiodeMessengerLoggingController").getURIBuilder().setBool("log",!0).getURI();new(b("MRequest"))(c).send();c=!e;if(e&&j===b("MSiteDiodeSourceGroup").MLITE){new(b("MessengerLiteDiodeTypedLogger"))().setEvent(b("MessengerLiteDiodeEvent").FAST_SWITCH_ATTEMPT).setMsiteDiodeStateFromClient(f).setMsiteDiodePromotableApp(i).log();var l=new(g||(g=b("URI")))(a);h(l,k,c)}else if(e){new(b("MSiteMessengerDiodeTypedLogger"))().setEvent(b("MSiteMessengerDiodeLoggerEvent").FAST_APP_SWITCH_ATTEMPT).setMessagingEntryPoint(d).setMsiteDiodeStateFromClient(f).log();l=new(g||(g=b("URI")))(a);h(l,k,c)}}},setReturnToFeed:function(a,c){b("MRedirectToNative").setReturnToFeed(a,{returnToFeed:c,newTab:!0})}};e.exports=a}),null);
__d("MShareAngoraAttachment",["Stratcom"],(function(a,b,c,d,e,f){__p&&__p();var g=!1;a=function(a){if(g)return;g=!0;window.addEventListener("error",function(a){if(a.target.nodeName=="IMG"){for(var a=a.target;a!=document.body&&!b("Stratcom").hasSigil(a,"shareAngoraAttachmentMedia");a=a.parentNode);a!=document.body&&(a.style.display="none")}},!0)};f.registerDeadImageListener=a}),null);
__d("MLayerHideOnCloseClick",["DOM"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=null,this.$2=null,this.$3=a}var c=a.prototype;c.enable=function(){this.$1=[this.$3.addListener("show",this.$4.bind(this)),this.$3.addListener("hide",this.$5.bind(this))],this.$3.isShown()&&this.$4()};c.disable=function(){this.$5();while(this.$1.length)this.$1.pop().remove();this.$1=null};c.$5=function(){this.$2&&this.$2.remove()};c.$4=function(){this.$2=b("DOM").listen(this.$3.getRoot(),"click","mlayer-hide-on-click",this.$3.hide.bind(this.$3))};return a}();e.exports=a}),null);
__d("MScrollAreaScroller",["MAnimator","MTouchScroll","MViewport","gkx"],(function(a,b,c,d,e,f){__p&&__p();var g=100,h=.15;a=function(){"use strict";__p&&__p();function a(a,c){__p&&__p();var d=this;this._canAnimate=function(){return d.scrolling};c=c||{};this._pagingPositions=c.pagingPositions;this._usePaging=c.paging;this._scrollSnapType=c.scrollSnapType;this._canScrollX=c.direction==="horizontal";this._canScrollY=!this._canScrollX;this.lockMax=c.lockMax||!1;this.lockMin=c.lockMin||!1;this.scrollPastMinOffset=c.scrollPastMinOffset||0;this.left=c.scrollX||0;this.top=c.scrollY||0;this.noThreshold=c.noThreshold;this._lessenViewportScroll=c.lessenViewportScroll;this._handler=a;this._animator=new(b("MAnimator"))()}var c=a.prototype;c.dispose=function(){if(!this._disposed){this.stop();for(var a in this)delete this[a];this._disposed=!0}};c.scrollByPages=function(b){__p&&__p();var c=this.left,d=this.top,e;if(this._canScrollX){if(this._pagingPositions){var f=this._getPageIndex()+b;f=this._indexToLeftOffset(f)}else f=Math.floor(c/this.width)*this.width+b*this.width;if(f>this.maxScrollLeft||f<this.minScrollLeft)return;e=d}else{e=Math.floor(d/this.height)*this.height+b*this.height;if(e>this.maxScrollTop||e<this.minScrollTop)return;f=c}this.stop();var g=f-c,h=e-d;b=function(a){this.scrolling=a<1,this._scrollTo(c+g*a,d+h*a)}.bind(this);f=function(){this._handler.onScrollEnd(this.left,this.top,!1)}.bind(this);this.scrolling=!0;this._handler.onScrollStart(this.left,this.top);this._animator.start(b,this._canAnimate,f,a.SCROLL_ANIMATION_DURATION_MS)};c.setDimensions=function(a,c,d,e,f,g){__p&&__p();d=d<a?a:d;e=e<c?c:e;this._usePaging&&(d=a*Math.ceil(d/a),e=c*Math.ceil(e/c));f&&f!=this._pagingPositions&&(this._pagingPositions=f);this.scrollWidth=d;this.scrollHeight=e;this.width=a;this.height=c;this.maxScrollTop=e-c;this.maxScrollLeft=b("gkx")("981744")?d-Math.min(a,b("MViewport").getWidth()):d-a;this.minScrollTop=0;this.scrollPastMinOffset&&(this.minScrollTop=this.height<this.scrollPastMinOffset?0:-this.height+this.scrollPastMinOffset);g&&(this.minScrollLeft=this.maxScrollLeft*-1,this.maxScrollLeft=0);this._syncPaging()};c.stop=function(){this._animator.stop(),this.scrolling=!1,this._touchMoved=!1,delete this._moveCoordStart};c.doTouchStart=function(a){__p&&__p();this._scrolled&&this._lessenViewportScroll&&b("MTouchScroll").blockDuringTouch(a);this.stop();a=a.getTouch();var c=a.pageX;a=a.pageY;this._moveCoordStart={x:c,y:a};this._startX=this.left;this._startY=this.top;this._startDirection=null;this._touchMoved=!1;this._scrolled=!1;this._skipTouchMove=!1;this._scrollList=[{time:Date.now(),position:this._moveCoordStart}]};c.doTouchMove=function(a){__p&&__p();if(!this._moveCoordStart||this._skipTouchMove)return;var b=a.getTouch(),c=b.pageX;b=b.pageY;c={x:c,y:b};b=Date.now();this._scrollList.push({time:b,position:c});while(b-this._scrollList[1].time>g)this._scrollList.shift();if(this.scrolling){this._moveTimePrevious=this._moveTimeNow;this._moveTimeNow=b;if(c.y===this._moveCoordNow.y&&c.x===this._moveCoordNow.x)return}var d=this._moveCoordStart,e=d.x-c.x;d=d.y-c.y;if(!this.scrolling){var f=Math.abs(e),h=Math.abs(d);if(f>this._SCROLL_START_DELTA||h>this._SCROLL_START_DELTA){var i=this.noThreshold||this._canScrollX&&f>h||this._canScrollY&&h>f;if(i)this.noThreshold?this._startDirection=this._canScrollX?"x":"y":this._startDirection=f>h?"x":"y",this.scrolling=!0,this._moveCoordPrevious=this._moveCoordNow,this._moveCoordNow=c,this._moveTimeNow=b,this._touchMoved=!0;else{this._skipTouchMove=!0;return}}}a.prevent();if(this._startDirection==="x"&&!this._canScrollX||this._startDirection==="y"&&!this._canScrollY)return;this._scrolled||(this._scrolled=!0,this._handler.onScrollStart(this.left,this.top,!0));this._moveCoordPrevious=this._moveCoordNow;this._moveCoordNow=c;this._touchMoved=!0;e=this._canScrollX?e:0;d=this._canScrollY?d:0;i=this._TENSION_FACTOR;f=this._TENSION_LIMIT;var j;h=this._startX+e;if(this._canScrollX){if(h<this.minScrollLeft){if(this.lockMin)return;j=h-this.minScrollLeft}else if(h>this.maxScrollLeft){if(this.lockMax)return;j=h-this.maxScrollLeft}j&&(b=Math.min(1,Math.abs(j)/f),b=1-Math.cos(b*Math.PI/2),h-=j*Math.pow(i,~~(b*10)));j=null}a=this._startY+d;if(this._canScrollY){if(a<this.minScrollTop){if(this.lockMin)return;j=a-this.minScrollTop}else if(a>this.maxScrollTop){if(this.lockMax)return;j=a-this.maxScrollTop}j&&(b=Math.min(1,Math.abs(j)/f),b=1-Math.cos(b*Math.PI/2),a-=j*Math.pow(i,~~(b*10)))}this._scrollTo(h,a)};c.doTouchEnd=function(a){__p&&__p();if(!this._moveCoordStart)return;this.scrolling&&a.prevent();a=0;var b=this._moveCoordPrevious,c=this._moveCoordStart;c=this._moveCoordNow||b||c;var d=this._canScrollX?this.left:this.top,e,f,g=this._SCROLLING_DURATION,h=this._moveTimePrevious===void 0?null:Date.now()-this._moveTimePrevious;if(this._usePaging&&this._scrollSnapType==="mandatory"){this._syncPaging();g=this._PAGING_DURATION;var i=this._getRecentTimeAndLocation();i=this._getIndexDelta(i.position,i.time);i=this.pageIndex+i;i=this._clamp(i,0,this.pagesCount-1);this._canScrollX?e=this._clamp(this._indexToLeftOffset(i),this.minScrollLeft,this.maxScrollLeft):e=this._clamp(i*this.height,this.minScrollTop,this.maxScrollTop)}else this._touchMoved&&h<this._MAX_TOUCH_MOVE_INTERVAL?(i=this._canScrollX?b.x-c.x:b.y-c.y,a=i/h):(this.top<this.minScrollTop?e=this.minScrollTop:this.top>this.maxScrollTop?e=this.maxScrollTop:this.left<this.minScrollLeft?e=this.minScrollLeft:this.left>this.maxScrollLeft&&(e=this.maxScrollLeft),e!==void 0&&(g=this._PAGING_DURATION));this._doPostTouchScrolling(d,e,f,a,g);delete this._moveCoordStart;this._scrollList=null;this._touchMoved=!1};c.isTouchMoving=function(){return this._touchMoved};c.scrollTo=function(a,b,c){this.stop(),this._handler.onScrollStart(this.left,this.top),this._scrollTo(a,b),this._handler.onScrollEnd(this.left,this.top,!1),c&&c()};c.animatedScrollTo=function(b,c,d,e){__p&&__p();this.stop();var f=this.left,g=this.top,h=0,i=0;this._canScrollX?h=b-f:this._canScrollY&&(i=c-g);b=function(a){this.scrolling=a<1,this._scrollTo(f+h*a,g+i*a)}.bind(this);c=function(){this._handler.onScrollEnd(this.left,this.top,!1),e&&e()}.bind(this);this.scrolling=!0;this._handler.onScrollStart(this.left,this.top);this._animator.start(b,this._canAnimate,c,d?d:a.SCROLL_ANIMATION_DURATION_MS)};c.scrollToBottom=function(a,b,c){a?this.animatedScrollTo(0,this.maxScrollTop,b,c):this.scrollTo(0,this.maxScrollTop,b,c)};c.scrollToTop=function(a,b,c){a?this.animatedScrollTo(0,this.minScrollTop,b,c):this.scrollTo(0,this.minScrollTop,b,c)};c.getPagingPositions=function(){return this._pagingPositions};c._doPostTouchScrolling=function(a,b,c,d,e){__p&&__p();if(this.lockMax||this.lockMin){var f=this._canScrollX?this.maxScrollLeft:this.maxScrollTop,g=this._canScrollY?this.minScrollLeft:this.minScrollTop;this.lockMax&&(b>f?(b=f,e=this._BOUNDED_DURATION):a+d*e>f&&(b=f,e=this._BOUNDED_DURATION));this.lockMin&&(b<g?(b=g,e=this._BOUNDED_DURATION):a+d*e<g&&(b=g,e=this._BOUNDED_DURATION))}d*=this._SPEED_FACTOR;b===void 0&&(b=a+d*e,this._canScrollX?c=this._clamp(b,this.minScrollLeft,this.maxScrollLeft):c=this._clamp(b,this.minScrollTop,this.maxScrollTop),b!==c&&(b=c+(b-c)*this._BOUNCE_FACTOR/Math.max(1,Math.abs(d))),(b<a&&c<b||b>a&&c>b)&&(b=c));c===void 0&&(c=b);if(b===a&&b===c)return;var h=this._canScrollX?function(a){this._scrollTo(a,this.top)}:function(a){this._scrollTo(this.left,a)};f=this._createStepFunction(a,b,c,function(a,b){this.scrolling=b<1,h.call(this,a)});this.scrolling=!0;this._animator.start(f,this._canAnimate,f,e)};c._createStepFunction=function(a,b,c,d){b=b===void 0?a:b;c=c===void 0?b:c;var e=b-a,f=c-b;return function(c,g,h){f===0?h=a+e*c:c<=.5?h=a+e*(c/.5):h=b+f*((c-.5)/.5);d.call(this,h,c);g||this._handler.onScrollEnd(this.left,this.top,!0)}.bind(this)};c._scrollTo=function(a,b){a=Math.round(a),b=Math.round(b),(this.left!==a||this.top!==b)&&(this.left=a,this.top=b,this._syncPaging(),this._handler.onScroll(a,b))};c._syncPaging=function(){if(this._usePaging){if(!this.height||!this.width){this.pageIndex=0;this.pagesCount=1;return}this.pageIndex=this._canScrollX?this._getPageIndex():Math.floor(this.top/this.height);this.pagesCount=this._canScrollX?this._getPagesCount():Math.ceil(this.scrollHeight/this.height)}};c._indexToLeftOffset=function(a){if(this._pagingPositions){a=Math.max(Math.min(a,this._pagingPositions.length-1),0);return this._pagingPositions[a]}return a*this.width};c._getPagesCount=function(){return this._pagingPositions?this._pagingPositions.length:Math.ceil(this.scrollWidth/this.width)};c._getPageIndex=function(){var a;this._scrollSnapType==="normal"?a=this.left+this.width/2:a=this.left;if(this._pagingPositions)for(var b=this._pagingPositions.length-1;b>=0;--b)if(this._pagingPositions[b]<=a)return b;return Math.max(0,Math.floor(this.left/this.width))};c._getRecentTimeAndLocation=function(){for(var a=this._scrollList.length-1;a>-1;a--)if(Date.now()-this._scrollList[a].time>g)return this._scrollList[a];return this._scrollList[0]};c._getRecentTimeDelta=function(a){return Date.now()-a};c._getRecentScrollDistance=function(a){return this._canScrollX?Math.abs(this._moveCoordNow.x-a.x):Math.abs(this._moveCoordNow.y-a.y)};c._isBackSwipe=function(){return this._canScrollX?this._moveCoordNow.x>this._moveCoordStart.x:this._moveCoordNow.y>this._moveCoordStart.y};c._isRecentBackSwipe=function(a){if(this._canScrollX)return this._moveCoordNow.x>a.x;else return this._moveCoordNow.y>a.y};c._getDistance=function(){return this._canScrollX?Math.abs(this._moveCoordNow.x-this._moveCoordStart.x):Math.abs(this._moveCoordNow.y-this._moveCoordStart.y)};c._crossesMedian=function(){return this._canScrollX?this._getDistance()>this.width/2:this._getDistance()>this.height/2};c._getVelocity=function(a,b){return a/b};c._getIndexDelta=function(a,b){if(!this._touchMoved)return 0;var c=this._crossesMedian(),d=this._isBackSwipe(),e=this._isRecentBackSwipe(a);a=this._getVelocity(this._getRecentScrollDistance(a),this._getRecentTimeDelta(b));if(a>h)return e?0:1;return c?d?0:1:d?1:0};c._clamp=function(a,b,c){return a<b?b:a>c?c:a};return a}();Object.assign(a.prototype,{scrolling:!1,lockMax:!1,lockMin:!1,scrollPastMinOffset:0,width:0,height:0,scrollWidth:0,scrollHeight:0,left:0,top:0,minScrollTop:0,minScrollLeft:0,maxScrollTop:0,maxScrollLeft:0,pagesCount:0,pageIndex:0,noThreshold:!1,_SPEED_FACTOR:/android/gi.test(navigator.appVersion)?1:.2,_MAX_TOUCH_MOVE_INTERVAL:220,_SCROLL_START_DELTA:2,_PAGING_DURATION:400,_SCROLLING_DURATION:450,_TENSION_FACTOR:/android/gi.test(navigator.appVersion)?.4:.95,_TENSION_LIMIT:30,_BOUNCE_FACTOR:.35,_BOUNDED_DURATION:35});a.SCROLL_ANIMATION_DURATION_MS=500;e.exports=a}),null);
__d("MScrollArea",["CancelableEventListener","CSS","DOM","FBLogger","MHome","MJSEnvironment","MPageCache","MPageControllerPath","MScrollAreaScroller","Stratcom","StratcomManager","cancelAnimationFrame","getVendorPrefixedName","gkx","requestAnimationFrame","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g=/Firefox/.test(navigator.userAgent),h=["enableMarauderLogging","infiniteScroller","egoScroller"];a=function(){"use strict";__p&&__p();function a(a,c,d){__p&&__p();var e=this;this._onTouchMove=function(a){if(a.getStopped()){e._onTouchEnd();return}else e._scroller.doTouchMove(a)};this._onTouchEnd=function(a){e._scroller.doTouchEnd(a),e._clearListeners()};this._renderScroll=function(){__p&&__p();if(e._disposed)return;if(e._scrollBounds){var a,c;e._isHorizontal?(a=e._scroller.left,c=e._scroller.minScrollLeft):(a=e._scroller.top,c=e._scroller.minScrollTop);var d,f=e._scroller.getPagingPositions();f&&(d=f[f.length-1]);if(a<c||d&&a>d)return}delete e._renderID;f=-e._scroller.left;c=-e._scroller.top;if(e.renderedLeft!==f||e.renderedTop!==c){e.renderedLeft=f;e.renderedTop=c;a=e._content;var g=e._isHorizontal?f:c,h=e._isHorizontal?e.getScrollWidth():e.getScrollHeight();g>0&&g>h/4&&b("Stratcom").invoke("MScrollArea:limit",null,e._eventData);e._isContainerDraggable&&(g<0?e._updateElementPosition(e._element,0,0):(a=e._element,e._updateElementPosition(e._content,0,0)));e._updateElementPosition(a,c,f)}e._renderSlowly&&e._scroller.scrolling&&(e._renderID=b("requestAnimationFrame")(e._renderScroll))};var f=d||{};this._enabled=!0;this.customScrollHeight=0;this.useCustomScrollHeight=f.useCustomScrollHeight;this._element=a;this._content=c;this._listeners=[];this._isHorizontal=f.direction==="horizontal";this._canUseHscroll=f.canusehscroll;this._automaticPaging=f.pagingPositions==="auto"&&this._isHorizontal;this._automaticPaging&&(this._automaticPagingStrategy=f.pagingStrategy||"centered",this._automaticPagingStrategy!=="centered"&&this._automaticPagingStrategy!=="left"&&b("FBLogger")("scroll_area").mustfix("MScrollArea automaticPagingStrategy '%s', should be either 'centered' or 'left'",this._automaticPagingStrategy));this._automaticPaging&&(f.pagingPositions=this.calculatePagingPositions(),f.betweenSpacing=0);f.pagingPositions&&(this._pagingPositions=f.pagingPositions);f.scrollsnaptype==="normal"&&!f.paging&&b("FBLogger")("scroll_area").mustfix("MScrollArea scrollsnaptype '%s', requires paging be 'true'",f.scrollsnaptype);this._scroller=new(b("MScrollAreaScroller"))(this,f);this._isContainerDraggable=f.containerDraggable;this._betweenSpacing=f.betweenSpacing||0;this._scrollBounds=f.scrollBounds;this._lockMax=f.lockMax;this._lockMin=f.lockMin;this._scrollPastMinOffset=f.scrollPastMinOffset;this._invertX=f.invertX;this._eventData={scrollarea:this,element:a,contentElement:this._content,scrolledByUser:!1,container:this._content,scrollEndCount:0,logName:f.logName,logData:f.logData};f.showpaginator&&this._isHorizontal&&(this._paginatorEl=b("DOM").find(this._element,"div","scroll-area-paginator"));d=function(){e.reflow(e._pagingPositions);e._renderScroll();e._scrollStart=!1;f.pageIndex&&(e._isHorizontal?e.scrollTo(e.getScrollWidth()*f.pageIndex,0):e.scrollTo(0,e.getScrollWidth()*f.pageIndex));var a=function(){this._disposed||b("Stratcom").invoke("MScrollArea:create",null,this._eventData)}.bind(e);b("setTimeoutAcrossTransitions")(a,1e3)};!f.pageIndex&&b("MHome").isHome()&&b("gkx")("676827")?b("requestAnimationFrame")(d):d()}var c=a.prototype;c.setCustomScrollHeight=function(a){this.customScrollHeight=a};c.calculatePagingPositions=function(){__p&&__p();var a=this._content.offsetWidth,b=this._content.children,c=[0],d=[b[0]?b[0].offsetWidth:0];for(var e=1,f=b.length;e<f;e++){var g=b[e].offsetLeft,h=b[e].offsetWidth,i=g+h,j=c[c.length-1];i>j+a?(c.push(g),d.push(h)):d[d.length-1]=i-j}if(this._automaticPagingStrategy==="centered")for(e=1,f=c.length-1;e<f;e++)c[e]-=Math.round((a-d[e])/2);c[c.length-1]-=a-d[d.length-1];return c};c.dispose=function(){if(!this._disposed){b("cancelAnimationFrame")(this._renderID);this._paginatorEl&&b("DOM").setContent(this._paginatorEl,"");this._clearListeners();this._scroller.dispose();for(var a in this)delete this[a];this._disposed=!0}};c.isTouchMoving=function(){return this._scroller.isTouchMoving()};c.reset=function(){if(this._disposed)return;this.scrollTo(0,0);this._updateElementPosition(this._content,0,0);this._updateElementPosition(this._element,0,0)};c.scrollByPages=function(a){this._disposed||this._scroller.scrollByPages(a)};c.scrollTo=function(a,b){if(this._disposed)return;this._scroller.scrollTo(a,b);this._renderScroll()};c.animatedScrollTo=function(a,b,c){this._disposed||this._scroller.animatedScrollTo(a,b,c)};c.scrollToBottom=function(a,b,c){this._disposed||this._scroller.scrollToBottom(a,b,c)};c.scrollToTop=function(a,b,c){this._disposed||this._scroller.scrollToTop(a,b,c)};c.scrollToIndex=function(a){this.reflow(this._pagingPositions),this.scrollTo(this.getScrollWidth()*a,0)};c.isScrolling=function(){return this._scrollStart};c.getScrollLeft=function(){return this._scroller.left};c.getScrollTop=function(){return this._scroller.top};c.getMaxScrollTop=function(){return this._scroller.maxScrollTop};c.getMaxScrollLeft=function(){return this._scroller.maxScrollLeft};c.getScrollWidth=function(){return this._scroller.width};c.getScrollHeight=function(){return this._scroller.height};c.getScrollPageCount=function(){return this._scroller.pagesCount};c.getScrollPageIndex=function(){return this._scroller.pageIndex};c.isFirstPage=function(){return this._scroller.pageIndex===0};c.isLastPage=function(){return this._scroller.pageIndex+1===this._scroller.pagesCount};c.appendChild=function(a){this._content.appendChild(a)};c.prependChild=function(a){b("DOM").prependContent(this._content,a)};c.getNumChildren=function(){return this._content.children.length};c.getChildAtPageIndex=function(a){return this._content.children[a]};c.getChildrenOnCurrentPage=function(){__p&&__p();if(!this._pagingPositions||!this._scroller)return[];var a=this._scroller.pageIndex,b=this._pagingPositions,c=this._content.children,d=b[a];b=b.length>a+1?b[a+1]:void 0;a=[];for(var e=0;e<c.length;e++){var f=c[e];f.offsetLeft>=d&&(b===void 0||f.offsetLeft<b)&&a.push(f)}return a};c.emptyChildren=function(){b("DOM").setContent(this._content,null)};c.getAutomaticPaging=function(){return this._automaticPaging};c.reflow=function(a){__p&&__p();if(this._disposed||!this._element.offsetWidth)return;b("Stratcom").invoke("MScrollArea:reflow",null,this._eventData);var c=g&&this._content?this._content.style:null,d;c&&(d=c.overflow,c.overflow="hidden");(!a||a==="auto"&&this._isHorizontal)&&(a=this.calculatePagingPositions());a!=this._pagingPositions&&(this._pagingPositions=a);var e=this.useCustomScrollHeight?this.customScrollHeight:this._content.scrollHeight;this._scroller.setDimensions(this._element.offsetWidth+(this._isHorizontal?this._betweenSpacing:0),this._element.offsetHeight+(this._isHorizontal?0:this._betweenSpacing),b("gkx")("981744")?this._content.scrollWidth+this._content.offsetLeft:this._content.scrollWidth,e,a,this._invertX);b("Stratcom").invoke("MScrollArea:updatedPages",null,this._eventData);e=Math.min(this._scroller.top,this._scroller.maxScrollTop);a=Math.min(this._scroller.left,this._scroller.maxScrollLeft);(e!==this._scroller.top||a!==this._scroller.left)&&this.scrollTo(a,e);c&&(c.overflow=d);this._syncPaginator()};c.onTouchStart=function(a){this.reflow(this._pagingPositions),this._scroller.doTouchStart(a),this._clearListeners(),this._enabled&&this._bindListeners()};c.onTouchMove=function(a){this._onTouchMove(a)};c.onTouchEnd=function(a){this._onTouchEnd(a)};c.onClick=function(a){this._scroller.scrolling&&a.kill()};c.onScrollStart=function(a,c,d){d===void 0&&(d=!1),this._scrollStart=!0,this._eventData.scrolledByUser=d,b("Stratcom").invoke("MScrollArea:scrollstart",null,this._eventData),this._renderSlowly&&(b("cancelAnimationFrame")(this._renderID),this._renderID=b("requestAnimationFrame")(this._renderScroll))};c.onScroll=function(a,c){b("Stratcom").invoke("MScrollArea:scroll",null,this._eventData),this._renderSlowly||this._renderScroll()};c.onScrollEnd=function(a,c,d){__p&&__p();this._scrollStart=!1;this._syncPaginator();this._eventData.scrollEndCount++;this._eventData.scrolledByUser=d;d=b("MPageControllerPath").getRequestPath();d&&b("MPageCache").setScrollUnitHistory(d,this._eventData.element.id,c,a);d=null;for(var c=0;c<h.length;c++)if(b("Stratcom").hasSigil(this._element,h[c])){d=h[c];break}b("Stratcom").invoke("MScrollArea:scrollend",d,this._eventData);this._renderSlowly&&(b("cancelAnimationFrame")(this._renderID),delete this._renderID,this._renderScroll())};c.setEnabled=function(a){this._enabled=a,a||this._clearListeners()};c._bindListeners=function(){var a=this._element;this._listeners.push(b("CancelableEventListener").listen(a,"touchmove",null,this._onTouchMove),b("CancelableEventListener").listen(a,"touchend",null,this._onTouchEnd),b("CancelableEventListener").listen(a,"touchcancel",null,this._onTouchEnd))};c._clearListeners=function(){for(var a=0,b;b=this._listeners[a];a++)b.remove();this._listeners.length=0};c._updateElementPosition=function(a,c,d){var e=b("getVendorPrefixedName")("transform");a=a&&a.style;a&&(e?(a[b("getVendorPrefixedName")("backface-visibility")]="hidden",a[e]="translate("+d+"px,"+c+"px)"):(a.left=d+"px",a.top=c+"px"))};c._syncPaginator=function(){if(this._paginatorEl){var a=b("DOM").create("i",{className:"scrollAreaPaginatorBubble"}),c=document.createDocumentFragment(),d=this._scroller.pageIndex;for(var e=0;e<this._scroller.pagesCount;e++){var f=a.cloneNode(!1);e===d&&b("CSS").conditionClass(f,"scrollAreaPaginatorBubbleActive",!0);c.appendChild(f)}b("DOM").setContent(this._paginatorEl,c)}};c.getElement=function(){return this._element};c.getEventData=function(){return this._eventData};c.getLogginSigils=function(){return h};c.getContent=function(){return this._content};return a}();Object.assign(a.prototype,{_renderSlowly:b("MJSEnvironment").IS_ANDROID&&b("MJSEnvironment").OS_VERSION<4.1});(function(){b("StratcomManager").enableDispatch(window,"orientationchange")})();e.exports=a}),null);
__d("InitMScrollArea",["CancelableEventListener","MLegacyDataStore","MPageCache","MPageControllerPath","MScrollArea","Stratcom","ge"],(function(a,b,c,d,e,f){__p&&__p();var g="scroll-area",h=[],i=!1;function j(){__p&&__p();var a;function c(){var a=document.documentElement;for(var c=0,d;d=h[c];c++)if(a!==null&&!a.contains(d.element)){d.scrollArea.dispose();d=b("MLegacyDataStore").get(d.element);delete d.scrollArea;h.splice(c,1);c--}}(a=b("Stratcom")).listen("m:page:unload",null,c);function d(a){__p&&__p();for(var b=0,c;c=h[b];b++){var d=c.scrollArea,e=d.getAutomaticPaging(),f=a.getType()==="m:orientation-resize:complete";if(e){var g=d.getScrollWidth();if(f&&g===c.width)continue;c.width=g}else if(f)continue;d.reflow(e?"auto":null)}}a.listen("m:viewport:orientation-change",null,d);a.listen("m:orientation-resize:complete",null,d);function e(a){var c=b("MLegacyDataStore").get(a.getNode(g));c&&c.scrollArea&&c.scrollArea.onClick(a)}a.listenCapture("click",g,e)}function a(a){a={root:b("ge")(a.id),body:b("ge")(a.bodyId),marauderEventName:Object.prototype.hasOwnProperty.call(a,"marauderEventName")?a.marauderEventName:null};return k(a)}function k(a){__p&&__p();i||(j(),i=!0);var c=a.root;if(!c)return null;function d(a){var d=b("MLegacyDataStore").get(c);d&&d.scrollArea&&d.scrollArea.onTouchStart&&d.scrollArea.onTouchStart(a)}b("CancelableEventListener").listen(c,"touchstart",g,d);d=b("MLegacyDataStore").get(c);(!d||!d.scrollArea)&&(d.marauderEventName=a.marauderEventName,d.scrollArea=new(b("MScrollArea"))(c,a.body,d),h.push({scrollArea:d.scrollArea,element:c}));a=b("MPageControllerPath").getRequestPath();if(a&&c){a=b("MPageCache").getScrollUnitHistory(a,c.id);a&&d.scrollArea._scroller.scrollTo(a.left||0,a.top||0)}return d.scrollArea}e.exports={mainWithTypedConfig:k,main:a}}),null);
__d("XFeedEgoImpressionLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ego/feed/logging/impression/",{})}),null);
__d("Clipboard",["Promise","UserAgent"],(function(a,b,c,d,e,f){__p&&__p();var g={isSupported:function(){return window.document.queryCommandSupported instanceof Function&&window.document.queryCommandSupported("copy")&&!(b("UserAgent").isBrowser("Firefox < 41")||b("UserAgent").isPlatform("iOS < 10.3"))||b("UserAgent").isBrowser("Chrome >= 43")},copy:function(a,c){__p&&__p();c=c||document.body;if(!c)return!1;var d=!0,e=document.createElement("textarea");c.appendChild(e);e.value=a;if(b("UserAgent").isPlatform("iOS >= 10.3")){a=document.createRange();a.selectNodeContents(e);var f=window.getSelection();f.removeAllRanges();f.addRange(a);e.setSelectionRange(0,999999)}else e.select();try{d=document.execCommand("copy")}catch(a){d=!1}c.removeChild(e);return d},copyAsync:function(a){var c=window.navigator;if(c&&c.clipboard&&typeof c.clipboard.writeText==="function")return c.clipboard.writeText(a);return g.copy(a)?b("Promise").resolve():b("Promise").reject()}};e.exports=g}),null);