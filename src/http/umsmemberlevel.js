import instance from "./axios";
// data json
const getumsMemberlevelsPage=(data)=>{
    //返回Promise对象
   return instance.request({
        url:'mall/ums-member-level/page', //fullpath=baseURL+url  http://api.jqrjq.cn/api/mobile/elogin
        method:'post',
        data,
      
    })
}
// 获取单一数据
const getOne = (params) =>{
    return instance.request({
        url:'mall/ums-member-level/one/'+params.id,
        method:'GET'
    })
}
const save = (data) =>{
    return instance.request({
        url:'/mall/ums-member-receive-address/add',
        method:'POST',
        data
    })
}
 const umsMemberlevelDelId=(params)=>{
     return instance.request({
         url:'mall/ums-member-level/del/'+params.id,
         method:'GET'
     })
 }
 const umsMemberlevelAdd=(data)=>{
     return instance.request({
         url:'/mall/ums-member-receive-address/add',
         method:'post',
         data
     })
 }
 const umsMemberlevelEdit=(data)=>{
     return instance.request({
         url:'mall/ums-member-level/edit',
         method:'post',
         data
     })
 }
 

export{
    getumsMemberlevelsPage,
    umsMemberlevelDelId,
    umsMemberlevelAdd,
    umsMemberlevelEdit,
    getOne,
    save
}