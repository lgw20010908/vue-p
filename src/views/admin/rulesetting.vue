<template>
    <div>
        <h2>会员规则设置页面表</h2>
        <el-table :data="rules" border:true style="width: 100%">
            <el-table-column prop="id" label="编号" width="100" />
            <el-table-column prop="continueSignDay" label="连续签到天数" width="120" />
            <el-table-column prop="continueSignPoint" label="连续签到赠送数量" width="150" />
            <el-table-column prop="consumePerPoint" label="消费获取的点数" width="150" />
            <el-table-column prop="lowOrderAmount" label="最低获取点数的订单金额" width="180" />
            <el-table-column prop="maxPointPerOrder" label="每笔订单最高获取点数" width="170" />
            <el-table-column prop="type" label="类型" />
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button size="small">编辑</el-button>
                    <el-button size="small" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    props: ['id'],
    data() {
        return {
            rules: [
                { id: 1, continueSignDay: '10天', continueSignPoint: '10积分', consumePerPoint: '5积分',lowOrderAmount:'150￥',maxPointPerOrder:'2',type:'0' },
                { id: 2, continueSignDay: '20天', continueSignPoint: '20积分', consumePerPoint: '5积分',lowOrderAmount:'150￥',maxPointPerOrder:'2',type:'1' },
                { id: 3, continueSignDay: '30天', continueSignPoint: '30积分', consumePerPoint: '5积分',lowOrderAmount:'150￥',maxPointPerOrder:'2',type:'0' },
                { id: 4, continueSignDay: '40天', continueSignPoint: '40积分', consumePerPoint: '5积分',lowOrderAmount:'150￥',maxPointPerOrder:'2',type:'1' },
                { id: 5, continueSignDay: '50天', continueSignPoint: '50积分', consumePerPoint: '5积分',lowOrderAmount:'150￥',maxPointPerOrder:'2',type:'1' },
                { id: 6, continueSignDay: '60天', continueSignPoint: '60积分', consumePerPoint: '5积分',lowOrderAmount:'150￥',maxPointPerOrder:'2',type:'0' },
            ],
        }
    },
   mounted() {

    } ,
    methods: {
        
    }
    
});

</script>
<style lang='css' scoped></style>