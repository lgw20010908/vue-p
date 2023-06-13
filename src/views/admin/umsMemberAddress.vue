<template>
    <div>
     
        <!-- 表格视图 -->
        <el-card>
           <div class="rig">
             <div class="title">用户收货地址管理</div>

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
            <el-table :data="showData" stripe style="width:100%;height:590px" :row-style="{ height: '60px' }" border>
                <el-table-column prop="id" label="编号" align="center">
                    <template #default="scope">
                        {{ (resuleData.current - 1) * resuleData.size + scope.$index + 1 }}
                    </template>
                </el-table-column>
                 <el-table-column prop="name" label="收货人名称" align="center" />
                <el-table-column prop="id" label="id" align="center" />
                 <el-table-column prop="memberId" label="memberid" align="center" />
                   <el-table-column prop="phoneNumber" label="手机号"  width=200 align="center" />
                    <el-table-column prop="defaultStatus" label="是否为默认" :formatter="form_defaut" align="center" />
                    <el-table-column prop="province" label="省份" align="center" />
                    <el-table-column prop="region" label="市级" align="center" />
                     <el-table-column prop="city" label="城市"  align="center" />
                     <el-table-column prop="detailAddress" label="详细地址（街道）" width="250" align="center" />
                   <el-table-column label="功能管理" fixed="right" width="180" align="center"  >
                    <template #default="scope">
                        <el-button size="small" @click="showEdit(scope.row)"><el-icon><EditPen /></el-icon>编辑</el-button>
                        <el-button size="small" type="danger" @click="del(scope.row)"><el-icon><Delete /></el-icon>删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 分页 -->
        <div>
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
                <el-form-item :label-width="100" label="城市">
                    <div class="m-4">
               <el-cascader v-model="value" :options="options" @change="handleChange" clearable/>
                 </div>
                </el-form-item>
                <el-form-item label="详细地址" :label-width="100" prop="detailAddress">
                    <el-input v-model.number="itemData.detailAddress" autocomplete="off" type="text" />
                </el-form-item>
                <el-form-item label="收货人" :label-width="100" prop="name">
                    <el-input v-model.number="itemData.name" autocomplete="off" type="text" />
                </el-form-item>
                <el-form-item label="手机号" :label-width="100" prop="type">
                    <el-input v-model.number="itemData.phoneNumber" autocomplete="off" type="text" />
                </el-form-item>
                <el-form-item label="memberId" :label-width="100" prop="type">
                    <el-input v-model.number="itemData.memberId" autocomplete="off" type="text" />
                </el-form-item>
                <el-form-item label="是否默认" :label-width="100" prop="type">
                    <el-switch v-model="value1" />
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
import { getMemberAddress, getOne, save, edit, del } from '../../http/umsMemberAddress'


export default defineComponent({
    data() {
        return {
          value1:false,
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
            input:'',
            requestData: {
                current: 1,
                size: 10
            },
            showData:[],
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
      form_defaut(colum,row,cellValue){
        return cellValue ===0?"否":"是"

      },
      update(){
        this.findPage()
      },

      search(){
        getOne({id:this.input}).then(res=>{
           console.log(res)
           this.showData=[]
           this.showData[0]=res.data.help
           this.input=''

        })
      },
      handleChange (){
        this.itemData.city=this.value[2]
        this.itemData.province=this.value[0]
        this.itemData.region=this.value[1]
         console.log(this.value[0])
},
        //修改用户状态
        changStatus(val) {
            this.userStatus = val
            this.itemData.status = (this.userStatus ? 1 : 0)
        },
        findPage() {
             getMemberAddress(this.requestData).then(res => {
              console.log(res)
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
            this.value=[]
            this.value1=false
            this.dialogVisible = true
        },
        //确认按钮
        confirm() {
            if(this.value1){
              this.itemData.defaultStatus=1
            }
            else{
              this.itemData.defaultStatus=0
            }
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
                            console.log(this.itemData)
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
            this.value=[]
        },
        //修改
        showEdit(val) {
            this.isEdit = true
            this.itemData = {
              id:val.id,
               name:val.name,
               detailAddress:val.detailAddress,
               phoneNumber:val.phoneNumber,
               memberId:val.memberId
            }
            if(val.defaultStatus==0){
              this.value1=false;
            }
            else if(val.defaultStatus==1){
              this.value1=true;
            }
            this.value[0]=val.city
            this.value[1]=val.region
            this.value[2]=val.province
            console.log(val)
            console.log(this.value,val.defautStatus,this.value1)
            console.log(this.itemData)
            this.dialogVisible = true
        },
        //修改确认按钮
        editConfirm() {
           if(this.value1){
              this.itemData.defaultStatus=1
            }
            else{
              this.itemData.defaultStatus=0
            }
            this.$refs['dialogForm'].validate((valid) => {
                if (valid) {
                    edit(this.itemData).then(res => {
                      console.log(res)
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
.el-pagination {
    justify-content: center;
}
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