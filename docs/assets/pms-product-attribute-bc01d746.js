import{as as b,r as T,o as S,I as A,Q as t,ak as a,ah as o,aN as _,b9 as i,aR as v,T as P,an as D,al as d}from"./index-4e66693d.js";function w(s){return b({url:"/mall/pms-product-attribute/page",method:"post",data:s})}function B(s){return b({url:`/mall/pms-product-attribute/one/${s}`,method:"get"})}function M(s){return b({url:`/mall/pms-product-attribute/del/${s}`,method:"get"})}function N(s){return b({url:"/mall/pms-product-attribute/add",method:"post",data:s})}function z(s){return b({url:"/mall/pms-product-attribute/edit",method:"post",data:s})}const E=t("br",null,null,-1),R=t("option",{value:"0"},"唯一",-1),F=t("option",{value:"1"},"单选",-1),Q=t("option",{value:"2"},"多选",-1),j=[R,F,Q],q=t("option",{value:"0"},"手工录入",-1),G=t("option",{value:"1"},"从列表中获取",-1),H=[q,G],J=t("option",{value:"0"},"普通",-1),K=t("option",{value:"1"},"颜色",-1),W=[J,K],X=t("option",{value:"0"},"不需要进行检索",-1),Y=t("option",{value:"1"},"关键字检索",-1),Z=t("option",{value:"2"},"范围检索",-1),tt=[X,Y,Z],et=t("br",null,null,-1),lt=t("option",{value:"0"},"规格",-1),ut=t("option",{value:"1"},"参数",-1),nt=[lt,ut],ot=t("br",null,null,-1),at={border:"1"},dt=t("tr",null,[t("th",null,"id"),t("th",null,"filterType"),t("th",null,"handAddStatus"),t("th",null,"inputList"),t("th",null,"inputType"),t("th",null,"name"),t("th",null,"productAttributeCategoryId"),t("th",null,"relatedStatus"),t("th",null,"searchType"),t("th",null,"selectType"),t("th",null,"readCount"),t("th",null,"sort"),t("th",null,"type"),t("th",null,"操作")],-1),st=["onClick"],pt=["onClick"],it=t("br",null,null,-1),rt=t("br",null,null,-1),vt=t("td",null,"id:",-1),yt=t("td",null,"filterType:",-1),ht=t("option",{value:"0"},"普通",-1),Tt=t("option",{value:"1"},"颜色",-1),_t=[ht,Tt],mt=t("td",null,"handAddStatus:",-1),bt=t("td",null,"inputList:",-1),ct=t("td",null,"inputType:",-1),ft=t("option",{value:"0"},"手工录入",-1),St=t("option",{value:"1"},"从列表中获取",-1),At=[ft,St],It=t("td",null,"name:",-1),gt=t("td",null,"productAttributeCategoryId:",-1),Vt=t("td",null,"relatedStatus:",-1),Ct=t("td",null,"searchType:",-1),Ut=t("option",{value:"0"},"不需要进行检索",-1),Lt=t("option",{value:"1"},"关键字检索",-1),kt=t("option",{value:"2"},"范围检索",-1),$t=[Ut,Lt,kt],xt=t("td",null,"selectType:",-1),Ot=t("option",{value:"0"},"唯一",-1),Pt=t("option",{value:"1"},"单选",-1),Dt=t("option",{value:"2"},"多选",-1),wt=[Ot,Pt,Dt],Bt=t("td",null,"type:",-1),Mt=t("option",{value:"0"},"规格",-1),Nt=t("option",{value:"1"},"参数",-1),zt=[Mt,Nt],Et={colspan:"2"},Ft={__name:"pms-product-attribute",setup(s){const f=T([]),y=T(0),h=T(1),m=T(1),c=T(5),n=T({filterType:"",handAddStatus:"",id:0,inputList:"",inputType:"",name:"",productAttributeCategoryId:"",relatedStatus:"",searchType:"",selectType:"",sort:"",type:""}),u=T({});r();const g=p=>{confirm("是否要删除该评论？")&&M(p).then(l=>{l.code==1&&(alert("成功删除商品！"),r())})},V=()=>{let p={filterType:parseInt(n.value.filterType),handAddStatus:parseInt(n.value.handAddStatus),id:0,inputList:n.value.inputList,inputType:parseInt(n.value.inputType),name:n.value.name,productAttributeCategoryId:parseInt(n.value.productAttributeCategoryId),relatedStatus:parseInt(n.value.relatedStatus),searchType:parseInt(n.value.searchType),selectType:parseInt(n.value.selectType),sort:0,type:parseInt(n.value.type)};N(p).then(l=>{l.code==1&&(alert("添加商品成功！"),r())})},C=p=>{B(p).then(l=>{let e=l.data.help;u.value=e})},U=()=>{if(confirm("是否要进行更新？"))if(u.value.id=="")alert("请选择要操作的商品。");else{let p={filterType:parseInt(u.value.filterType),handAddStatus:parseInt(u.value.handAddStatus),id:u.value.id,inputList:u.value.inputList,inputType:parseInt(u.value.inputType),name:u.value.name,productAttributeCategoryId:parseInt(u.value.productAttributeCategoryId),relatedStatus:parseInt(u.value.relatedStatus),searchType:parseInt(u.value.searchType),selectType:parseInt(u.value.selectType),sort:0,type:parseInt(u.value.type)};z(p).then(l=>{l.code==1&&(alert("更新成功。"),I(),r())})}},I=()=>{u.value={filterType:"",handAddStatus:"",id:"",inputList:"",inputType:"",name:"",productAttributeCategoryId:"",relatedStatus:"",searchType:"",selectType:"",sort:"",type:""}},L=()=>{h.value==1?alert("当前已经是首页了。"):(h.value--,m.value--,r())},k=()=>{h.value==y.value?alert("当前已经是尾页了。"):(h.value++,m.value++,r())},$=()=>{h.value=1,m.value=1,r()},x=()=>{h.value=y.value,m.value=y.value,r()};function r(){let p={current:m.value,size:c.value};w(p).then(l=>{let e=l.data.page.total;e==0?y.value=1:e%c.value==0?y.value=parseInt(e/c.value):y.value=parseInt(e/c.value+1),f.value=l.data.page.records,console.log(f.value)})}return(p,l)=>(S(),A("div",null,[t("div",null,[a(" productAttributeCategoryId: "),o(t("input",{type:"number","onUpdate:modelValue":l[0]||(l[0]=e=>n.value.productAttributeCategoryId=e)},null,512),[[_,n.value.productAttributeCategoryId]]),a("   name: "),o(t("input",{type:"text","onUpdate:modelValue":l[1]||(l[1]=e=>n.value.name=e)},null,512),[[_,n.value.name]]),a("   inputList: "),o(t("input",{type:"text","onUpdate:modelValue":l[2]||(l[2]=e=>n.value.inputList=e)},null,512),[[_,n.value.inputList]]),a("   "),E,a(" selectType: "),o(t("select",{"onUpdate:modelValue":l[3]||(l[3]=e=>n.value.selectType=e)},j,512),[[i,n.value.selectType]]),a("   inputType: "),o(t("select",{"onUpdate:modelValue":l[4]||(l[4]=e=>n.value.inputType=e)},H,512),[[i,n.value.inputType]]),a("   filterType: "),o(t("select",{"onUpdate:modelValue":l[5]||(l[5]=e=>n.value.filterType=e)},W,512),[[i,n.value.filterType]]),a("   searchType: "),o(t("select",{"onUpdate:modelValue":l[6]||(l[6]=e=>n.value.searchType=e)},tt,512),[[i,n.value.searchType]]),a("   "),et,a(" relatedStatus: "),o(t("input",{type:"radio",value:"0","onUpdate:modelValue":l[7]||(l[7]=e=>n.value.relatedStatus=e)},null,512),[[v,n.value.relatedStatus]]),a("不关联   "),o(t("input",{type:"radio",value:"1","onUpdate:modelValue":l[8]||(l[8]=e=>n.value.relatedStatus=e)},null,512),[[v,n.value.relatedStatus]]),a("关联   handAddStatus: "),o(t("input",{type:"radio",value:"0","onUpdate:modelValue":l[9]||(l[9]=e=>n.value.handAddStatus=e)},null,512),[[v,n.value.handAddStatus]]),a("不支持   "),o(t("input",{type:"radio",value:"1","onUpdate:modelValue":l[10]||(l[10]=e=>n.value.handAddStatus=e)},null,512),[[v,n.value.handAddStatus]]),a("支持   type: "),o(t("select",{"onUpdate:modelValue":l[11]||(l[11]=e=>n.value.type=e)},nt,512),[[i,n.value.type]]),a("   "),t("button",{type:"button",onClick:l[12]||(l[12]=e=>V())},"添加")]),ot,t("div",null,[t("div",null,[t("table",at,[dt,(S(!0),A(P,null,D(f.value,e=>(S(),A("tr",{key:e.id},[t("th",null,d(e.id),1),t("th",null,d(e.filterType),1),t("th",null,d(e.handAddStatus),1),t("th",null,d(e.inputList),1),t("th",null,d(e.inputType),1),t("th",null,d(e.name),1),t("th",null,d(e.productAttributeCategoryId),1),t("th",null,d(e.relatedStatus),1),t("th",null,d(e.productAttribute),1),t("th",null,d(e.searchType),1),t("th",null,d(e.selectType),1),t("th",null,d(e.sort),1),t("th",null,d(e.type),1),t("td",null,[t("button",{onClick:O=>C(e.id)},"更新",8,st),t("button",{onClick:O=>g(e.id)},"删除",8,pt)])]))),128))])]),it,t("div",null,[t("button",{type:"button",onClick:l[13]||(l[13]=e=>$())},"首页"),a("   "),t("button",{type:"button",onClick:l[14]||(l[14]=e=>L())},"上一页"),a("   "+d(h.value)+" / "+d(y.value)+"   ",1),t("button",{type:"button",onClick:l[15]||(l[15]=e=>k())},"下一页"),a("   "),t("button",{type:"button",onClick:l[16]||(l[16]=e=>x())},"尾页")])]),rt,t("div",null,[t("table",null,[t("tr",null,[vt,t("td",null,[o(t("input",{type:"text","onUpdate:modelValue":l[17]||(l[17]=e=>u.value.id=e),readonly:""},null,512),[[_,u.value.id]])])]),t("tr",null,[yt,t("td",null,[o(t("select",{"onUpdate:modelValue":l[18]||(l[18]=e=>u.value.filterType=e)},_t,512),[[i,u.value.filterType]])])]),t("tr",null,[mt,t("td",null,[o(t("input",{type:"radio",value:"0","onUpdate:modelValue":l[19]||(l[19]=e=>u.value.handAddStatus=e)},null,512),[[v,u.value.handAddStatus]]),a("不支持   "),o(t("input",{type:"radio",value:"1","onUpdate:modelValue":l[20]||(l[20]=e=>u.value.handAddStatus=e)},null,512),[[v,u.value.handAddStatus]]),a("支持   ")])]),t("tr",null,[bt,t("td",null,[o(t("input",{type:"text","onUpdate:modelValue":l[21]||(l[21]=e=>u.value.inputList=e)},null,512),[[_,u.value.inputList]])])]),t("tr",null,[ct,t("td",null,[o(t("select",{"onUpdate:modelValue":l[22]||(l[22]=e=>u.value.inputType=e)},At,512),[[i,u.value.inputType]])])]),t("tr",null,[It,t("td",null,[o(t("input",{type:"text","onUpdate:modelValue":l[23]||(l[23]=e=>u.value.name=e)},null,512),[[_,u.value.name]])])]),t("tr",null,[gt,t("td",null,[o(t("input",{type:"number","onUpdate:modelValue":l[24]||(l[24]=e=>u.value.productAttributeCategoryId=e)},null,512),[[_,u.value.productAttributeCategoryId]])])]),t("tr",null,[Vt,t("td",null,[o(t("input",{type:"radio",value:"0","onUpdate:modelValue":l[25]||(l[25]=e=>u.value.relatedStatus=e)},null,512),[[v,u.value.relatedStatus]]),a("不关联   "),o(t("input",{type:"radio",value:"1","onUpdate:modelValue":l[26]||(l[26]=e=>u.value.relatedStatus=e)},null,512),[[v,u.value.relatedStatus]]),a("关联   ")])]),t("tr",null,[Ct,t("td",null,[o(t("select",{"onUpdate:modelValue":l[27]||(l[27]=e=>u.value.searchType=e)},$t,512),[[i,u.value.searchType]])])]),t("tr",null,[xt,t("td",null,[o(t("select",{"onUpdate:modelValue":l[28]||(l[28]=e=>u.value.selectType=e)},wt,512),[[i,u.value.selectType]])])]),t("tr",null,[Bt,t("td",null,[o(t("select",{"onUpdate:modelValue":l[29]||(l[29]=e=>u.value.type=e)},zt,512),[[i,u.value.type]])])]),t("tr",null,[t("td",Et,[t("button",{type:"button",onClick:l[30]||(l[30]=e=>U())},"更新"),t("button",{type:"button",onClick:l[31]||(l[31]=e=>I())},"清空")])])])])]))}};export{Ft as default};
