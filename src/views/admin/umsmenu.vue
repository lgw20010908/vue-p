<template>
    <div>
        <el-input v-model="searchText" placeholder="请输入搜索关键字" clearable @clear="clearSearch" @keyup.enter="performSearch"
      style="margin-bottom: 20px;"></el-input>
        <div>
            <el-button type="primary" @click="showDialog()">新增</el-button>
        </div>
        <!-- 表格视图 -->
        <div>
            <el-table :data="resuleData.records" style="width: 100%">
                <el-table-column label="id" width="100">
                    <template #default="scope">
                        {{ (resuleData.current - 1) * resuleData.size + scope.$index + 1 }}
                    </template>
                </el-table-column>
                <el-table-column prop="parentId" label="父级ID" width="100" />
                <el-table-column prop="createTime" label="创建时间" width="120"/>
                <el-table-column prop="title" label="菜单名称" width="120" />
                <el-table-column prop="level" label="菜单级数" width="120"/>
                <el-table-column prop="sort" label="菜单排序" width="120" />
                <el-table-column prop="name" label="前端名称" width="120"/>
                <el-table-column prop="icon" label="前端图标" width="120" />
                <el-table-column prop="hidden" label="前端隐藏" width="120"/>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button size="small" @click=" showumsMenuEdit(scope.row)">编辑</el-button>
                        <el-button size="small" type="danger" @click="umsMenuDelId(scope.row)">删除</el-button>
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
                <el-form-item label="菜单名称" label-width="100" prop="title">
                <el-input v-model="itemData.title" autocomplete="off" style="width: 200px;" />
                </el-form-item>
                <el-form-item label="菜单级数" label-width="100" prop="level">
                <el-input v-model="itemData.level" autocomplete="off" style="width: 200px;" />
                </el-form-item>
                <el-form-item label="菜单分类" label-width="100" prop="sort">
                <el-input v-model="itemData.sort" autocomplete="off" style="width: 200px;" />
                </el-form-item>
                <el-form-item label="前端名称" label-width="100" prop="name">
                <el-input v-model="itemData.name" autocomplete="off" style="width: 200px;" />
                </el-form-item>
                <el-form-item label="前端图标" label-width="100" prop="icon">
                <el-input v-model="itemData.icon" autocomplete="off" style="width: 200px;" />
                </el-form-item>
                <el-form-item label="前端隐藏" label-width="100" prop="hidden">
                <el-input v-model="itemData.hidden" autocomplete="off" style="width: 200px;" />
                </el-form-item>
                </el-form>

            <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" @click="confire()">取消</el-button>
                    <el-button type="primary" @click="isEdit ? EditConfirm() : confirm()">确认</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script>
import { defineComponent } from "vue"
import { getumsMenuPage,getOne, umsMenuAdd, save, umsMenuEdit, umsMenuDelId } from '../../http/umsmenu'
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
               
            }
        }
    },
    methods: {
        findPage() {
            getumsMenuPage(this.requestData).then(res => {
                this.resuleData = res.data.page
                console.log(this.resuleData);
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
                    this.itemData.create_time = new Date()
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
        showumsMenuEdit(val) {
            this.isumsMenuEdit = true
            this.itemData = {
                id: val.id,
                parent_id: val.parent_id,
                createTime: val.createTime,
                title: val.title,
                sort: val.sort,
                name: val.name,
                icon: val.icon,
                hidden:val.hidden
            }
            this.dialogVisible = true
        },
        //修改确认按钮
        EditConfirm() {
            this.$refs['dialogForm'].validate((valid) => {
                if (valid) {
                    umsMenuEdit(this.itemData).then(res => {
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
        umsMenuDelId(val) {
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
                umsMenuDelId({
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