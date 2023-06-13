<template>
    <div>
        <!-- 顶部工具栏 -->
        <div>
            <el-button type="primary" @click="showDialog()">新增</el-button>
        </div>
        <!-- 表格视图 -->
        <div>
            <el-table :data="resuleData.records" style="width: 100%">
                <el-table-column label="编号" width="180">
                    <template #default="scope">
                        {{ (resuleData.current - 1) * resuleData.size + scope.$index + 1 }}
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="分类名称" width="180" />
                <el-table-column prop="createTime" label="创建时间" />
                <el-table-column prop="sort" label="排序" />
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button size="small" @click="showEdit(scope.row)">编辑</el-button>
                        <el-button size="small" type="danger" @click="del(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 分页 -->
        <div>
            <el-pagination v-model:current-page="resuleData.current" v-model:page-size="resuleData.size"
                :page-sizes="[5, 10, 15, 20]" layout="total, sizes, prev, pager, next, jumper" :total="resuleData.total"
                @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>


        <!-- 新增修改对话框 -->
        <el-dialog v-model="dialogVisible" :title="isEdit ? '修改数据' : '新增数据'" width="400px" v-if="dialogVisible">
            <el-form ref="dialogForm" :model="itemData" :rules="rules">
                <el-form-item label="分类名称" label-width="100" prop="name">
                    <el-input v-model="itemData.name" autocomplete="off" style="width: 200px;" />
                </el-form-item>
                <el-form-item label="排序" label-width="100" prop="sort">
                    <el-input v-model="itemData.sort" autocomplete="off" style="width: 200px;" />
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
import { defineComponent } from "vue"
import { getList, getOne, save, edit, del } from '../../http/resouceCategory'


export default defineComponent({
    data() {
        return {
            requestData: {
                current: 1,
                size: 5
            },
            resuleData: {},
            dialogVisible: false,//对话框显示，默认为不显示
            itemData: {}, //单条数据内容
            isEdit: false, //false时为新增，true时为修改

            //表单校验
            rules: {
                name: [
                    { required: true, message: '请输入分类名称', trigger: 'blur' },
                ],
                sort: [
                    { required: true, message: '请输入排序大小', trigger: 'blur' },
                ]
            }
        }
    },
    methods: {
        findPage() {
            getList(this.requestData).then(res => {
                this.resuleData = res.data.page
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
                    save(this.itemData).then(res => {
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
                name: val.name,
                creatTime: val.createTime,
                sort: val.sort
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

<style></style>