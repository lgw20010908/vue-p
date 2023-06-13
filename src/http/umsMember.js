import instance from "./axios";
// data json         /mall/cms-topic/one/{id}

const getList = (data) => {
   return instance.request({
       url: '/mall/ums-member/page',
       method: 'POST',
       data
   })
}
// 获取单一数据
const getOne = (params) =>{
   return instance.request({
       url:'/mall/ums-member/one/'+params.id,
       method:'GET'
   })
}
// 保存
const save = (data) =>{
   return instance.request({
       url:'/mall/ums-member/add',
       method:'POST',
       data
   })
}
// 删除
const del = (params) =>{
   return instance.request({
       url:'/mall/ums-member/del/'+params.id,
       method:'GET'
   })
}
// 修改
const edit = (data) => {
   return instance.request({
       url: '/mall/ums-member/edit',
       method: 'POST',
       data
   })
}

export{
   getList,
   getOne,
   save,
   del,
   edit
}

