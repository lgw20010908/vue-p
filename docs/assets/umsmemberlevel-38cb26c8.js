import{as as g,aj as S,a as z,l as p,o as U,I as k,q as l,n as a,T as L,Q as f,ak as d,al as W,B as $}from"./index-4e66693d.js";import{E as B}from"./el-overlay-5d7acc48.js";import{a as I,b as q,E as G}from"./el-input-b637a84d.js";import{E as T}from"./el-card-edaa3394.js";import{E as c}from"./el-select-dee45c9f.js";import"./el-tag-3aed28f9.js";import{E as N,a as j}from"./el-table-column-1b23615c.js";import{E as A}from"./el-button-bad787b3.js";/* empty css                   */import{c as R}from"./cloneDeep-4dfd5273.js";import{E as s}from"./index-11be697d.js";import"./refs-cbced2c2.js";import"./scroll-45713807.js";import"./_initCloneObject-b40d657f.js";import"./index-88ab3c4a.js";import"./debounce-562d200a.js";import"./validator-55a3f62c.js";const Q=e=>g.request({url:"mall/ums-member-level/page",method:"post",data:e}),H=e=>g.request({url:"mall/ums-member-level/del/"+e.id,method:"GET"}),J=e=>g.request({url:"/mall/ums-member-receive-address/add",method:"post",data:e}),K=e=>g.request({url:"mall/ums-member-level/edit",method:"post",data:e});const O=z({props:["id"],data(){return{resultData:{},dialogFormVisible:!1,code:0,data:{},msg:"",success:!0,page:{total:0,current:0,size:0},resData:{current:1,size:10},umsMemberlevel:{commentGrowthPoint:0,defaultStatus:0,freeFreightPoint:0,growthPoint:0,id:0,name:"",note:"",priviledgeBirthday:0,priviledgeComment:0,priviledgeFreeFreight:0,priviledgeMemberPrice:0,priviledgePromotion:0,priviledgeSignIn:0},formLabelWidth:160,umsMemberlevels:[]}},mounted(){this.getPage()},methods:{toEdit(e){console.log(e),this.dialogFormVisible=!0,this.umsMemberlevel=R(e)},getPage(){Q(this.resData).then(e=>{console.log(e),this.resultData=e.data.page}).catch(e=>{console.log(e)})},handleSizeChange(e){this.resData.size=e,this.getPage()},handleCurrentChange(e){this.resData.current=e,this.getPage()},del(e){console.log(e),H({id:e}).then(b=>{if(b.success)this.getumsMemberlevelsPage(this.page.current);else return console.log(b.msg),!1}).catch(b=>{})},toAdd(){this.dialogFormVisible=!0},save(){const e=this.umsMemberlevel;e.id==0?J(e).then(o=>{if(o.success)this.dialogFormVisible=!1,this.getumsMemberlevelsPage(this.page.current),s(o.msg);else return s(o.msg),!1}).catch(o=>{s("网络错误联系管理员")}):K(e).then(o=>{if(o.success)this.dialogFormVisible=!1,this.getumsMemberlevelsPage(this.page.current),s(o.msg);else return s(o.msg),!1}).catch(o=>{s("网络错误联系管理员")})}}}),X={class:"rig"},Y=f("div",{class:"title"},"用户等级管理",-1),Z={class:"dialog-footer"};function _(e,o,b,x,ee,le){const r=I,h=p("Search"),u=$,n=A,v=p("Plus"),V=p("Refresh"),m=N,w=p("EditPen"),M=p("Delete"),P=j,C=c,E=T,i=q,F=G,D=B;return U(),k(L,null,[l(E,null,{default:a(()=>[f("div",X,[Y,l(r,{modelValue:e.input,"onUpdate:modelValue":o[0]||(o[0]=t=>e.input=t),class:"w-50 m-2",style:{width:"200px","margin-bottom":"10px"},placeholder:"请输入id","suffix-icon":e.Search},null,8,["modelValue","suffix-icon"]),l(n,{icon:e.Search,circle:"",style:{"margin-bottom":"10px","margin-left":"5px"},onClick:e.search},{default:a(()=>[l(u,null,{default:a(()=>[l(h)]),_:1})]),_:1},8,["icon","onClick"]),l(n,{type:"primary",style:{"margin-left":"50px","margin-bottom":"10px"},onClick:o[1]||(o[1]=t=>e.showDialog())},{default:a(()=>[l(u,null,{default:a(()=>[l(v)]),_:1}),d("添加信息")]),_:1}),l(n,{type:"success",style:{"margin-left":"40px","margin-bottom":"10px"},onClick:o[2]||(o[2]=t=>e.update())},{default:a(()=>[l(u,null,{default:a(()=>[l(V)]),_:1})]),_:1})]),l(P,{data:e.resultData.records,style:{width:"100%",height:"590px"},border:""},{default:a(()=>[l(m,{fixed:"",prop:"id",label:"序号",width:"50"},{default:a(t=>[d(W((e.resultData.current-1)*e.resultData.size+t.$index+1),1)]),_:1}),l(m,{prop:"name",label:"会员等级名称"}),l(m,{prop:"growthPoint",label:"成长值"}),l(m,{prop:"defaultStatus",label:"默认等级"}),l(m,{prop:"freeFreightPoint",label:"免运费标准"}),l(m,{prop:"commentGrowthPoint",label:"每次评价获取的成长值"}),l(m,{prop:"priviledgeFreeFreight",label:"是否有免邮特权"}),l(m,{prop:"priviledgeSignIn",label:"是否有签到特权"}),l(m,{prop:"priviledgeComment",label:"是否有评论获奖励特权"}),l(m,{prop:"priviledgePromotion",label:"是否有专享活动特权"}),l(m,{prop:"priviledgeMemberPrice",label:"是否有会员价特权"}),l(m,{prop:"priviledgeBirthday",label:"是否有生日特权"}),l(m,{prop:"note",label:"备注"}),l(m,{fixed:"right",label:"操作",width:"180"},{default:a(t=>[l(n,{size:"small",onClick:y=>e.showEdit(t.row)},{default:a(()=>[l(u,null,{default:a(()=>[l(w)]),_:1}),d("编辑")]),_:2},1032,["onClick"]),l(n,{size:"small",type:"danger",onClick:y=>e.del(t.row)},{default:a(()=>[l(u,null,{default:a(()=>[l(M)]),_:1}),d("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),f("div",null,[l(C,{"current-page":e.resultData.current,"onUpdate:currentPage":o[3]||(o[3]=t=>e.resultData.current=t),"page-size":e.resultData.size,"onUpdate:pageSize":o[4]||(o[4]=t=>e.resultData.size=t),"page-sizes":[10,20,30,40],layout:"total, prev, pager, next, jumper, sizes",total:e.resultData.total,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])])]),_:1}),l(D,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":o[19]||(o[19]=t=>e.dialogFormVisible=t),title:"会员等级编辑"},{footer:a(()=>[f("span",Z,[l(n,{onClick:o[18]||(o[18]=t=>e.dialogFormVisible=!1)},{default:a(()=>[d("取消")]),_:1}),l(n,{type:"primary",onClick:e.save},{default:a(()=>[d(" 保存 ")]),_:1},8,["onClick"])])]),default:a(()=>[l(F,{model:e.umsMemberlevel},{default:a(()=>[l(i,{label:"id","label-width":e.formLabelWidth},{default:a(()=>[l(r,{modelValue:e.umsMemberlevel.id,"onUpdate:modelValue":o[5]||(o[5]=t=>e.umsMemberlevel.id=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"会员等级名称","label-width":e.formLabelWidth},{default:a(()=>[l(r,{modelValue:e.umsMemberlevel.name,"onUpdate:modelValue":o[6]||(o[6]=t=>e.umsMemberlevel.name=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"成长值","label-width":e.formLabelWidth},{default:a(()=>[l(r,{modelValue:e.umsMemberlevel.growthPoint,"onUpdate:modelValue":o[7]||(o[7]=t=>e.umsMemberlevel.growthPoint=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"默认等级","label-width":e.formLabelWidth},{default:a(()=>[l(r,{modelValue:e.umsMemberlevel.defaultStatus,"onUpdate:modelValue":o[8]||(o[8]=t=>e.umsMemberlevel.defaultStatus=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"免运费标准","label-width":e.formLabelWidth},{default:a(()=>[l(r,{modelValue:e.umsMemberlevel.freeFreightPoint,"onUpdate:modelValue":o[9]||(o[9]=t=>e.umsMemberlevel.freeFreightPoint=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"每次评价获取的成长值","label-width":e.formLabelWidth},{default:a(()=>[l(r,{modelValue:e.umsMemberlevel.commentGrowthPoint,"onUpdate:modelValue":o[10]||(o[10]=t=>e.umsMemberlevel.commentGrowthPoint=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"是否有免邮特权","label-width":e.formLabelWidth},{default:a(()=>[l(r,{modelValue:e.umsMemberlevel.priviledgeFreeFreight,"onUpdate:modelValue":o[11]||(o[11]=t=>e.umsMemberlevel.priviledgeFreeFreight=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"是否有签到特权","label-width":e.formLabelWidth},{default:a(()=>[l(r,{modelValue:e.umsMemberlevel.priviledgeSignIn,"onUpdate:modelValue":o[12]||(o[12]=t=>e.umsMemberlevel.priviledgeSignIn=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"是否有评论获奖励特权","label-width":e.formLabelWidth},{default:a(()=>[l(r,{modelValue:e.umsMemberlevel.priviledgeComment,"onUpdate:modelValue":o[13]||(o[13]=t=>e.umsMemberlevel.priviledgeComment=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"是否有专享活动特权","label-width":e.formLabelWidth},{default:a(()=>[l(r,{modelValue:e.umsMemberlevel.priviledgePromotion,"onUpdate:modelValue":o[14]||(o[14]=t=>e.umsMemberlevel.priviledgePromotion=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"是否有会员价特权","label-width":e.formLabelWidth},{default:a(()=>[l(r,{modelValue:e.umsMemberlevel.priviledgeMemberPrice,"onUpdate:modelValue":o[15]||(o[15]=t=>e.umsMemberlevel.priviledgeMemberPrice=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"是否有生日特权","label-width":e.formLabelWidth},{default:a(()=>[l(r,{modelValue:e.umsMemberlevel.priviledgeBirthday,"onUpdate:modelValue":o[16]||(o[16]=t=>e.umsMemberlevel.priviledgeBirthday=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(i,{label:"备注","label-width":e.formLabelWidth},{default:a(()=>[l(r,{modelValue:e.umsMemberlevel.note,"onUpdate:modelValue":o[17]||(o[17]=t=>e.umsMemberlevel.note=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const we=S(O,[["render",_]]);export{we as default};
