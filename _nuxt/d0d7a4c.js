(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{281:function(e,t,r){e.exports=r.p+"img/wittycreatures-website-header.cb71bd8.svg"},287:function(e,t,r){var content=r(323);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(35).default)("af6a43f0",content,!0,{sourceMap:!1})},318:function(e,t,r){var map={"./bronze-prize.svg":319,"./gold-prize.svg":320,"./silver-prize.svg":321,"./wittycreatures-website-header.svg":281};function d(e){var t=n(e);return r(t)}function n(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}d.keys=function(){return Object.keys(map)},d.resolve=n,e.exports=d,d.id=318},319:function(e,t,r){e.exports=r.p+"img/bronze-prize.3724d49.svg"},320:function(e,t,r){e.exports=r.p+"img/gold-prize.ca5691e.svg"},321:function(e,t,r){e.exports=r.p+"img/silver-prize.936717f.svg"},322:function(e,t,r){"use strict";r(287)},323:function(e,t,r){var d=r(34)(!1);d.push([e.i,'.title[data-v-0f1dd383]{font-size:1.5rem;font-weight:700;font-family:"Avenir Next Variable W05835004",sans-serif}ol[data-v-0f1dd383],p[data-v-0f1dd383],ul[data-v-0f1dd383]{font-family:"Almarai",sans-serif}a[data-v-0f1dd383]{font-size:1rem}.prize[data-v-0f1dd383]{display:flex;width:100%;flex-wrap:wrap;justify-content:flex-start;align-items:center;border:1px solid #ccc;border-radius:4px;padding:20px}.prize .title[data-v-0f1dd383]{font-size:17px;margin-right:24px;flex-grow:1}.prize .prize-icon[data-v-0f1dd383]{margin-right:16px;height:1.3em}.prize .claimed[data-v-0f1dd383]{padding:8px;border-radius:4px;background-color:grey;color:#fff;font-size:15px;font-weight:700;margin-right:10px}.prize .claimed[data-v-0f1dd383]:last-of-type{margin-right:0}.prize .eth-highlight[data-v-0f1dd383]{background-color:#7825ff}.prize .wit-highlight[data-v-0f1dd383]{background-color:#24cf9c}@media screen and (max-width:1200px){.prize .claimed[data-v-0f1dd383],.prize .prize-icon[data-v-0f1dd383],.prize .title[data-v-0f1dd383]{margin-top:16px}.prize .claimed[data-v-0f1dd383]:last-of-type{margin-right:0}}',""]),e.exports=d},338:function(e,t,r){"use strict";r.r(t);var d={props:{title:{type:String,required:!0},ethAddress:{type:String,required:!0},ethClaimed:{type:Boolean,required:!1},witAddress:{type:String,required:!0},witClaimed:{type:Boolean,required:!1},img:{type:String,required:!0}},computed:{url:function(){return r(318)("./".concat(this.img,".svg"))}}},n=(r(322),r(45)),component=Object(n.a)(d,(function(){var e,t,r=this,d=r.$createElement,n=r._self._c||d;return n("div",{staticClass:"prize"},[n("img",{staticClass:"prize-icon",attrs:{src:r.url,alt:"prize"}}),r._v(" "),n("h3",{staticClass:"title"},[r._v("\n    "+r._s(r.title)+"\n  ")]),r._v(" "),n("a",{staticClass:"claimed",class:(e={},e["eth-highlight"]=!1===r.ethClaimed,e),attrs:{href:"https://etherscan.io/address/"+r.ethAddress,target:"_blank"}},[r._v("\n    "+r._s(null==r.ethClaimed?r.$t("prize.checking"):r.ethClaimed?r.$t("prize.eth_claimed"):r.$t("prize.eth_unclaimed"))+"\n  ")]),r._v(" "),n("a",{staticClass:"claimed",class:(t={},t["wit-highlight"]=!1===r.witClaimed,t),attrs:{href:"https://witnet.network/search/"+r.witAddress,target:"_blank"}},[r._v("\n    "+r._s(r.$t("prize.check_manually"))+"\n  ")])])}),[],!1,null,"0f1dd383",null);t.default=component.exports}}]);