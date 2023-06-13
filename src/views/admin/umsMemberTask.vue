<template>
    <div>
        <!-- 表格视图 -->
        <el-card>
              <div class="rig">
             <div class="title">用户任务管理</div>

  <el-input
      v-model="input"
      class="w-50 m-2"
      style="width:200px; margin-bottom:10px"
      placeholder="请输入id"
      :suffix-icon="Search"
    /><el-button :icon="Search" circle style="margin-bottom:10px;margin-left:5px" @click="search">
    <el-icon><Search /></el-icon>
    </el-button>
    <el-button type="primary" style="margin-left:50px;margin-bottom:10px" @click="showDialog()"><el-icon><Plus /></el-icon>添加信息</el-button>
    <el-button type="success" style="margin-left:40px;margin-bottom:10px" @click="update()"><el-icon><Refresh /></el-icon></el-button>
      </div>
        <div>
            <el-table :data="showData" stripe style="width:100%;height:580px" :row-style="{ height: '60px' }" border>
                <el-table-column prop="id" label="编号" width="250" align="center">
                    <template #default="scope">
                        {{ (resuleData.current - 1) * resuleData.size + scope.$index + 1 }}
                    </template>
                </el-table-column>
                <el-table-column prop="id" label="id"  align="center" />
                <el-table-column prop="growth" label="赠送成长值(exp)"  align="center" />
                <el-table-column prop="intergration" label="赠送积分(分)"  align="center" />
                <el-table-column prop="name" label="名称" width="250" align="center" />
                <el-table-column prop="type" label="任务类型0->新手任务；1->日常任务" align="center" />
                <el-table-column label="功能管理" fixed="right" width="180" align="center">
                    <template #default="scope">
                         <el-button size="small" @click="showEdit(scope.row)"><el-icon><EditPen /></el-icon>编辑</el-button>
                        <el-button size="small" type="danger" @click="del(scope.row)"><el-icon><Delete /></el-icon>删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 分页 -->
        <div style="margin-top:10px">
            <el-pagination v-model:current-page="resuleData.current" v-model:page-size="resuleData.size"
                :page-sizes="[10, 20, 30, 40]" layout="total, prev, pager, next, jumper, sizes" :total="resuleData.total"
                @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>
        </el-card>


        <!-- 新增修改对话框 -->
        <el-dialog v-model="dialogVisible" :title="isEdit ? '修改数据' : '新增数据'" width="600px" v-if="dialogVisible">
            <el-form ref="dialogForm" :model="itemData" :rules="rules">
                <!-- <el-form-item label="编号" :label-width="100" prop="id">
                    <el-input v-model.number="itemData.id" autocomplete="off" type="text" style="width: 200px/>
                </el-form-item> -->
                <el-form-item label="成长值" :label-width="100" prop="growth">
                    <el-input v-model.number="itemData.growth" autocomplete="off" type="text" />
                </el-form-item>
                <el-form-item label="积分" :label-width="100" prop="intergration">
                    <el-input v-model.number="itemData.intergration" autocomplete="off" type="text" />
                </el-form-item>
                <el-form-item label="名称" :label-width="100" prop="name">
                    <el-input v-model.number="itemData.name" autocomplete="off" type="text" />
                </el-form-item>
                <el-form-item label="任务类型" :label-width="100" prop="type">
                 <el-radio-group v-model="radio">
              <el-radio :label="0">新手任务</el-radio>
              <el-radio :label="1">日常任务</el-radio>
  </el-radio-group>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button type="Plus" @click="confire()">取消</el-button>
                    <el-button type="success" @click="isEdit ? editConfirm() : confirm()">确认</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
<script>
import { defineComponent } from "vue"
import { getMemberTask, getOne, save, edit, del } from '../../http/umsMemberTask'


export default defineComponent({
    data() {
        return {
            input:'',
            showData:[],
           radio:3,
            requestData: {
                current: 1,
                size: 10
            },
            resuleData: {},
            dialogVisible: false,//对话框显示，默认为不显示
            itemData: {}, //单条数据内容
            isEdit: false, //false时为新增，true时为修改

            //表单校验
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ]
            },
            userStatus: false
        }
    },
    methods: {
        update(){
            this.findPage()
            this.input=''
        },
        search(){
            getOne({id:this.input}).then(res=>{
                console.log(res)
                this.showData=[]
                this.showData[0]=res.data.help
                
            })
        },
        //修改用户状态
        changStatus(val) {
            this.userStatus = val
            this.itemData.status = (this.userStatus ? 1 : 0)
        },
        findPage() {
            getMemberTask(this.requestData).then(res => {
                this.resuleData = res.data.page
                this.showData=this.resuleData.records
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
            this.radio=0
        },
        //确认按钮
        confirm() {
            this.itemData.type=this.radio
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
            this.radio=0
        },
        //修改
        showEdit(val) {
            this.isEdit = true
            this.userStatus = (val.status == 0 ? false : true)
            this.itemData = {
                id: val.id,
                growth: val.growth,
                intergration: val.intergration,
                name: val.name,
                type: val.type

            }
            if(val.type==0){
                this.radio=0
            }
            else{
                this.radio=1
            }
            console.log(this.itemData)
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

<style>
.rig{
  flex-direction: row;
}
.title{
  float: right;
  margin-right: 20px;
  font-size: 25px;
  font-weight: bold;
}
.el-pagination {
    justify-content: center;
}
</style>