//统一api管理
import instance from "./axios";
// data json
const omsAdd=(data)=>{
   return instance.request({
        url:'/mall/oms-order-return-apply/add', //fullpath=baseURL+url  http://api.jqrjq.cn/api/mobile/elogin
        method:'post',
        data,
    })
}

const omsDelete=(params)=>{
    return instance.request({
        method:'get',
        url:'/mall/oms-order-return-apply/del/' + params.id
    })
}

const omsEdit=(data)=>{
   return instance.request({
        url:'/mall/oms-order-return-apply/edit', //fullpath=baseURL+url  http://api.jqrjq.cn/api/mobile/elogin
        method:'post',
        data,
    })
}
const omsPage=(data)=>{
   return instance.request({
        url:'/mall/oms-order-return-apply/page', //fullpath=baseURL+url  http://api.jqrjq.cn/api/mobile/elogin
        method:'post',
        data,
    })
}

export{
    omsAdd,
    omsDelete,
    omsEdit,
    omsPage
}