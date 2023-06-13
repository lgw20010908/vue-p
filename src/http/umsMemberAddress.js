//统一api管理
import instance from "./axios";
// data json
//通过分页获取会员任务表
const getMemberAddress=(data)=>{
    //返回Promise对象
   return instance.request({
        url:'/mall/ums-member-receive-address/page',
        method:'post',
        data,
      
    })
}
// 获取单一数据
const getOne = (params) =>{
    return instance.request({
        url:'/mall/ums-member-receive-address/one/'+params.id,
        method:'GET'
    })
}
// 保存
const save = (data) =>{
    return instance.request({
        url:'/mall/ums-member-receive-address/add',
        method:'POST',
        data
    })
}
// 删除
const del = (params) =>{
    return instance.request({
        url:'/mall/ums-member-receive-address/del/'+params.id,
        method:'GET'
    })
 }
// 修改
const edit = (data) => {
    return instance.request({
        url: '/mall/ums-member-receive-address/edit',
        method: 'POST',
        data
    })
}

export{
    getMemberAddress,
    getOne,
    save,
    del,
    edit
}