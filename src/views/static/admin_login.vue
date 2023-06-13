<template>
<div class="con">
    <div class="login_box">
        <div class="title">
          登录
      </div>

    <el-form ref="loginFormref" 
             :model="loginForm" 
             :rules="loginFromRules"
            label-width="0px" 
            class="login_form">

        <el-form-item prop="userName">
            <el-input
             prefix-icon="el-icon-user"
              v-model="loginForm.name">
              </el-input>
        </el-form-item>

        <el-form-item prop="password">
            <el-input
            prefix-icon="el-icon-s-cooperation" 
            v-model="loginForm.password"
            show-password>
            </el-input>
        </el-form-item>

        <el-form-item class="btns">
             <el-button type="primary"
             @click="login">
                 登录
             </el-button>
        </el-form-item>
    </el-form>
</div>
</div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    data(){
        return{
        loginForm: {
            name: 'zs',
            password: '123'

        },
        regData:{
            name: '',
            password: '',
            phonenumber: ''
        },
        dialogFormVisible: false,
        //表单验证规则
        loginFromRules:{

            name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            //blur失去焦点的时候
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
            ],

            password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
            ]
        },
        regrules:{
            name: [{ required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }],

            password:[{ required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }],

            phonenumber:[{ required: true, message: '请输入手机号', trigger: 'blur' },
            { min: 11, max: 11, message: '不是正常手机号码格式', trigger: 'blur' }]
        }
        
        }
        
    },
    methods: {
        login(){      
            this.$router.push("/user1_manage")
        },
        
        
        
        
}
});
</script>
<style>
.con{
  width: 100%;
  height: 755px;
  background-image:url("../../src/assets/2.png");
   background-size: 100% 100%;
   background-repeat: no-repeat;
}
.title{
    width: 200px;
    height: 100px;
    font-size: 30px;
    font-weight: bold;
    color: white;
    margin: 0 auto;
    margin-top: 30px;
    text-align: center;
}

.login_box{
    width: 450px;
    height: 300px;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
     background-color: rgba(55, 52, 66, 0.5);

}

</style>
