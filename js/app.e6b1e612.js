(function(e){function r(r){for(var t,n,c=r[0],a=r[1],d=r[2],m=0,_=[];m<c.length;m++)n=c[m],o[n]&&_.push(o[n][0]),o[n]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);l&&l(r);while(_.length)_.shift()();return s.push.apply(s,d||[]),i()}function i(){for(var e,r=0;r<s.length;r++){for(var i=s[r],t=!0,c=1;c<i.length;c++){var a=i[c];0!==o[a]&&(t=!1)}t&&(s.splice(r--,1),e=n(n.s=i[0]))}return e}var t={},o={app:0},s=[];function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,r,i){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)n.d(i,t,function(r){return e[r]}.bind(null,t));return i},n.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="/reddit-nfl-stats/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=r,c=c.slice();for(var d=0;d<c.length;d++)r(c[d]);var l=a;s.push([0,"chunk-vendors"]),i()})({0:function(e,r,i){e.exports=i("56d7")},"56d7":function(e,r,i){"use strict";i.r(r);i("cadf"),i("551c"),i("097d");var t=i("2b0e"),o=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("div",{attrs:{id:"app"}},[i("h2",[e._v("NFL Subreddit Subscriber Rank")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"search",attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.search},on:{input:function(r){r.target.composing||(e.search=r.target.value)}}}),i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.reversed,expression:"reversed"}],staticClass:"reverse",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.reversed)?e._i(e.reversed,null)>-1:e.reversed},on:{change:function(r){var i=e.reversed,t=r.target,o=!!t.checked;if(Array.isArray(i)){var s=null,n=e._i(i,s);t.checked?n<0&&(e.reversed=i.concat([s])):n>-1&&(e.reversed=i.slice(0,n).concat(i.slice(n+1)))}else e.reversed=o}}}),e._v("\n    Reverse Order\n  ")]),i("div",{staticClass:"card-container"},e._l(e.filteredSubs(),function(e){return i("TeamCard",{key:e.title,attrs:{sub:e}})}),1),e._m(0)])},s=[function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("footer",[i("p",[e._v("Created by "),i("a",{attrs:{href:"https://github.com/ztoben"}},[e._v("ztoben")]),e._v(".")])])}],n=(i("386d"),i("6762"),i("2fdb"),function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("div",{staticClass:"card",style:{backgroundColor:e.determineColor(e.sub),color:e.sub.key_color}},[i("div",{staticClass:"badge"},[i("p",[e._v("#"+e._s(e.sub.position))])]),e.sub.icon_img?i("img",{staticClass:"team-icon",attrs:{src:e.sub.icon_img,alt:"logo",width:"100"}}):e._e(),i("div",{staticClass:"info-container"},[i("a",{attrs:{href:"https://reddit.com"+e.sub.url}},[i("h1",[e._v(e._s(e.sub.display_name_prefixed))])]),i("i",[e._v(e._s(e.sub.title))]),i("h2",[e._v("Sub Count: "+e._s(e.sub.subscribers))])])])}),c=[],a=(i("c5f6"),{name:"TeamCard",props:{sub:{banner_background_color:String,community_icon:String,display_name_prefixed:String,icon_img:String,key_color:String,primary_color:String,subscribers:String,title:String,url:String,position:Number}},methods:{determineColor:function(e){var r=e.banner_background_color,i=e.primary_color,t=e.display_name_prefixed;switch(t){case"r/steelers":return"#101820";case"r/KansasCityChiefs":return"#FFB81C";case"r/49ers":return"#B3995D";case"r/Jaguars":return"#9F792C";case"r/miamidolphins":return"#F26A24";case"r/buccaneers":return"#FF7900";case"r/LosAngelesRams":return"#0C243C";case"r/nyjets":return"#27251F";case"r/bengals":return"#000000";case"r/Browns":return"#311D00";case"r/detroitlions":return"#0076B6";case"r/DenverBroncos":return"#FA5211";default:return r||i}}}}),d=a,l=(i("dbbf"),i("2877")),m=Object(l["a"])(d,n,c,!1,null,"0d26478f",null);m.options.__file="TeamCard.vue";var _=m.exports,u=i("e6e7");function p(e){return e.toLowerCase().trim()}function b(e,r){return p(e).includes(p(r))}var y={name:"app",components:{TeamCard:_},data:function(){return{stats:u,search:"",reversed:!1}},methods:{filteredSubs:function(){var e=this,r=this.stats.filter(function(r){return b(r.display_name_prefixed,e.search)||b(r.title,e.search)});return this.reversed?r.reverse():r}}},f=y,g=(i("5c0b"),Object(l["a"])(f,o,s,!1,null,null,null));g.options.__file="App.vue";var h=g.exports;t["a"].config.productionTip=!1,new t["a"]({render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,r,i){"use strict";var t=i("5e27"),o=i.n(t);o.a},"5e27":function(e,r,i){},7075:function(e,r,i){},dbbf:function(e,r,i){"use strict";var t=i("7075"),o=i.n(t);o.a},e6e7:function(e){e.exports=[{banner_background_color:"",community_icon:"",display_name_prefixed:"r/Patriots",icon_img:"https://b.thumbs.redditmedia.com/BPOhHggR0rbknOwb1L_mL_t7-yb-0YzaZuk9iZbUZPc.png",key_color:"#0079d3",primary_color:"",subscribers:535452,title:"The New England Patriots",url:"/r/Patriots/",position:1},{banner_background_color:"#003594",community_icon:"https://styles.redditmedia.com/t5_2rgnd/styles/communityIcon_1r0gc94x7ho41.jpg?width=256&s=5d3b14cd02d74a71c9641c272f540ed36c4dface",display_name_prefixed:"r/LosAngelesRams",icon_img:"https://b.thumbs.redditmedia.com/TU7-9LArcSJEWCvlKtfQko7v0OYyGCvhw6cH0D1jfoY.png",key_color:"#545452",primary_color:"#003594",subscribers:388413,title:"Los Angeles Rams",url:"/r/LosAngelesRams/",position:2},{banner_background_color:"#004953",community_icon:"https://styles.redditmedia.com/t5_2qi5w/styles/communityIcon_w6pte6ybbuq41.png?width=256&s=376b8eba869e694448c9489f4560cc5c72084526",display_name_prefixed:"r/eagles",icon_img:"https://b.thumbs.redditmedia.com/aw-g8PZGz9iNSMGoiofKtHmiV7k4Ue0_MjY1LniNIak.png",key_color:"#46d160",primary_color:"#bbbdbf",subscribers:198962,title:"Eagles - Watch r/eagles fly!",url:"/r/eagles/",position:3},{banner_background_color:"#2a4339",community_icon:"",display_name_prefixed:"r/GreenBayPackers",icon_img:"https://a.thumbs.redditmedia.com/fMlQyAzFSB0ka6F1JQ7fIvot7-3rdqJ2WZp8x-niEB4.png",key_color:"#ddbd37",primary_color:"#2a433a",subscribers:156313,title:"Green Bay Packers",url:"/r/GreenBayPackers/",position:4},{banner_background_color:"#041e42",community_icon:"https://styles.redditmedia.com/t5_2re7g/styles/communityIcon_67tigeiq69441.png?width=256&s=7508ba81f1278db4f94315140147de1cf01998d0",display_name_prefixed:"r/cowboys",icon_img:"https://b.thumbs.redditmedia.com/yYO6ndCES06BaLNzHfTpxK0p9Er8IQMoN-ua3byLY9k.png",key_color:"#0079d3",primary_color:"#002144",subscribers:132513,title:"Dallas Cowboys",url:"/r/cowboys/",position:5},{banner_background_color:"",community_icon:"https://styles.redditmedia.com/t5_2r526/styles/communityIcon_x85pehnm1pv31.png?width=256&s=518ce424aae6dce88ea524b78352293a1d064e66",display_name_prefixed:"r/steelers",icon_img:"https://b.thumbs.redditmedia.com/5J_VXMLMOnsrhUqdKefTUgRi8Ai-ZdDt3acZPOkZ8Bg.png",key_color:"#ddbd37",primary_color:"#ffb81c",subscribers:115133,title:"The Pittsburgh Steelers",url:"/r/steelers/",position:6},{banner_background_color:"#aa0000",community_icon:"https://styles.redditmedia.com/t5_2rebv/styles/communityIcon_ih7nqmoa4pw41.jpg?width=256&s=dcc402c339f80008b78a0cde7f45e94273b6df41",display_name_prefixed:"r/49ers",icon_img:"",key_color:"#ea0027",primary_color:"#aa0000",subscribers:110362,title:"San Francisco 49ers: For all things red and gold!",url:"/r/49ers/",position:7},{banner_background_color:"",community_icon:"https://styles.redditmedia.com/t5_2qocl/styles/communityIcon_jlle4g253q911.png?width=256&s=641d910400244985f4846b49337f4cd24c6fae26",display_name_prefixed:"r/minnesotavikings",icon_img:"https://b.thumbs.redditmedia.com/Wmdqtg771ieoU05rvTl4bhHTN6gXp_0IO_27uIpn2cQ.png",key_color:"#7e53c1",primary_color:"#4f2683",subscribers:106686,title:"SKOL",url:"/r/minnesotavikings/",position:8},{banner_background_color:"#001533",community_icon:"https://styles.redditmedia.com/t5_2ryle/styles/communityIcon_q3h66swv5k201.png?width=256&s=5eebbc9a98a80c80c660ef64ebd234ea6878ffaf",display_name_prefixed:"r/Seahawks",icon_img:"https://b.thumbs.redditmedia.com/lKScwSPPpqS07jm4d8eWd3Sfl6w-lkfxiKq68G1zh5M.png",key_color:"#94e044",primary_color:"#001533",subscribers:104070,title:"Go Hawks!",url:"/r/Seahawks/",position:9},{banner_background_color:"#03182f",community_icon:"https://styles.redditmedia.com/t5_2s0u3/styles/communityIcon_f2fv3729wmx01.jpg?width=256&s=6803ae6c38f1ec61bab10dd3ff790238cbc9f63e",display_name_prefixed:"r/CHIBears",icon_img:"https://a.thumbs.redditmedia.com/b1qU-HFNiBktrQirW6m6dwx_Qw5EeJsuj2hSQ3Ohkg4.png",key_color:"#ff4500",primary_color:"#cc3600",subscribers:98888,title:"/r/CHIBears ≡GSH≡",url:"/r/CHIBears/",position:10},{banner_background_color:"#000000",community_icon:"https://styles.redditmedia.com/t5_2ql17/styles/communityIcon_l94os0707jz01.png?width=256&s=f4634bc76f7a0bc0a8ae728edff2d9659d24c6d8",display_name_prefixed:"r/falcons",icon_img:"https://b.thumbs.redditmedia.com/TOA7GXc5NUaw1DIidvXIHPaytNeK_EfbuCyujHjzKdQ.png",key_color:"#ea0027",primary_color:"#a71930",subscribers:95161,title:"/r/falcons: Home of the Atlanta Falcons",url:"/r/falcons/",position:11},{banner_background_color:"#e31837",community_icon:"https://styles.redditmedia.com/t5_2s3ft/styles/communityIcon_j9bbnf0a6g921.jpg?width=256&s=cef270cbfe8570ec68a5d8af0a7a65b278e5ed1f",display_name_prefixed:"r/KansasCityChiefs",icon_img:"",key_color:"#ea0027",primary_color:"#e31837",subscribers:92611,title:"Kansas City Chiefs: Home of the Red, White and Gold",url:"/r/KansasCityChiefs/",position:12},{banner_background_color:"#280353",community_icon:"https://styles.redditmedia.com/t5_2s1w8/styles/communityIcon_1qpbqb4lw3s31.png?width=256&s=4af69769505e62b064fa624834ed372cbe49e05a",display_name_prefixed:"r/ravens",icon_img:"https://b.thumbs.redditmedia.com/asj1lxdkGtyqgmoYvnZipGio4tA1wGvhZhvNuR4Ro1U.png",key_color:"#7e53c1",primary_color:"#22155d",subscribers:89926,title:"Ball So Hard University",url:"/r/ravens/",position:13},{banner_background_color:"#eeeeee",community_icon:"https://styles.redditmedia.com/t5_2s1wh/styles/communityIcon_ikz67pf1ueq41.png?width=256&s=7e043710c46226e14a0a5b81f2652f984dfa2c81",display_name_prefixed:"r/Browns",icon_img:"https://a.thumbs.redditmedia.com/HmUutY3q4kn-enVfZfhHeT3FDZ124z3jfJl2FZdFjc4.png",key_color:"#ff8717",primary_color:"#311d00",subscribers:83800,title:"Official subreddit of the Cleveland Browns",url:"/r/Browns/",position:14},{banner_background_color:"",community_icon:"",display_name_prefixed:"r/DenverBroncos",icon_img:"https://a.thumbs.redditmedia.com/DtUH0zlvnCjO1DRF0nphegTzCb6mbRrLm0DEmebo-r4.png",key_color:"#ff8717",primary_color:"#fc4c02",subscribers:78597,title:"Denver Broncos Discussion",url:"/r/DenverBroncos/",position:15},{banner_background_color:"",community_icon:"",display_name_prefixed:"r/detroitlions",icon_img:"https://b.thumbs.redditmedia.com/_4f-y6NXUE-PsdSlez6RmKxOndXdFmweJfoDZVxdi9Y.png",key_color:"#a5a4a4",primary_color:"",subscribers:77721,title:"Detroit Lions Football: Undefeated in Super Bowls!",url:"/r/detroitlions/",position:16},{banner_background_color:"#5a1414",community_icon:"https://styles.redditmedia.com/t5_2r4wc/styles/communityIcon_dgsgd13h1re41.png?width=256&s=cc97a42329625590f36e1134fc60d4d05bb5256d",display_name_prefixed:"r/Redskins",icon_img:"",key_color:"#ea0027",primary_color:"#5a1414",subscribers:77692,title:"Home of the Washington Redskins on Reddit",url:"/r/Redskins/",position:17},{banner_background_color:"",community_icon:"https://styles.redditmedia.com/t5_2ruqw/styles/communityIcon_dixxvhcdf3v01.jpg?width=256&s=44adc6a63dfb9dc89a3f78e8c67849571cd49fbb",display_name_prefixed:"r/NYGiants",icon_img:"https://b.thumbs.redditmedia.com/YOg6W262I_0A4kBaQs17t4eshA-o7CkQLx5Pq6pcMwk.png",key_color:"#0079d3",primary_color:"#bbbdbf",subscribers:75481,title:"New York Giants on Reddit",url:"/r/NYGiants/",position:18},{banner_background_color:"",community_icon:"https://styles.redditmedia.com/t5_2s1wf/styles/communityIcon_dtktm2il8ti01.png?width=256&s=f51d839f40f7a8c26214e33a325c7558dcd383b7",display_name_prefixed:"r/Saints",icon_img:"https://a.thumbs.redditmedia.com/URoxEpwpt3CwFq3CwiQEzrM-WMiy1bs5GmRJrqzFK30.png",key_color:"#545452",primary_color:"#d4bc8c",subscribers:67161,title:"Who Dat Nation",url:"/r/Saints/",position:19},{banner_background_color:"#009999",community_icon:"",display_name_prefixed:"r/miamidolphins",icon_img:"https://b.thumbs.redditmedia.com/-frfAPHfgTFaEexfyYpxMb1CvU3L5pnRpqaaOiGOCkc.png",key_color:"#25b79f",primary_color:"#008e97",subscribers:65036,title:"Miami Dolphins",url:"/r/miamidolphins/",position:20},{banner_background_color:"",community_icon:"https://styles.redditmedia.com/t5_2ra29/styles/communityIcon_vhvqcd0isooz.png?width=256&s=bf3fca52eebbb8816431ee49a2cf4deb1a7e940c",display_name_prefixed:"r/buffalobills",icon_img:"https://a.thumbs.redditmedia.com/SHjAZlM6tIrQt9uCsl7DYkSAqQfVA_2foX5Xx_Ler40.png",key_color:"#0079d3",primary_color:"#092c78",subscribers:63446,title:"Buffalo Bills",url:"/r/buffalobills/",position:21},{banner_background_color:"",community_icon:"",display_name_prefixed:"r/bengals",icon_img:"https://a.thumbs.redditmedia.com/NMP1CWh7kFM5LmIC1awr7DO69cq2h0LmXvwp2ZcK9D8.png",key_color:"#ff4500",primary_color:"",subscribers:63325,title:"The Cincinnati Bengals",url:"/r/bengals/",position:22},{banner_background_color:"",community_icon:"https://styles.redditmedia.com/t5_2s2av/styles/communityIcon_i8s0uk90j2q41.png?width=256&s=276800dc1ce5428f28ec32394bd25e312e9ec3ed",display_name_prefixed:"r/nyjets",icon_img:"https://b.thumbs.redditmedia.com/tLNj5jXAcQAHukbBwZyLex6ttr4p0zwn05xXyqKcias.png",key_color:"#46d160",primary_color:"",subscribers:63186,title:"New York Jets on Reddit",url:"/r/nyjets/",position:23},{banner_background_color:"",community_icon:"",display_name_prefixed:"r/panthers",icon_img:"https://a.thumbs.redditmedia.com/II8K5b0KFCDzu0S_0wfUEfIWcRxI79mxy4GRMm-65h0.png",key_color:"#24a0ed",primary_color:"#0085ca",subscribers:62321,title:"The Reddit Home of the Carolina Panthers",url:"/r/panthers/",position:24},{banner_background_color:"#b8001f",community_icon:"",display_name_prefixed:"r/buccaneers",icon_img:"https://a.thumbs.redditmedia.com/NGfP1gq13tYuBnmRfo7xh_RzBONgUEcZwzIF4vwbZ58.png",key_color:"#ea0027",primary_color:"#b8001f",subscribers:60151,title:"/r/Buccaneers: Reddit's home of the Super Bowl XXXVII Champions",url:"/r/buccaneers/",position:25},{banner_background_color:"#091f2c",community_icon:"https://styles.redditmedia.com/t5_2s450/styles/communityIcon_end0cllutek31.jpg?width=256&s=4bd85f2773137391b1ba774f03fbc55d1023503a",display_name_prefixed:"r/Texans",icon_img:"https://b.thumbs.redditmedia.com/wmkg_qPMaH0-XxGoRBZn60cwgB1cQoGJQCbK7j16pAc.png",key_color:"#ea0027",primary_color:"#091f2c",subscribers:55904,title:"Texans",url:"/r/Texans/",position:26},{banner_background_color:"#000000",community_icon:"https://styles.redditmedia.com/t5_2reby/styles/communityIcon_pzpz6feu1a421.jpg?width=256&s=cf4cba4a6bd6d20a1fcc3494d23446a96e31d96e",display_name_prefixed:"r/oaklandraiders",icon_img:"",key_color:"#545452",primary_color:"#000000",subscribers:53539,title:"THE BLACK HOLE",url:"/r/oaklandraiders/",position:27},{banner_background_color:"",community_icon:"",display_name_prefixed:"r/Colts",icon_img:"https://b.thumbs.redditmedia.com/7jaTyMl1AHbQPfhu_kSooml_npYPB_uPX3jKPCelWjU.png",key_color:"#0079d3",primary_color:"",subscribers:52763,title:"RUN THE DAMN BALL",url:"/r/Colts/",position:28},{banner_background_color:"#8b022e",community_icon:"https://styles.redditmedia.com/t5_2s58i/styles/communityIcon_wze8giib1uk41.png?width=256&s=9e0c1305c47613443f9442c69af3d62505ba941b",display_name_prefixed:"r/AZCardinals",icon_img:"https://b.thumbs.redditmedia.com/l3Dk51JA9fn2VAb2Mn94Emk9GcpOUEOi3sgpSly2vHM.png",key_color:"",primary_color:"#8b022e",subscribers:49464,title:"Arizona Cardinals | Reddit",url:"/r/AZCardinals/",position:29},{banner_background_color:"",community_icon:"https://styles.redditmedia.com/t5_2s5fm/styles/communityIcon_w65xgeb4jzr41.png?width=256&s=e4501a06dc9ca07f2914660c3d51fc9617af786a",display_name_prefixed:"r/Tennesseetitans",icon_img:"https://b.thumbs.redditmedia.com/lZLpgIkHK_jJy9lfxUBlJaQurISd6j2sg8RPlxqF6vc.png",key_color:"#0079d3",primary_color:"#014980",subscribers:46933,title:"Official Subreddit of the Tennessee Titans",url:"/r/Tennesseetitans/",position:30},{banner_background_color:"#3b4d5e",community_icon:"https://styles.redditmedia.com/t5_2rzkb/styles/communityIcon_tcp0g5zupoo41.jpg?width=256&s=a1e0a962ae62d45cc46bd16297b4df57c2c4dcb7",display_name_prefixed:"r/Chargers",icon_img:"https://b.thumbs.redditmedia.com/tbC0ode7py5yCTHTyC1gSwKl9Wof-RAljmgeoVUXb3I.png",key_color:"#24a0ed",primary_color:"#002a5e",subscribers:46249,title:"Los Angeles Chargers",url:"/r/Chargers/",position:31},{banner_background_color:"#00a6a5",community_icon:"",display_name_prefixed:"r/Jaguars",icon_img:"https://a.thumbs.redditmedia.com/IUdRN-jaypTu1a62VUYkGuVBM8acm2T5HhQOuuziDY4.png",key_color:"#25b79f",primary_color:"#006073",subscribers:46069,title:"Jacksonville Jaguars",url:"/r/Jaguars/",position:32}]}});
//# sourceMappingURL=app.e6b1e612.js.map