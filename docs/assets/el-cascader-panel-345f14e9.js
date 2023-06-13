import{a as pe,D as ue,at as Ca,_ as $e,B as fe,au as Je,av as Xe,a6 as Na,c as Ye,e as g,l as W,o as f,I,M as G,m as x,S as ve,n as _,q as J,L as T,T as ce,Q as ie,F as Qe,r as S,an as me,ak as Ea,al as te,N as wa,aw as _e,ax as Ke,aa as $a,b as ea,d as ge,ay as Sa,az as Ta,p as Va,af as La,w as ne,aA as Pa,a3 as aa,z as re,aB as ta,E as O,aC as ye,aD as na,aE as Da,aF as Ma,aG as _a,aH as Ia,aI as Fa,aJ as za,aK as Ba,a0 as xa,ah as be,u as d,W as Ha,aL as Aa,C as Ka,A as Oe,aM as Oa,aN as qa,aO as Ra,ai as qe,j as Ua}from"./index-4e66693d.js";import{E as sa}from"./el-tag-3aed28f9.js";import{b as Wa,c as ja,i as ke,C as Za}from"./el-table-column-1b23615c.js";import{E as Ga}from"./index-d1b0e0d2.js";import{c as Re,t as Ja,E as Ue}from"./index-88ab3c4a.js";import{U as Ee,C as we,a as Xa,u as Ya}from"./el-button-bad787b3.js";import{u as We,c as je}from"./el-switch-0bad3d39.js";import{s as Qa}from"./scroll-45713807.js";import{c as la}from"./cloneDeep-4dfd5273.js";import{a as et,i as at}from"./el-input-b637a84d.js";import{d as tt}from"./debounce-562d200a.js";var nt=1/0;function st(e){var t=e==null?0:e.length;return t?Wa(e,nt):[]}const lt=()=>Math.floor(Math.random()*1e4);var ot=pe({name:"NodeContent",setup(){return{ns:ue("cascader-node")}},render(){const{ns:e}=this,{node:t,panel:s}=this.$parent,{data:n,label:o}=t,{renderLabelFn:p}=s;return Ca("span",{class:e.e("label")},p?p({node:t,data:n}):o)}});const Fe=Symbol(),it=pe({name:"ElCascaderNode",components:{ElCheckbox:ja,ElRadio:Ga,NodeContent:ot,ElIcon:fe,Check:Je,Loading:Xe,ArrowRight:Na},props:{node:{type:Object,required:!0},menuId:String},emits:["expand"],setup(e,{emit:t}){const s=Ye(Fe),n=ue("cascader-node"),o=g(()=>s.isHoverMenu),p=g(()=>s.config.multiple),c=g(()=>s.config.checkStrictly),v=g(()=>{var b;return(b=s.checkedNodes[0])==null?void 0:b.uid}),u=g(()=>e.node.isDisabled),k=g(()=>e.node.isLeaf),y=g(()=>c.value&&!k.value||!u.value),L=g(()=>F(s.expandingNode)),M=g(()=>c.value&&s.checkedNodes.some(F)),F=b=>{var V;const{level:z,uid:ee}=e.node;return((V=b==null?void 0:b.pathNodes[z-1])==null?void 0:V.uid)===ee},A=()=>{L.value||s.expandNode(e.node)},X=b=>{const{node:V}=e;b!==V.checked&&s.handleCheckChange(V,b)},$=()=>{s.lazyLoad(e.node,()=>{k.value||A()})},q=b=>{o.value&&(P(),!k.value&&t("expand",b))},P=()=>{const{node:b}=e;!y.value||b.loading||(b.loaded?A():$())},j=()=>{o.value&&!k.value||(k.value&&!u.value&&!c.value&&!p.value?R(!0):P())},H=b=>{c.value?(X(b),e.node.loaded&&A()):R(b)},R=b=>{e.node.loaded?(X(b),!c.value&&A()):$()};return{panel:s,isHoverMenu:o,multiple:p,checkStrictly:c,checkedNodeId:v,isDisabled:u,isLeaf:k,expandable:y,inExpandingPath:L,inCheckedPath:M,ns:n,handleHoverExpand:q,handleExpand:P,handleClick:j,handleCheck:R,handleSelectCheck:H}}}),rt=["id","aria-haspopup","aria-owns","aria-expanded","tabindex"],ct=ie("span",null,null,-1);function ut(e,t,s,n,o,p){const c=W("el-checkbox"),v=W("el-radio"),u=W("check"),k=W("el-icon"),y=W("node-content"),L=W("loading"),M=W("arrow-right");return f(),I("li",{id:`${e.menuId}-${e.node.uid}`,role:"menuitem","aria-haspopup":!e.isLeaf,"aria-owns":e.isLeaf?null:e.menuId,"aria-expanded":e.inExpandingPath,tabindex:e.expandable?-1:void 0,class:T([e.ns.b(),e.ns.is("selectable",e.checkStrictly),e.ns.is("active",e.node.checked),e.ns.is("disabled",!e.expandable),e.inExpandingPath&&"in-active-path",e.inCheckedPath&&"in-checked-path"]),onMouseenter:t[2]||(t[2]=(...F)=>e.handleHoverExpand&&e.handleHoverExpand(...F)),onFocus:t[3]||(t[3]=(...F)=>e.handleHoverExpand&&e.handleHoverExpand(...F)),onClick:t[4]||(t[4]=(...F)=>e.handleClick&&e.handleClick(...F))},[G(" prefix "),e.multiple?(f(),x(c,{key:0,"model-value":e.node.checked,indeterminate:e.node.indeterminate,disabled:e.isDisabled,onClick:t[0]||(t[0]=ve(()=>{},["stop"])),"onUpdate:modelValue":e.handleSelectCheck},null,8,["model-value","indeterminate","disabled","onUpdate:modelValue"])):e.checkStrictly?(f(),x(v,{key:1,"model-value":e.checkedNodeId,label:e.node.uid,disabled:e.isDisabled,"onUpdate:modelValue":e.handleSelectCheck,onClick:t[1]||(t[1]=ve(()=>{},["stop"]))},{default:_(()=>[G(`
        Add an empty element to avoid render label,
        do not use empty fragment here for https://github.com/vuejs/vue-next/pull/2485
      `),ct]),_:1},8,["model-value","label","disabled","onUpdate:modelValue"])):e.isLeaf&&e.node.checked?(f(),x(k,{key:2,class:T(e.ns.e("prefix"))},{default:_(()=>[J(u)]),_:1},8,["class"])):G("v-if",!0),G(" content "),J(y),G(" postfix "),e.isLeaf?G("v-if",!0):(f(),I(ce,{key:3},[e.node.loading?(f(),x(k,{key:0,class:T([e.ns.is("loading"),e.ns.e("postfix")])},{default:_(()=>[J(L)]),_:1},8,["class"])):(f(),x(k,{key:1,class:T(["arrow-right",e.ns.e("postfix")])},{default:_(()=>[J(M)]),_:1},8,["class"]))],64))],42,rt)}var dt=$e(it,[["render",ut],["__file","/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/node.vue"]]);const pt=pe({name:"ElCascaderMenu",components:{Loading:Xe,ElIcon:fe,ElScrollbar:sa,ElCascaderNode:dt},props:{nodes:{type:Array,required:!0},index:{type:Number,required:!0}},setup(e){const t=wa(),s=ue("cascader-menu"),{t:n}=Qe(),o=lt();let p=null,c=null;const v=Ye(Fe),u=S(null),k=g(()=>!e.nodes.length),y=g(()=>!v.initialLoaded),L=g(()=>`cascader-menu-${o}-${e.index}`),M=$=>{p=$.target},F=$=>{if(!(!v.isHoverMenu||!p||!u.value))if(p.contains($.target)){A();const q=t.vnode.el,{left:P}=q.getBoundingClientRect(),{offsetWidth:j,offsetHeight:H}=q,R=$.clientX-P,b=p.offsetTop,V=b+p.offsetHeight;u.value.innerHTML=`
          <path style="pointer-events: auto;" fill="transparent" d="M${R} ${b} L${j} 0 V${b} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${R} ${V} L${j} ${H} V${V} Z" />
        `}else c||(c=window.setTimeout(X,v.config.hoverThreshold))},A=()=>{c&&(clearTimeout(c),c=null)},X=()=>{u.value&&(u.value.innerHTML="",A())};return{ns:s,panel:v,hoverZone:u,isEmpty:k,isLoading:y,menuId:L,t:n,handleExpand:M,handleMouseMove:F,clearHoverZone:X}}});function ht(e,t,s,n,o,p){const c=W("el-cascader-node"),v=W("loading"),u=W("el-icon"),k=W("el-scrollbar");return f(),x(k,{key:e.menuId,tag:"ul",role:"menu",class:T(e.ns.b()),"wrap-class":e.ns.e("wrap"),"view-class":[e.ns.e("list"),e.ns.is("empty",e.isEmpty)],onMousemove:e.handleMouseMove,onMouseleave:e.clearHoverZone},{default:_(()=>{var y;return[(f(!0),I(ce,null,me(e.nodes,L=>(f(),x(c,{key:L.uid,node:L,"menu-id":e.menuId,onExpand:e.handleExpand},null,8,["node","menu-id","onExpand"]))),128)),e.isLoading?(f(),I("div",{key:0,class:T(e.ns.e("empty-text"))},[J(u,{size:"14",class:T(e.ns.is("loading"))},{default:_(()=>[J(v)]),_:1},8,["class"]),Ea(" "+te(e.t("el.cascader.loading")),1)],2)):e.isEmpty?(f(),I("div",{key:1,class:T(e.ns.e("empty-text"))},te(e.t("el.cascader.noData")),3)):(y=e.panel)!=null&&y.isHoverMenu?(f(),I("svg",{key:2,ref:"hoverZone",class:T(e.ns.e("hover-zone"))},null,2)):G("v-if",!0)]}),_:1},8,["class","wrap-class","view-class","onMousemove","onMouseleave"])}var ft=$e(pt,[["render",ht],["__file","/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/menu.vue"]]);let vt=0;const mt=e=>{const t=[e];let{parent:s}=e;for(;s;)t.unshift(s),s=s.parent;return t};class de{constructor(t,s,n,o=!1){this.data=t,this.config=s,this.parent=n,this.root=o,this.uid=vt++,this.checked=!1,this.indeterminate=!1,this.loading=!1;const{value:p,label:c,children:v}=s,u=t[v],k=mt(this);this.level=o?0:n?n.level+1:1,this.value=t[p],this.label=t[c],this.pathNodes=k,this.pathValues=k.map(y=>y.value),this.pathLabels=k.map(y=>y.label),this.childrenData=u,this.children=(u||[]).map(y=>new de(y,s,this)),this.loaded=!s.lazy||this.isLeaf||!_e(u)}get isDisabled(){const{data:t,parent:s,config:n}=this,{disabled:o,checkStrictly:p}=n;return(Ke(o)?o(t,this):!!t[o])||!p&&(s==null?void 0:s.isDisabled)}get isLeaf(){const{data:t,config:s,childrenData:n,loaded:o}=this,{lazy:p,leaf:c}=s,v=Ke(c)?c(t,this):t[c];return $a(v)?p&&!o?!1:!(Array.isArray(n)&&n.length):!!v}get valueByOption(){return this.config.emitPath?this.pathValues:this.value}appendChild(t){const{childrenData:s,children:n}=this,o=new de(t,this.config,this);return Array.isArray(s)?s.push(t):this.childrenData=[t],n.push(o),o}calcText(t,s){const n=t?this.pathLabels.join(s):this.label;return this.text=n,n}broadcast(t,...s){const n=`onParent${Re(t)}`;this.children.forEach(o=>{o&&(o.broadcast(t,...s),o[n]&&o[n](...s))})}emit(t,...s){const{parent:n}=this,o=`onChild${Re(t)}`;n&&(n[o]&&n[o](...s),n.emit(t,...s))}onParentCheck(t){this.isDisabled||this.setCheckState(t)}onChildCheck(){const{children:t}=this,s=t.filter(o=>!o.isDisabled),n=s.length?s.every(o=>o.checked):!1;this.setCheckState(n)}setCheckState(t){const s=this.children.length,n=this.children.reduce((o,p)=>{const c=p.checked?1:p.indeterminate?.5:0;return o+c},0);this.checked=this.loaded&&this.children.filter(o=>!o.isDisabled).every(o=>o.loaded&&o.checked)&&t,this.indeterminate=this.loaded&&n!==s&&n>0}doCheck(t){if(this.checked===t)return;const{checkStrictly:s,multiple:n}=this.config;s||!n?this.checked=t:(this.broadcast("check",t),this.setCheckState(t),this.emit("check"))}}const Ie=(e,t)=>e.reduce((s,n)=>(n.isLeaf?s.push(n):(!t&&s.push(n),s=s.concat(Ie(n.children,t))),s),[]);class Ze{constructor(t,s){this.config=s;const n=(t||[]).map(o=>new de(o,this.config));this.nodes=n,this.allNodes=Ie(n,!1),this.leafNodes=Ie(n,!0)}getNodes(){return this.nodes}getFlattedNodes(t){return t?this.leafNodes:this.allNodes}appendNode(t,s){const n=s?s.appendChild(t):new de(t,this.config);s||this.nodes.push(n),this.allNodes.push(n),n.isLeaf&&this.leafNodes.push(n)}appendNodes(t,s){t.forEach(n=>this.appendNode(n,s))}getNodeByValue(t,s=!1){return!t&&t!==0?null:this.getFlattedNodes(s).find(o=>ke(o.value,t)||ke(o.pathValues,t))||null}getSameNode(t){return t&&this.getFlattedNodes(!1).find(({value:n,level:o})=>ke(t.value,n)&&t.level===o)||null}}const oa=ea({modelValue:{type:ge([Number,String,Array])},options:{type:ge(Array),default:()=>[]},props:{type:ge(Object),default:()=>({})}}),gt={expandTrigger:"click",multiple:!1,checkStrictly:!1,emitPath:!0,lazy:!1,lazyLoad:Sa,value:"value",label:"label",children:"children",leaf:"leaf",disabled:"disabled",hoverThreshold:500},kt=e=>g(()=>({...gt,...e.props})),Ge=e=>{if(!e)return 0;const t=e.id.split("-");return Number(t[t.length-2])},bt=e=>{if(!e)return;const t=e.querySelector("input");t?t.click():Ta(e)&&e.click()},yt=(e,t)=>{const s=t.slice(0),n=s.map(p=>p.uid),o=e.reduce((p,c)=>{const v=n.indexOf(c.uid);return v>-1&&(p.push(c),s.splice(v,1),n.splice(v,1)),p},[]);return o.push(...s),o},Ct=pe({name:"ElCascaderPanel",components:{ElCascaderMenu:ft},props:{...oa,border:{type:Boolean,default:!0},renderLabel:Function},emits:[Ee,we,"close","expand-change"],setup(e,{emit:t,slots:s}){let n=!1;const o=ue("cascader"),p=kt(e);let c=null;const v=S(!0),u=S([]),k=S(null),y=S([]),L=S(null),M=S([]),F=g(()=>p.value.expandTrigger==="hover"),A=g(()=>e.renderLabel||s.default),X=()=>{const{options:r}=e,h=p.value;n=!1,c=new Ze(r,h),y.value=[c.getNodes()],h.lazy&&_e(e.options)?(v.value=!1,$(void 0,m=>{m&&(c=new Ze(m,h),y.value=[c.getNodes()]),v.value=!0,z(!1,!0)})):z(!1,!0)},$=(r,h)=>{const m=p.value;r=r||new de({},m,void 0,!0),r.loading=!0;const E=C=>{const w=r,D=w.root?null:w;C&&(c==null||c.appendNodes(C,D)),w.loading=!1,w.loaded=!0,w.childrenData=w.childrenData||[],h&&h(C)};m.lazyLoad(r,E)},q=(r,h)=>{var m;const{level:E}=r,C=y.value.slice(0,E);let w;r.isLeaf?w=r.pathNodes[E-2]:(w=r,C.push(r.children)),((m=L.value)==null?void 0:m.uid)!==(w==null?void 0:w.uid)&&(L.value=r,y.value=C,!h&&t("expand-change",(r==null?void 0:r.pathValues)||[]))},P=(r,h,m=!0)=>{const{checkStrictly:E,multiple:C}=p.value,w=M.value[0];n=!0,!C&&(w==null||w.doCheck(!1)),r.doCheck(h),V(),m&&!C&&!E&&t("close"),!m&&!C&&!E&&j(r)},j=r=>{r&&(r=r.parent,j(r),r&&q(r))},H=r=>c==null?void 0:c.getFlattedNodes(r),R=r=>{var h;return(h=H(r))==null?void 0:h.filter(m=>m.checked!==!1)},b=()=>{M.value.forEach(r=>r.doCheck(!1)),V(),y.value=y.value.slice(0,1),L.value=null,t("expand-change",[])},V=()=>{var r;const{checkStrictly:h,multiple:m}=p.value,E=M.value,C=R(!h),w=yt(E,C),D=w.map(B=>B.valueByOption);M.value=w,k.value=m?D:(r=D[0])!=null?r:null},z=(r=!1,h=!1)=>{const{modelValue:m}=e,{lazy:E,multiple:C,checkStrictly:w}=p.value,D=!w;if(!(!v.value||n||!h&&ke(m,k.value)))if(E&&!r){const ae=We(st(je(m))).map(K=>c==null?void 0:c.getNodeByValue(K)).filter(K=>!!K&&!K.loaded&&!K.loading);ae.length?ae.forEach(K=>{$(K,()=>z(!1,h))}):z(!0,h)}else{const B=C?je(m):[m],ae=We(B.map(K=>c==null?void 0:c.getNodeByValue(K,D)));ee(ae,h),k.value=la(m)}},ee=(r,h=!0)=>{const{checkStrictly:m}=p.value,E=M.value,C=r.filter(B=>!!B&&(m||B.isLeaf)),w=c==null?void 0:c.getSameNode(L.value),D=h&&w||C[0];D?D.pathNodes.forEach(B=>q(B,!0)):L.value=null,E.forEach(B=>B.doCheck(!1)),C.forEach(B=>B.doCheck(!0)),M.value=C,re(se)},se=()=>{ta&&u.value.forEach(r=>{const h=r==null?void 0:r.$el;if(h){const m=h.querySelector(`.${o.namespace.value}-scrollbar__wrap`),E=h.querySelector(`.${o.b("node")}.${o.is("active")}`)||h.querySelector(`.${o.b("node")}.in-active-path`);Qa(m,E)}})},le=r=>{const h=r.target,{code:m}=r;switch(m){case O.up:case O.down:{r.preventDefault();const E=m===O.up?-1:1;ye(na(h,E,`.${o.b("node")}[tabindex="-1"]`));break}case O.left:{r.preventDefault();const E=u.value[Ge(h)-1],C=E==null?void 0:E.$el.querySelector(`.${o.b("node")}[aria-expanded="true"]`);ye(C);break}case O.right:{r.preventDefault();const E=u.value[Ge(h)+1],C=E==null?void 0:E.$el.querySelector(`.${o.b("node")}[tabindex="-1"]`);ye(C);break}case O.enter:bt(h);break}};return Va(Fe,La({config:p,expandingNode:L,checkedNodes:M,isHoverMenu:F,initialLoaded:v,renderLabelFn:A,lazyLoad:$,expandNode:q,handleCheckChange:P})),ne([p,()=>e.options],X,{deep:!0,immediate:!0}),ne(()=>e.modelValue,()=>{n=!1,z()},{deep:!0}),ne(()=>k.value,r=>{ke(r,e.modelValue)||(t(Ee,r),t(we,r))}),Pa(()=>u.value=[]),aa(()=>!_e(e.modelValue)&&z()),{ns:o,menuList:u,menus:y,checkedNodes:M,handleKeyDown:le,handleCheckChange:P,getFlattedNodes:H,getCheckedNodes:R,clearCheckedNodes:b,calculateCheckedValue:V,scrollToExpandingNode:se}}});function Nt(e,t,s,n,o,p){const c=W("el-cascader-menu");return f(),I("div",{class:T([e.ns.b("panel"),e.ns.is("bordered",e.border)]),onKeydown:t[0]||(t[0]=(...v)=>e.handleKeyDown&&e.handleKeyDown(...v))},[(f(!0),I(ce,null,me(e.menus,(v,u)=>(f(),x(c,{key:u,ref_for:!0,ref:k=>e.menuList[u]=k,index:u,nodes:[...v]},null,8,["index","nodes"]))),128))],34)}var Ce=$e(Ct,[["render",Nt],["__file","/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/index.vue"]]);Ce.install=e=>{e.component(Ce.name,Ce)};const Et=Ce,wt=ea({...oa,size:Da,placeholder:String,disabled:Boolean,clearable:Boolean,filterable:Boolean,filterMethod:{type:ge(Function),default:(e,t)=>e.text.includes(t)},separator:{type:String,default:" / "},showAllLevels:{type:Boolean,default:!0},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},debounce:{type:Number,default:300},beforeFilter:{type:ge(Function),default:()=>!0},popperClass:{type:String,default:""},teleported:Ma.teleported,tagType:{...Ja.type,default:"info"},validateEvent:{type:Boolean,default:!0}}),$t={[Ee]:e=>!!e||e===null,[we]:e=>!!e||e===null,focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,visibleChange:e=>_a(e),expandChange:e=>!!e,removeTag:e=>!!e},St={key:0},Tt=["placeholder","onKeydown"],Vt=["onClick"],Lt="ElCascader",Pt=pe({name:Lt}),Dt=pe({...Pt,props:wt,emits:$t,setup(e,{expose:t,emit:s}){const n=e,o={modifiers:[{name:"arrowPosition",enabled:!0,phase:"main",fn:({state:a})=>{const{modifiersData:l,placement:i}=a;["right","left","bottom","top"].includes(i)||(l.arrow.x=35)},requires:["arrow"]}]},p=Ia();let c=0,v=0;const u=ue("cascader"),k=ue("input"),{t:y}=Qe(),{form:L,formItem:M}=Xa(),F=S(null),A=S(null),X=S(null),$=S(null),q=S(null),P=S(!1),j=S(!1),H=S(!1),R=S(!1),b=S(""),V=S(""),z=S([]),ee=S([]),se=S([]),le=S(!1),r=g(()=>p.style),h=g(()=>n.disabled||(L==null?void 0:L.disabled)),m=g(()=>n.placeholder||y("el.cascader.placeholder")),E=g(()=>V.value||z.value.length>0||le.value?"":m.value),C=Ya(),w=g(()=>["small"].includes(C.value)?"small":"default"),D=g(()=>!!n.props.multiple),B=g(()=>!n.filterable||D.value),ae=g(()=>D.value?V.value:b.value),K=g(()=>{var a;return((a=$.value)==null?void 0:a.checkedNodes)||[]}),ia=g(()=>!n.clearable||h.value||H.value||!j.value?!1:!!K.value.length),Se=g(()=>{const{showAllLevels:a,separator:l}=n,i=K.value;return i.length?D.value?"":i[0].calcText(a,l):""}),Te=g({get(){return la(n.modelValue)},set(a){s(Ee,a),s(we,a),n.validateEvent&&(M==null||M.validate("change").catch(l=>Fa()))}}),ra=g(()=>[u.b(),u.m(C.value),u.is("disabled",h.value),p.class]),ca=g(()=>[k.e("icon"),"icon-arrow-down",u.is("reverse",P.value)]),ua=g(()=>u.is("focus",P.value||R.value)),ze=g(()=>{var a,l;return(l=(a=F.value)==null?void 0:a.popperRef)==null?void 0:l.contentRef}),U=a=>{var l,i,N;h.value||(a=a??!P.value,a!==P.value&&(P.value=a,(i=(l=A.value)==null?void 0:l.input)==null||i.setAttribute("aria-expanded",`${a}`),a?(he(),re((N=$.value)==null?void 0:N.scrollToExpandingNode)):n.filterable&&De(),s("visibleChange",a)))},he=()=>{re(()=>{var a;(a=F.value)==null||a.updatePopper()})},Ve=()=>{H.value=!1},Le=a=>{const{showAllLevels:l,separator:i}=n;return{node:a,key:a.uid,text:a.calcText(l,i),hitState:!1,closable:!h.value&&!a.isDisabled,isCollapseTag:!1}},Pe=a=>{var l;const i=a.node;i.doCheck(!1),(l=$.value)==null||l.calculateCheckedValue(),s("removeTag",i.valueByOption)},da=()=>{if(!D.value)return;const a=K.value,l=[],i=[];if(a.forEach(N=>i.push(Le(N))),ee.value=i,a.length){const[N,...Y]=a,Q=Y.length;l.push(Le(N)),Q&&(n.collapseTags?l.push({key:-1,text:`+ ${Q}`,closable:!1,isCollapseTag:!0}):Y.forEach(Z=>l.push(Le(Z))))}z.value=l},Be=()=>{var a,l;const{filterMethod:i,showAllLevels:N,separator:Y}=n,Q=(l=(a=$.value)==null?void 0:a.getFlattedNodes(!n.props.checkStrictly))==null?void 0:l.filter(Z=>Z.isDisabled?!1:(Z.calcText(N,Y),i(Z,ae.value)));D.value&&(z.value.forEach(Z=>{Z.hitState=!1}),ee.value.forEach(Z=>{Z.hitState=!1})),H.value=!0,se.value=Q,he()},pa=()=>{var a;let l;H.value&&q.value?l=q.value.$el.querySelector(`.${u.e("suggestion-item")}`):l=(a=$.value)==null?void 0:a.$el.querySelector(`.${u.b("node")}[tabindex="-1"]`),l&&(l.focus(),!H.value&&l.click())},xe=()=>{var a,l;const i=(a=A.value)==null?void 0:a.input,N=X.value,Y=(l=q.value)==null?void 0:l.$el;if(!(!ta||!i)){if(Y){const Q=Y.querySelector(`.${u.e("suggestion-list")}`);Q.style.minWidth=`${i.offsetWidth}px`}if(N){const{offsetHeight:Q}=N,Z=z.value.length>0?`${Math.max(Q+6,c)}px`:`${c}px`;i.style.height=Z,he()}}},ha=a=>{var l;return(l=$.value)==null?void 0:l.getCheckedNodes(a)},fa=a=>{he(),s("expandChange",a)},oe=a=>{var l;const i=(l=a.target)==null?void 0:l.value;if(a.type==="compositionend")le.value=!1,re(()=>Me(i));else{const N=i[i.length-1]||"";le.value=!at(N)}},va=a=>{if(!le.value)switch(a.code){case O.enter:U();break;case O.down:U(!0),re(pa),a.preventDefault();break;case O.esc:P.value===!0&&(a.preventDefault(),a.stopPropagation(),U(!1));break;case O.tab:U(!1);break}},ma=()=>{var a;(a=$.value)==null||a.clearCheckedNodes(),!P.value&&n.filterable&&De(),U(!1)},De=()=>{const{value:a}=Se;b.value=a,V.value=a},ga=a=>{var l,i;const{checked:N}=a;D.value?(l=$.value)==null||l.handleCheckChange(a,!N,!1):(!N&&((i=$.value)==null||i.handleCheckChange(a,!0,!1)),U(!1))},ka=a=>{const l=a.target,{code:i}=a;switch(i){case O.up:case O.down:{const N=i===O.up?-1:1;ye(na(l,N,`.${u.e("suggestion-item")}[tabindex="-1"]`));break}case O.enter:l.click();break}},ba=()=>{const a=z.value,l=a[a.length-1];v=V.value?0:v+1,!(!l||!v||n.collapseTags&&a.length>1)&&(l.hitState?Pe(l):l.hitState=!0)},He=a=>{const l=a.target,i=u.e("search-input");l.className===i&&(R.value=!0),s("focus",a)},Ae=a=>{R.value=!1,s("blur",a)},ya=tt(()=>{const{value:a}=ae;if(!a)return;const l=n.beforeFilter(a);za(l)?l.then(Be).catch(()=>{}):l!==!1?Be():Ve()},n.debounce),Me=(a,l)=>{!P.value&&U(!0),!(l!=null&&l.isComposing)&&(a?ya():Ve())};return ne(H,he),ne([K,h],da),ne(z,()=>{re(()=>xe())}),ne(Se,De,{immediate:!0}),aa(()=>{const a=A.value.input,l=Number.parseFloat(Ba(k.cssVarName("input-height"),a).value)-2;c=a.offsetHeight||l,xa(a,xe)}),t({getCheckedNodes:ha,cascaderPanelRef:$,togglePopperVisible:U,contentRef:ze}),(a,l)=>(f(),x(d(Oe),{ref_key:"tooltipRef",ref:F,visible:P.value,teleported:a.teleported,"popper-class":[d(u).e("dropdown"),a.popperClass],"popper-options":o,"fallback-placements":["bottom-start","bottom","top-start","top","right","left"],"stop-popper-mouse-event":!1,"gpu-acceleration":!1,placement:"bottom-start",transition:`${d(u).namespace.value}-zoom-in-top`,effect:"light",pure:"",persistent:"",onHide:Ve},{default:_(()=>[be((f(),I("div",{class:T(d(ra)),style:Ha(d(r)),onClick:l[5]||(l[5]=()=>U(d(B)?void 0:!0)),onKeydown:va,onMouseenter:l[6]||(l[6]=i=>j.value=!0),onMouseleave:l[7]||(l[7]=i=>j.value=!1)},[J(d(et),{ref_key:"input",ref:A,modelValue:b.value,"onUpdate:modelValue":l[1]||(l[1]=i=>b.value=i),placeholder:d(E),readonly:d(B),disabled:d(h),"validate-event":!1,size:d(C),class:T(d(ua)),tabindex:d(D)&&a.filterable&&!d(h)?-1:void 0,onCompositionstart:oe,onCompositionupdate:oe,onCompositionend:oe,onFocus:He,onBlur:Ae,onInput:Me},{suffix:_(()=>[d(ia)?(f(),x(d(fe),{key:"clear",class:T([d(k).e("icon"),"icon-circle-close"]),onClick:ve(ma,["stop"])},{default:_(()=>[J(d(Aa))]),_:1},8,["class","onClick"])):(f(),x(d(fe),{key:"arrow-down",class:T(d(ca)),onClick:l[0]||(l[0]=ve(i=>U(),["stop"]))},{default:_(()=>[J(d(Ka))]),_:1},8,["class"]))]),_:1},8,["modelValue","placeholder","readonly","disabled","size","class","tabindex"]),d(D)?(f(),I("div",{key:0,ref_key:"tagWrapper",ref:X,class:T(d(u).e("tags"))},[(f(!0),I(ce,null,me(z.value,i=>(f(),x(d(Ue),{key:i.key,type:a.tagType,size:d(w),hit:i.hitState,closable:i.closable,"disable-transitions":"",onClose:N=>Pe(i)},{default:_(()=>[i.isCollapseTag===!1?(f(),I("span",St,te(i.text),1)):(f(),x(d(Oe),{key:1,disabled:P.value||!a.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],placement:"bottom",effect:"light"},{default:_(()=>[ie("span",null,te(i.text),1)]),content:_(()=>[ie("div",{class:T(d(u).e("collapse-tags"))},[(f(!0),I(ce,null,me(ee.value.slice(1),(N,Y)=>(f(),I("div",{key:Y,class:T(d(u).e("collapse-tag"))},[(f(),x(d(Ue),{key:N.key,class:"in-tooltip",type:a.tagType,size:d(w),hit:N.hitState,closable:N.closable,"disable-transitions":"",onClose:Q=>Pe(N)},{default:_(()=>[ie("span",null,te(N.text),1)]),_:2},1032,["type","size","hit","closable","onClose"]))],2))),128))],2)]),_:2},1032,["disabled"]))]),_:2},1032,["type","size","hit","closable","onClose"]))),128)),a.filterable&&!d(h)?be((f(),I("input",{key:0,"onUpdate:modelValue":l[2]||(l[2]=i=>V.value=i),type:"text",class:T(d(u).e("search-input")),placeholder:d(Se)?"":d(m),onInput:l[3]||(l[3]=i=>Me(V.value,i)),onClick:l[4]||(l[4]=ve(i=>U(!0),["stop"])),onKeydown:Oa(ba,["delete"]),onCompositionstart:oe,onCompositionupdate:oe,onCompositionend:oe,onFocus:He,onBlur:Ae},null,42,Tt)),[[qa,V.value]]):G("v-if",!0)],2)):G("v-if",!0)],38)),[[d(Za),()=>U(!1),d(ze)]])]),content:_(()=>[be(J(d(Et),{ref_key:"cascaderPanelRef",ref:$,modelValue:d(Te),"onUpdate:modelValue":l[8]||(l[8]=i=>Ra(Te)?Te.value=i:null),options:a.options,props:n.props,border:!1,"render-label":a.$slots.default,onExpandChange:fa,onClose:l[9]||(l[9]=i=>a.$nextTick(()=>U(!1)))},null,8,["modelValue","options","props","render-label"]),[[qe,!H.value]]),a.filterable?be((f(),x(d(sa),{key:0,ref_key:"suggestionPanel",ref:q,tag:"ul",class:T(d(u).e("suggestion-panel")),"view-class":d(u).e("suggestion-list"),onKeydown:ka},{default:_(()=>[se.value.length?(f(!0),I(ce,{key:0},me(se.value,i=>(f(),I("li",{key:i.uid,class:T([d(u).e("suggestion-item"),d(u).is("checked",i.checked)]),tabindex:-1,onClick:N=>ga(i)},[ie("span",null,te(i.text),1),i.checked?(f(),x(d(fe),{key:0},{default:_(()=>[J(d(Je))]),_:1})):G("v-if",!0)],10,Vt))),128)):Ua(a.$slots,"empty",{key:1},()=>[ie("li",{class:T(d(u).e("empty-text"))},te(d(y)("el.cascader.noMatch")),3)])]),_:3},8,["class","view-class"])),[[qe,H.value]]):G("v-if",!0)]),_:3},8,["visible","teleported","popper-class","transition"]))}});var Ne=$e(Dt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/cascader/src/cascader.vue"]]);Ne.install=e=>{e.component(Ne.name,Ne)};const Mt=Ne,Rt=Mt;export{Rt as E};
