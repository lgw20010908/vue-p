<template>
  <div class="goodslist">
    <el-row style="margin-bottom: 10px">
      <el-input
        style="width: 150px; margin-right: 10px"
        v-model="query"
        autocomplete="off"
      />
      <el-button type="primary" @click="search">查询</el-button>
    </el-row>
    <el-row style="margin-bottom: 5px">
      <el-button type="primary" @click="add">新增商品</el-button>
    </el-row>
    <el-table border :data="list" style="width: 100%">
      <el-table-column align="center" prop="id" label="编号" width="80" />
      <el-table-column
        align="center"
        prop="title"
        label="秒杀时间段名称"
        width="180"
      />
      <el-table-column
        align="center"
        prop="startDate"
        label="开始日期"
        width="180"
      />
      <el-table-column align="center" prop="endDate" label="结束日期" />
      <el-table-column align="center" label="上下线状态">
        <template #default="scope">
          <el-tag>{{ scope.row.status ? "已上线" : "已下线" }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="createTime" label="创建时间" />
      <el-table-column align="center" label="操作">
        <template #default="scope">
          <el-button
            type="primary"
            size="small"
            @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        style="margin-top: 10px"
        v-model:current-page="current"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 50, 100]"
        small="small"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-dialog
      v-model="dialogSalesclerksFormVisible"
      :title="addOrEdit == 0 ? '编辑' : '新增'"
      @closed="handleClosed"
    >
      <el-form label-width="180px" :model="goodsFrom">
        <el-form-item label="秒杀时间段名称">
          <el-input v-model="goodsFrom.title" autocomplete="off" />
        </el-form-item>
        <el-form-item label="开始日期">
          <el-date-picker
            v-model="goodsFrom.startDate"
            type="date"
            value-format="YYYY-MM-DD"
            placeholder="请选择日期"
          />
        </el-form-item>
        <el-form-item label="结束日期">
          <el-date-picker
            v-model="goodsFrom.endDate"
            type="date"
            value-format="YYYY-MM-DD"
            placeholder="请选择日期"
          />
        </el-form-item>
        <el-form-item label="上下线状态">
          <el-switch
            v-model="goodsFrom.status"
            class="ml-2"
            style="
              --el-switch-on-color: #13ce66;
              --el-switch-off-color: #ff4949;
            "
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogSalesclerksFormVisible = false"
            >取消</el-button
          >
          <el-button type="primary" @click="save"> 保存 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const dialogSalesclerksFormVisible = ref(false);
const addOrEdit = ref(1); // 判断弹窗是新增还是编辑 1 新增 0 编辑；
const total = ref(0);
const current = ref(1);
const pageSize = ref(10);
const query = ref(""); // 查询参数
const list = ref();
const getData = async () => {
  let { data } = await api.getList({
    current: current.value,
    size: pageSize.value,
  });
  list.value = data.page.records;
  total.value = data.page.total;
};
getData();
const goodsFrom = ref({
  title: "",
  startDate: "",
  endDate: "",
  status: true, //上下线状态
});
// 保存
const save = async () => {
  let bool = addOrEdit.value;
  if (!bool) {
    goodsFrom.value.status = goodsFrom.value.status ? 1 : 0;
    await api.editGoods(goodsFrom.value);
    getData();
    dialogSalesclerksFormVisible.value = false;
    return;
  }
  goodsFrom.value.status = goodsFrom.value.status ? 1 : 0;
  await api.addGoods(goodsFrom.value);
  getData();
  dialogSalesclerksFormVisible.value = false;
};
// 编辑
const handleEdit = (index, row) => {
  dialogSalesclerksFormVisible.value = true;
  addOrEdit.value = 0;
  row.status = row.status == 1 ? true : false;
  goodsFrom.value = { ...row };
};
// 新增
const add = () => {
  dialogSalesclerksFormVisible.value = true;
  addOrEdit.value = 1;
};
// 删除
const handleDelete = async (index, row) => {
  await api.delGoods({ id: row.id });
  getData();
};
// 关闭弹窗的事件
const handleClosed = () => {
  goodsFrom.value = {
    id: "",
    title: "",
    start_date: "",
    end_date: "",
    status: true, //上下线状态
    create_time: "",
  };
};
const search = () => {
  list.value = list.value.filter((item) => item.title.includes(query.value));
};
const handleSizeChange = (val) => {
  getData();
};
const handleCurrentChange = (val) => {
  getData();
};
</script>

<style lang="scss" scoped>
.goodslist {
  padding: 20px;
}
.pagination {
  display: flex;
  align-content: center;
  justify-content: flex-end;
}
</style>
