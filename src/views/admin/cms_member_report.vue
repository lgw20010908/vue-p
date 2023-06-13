<template>
    <div class="salesclerks">
        <div class="tools">
            <el-button icon="Plus" @click="toAdd" />
            <el-form :inline="true" :model="salesclerk">
                <el-form-item>
                    <el-input placeholder="请输入名称" v-model="username"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onsubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table :data="salesclerks" style="width: 100%" >
            <el-table-column prop="id" label="编号" :key="salesclerk.id" />
            <el-table-column prop="report_type" label="举报类型">
                <span>{{ report_type === 3 ? '用户评论'  : (report_type === 0 ?'商品评价' : '话题内容') }}</span>
            </el-table-column>
            <el-table-column prop="report_member_name" label="举报人">
            </el-table-column>
            <el-table-column prop="create_time" label="时间">
            </el-table-column>
            <el-table-column prop="report_object" label="report_object">
            </el-table-column>
            <el-table-column prop="report_status" label="举报状态">
                    <span>{{ report_status === 0 ? '未处理' : '已处理' }}</span>
            </el-table-column>
            <el-table-column prop="handle_status" label="处理结果">
                <span>{{ handle_status === 3 ? '恶意'  : (handle_status === 0 ?'无效' : '有效') }}</span>
            </el-table-column>
            <el-table-column prop="note" label="note">
            </el-table-column>
            <el-table-column label="功能管理">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog v-model="dialogSalesclerksFormVisible" title="编辑">
            <el-form :model="salesclerk">
                <el-form-item label="举报类型" v-model="salesclerk.report_type">
                    <el-select v-model="salesclerk.report_type" placeholder="请选择">
                        <el-option label="商品评价" :value="0"></el-option>
                        <el-option label="话题内容" :value="1"></el-option>
                        <el-option label="用户评价" :value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="举报人" v-model="salesclerk.report_member_name">
                    <el-input placeholder="请输入举报人姓名" v-model="salesclerk.report_member_name"></el-input>
                </el-form-item>
                <el-form-item label="时间">
                    <el-date-picker v-model="salesclerk.create_time" type="date" placeholder="Pick a day"
                        :size="LatheBufferGeometry">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="report_object">
                    <el-input placeholder="请输入" v-model="salesclerk.report_object"></el-input>
                </el-form-item>
                <el-form-item label="举报状态" v-model="salesclerk.report_status">
                    <el-select v-model="salesclerk.report_status" placeholder="请选择">
                        <el-option label="未处理" :value="0"></el-option>
                        <el-option label="已处理" :value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="处理结果" v-model="salesclerk.handle_status">
                    <el-select v-model="salesclerk.handle_status" placeholder="请选择">
                        <el-option label="无效" :value="0"></el-option>
                        <el-option label="有效" :value="1"></el-option>
                        <el-option label="恶意" :value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Note">
                    <el-input placeholder="请输入" v-model="salesclerk.note"></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogSalesclerksFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="save">
                        保存
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
  
<script>

import { LatheBufferGeometry } from "three";
import { defineComponent } from "vue"
export default defineComponent({

    data() {
        return {
            username: [],
            salesclerks: [],

            dialogSalesclerksFormVisible: false,
            salesclerk: {
                id: '0',
                report_type: '',
                report_member_name: '',
                create_time: '',
                report_object: '',
                report_status: '',
                handle_status: '',
                note: '',

            },
            formLabelWidth: '80px',
            flag: true,//true 添加，false更新
        }

    },
    methods: {
        toAdd() {
            this.salesclerk = {
                id: '0',
                report_type: '',
                report_member_name: '',
                create_time: '',
                report_object: '',
                report_status: '',
                handle_status: '',
                note: '',
            },
                this.dialogSalesclerksFormVisible = true,
                this.flag = true;
            console.log(this.dialogSalesclerksFormVisible)


        },
        save() {
            console.log(this.salesclerk);
            // 如何判断功能是添加还是更新，标志？flag
            //1 .添加
            if (this.flag) {
                this.salesclerks.push(this.salesclerk)
            }
            else {
                //2 更新 优化

            }
            this.dialogSalesclerksFormVisible = false;

        },
        handleEdit(index, row) {
            this.flag = false;
            console.log(index, row)
            this.salesclerk = row;
            this.dialogSalesclerksFormVisible = true;
        },
        handleDelete(index, row) {
            console.log(index, row)
            // index 删除的位置 删除多少个
            this.salesclerks.splice(index, 1)
        },
        onsubmit() {
            this.salesclerk=this.get(this.salesclerk[report_member_name = this.username])
            this.username = []
        }

    }

})
</script>
<style lang="less" scoped>
.tools {
    display: flex;
    justify-content: space-between;
}
</style>
  