import instance from "./axios";
// data json
const getumsMenuPage=(data)=>{
    //返回Promise对象
   return instance.request({
        url:'mall/ums-menu/page', 
        method:'post',
        data,
      
    })
}
// 获取单一数据
const getOne = (params) =>{
    return instance.request({
        url:'mall/ums-menu/one/'+params.id,
        method:'GET'
    })
}

// 保存
const save = (data) =>{
    return instance.request({
        url:'/mall/ums-menu/add',
        method:'POST',
        data
    })
}
 const umsMenuDelId=(params)=>{
     return instance.request({
         url:'mall/ums-menu/del/'+params.id,
         method:'GET'
     })
 }
 const umsMenuAdd=(data)=>{
     return instance.request({
         url:'mall/ums-menu/add',
         method:'post',
         data
     })
 }
 const umsMenuEdit=(data)=>{
     return instance.request({
         url:'mall/ums-menu/edit',
         method:'post',
         data
     })
 }
 

export{
    getOne,
    save,
    getumsMenuPage,
    umsMenuDelId,
    umsMenuAdd,
    umsMenuEdit
}
