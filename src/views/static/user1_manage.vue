<template>
    <div class="con">
  <div class="header"> 
         <div><el-avatar :size="50">管理员</el-avatar></div>
          <span>后台管理</span>
      <el-button type="info"  @click="centerDialogVisible = true" style="margin-right:10px">退出</el-button>
      </div>
  
    <div class="aside" width="200px">
        <el-menu 
        active-text-color="#ffd04b"
        background-color="##333744"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        :router="true"
        :unique-opened="true"
      >
        <el-sub-menu :index="item.id+''" v-for="item in menuList" :key="item.id">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item :index="secondaryitem.path" v-for="secondaryitem in item.secondaryMenuslist

" :key="secondaryitem.id">
               <template  #title>
<!--图标-->
          <el-icon><location /></el-icon>
<!--文本-->
          <span>{{secondaryitem.name}}</span>
        </template>
          </el-menu-item>
          </el-sub-menu>
        
      </el-menu>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
</div>
<el-dialog v-model="centerDialogVisible" title="提示" width="30%" center>
    <span>
    此操作将推出管理系统，是否继续？
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="login_out">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    data()
    {return{
       menuList:[{id:1,name:'用户基本管理',secondaryMenuslist:[{id:11,name:'用户信息管理',path:'/umsMember'},{id:12,name:'用户统计信息管理',path:'/umsMemberStatics'}]},
      {id:2,name:'用户等级管理',secondaryMenuslist:[{id:21,name:'用户等级管理',path:'/umsMemberlevel'}]},
       {id:3,name:'用户任务管理',secondaryMenuslist:[{id:31,name:'用户任务管理',path:'/umsMemberTask'}]},
       {id:4,name:'用户标签管理',secondaryMenuslist:[{id:41,name:'用户标签管理',path:'/umsMemberTag'},{id:42,name:'用户标签关系管理',path:'/umsMemberTagreation'}]},
        {id:5,name:'用户收货地址管理',secondaryMenuslist:[{id:51,name:'用户收货地址管理',path:'/umsMemberAddress'}]},
        
      ],
      centerDialogVisible:false
    }},
    methods:{
        login_out(){
            this.$router.push('/user1')
        },
     
         handleOpen(){},
         handleClose(){},
        
        
      
    }

})
</script>
<style >
.con{
    height: 100%;
}
.header{
    background-color: #373D43;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    color: aliceblue;
    font-size: 20px;
    
}
.aside{
    float: left;
    height: 710px;
    background-color: #333744;

}
.main{
    height: 700px;
    width: 100%;
    background-color: aliceblue;
}

</style>
