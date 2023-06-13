<template>
    <div class="">
        <h2>公司订单</h2>
        <!-- 搜索重置框 -->
        <div>

            <el-form :inline="true" :model="ruleForm" ref="ruleForm" v-show="show" class="demo-form-inline">
                <el-form-item label="公司名称" prop="name">
                    <el-input v-model="ruleForm.name" placeholder="公司名称" />
                </el-form-item>
                <el-form-item><el-button type="primary" @click="submitForm('ruleForm')">搜索
                    </el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>

            <!-- 新增按钮 -->

            <div class="tools">
                <el-button icon="Plus" @click="showDialog" />
            </div>

        </div>


        <el-table :data="companys" border:true style="width: 100%">
            <el-table-column prop="id" label="编号" width="100" />
            <el-table-column prop="addressName" label="地址名称" width="150" />
            <el-table-column prop="sendStatus" label="默认发货地址" width="100" />
            <el-table-column prop="receiveStatus" label="默认收获地址" width="100" />
            <el-table-column prop="name" label="收获人姓名" width="80" />
            <el-table-column prop="phone" label="电话" width="102" />
            <el-table-column prop="province" label="省" width="100" />
            <el-table-column prop="city" label="市" width="100" />
            <el-table-column prop="region" label="区" width="100" />
            <el-table-column prop="detailAddress" label="详细地址" width="150" />
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button size="small" @click="showEdit(scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页功能 -->
        <!-- <div>
        <el-pagination
      :page-sizes="[5, 10, 20]"
      :current-page="currentPage"
      :page-size="pageSize"
      :disabled="disabled"
      layout="total,sizes, prev, pager, next,jump"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
       </div>     -->
       <el-dialog v-model="dialogVisible" :title="isEdit ? '修改数据' : '新增数据'" width="400px" v-if="dialogVisible">
            <el-form ref="dialogForm" :model="itemData" :rules="rules">
                <el-form-item label="编号" label-width="100" prop="id">
                    <el-input v-model="itemData.id" autocomplete="off" style="width: 200px;" />
                </el-form-item>
                <el-form-item label="地址名称" label-width="100" prop="addressName">
                    <el-input v-model="itemData.addressName" autocomplete="off" style="width: 200px;" />
                </el-form-item>
                <el-form-item label="默认发货地址" label-width="100" prop="sendStatus">
                    <el-input v-model="itemData.sendStatus" autocomplete="off" style="width: 200px;" />
                </el-form-item>
                <el-form-item label="默认收货地址" label-width="100" prop="receiveStatus">
                    <el-input v-model="itemData.receiveStatus" autocomplete="off" style="width: 200px;" />
                </el-form-item>
                <el-form-item label="收货人姓名" label-width="100" prop="name">
                    <el-input v-model="itemData.name" autocomplete="off" style="width: 200px;" />
                </el-form-item>
                <el-form-item label="电话" label-width="100" prop="phone">
                    <el-input v-model="itemData.phone" autocomplete="off" style="width: 200px;" />
                </el-form-item>
                <el-form-item label="省" label-width="100" prop="province">
                    <el-input v-model="itemData.province" autocomplete="off" style="width: 200px;" />
                </el-form-item>
                <el-form-item label="市" label-width="100" prop="city">
                    <el-input v-model="itemData.city" autocomplete="off" style="width: 200px;" />
                </el-form-item>
                <el-form-item label="区" label-width="100" prop="region">
                    <el-input v-model="itemData.region" autocomplete="off" style="width: 200px;" />
                </el-form-item>
                <el-form-item label="详细地址" label-width="100" prop="detailAddress">
                    <el-input v-model="itemData.detailAddress" autocomplete="off" style="width: 200px;" />
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
import { getCompanyPage,getOne,del,save,edit } from "../../http/omscompany";
export default defineComponent({
    props: ['id'],
    data() {
        return {
            companys:[],
            resuleData: {},
            requestData: {
                current: 1,
                size: 10
            },
            resuleData: {},
            dialogVisible: false,//对话框显示，默认为不显示
            itemData: {}, //单条数据内容
            isEdit: false, //false时为新增，true时为修改
            
            // companys: [
            //     { id: 1, address_name: '青拓集团有限公司', send_status: '0', receive_status: '1', name: '胡先生', phone: '132***4561', provicnce: '福建省', city: '宁德市', rejion: '福安市', detail_address: '福建省宁德市福安市' },
            //     { id: 2, address_name: '象屿集团', send_status: '0', receive_status: '1', name: '李先生', phone: '139***4655', provicnce: '福建省', city: '厦门市', rejion: '湖里区', detail_address: '福建省厦门市湖里区' },
            //     { id: 3, address_name: '融侨集团', send_status: '1', receive_status: '1', name: '张先生', phone: '139***7887', provicnce: '福建省', city: '福州市', rejion: '鼓楼区', detail_address: '福建省福州市鼓楼区' },
            //     { id: 4, address_name: '巨岸集团', send_status: '0', receive_status: '0', name: '王先生', phone: '173***8787', provicnce: '福建省', city: '厦门市', rejion: '湖里区', detail_address: '福建省厦门市湖里区' },
            //     { id: 5, address_name: '泉州石化公司', send_status: '0', receive_status: '1', name: '王先生', phone: '177***8787', provicnce: '福建省', city: '泉州市', rejion: '惠安县', detail_address: '福建省泉州市惠安县' },

            // ],
            ruleForm: {
                name: '',
            },
            
            show: true,
        
            dialogVisible: false,//对话框显示，默认为不显示
            itemData: {}, //单条数据内容
            isEdit: false, //false时为新增，true时为修改

        };

    },

    methods: {

        handleEdit(){
            this.flag=true;
            
        },
         //修改
         showEdit(val) {
            this.isEdit = true
            this.itemData = {
                id: val.id,
                addressName:val.addressName,
                receiveStatus:val.receiveStatus,
                name:val.name,
                phone:val.phone,
                province:val.province,
                city:val.city,
                region:val.region,
                detailAddress:val.detailAddress
                
            }
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
                            this.getList();
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
        //改变数据量
        handleSizeChange(val) {
            this.requestData.size = val
            this.findPage()
        },
        //取消按钮
        confire() {
            this.dialogVisible = false
            this.itemData = {}
        },

        
        getList() {
            getCompanyPage(this.requestData).then(res => {
                this.resuleData = res.data.page;
                this.companys = this.resuleData.records;
                console.log(this.resuleData);
            })
        },
        //打开弹窗
        showDialog() {
            this.isEdit = false
            this.itemData = {}
            this.dialogVisible = true
        },
        handleDelete(val) {
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
                        this.getList();
                        
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
        this.getList()
    }
})


</script>
<style lang='css' scoped>
.tool {
    display: flex;
    justify-content: space-between;
}
</style>