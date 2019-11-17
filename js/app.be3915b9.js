(function(r){function e(e){for(var i,s,a=e[0],c=e[1],l=e[2],m=0,_=[];m<a.length;m++)s=a[m],t[s]&&_.push(t[s][0]),t[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(r[i]=c[i]);d&&d(e);while(_.length)_.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var r,e=0;e<n.length;e++){for(var o=n[e],i=!0,a=1;a<o.length;a++){var c=o[a];0!==t[c]&&(i=!1)}i&&(n.splice(e--,1),r=s(s.s=o[0]))}return r}var i={},t={app:0},n=[];function s(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=r,s.c=i,s.d=function(r,e,o){s.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:o})},s.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},s.t=function(r,e){if(1&e&&(r=s(r)),8&e)return r;if(4&e&&"object"===typeof r&&r&&r.__esModule)return r;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var i in r)s.d(o,i,function(e){return r[e]}.bind(null,i));return o},s.n=function(r){var e=r&&r.__esModule?function(){return r["default"]}:function(){return r};return s.d(e,"a",e),e},s.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},s.p="/reddit-nfl-stats/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var d=c;n.push([0,"chunk-vendors"]),o()})({0:function(r,e,o){r.exports=o("56d7")},"56d7":function(r,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d");var i=o("2b0e"),t=function(){var r=this,e=r.$createElement,o=r._self._c||e;return o("div",{attrs:{id:"app"}},[o("h2",[r._v("NFL Subreddit Subscriber Rank")]),o("input",{directives:[{name:"model",rawName:"v-model",value:r.search,expression:"search"}],staticClass:"search",attrs:{type:"text",placeholder:"Search..."},domProps:{value:r.search},on:{input:function(e){e.target.composing||(r.search=e.target.value)}}}),o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:r.reversed,expression:"reversed"}],staticClass:"reverse",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(r.reversed)?r._i(r.reversed,null)>-1:r.reversed},on:{change:function(e){var o=r.reversed,i=e.target,t=!!i.checked;if(Array.isArray(o)){var n=null,s=r._i(o,n);i.checked?s<0&&(r.reversed=o.concat([n])):s>-1&&(r.reversed=o.slice(0,s).concat(o.slice(s+1)))}else r.reversed=t}}}),r._v("\n    Reverse Order\n  ")]),o("div",{staticClass:"card-container"},r._l(r.filteredSubs(),function(r){return o("TeamCard",{key:r.title,attrs:{sub:r}})}),1),r._m(0)])},n=[function(){var r=this,e=r.$createElement,o=r._self._c||e;return o("footer",[o("p",[r._v("Created by "),o("a",{attrs:{href:"https://github.com/ztoben"}},[r._v("ztoben")]),r._v(".")])])}],s=(o("386d"),o("6762"),o("2fdb"),function(){var r=this,e=r.$createElement,o=r._self._c||e;return o("div",{staticClass:"card",style:{backgroundColor:r.determineColor(r.sub),color:r.sub.key_color}},[o("div",{staticClass:"badge"},[o("p",[r._v("#"+r._s(r.sub.position))])]),r.sub.icon_img?o("img",{staticClass:"team-icon",attrs:{src:r.sub.icon_img,alt:"logo",width:"100"}}):r._e(),o("div",{staticClass:"info-container"},[o("a",{attrs:{href:"https://reddit.com"+r.sub.url}},[o("h1",[r._v(r._s(r.sub.display_name_prefixed))])]),o("i",[r._v(r._s(r.sub.title))]),o("h2",[r._v("Sub Count: "+r._s(r.sub.subscribers))])])])}),a=[],c=(o("c5f6"),{name:"TeamCard",props:{sub:{banner_background_color:String,community_icon:String,display_name_prefixed:String,icon_img:String,key_color:String,primary_color:String,subscribers:String,title:String,url:String,position:Number}},methods:{determineColor:function(r){var e=r.banner_background_color,o=r.primary_color,i=r.display_name_prefixed;switch(i){case"r/steelers":return"#101820";case"r/KansasCityChiefs":return"#FFB81C";case"r/49ers":return"#B3995D";case"r/Jaguars":return"#9F792C";case"r/miamidolphins":return"#F26A24";case"r/buccaneers":return"#FF7900";case"r/LosAngelesRams":return"#0C243C";case"r/nyjets":return"#27251F";case"r/bengals":return"#000000";case"r/Browns":return"#311D00";case"r/detroitlions":return"#0076B6";case"r/DenverBroncos":return"#FA5211";default:return e||o}}}}),l=c,d=(o("dbbf"),o("2877")),m=Object(d["a"])(l,s,a,!1,null,"0d26478f",null);m.options.__file="TeamCard.vue";var _=m.exports,u=o("e6e7");function p(r){return r.toLowerCase().trim()}function b(r,e){return p(r).includes(p(e))}var y={name:"app",components:{TeamCard:_},data:function(){return{stats:u,search:"",reversed:!1}},methods:{filteredSubs:function(){var r=this,e=this.stats.filter(function(e){return b(e.display_name_prefixed,r.search)||b(e.title,r.search)});return this.reversed?e.reverse():e}}},g=y,f=(o("5c0b"),Object(d["a"])(g,t,n,!1,null,null,null));f.options.__file="App.vue";var h=f.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(r){return r(h)}}).$mount("#app")},"5c0b":function(r,e,o){"use strict";var i=o("5e27"),t=o.n(i);t.a},"5e27":function(r,e,o){},7075:function(r,e,o){},dbbf:function(r,e,o){"use strict";var i=o("7075"),t=o.n(i);t.a},e6e7:function(r){r.exports=[{banner_background_color:"",community_icon:"",display_name_prefixed:"r/Patriots",icon_img:"https://b.thumbs.redditmedia.com/BPOhHggR0rbknOwb1L_mL_t7-yb-0YzaZuk9iZbUZPc.png",key_color:"#0079d3",primary_color:"",subscribers:402982,title:"The New England Patriots",url:"/r/Patriots/",position:1},{banner_background_color:"#014980",community_icon:"",display_name_prefixed:"r/LosAngelesRams",icon_img:"https://b.thumbs.redditmedia.com/hc7Ti0pxZX-EpscCUK-Soe4WF9kCZfxQs3tjNXgvTAA.png",key_color:"#545452",primary_color:"#014980",subscribers:274084,title:"Los Angeles Rams",url:"/r/LosAngelesRams/",position:2},{banner_background_color:"#004953",community_icon:"",display_name_prefixed:"r/eagles",icon_img:"https://b.thumbs.redditmedia.com/aw-g8PZGz9iNSMGoiofKtHmiV7k4Ue0_MjY1LniNIak.png",key_color:"#46d160",primary_color:"#bbbdbf",subscribers:181971,title:"Eagles - Watch r/eagles fly!",url:"/r/eagles/",position:3},{banner_background_color:"#2a4339",community_icon:"",display_name_prefixed:"r/GreenBayPackers",icon_img:"https://a.thumbs.redditmedia.com/fMlQyAzFSB0ka6F1JQ7fIvot7-3rdqJ2WZp8x-niEB4.png",key_color:"#ddbd37",primary_color:"#2a433a",subscribers:136081,title:"Green Bay Packers",url:"/r/GreenBayPackers/",position:4},{banner_background_color:"#041e42",community_icon:"",display_name_prefixed:"r/cowboys",icon_img:"https://b.thumbs.redditmedia.com/yYO6ndCES06BaLNzHfTpxK0p9Er8IQMoN-ua3byLY9k.png",key_color:"#0079d3",primary_color:"#000000",subscribers:111358,title:"Dallas Cowboys",url:"/r/cowboys/",position:5},{banner_background_color:"",community_icon:"https://styles.redditmedia.com/t5_2r526/styles/communityIcon_x85pehnm1pv31.png",display_name_prefixed:"r/steelers",icon_img:"https://b.thumbs.redditmedia.com/5J_VXMLMOnsrhUqdKefTUgRi8Ai-ZdDt3acZPOkZ8Bg.png",key_color:"#ddbd37",primary_color:"#ffb81c",subscribers:100729,title:"The Pittsburgh Steelers",url:"/r/steelers/",position:6},{banner_background_color:"",community_icon:"https://styles.redditmedia.com/t5_2qocl/styles/communityIcon_jlle4g253q911.png",display_name_prefixed:"r/minnesotavikings",icon_img:"https://b.thumbs.redditmedia.com/Wmdqtg771ieoU05rvTl4bhHTN6gXp_0IO_27uIpn2cQ.png",key_color:"#7e53c1",primary_color:"#4f2683",subscribers:95492,title:"SKOL",url:"/r/minnesotavikings/",position:7},{banner_background_color:"#001533",community_icon:"https://styles.redditmedia.com/t5_2ryle/styles/communityIcon_q3h66swv5k201.png",display_name_prefixed:"r/Seahawks",icon_img:"",key_color:"#94e044",primary_color:"#001533",subscribers:91840,title:"Go Hawks!",url:"/r/Seahawks/",position:8},{banner_background_color:"#b8001f",community_icon:"",display_name_prefixed:"r/49ers",icon_img:"https://b.thumbs.redditmedia.com/-5KuktNtj5saBtv50ypdO-e3Y9PoY8MF-weBHx6ZS7U.png",key_color:"#ea0027",primary_color:"#aa0000",subscribers:89128,title:"San Francisco 49ers: For all things red and gold!",url:"/r/49ers/",position:9},{banner_background_color:"#03182f",community_icon:"https://styles.redditmedia.com/t5_2s0u3/styles/communityIcon_f2fv3729wmx01.jpg",display_name_prefixed:"r/CHIBears",icon_img:"https://a.thumbs.redditmedia.com/b1qU-HFNiBktrQirW6m6dwx_Qw5EeJsuj2hSQ3Ohkg4.png",key_color:"#ff4500",primary_color:"#0b162a",subscribers:87799,title:"/r/CHIBears ≡GSH≡",url:"/r/CHIBears/",position:10},{banner_background_color:"#000000",community_icon:"https://styles.redditmedia.com/t5_2ql17/styles/communityIcon_l94os0707jz01.png",display_name_prefixed:"r/falcons",icon_img:"https://b.thumbs.redditmedia.com/TOA7GXc5NUaw1DIidvXIHPaytNeK_EfbuCyujHjzKdQ.png",key_color:"#ea0027",primary_color:"#a71930",subscribers:84685,title:"/r/falcons: Home of the Atlanta Falcons",url:"/r/falcons/",position:11},{banner_background_color:"#eeeeee",community_icon:"https://styles.redditmedia.com/t5_2s1wh/styles/communityIcon_z8jv3o0ieh121.png",display_name_prefixed:"r/Browns",icon_img:"https://a.thumbs.redditmedia.com/HmUutY3q4kn-enVfZfhHeT3FDZ124z3jfJl2FZdFjc4.png",key_color:"#ff8717",primary_color:"#311d00",subscribers:75842,title:"Cleveland Browns",url:"/r/Browns/",position:12},{banner_background_color:"#280353",community_icon:"https://styles.redditmedia.com/t5_2s1w8/styles/communityIcon_1qpbqb4lw3s31.png",display_name_prefixed:"r/ravens",icon_img:"https://b.thumbs.redditmedia.com/asj1lxdkGtyqgmoYvnZipGio4tA1wGvhZhvNuR4Ro1U.png",key_color:"#7e53c1",primary_color:"#22155d",subscribers:73101,title:"Ball So Hard University",url:"/r/ravens/",position:13},{banner_background_color:"",community_icon:"",display_name_prefixed:"r/detroitlions",icon_img:"https://b.thumbs.redditmedia.com/_4f-y6NXUE-PsdSlez6RmKxOndXdFmweJfoDZVxdi9Y.png",key_color:"#a5a4a4",primary_color:"",subscribers:70235,title:"Detroit Lions Football: Undefeated in Super Bowls!",url:"/r/detroitlions/",position:14},{banner_background_color:"#e31837",community_icon:"https://styles.redditmedia.com/t5_2s3ft/styles/communityIcon_j9bbnf0a6g921.jpg",display_name_prefixed:"r/KansasCityChiefs",icon_img:"",key_color:"#ea0027",primary_color:"#e31837",subscribers:69842,title:"Kansas City Chiefs: Home of the Red, White and Gold",url:"/r/KansasCityChiefs/",position:15},{banner_background_color:"",community_icon:"",display_name_prefixed:"r/DenverBroncos",icon_img:"https://a.thumbs.redditmedia.com/DtUH0zlvnCjO1DRF0nphegTzCb6mbRrLm0DEmebo-r4.png",key_color:"#ff8717",primary_color:"#fc4c02",subscribers:69753,title:"Denver Broncos Discussion",url:"/r/DenverBroncos/",position:16},{banner_background_color:"",community_icon:"https://styles.redditmedia.com/t5_2ruqw/styles/communityIcon_dixxvhcdf3v01.jpg",display_name_prefixed:"r/NYGiants",icon_img:"https://b.thumbs.redditmedia.com/YOg6W262I_0A4kBaQs17t4eshA-o7CkQLx5Pq6pcMwk.png",key_color:"#0079d3",primary_color:"#bbbdbf",subscribers:68492,title:"New York Giants on Reddit",url:"/r/NYGiants/",position:17},{banner_background_color:"#5a1414",community_icon:"https://styles.redditmedia.com/t5_2r4wc/styles/communityIcon_xlcisqmx1rt31.png",display_name_prefixed:"r/Redskins",icon_img:"",key_color:"#ea0027",primary_color:"#5a1414",subscribers:68264,title:"#OFFSEASON CHAMPS",url:"/r/Redskins/",position:18},{banner_background_color:"",community_icon:"https://styles.redditmedia.com/t5_2s1wf/styles/communityIcon_dtktm2il8ti01.png",display_name_prefixed:"r/Saints",icon_img:"https://a.thumbs.redditmedia.com/URoxEpwpt3CwFq3CwiQEzrM-WMiy1bs5GmRJrqzFK30.png",key_color:"#545452",primary_color:"#d4bc8c",subscribers:56779,title:"Who Dat Nation",url:"/r/Saints/",position:19},{banner_background_color:"",community_icon:"",display_name_prefixed:"r/bengals",icon_img:"https://a.thumbs.redditmedia.com/NMP1CWh7kFM5LmIC1awr7DO69cq2h0LmXvwp2ZcK9D8.png",key_color:"#ff4500",primary_color:"",subscribers:54707,title:"The Cincinnati Bengals",url:"/r/bengals/",position:20},{banner_background_color:"",community_icon:"https://styles.redditmedia.com/t5_2ra29/styles/communityIcon_vhvqcd0isooz.png",display_name_prefixed:"r/buffalobills",icon_img:"https://a.thumbs.redditmedia.com/SHjAZlM6tIrQt9uCsl7DYkSAqQfVA_2foX5Xx_Ler40.png",key_color:"#0079d3",primary_color:"#092c78",subscribers:53631,title:"The Buffalo Bills",url:"/r/buffalobills/",position:21},{banner_background_color:"",community_icon:"",display_name_prefixed:"r/panthers",icon_img:"https://a.thumbs.redditmedia.com/II8K5b0KFCDzu0S_0wfUEfIWcRxI79mxy4GRMm-65h0.png",key_color:"#24a0ed",primary_color:"#0085ca",subscribers:53393,title:"The Reddit Home of the Carolina Panthers",url:"/r/panthers/",position:22},{banner_background_color:"",community_icon:"",display_name_prefixed:"r/nyjets",icon_img:"https://b.thumbs.redditmedia.com/S4RGboGQXEYUXFasYLOSIRw42_FGX7U1q_f_m4HUgtk.png",key_color:"#46d160",primary_color:"",subscribers:51945,title:"New York Jets on Reddit",url:"/r/nyjets/",position:23},{banner_background_color:"#009999",community_icon:"",display_name_prefixed:"r/miamidolphins",icon_img:"https://b.thumbs.redditmedia.com/-frfAPHfgTFaEexfyYpxMb1CvU3L5pnRpqaaOiGOCkc.png",key_color:"#25b79f",primary_color:"",subscribers:50937,title:"Miami Dolphins",url:"/r/miamidolphins/",position:24},{banner_background_color:"#000000",community_icon:"https://styles.redditmedia.com/t5_2reby/styles/communityIcon_pzpz6feu1a421.jpg",display_name_prefixed:"r/oaklandraiders",icon_img:"",key_color:"#545452",primary_color:"#000000",subscribers:50168,title:"THE BLACK HOLE",url:"/r/oaklandraiders/",position:25},{banner_background_color:"#091f2c",community_icon:"https://styles.redditmedia.com/t5_2s450/styles/communityIcon_end0cllutek31.jpg",display_name_prefixed:"r/Texans",icon_img:"https://b.thumbs.redditmedia.com/wmkg_qPMaH0-XxGoRBZn60cwgB1cQoGJQCbK7j16pAc.png",key_color:"#ea0027",primary_color:"#091f2c",subscribers:48513,title:"Texans",url:"/r/Texans/",position:26},{banner_background_color:"",community_icon:"",display_name_prefixed:"r/Colts",icon_img:"https://b.thumbs.redditmedia.com/gZETZFDcW1VpHzturXXU3076a0JUVG_IyAZpxSw26mU.png",key_color:"#0079d3",primary_color:"",subscribers:45865,title:"Quenton Nelson is Judge, Jury, and Executioner",url:"/r/Colts/",position:27},{banner_background_color:"#ac0638",community_icon:"https://styles.redditmedia.com/t5_2s58i/styles/communityIcon_us2zyf0nd6t31.png",display_name_prefixed:"r/AZCardinals",icon_img:"https://a.thumbs.redditmedia.com/UyvxxpMv0fft7DcsURPqvE38X-oRfn3k0qLKt7TyKo0.png",key_color:"",primary_color:"#ac0638",subscribers:44212,title:"Arizona Cardinals | Reddit",url:"/r/AZCardinals/",position:28},{banner_background_color:"#b8001f",community_icon:"",display_name_prefixed:"r/buccaneers",icon_img:"https://a.thumbs.redditmedia.com/NGfP1gq13tYuBnmRfo7xh_RzBONgUEcZwzIF4vwbZ58.png",key_color:"#ea0027",primary_color:"#b8001f",subscribers:42365,title:"/r/Buccaneers: Reddit's home of the Super Bowl XXXVII Champions",url:"/r/buccaneers/",position:29},{banner_background_color:"#00a6a5",community_icon:"",display_name_prefixed:"r/Jaguars",icon_img:"https://a.thumbs.redditmedia.com/IUdRN-jaypTu1a62VUYkGuVBM8acm2T5HhQOuuziDY4.png",key_color:"#25b79f",primary_color:"#006073",subscribers:42132,title:"Jacksonville Jaguars",url:"/r/Jaguars/",position:30},{banner_background_color:"#3b4d5e",community_icon:"https://styles.redditmedia.com/t5_2rzkb/styles/communityIcon_yt3jycgvxti01.png",display_name_prefixed:"r/Chargers",icon_img:"https://b.thumbs.redditmedia.com/9wn-usV2JJUqjdeblo3u7jJmdIJzitmlcofrDujQ_vQ.png",key_color:"#24a0ed",primary_color:"#007bc8",subscribers:41669,title:"Los Angeles Chargers",url:"/r/Chargers/",position:31},{banner_background_color:"",community_icon:"",display_name_prefixed:"r/Tennesseetitans",icon_img:"https://b.thumbs.redditmedia.com/gr17-sYc6EAIOtOHHrxVSj3-tXR3x846FKYPAOQpBbg.png",key_color:"#0079d3",primary_color:"#014980",subscribers:37458,title:"Official Subreddit of the Tennessee Titans",url:"/r/Tennesseetitans/",position:32}]}});
//# sourceMappingURL=app.be3915b9.js.map