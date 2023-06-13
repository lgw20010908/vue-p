//统一api管理
import instance from "./axios";
// data json
const userLogin=(data)=>{
    //返回Promise对象
   return instance.request({
        url:'api/mobile/elogin', //fullpath=baseURL+url  http://api.jqrjq.cn/api/mobile/elogin
        method:'post',
        data,
      
    })
}
const adminLogin=(data)=>{
   return instance.request({
    url:'', //url=baseURL+url
        method:'post',
        data
   })
}
const subjectAdd=(data)=>{
    //返回Promise对象
   return instance.request({
        url:'mall/cms-subject/add',
        method:'post',
        data,
      
    })
}
const subjectDel=(params)=>{
    return instance.request({
        url:'mall/cms-subject/del/'+params.id,
    })
}
const subjectEdit=(data)=>{
    return instance.request({
        url:'mall/cms-subject/edit',
        method:'post',
        data
    })
}
const subjectGetOne=(params)=>{
    return instance.request({
        url:'mall/cms-subject/one',
        params
    })
}
const subjectPage=(data)=>{
    return instance.request({
     url:'mall/cms-subject/page',
     method:'post',
     data
    })
 }

export {
    userLogin,
    adminLogin,
    subjectAdd,
    subjectDel,
    subjectEdit,
    subjectGetOne,
    subjectPage,
} 