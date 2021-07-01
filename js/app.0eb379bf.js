(function(t){function e(e){for(var s,r,a=e[0],c=e[1],l=e[2],d=0,p=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},o={app:0},i=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2395:function(t,e,n){},"537c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Shopping")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shopping-container"},[n("ul",{staticClass:"goods-list"},t._l(t.data,(function(e,s){return n("li",{key:s,ref:"goods",refInFor:!0,staticClass:"goods"},[n("div",{staticClass:"good-img"},[n("img",{attrs:{src:e.list[0].img,alt:""}})]),n("div",{staticClass:"title"},[n("h4",[t._v(t._s(e.name))]),n("div",{staticClass:"color"},t._l(e.list,(function(o,i){return n("span",{key:o.id,class:{selected:o.selected},on:{click:function(n){return t.changeColor(e,o,s,i)}}},[t._v(t._s(o.color))])})),0)]),n("div",{staticClass:"price"},[t._v(t._s(e.list[0].price))]),n("div",{staticClass:"count"},[n("span",{on:{click:function(t){1!==e.count&&e.count--}}},[t._v("-")]),n("span",{staticClass:"number"},[t._v(t._s(e.count))]),n("span",{on:{click:function(t){e.count++}}},[t._v("+")])]),n("button",{on:{click:function(n){return t.addShopping(e,s)}}},[t._v("加入购物车")])])})),0),n("div",{staticClass:"cut"},[n("span",[t._v("已选中商品:")]),n("span",[t._v("应付总额："+t._s(t.shopData?t.shopData.reduce((function(t,e){return t+e.total}),0):0))])]),n("ul",{staticClass:"shopping-list"},t._l(t.shopData,(function(e,s){return n("li",{key:e.img,staticClass:"shopping"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:e.img,alt:""}})]),n("div",{staticClass:"name"},[t._v(t._s(e.name))]),n("div",{staticClass:"color"},[t._v(t._s(e.color))]),n("div",{staticClass:"count"},[t._v(t._s(e.count))]),n("div",{staticClass:"total"},[t._v(t._s(e.total))]),n("button",{on:{click:function(e){return t.handleDelete(s)}}},[t._v("删除")])])})),0)])},a=[],c=n("5530");n("d81d"),n("b0c0"),n("a434"),n("4e82");function l(t,e){var n=null;n=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHttp"),n.open("get",t,!1),n.onreadystatechange=function(){if(4==n.readyState&&200==n.status){var t=JSON.parse(n.responseText);e&&e(t)}},n.send()}var u=l,d={data:function(){return{data:[],shopData:JSON.parse(localStorage.getItem("shopcart"))||[]}},created:function(){this.getGoodsList(),window.addEventListener("storage",this.handleStorage)},beforeDestroy:function(){window.removeEventListener("storage",this.handleStorage)},methods:{changeColor:function(t,e,n,s){e.selected?(this.$refs.goods[n].children[0].children[0].src=t.list[0].img,this.$refs.goods[n].children[2].innerText=t.list[0].price,e.selected=!e.selected):(this.resetData(n,s),this.$refs.goods[n].children[0].children[0].src=e.img,this.$refs.goods[n].children[2].innerText=e.price)},getGoodsList:function(){var t=this;u("shoppingData.json",(function(e){t.data=e.map((function(t){return{name:t.name,count:1,list:t.list.map((function(t){return Object(c["a"])(Object(c["a"])({},t),{},{selected:!1})}))}}))}))},resetData:function(t,e){var n=this.data[t]={name:this.data[t].name,count:this.data[t].count,list:this.data[t].list.map((function(t,n){return Object(c["a"])(Object(c["a"])({},t),{},{selected:e===n})}))};this.data.splice(t,1,n)},addShopping:function(t,e){if(this.$refs.goods[e].children[1].children[1].querySelector("span.selected")){var n={img:this.$refs.goods[e].children[0].children[0].src,name:t.name,color:this.$refs.goods[e].children[1].children[1].querySelector("span.selected").innerText,count:t.count,time:(new Date).getTime(),total:t.count*this.$refs.goods[e].children[2].innerText};this.shopData.push(n),localStorage.setItem("shopcart",JSON.stringify(this.shopData.sort((function(t,e){return e.time-t.time})))),this.getGoodsList()}else alert("请选择颜色")},handleDelete:function(t){this.shopData.splice(t,1),localStorage.setItem("shopcart",JSON.stringify(this.shopData))},handleStorage:function(){this.shopData=JSON.parse(localStorage.getItem("shopcart"))}}},p=d,h=(n("d785"),n("2877")),f=Object(h["a"])(p,r,a,!1,null,"55132a43",null),g=f.exports,v={name:"App",components:{Shopping:g}},m=v,_=(n("7c55"),Object(h["a"])(m,o,i,!1,null,null,null)),b=_.exports;new s["a"]({render:function(t){return t(b)}}).$mount("#app")},"7c55":function(t,e,n){"use strict";n("2395")},d785:function(t,e,n){"use strict";n("537c")}});
//# sourceMappingURL=app.0eb379bf.js.map