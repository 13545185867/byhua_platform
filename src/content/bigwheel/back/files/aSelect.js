if(!String.prototype.format){String.prototype.format=function(){var a=arguments;return this.replace(/{(\d+)}/g,function(b,c){return typeof a[c]!="undefined"?a[c]:b})}}var aSelect=function(b){var d=new Array();var a={};var c={data:{},file:null,root:"0",ajax:null,timeout:30,method:"post",field_name:null,auto:false,default_text:"请选择"};if(b){jQuery.extend(c,b)}a=c.data;function h(o,p){var l=$(o).data("selected");l&&(p=l);var n=d.length?d[d.length-1].key+","+d[d.length-1].value:c.root;d.push({element:o,key:n,value:p});var k=0;for(var m in a){k++}for(var j in d){if(d[j].element==o){var q=parseInt(j)}}for(var j in d){if(j<q){d[j].element.change(function(){e(o)})}}if(q>0){d[q-1].element.change(function(){e(o,d[q].key)})}o.change(function(){var i=d[q-1]?d[q].key+","+$(this).val():"0,"+$(this).val();if(typeof d[q+1]!="undefined"){d[q+1].key=i}if(c.field_name){$(c.field_name).val($(this).val())}if(c.auto){if(typeof d[q+1]=="undefined"){g(i,function(s,r){if(r){var t=$("<select></select>");o.after(t);h(t,"");e(d[q+1].element,s,r)}})}}});e(o,n,p)}function e(j,q,p){j.empty();j.append('<option value="">{0}</option>'.format(c.default_text));var r=g(q,function(){e(j,q,p)});if(!r){if(c.auto){j.hide()}return false}j.show();var l=1;var m=0;for(var o in r){var n=r[o];var i="";if(o==p){m=l;i='selected="selected"'}var k=$('<option value="'+o+'" '+i+">"+n+"</option>");j.append(k);l++}if(j[0]){setTimeout(function(){j[0].options[m].selected=true},0);j[0].selectedIndex=0;j.attr("selectedIndex",m)}}function g(l,m){if(typeof l=="undefined"){return null}else{if(l[l.length-1]==","){return null}else{if(typeof(a[l])=="undefined"){var j=0;for(var k in a){j++;break}if(c.ajax){$.getJSON(c.ajax,{key:l},function(i){a[l]=i;m(l,i)})}else{if(c.file&&j==0){$.getJSON(c.file,function(i){a=i;m(l,i)})}}}}}return a[l]}function f(i){if(typeof i=="string"){return $(i)}else{return i}}return{bind:function(i,j){if(typeof i!="object"){i=f(i)}j=j?j:"";h(i,j)}}};