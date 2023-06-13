import{as as d,aj as y,a as C,o as g,I as E,Q as m,q as o,n as s,m as V,M as w,ak as l,al as z}from"./index-4e66693d.js";import{E as T}from"./el-overlay-5d7acc48.js";import{a as k,b as P,E as $}from"./el-input-b637a84d.js";import{E as q}from"./el-select-dee45c9f.js";import"./el-tag-3aed28f9.js";import{a as v,E as S}from"./el-table-column-1b23615c.js";import{E as B}from"./el-button-bad787b3.js";/* empty css                   */import{E as F}from"./el-message-box-a940a289.js";import{E as i}from"./index-11be697d.js";import"./refs-cbced2c2.js";import"./scroll-45713807.js";import"./_initCloneObject-b40d657f.js";import"./index-88ab3c4a.js";import"./debounce-562d200a.js";import"./validator-55a3f62c.js";const U=e=>d.request({url:"/mall/ums-resource-category/page",method:"POST",data:e}),_=e=>d.request({url:"/mall/ums-resource-category/add",method:"POST",data:e}),N=e=>d.request({url:"/mall/ums-resource-category/del/"+e.id,method:"GET"}),I=e=>d.request({url:"/mall/ums-resource-category/edit",method:"POST",data:e}),M=C({data(){return{requestData:{current:1,size:5},resuleData:{},dialogVisible:!1,itemData:{},isEdit:!1,rules:{name:[{required:!0,message:"请输入分类名称",trigger:"blur"}],sort:[{required:!0,message:"请输入排序大小",trigger:"blur"}]}}},methods:{findPage(){U(this.requestData).then(e=>{this.resuleData=e.data.page})},handleSizeChange(e){this.requestData.size=e,this.findPage()},handleCurrentChange(e){this.requestData.current=e,this.findPage()},showDialog(){this.isEdit=!1,this.itemData={},this.dialogVisible=!0},confirm(){this.$refs.dialogForm.validate(e=>{if(e)this.itemData.createTime=new Date,_(this.itemData).then(t=>{t.code===1?(this.dialogVisible=!1,i({message:"新增成功",type:"success"}),this.findPage()):i({message:"新增失败",type:"error"})});else return!1})},confire(){this.dialogVisible=!1,this.itemData={}},showEdit(e){this.isEdit=!0,this.itemData={id:e.id,name:e.name,creatTime:e.createTime,sort:e.sort},this.dialogVisible=!0},editConfirm(){this.$refs.dialogForm.validate(e=>{if(e)I(this.itemData).then(t=>{t.code===1?(this.dialogVisible=!1,i({message:"修改成功",type:"success"}),this.findPage()):i({message:"修改失败",type:"error"})});else return!1})},del(e){console.log(e),F.confirm("是否删除该记录?","删除数据",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{N({id:e.id}).then(t=>{t.code===1?(i({type:"success",message:"删除成功"}),this.findPage()):i({type:"error",message:"删除失败"})})}).catch(()=>{i({type:"info",message:"取消删除"})})}},mounted(){this.findPage()}}),O={class:"dialog-footer"};function j(e,t,G,L,Q,A){const r=B,n=S,f=v,h=q,u=k,p=P,c=$,D=T;return g(),E("div",null,[m("div",null,[o(r,{type:"primary",onClick:t[0]||(t[0]=a=>e.showDialog())},{default:s(()=>[l("新增")]),_:1})]),m("div",null,[o(f,{data:e.resuleData.records,style:{width:"100%"}},{default:s(()=>[o(n,{label:"编号",width:"180"},{default:s(a=>[l(z((e.resuleData.current-1)*e.resuleData.size+a.$index+1),1)]),_:1}),o(n,{prop:"name",label:"分类名称",width:"180"}),o(n,{prop:"createTime",label:"创建时间"}),o(n,{prop:"sort",label:"排序"}),o(n,{label:"操作"},{default:s(a=>[o(r,{size:"small",onClick:b=>e.showEdit(a.row)},{default:s(()=>[l("编辑")]),_:2},1032,["onClick"]),o(r,{size:"small",type:"danger",onClick:b=>e.del(a.row)},{default:s(()=>[l("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),m("div",null,[o(h,{"current-page":e.resuleData.current,"onUpdate:currentPage":t[1]||(t[1]=a=>e.resuleData.current=a),"page-size":e.resuleData.size,"onUpdate:pageSize":t[2]||(t[2]=a=>e.resuleData.size=a),"page-sizes":[5,10,15,20],layout:"total, sizes, prev, pager, next, jumper",total:e.resuleData.total,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])]),e.dialogVisible?(g(),V(D,{key:0,modelValue:e.dialogVisible,"onUpdate:modelValue":t[7]||(t[7]=a=>e.dialogVisible=a),title:e.isEdit?"修改数据":"新增数据",width:"400px"},{footer:s(()=>[m("span",O,[o(r,{type:"primary",onClick:t[5]||(t[5]=a=>e.confire())},{default:s(()=>[l("取消")]),_:1}),o(r,{type:"primary",onClick:t[6]||(t[6]=a=>e.isEdit?e.editConfirm():e.confirm())},{default:s(()=>[l("确认")]),_:1})])]),default:s(()=>[o(c,{ref:"dialogForm",model:e.itemData,rules:e.rules},{default:s(()=>[o(p,{label:"分类名称","label-width":"100",prop:"name"},{default:s(()=>[o(u,{modelValue:e.itemData.name,"onUpdate:modelValue":t[3]||(t[3]=a=>e.itemData.name=a),autocomplete:"off",style:{width:"200px"}},null,8,["modelValue"])]),_:1}),o(p,{label:"排序","label-width":"100",prop:"sort"},{default:s(()=>[o(u,{modelValue:e.itemData.sort,"onUpdate:modelValue":t[4]||(t[4]=a=>e.itemData.sort=a),autocomplete:"off",style:{width:"200px"}},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])):w("",!0)])}const re=y(M,[["render",j]]);export{re as default};
