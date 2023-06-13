import instance from "./axios";
// data json
//通过分页获取产品信息
const getCompanyPage=(data)=>{
    //返回Promise对象
   return instance.request({
        url:'mall/oms-company-address/page', //fullpath=baseURL+url  http://api.jqrjq.cn/api/mobile/elogin
        method:'post',
        data,
      
    })
}
// 获取单一数据
const getOne = (params) =>{
    return instance.request({
        url:'mall/oms-company-address/one/'+params.id,
        method:'GET'
    })
}
// 保存
const save = (data) =>{
    return instance.request({
        url:'mall/oms-company-address/add',
        method:'POST',
        data
    })
}
// 删除
const del = (params) =>{
    return instance.request({
        url:'mall/oms-company-address/del/'+params.id,
        method:'GET'
    })
}
// 修改
const edit = (data) => {
    return instance.request({
        url: 'mall/oms-company-address/edit',
        method: 'POST',
        data
    })
}

export{
    getCompanyPage,
    getOne,
    save,
    del,
    edit
}