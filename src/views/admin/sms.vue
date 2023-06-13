<template>
    <div class="">
        <!-- saleclerks 店员管理 CURD -->
        <!-- 数据展示 table  组件-->
        <!-- 数据添加  表单 添加按钮, Icon -->
        <!-- 数据更新  表单  -->
        <!-- 数据删除  查询 -->
        <h3>
            <slot></slot>
        </h3>
        <div class="tools">
            <el-button icon="Plus" @click="toAdd" />
        </div>
        <slot name="header"></slot>
        <el-table :data="topics" style="width: 100%;">
            <el-table-column prop="id" label="编号" width="80" />
            <el-table-column prop="memberId" label="成员id" width="180" />
            <el-table-column prop="memberPhone" label="成员电话" width="180" />
            <el-table-column prop="productId" label="产品i" width="180" />
            <el-table-column prop="productName" label="商品名称" width="180"/>
            <el-table-column prop="sendTime" label="发送时间" width="180" />
            <el-table-column prop="subscribeTime" label="创建时间" width="180" />



            <el-table-column label="操作">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" @click="del(scope.row.id)">删除</el-button>

                    <!-- <el-button size="small" type="danger" @click="btnClick">组件自定义事件</el-button>
              <el-button size="small" type="danger" @click="btnClick1">子父传参</el-button> -->

                </template>
            </el-table-column>

        </el-table>

        <el-dialog v-model="dialogFormVisible" title="话题编辑">
            <el-form :model="choiceRow" :rules="rules">
                <el-form-item label="编号" :label-width="formLabelWidth" prop="id">
                    <el-input v-model.number="choiceRow.id" autocomplete="off" type="text" />
                </el-form-item>
                <el-form-item label="成员id" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.menberId" autocomplete="off" />
                </el-form-item>
                <el-form-item label="成员手机号" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.memberPhone" autocomplete="off" />
                </el-form-item>
                <el-form-item label="产品Id" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.productId" autocomplete="off" />
                </el-form-item>
                <el-form-item label="产品名称" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.productName" autocomplete="off" />
                </el-form-item>
                <el-form-item label="发送时间" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.sendTime" autocomplete="off" />
                </el-form-item>
                <el-form-item label="会员订阅时间" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.subsribeTime" autocomplete="off" :rows="5" type="textarea" />
                </el-form-item>

            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="save">
                        保存
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
  
<script>
import { defineComponent } from "vue"
import {
    smsAdd,
    smsDelete,
    smsEdit,
    smsPage
} from "../../http/sms"

export default defineComponent({
    data() {
        return {

            topics: [],
            page: {
                "current": 0,
                "size": 10
            },
            sms: {
                id: 0,
                memberId: 0,
                memberPhone: '',
                productId: 0,
                productName: '',
                sendTime: '',
                subsribeTime: '',
            },
            dialogFormVisible: false,//编辑框
            formLabelWidth: 70,
            dialogVisible: false,//确定提示框
            choiceRow: {}

        }
    },
    mounted() {//渲染完毕就开始调用
        this.getPage();
    },
    methods: {
        del(id){
            smsDelete({id:id}).then(resp=>{
                this.getPage()
            })
        },
        save() {
            if (this.choiceRow.id == 0) {
                smsAdd(this.choiceRow).then(resp => {
                    this.dialogFormVisible = false
                    this.getPage()
                })
            } else {
                smsEdit(this.choiceRow).then(resp => {
                    this.dialogFormVisible = false
                    this.getPage()
                })
            }
        },
        handleEdit(index, row) {
            this.choiceRow = row
            this.dialogFormVisible = true
        },
        toAdd() {

            this.choiceRow = this.sms
            //添加到页面
            this.dialogFormVisible = true;

        },
        getPage() {
            smsPage(this.page).then(resp => {
                console.log('收到的数据:' + JSON.stringify(resp))
                this.topics = resp.data.page.records
                console.log('----------------' + JSON.stringify(this.topics[0]))
            })
        },
    }
})
</script>
  
<style lang="scss" scoped></style>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               