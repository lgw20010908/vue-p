<template>
    <div>
        <div class="order">
            <h2>订单设置表</h2>
                <el-button type="warning" plain  icon="Edit" @click="showDialog()">新增</el-button>
        </div>
        <div>
            <el-table :data="relsetData.records" stripe=true border=true style="width: 100%">
                    <el-table-column label="编号" width="180">
                        <template #default="scope">
                            {{ (relsetData.current - 1) *relsetData.size + scope.$index + 1 }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="commentOvertime" label="订单完成后自动好评时间（天）" width="120" />
                    <el-table-column prop="confirmOvertime" label="发货后自动确认收货时间（天）" width="150" />
                    <el-table-column prop="finishOvertime" label="自动完成交易时间，不能申请售后（天）" width="130" />
                    <el-table-column prop="flashOrderOvertime" label="秒杀订单超时关闭时间(分)" width="180" />
                    <el-table-column prop="normalOrderOvertime" label="正常订单超时时间(分)" width="170" />


                    <el-table-column label="操作">
                        <template #default="scope">
                            <el-button size="small" type="success" plain round @click="showEdit(scope.row)">编辑</el-button>
                            <el-button size="small" type="danger" plain round @click="del(scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
            </el-table>
        </div>

        <!-- 分页 -->
        <div>
            <el-pagination v-model:current-page="relsetData.current" v-model:page-size="relsetData.size"
                :page-sizes="[4, 8, 12, 16]" layout="total, sizes, prev, pager, next, jumper" :total="relsetData.total"
                @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>
         <!-- 新增修改对话框 -->
        <el-dialog v-model="dialogVisible" :title="isEdit ? '修改数据' : '新增数据'" width="400px" v-if="dialogVisible">
            <el-form ref="dialogForm" :model="itemData" :order="orders">
                <el-form-item label="订单完成后自动好评时间（天）" :label-width="formLabelWidth">
                    <el-input v-model="itemData.commentOvertime" autocomplete="off" style="width: 150px;" />
                </el-form-item>
                <el-form-item label="发货后自动确认收货时间（天）" :label-width="formLabelWidth">
                    <el-input v-model="itemData.confirmOvertime" autocomplete="off" style="width: 150px;" />
                </el-form-item>
                <el-form-item label="自动完成交易时间，不能申请售后（天" :label-width="formLabelWidth">
                    <el-input v-model="itemData.finishOvertime" autocomplete="off" style="width: 150px;" />
                </el-form-item>
                <el-form-item label="秒杀订单超时关闭时间(分)" :label-width="formLabelWidth">
                    <el-input v-model="itemData.flashOrderOvertime" autocomplete="off" style="width: 150px;" />
                </el-form-item>
                <el-form-item label="正常订单超时时间(分)" :label-width="formLabelWidth">
                    <el-input v-model="itemData.normalOrderOvertime" autocomplete="off" style="width: 150px;" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" @click="confire()">取消</el-button>
                    <el-button type="primary" @click="isEdit ? editConfirm() : confirm()">确认</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue';
import { getList,del,one,add,edit } from '../../http/omsordersetting'
import { ElMessage } from 'element-plus'
import { Edit} from '@element-plus/icons-vue'
export default defineComponent({
    data() {
        return {
            requestData: {
                current: 1,
                size: 5
            },
            relsetData: {},
            dialogVisible: false,//对话框显示，默认为不显示
            itemData: {}, //单条数据内容
            isEdit: false, //false时为新增，true时为修改
            //表单校验
            orders: {
                commentOvertime: [
                    { required: true, message: '请输入订单完成后自动好评时间（天', trigger: 'blur' },
                ],
                confirmOvertime: [
                    { required: true, message: '请输入发货后自动确认收货时间（天', trigger: 'blur' },
                ],
                finishOvertime: [
                    { required: true, message: '请输入秒杀订单超时关闭时间(分)', trigger: 'blur' },
                ],
                flashOrderOvertime: [
                    { required: true, message: '请输入正常订单超时时间(分)', trigger: 'blur' },
                ],
                normalOrderOvertime: [
                    { required: true, message: '每笔正常订单超时时间(分)', trigger: 'blur' },
                ],
                 
            }
        }
    },
    methods: {

        findPage() {
            getList(this.requestData).then(res => {
                this.relsetData = res.data.page
            })
        },
        //改变数据量
        handleSizeChange(val) {
            this.requestData.size = val
            this.findPage()
        },
        //改变页码
        handleCurrentChange(val) {
            this.requestData.current = val
            this.findPage()
        },
        //打开弹窗
        showDialog() {
            this.isEdit = false
            this.itemData = {}
            this.dialogVisible = true
        },
        //确认按钮
        confirm() {
            this.$refs['dialogForm'].validate((valid) => {
                if (valid) {
                    //获取当前的时间为创建事件
                    this.itemData.createTime = new Date()
                    //调用新增接口
                    add(this.itemData).then(res => {
                        //新增成功时
                        if (res.code === 1) {
                            this.dialogVisible = false
                            ElMessage({
                                message: '新增成功',
                                type: 'success',
                            })
                            this.findPage()
                        } else {
                            ElMessage({
                                message: '新增失败',
                                type: 'error',
                            })
                        }
                    })
                } else {
                    return false
                }
            })

        },
        //取消按钮
        confire() {
            this.dialogVisible = false
            this.itemData = {}
        },
        //修改
        showEdit(val) {
            this.isEdit = true
            this.itemData = {
                id: val.id,
                commentOvertime: val.commentOvertime,
                confirmOvertime: val.confirmOvertime,
                finishOvertime: val.finishOvertime,
                flashOrderOvertime: val.flashOrderOvertime,
                normalOrderOvertime: val.normalOrderOvertime,
            }
            this.dialogVisible = true
        },
        //修改确认按钮
        editConfirm() {
            this.$refs['dialogForm'].validate((valid) => {
                if (valid) {
                    edit(this.itemData).then(res => {
                        if (res.code === 1) {
                            this.dialogVisible = false
                            ElMessage({
                                message: '修改成功',
                                type: 'success',
                            })
                            this.findPage()
                        } else {
                            ElMessage({
                                message: '修改失败',
                                type: 'error',
                            })
                        }
                    })

                } else {
                    return false
                }
            })
        },
        //删除
        del(val) {
            console.log(val)
            ElMessageBox.confirm(
                '是否删除该记录?',
                '删除数据',
                {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                }
            ).then(() => {
                //调用删除接口
                del({
                    id: val.id
                }).then(res => {
                    if (res.code === 1) {
                        ElMessage({
                            type: 'success',
                            message: '删除成功',
                        })
                        this.findPage()
                    } else {
                        ElMessage({
                            type: 'error',
                            message: '删除失败',
                        })
                    }
                })

            }).catch(() => {
                ElMessage({
                    type: 'info',
                    message: '取消删除',
                })
            })
        }
    },
    mounted() {

        this.findPage()
    }
})
</script>
<style lang='css' scoped></style>