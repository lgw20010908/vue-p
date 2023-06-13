<template>
<div class="header">
    <div class="user">
         <el-tooltip
        class="box-item"
        effect="dark"
        content="当前状态未登录，登录享受更多服务"
        placement="bottom-start"
      >
      <el-avatar :size="80">{{username}}</el-avatar>
      </el-tooltip>
        
    </div>
  <div class="user_info">
    <div class="level">铂金会员</div>
    <div class="tab">
     <el-tag >购物狂</el-tag>
     <el-tag class="ml-2" type="success">贵族</el-tag>
    </div>
  </div>
  <div class="login_control">
      <el-dropdown :hide-on-click="false">
    <span class="el-dropdown-link">
     <el-button type="primary"><el-icon><Promotion /></el-icon>登录</el-button>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>用户登录</el-dropdown-item>
        <el-dropdown-item  @click="admin_login()">管理员登录</el-dropdown-item>     
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  </div>

</div>
<div class="banner">
  <el-tabs  class="demo-tabs" v-model="activeName" @tab-click="select">
    <el-tab-pane name="user1_home"> 
      <template #label>
        <span class="nav_item">
          <el-icon><House /></el-icon>
          <span >首页</span>
        </span>
      </template>
    </el-tab-pane>
    <el-tab-pane name="person">
      <template #label>
        <span class="nav_item">
        <el-icon><Setting /></el-icon>
          <span >个人中心</span>
        </span>
      </template>
    </el-tab-pane>
  </el-tabs>
</div>
<router-view></router-view>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
      return {
          activeName:'user1_home',
          username:'赖国伟'

      }},

      mounted(){
      },

  methods: {
     select() {
        this.$router.push({
          name: this.activeName,
          params:{username:this.username}})
      },
      admin_login(){
          this.$router.push("/admin_login")
      }

  },
});
</script>
<style>
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.login_control{
    float: right;
    margin-right: 20px;
    height: 40px;
    width: 100px;
    padding-top: 35px;

}
.ml-2{
    margin-left: 5px;
}
.level{
    padding-top: 30px;
    height: 15px;
    font-size: 15px;

}
.tab{
    height: 40px;
     font-size: 13px;
     line-height: 40px;
     flex-direction: row;
}
.user{
    height: 100%;
    width: 80px;
    float: left;
}
.user_info{
    height: 100%;
    width: 200px;
    flex-direction: line; 
    margin-left: 5px;
    float: left;
}
.header{
    height: 80px;
    width: 100%;
    background:white;
    flex-direction: row;
    justify-content: center;
    }
.demo-tabs{
    height: 70px;
    width: 600px;
    background-color: rgba(55, 52, 66, 0.5);
    margin: 0 auto;
    padding-top: 30px;
    
}
.nav_item{
    font-size: 25px;
    color: white;
}
.demo-tabs > .el-tabs__content {
  padding: 50px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
.banner{
  margin-top: 10px;
  width: 100%;
  height: 200px;
  background-image:url("../../src/assets/banner1.jpg");
   background-size: 100% 100%;
   background-repeat: no-repeat;
}
</style>
