webpackJsonp([1],{"+MhM":function(t,n){},0:function(t,n){},1:function(t,n){},2:function(t,n){},"2kkN":function(t,n){},"38cB":function(t,n,e){t.exports=e.p+"static/img/domen3.f8a9082.jpg"},"5Niv":function(t,n){},"9aiA":function(t,n,e){t.exports=e.p+"static/img/domen4.791ddac.jpg"},BA3Q:function(t,n){},LGQu:function(t,n){},"N+rj":function(t,n,e){t.exports=e.p+"static/img/domen2.afa3338.jpg"},NHnr:function(t,n,e){"use strict";function i(t){for(var n=[],e=0;e<t.length;e++)for(var i=e+1;i<t.length;i++)n.push(1e3*e+100*t[e]+10*i+t[i]);return n}function s(t,n){var e=0;return i(n).forEach(function(n){void 0===t[n]&&(e+=1)}),e}function r(t){if("string"==typeof t)return[0];if(t.hasOwnProperty("?"))return[0,1];if(t.hasOwnProperty("*")||t.hasOwnProperty("+"))return[0,1,2];if(t.hasOwnProperty("|")){for(var n=[],e=0;e<t["|"].length;e++)n.push(e);return n}return""}function a(t,n){for(var e=0,i=n(t[0]),s=1;s<t.length;s++){var r=n(t[s]);r>i&&(i=r,e=s)}return e}function h(t){for(var n=function(t){var n=[[]];return t.forEach(function(t){var e=r(t);n=function(t,n){var e=[];return t.forEach(function(t){n.forEach(function(n){e.push(t.concat([n]))})}),e}(n,e)}),n}(t),e=[],h=function(t){for(var n=0,e=0;e<t.length;e++)for(var i=e+1;i<t.length;i++)n+=r(t[e]).length*r(t[i]).length;return n}(t),v={};z()(v).length<h;){var o=a(n,function(t){return s(v,t)});i(n[o]).forEach(function(t){v[t]=!0}),e.push(n[o]),n.splice(o,1)}return e}Object.defineProperty(n,"__esModule",{value:!0});var v=e("7+uW"),o=e("id+j"),c=e.n(o),u=e("zL8q"),_=e.n(u),p=(e("tvR6"),e("uMhA"),{name:"NavigationLink",props:{routeName:{type:String,required:!0},routeParams:{type:Object,default:function(){return{}}},text:{type:String,required:!0}},computed:{toObj:function(){return{name:this.routeName,params:this.routeParams}},isActiveClass:function(){return{"is-active":0===this.$route.name.indexOf(this.routeName)}}},methods:{go:function(){this.$router.push(this.toObj)}}}),d={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"navigation_link",class:this.isActiveClass,on:{click:this.go,shortkey:this.go}},[this._v("\n    "+this._s(this.text)+"\n")])},staticRenderFns:[]},l={name:"Navigation",components:{"nav-lnk":e("VU/8")(p,d,!1,function(t){e("LGQu")},"data-v-0e123278",null).exports}},f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("nav",{attrs:{id:"navigation_root"}},[n("span",{staticClass:"navigation-item brand-title"},[this._v("\n        TestingSolver\n    ")]),this._v(" "),n("nav-lnk",{staticClass:"navigation-item",attrs:{text:"Автомат","route-name":"StateMachine"}}),this._v(" "),n("nav-lnk",{staticClass:"navigation-item",attrs:{text:"Доменное тестирование","route-name":"DomenTesting"}}),this._v(" "),n("nav-lnk",{staticClass:"navigation-item",attrs:{text:"Грамматика","route-name":"Grammar"}})],1)},staticRenderFns:[]},g=e("VU/8")(l,f,!1,function(t){e("WLzF")},"data-v-20b6cb4d",null).exports,m={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"footer_root"}},[i("img",{attrs:{id:"coolyamin",src:e("d1FW")}}),t._v(" "),i("span",[t._v("\n        Разрабатывали:\n        "),t._l(t.developers,function(n,e){return[i("a",{attrs:{href:"https://vk.com/"+n.vkId}},[t._v(t._s(n.name))]),t._v(" "),e!==t.developers.length-1?[t._v(", ")]:t._e()]}),t._v(" "),i("br"),t._v("\n        Помогали: "),t._l(t.testers,function(n,e){return[i("a",{attrs:{href:"https://vk.com/"+n.vkId}},[t._v(t._s(n.name))]),t._v(" "),e!==t.testers.length-1?[t._v(", ")]:t._e()]})],2)])},staticRenderFns:[]},b={components:{ThanksFooter:e("VU/8")({name:"Footer",data:function(){return{developers:[{name:"Екатерина",vkId:"one_step_cl0ser"},{name:"Илья",vkId:"isgulkov"},{name:"Данил",vkId:"heckvik"},{name:"Сергей",vkId:"zakhse"}],testers:[{name:"Саша",vkId:"id33861656"},{name:"Рома",vkId:"romikabi"},{name:"Кэр",vkId:"heykarolina"}]}}},m,!1,function(t){e("XOPA")},"data-v-0c8b20c2",null).exports,Navigation:g},name:"app"},M={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("navigation"),this._v(" "),n("router-view",{staticClass:"page-content"}),this._v(" "),n("thanks-footer")],1)},staticRenderFns:[]},G=e("VU/8")(b,M,!1,function(t){e("W2+8")},null,null).exports,S=e("/ocq"),x=e("4Gbs"),X=e.n(x),C=e("c/Tr"),k=e.n(C),Y=e("ifoU"),N=e.n(Y),E=e("lHA8"),y=e.n(E),w=e("fZjL"),z=e.n(w),A=e("6OSo"),R=e.n(A),I={name:"StateMachine",data:function(){return{nodesNumber:4,MAX_NODES:6,stateMachineGraph:Array(6).fill(null).map(function(t){return{a:{reaction:"x",endpoint:0},b:{reaction:"x",endpoint:0}}})}},computed:{usedStateMachineGraph:function(){return this.stateMachineGraph.slice(0,this.nodesNumber)},usedGraphIsValid:function(){var t=this;return this.usedStateMachineGraph.every(function(n){return["a","b"].every(function(e){return n[e].endpoint<t.nodesNumber})})},reactionSequences:function(){return function(t){var n={};return function(t){function n(i){e.push(i),i.length>=t||(n(i+"a"),n(i+"b"))}var e=[];return n("a"),n("b"),e.sort(function(t,n){return t.length>n.length?1:t.length<n.length?-1:t>n?1:t<n?-1:0})}(t.length).forEach(function(e){n[e]=function(t,n){return t.map(function(e,i){return function(t,n,e){for(var i="";""!==e;){var s=t[n][e[0]];i+=s.reaction,n=s.endpoint,e=e.substring(1)}return i}(t,i,n)})}(t,e)}),n}(this.usedStateMachineGraph)},determiningSequences:function(){return function(t){return z()(t).filter(function(n){return new y.a(t[n]).size===t[n].length})}(this.reactionSequences)},formattedDetermingSequences:function(){return""+this.determiningSequences.join(", ")},formattedMainDetermingSequence:function(){return""+this.determiningSequences[0]},setsSequences:function(){return function(t){for(var n=z()(t),e=new N.a,i=0;i<n.length;i++)for(var s=function(s){var r=n[i],a=n[s],h=t[r],v=t[a];e.set([r,a],h.map(function(t,n){return t+v[n]}))},r=i+1;r<n.length;r++)s(r);return e}(this.reactionSequences)},characterizingSets:function(){return function(t){return function(t){return k()(t.keys()).sort(function(t,n){var e=t[0],i=t[1],s=n[0],r=n[1],a=Math.min(e.length,i.length),h=Math.min(s.length,r.length),v=Math.max(e.length,i.length),o=Math.max(s.length,r.length);return v>o?1:v<o?-1:a>h?1:a<h?-1:e>s?1:e<s?-1:i>r?1:i<r?-1:0})}(t).filter(function(n){return new y.a(t.get(n)).size===t.get(n).length})}(this.setsSequences)},formattedCharacterizingSets:function(){return""+this.characterizingSets.slice(0,10).map(function(t){return"{"+t[0]+","+t[1]+"}"}).join(", ")},formattedMainCharacterizingSet:function(){return"{"+this.characterizingSets[0][0]+","+this.characterizingSets[0][1]+"}"},coveringSetsAndRoutes:function(){return function(t){function n(n,a,h){var v=t[a][n].endpoint;if(!e.has(v)){var o=""+h+n;e.add(v),i.push(o),r[v]=o,s.enqueue({index:v,path:o})}}var e=new y.a([0]),i=["ε"],s=new R.a;s.enqueue({index:0,path:""});var r={};for(r[0]="";i.length<t.length&&!s.isEmpty();){var a=s.dequeue(),h=a.index,v=a.path;n("a",h,v),n("b",h,v)}return{coveringSet:i,routes:r}}(this.usedStateMachineGraph)},coveringSet:function(){return this.coveringSetsAndRoutes.coveringSet},coveringRoutes:function(){return this.coveringSetsAndRoutes.routes},formattedCoveringSet:function(){return"{"+this.coveringSet.join(", ")+"}"},formattedWpTests:function(){return this.wpTests.join(" ")},formattedWpTestsCut:function(){var t=this;return this.wpTests.filter(function(n){return t.wpTests.every(function(t){return n===t||!t.startsWith(n)})}).join(" ")},identificationSets:function(){return function(t,n,e){function i(t,n){for(var e=0,i=n.length;i--;)n[i]===t&&e++;return e}if(!e||2!==e.length)return[];var s=t[e[0]],r=t[e[1]],a=n.get(e);if(!s||!s||!a)return[];console.log("reactions",a,s,r);for(var h=a.length,v=Array(h);h--;)1===i(s[h],s)?v[h]=[e[0]]:1===i(r[h],r)?v[h]=[e[1]]:v[h]=e;return v}(this.reactionSequences,this.setsSequences,this.characterizingSets[0])},stimuluses:function(){return["a","b"]},wTests:function(){return function(t,n,e){for(var i=[],s=0;s<t.length;++s)for(var r=0;r<n.length;++r)for(var a=0;a<e.length;++a)i.push("R"+("ε"===t[s]?"":t[s])+n[r]+e[a]);return i}(this.coveringSet,this.stimuluses,this.characterizingSets[0]).join(" ")},wpTests:function(){return function(t,n,e,i,s){function r(t,n,e,r){h.has(t)||(h.add(t),a=a.concat(i[e].map(function(t){return"R"+s[n]+r+t})))}var a=[],h=new y.a;!function(){for(var e=1;e<n.length;++e)for(var i=n[e],s=0,r=0;r<i.length;++r){var a=i[r],v=s.toString()+a;h.has(v)||h.add(v),s=t[s][a].endpoint}}();for(var v=0;v<n.length;++v)for(var o=0;o<e.length;++o)a.push("R"+("ε"===n[v]?"":n[v])+e[o]);for(var c=0;c<t.length;++c){var u=c.toString()+"a",_=c.toString()+"b",p=[t[c].a.endpoint,t[c].b.endpoint],d=p[1];r(u,c,p[0],"a"),r(_,c,d,"b")}return a}(this.usedStateMachineGraph,this.coveringSet,this.characterizingSets[0],this.identificationSets,this.coveringRoutes)},graphVizNotation:function(){var t=this;return'\n            digraph {\n            rankdir="LR";\n            '+this.usedStateMachineGraph.map(function(n,e){return t.stimuluses.map(function(t){return e+" -> "+n[t].endpoint+' [label = "'+t.toUpperCase()+"/"+n[t].reaction.toUpperCase()+'"];'}).join("\n")}).join("\n")+"\n            }"},graphVizRender:function(){return X()(this.graphVizNotation)}},methods:{fillGraphDebug:function(){this.stateMachineGraph[0].a.reaction="x",this.stateMachineGraph[0].a.endpoint=0,this.stateMachineGraph[0].b.reaction="x",this.stateMachineGraph[0].b.endpoint=1,this.stateMachineGraph[1].a.reaction="y",this.stateMachineGraph[1].a.endpoint=0,this.stateMachineGraph[1].b.reaction="x",this.stateMachineGraph[1].b.endpoint=2,this.stateMachineGraph[2].a.reaction="y",this.stateMachineGraph[2].a.endpoint=3,this.stateMachineGraph[2].b.reaction="y",this.stateMachineGraph[2].b.endpoint=2,this.stateMachineGraph[3].a.reaction="x",this.stateMachineGraph[3].a.endpoint=1,this.stateMachineGraph[3].b.reaction="x",this.stateMachineGraph[3].b.endpoint=1},fillGraphDebug2:function(){this.stateMachineGraph[0].a.reaction="x",this.stateMachineGraph[0].a.endpoint=1,this.stateMachineGraph[0].b.reaction="x",this.stateMachineGraph[0].b.endpoint=3,this.stateMachineGraph[1].a.reaction="x",this.stateMachineGraph[1].a.endpoint=2,this.stateMachineGraph[1].b.reaction="x",this.stateMachineGraph[1].b.endpoint=3,this.stateMachineGraph[2].a.reaction="y",this.stateMachineGraph[2].a.endpoint=0,this.stateMachineGraph[2].b.reaction="x",this.stateMachineGraph[2].b.endpoint=3,this.stateMachineGraph[3].a.reaction="x",this.stateMachineGraph[3].a.endpoint=0,this.stateMachineGraph[3].b.reaction="y",this.stateMachineGraph[3].b.endpoint=2}}},j={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"state-machine_root"}},[e("h1",[t._v("Чё-то про автоматы")]),t._v(" "),e("el-button",{on:{click:t.fillGraphDebug}},[t._v("Заполнить граф (отладка1)")]),t._v(" "),e("el-button",{on:{click:t.fillGraphDebug2}},[t._v("Заполнить граф (отладка2)")]),t._v(" "),t._m(0),t._v(" "),e("div",{attrs:{id:"graph-input"}},[e("div",{attrs:{id:"graph-nodes-number"}},[e("span",[t._v("\n                Количество состояний:\n            ")]),t._v(" "),e("el-input-number",{attrs:{id:"nodes-number-input",min:3,max:t.MAX_NODES},model:{value:t.nodesNumber,callback:function(n){t.nodesNumber=n},expression:"nodesNumber"}})],1),t._v(" "),t.usedGraphIsValid?t._e():e("div",{attrs:{id:"invalid-graph"}},[t._v("\n            Ошибка в ведённых данных\n        ")]),t._v(" "),e("table",{attrs:{id:"graph-input_routes"}},[t._m(1),t._v(" "),t._l(t.nodesNumber,function(n){return t._l(t.stimuluses,function(i){return e("tr",[e("td",[t._v(t._s(n-1))]),t._v(" "),e("td",{staticClass:"uppercase"},[t._v(t._s(i))]),t._v(" "),e("td",[e("el-select",{model:{value:t.stateMachineGraph[n-1][i].reaction,callback:function(e){t.$set(t.stateMachineGraph[n-1][i],"reaction",e)},expression:"stateMachineGraph[nodeNumber-1][stimulus].reaction"}},[e("el-option",{attrs:{label:"X",value:"x"}}),t._v(" "),e("el-option",{attrs:{label:"Y",value:"y"}})],1)],1),t._v(" "),e("td",[e("el-select",{model:{value:t.stateMachineGraph[n-1][i].endpoint,callback:function(e){t.$set(t.stateMachineGraph[n-1][i],"endpoint",e)},expression:"stateMachineGraph[nodeNumber-1][stimulus].endpoint"}},t._l(t.nodesNumber,function(t){return e("el-option",{key:t,attrs:{label:""+(t-1),value:t-1}})}))],1)])})})],2)]),t._v(" "),t._m(2),t._v(" "),e("div",{attrs:{id:"graph-vizualization"}},[e("div",{attrs:{id:"graphviz-render"},domProps:{innerHTML:t._s(t.graphVizRender)}})]),t._v(" "),t._m(3),t._v(" "),t.usedGraphIsValid?e("div",{attrs:{id:"graph-results"}},[e("div",[e("b",[t._v("Различающая последовательность:")]),t._v(" "),t.determiningSequences.length?e("span",[t._v("\n                "+t._s(t.formattedMainDetermingSequence)+"\n            ")]):e("span",[t._v("нет")])]),t._v(" "),e("div",[e("b",[t._v("Характеризующее множество:")]),t._v(" "),t.characterizingSets.length?e("span",[t._v("\n                "+t._s(t.formattedMainCharacterizingSet)+"\n            ")]):e("span",[t._v("нет")])]),t._v(" "),e("div",[e("b",[t._v("Покрывающее множество:")]),t._v(" "),t.coveringSet.length===this.nodesNumber?e("span",[t._v("\n                "+t._s(t.formattedCoveringSet)+"\n            ")]):e("span",[t._v("нет")])]),t._v(" "),e("div",[e("b",[t._v("Идентифицирующие множества:")]),t._v(" "),e("table",{attrs:{id:"identification-sets-table",cellspacing:"0",border:"",bordercolor:"black"}},[e("tr",t._l(t.nodesNumber,function(n){return e("th",[t._v("\n                        "+t._s(n-1)+"\n                    ")])})),t._v(" "),e("tr",t._l(t.nodesNumber,function(n){return e("td",[t.identificationSets[n-1]?[t._v("\n                            "+t._s("{"+t.identificationSets[n-1].join(", ")+"}")+"\n                        ")]:[t._v("\n                            -\n                        ")]],2)}))])]),t._v(" "),e("div",[e("b",[t._v("Тесты по W-методу:")]),t._v(" "),t.coveringSet.length===this.nodesNumber&&t.characterizingSets.length?e("span",[t._v("\n                "+t._s(t.wTests)+"\n            ")]):e("span",[t._v("нет")])]),t._v(" "),e("div",[e("b",[t._v("Тесты по Wp-методу:")]),t._v(" "),t.coveringSet.length===this.nodesNumber&&t.characterizingSets.length?e("span",[t._v("\n                "+t._s(t.formattedWpTests)+"\n            ")]):e("span",[t._v("нет")])]),t._v(" "),e("div",[e("b",[t._v("Сокращенный тест по Wp-методу:")]),t._v(" "),t.coveringSet.length===this.nodesNumber&&t.characterizingSets.length?e("span",[t._v("\n                "+t._s(t.formattedWpTestsCut)+"\n            ")]):e("span",[t._v("нет")])])]):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"title"},[n("b",[this._v("1.")]),this._v(" Вводим данные автомата:\n    ")])},function(){var t=this.$createElement,n=this._self._c||t;return n("tr",[n("th",[this._v("Начало")]),this._v(" "),n("th",[this._v("Стимул")]),this._v(" "),n("th",[this._v("Реакция")]),this._v(" "),n("th",[this._v("Конец")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"title"},[n("b",[this._v("2.")]),this._v(" Сверяем с графом из условия:\n    ")])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"title"},[n("b",[this._v("3.")]),this._v(" Записываем ответы:\n    ")])}]},q=e("VU/8")(I,j,!1,function(t){e("5Niv"),e("eWeT")},"data-v-0805c575",null).exports,F={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]},T=e("VU/8")({name:"Branches"},F,!1,function(t){e("BA3Q")},"data-v-dcab5f20",null).exports,$=/[a-zA-Z0-9]/,O=function(t){t=t.replace(" ","").replace("\t","");var n=[],e="",i=[];try{for(var s=0;s<t.length;s++)if("("===t[s])""!==e&&(0!==i.length?i[i.length-1].push(e):n.push(e),e=""),i.push([]);else if($.test(t[s]))e+=t[s];else if("|"===t[s])""!==e&&(i[i.length-1].push(e),e="");else if(")"===t[s]){if(0!==i.length){""!==e&&(i[i.length-1].push(e),e="");var r=i.pop();r.length>1?n.push({"|":r}):n.push(r[0])}}else if(-1!=="*+?".indexOf(t[s])){var a=n.pop(),h={};h[t[s]]=a,n.push(h)}""!==e&&n.push(e)}catch(t){return[]}return n},W={name:"Regex",data:function(){return{regexInput:"(A)? B (C0|C1|C2) (D)* (E0|E1|E2) F (G0|G1)"}},computed:{parsedReges:function(){return O(this.regexInput)},coveringWords:function(){var t=this;return h(this.parsedReges).map(function(n){return function(t,n){return n.map(function(n,e){return function(t,n){return t.hasOwnProperty("?")?1===n?t["?"]:"":t.hasOwnProperty("*")?t["*"].repeat(n):t.hasOwnProperty("+")?t["+"].repeat(n+1):"string"==typeof t?t:t.hasOwnProperty("|")?t["|"][n]:""}(t[e],n)})}(t.parsedReges,n)})}}},D={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"regex_root"}},[e("div",{attrs:{id:"regex-input"}},[t._m(0),t._v(" "),e("el-input",{attrs:{placeholder:"(A)? B (C0|C1|C2) (D)* (E0|E1|E2) F (G0|G1)"},model:{value:t.regexInput,callback:function(n){t.regexInput=n},expression:"regexInput"}})],1),t._v(" "),e("div",{attrs:{id:"regex-result"}},[e("div",{staticClass:"title"},[t._v("\n            2. Результат:\n        ")]),t._v(" "),t.parsedReges.length?e("table",{attrs:{id:"regex-result_table",cellspacing:"0",border:"",bordercolor:"black"}},[e("tr",[e("th",[t._v("#")]),t._v(" "),t._l(t.parsedReges.length,function(n){return e("th",[t._v(t._s(n))])})],2),t._v(" "),t._l(t.coveringWords,function(n,i){return e("tr",[e("td",{attrs:{align:"center"}},[t._v(t._s(i+1))]),t._v(" "),t._l(n,function(n){return e("td",{attrs:{align:"center"}},[t._v(t._s(n))])})],2)})],2):e("div",{staticClass:"invalid-regex"},[t._v("\n            Выражение не распознано\n        ")])]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"title"},[this._v("\n            1. Введите правую сторону правила (после знака "),n("span",{staticClass:"highlight"},[this._v("::=")]),this._v(")\n        ")])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"title"},[this._v("\n            3. Выкрикнуть на всю аудиторию «ПИ — шарага». Чем громче выкрикните, тем больше ПИ — шарага.\n        ")])])}]},P=e("VU/8")(W,D,!1,function(t){e("NX7+"),e("vYFq")},"data-v-019bb8db",null).exports,V={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"domen_root"}},[n("h1",[this._v("Чё-то про графики")]),this._v(" "),n("p",[n("b",[this._v("Итак, перед нами задача №2. Это задание вам придётся сделать ручками.")]),n("br"),n("br"),this._v("\n        Для приведенных требований к функции определить области,\n        соответствующие различным вариантам поведения функции, границы этих\n        областей и набор тестовых данных (точки), необходимый для проверки\n        описанного поведения при доменном тестировании. Учитывайте, что машинные\n        целые числа ограничены значениями MIN = -2"),n("sup",[this._v("31")]),this._v(" и MAX = 2"),n("sup",[this._v("31")]),this._v(" - 1.\n        "),n("br"),this._v(" "),n("br"),this._v("\n        Функция зависит от двух 32-битных целочисленных параметров X и Y."),n("br"),this._v("\n        Если X ≥ 2*Y + 2, возвращается результат X.\n        Иначе возвращается 0.\n        "),n("br"),this._v(" "),n("br"),this._v("\n        В таблице ниже укажите условия принадлежности точки каждой из областей\n        и каждой из их границ. Укажите в третьем столбце границы данной области с помощью\n        латинских букв из первого столбца, идентифицирующих области или границы."),n("br"),this._v("\n        Изобразите получающуюся картину после таблицы. Принадлежность границы области\n        показывайте штрихами от нее в сторону области.\n        "),n("br"),this._v(" "),n("br"),this._v("\n        ---\n        "),n("br"),this._v(" "),n("br"),this._v("\n        Итак, нужно нарисовать график, как в школке и\n        поотмечать области и точки на нём. Одно но - мы работаем в диапазоне чисел от MIN_INT до MAX_INT.\n        Это означает, что значение какого-либо выражения при выходе за эти границы циклически возвращается\n        к своему максимальному/минимальному (в зависимости от того, в каком направлении значение вышло за границы)\n        значению плюс сдвиг на который значение вылезло за пределы.\n        "),n("br"),this._v("Т.е., например Х = 2"),n("sup",[this._v("31")]),this._v(" ->\n        X = -2"),n("sup",[this._v("31")]),this._v(" "),n("br"),n("br"),this._v("\n        Что это означает для нашей задачи. Рассмотрим пример поприятнее (без всяких INT_MAX):\n        пусть у нас дан диапазон значений [-6;6) и неравенство X <= 2*Y. Если бы не было никаких ограничений\n        допустимых\n        значений, график для неравенства бы выглядел так:\n        "),n("img",{staticClass:"illustration",attrs:{src:e("z45w")}}),this._v("\n        Но поскольку вне пределов [-6;6) ничего лежать не может, то в какой-то момент значение выражения\n        Y*2 выйдет за этот диапазон и циклически вернется в начало. Если быть точнее: например, зафиксируем Х = -2\n        и будем увеличивать Y. Ровно до Y = 3 значение выражения X <= 2*Y будет истинным. Как только Y = 3 значение\n        выражения\n        Y*2 становится равным -6 (т.к. 2*3 = 6 уже не входит в диапазон [-6;6), значит вычитаем длину цикла,\n        равную 12 -> 6 - 12 = -6), и неравенство становится ложным. При Y ∈ [3;5) неравенство продолжит быть ложным,\n        а при Y = 5 (2*5 - 12 = -2 = X) верно выражение X = 2 * Y. Значит точка (-2, 5) принадлежит другой прямой,\n        разделяющей плоскость на области. Теперь зафиксирум Х = -4. Тогда Y = 4 (2*4 - 12 = -4 = X) снова даст точку\n        лежащую\n        на этой разделяющей прямой. Соединим получившиеся точки прямой:\n        "),n("img",{staticClass:"illustration",attrs:{src:e("PZk/")}}),this._v('\n        Снизу "основной" прямой будет та же картина:\n        '),n("img",{staticClass:"illustration",attrs:{src:e("N+rj")}}),this._v("\n        Можно заметить, что разделяющая прямая при выходе за пределы допустимых значений как бы циклически\n        продолжается с начала отсчёта. И закрасим теперь области, где значение неравенство X<= 2*Y даёт true.\n        Штрихом обозначается\n        принадлежность границы области.\n        "),n("img",{staticClass:"illustration",attrs:{src:e("38cB")}}),this._v("\n        Теперь вернёмся к заданию из экзамена прошлых лет.\n        "),n("img",{staticClass:"illustration",attrs:{src:e("9aiA")}}),this._v("\n        Здесь буквами отмечены разные области и границы. Это понадобится для заполнения таблицы (не факт, что\n        таблица\n        вообще будет, потому что на консультации о не не было речи). Высчитывать, где начинается циклический переход\n        тоже возможно не нужно будет делать, но я на всякий случай отметила на графике. По идее, должно быть\n        несложно посчитать, где он будет начинаться. Например, сверху основной линии X перестаёт быть <= 2*Y + 2\n        когда выражение 2*Y + 2 выходит за пределы своих возможных значений, т.е. становится = 2"),n("sup",[this._v("31")]),this._v(" =\n        -2"),n("sup",[this._v("31")]),n("br"),this._v("\n        Найти такое Y несложно:"),n("br"),n("br"),this._v("\n        2*Y + 2 = 2"),n("sup",[this._v("31")]),n("br"),this._v("\n        Y + 1 = 2"),n("sup",[this._v("30")]),n("br"),this._v("\n        Y = 2"),n("sup",[this._v("30")]),this._v(" - 1"),n("br"),n("br"),this._v("\n        Таким образом, граница Y = 2"),n("sup",[this._v("30")]),this._v(" - 1 будет принадлежать значению true всего неравенства.\n        "),n("br"),n("br"),this._v("\n        Снизу почти то же самое, только ищем момент, когда выражение 2*Y + 2 принимает свое минимально возможное\n        значение (ищем не выход за предел, потому что мы хотим все такие границы сделать одинакового вида, т.е.\n        принадлежащими области выше их):"),n("br"),n("br"),this._v("\n        2*Y + 2 = -2"),n("sup",[this._v("31")]),n("br"),this._v("\n        Y = -2"),n("sup",[this._v("30")]),this._v(" - 1"),n("br"),n("br"),this._v('\n        Затем нужно на графике отметить точки, так, чтобы у каждой области и каждой границы было по точке.\n        Если неравенство строгое, то точки надо отмечать не на самой границе, а рядом. Но у нас неравенство\n        нестрогое. Кроме того, Кулямин сказал, что надо отметить "угловые" точки.'),n("br"),n("br"),this._v(" "),n("b",[this._v("Еще важное замечание: нужно обратить внимание на то, что возвращает код из задания!")]),n("br"),this._v("\n        В нашем случае код возвращает X если неравенство верно и 0, если неравенство неверно. Прямую Х = 0 нужно\n        исключить из графика, потому что точки лежащие на нем не позволяют однозначно идентифицировать, какая ветка\n        сработала.\n        Заполним таблицу:\n    ")]),this._v(" "),n("table",{staticClass:"answer-table"},[n("tr",[n("td",[this._v("Области и границы")]),this._v(" "),n("td",[this._v("Условия")]),this._v(" "),n("td",[this._v("Границы")])]),this._v(" "),n("tr",[n("td",[this._v("A")]),this._v(" "),n("td",[this._v("2"),n("sup",[this._v("31")]),this._v(" - 1 ≥ Y ≥ 2"),n("sup",[this._v("30")]),this._v(" - 1, X < 2*Y + 2")]),this._v(" "),n("td",[this._v("C")])]),this._v(" "),n("tr",[n("td",[this._v("B")]),this._v(" "),n("td",[this._v("2"),n("sup",[this._v("31")]),this._v(" - 1 ≥ Y ≥ 2"),n("sup",[this._v("30")]),this._v(" - 1, X ≥ 2*Y + 2")]),this._v(" "),n("td",[this._v("C, D")])]),this._v(" "),n("tr",[n("td",[this._v("C")]),this._v(" "),n("td",[this._v("2"),n("sup",[this._v("31")]),this._v(" - 1 ≥ Y ≥ 2"),n("sup",[this._v("30")]),this._v(" - 1, X = 2*Y + 2")]),this._v(" "),n("td",[this._v("-")])]),this._v(" "),n("tr",[n("td",[this._v("D")]),this._v(" "),n("td",[this._v("Y = 2"),n("sup",[this._v("30")]),this._v(" - 1")]),this._v(" "),n("td",[this._v("-")])]),this._v(" "),n("tr",[n("td",[this._v("E")]),this._v(" "),n("td",[this._v("2"),n("sup",[this._v("30")]),this._v(" - 1 > Y ≥ -2"),n("sup",[this._v("30")]),this._v(" - 1, X < 2*Y + 2")]),this._v(" "),n("td",[this._v("D, G")])]),this._v(" "),n("tr",[n("td",[this._v("F")]),this._v(" "),n("td",[this._v("2"),n("sup",[this._v("30")]),this._v(" - 1 > Y ≥ -2"),n("sup",[this._v("30")]),this._v(" - 1, X ≥ 2*Y + 2")]),this._v(" "),n("td",[this._v("G, H")])]),this._v(" "),n("tr",[n("td",[this._v("G")]),this._v(" "),n("td",[this._v("2"),n("sup",[this._v("30")]),this._v(" - 1 > Y ≥ -2"),n("sup",[this._v("30")]),this._v(" - 1, X = 2*Y + 2")]),this._v(" "),n("td",[this._v("-")])]),this._v(" "),n("tr",[n("td",[this._v("H")]),this._v(" "),n("td",[this._v("Y = 2"),n("sup",[this._v("30")]),this._v(" - 1")]),this._v(" "),n("td",[this._v("-")])]),this._v(" "),n("tr",[n("td",[this._v("I")]),this._v(" "),n("td",[this._v("-2"),n("sup",[this._v("30")]),this._v(" - 1 > Y ≥ -2"),n("sup",[this._v("31")]),this._v(", X < 2*Y + 2")]),this._v(" "),n("td",[this._v("H, K")])]),this._v(" "),n("tr",[n("td",[this._v("J")]),this._v(" "),n("td",[this._v("-2"),n("sup",[this._v("30")]),this._v(" - 1 > Y ≥ -2"),n("sup",[this._v("31")]),this._v(", X ≥ 2*Y + 2")]),this._v(" "),n("td",[this._v("K")])]),this._v(" "),n("tr",[n("td",[this._v("K")]),this._v(" "),n("td",[this._v("-2"),n("sup",[this._v("30")]),this._v(" - 1 > Y ≥ -2"),n("sup",[this._v("31")]),this._v(", X = 2*Y + 2")]),this._v(" "),n("td",[this._v("-")])])]),this._v("\n\n    Также напишите где-нибудь, что тесты не должны попадать на прямую Х = 0.\n    "),n("br"),this._v(" "),n("br")])}]},B=e("VU/8")({name:"DomenTesting"},V,!1,function(t){e("2kkN"),e("wcH6")},"data-v-7947c082",null).exports,U={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"grammar_root"}},[n("h1",[this._v("Чё-то про грамматику")]),this._v("\n    Для этого задания придется качать отдельную программу:"),n("br"),n("br"),this._v(" "),n("a",{attrs:{href:"https://yadi.sk/d/gIAO8ifA3QvcXH"}},[this._v("Для маководов")]),n("br"),this._v(" "),n("a",{attrs:{href:"https://yadi.sk/d/0SHFnd2p3QvhG5"}},[this._v("Для шиндоводов")]),n("br"),this._v("\n    Линуксоиды, просьба понять и простить."),n("br"),n("br"),this._v(" "),n("br"),this._v("\n    Итак, перед нами задание с грамматическим правилом."),n("br"),this._v("\n    Например:"),n("br"),this._v("\n    Word ::= (A)? B (C0|C1|C2) (D)* (E0|E1|E2) F (G0|G1)"),n("br"),this._v("\n    Надеюсь, все более-менее помнят, что такое регулярные выражения."),n("br"),n("br"),this._v(" "),n("b",[this._v("Итак, что же нужно сделать:")]),n("br"),this._v(" "),n("div",{staticClass:"title"},[n("b",[this._v("1.")]),this._v(' Посчитать количество скобок в выражении. Отдельный элемент типа "B" тоже считается скобками. В\n        нашем примере таких штуковин 7\n    ')]),this._v(" "),n("div",{staticClass:"title"},[n("b",[this._v("2.")]),this._v(" Запускаем программу, она у нас запросит количество столбцов. Пишем туда то, что мы только что\n        посчитали, то бишь 7.\n    ")]),this._v(" "),n("div",{staticClass:"title"},[n("b",[this._v("3.")]),this._v(' Далее для каждого столбца нужно посчитать какой количество вариантов представляет собой каждая\n        скобка. Т.е. скобка "(А)?" может обозначать либо "" либо "А", то есть вариантов 2.\n    ')]),this._v(" "),n("div",{staticClass:"title"},[n("b",[this._v("4.")]),this._v(" Все эти количества подаем на вход программе. В нашем случае ей нужно будет написать:\n    ")]),this._v("\n    2 1 3 3 3 1 2"),n("br"),n("br"),this._v(" "),n("b",[this._v("Важно!")]),n("br"),this._v(" "),n("b",[this._v("(X)* = ( |X|XX)")]),this._v(" - т.е. возможных вариантов 3 (пустота, один Х или два Х) - это дано по условию."),n("br"),this._v(" "),n("b",[this._v("(X)+ = (X|XX|XXX)")]),this._v(" - возможных вариантов 3."),n("br"),n("br"),this._v(" "),n("div",{staticClass:"title"},[n("b",[this._v("5.")]),this._v(" Программа выдаст заполненную матрицу. Заменяя на соответвующие символы, переписываем результат в\n        таблицу.\n        "),n("br"),this._v("\n        Цифра обозначает порядковый номер варианта в скобке."),n("br"),this._v('\n        Например, если у нас было (X)*, 0 - "" (пустота), 1 - "X", 2 - "XX"'),n("br"),this._v('\n        (X0|X1|X2): 0 - "X0", 1 - "X1", 2 - "X2"'),n("br"),this._v('\n        Там где скобка представляет собой один вариант, таблица уже по идее должна быть заполнена за вас.\n        "_" в матрице обозначает что можно взять любой символ. В ответе можно так и оставить и сделать сноску, что\n        "_" ну или, например, "*" обозначает любой символ :)\n    ')]),this._v("\n    В нашем примере получилось следующее:\n    "),n("img",{staticClass:"illustration",attrs:{src:e("egvi")}}),this._v("\n    Первым словом (первой строкой в таблице в бланке будет следующее:\n    "),n("table",[n("tr",[n("td"),this._v(" "),n("td",[this._v("B")]),this._v(" "),n("td",[this._v("C1")]),this._v(" "),n("td"),this._v(" "),n("td",[this._v("E2")]),this._v(" "),n("td",[this._v("F")]),this._v(" "),n("td",[this._v("G0")])])]),this._v(" "),n("div",{staticClass:"title"},[n("b",[this._v("6.")]),this._v(" Выкрикнуть на всю аудиторию «ПИ — шарага». Чем громче выкрикните, тем больше ПИ — шарага.\n    ")])])}]},H=e("VU/8")({name:"Grammar"},U,!1,function(t){e("+MhM"),e("lK6w")},"data-v-5f8419e9",null).exports;v.default.use(S.a);var L=new S.a({routes:[{path:"/",redirect:{name:"StateMachine"}},{path:"/statemachine",name:"StateMachine",component:q},{path:"/domentesting",name:"DomenTesting",component:B},{path:"/grammar",name:"Grammar",component:H},{path:"/branches",name:"Branches",component:T},{path:"/regex",name:"Regex",component:P}]});document.documentElement.style.setProperty("--main-color","#"+Math.random().toString(16).substr(-6)),v.default.use(_.a),v.default.use(c.a,{id:47116071,router:L,env:"production"}),v.default.config.productionTip=!1,new v.default({el:"#app",router:L,template:"<App/>",components:{App:G}})},"NX7+":function(t,n){},"PZk/":function(t,n,e){t.exports=e.p+"static/img/domen1.ebcc025.jpg"},"W2+8":function(t,n){},WLzF:function(t,n){},XOPA:function(t,n){},d1FW:function(t,n,e){t.exports=e.p+"static/img/deal.1355f21.png"},eWeT:function(t,n){},egvi:function(t,n,e){t.exports=e.p+"static/img/matrix.0cd2302.jpg"},lK6w:function(t,n){},tvR6:function(t,n){},uMhA:function(t,n){},vYFq:function(t,n){},wcH6:function(t,n){},z45w:function(t,n,e){t.exports=e.p+"static/img/domen0.e662bfa.jpg"}},["NHnr"]);