webpackJsonp([1],{"4Yi5":function(e,n){},NHnr:function(e,n,t){"use strict";function a(e){return function(e){return d()(e.keys()).sort(function(e,n){var t=e[0],a=e[1],i=n[0],r=n[1],u=Math.min(t.length,a.length),s=Math.min(i.length,r.length),o=Math.max(t.length,a.length),c=Math.max(i.length,r.length);return o>c?1:o<c?-1:u>s?1:u<s?-1:t>i?1:t<i?-1:a>r?1:a<r?-1:0})}(e).filter(function(n){return new v.a(e.get(n)).size===e.get(n).length})}Object.defineProperty(n,"__esModule",{value:!0});var i=t("7+uW"),r=t("zL8q"),u=t.n(r),s=(t("tvR6"),t("uMhA"),{render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}),o=t("VU/8")({name:"app"},s,!1,function(e){t("sGl/")},null,null).exports,c=t("/ocq"),h=t("c/Tr"),d=t.n(h),l=t("ifoU"),p=t.n(l),f=t("lHA8"),v=t.n(f),m=t("fZjL"),_=t.n(m),g=t("6OSo"),b=t.n(g),S={name:"MainPage",data:function(){return{nodesNumber:4,stateMachineGraph:[]}},computed:{reactionSequences:function(){return function(e){var n={};return function(e){function n(a){t.push(a),a.length>=e||(n(a+"a"),n(a+"b"))}var t=[];return n("a"),n("b"),t.sort(function(e,n){return e.length>n.length?1:e.length<n.length?-1:e>n?1:e<n?-1:0})}(e.length).forEach(function(t){n[t]=function(e,n){return e.map(function(t,a){return function(e,n,t){for(var a="";""!==t;){var i=e[n][t[0]];a+=i.reaction,n=i.endpoint,t=t.substring(1)}return a}(e,a,n)})}(e,t)}),n}(this.stateMachineGraph)},determiningSequences:function(){return function(e){return _()(e).filter(function(n){return new v.a(e[n]).size===e[n].length})}(this.reactionSequences)},formattedDetermingSequences:function(){return""+this.determiningSequences.join(", ")},setsSequences:function(){return function(e){for(var n=_()(e),t=new p.a,a=0;a<n.length;a++)for(var i=function(i){var r=n[a],u=n[i],s=e[r],o=e[u];t.set([r,u],s.map(function(e,n){return e+o[n]}))},r=a+1;r<n.length;r++)i(r);return t}(this.reactionSequences)},characterizingSets:function(){return a(this.setsSequences)},formattedCharacterizingSets:function(){return""+this.characterizingSets.map(function(e){return"{"+e[0]+","+e[1]+"}"}).join(", ")},formattedMainCharacterizingSet:function(){return"{"+this.characterizingSets[0][0]+","+this.characterizingSets[0][1]+"}"},coveringSet:function(){return function(e){var n=new v.a([0]),t=new v.a(["ε"]),a=new b.a;for(n.has(e[0].a.endpoint)||(n.add(e[0].a.endpoint),t.add("a"),a.enqueue({index:e[0].a.endpoint,path:"a"})),n.has(e[0].b.endpoint)||(n.add(e[0].b.endpoint),t.add("b"),a.enqueue({index:e[0].b.endpoint,path:"b"}));t.size<e.length&&!a.isEmpty();){var i=a.peek().index,r=a.peek().path;a.dequeue(),n.has(e[i].a.endpoint)||(n.add(e[i].a.endpoint),t.add(r+"a"),a.enqueue({index:e[i].a.endpoint,path:r+"a"})),n.has(e[i].b.endpoint)||(n.add(e[i].b.endpoint),t.add(r+"b"),a.enqueue({index:e[i].b.endpoint,path:r+"b"}))}return t}(this.stateMachineGraph)},formattedCoveringSet:function(){return"{"+d()(this.coveringSet).join(", ")+"}"},stimuluses:function(){return["a","b"]}},methods:{},watch:{nodesNumber:{handler:function(e){this.stateMachineGraph=Array(e).fill(null).map(function(e){return{a:{reaction:"x",endpoint:0},b:{reaction:"x",endpoint:0}}})},immediate:!0}}},M={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"main-page_root"}},[t("div",{attrs:{id:"graph-input"}},[t("el-input-number",{attrs:{id:"nodes-number-input",min:3,max:6},model:{value:e.nodesNumber,callback:function(n){e.nodesNumber=n},expression:"nodesNumber"}}),e._v(" "),t("table",{attrs:{id:"graph-input_routes"}},[e._m(0),e._v(" "),e._l(e.nodesNumber,function(n){return e._l(e.stimuluses,function(a){return t("tr",[t("td",[e._v(e._s(n-1))]),e._v(" "),t("td",{staticClass:"uppercase"},[e._v(e._s(a))]),e._v(" "),t("td",[t("el-select",{model:{value:e.stateMachineGraph[n-1][a].reaction,callback:function(t){e.$set(e.stateMachineGraph[n-1][a],"reaction",t)},expression:"stateMachineGraph[nodeNumber-1][stimulus].reaction"}},[t("el-option",{attrs:{label:"X",value:"x"}}),e._v(" "),t("el-option",{attrs:{label:"Y",value:"y"}})],1)],1),e._v(" "),t("td",[t("el-select",{model:{value:e.stateMachineGraph[n-1][a].endpoint,callback:function(t){e.$set(e.stateMachineGraph[n-1][a],"endpoint",t)},expression:"stateMachineGraph[nodeNumber-1][stimulus].endpoint"}},e._l(e.nodesNumber,function(e){return t("el-option",{key:e,attrs:{label:""+(e-1),value:e-1}})}))],1)])})})],2)],1),e._v(" "),t("div",{attrs:{id:"graph-results"}},[t("div",[t("b",[e._v("Различающие последовательности:")]),e._v(" "),e.determiningSequences.length?t("span",[e._v(e._s(e.formattedDetermingSequences))]):t("span",[e._v("нет")])]),e._v(" "),t("div",[t("b",[e._v("Характеризующие множества:")]),e._v(" "),e.characterizingSets.length?t("span",[e._v(e._s(e.formattedCharacterizingSets))]):t("span",[e._v("нет")])]),e._v(" "),t("div",[t("b",[e._v("Основное характеризующее множество (тупо самое первое в списке и самое короткое):")]),e._v(" "),e.characterizingSets.length?t("span",[e._v(e._s(e.formattedMainCharacterizingSet))]):t("span",[e._v("нет")])]),e._v(" "),t("div",[t("b",[e._v("Покрывающее множество:")]),e._v(" "),e.coveringSet.size===this.stateMachineGraph.length?t("span",[e._v(e._s(e.formattedCoveringSet))]):t("span",[e._v("нет")])])])])},staticRenderFns:[function(){var e=this.$createElement,n=this._self._c||e;return n("tr",[n("th",[this._v("Начало")]),this._v(" "),n("th",[this._v("Стимул")]),this._v(" "),n("th",[this._v("Реакция")]),this._v(" "),n("th",[this._v("Конец")])])}]},q=t("VU/8")(S,M,!1,function(e){t("ya1M"),t("4Yi5")},"data-v-6d049ab1",null).exports;i.default.use(c.a);var x=new c.a({routes:[{path:"/",name:"MainPage",component:q}]});i.default.use(u.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:x,template:"<App/>",components:{App:o}})},"sGl/":function(e,n){},tvR6:function(e,n){},uMhA:function(e,n){},ya1M:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.af414abd7ee1c95db652.js.map