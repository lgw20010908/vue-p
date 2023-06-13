import instance from "./axios";
// http://mall.qzimp.cn/doc.html 电商接口
const getAllrulesPage=(data)=>{
    //返回Promise对象
   return instance.request({
        url:'mall/ums-member-rule-setting/page', //fullpath=baseURL+url 
        method:'post',
        data,
      
    })
}
// 获取单一数据
const getOne = (params) =>{
    return instance.request({
        url:'mall/ums-member-rule-setting/one'+params.id,
        method:'GET'
    })
}
// 保存
const save = (data) =>{
    return instance.request({
        url:'mall/ums-member-rule-setting/add',
        method:'POST',
        data
    })
}
// 删除
const del = (params) =>{
    return instance.request({
        url:'mall/ums-member-rule-setting/del'+params.id,
        method:'GET'
    })
}
// 修改
const edit = (data) => {
    return instance.request({
        url: 'mall/ums-member-rule-setting/edit',
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