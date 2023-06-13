<template>
    <div class="">帮助页面</div>
    <br>
    <div class="cmHelps">
        <div class="adcate-tools">
            <el-button type="warning" @click="toAdd">添加</el-button>
        </div>
        <el-table :data="cmHelps" style="width: 100%">
            <el-table-column fixed prop="id" label="id" width="50" />
            <el-table-column prop="name" label="帮助名称" />
            <el-table-column prop="helpCount" label="帮助数量" width="120" />
            <el-table-column prop="icon" label="图标" width="120" />
            <el-table-column prop="showStatus" label="显示状态" width="120" />
            <el-table-column prop="sort" label="排序" width="120" />
            <el-table-column fixed="right" label="操作" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="toEdit(scope.row)">更新</el-button>
                    <el-button link type="primary" size="small" @click="del(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination layout="prev, pager, next" :page-size="page.size" :total="page.total"
            @current-change="currentchange" />

    </div>
    <el-dialog v-model="dialogFormVisible" title="编辑">
        <el-form :model="cmHelp">
            <el-form-item label="帮助名称" :label-width="formLabelWidth">
                <el-input v-model="cmHelp.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="帮助数量" :label-width="formLabelWidth">
                <el-input v-model="cmHelp.helpCount" autocomplete="off" />
            </el-form-item><el-form-item label="图标" :label-width="formLabelWidth">
                <el-input v-model="cmHelp.icon" autocomplete="off" />
            </el-form-item><el-form-item label="显示状态" :label-width="formLabelWidth">
                <el-input v-model="cmHelp.showStatus" autocomplete="off" />
            </el-form-item><el-form-item label="排序" :label-width="formLabelWidth">
                <el-input v-model="cmHelp.sort" autocomplete="off" />
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
</template>
   
<script>
import { defineComponent } from "vue"
import { cmHelpPage, cmHelpAdd, cmHelpDel, cmHelpEdit } from "../../http/cmshelpcategory"
import { ElMessage } from 'element-plus'
import { cloneDeep } from 'lodash-es'

export default defineComponent({
    data() {
        return {
            cmHelps: [],
            page: {
                total: 0,
                current: 1,
                size: 5
            },
            dialogFormVisible: false,
            cmHelp: {
                "helpCount": 0,
                "icon": "",
                "id": 0,
                "name": "",
                "showStatus": 0,
                "sort": 0
            },
            formLabelWidth: 80

        }

    },
    mounted() {
        this.getCmHelpsPage(1)

    },
    methods: {
        toEdit(cmHelp) {
            console.log(cmHelp);
            this.dialogFormVisible = true;
            this.cmHelp = cloneDeep(cmHelp);

        },
        getCmHelpsPage(current) {
            const data = {
                current: current,
                size: 5
            }
            cmHelpPage(data).then(res => {
                console.log(res)
                const page = res.data.page;
                this.cmHelps = page.records;
                this.page = page;
            }).catch(err => {
                console.log(err)
            })
        },
        currentchange(current) {
            this.getCmHelpsPage(current);
            this.page.current = current;//数据更新到目前显示的页面
        },

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
                cmHelpDel({ id: val.id }).then(res => {
                    if (res.code === 1) {
                        ElMessage({
                            type: 'success',
                            message: '删除成功',
                        })
                        this.getCmHelpsPage(this.page.current)
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
        },
        toAdd() {
            this.cmHelp = {
                "helpCount": 0,
                "icon": "",
                "id": 0,
                "name": "",
                "showStatus": 0,
                "sort": 0
            },
                this.dialogFormVisible = true


        },

        save() {
            const cmHelp = this.cmHelp
            if (cmHelp.id == 0) {
                cmHelpAdd(cmHelp).then(res => {
                    if (res.success) {
                        this.dialogFormVisible = false
                        this.getCmHelpsPage(this.page.current)
                        ElMessage(res.msg)
                    } else {
                        ElMessage(res.msg)
                        return false
                    }

                }).catch(err => {
                    ElMessage("网络错误联系管理员")
                    console.log(err)
                })

            } else {
                cmHelpEdit(cmHelp).then(res => {
                    if (res.success) {
                        this.dialogFormVisible = false
                        this.getCmHelpsPage(this.page.current)
                        ElMessage(res.msg)
                    } else {
                        ElMessage(res.msg)
                        return false
                    }

                }).catch(err => {
                    ElMessage("网络错误联系管理员")
                })
            }

        }


    }

});
</script>

<style lang="scss" scoped></style>