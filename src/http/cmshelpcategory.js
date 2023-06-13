//统一api管理
import instance from "./axios";

const cmHelpPage=(data)=>{
    return instance.request({
     url:'/mall/cms-help-category/page',
     method:'post',
     data
    })
 }

 const cmHelpAdd=(data)=>{
    return instance.request({
     url:'/mall/cms-help-category/add',
     method:'post',
     data
    })
 }

 const cmHelpDel=(params)=>{
    return instance.request({
     url:'/mall/cms-help-category/del/'+params.id,
     method:'get'
    })
 }

 const cmHelpEdit=(data)=>{
    return instance.request({
     url:'/mall/cms-help-category/edit',
     method:'post',
     data
    })
 }

 export{
    cmHelpPage,
    cmHelpAdd,
    cmHelpDel,
    cmHelpEdit
   
}



