import instance from "./axios";
// data json
const getList=(data)=>{
    //返回Promise对象
   return instance.request({
        url:'/mall/oms-order-setting/page', //fullpath=baseURL+url http://mall.qzimp.cn/doc.html
        method:'post',
        data,
   })
}
const add=(data)=>{
       return instance.request({
            url:'/mall/oms-order-setting/add', //fullpath=baseURL+url  http://mall.qzimp.cn/doc.html
            method:'post',
            data,
          
        }) 

}
const del=(params)=>{
    return instance.request({
         url:'/mall/oms-order-setting/del/'+params.id, //fullpath=baseURL+url  http://mall.qzimp.cn/doc.html
         method:'get',
      
       
     }) 

}
const edit=(data)=>{
    return instance.request({
         url:'/mall/oms-order-setting/edit', //fullpath=baseURL+url  http://mall.qzimp.cn/doc.html
         method:'post',
         data,
       
     }) 

}
const one=(params)=>{
    return instance.request({
         url:'/mall/oms-order-setting/one/'+params.id, //fullpath=baseURL+url  http://mall.qzimp.cn/doc.html
         method:'get',
         data,
       
     }) 

}
export{
    edit,
    del,
    add,
    getList,
    one,
}