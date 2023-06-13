import instance from "./axios";
const userLogin=(data)=>{
    //返回Promise对象
    return instance.request({
        url:'http://mall.qzimp.cn/doc.html', //url=baseUrl+url,
        method:'post',
        data,
        headers:{

        }
    })
}

const adminLogin=(data)=>{
    return instance.request({
        url:'',
        method:'',
        data
    })
}
const pms_albumPage=(data)=>{
    return instance.request({
        url:'/mall/pms-album/page',
        method:'post',
        data
    })
}
const pms_albumDelId=(params)=>{
    return instance.request({
        url:'/mall/pms-album/del/'+ params.id,
        params
    })
}
const pms_albumAdd=(data)=>{
    return instance.request({
      url:'/mall/pms-album/add',
      method :'post',
      data
  })
  }
  const pms_albumEdit=(data)=>{
    return instance.request({
      url:'/mall/pms-album/edit',
      method :'post',
     data
  })
  } 
  const getonepms_album=(params)=>{
    return instance.request({
      url:'/mall/pms-album/one/'+params.id,
      method :'get',
      params
  })
  }
const adminLogin1=function(data){
    return instance.request({
    url:'', 
    method:'post',
    data
})
}



export {
    userLogin,
    adminLogin,
    pms_albumPage,
    pms_albumDelId,
    pms_albumAdd,
    getonepms_album,
    pms_albumEdit
} 