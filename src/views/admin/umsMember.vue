<template>
<div style="width:100%">
    <div>
        <!-- 表格视图 -->
          <el-card>
               <div class="rig">
             <div class="title">用户信息管理</div>

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
            <el-table :data="resuleData.records" style="width: 100%;height:590px"  border>
                <el-table-column label="编号" width="80" align="center">
                    <template #default="scope">
                        {{ (resuleData.current - 1) * resuleData.size + scope.$index + 1 }}
                    </template>
                </el-table-column>
                <el-table-column prop="username" label="用户名" align="center"  />
                <el-table-column prop="nickname" label="昵称" align="center"  />
                <el-table-column prop="icon" label="头像" align="center" width="150">
                    <template #default="scope">
                        <el-image style="width: 100px; height: 100px" :src="scope.row.icon" fit="cover" />
                    </template>
                </el-table-column>
                <el-table-column prop="phone" label="手机号" align="center" width="200" />
                <el-table-column prop="gender" label="性别" align="center" widthh="50">
                    <template #default="scope">
                        {{ scope.row.gender == 1 ? '男' : (scope.row.gender == 2 ? '女' : '未知') }}
                    </template>
                </el-table-column>
                <el-table-column prop="birthday" :formatter="form_birthday" label="出生日期" align="center" width="150" />
                <el-table-column prop="city" label="城市" align="center" width="150" />
                <el-table-column prop="personalizedSignature" label="个性签名" align="center" width="200" />
                <el-table-column prop="integration" label="积分" align="center"  />
                <el-table-column prop="createTime" label="创建时间" :formatter="form_create" width="250" align="center"/>
                <el-table-column prop="status" fixed="right" label="状态" width="100" align="center">
                    <template #default="scope">
                        <el-tag v-if="scope.row.status===1" type="success">启用</el-tag>
                        <el-tag v-if="scope.row.status===0" type="error">禁用</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作" fixed="right" width="200" align="center">
                    <template #default="scope">
                        <el-button size="small" @click="showEdit(scope.row)"><el-icon><EditPen /></el-icon>编辑</el-button>
                        <el-button size="small" type="danger" @click="del(scope.row)"><el-icon><Delete /></el-icon>删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 分页 -->
        <div style="width:88%">
            <el-pagination v-model:current-page="resuleData.current" v-model:page-size="resuleData.size"
                :page-sizes="[5, 10, 15, 20]" layout="total, sizes, prev, pager, next, jumper" :total="resuleData.total"
                @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>
              </el-card>

        <!-- 新增修改对话框 -->
        <el-dialog v-model="dialogVisible" :title="isEdit ? '修改数据' : '新增数据'" width="600px" v-if="dialogVisible">
            <el-form ref="dialogForm" :model="itemData" :rules="rules">
                <el-form-item label="用户名" label-width="100" prop="username">
                    <el-input v-model="itemData.username" autocomplete="off" style="width: 200px;" />
                </el-form-item>
                <el-form-item label="密码" label-width="100" prop="password" v-if="!isEdit">
                    <el-input type="password" v-model="itemData.password" autocomplete="off" style="width: 200px;" />
                </el-form-item>
                <el-form-item label="昵称" label-width="100" prop="nickname">
                    <el-input v-model="itemData.nickname" autocomplete="off" style="width: 200px;" />
                </el-form-item>
                <el-form-item label="手机号" label-width="100" prop="phone">
                    <el-input v-model="itemData.phone" autocomplete="off" style="width: 200px;" />
                </el-form-item>
                <el-form-item label="性别" label-width="100" prop="gender">
                    <el-select v-model="itemData.gender" class="m-2" placeholder="请选择性别" size="large" style="width: 200px;">
                        <el-option v-for="item in sexOptions" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                    <!-- <el-input v-model="itemData.gender" autocomplete="off" style="width: 200px;" /> -->
                </el-form-item>
                 <el-form-item label="出生日期" label-width="100" prop="city">
                   <el-date-picker
        v-model="itemData.birthday"
        type="date"
        placeholder="Pick a day"
        :size="size"
      />
                </el-form-item>
                <el-form-item label="城市" label-width="100" prop="city">
                     <el-cascader v-model="value" :options="options" @change="handleChange" :show-all-levels="false"/>
                </el-form-item>
                <el-form-item label="个性签名" label-width="100" prop="personalizedSignature">
                    <el-input v-model="itemData.personalizedSignature" autocomplete="off" style="width: 200px;" />
                </el-form-item>
                <el-form-item label="状态" label-width="100" prop="status">
                    <span style="margin-right: 10px;">禁用</span>
                    <el-switch v-model="userStatus" @change="changStatus" />
                    <span style="margin-left: 10px;">启用</span>
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
</div>
</template>
<script>
import { defineComponent } from "vue"
import { getList, getOne, save, edit, del } from '../../http/umsMember'


export default defineComponent({
    data() {
        return {
            value:[],
             options:[
            
  {
    value: '福建省',
    label: '福建省',
    children: [
      {
        value: '泉州市',
        label: '泉州市',
        children: [
          {
            value: '丰泽区',
            label: '丰泽区',
          },
          {
            value: '南安市',
            label: '南安市',
          },
          {
            value: '晋江市',
            label: '晋江市',
          },
          
        ],
      },
       {
        value: '厦门市',
        label: '厦门市',
        children: [
          {
            value: '集美区',
            label: '集美区',
          },
          {
            value: '思明区',
            label: '思明区',
          },
          {
            value: '同安县',
            label: '同安县',
          },
          
        ],
      },
    
    ],
  },
  {
    value: '江西省',
    label: '江西省',
    children: [
      {
        value: '吉安市',
        label: '吉安市',
        children: [
          {
            value: '遂川县',
            label: '遂川县',
          },
          {
            value: '万安县',
            label: '万安县',
          },
        ],
      },
      {
        value: '九江市',
        label: '九江市',
        children: [
          {
            value: '瑞昌市',
            label: '瑞昌市',
          },
        ],
      }, 
    ],
  },
  {
    value: '湖南省',
    label: '湖南省',
    children: [
      {
        value: '长沙市',
        label: '长沙市',
        children: [
          {
           value: '长沙市',
        label: '长沙市',}
        ]
      },
     
    ],
  },
          ],
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

                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ]
            },
            sexOptions: [
                {
                    value: 0,
                    label: '未知',
                }, {
                    value: 1,
                    label: '男',
                }, {
                    value: 2,
                    label: '女',
                }
            ],
            userStatus: false
        }
    },
    methods: {
         form_create(cloumn,row,cellValue){
            const dateObj=new Date(cellValue)
            const year = dateObj.getFullYear()
            const month = dateObj.getMonth() + 1 // 注意，月份从0开始
            const day = dateObj.getDate()
            const hours = dateObj.getHours()
           const minutes = dateObj.getMinutes()
            const time=`${year}-${month}-${day}  ${hours}:${minutes}`
            return time
        },
        form_birthday(cloumn,row,cellValue){
            const dateObj=new Date(cellValue)
            const year = dateObj.getFullYear()
            const month = dateObj.getMonth() + 1 // 注意，月份从0开始
            const day = dateObj.getDate()
            const time=`${year}年${month}月${day}日`
            return time
        },
          handleChange (){
        this.itemData.city=this.value[2]
        console.log(this.itemData)
         console.log(this.itemData.city)
         console.log(this.value[2])
},

        //修改用户状态
        changStatus(val) {
            this.userStatus = val
            this.itemData.status = (this.userStatus ? 1 : 0)
        },
        findPage() {
            getList(this.requestData).then(res => {
                console.log(res)
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
            this.value=[]
            this.dialogVisible = true
        },
        //确认按钮
        confirm() {
            this.itemData.birthday=this.birthday
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
            this.userStatus = (val.status == 0 ? false : true)
            this.itemData = {
                id: val.id,
                username: val.username,
                nickname: val.nickname,
                phone: val.phone,
                gender: val.gender,
                city: val.city,
                job: val.job,
                personalizedSignature: val.personalizedSignature,
                sourceType: val.sourceType,
                status: val.status,
                birthday:val.birthday
            }
            this.value[2]=val.city
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
</style>