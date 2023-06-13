<template>
    <div class="home-adv">
        <el-row style="margin-bottom: 10px">
            <el-input style="width: 150px; margin-right: 10px" v-model="query" autocomplete="off" />
            <el-button type="primary" @click="search">查询</el-button>
        </el-row>
        <el-row style="margin-bottom: 5px">
            <el-button type="primary" @click="add">新增广告</el-button>
        </el-row>
        <el-table border :data="list" style="width: 100%">
            <el-table-column align="center" prop="id" label="编号" width="80" />
            <el-table-column align="center" prop="name" label="广告名称" />
            <el-table-column align="center" label="封面图">
                <template #default="scope">
                    <el-image :src="scope.row.pic"/>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="startTime" label="开始时间" />
            <el-table-column align="center" prop="endTime" label="结束时间" />
            <el-table-column align="center" prop="clickCount" label="点击数" />
            <el-table-column align="center" prop="orderCount" label="下单数" />
            <el-table-column align="center" prop="note" label="备注" />
            <el-table-column align="center" prop="sort" label="排序" />
            <el-table-column align="center" prop="url" label="链接地址" />
            <el-table-column align="center" label="状态">
                <template #default="scope">
                    <el-tag>{{ scope.row.status == 1 ? "已上线" : '已下线' }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="type" label="轮播位置">
                <template #default="scope">
                    {{ scope.row.type == 1 ? "首页轮播" : 'app轮播' }}
                </template>
            </el-table-column>
            <el-table-column align="center" label="操作">
                <template #default="scope">
                    <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination style="margin-top: 10px" v-model:current-page="current" v-model:page-size="pageSize"
                :page-sizes="[10, 20, 50, 100]" small="small" background layout="total, sizes, prev, pager, next, jumper"
                :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>
        <el-dialog v-model="dialogSalesclerksFormVisible" :title="addOrEdit == 0 ? '编辑' : '新增'" @closed="handleClosed">
            <el-form label-width="180px" :model="advFrom">
                <el-form-item label="广告名称">
                    <el-input v-model="advFrom.name" autocomplete="off" />
                </el-form-item>
                <el-form-item label="封面图地址">
                    <el-input v-model="advFrom.pic" type="file" autocomplete="off" />
                </el-form-item>
                <el-form-item label="备注">
                    <el-input v-model="advFrom.note" autocomplete="off" />
                </el-form-item>
                <el-form-item label="排序">
                    <el-input v-model="advFrom.sort" autocomplete="off" />
                </el-form-item>
                <el-form-item label="链接地址">
                    <el-input v-model="advFrom.url" autocomplete="off" />
                </el-form-item>
                <el-form-item label="开始日期">
                    <el-date-picker v-model="advFrom.startTime" type="date" value-format="YYYY-MM-DD" placeholder="请选择日期" />
                </el-form-item>
                <el-form-item label="结束日期">
                    <el-date-picker v-model="advFrom.endTime" type="date" value-format="YYYY-MM-DD" placeholder="请选择日期" />
                </el-form-item>
                <el-form-item label="上下线状态">
                    <el-switch v-model="advFrom.status" class="ml-2" style="
                              --el-switch-on-color: #13ce66;
                              --el-switch-off-color: #ff4949;
                            " />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogSalesclerksFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="save"> 保存 </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import api from "../../http/adv";
const addOrEdit = ref(1); // 判断弹窗是新增还是编辑 1 新增 0 编辑；
const dialogSalesclerksFormVisible = ref(false)
const query = ref(""); // 查询参数
const list = ref([]); // 表格数据
const total = ref(0); // 表格数据总条数
const current = ref(1);// 分页
const pageSize = ref(10); // 分页大小
// 表单数据
const advFrom = ref({

});
//获取数据
const getData = async () => {
    let { data } = await api.getData({
        current: current.value,
        size: pageSize.value,
    });
    list.value = data.page.records;
    total.value = data.page.total;
};
getData();
// 查询
const search = () => {
    list.value = list.value.filter((item) => item.name.includes(query.value));
};
// 新增
const add = () => {
    dialogSalesclerksFormVisible.value = true;
    addOrEdit.value = 1;
};
// 删除
const handleDelete = async (index, row) => {
    await api.delAdv({ id: row.id });
    getData();
};
// 编辑
const handleEdit = (index, row) => {
    dialogSalesclerksFormVisible.value = true;
    addOrEdit.value = 0;
    row.status = row.status == 1 ? true : false;
    advFrom.value = { ...row };
}
// 编辑保存
const save = async () => {
    let bool = addOrEdit.value;
    if (!bool) {
        advFrom.value.status = advFrom.value.status ? 1 : 0;
        await api.editAdv(advFrom.value);
        getData();
        dialogSalesclerksFormVisible.value = false;
        return;
    }
    advFrom.value.status = advFrom.value.status ? 1 : 0;
    await api.addAdv(advFrom.value);
    getData();
    dialogSalesclerksFormVisible.value = false;
}
const handleClosed = () => {
    advFrom.value = {
    };
};
const handleSizeChange = (val) => {
    getData();
};
const handleCurrentChange = (val) => {
    getData();
};
</script>
  
<style lang="scss" scoped>
.home-adv {
    padding: 20px;
}

.pagination {
    display: flex;
    align-content: center;
    justify-content: flex-end;
}
</style>
  