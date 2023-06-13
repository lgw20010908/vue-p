//统一api管理
import instance from "./axios";
// data json         /mall/cms-topic/one/{id}

const topicPage=(data)=>{
   return instance.request({
    url:'mall/cms-topic/page',
    method:'post',
    data
   })
}
const topicDelId=(params)=>{
    return instance.request({
        url:'mall/cms-topic/del/'+params.id,
        method:"get",
        // params
    })
}
const topicAdd=(data)=>{
    return instance.request({
        url:'mall/cms-topic/add',
        method:'post',
        data
    })
}
const topicEdit=(data)=>{
    return instance.request({
        url:'mall/cms-topic/edit',
        method:'post',
        data
    })
}
// CmsTopicCategory(话题类别)
const topicCategoryPage=(data)=>{
    return instance.request({
     url:'mall/cms-topic-category/page',
     method:'post',
     data
    })
 }

 const topicCategoryOne=(data)=>{
    return instance.request({
     url:'/mall/cms-topic-category/one/{id}',
     method:'post', 
     data
    })
 }

//  const topicCategoryDelId=(params)=>{
//      return instance.request({
//          url:'mall/cms-topic-category/del/'+params.id,
//          method:"get",
//          // params
//      })
//  }

//  const topicCategoryAdd=(data)=>{
//      return instance.request({
//          url:' /mall/cms-topic-category/add',
//          method:'post',
//          data
//      })
//  }
//  const topicCategoryEdit=(data)=>{
//      return instance.request({
//          url:'mall/cms-topic-category/edit',
//          method:'post',
//          data
//      })
//  }



// const isEven = n => n % 2 === 0;


export {
    topicPage,
    topicDelId,
    topicAdd,
    topicEdit,
    topicCategoryPage,
    topicCategoryOne

} 