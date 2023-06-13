<template>
    <div>
        <h2>优惠券列表</h2>
    <el-input v-model="searchText" placeholder="请输入搜索关键字" clearable  @clear="clearSearch" @keyup.enter="performSearch" style="margin-bottom: 30px"></el-input>
        <div>
            <el-button type="primary" @click="showDialog()">+</el-button>
        </div>
        <!-- 表格视图 -->
        <div>
            <el-table :data="resuleData.records" style="width: 100%">              
                <el-table-column prop="id" label="编号"  />
                <el-table-column  width="100rpx" prop="type" label="优惠券类型"  />
                <el-table-column  width="100rpx" prop="name" label="优惠券名称"  />
                <el-table-column  width="100rpx" prop="platform" label="适用平台" />
                <el-table-column  width="100rpx" prop="count" label="数量" />
                <el-table-column  width="100rpx" prop="amount" label="金额" />
                <el-table-column  width="100rpx" prop="per_limit" label="每人限领张数" />
                <el-table-column  width="100rpx" prop="min_point" label="使用门槛" />
                <el-table-column  width="100rpx" prop="start_time " label="开始日期" />
                <el-table-column  width="100rpx" prop="end_time" label="结束日期" />
                <el-table-column  width="100rpx" prop="use_type" label="使用类型" />
                <el-table-column  width="100rpx" prop="note" label="备注" />
                <el-table-column  width="100rpx" prop="publish_count" label="发行数量" />
                <el-table-column  width="100rpx" prop="use_count " label="已使用数量" />
                <el-table-column  width="100rpx" prop="receive_count" label="领取数量" />
                <el-table-column  width="100rpx" prop="enable_time" label="可以领取的日期" />
                <el-table-column  width="100rpx" prop="code" label="优惠码" />
                <el-table-column  width="100rpx" prop="member_level" label="可领取的会员类型" />
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
          <el-form-item label="编号" label-width="100"><el-input v-model="itemData.id"></el-input></el-form-item>
          <el-form-item label="优惠券类型" label-width="100"><el-radio-group v-model="itemData.type">
          <el-radio-button :label="0">全场赠券</el-radio-button>
          <el-radio-button :label="1">会员赠券</el-radio-button>
          <el-radio-button :label="2">购物赠券</el-radio-button>
          <el-radio-button :label="3">注册赠券</el-radio-button>
        </el-radio-group></el-form-item>
          <el-form-item label="优惠券名称" label-width="100"> <el-input v-model="itemData.name"></el-input></el-form-item>
          <el-form-item label="适用平台" label-width="100"><el-radio-group v-model="itemData.platform">
          <el-radio-button :label="0">全部</el-radio-button>
          <el-radio-button :label="1">移动</el-radio-button>
          <el-radio-button :label="2">PC端</el-radio-button>
        </el-radio-group></el-form-item> 
          <el-form-item label="数量" label-width="100"><el-input-number v-model="itemData.count" ></el-input-number></el-form-item>
          <el-form-item label="金额" label-width="100"><el-input v-model="itemData.amount" ></el-input></el-form-item>
          <el-form-item label="每人限领张数" label-width="100"><el-input-number v-model="itemData.per_limit" ></el-input-number></el-form-item>
          <el-form-item label="使用门槛" label-width="100"> <el-input v-model="itemData.min_point" ></el-input> </el-form-item>
          <el-form-item label="开始日期" label-width="100"> <el-input v-model="itemData.start_time" ></el-input></el-form-item>
          <el-form-item label="结束日期" label-width="100"> <el-input v-model="itemData.end_time" ></el-input></el-form-item>
          <el-form-item label="使用类型" label-width="100"> <el-input v-model="itemData.use_type"  ></el-input></el-form-item>
          <el-form-item label="备注" label-width="100"> <el-input v-model="itemData.node" ></el-input></el-form-item>
          <el-form-item label="发行数量" label-width="100"><el-input-number v-model="itemData.publish_count" ></el-input-number></el-form-item>
          <el-form-item label="已使用数量" label-width="100"> <el-radio-group v-model="itemData.useType">
          <el-radio-button :label="0">全场通用</el-radio-button>
          <el-radio-button :label="1">指定分类</el-radio-button>
          <el-radio-button :label="2">指定商品</el-radio-button>
        </el-radio-group></el-form-item>
          <el-form-item label="领取数量" label-width="100"> <el-input-number v-model="itemData.receive_count"></el-input-number> </el-form-item>
          <el-form-item label="可以领取的日期" label-width="100"> <el-input v-model="itemData.enable_time"></el-input></el-form-item>
          <el-form-item label="优惠码" label-width="100"> <el-input v-model="itemData.code" ></el-input></el-form-item>
          <el-form-item label="可领取的会员类型" label-width="100"><el-input v-model="itemData.member_level"  ></el-input></el-form-item>
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
import { getList, getOne, save, edit, del } from '../../http/sms-coupon'


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
            searchText: "",
            
        }
    },
    resuleData () {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.filteredtableData.slice(startIndex, endIndex);
    },
    filteredtableData() {
      if (this.searchText) {
        return this.tableData.filter((item) => {
          return String(item.id).includes(String(this.searchText));
        });
      } else {
        return this.tableData;
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
                id:val.id, 
                type: val.type,
                name: val.name,  
                platform: val.platform,
                count: val.count,
                amount:val.amount,
                per_limit:val.per_limit,
                min_point: val.min_point,
                start_time:val.start_time,
                end_time: val.end_time,
                use_type: val.use_type,
                note: val.note,
                use_count: val.use_count,
                receive_count:val.receive_count,
                enable_time:val.enable_time,
                code:val.code,
                member_level: val.member_level,

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