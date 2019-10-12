if (self.CavalryLogger) { CavalryLogger.start_js(["uR+zt"]); }

__d("MAnimation",["CSS","MLegacyDataStore","getVendorPrefixedName","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g=b("getVendorPrefixedName")("animation-duration");function a(a,c,d){__p&&__p();var e=b("MLegacyDataStore").get(a);clearTimeout(e.timerEnd);delete e.timerEnd;b("CSS").conditionClass(a,c,!1);b("CSS").conditionClass(a,"accelerate",!0);a.style[g]=d+"ms";e.timerStart=b("setTimeoutAcrossTransitions")(b("CSS").conditionClass.bind(null,a,c,!0),0);e.timerEnd=b("setTimeoutAcrossTransitions")(function(){b("CSS").conditionClass.bind(null,a,c,!1);a.style[g]="";b("CSS").conditionClass(a,"accelerate",!1);var d=b("MLegacyDataStore").get(a);clearTimeout(d.timerStart);delete d.timerStart},d)}e.exports={animate:a}}),null);
__d("MExpandablePymk",["cx","CSS","DOM","MLegacyDataStore","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){__p&&__p();var h="m-add-friend";function a(a,c,d){__p&&__p();var e=[],f=0;if(a){a=b("DOM").scry(a,"div","story-wrap");for(var g=0;g<a.length;g++){var i=b("DOM").find(a[g],"a",h);i=b("MLegacyDataStore").get(i);e.push(i.id);i=b("MLegacyDataStore").get(a[g]);i.sent&&f++}d.pymk_group_id=c}e&&(d.uw=e.join(","));f&&(d.pc=f);return e}function c(a,c,d){__p&&__p();if(!a)return;var e=a.getElementsByClassName("_4-ck");e.length>0&&b("setTimeoutAcrossTransitions")(function(){a.style.height=""},800);var f=function(a){return function(){b("CSS").conditionClass(a,"_4-cl",!0)}},g=function(a){return function(){b("CSS").conditionClass(a,"_4-ck",!1)}},h=b("DOM").scry(a,"div","story-wrap"),i=0;for(var j=0;j<h.length;j++){var k=b("MLegacyDataStore").get(h[j]);if(k.transitionIn)b("MLegacyDataStore").set(h[j],{transitionIn:!1}),b("setTimeoutAcrossTransitions")(f(h[j]),800),b("setTimeoutAcrossTransitions")(g(h[j]),1200);else if(k.sent){var l=h[j];e.length>0&&(a.style.height=(a.offsetHeight-e.length*e[0].offsetHeight).toString()+"px");b("CSS").conditionClass(l,"_4-cn",!0);d&&(b("CSS").conditionClass(l,"_4-co",!0),b("CSS").conditionClass(l,"_4-cp",!1));b("setTimeoutAcrossTransitions")(function(){b("DOM").remove(l)},600);i++}}if(i<h.length){k=c.getNode("story-wrap");b("MLegacyDataStore").set(k,{sent:!0});d&&(b("CSS").conditionClass(k,"_4-cp",!0),b("CSS").conditionClass(k,"_4-co",!1))}}e.exports={getExtraArgs:a,animateExpansion:c}}),null);
__d("MFriendingState",[],(function(a,b,c,d,e,f){e.exports={REQUEST_SENT:"m:friending-state:request-sent",REQUEST_CANCELED:"m:friending-state:request-canceled",UNFRIENDED:"m:friending-state:unfriended"}}),null);
__d("XPymkFunnelLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pymk/funnel_logging/",{event_ts:{type:"Int",required:!0},query_id:{type:"Int"},candidate_id:{type:"Int"},signature:{type:"Int"},loc:{type:"String",required:!0},ref:{type:"String"},action:{type:"Enum",required:!0,enumType:1}})}),null);
__d("MPymkFunnelLogger",["DOM","MRequest","Stratcom","XPymkFunnelLoggingController"],(function(a,b,c,d,e,f){__p&&__p();a={listenToProfileClick:function(a,c,d){var e=a.getAttribute("data-pymk-id"),f=a.getAttribute("data-pymk-loc"),g=a.getAttribute("data-signature"),h=[];h.push(b("DOM").listen(d,"click",null,function(){this.logClick(e,g,f)}.bind(this)));h.push(b("DOM").listen(c,"click",null,function(){this.logClick(e,g,f)}.bind(this)));b("Stratcom").listen("m:page:unload",null,function(){b("Stratcom").removeCurrentListener();while(h.length)h.pop().remove()})},logImpression:function(a,b,c){this._logEvent(a,"impression",b,c)},logXOut:function(a,b,c){this._logEvent(a,"hide",b,c)},logClick:function(a,b,c){this._logEvent(a,"click",b,c)},logAdd:function(a,b,c){this._logEvent(a,"add",b,c)},_logEvent:function(a,c,d,e){a=b("XPymkFunnelLoggingController").getURIBuilder().setInt("candidate_id",a).setInt("signature",d).setInt("event_ts",Math.floor(Date.now()/1e3)).setEnum("action",c).setString("loc",e).getURI();new(b("MRequest"))(a).send()}};e.exports=a}),null);
__d("MAddFriend",["csx","cx","DOM","MAnimation","MExpandablePymk","MFriendingActionError","MFriendingState","MLegacyDataStore","MPageCache","MPageControllerPath","MPymkFunnelLogger","MRequest","MRequestTypes","MURI","Parent","Stratcom","gkx"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i="m-add-friend",j="m-cancel-request",k="m-unfriend-request",l="m-unfollow-request",m="m-follow-request",n="check",o="friends",p="add_friend_pymk_chain_placeholder",q="/a/mobile/friends/add_friend.php",r="/a/friendrequest/cancel/index.php",s="/a/friends/remove",t="/a/subscriptions/remove",u="/a/subscriptions/add",v=86,w=224,x="/find-friends/index.php",y="mobile_jewel";function z(a){a=a.querySelector(".touched_hide");a&&b("MAnimation").animate(a,"_4-ic",500)}function A(){var a=b("MPageControllerPath").getRequestPath();b("MPageCache").removeCachedPage(a);b("MPageCache").clearCachedIUIResponses(a)}function B(a){__p&&__p();var c=a.getNode(i),d=b("MLegacyDataStore").get(c),e=a.getNode("m-add-friend-secondary"),f=b("MLegacyDataStore").get(e),g=d.pymk_group_id||"pymk_suggestions_box",h=a.getNode("id:"+g),j=document.getElementById(p);H(a);b("MLegacyDataStore").set(e,{one_click_adding:!0,one_click_cancel_event:null});A();var k={id:d.id,hf:d.hf,sc:d.sc,so:d.so,pl:d.pl,at:d.at,et:d.et,ed:d.ed,fref:d.fref};d.floc&&(k.floc=d.floc);d.frefs&&(k.frefs=d.frefs);d.el&&(k.el=d.el);var l=b("MExpandablePymk").getExtraArgs(h,g,k),m=b("DOM").find(e,"*",n),o=b("DOM").find(e,"div","m-add-friend-flyout");d=new(b("MURI"))(q);g=new(b("MURI"))(c.href).getQueryData()._ft_;g&&d.addQueryData({_ft_:g});g=new(b("MURI"))(c.href).getQueryData().__xts__;g&&d.addQueryData({__xts__:g});c=new(b("MRequest"))(d.toString()).setType(b("MRequestTypes").DEPENDENT);c.setData(k);var r=function(){b("DOM").show(m),b("MLegacyDataStore").get(e).bounce&&z(m),b("Stratcom").listen("friending_state_change",null,C.bind(a,k.id,b("MFriendingActionError").SEND_OUTGOING_REQUEST_ERROR)),b("Stratcom").invoke(b("MFriendingState").REQUEST_SENT,null,{event:a,userid:k.id})};c.listen("start",function(){b("MLegacyDataStore").set(e,{outgoing_request_pending:!0}),b("DOM").hide(o),r()});c.listen("postprocess",function(c){b("MLegacyDataStore").set(e,{outgoing_request_pending:!1}),f.one_click_adding&&(b("MLegacyDataStore").set(e,{one_click_adding:!1}),f.one_click_cancel_event&&E(f.one_click_cancel_event)),l&&b("MExpandablePymk").animateExpansion(h,a,j)});c.send();a.kill()}function C(a,c,d){__p&&__p();d=d.getData();if(d.userid!=a)return;if(d.error!=c)return;a=this.getNode("m-add-friend-secondary");if(d.error===b("MFriendingActionError").SEND_OUTGOING_REQUEST_ERROR){b("MLegacyDataStore").set(a,{outgoing_request_pending:!1});var e=(c=b("DOM")).find(a,"*",n),f=c.find(a,"div","m-add-friend-flyout");c.show(f);c.hide(e);b("Stratcom").invoke(b("MFriendingActionError").SEND_OUTGOING_REQUEST_ERROR,null,{event:this})}else if(d.error===b("MFriendingActionError").CANCEL_OUTGOING_REQUEST_ERROR){f=(c=b("DOM")).find(a,"a","m-cancel-request");e=c.find(a,"div","m-add-friend-flyout");c.show(f);c.hide(e);b("Stratcom").invoke(b("MFriendingActionError").CANCEL_OUTGOING_REQUEST_ERROR,null,{event:this})}b("Stratcom").removeCurrentListener()}function D(a){__p&&__p();var c=b("MLegacyDataStore").get(a.getNode(k)),d=c.flyoutEvent;A();a=d.getNode("undoable-action");a||(a=d.getNode("m-add-friend-secondary"));var e=b("DOM").scry(a,"*",o)[0],f=b("DOM").find(a,"div","m-add-friend-flyout");a=new(b("MURI"))(s);a=new(b("MRequest"))(a);a.setData({friend_id:c.id,noReload:!0,unref:c.unfriend_ref});a.listen("start",function(){b("DOM").hide(e),c.is_deactivated||b("DOM").show(f),b("Stratcom").invoke(b("MFriendingState").UNFRIENDED,null,{event:d,userid:c.id})});a.send();d.kill()}function E(a){__p&&__p();var c=b("MLegacyDataStore").get(a.getNode(j)),d=a.getNode("undoable-action");d||(d=a.getNode("m-add-friend-secondary"));d||(d=c.parentNode);var e=b("DOM").scry(d,"*",n)[0],f=b("DOM").find(d,"*","load"),g=b("DOM").find(d,"div","m-add-friend-flyout"),h=b("DOM").scry(d,"a","m-xout-pymk-suggestions");d=a.getNode("m-add-friend-secondary");var i=d?b("MLegacyDataStore").get(d):null;if(K&&i&&i.outgoing_request_pending)return;if(i&&i.one_click_adding){b("MLegacyDataStore").set(d,{one_click_cancel_event:a});b("DOM").hide(e);b("DOM").show(f);return}var k=function(){b("MLegacyDataStore").get(g).not_friendable||b("DOM").show(g),h.length>0&&(h[0].style.visibility="visible"),b("Stratcom").invoke(b("MFriendingState").REQUEST_CANCELED,null,{event:a,userid:c.id})};i=new(b("MURI"))(r);d=new(b("MRequest"))(i);d.setData({subject_id:c.id,ref_param:c.ref_param,floc:c.floc,frefs:c.frefs});b("Stratcom").listen("friending_state_change",null,C.bind(a,c.id,b("MFriendingActionError").CANCEL_OUTGOING_REQUEST_ERROR));d.listen("start",function(){b("DOM").hide(e),b("DOM").show(f)});d.listen("finally",function(){b("DOM").hide(f);k();var c=a.getNode("story-wrap");c&&b("MLegacyDataStore").set(c,{sent:!1})});d.send();a.kill()}function F(a){__p&&__p();var c=a.getNode(l);c=b("MLegacyDataStore").get(c);var d=new(b("MURI"))(t);d=new(b("MRequest"))(d);var e=a,f=null;try{a=c.flyoutEvent,f=a.getNode("popup-action-trigger")}catch(a){f=null}if(f!==null){d.setData({subject_id:c.id,forceredirect:!1,location:v});d.send();b("MLegacyDataStore").set(f,{is_following:!1});a.kill();return}f=e.getNode("m-add-friend-flyout");var g=b("DOM").find(f,"a","m-follow-request"),h=b("DOM").find(f,"a","m-unfollow-request"),i=b("DOM").find(f,"*","load");d.setData({subject_id:c.id,forceredirect:!1,location:w});d.listen("start",function(){b("DOM").hide(h),b("DOM").show(i)});d.listen("finally",function(){b("DOM").hide(i),b("DOM").show(g)});d.send();e.kill()}function G(a){__p&&__p();var c=a.getNode(m);c=b("MLegacyDataStore").get(c);var d=new(b("MURI"))(u);d=new(b("MRequest"))(d);var e=a,f=null;try{a=c.flyoutEvent,f=a.getNode("popup-action-trigger")}catch(a){f=null}if(f!==null){d.setData({subject_id:c.id,forceredirect:!1,location:v});d.send();b("MLegacyDataStore").set(f,{is_following:!0});a.kill();return}f=e.getNode("m-add-friend-flyout");var g=b("DOM").find(f,"a","m-follow-request"),h=b("DOM").find(f,"a","m-unfollow-request"),i=b("DOM").find(f,"*","load");d.setData({subject_id:c.id,forceredirect:!1,location:w});d.listen("start",function(){b("DOM").hide(g),b("DOM").show(i)});d.listen("finally",function(){b("DOM").hide(i),b("DOM").show(h)});d.send();e.kill()}function H(a){__p&&__p();a=a.getNode(i);if(!a)return;a=b("Parent").bySelector(a,"._5pxa");if(!a)return;var c=a.getAttribute("data-pymk-id"),d=a.getAttribute("data-pymk-loc");if(c&&(d===x||d===y)){a=a.getAttribute("data-signature");b("MPymkFunnelLogger").logAdd(c,a,d)}}var I=!1,J=!1,K=!1;a=function(a){a!==void 0&&a&&!J&&(J=!0,b("Stratcom").listen("click",l,F),b("Stratcom").listen("click",m,G));if(I)return;I=!0;K=b("gkx")("832605");b("Stratcom").listen("click",i,B);b("Stratcom").listen("click",j,E);b("Stratcom").listen("click",k,D)};e.exports={main:a}}),null);
__d("MAddFriendNew",["DOM","MFriendingState","MLegacyDataStore","Stratcom"],(function(a,b,c,d,e,f){__p&&__p();var g="m-add-friend-flyout",h="m-cancel-request";a=function(){"use strict";__p&&__p();function a(a,c,d){this.unit=d,this.userid=c,b("Stratcom").listen(b("MFriendingState").REQUEST_SENT,null,this.onFriendRequestSent.bind(this)),b("Stratcom").listen(b("MFriendingState").REQUEST_CANCELED,null,this.onFriendRequestCanceled.bind(this))}var c=a.prototype;c.onFriendRequestCanceled=function(a){a=a.getData();if(!a||a.userid!==this.userid)return;a=b("DOM").scry(this.unit,"*",g)[0];var c=b("DOM").scry(this.unit,"*",h)[0];b("MLegacyDataStore").get(a).not_friendable||b("DOM").show(a);b("DOM").hide(c)};c.onFriendRequestSent=function(a){a=a.getData();if(!a||a.userid!==this.userid)return;a=b("DOM").scry(this.unit,"*",g)[0];var c=b("DOM").scry(this.unit,"*",h)[0];b("DOM").hide(a);b("DOM").show(c)};return a}();e.exports=a}),null);
__d("MFriendDynamicSubtitle",["cx","DOM","MAnimation","MFriendingActionError","MFriendingState","MParent","Stratcom"],(function(a,b,c,d,e,f,g){__p&&__p();var h="undoable-action",i="m-add-friend-request-sent",j="m-friend-request-canceled",k="m-friend-unfriended",l="m-add-friend-source-replaceable",m="m-friend-request-highlight-notice";a=function(){"use strict";__p&&__p();function a(a,c){this.$1=a,this.$2=c,this.$3=b("MParent").bySigil(a,h),this.$4=[b("Stratcom").listen([b("MFriendingActionError").SEND_OUTGOING_REQUEST_ERROR,b("MFriendingActionError").CANCEL_OUTGOING_REQUEST_ERROR,b("MFriendingState").REQUEST_SENT,b("MFriendingState").REQUEST_CANCELED,b("MFriendingState").UNFRIENDED],null,this.$5.bind(this)),b("Stratcom").listen("m:page:unload",null,this.$6.bind(this)),b("Stratcom").listen("friending_state_change",null,this.$7.bind(this))]}var c=a.prototype;c.$7=function(a){a=a.getData();if(!a||!a.userid||a.userid!=this.$2)return;if(!a.error)return;this.$8(a.error)};c.$5=function(a){var b=a.getData();if(!b||!b.userid||b.userid!=this.$2)return;b=a.getType();this.$8(b)};c.$8=function(a){this.$9(),a===b("MFriendingState").REQUEST_SENT||a===b("MFriendingActionError").CANCEL_OUTGOING_REQUEST_ERROR?this.$10(i):a===b("MFriendingState").REQUEST_CANCELED?this.$10(j):a===b("MFriendingState").UNFRIENDED?this.$10(k):a===b("MFriendingActionError").SEND_OUTGOING_REQUEST_ERROR&&this.$10(l),this.$11()};c.$9=function(){this.$12(i),this.$12(l),this.$12(j),this.$12(k)};c.$12=function(a){a=b("DOM").scry(this.$3,"*",a)[0];a&&b("DOM").hide(a)};c.$10=function(a){a=b("DOM").scry(this.$3,"*",a)[0];a&&b("DOM").show(a)};c.$11=function(){var a=b("DOM").scry(this.$3,"*",m)[0];a&&b("MAnimation").animate(a,"_4z0z",4e3)};c.$6=function(){for(var a=0;a<this.$4.length;a++)this.$4[a].remove()};return a}();e.exports=a}),null);
__d("MFriendingAutoScroll",["MAnimator","MFriendingState","MViewport","Stratcom"],(function(a,b,c,d,e,f){__p&&__p();var g=400,h=101,i,j,k,l;function a(){n();var a=b("Stratcom").listen("m:page:unload",null,function(){a.remove(),o()})}function m(){var a=b("MViewport").getScrollPos().y,c=function(c){b("MViewport").scrollTo(0,a+c*h)};new(b("MAnimator"))().start(c,null,function(){},g)}function n(){var a;o(!0);i=(a=b("Stratcom")).listen([b("MFriendingState").REQUEST_SENT],null,m);j=a.listen("click","confirm-request",m);k=a.listen("click",["nav-popover","feed"],o);l=a.listen("click",["nav-popover","requests","icon"],n)}function o(a){a===void 0&&(a=!1),i&&i.remove(),j&&j.remove(),k&&k.remove(),a===!0&&l&&l.remove()}e.exports={setup:a}}),null);
__d("MFriendsActionBubble",["DOM","MLegacyDataStore","MURI","Stratcom"],(function(a,b,c,d,e,f){__p&&__p();var g="m-unfriend-request",h="/friendlists/edit",i="manage-friend-list",j="m-follow-request",k="m-unfollow-request";a=function(){"use strict";__p&&__p();function a(a){this.$1=a,this.$2=null}var c=a.prototype;c.enable=function(){this.$2=[b("Stratcom").listen("click","are-friends-popup",this.$3.bind(this)),b("Stratcom").listen("click",i,this.$4.bind(this))]};c.$3=function(a){var c=this.$1.getContentRoot(),d=a.getNode("popup-action-trigger"),e=b("DOM").scry(c,"*",g)[0];this.$5(d,e,a);e=b("DOM").scry(c,"*",i)[0];this.$5(d,e,a);this.$6(d,c,a)};c.$6=function(a,c,d){var e=b("MLegacyDataStore").get(a).is_following;if(e===null)return;var f=b("DOM").scry(c,"*",k)[0];this.$5(a,f,d);c=b("DOM").scry(c,"*",j)[0];this.$5(a,c,d);e?(b("DOM").show(f),b("DOM").hide(c)):(b("DOM").show(c),b("DOM").hide(f))};c.$5=function(a,c,d){if(!a||!c)return;a=b("MLegacyDataStore").get(a);a.flyoutEvent=d;b("MLegacyDataStore").set(c,a)};c.$7=function(a,c){window.FW_ENABLED||!window.APP_ENABLED?(c.kill(),window.location.href=a.toString()):b("Stratcom").invoke("go",null,{uri:a})};c.$4=function(a){var c=b("MLegacyDataStore").get(a.getNode(i));c=new(b("MURI"))(h).setQueryData({subject_id:c.id,ref_param:c.manage_list_ref});this.$7(c,a)};c.disable=function(){while(this.$2.length)this.$2.pop().remove()};return a}();e.exports=a}),null);
__d("MXoutPYMKSuggestions",["csx","CSS","DOM","MPymkFunnelLogger","Parent","Stratcom","Style"],(function(a,b,c,d,e,f,g){__p&&__p();var h="removed_item_hidden_event",i="/find-friends/index.php";function a(a){a=a.getNode("m-xout-pymk-suggestions");a=b("Parent").bySelector(a,"._5pxa");b("CSS").hide(a);b("Stratcom").invoke(h,null,null);var c=a.getAttribute("data-pymk-id"),d=a.getAttribute("data-pymk-loc");if(c&&d===i){a=a.getAttribute("data-signature");b("MPymkFunnelLogger").logXOut(c,a,d)}}function c(a){__p&&__p();a=a.getNode("m-add-friend");if(!a)return;a=b("Parent").bySelector(a,"._5pxa");if(!a)return;a=b("DOM").scry(a,"*","m-xout-pymk-suggestions")[0];if(!a)return;b("Style").apply(a,{visibility:"hidden"})}b("Stratcom").listen("click","m-add-friend",c);b("Stratcom").listen("click","m-xout-pymk-suggestions",a);e.exports={}}),null);
__d("XFeedEgoLoadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ego/feed/load/",{loading_id:{type:"String",required:!0},ids:{type:"IntVector",required:!0},service_id:{type:"String",required:!0},replace_data:{type:"String",defaultValue:""},location:{type:"String",defaultValue:""},group_size:{type:"Int",defaultValue:1},qid:{type:"Int",required:!0},mf_story_key:{type:"Int",required:!0}})}),null);
__d("MSwipeInfiniteScrollerLoadMore",["csx","DataAttributeUtils","DOM","MLegacyDataStore","MRequest","MRequestTypes","MURI","Parent","XFeedEgoLoadController"],(function(a,b,c,d,e,f,g){__p&&__p();var h=0,i=200;function a(a){__p&&__p();var c=b("DOM").scry(a,"*","m-infinite-swipe-loading")[0];if(!c)return;var d=b("MLegacyDataStore").get(c);if(d.processing)return;b("MLegacyDataStore").set(c,{processing:!0});if(d.use_uri){new(b("MRequest"))(new(b("MURI"))(d.uri).toString()).setType(b("MRequestTypes").DEPENDENT).send();return}d=[];a=a.children;var e,f;for(var g=0;g<a.length;g++){g===0&&(f=a[g].getAttribute("data-service"));var h=b("DataAttributeUtils").getDataFt(a[g]);if(!h)continue;g===0&&(e=JSON.parse(h));h=JSON.parse(h).ego_id;d.push(h)}h=b("XFeedEgoLoadController").getURIBuilder().setString("loading_id",c.id).setIntVector("ids",d).setString("service_id",f||"pymk").setString("location","inline_feed").setInt("qid",e.qid).setInt("mf_story_key",e.mf_story_key).getURI();g=new(b("MRequest"))(new(b("MURI"))(h).toString()).setType(b("MRequestTypes").DEPENDENT);a=function(){var a=b("Parent").bySelector(c,".scrollArea");j(a.id);b("MLegacyDataStore").set(c,{processing:!1})};g.listen("done",a.bind(this));g.send()}function j(a){__p&&__p();a=document.getElementById(a);if(!a)return;var c=b("MLegacyDataStore").get(a);if(!c||!c.scrollArea)return;var d=b("DOM").scry(a,"*","m-swipe-pymk-item")[0];d=b("DataAttributeUtils").getDataAttribute(d,"data-unit-size");d||(d=i);var e=c.scrollArea;if(e.getAutomaticPaging())e.reflow("auto");else{e=b("DOM").find(a,"*","scroll-area-body").children;a=[h];for(var f=1;f<e.length;f++)a[f]=a[f-1]+parseInt(d,10);c.scrollArea.reflow(a)}}e.exports={maybeLoadMore:a,reflow:j}}),null);
__d("XEgoHideLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ego/feed/logging/xout/",{ego_id:{type:"Int",required:!0},qid:{type:"Int",required:!0},mf_story_key:{type:"Int",required:!0},service_id:{type:"String",required:!0}})}),null);
__d("XEgoPYMIActionsLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pymi/logging/",{action:{type:"String",required:!0},invitee_name:{type:"String"},qid:{type:"Int"},mf_story_key:{type:"String"},ego_id:{type:"Int"},how_found:{type:"String"}})}),null);
__d("MSwipeInfiniteScroller",["cx","CSS","DataAttributeUtils","DOM","MFriendingState","MLegacyDataStore","MParent","MRequest","MScrollAreaHelper","MSwipeInfiniteScrollerLoadMore","RebuildTreeMutation","Stratcom","XEgoHideLoggingController","XEgoPYMIActionsLoggingController","XFeedEgoImpressionLoggingController"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i=b("RebuildTreeMutation").RebuildHighlightConfig,j=3,k={};({});function a(a){__p&&__p();var c=a.getData().event;if(!c.getNode("m-swipe-pymk-item")&&!c.getNode("m-swipe-pysf-item"))return;var d=c.getTarget(),e=b("MLegacyDataStore").get(d);e._delayTimer&&window.clearTimeout(e._delayTimer);e._delayTimer=window.setTimeout(function(){e.scrollArea===void 0&&(e.scrollArea=b("MScrollAreaHelper").findScrollArea(d,14)),e.scrollArea&&(e.scrollArea.scrollByPages(1),b("Stratcom").invoke("MSwipeInfiniteScroller:autoScrollStart",null,c))},1e3);e._touchstartListener&&e._touchstartListener.remove();e._touchstartListener=b("Stratcom").listen("touchstart",null,function(a){window.clearTimeout(e._delayTimer),delete e._delayTimer,e._touchstartListener.remove(),delete e._touchstartListener});if(c.getNode("m-swipe-pymk-item")){a=b("MParent").bySigil(d,"undoable-action");if(!a)return;a=b("DOM").scry(a,"*","pymk-remove-button")[0];a&&b("CSS").hide(a)}}function c(a){a=a.getData().event;if(!a.getNode("m-swipe-pymk-item"))return;a=a.getTarget();a=b("MParent").bySigil(a,"undoable-action");if(!a)return;a=b("DOM").scry(a,"*","pymk-remove-button")[0];a&&b("CSS").show(a)}function d(a){a=a.getData();var b=a.scrollarea;m(b,a.container)}var l=function(a){__p&&__p();a=JSON.parse(b("DataAttributeUtils").getDataFt(a));if(!a)return;var c=a.ego_id,d=a.qid;a=a.mf_story_key;var e=(d+a).toString();if(!c||k[e]&&k[e][c])return;var f=b("XFeedEgoImpressionLoggingController").getURIBuilder().getURI();new(b("MRequest"))(f).setMethod("POST").setData({ego_id:c,qid:d,mf_story_key:a}).send();k[e]||(k[e]={});k[e][c]=!0};function m(a,c){var d=a.getScrollPageIndex()+1,e=a.getScrollPageCount();d+j>=e&&b("MSwipeInfiniteScrollerLoadMore").maybeLoadMore(c);d=a.getChildrenOnCurrentPage();for(var e=0;e<d.length;e++)l(d[e])}function e(a){a=a.getNode("m-swipe-pymi-item");if(!a)return;var c=b("MScrollAreaHelper").findScrollArea(a);if(!c)return;window.setTimeout(function(){c.scrollByPages(1)},500)}function g(a){__p&&__p();var c=a.getNode("m-swipe-pymk-item"),d="PYMK";c||(c=a.getNode("m-swipe-pysf-item"),d="PYSF");c||(c=a.getNode("m-swipe-pymi-item"),d="PYMI");if(!c)return;var e=b("MScrollAreaHelper").findScrollArea(c);if(!e)return;a=JSON.parse(b("DataAttributeUtils").getDataFt(c));if(a&&a.ego_id){var f=b("XEgoHideLoggingController").getURIBuilder().setInt("ego_id",a.ego_id).setInt("qid",a.qid).setInt("mf_story_key",a.mf_story_key).setString("service_id",d).getURI();new(b("MRequest"))(f).send();if(d=="PYMI"){f=b("XEgoPYMIActionsLoggingController").getURIBuilder().setString("action","xout").setInt("ego_id",a.ego_id).setString("how_found","mtouch_feed").getURI();new(b("MRequest"))(f).send()}}b("CSS").addClass(c,"_3m57");if(!e._canUseHscroll&&!e._isHorizontal){b("DOM").remove(c);b("Stratcom").invoke("m:kaios:spatialnav:refresh",null,i.HIGHLIGHT_CLOSEST);return}window.setTimeout(function(){b("DOM").remove(c),b("MSwipeInfiniteScrollerLoadMore").reflow(e._element.id),m(e,e._content)},500);d=e.getScrollPageIndex()+1;a=e.getChildAtPageIndex(d);l(a)}(h=b("Stratcom")).listen("MScrollArea:scrollend","infiniteScroller",d);h.listen("click","invite-contact-button",e);h.listen(b("MFriendingState").REQUEST_SENT,null,a);h.listen(b("MFriendingState").REQUEST_CANCELED,null,c);h.listen("click","m-swipe-xout",g);f.logImpressionForElement=l}),null);
__d("MSwipeFirstUnitImpression",["MLegacyDataStore","MSwipeInfiniteScroller","MViewport","Stratcom","Vector"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c){if(c){a=b("MLegacyDataStore").get(c);if(a&&a.scrollArea)g(a.scrollArea);else var d=b("Stratcom").listen("MScrollArea:create",null,function(a){a.getData().element.getAttribute("id")===c.id&&(g(a.getData().scrollarea),d&&d.remove())})}}var g=function(a){var c=a.getElement();if(h(c))i(a);else var d=b("Stratcom").listen("scroll",null,function(){h(c)&&(i(a),d&&d.remove())})},h=function(a){var c=b("MViewport").getHeight()+b("MViewport").getScrollTop(),d=a.clientHeight;a=b("Vector").getElementPosition(a).y;a=a+d;return a&&c>=a},i=function(a){var c=a.getChildAtPageIndex(0);c=Math.min(Math.floor(a.getElement().offsetWidth/c.offsetWidth),a.getNumChildren());for(var d=0;d<c;d++)b("MSwipeInfiniteScroller").logImpressionForElement(a.getChildAtPageIndex(d))};e.exports={setup:a}}),null);
__d("MLayerHideOnScroll",["Stratcom"],(function(a,b,c,d,e,f){__p&&__p();var g=5;a=function(){"use strict";__p&&__p();function a(a){this.$1=null,this.$2=null,this.$3=a,this.$4=null}var c=a.prototype;c.enable=function(){this.$1=[this.$3.addListener("show",this.$5.bind(this)),this.$3.addListener("hide",this.$6.bind(this))],this.$3.isShown()&&this.$5()};c.disable=function(){this.$6();while(this.$1.length)this.$1.pop().remove();this.$1=null};c.$6=function(){this.$2&&this.$2.remove()};c.$5=function(){var a=this,c=window;this.$4=c.scrollY;this.$2=b("Stratcom").listen("scroll",null,function(){var b=c.scrollY;Math.abs(a.$4-b)>=g&&a.$3.hide()})};return a}();e.exports=a}),null);