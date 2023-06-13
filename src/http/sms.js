//统一api管理
import instance from "./axios";
// data json
const smsAdd=(data)=>{
   return instance.request({
        url:'/mall/sms-flash-promotion-session/add', //fullpath=baseURL+url  http://api.jqrjq.cn/api/mobile/elogin
        method:'post',
        data,
    })
}

const smsDelete=(params)=>{
    return instance.request({
        method:'get',
        url:'/mall/sms-flash-promotion-session/del/' + params.id
    })
}

const smsEdit=(data)=>{
   return instance.request({
        url:'/mall/sms-flash-promotion-session/edit', //fullpath=baseURL+url  http://api.jqrjq.cn/api/mobile/elogin
        method:'post',
        data,
    })
}
const smsPage=(data)=>{
   return instance.request({
        url:'/mall/sms-flash-promotion-session/page', //fullpath=baseURL+url  http://api.jqrjq.cn/api/mobile/elogin
        method:'post',
        data,
    })
}

export{
    smsAdd,
    smsDelete,
    smsEdit,
    smsPage
}