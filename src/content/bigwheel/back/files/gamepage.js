if(typeof HdGame=="undefined"){HdGame={}}HdGame.encodeHtml=function(b){return b&&b.replace?(b.replace(/&/g,"&amp;").replace(/ /g,"&nbsp;").replace(/\b&nbsp;+/g," ").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\\/g,"&#92;").replace(/\'/g,"&#39;").replace(/\"/g,"&quot;").replace(/\n/g,"<br/>").replace(/\r/g,"")):b};HdGame.encodeUrl=function(b){return typeof b==="undefined"?"":encodeURIComponent(b)};HdGame.decodeHtml=function(b){return b&&b.replace?(b.replace(/&nbsp;/gi," ").replace(/&lt;/gi,"<").replace(/&gt;/g,">").replace(/&#92;/gi,"\\").replace(/&#39;/gi,"'").replace(/&quot;/gi,'"').replace(/\<br\/\>/gi,"\n").replace(/&amp;/gi,"&")):b};HdGame.decodeUrl=function(b){return typeof b==="undefined"?"":decodeURIComponent(b)};HdGame.getType=function(b){return Object.prototype.toString.call(b).match(/\[object\s(\w+)]/)[1].toLowerCase()};HdGame.getSrc=function(b){return b.replace("*_resRoot*",_resRoot).replace("*_qiniuResRoot*",_qiniuResRoot)};HdGame.replaceResRoot=function(a){return a.replace(/\*_resRoot\*/g,_resRoot).replace(/\*_qiniuResRoot\*/g,_qiniuResRoot)};HdGame.getLevelName=function(b){b=parseInt(b);switch(b){case 1:return"一等奖";case 2:return"二等奖";case 3:return"三等奖";case 4:return"四等奖";case 5:return"五等奖";case 6:return"六等奖";case 7:return"七等奖";case 8:return"八等奖";case 900:return"安慰奖"}};(function(){HdGame.initModuleLayer=(function(){var a=1;return function(q,o,c,r,m,b){var p=q;(typeof q==="string")&&(p=$(q));if(!(p instanceof jQuery)||p.length<=0){return}if(p.length>1){p.each(function(){HdGame.initModuleLayer($(this),o,c,r,m)});return}var n=p.data("layerId");if(!n){n="layerId-"+a;p.addClass(n);p.data("layerId",n);a++}p.addClass("defBgColor");p.data("mouseover",function(g){clearTimeout(p.data("initModuleTimer"));if(window.ResizeDoc||$("#"+n+"moduleLayer").length>0){return}if(!p.is("#actName")){HdGame.removeAllEditLayer()}HdGame.addMoveFrame(n);if(o!==-2){HdGame.addModuleLayer(n,o,c,r,m)}HdGame.addModuleLayer(n,o,c,r,m,b);if(g){g.stopPropagation()}});p.off("mouseover").off("mouseleave").on("mouseover",p.data("mouseover")).on("mouseleave",function(g){$(this).data("initModuleTimer",setTimeout(function(){if(!window.ResizeDoc){HdGame.removeMoveFrame(n);$("#"+n+"moduleLayer").remove()}},100))})}})();HdGame.addMoveFrame=function(k){var b=$("."+k);var m=true;var l=true;var n=true;var c=true;var a=$("#"+k+"moveFrameLeft");if(a.length<1){a=$("<div id='"+k+"moveFrameLeft' class='moveFrame'></div>");a.appendTo("body");a.css("background","#79cef9");a.css("border-left-width","1px");a.css({opacity:m?1:0})}var a=$("#"+k+"moveFrameRight");if(a.length<1){a=$("<div id='"+k+"moveFrameRight' class='moveFrame'></div>");a.appendTo("body");a.css("background","#79cef9 ");a.css("border-right-width","1px");a.css({opacity:l?1:0})}var a=$("#"+k+"moveFrameTop");if(a.length<1){a=$("<div id='"+k+"moveFrameTop' class='moveFrame'></div>");a.appendTo("body");a.css("background","#79cef9 ");a.css("border-top-width","1px");a.css({opacity:n?1:0})}var a=$("#"+k+"moveFrameBottom");if(a.length<1){a=$("<div id='"+k+"moveFrameBottom' class='moveFrame'></div>");a.appendTo("body");a.css("background","#79cef9 ");a.css("border-bottom-width","1px");a.css({opacity:c?1:0})}d(b);if($(parent.document).find("#imgSizeShow").length<=0){}b=null;a=null};function d(h,p){var a=h.data("layerId");var n=h.offset().left;var l=h.offset().top;var o=h.outerWidth();var c=h.outerHeight();$("#"+a+"moveFrameLeft").css({left:n,top:l,width:0,height:c,borderLeftWidth:1});$("#"+a+"moveFrameRight").css({left:n+o-1,top:l,width:0,height:c,borderRightWidth:1});$("#"+a+"moveFrameTop").css({left:n,top:l,width:o,height:0,borderTopWidth:1});$("#"+a+"moveFrameBottom").css({left:n,top:l+c-1,width:o,height:0,borderBottomWidth:1});if(!p){return}var b=h.parent().find(".recoverBtn");if(o<2*b.width()){b.css("right",-24);h.parent().find(".ui-resizable-imgTopRightTip").css({backgroundPositionX:0,backgroundPositionY:11,right:-11,top:-11});h.parent().find(".ui-resizable-imgTopLeftTip").css({backgroundPositionX:11,backgroundPositionY:11,left:-11,top:-11});h.parent().find(".ui-resizable-imgBottomLeftTip").css({backgroundPositionX:11,backgroundPositionY:0,left:-11,bottom:-11});h.parent().find(".ui-resizable-imgBottomRightTip").css({backgroundPositionX:0,backgroundPositionY:0,right:-11,bottom:-11})}else{b.css("right",3);h.parent().find(".ui-resizable-imgTopRightTip").css({backgroundPositionX:11,backgroundPositionY:0,right:0,top:0});h.parent().find(".ui-resizable-imgTopLeftTip").css({backgroundPositionX:0,backgroundPositionY:0,left:0,top:0});h.parent().find(".ui-resizable-imgBottomLeftTip").css({backgroundPositionX:0,backgroundPositionY:11,left:0,bottom:0});h.parent().find(".ui-resizable-imgBottomRightTip").css({backgroundPositionX:11,backgroundPositionY:11,right:0,bottom:0})}if(c<2*b.height()){b.css("right",-24)}else{b.css("right",3)}}HdGame.addModuleLayer=function(u,s,o,r,b,a){if(s===-2&&!b){return}var c=[];var q=u+"moduleLayer";var p=$("."+u);var t=typeof b==="string"?b:"样式";c.push("<div id='"+q+"' class='moduleLayer' _mouseIn='0'>");c.push("<div class='item'>");if(b){c.push("<a class='item tool css' hidefocus='true' style='display:none;' href='javascript:;'>"+t+"</a>")}if(s!==-2){c.push("<a class='item tool edit' hidefocus='true' href='javascript:;' >编辑</a>")}if(b){c.push("<a class='item tool remove' hidefocus='true' href='javascript:;' >删除</a>")}c.push("</div>");c.push("</div>");var v=$(c.join(""));c=null;$("#"+q).remove();v.appendTo("body");v.css("margin",0);$("#"+q+" .item .css").click(function(){parent.showCssByGame.call(p,o,a);return false});$("#"+q+" .item .remove").click(function(){parent.removeItemByGame.call(p,o,a);return false});$("#"+q+" .item .edit").click(function(){var g=parent.showEditByGame;if(!g){g=showEditByGame}g.call(p,s,o,r);HdGame.logDog(1000078,3);if(o=="awardSetting"){HdGame.removeMoveFrame(u);$("#"+q).remove()}return false});f(p,v);v.mouseover(function(){clearTimeout(p.data("initModuleTimer"))}).mouseleave(function(g){p.data("initModuleTimer",setTimeout(function(){HdGame.removeMoveFrame(u);$("#"+q).remove();p.siblings(".ui-resizable-handle,.recoverBtn").hide()},100))});return v};function f(b,a){if(!a){a=$(".moduleLayer")}if(a.length<1){return}var j=b.outerWidth();var i=b.offset().left+j-a.outerWidth()-1;if(b.offset().left<$(window).width()&&b.offset().left+j>$(window).width()){i=$(window).width()-a.outerWidth()-1}a.css("left",i);var c=(b.offset().top-a.height()-1);a.css("top",c>0?c:0+"px")}HdGame.removeMoveFrame=function(a){$("#"+a+"moveFrameLeft").remove();$("#"+a+"moveFrameRight").remove();$("#"+a+"moveFrameTop").remove();$("#"+a+"moveFrameBottom").remove();$(parent.document).find("#imgSizeShow").remove()};HdGame.Img={};HdGame.Img={MODE_SCALE_FILL:1,MODE_SCALE_WIDTH:2,MODE_SCALE_HEIGHT:3,MODE_SCALE_DEFLATE_WIDTH:4,MODE_SCALE_DEFLATE_HEIGHT:5,MODE_SCALE_DEFLATE_FILL:6,MODE_SCALE_DEFLATE_MAX:7};HdGame.Img.optimize=function(c,a){var k=new Image();k.src=c.src;var j=k.width;var l=k.height;if(HdGame.isNull(j)||j==0||HdGame.isNull(l)||l==0){j=c.width;l=c.height}var b=HdGame.Img.calcSize(j,l,a.width,a.height,a.mode);c.width=b.width;c.height=b.height;if(a.display==1){c.style.display="inline"}else{if(a.display==2){c.style.display="none"}else{c.style.display="block"}}return{width:c.width,height:c.height}};HdGame.Img.calcSize=function(l,p,b,c,a){var n={width:l,height:p};if(a==HdGame.Img.MODE_SCALE_FILL){var m=l/b;var o=p/c;if(m>o){n.width=b;n.height=p/m}else{n.width=l/o;n.height=c}}else{if(a==HdGame.Img.MODE_SCALE_WIDTH){var m=l/b;n.width=b;n.height=p/m}else{if(a==HdGame.Img.MODE_SCALE_HEIGHT){var o=p/c;n.width=l/o;n.height=c}else{if(a==HdGame.Img.MODE_SCALE_DEFLATE_WIDTH){var m=l/b;if(m>1){n.width=b;n.height=p/m}}else{if(a==HdGame.Img.MODE_SCALE_DEFLATE_HEIGHT){var o=p/c;if(o>1){n.width=l/o;n.height=c}}else{if(a==HdGame.Img.MODE_SCALE_DEFLATE_FILL){var m=l/b;var o=p/c;if(m>o){if(m>1){n.width=b;n.height=p/m}}else{if(o>1){n.width=l/o;n.height=c}}}else{if(a==HdGame.Img.MODE_SCALE_DEFLATE_MAX){if(l>b&&p>c){var m=l/b;var o=p/c;if(m<o){n.width=b;n.height=p/m}else{n.width=l/o;n.height=c}}}}}}}}}n.width=Math.floor(n.width);n.height=Math.floor(n.height);if(n.width==0){n.width=1}if(n.height==0){n.height=1}return n};function e(a,j,b,i){var c="hd-"+b+"-"+i;a.each(function(){var g=$(this).data(c);if(i==="option"){if(g){$.extend(g,j)}else{$(this).data(c,j)}}else{if(!g){g=$.Callbacks("unique memory");$(this).data(c,g)}g.add(j)}})}$.fn.extend({setResizableOption:function(a){e($(this),a,"resizable","option");return $(this)},setDraggableOption:function(a){e($(this),a,"draggable","option");return $(this)},addResizableFn:function(a,b){e($(this),b,"resizable",a);return $(this)},addDraggableFn:function(a,b){e($(this),b,"draggable",a);return $(this)},addEditUploadFn:function(b,c){var h="hdgame-editUpload-"+b,a=$(this).data(h);!a&&(a=$.Callbacks("unique memory"),$(this).data(h,a));a.add(c);return $(this)},awardSlide:function(b){if(typeof b==="object"){var a={margin_bottom:"0",margin_left:"0",margin_right:"0",speed:"10"};var b=$.extend(a,b);this.each(function(){$(this).show();var n=$(this),m=n.children("ul");var l=m.find("li");m.append("<li class='clone'></li>");m.find("li").eq(0).children().clone().appendTo(".clone");m.find("li").eq(0).css("margin-left","320px");var k=0;m.css("width","10000%");l.find("div").css({"margin-left":b.margin_left,"margin-right":b.margin_right});$(this).data("awardSlide-marquee",setInterval(c,b.speed));function c(){n.scrollLeft(++k);if(k==l.outerWidth(true)){k=320}}})}else{if(b==="stop"){this.each(function(){$(this).hide();$(this).children("ul").find(".clone").remove();clearInterval($(this).data("awardSlide-marquee"))})}}return $(this)},});HdGame.moduleSlaveImgResize=function(b,a){if(b.length<=0){return}var i=8;var j=a||"body";if(b.parents(".home").length>0){j="#limitRange"}var c=$(parent.document).find("#gamePreviewPage").offset();$.each(b,function(h,g){$(g).parent("div.ui-wrapper").css({padding:"0"});$(g).resizable("destroy");var o=$(g).parents(".imgContainer");var n=o.find(".slaveImg");$(g).resizable($.extend({handles:"n,e,s,w,ne,nw,sw,se",autoHide:true,maxWidth:318,maxHeight:504,minWidth:20,minHeight:20,aspectRatio:true,alsoResize:$(g),create:function(k,r){var l=$(this);var s=0;l.css({position:"relative","float":"none","z-index":"100"});if(l.width()<40||l.height()<40){l.css("padding","2px")}else{l.css("padding","0")}l.append("<a class='recoverBtn' href='javascript:;'></a>");l.find(".recoverBtn").on("click",function(){setTimeout(function(){f(n);d(n,true)},10)});l.attr("_from",n.attr("id"));(function(){var E=(parseInt(n.width())-i)/2;var q=(parseInt(n.height())-i)/2;var G="<div class='imgResizeLine imgResizeLine-first'></div><div class='imgResizeLine imgResizeLine-second'></div>";var D=l.children(".ui-resizable-sw");var H=l.children(".ui-resizable-se");var I=l.children(".ui-resizable-nw");var K=l.children(".ui-resizable-ne");var F=l.children(".ui-resizable-s");var J=l.children(".ui-resizable-w");var C=l.children(".ui-resizable-n");var p=l.children(".ui-resizable-e");D.addClass("ui-resizable-imgBottomLeftTip").css({"z-index":"9030"});H.addClass("ui-resizable-imgBottomRightTip").css({"z-index":"9030"});I.addClass("ui-resizable-imgTopLeftTip").css({"z-index":"9030"});K.addClass("ui-resizable-imgTopRightTip").css({"z-index":"9030"});J.addClass("ui-resizable-imgLeftTip").css({"z-index":"9030"});p.addClass("ui-resizable-imgRightTip").css({"z-index":"9030"});F.addClass("ui-resizable-imgBottomTip").css({"z-index":"9030"}).append(G);C.addClass("ui-resizable-imgTopTip").css({"z-index":"9030"}).append(G);F.children(".imgResizeLine").css({width:E+"px"});C.children(".imgResizeLine").css({width:E+"px"});p.children(".imgResizeLine").css({height:q+"px"});J.children(".imgResizeLine").css({height:q+"px"})})();var m=l.parent();l.children(".ui-resizable-handle").mousedown(function(p){var q=m.attr("href");if(typeof q!="undefined"&&q.length>0){m.removeAttr("href");m.attr("onclick","return false;")}});if(n.data("layerId")){n.off("mouseover").off("mouseleave")}l.mouseover(function(){clearTimeout(n.data("initModuleTimer"));if(window.ResizeDoc){return}l.children(".ui-resizable-handle").show();if(n.attr("resize")==1){o.find(".recoverBtn").show()}if(n.data("layerId")){n.data("mouseover").call(n)}n.removeData("resizable-isLeave")}).mouseleave(function(){n.data("initModuleTimer",setTimeout(function(){if(!window.ResizeDoc){var p=n.data("layerId");HdGame.removeMoveFrame(p);$("#"+p+"moduleLayer").remove();l.children(".ui-resizable-handle").hide();o.find(".recoverBtn").hide()}else{n.data("resizable-isLeave",true)}},100))});n.data("hd-resizable-create")&&n.data("hd-resizable-create").fireWith(n[0],[k,r])},start:function(t,l){$(this).resizable("option","aspectRatio",false);HdGame.addMoveFrame(n.data("layerId"));window.ResizeDoc=o;var m=0;var v=n.width();var w=n.height();var k=(parseInt(v)-i)/2;var u=(parseInt(w)-i)/2;$(this).children(".ui-resizable-s").children(".imgResizeLine").css({width:k+"px"});$(this).children(".ui-resizable-n").children(".imgResizeLine").css({width:k+"px"});$(this).children(".ui-resizable-e").children(".imgResizeLine").css({height:u+"px"});$(this).children(".ui-resizable-w").children(".imgResizeLine").css({height:u+"px"});$(this).css("position","relative");$(".ui-resizable-bottomTip").css({opacity:"0"});$(".ui-resizable-cancelTip").css({opacity:"0"});$(".draggableBtn").css({opacity:"0"});n.data("hd-resizable-start")&&n.data("hd-resizable-start").fireWith(n[0],[t,l])},resize:function(m,l){n.data("hd-resizable-resize")&&n.data("hd-resizable-resize").fireWith(n[0],[m,l]);l.originalElement.parent().find(".recoverBtn").hide();d(n,true);$("#"+n.data("layerId")+"moduleLayer").remove();var k=$(parent.document).find("#imgSizeShow");k.show();k.css("top",m.pageY+15);k.css("left",m.pageX-30);k.find("span").eq(0).text(Math.round(n.width())*2);k.find("span").eq(1).text(Math.round(n.height())*2)},stop:function(w,k){var v=0;delete window.ResizeDoc;if(n.data("resizable-isLeave")){$(this).mouseleave();n.removeData("resizable-isLeave")}else{n.mouseover()}$(parent.document).find("#imgSizeShow").remove();var A=n.width();var z=n.height();var l=(parseInt(A)-i)/2;var y=(parseInt(z)-i)/2;$(this).children(".ui-resizable-s").children(".imgResizeLine").css({width:l+"px"});$(this).children(".ui-resizable-n").children(".imgResizeLine").css({width:l+"px"});$(this).children(".ui-resizable-e").children(".imgResizeLine").css({height:y+"px"});$(this).children(".ui-resizable-w").children(".imgResizeLine").css({height:y+"px"});$(".ui-resizable-bottomTip").css({opacity:"1"});$(".ui-resizable-cancelTip").css({opacity:"1"});$(".draggableBtn").css({opacity:"1"});o.find(".slaveImg").attr("resize","1");o.find(".recoverBtn").show();if($(this).width()<40||$(this).height()<40){$(this).css("padding","2px")}else{$(this).css("padding","0")}var m=$(this).parent();var x=m.attr("link");if(typeof x!="undefined"&&x.length>0){setTimeout(function(){m.attr("href",x);m.removeAttr("onclick")},100)}HdGame.logDog(1000078,0);n.data("hd-resizable-stop")&&n.data("hd-resizable-stop").fireWith(n[0],[w,k])}},n.data("hd-resizable-option")));$(g).off(".slaveImg")})};HdGame.moduleDraggale=function(l,c,a){var b=l;(typeof l==="string")&&(b=$(l));if(!(b instanceof jQuery)||b.length<=0){return}if(b.length>1){b.each(function(){HdGame.moduleDraggale($(this),c,a)});return}var m=b.parent();var n=b;var o=a||"body";if(c){n=m}n.css("cursor","move");n.css("position","absolute");if(n.parents(".home").length>0){o="#limitRange"}var p=m.css("z-index");n.draggable($.extend({start:function(){b.mouseover();m.children(".ui-resizable-handle").hide();p=m.css("z-index");m.css("z-index","9999");b.data("hd-draggable-start")&&$img.data("hd-draggable-start").fireWith($img[0],[event,ui])},drag:function(h,g){d(b);$("#"+b.data("layerId")+"moduleLayer").remove();b.parent().find(".recoverBtn").hide();b.data("hd-draggable-drag")&&$img.data("hd-draggable-drag").fireWith($img[0],[h,g])},stop:function(){b.mouseover();m.css("z-index",p);HdGame.logDog(1000078,1);b.data("hd-draggable-stop")&&$img.data("hd-draggable-stop").fireWith($img[0],[event,ui])},opacity:0.5,scroll:false,distance:1,containment:o,addClasses:false},b.data("hd-draggable-option")))};HdGame.removeAllEditLayer=function(){$(".moveFrame").remove();$(".moduleLayer").remove()}})();HdGame.initEdit=function(B){var s=B.origin,w=B.originDef,p=B.originMod,D={};if(p){$.each(p,function(c,b){var a=s[c];if(b.css){$.each(b.css,function(e,d){if(d.css){$.each(d.css,function(f,g){if(typeof cssMod.opt!=="undefined"){cssMod.opt=0}if(cssMod.tra!=="undefined"){cssMod.defTra=cssMod.tra}cssMod.defVal=cssMod.val})}else{if(typeof d.opt!=="undefined"){d.opt=0}if(d.tra!=="undefined"){d.defTra=d.tra}d.defVal=d.val}});if(g_config.isNewGame){$.extend(true,a.css,b.css)}}});$.extend(true,w,p)}function q(a,e){var d="getImgInfo-"+a;if(e){d="getImgInfo-rem-"+a}var h=D[d];if(h){return h}var i=y(a)[0];if(!i){return}h={name:a,css:i.css};if(i.path){if(HdGame.getType(i.path[0])==="array"){h.path=[];for(var b=0;b<i.path.length;b++){h.path[b]=HdGame.getSrc(i.path[b][0])}}else{h.path=HdGame.getSrc(i.path[0])}}var g=e?parseFloat:parseRemToPx;var c={size:["width","height"],pos:["left","top"]};for(var d in c){var f=c[d];var j=i[d];if(!j){continue}if(HdGame.getType(j)==="array"){h[f[0]]=[],h[f[1]]=[];$.each(j,function(l,k){h[f[0]].push(g(k[f[0]]));h[f[1]].push(g(k[f[1]]))})}else{h[f[0]]=g(j[f[0]]);h[f[1]]=g(j[f[1]])}}D[d]=h;return h}function y(b){for(var a=0;a<s.length;a++){var c=s[a];if(c.name===b){return[c,w[a]]}}return[false,false]}function z(a,b){var c={};c.from=a;c.title=b[1];c.limit=b[2];c.size=b[3];c.defSrc=HdGame.getSrc(b[0]);if(b[4]){c.extend=b[4]}else{c.extend={}}return c}function r(b,a){b.each(function(){if(/img/i.test($(this)[0].nodeName)){$(this).attr("src",a)}else{$(this).css("background-image",'url("'+a+'")')}})}function t(a,b){HdGame.getType(b)==="undefined"&&(b=0);return HdGame.getType(a)==="array"?(a[b]||a[0]):a}function u(b){var R=typeof b==="object"?b:y(b),j=R[0],m=R[1],b=j.name,f=$(".editTarget-"+b),h=j.pos,P=j.size,M=j.path,N=m.size,l=m.pos;f=f.not(function(){return $(this).data("hasBindEdit")});var L=(HdGame.getType(l)==="array"&&HdGame.getType(N)!=="array");f.each(function(F){var H=t(h,F),I=t(P,F),J=t(N,F),G=t(l,F);if(H&&H.top&&H.left){$(this).css({top:H.top,left:H.left}).addClass("abs")}if(I){$(this).addClass("slaveImg");if(!$(this).parent().hasClass("imgContainer")){$(this).wrap('<div class="imgContainer absCenter"></div>')}if(I.width&&I.height){$(this).css({width:I.width,height:I.height})}if(!J.disable){if(L){var E=null;$(this).addResizableFn("start",function(T,K){E=f.not(this);if(/n|w/.test(K.axis)){E.each(function(Y,S){var Z=$(this),X=Z.parents(".ui-wrapper");Z.data("originalPosition-relative",{left:parseFloat(X.css("left"))-K.originalPosition.left,top:parseFloat(X.css("top"))-K.originalPosition.top,})})}});$(this).addResizableFn("resize",function(W,K){var X=/n|w/.test(K.axis),V;E.each(function(S,U){var T=$(this),Z=T.parents(".ui-wrapper");T.add(Z).css({width:K.size.width,height:K.size.height});if(X){V=T.data("originalPosition-relative");T.add(Z).css({left:K.position.left+V.left,top:K.position.top+V.top})}})});$(this).addResizableFn("stop",function(T,K){E.each(function(V,S){$(this).removeData("originalPosition-relative").attr("resize","1")});E=null})}}}if(H){if(!G.disable){HdGame.moduleDraggale($(this),G.forParent=="false"?false:true)}}if(J){$(this).siblings(".recoverBtn").on("click",function(){var K=$(this).parents(".ui-wrapper");var V=K.find(".slaveImg");var W=K.add(V);K.find(".recoverBtn").hide();V.attr("resize",0);K.attr("resize")&&K.attr("resize",0);W.css({width:J.width,height:J.height});if(G&&G.disable){W.css({left:G.left,top:G.top})}V.css("margin","auto");var X=V.data("recoverCallBack");X&&X.call(V);HdGame.logDog(1000078,4);if(L){f.each(function(T,S){if(S===V[0]){return}var U=$(S).add($(S).parents(".ui-wrapper"));U.width(K.width()).height(K.height());var Z=t(l,T);if(Z&&Z.disable){U.css({left:Z.left,top:Z.top})}U.attr("resize",0)})}})}});if(M){var n=".editRelate-"+b;if(HdGame.getType(M[0])==="array"){$.each(M,function(H,F){var G=HdGame.getSrc(F[0]);var E="editTarget-"+b+"-"+H;if(H===0){E="editTarget-"+b}else{n=".editRelate-"+b+"-"+H}if($("."+E).length>0){r($("."+E),G)}else{$("body").append('<input class="'+E+'" type="hidden" value="'+G+'">')}if($(n).length>0){r($(n),G)}})}else{r(f.add(n),HdGame.getSrc(M[0]))}}var d=-2,c=null,o=false,e=null;if(m.edit){if(typeof m.edit==="number"){d=m.edit}else{if(m.edit==="_background"){!B.bgList&&(B.bgList=[]);B.bgList.push({from:".editTarget-"+b+",.editRelate-"+b,defSrc:HdGame.getSrc(M[0])});f.data("hasBindEdit",true);return}else{if(m.edit!=="_none"){c=[];if(D[m.edit]){c=D[m.edit]}else{var Q=[];if(m.edit==="all"){Q=B.originDef}else{$.each(m.edit.split(","),function(E,F){Q.push(y(F)[1])})}for(var g=0;g<Q.length;g++){var a=Q[g].path;var k=Q[g].name;var O=".editTarget-"+k+",.editRelate-"+k;if(typeof a!="undefined"){if(HdGame.getType(a[0])==="array"){for(var i=0;i<a.length;i++){i>0&&(O=".editTarget-"+k+"-"+i+",.editRelate-"+k+"-"+i);c.push(z(O,a[i]))}}else{c.push(z(O,a))}}}!D[m.edit]&&(D[m.edit]=c)}d=-1}}}}if(m.css){if(!j.css){j.css=m.css}o=true;e=$.extend(true,[],m.css,j.css);m.crrCssArg=e;$.each(e,function(E,F){if(F.css){$.each(F.css,function(G,H){if(!H.from){H.from=".editTarget-"+b+",.editRelate-"+b}v(f,H,H.opt===0)})}else{if(!F.from){F.from=".editTarget-"+b+",.editRelate-"+b}v(f,F,F.opt===0)}})}if(m.edit||m.css){HdGame.initModuleLayer(f,d,"",c,o,e)}f.data("hasBindEdit",true)}function v(a,d,e){var b=e?d.defVal:d.val;var c=e?d.defTra:d.tra;if(d.type!=="color"){a.css(d.name,b)}else{if(d.name==="text-shadow"){a.css(d.name,A(x(b,c)))}else{a.css(d.name,x(b,c))}}}function A(a){return a+" -1px -1px 0px, "+a+" 0px -1px 0px, "+a+" 1px -1px 0px, "+a+" 1px 0px 0px, "+a+" 1px 1px 0px, "+a+" 0px 1px 0px, "+a+" -1px 1px 0px, "+a+" -1px 0px 0px"}function x(a,b){if(typeof b==="undefined"){return a}return"rgba"+a.substring(a.indexOf("("),a.indexOf(")"))+","+(b?b:0)+")"}function C(){$.each(s,function(a,b){u([b,w[a]])})}if(_manage){B.setAllEdit=C}else{$(function(){$.each(s,function(e,f){var g=$(".editTarget-"+f.name),a=f.pos,d=f.size,c=f.path;if(g.length<=0){return}g.each(function(j){var h=t(a,j),i=t(d,j);if(h&&h.top&&h.left){$(this).css({top:h.top,left:h.left}).addClass("abs")}if(i&&i.width&&i.height){$(this).css({width:i.width,height:i.height})}});if(c){var b=".editRelate-"+f.name;if(HdGame.getType(c[0])==="array"){$.each(c,function(h,j){var k=HdGame.getSrc(j[0]);if(h===0){r(g.add(b),k)}else{var i="editTarget-"+f.name+"-"+h;b=".editRelate-"+f.name+"-"+h;if($("."+i).length>0){r($("."+i),k);$("."+i).each(function(m){var n=t(a,m),l=t(d,m);if(n&&n.top&&n.left){$(this).css({top:n.top,left:n.left}).addClass("abs")}if(l&&l.width&&l.height){$(this).css({width:l.width,height:l.height})}})}else{$("body").append('<input class="'+i+'" type="hidden" value="'+k+'">')}if($(b).length>0){r($(b),k)}}})}else{r(g.add(b),HdGame.getSrc(c[0]))}}if(f.css){$.each(f.css,function(i,h){if(h.css){$.each(h.css,function(j,k){v(g,k,k.opt===0)})}else{v(g,h,h.opt===0)}})}})})}B.getImgInfo=q;B.getRgba=x;delete B.originMod;return B};HdGame.logDog=function(c,d){console.log(c+"--"+d)};