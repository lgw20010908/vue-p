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
            <el-table-column prop="companyAddressId" label="收货地址id" width="180" />
            <el-table-column prop="productId" label="产品id" width="100" />
            <el-table-column prop="createTime" label="创建时间" width="100" />
            <el-table-column prop="memberUsername" label="会员用户名" width="180"/>
            <el-table-column prop="returnName" label="退货人姓名" width="180" />
            <el-table-column prop="productName" label="商品名称" width="180" />

            <el-table-column prop="productBrand" label="品牌" width="100" />
            <el-table-column prop="productAttr" label="商品属性" width="180" />
            <el-table-column prop="description" label="描述" width="180" />
            <el-table-column prop="reason" label="原因" width="180" />



            <el-table-column label="操作">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" @click="del(scope.row.id)">删除</el-button>

                    <!-- <el-button size="small" type="danger" @click="btnClick">组件自定义事件</el-button>
              <el-button size="small" type="danger" @click="btnClick1">子父传参</el-button> -->

                </template>
            </el-table-column>

        </el-table>

        <el-dialog v-model="dialogFormVisible" title="编辑/新建">
            <el-form :model="choiceRow" :rules="rules">
                <el-form-item label="收货地址id" :label-width="formLabelWidth" prop="id">
                    <el-input v-model.number="choiceRow.id" autocomplete="off" type="text" />
                </el-form-item>
                <el-form-item label="申请时间" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.createTime" autocomplete="off" />
                </el-form-item>
                <el-form-item label="描述" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.createTime" autocomplete="off" />
                </el-form-item>
                <el-form-item label="处理人员" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.handleMan" autocomplete="off" />
                </el-form-item>
                <el-form-item label="处理备注" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.handleNote" autocomplete="off" :rows="3" type="textarea" />
                </el-form-item>
                <el-form-item label="处理时间" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.handleTime" autocomplete="off" />
                </el-form-item>
                <el-form-item label="会员用户名" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.memberUsername" autocomplete="off" />
                </el-form-item>

                <el-form-item label="订单id" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.orderId" autocomplete="off" />
                </el-form-item>
                <el-form-item label="订单编号" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.orderSn" autocomplete="off" />
                </el-form-item>
                <el-form-item label="商品销售属性" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.productAttr" autocomplete="off" />
                </el-form-item>
                <el-form-item label="商品品牌" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.productBrand" autocomplete="off" />
                </el-form-item>
                <el-form-item label="退货数量" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.productCount" autocomplete="off" />
                </el-form-item>
                <el-form-item label="退货商品id" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.productId" autocomplete="off" />
                </el-form-item>
                <el-form-item label="商品名称" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.productName" autocomplete="off" />
                </el-form-item>
                <el-form-item label="商品图片" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.productPic" autocomplete="off" />
                </el-form-item>
                <el-form-item label="商品实际支付单价" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.productRealPrice" autocomplete="off" />
                </el-form-item>
                <el-form-item label="凭证图片" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.proofPics" autocomplete="off" />
                </el-form-item>

                <el-form-item label="原因" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.reason" autocomplete="off" />
                </el-form-item>
                <el-form-item label="收货人" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.receiveMan" autocomplete="off" />
                </el-form-item>
                <el-form-item label="收货备注" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.receiveNote" autocomplete="off" />
                </el-form-item>
                <el-form-item label="收货备注" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.receiveTime" autocomplete="off" />
                </el-form-item>
                <el-form-item label="退款金额" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.returnAmount" autocomplete="off" />
                </el-form-item>
                <el-form-item label="退货人姓名" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.returnName" autocomplete="off" />
                </el-form-item>
                <el-form-item label="退货人电话" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.returnPhone" autocomplete="off" />
                </el-form-item>
                <el-form-item label="申请状态" :label-width="formLabelWidth">
                    <el-input v-model="choiceRow.status" autocomplete="off" />
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
    omsAdd,
    omsDelete,
    omsEdit,
    omsPage
} from "../../http/oms"

export default defineComponent({
    data() {
        return {

            topics: [],
            page: {
                "current": 0,
                "size": 10
            },
            oms: {
                companyAddressId: 0,
                createTime: 0,
                description: '',
                handleMan: 0,
                handleNote: '',
                handleTime: '',
                id: '',
                memberUsername: '',
                orderId: 0,
                orderSn: '',
                productAttr: '',
                productBrand: '',
                productCount: '',
                productName: 0,
                productPic: '',
                productPrice: '',
                productRealPrice: '',
                proofPics: '',
                reason: 0,
                receiveMan: '',
                receiveNote: '',
                receiveTime: '',
                returnAmount: 0,
                returnName: '',
                returnName: '',
                status: '',
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
            omsDelete({id:id}).then(resp=>{
                this.getPage()
            })
        },
        save() {
            if (this.choiceRow.id == 0) {
                omsAdd(this.choiceRow).then(resp => {
                    this.dialogFormVisible = false
                    this.getPage()
                })
            } else {
                omsEdit(this.choiceRow).then(resp => {
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

            this.choiceRow = this.oms
            //添加到页面
            this.dialogFormVisible = true;

        },
        getPage() {
            omsPage(this.page).then(resp => {
                console.log('收到的数据:' + JSON.stringify(resp))
                this.topics = resp.data.page.records
                console.log('----------------' + JSON.stringify(this.topics[0]))
            })
        },
    }
})
</script>
  
<style lang="scss" scoped></style>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               