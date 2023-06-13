<!-- <template>
  <RouterView></RouterView> 
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
   

});
</script>

<style lang="scss" scoped></style>
 -->
<template>
  <div>
    <div>
      productAttributeCategoryId: <input type="number" v-model="newOne.productAttributeCategoryId"> &nbsp;
      name: <input type="text" v-model="newOne.name"> &nbsp;
      inputList: <input type="text" v-model="newOne.inputList"> &nbsp;
      <br>
      selectType:
      <select v-model="newOne.selectType">
        <option value="0">唯一</option>
        <option value="1">单选</option>
        <option value="2">多选</option>
      </select> &nbsp;
      inputType:
      <select v-model="newOne.inputType">
        <option value="0">手工录入</option>
        <option value="1">从列表中获取</option>
      </select> &nbsp;
      filterType:
      <select v-model="newOne.filterType">
        <option value="0">普通</option>
        <option value="1">颜色</option>
      </select> &nbsp;
      searchType:
      <select v-model="newOne.searchType">
        <option value="0">不需要进行检索</option>
        <option value="1">关键字检索</option>
        <option value="2">范围检索</option>
      </select> &nbsp;
      <br>
      relatedStatus:
      <input type="radio" value="0" v-model="newOne.relatedStatus">不关联 &nbsp;
      <input type="radio" value="1" v-model="newOne.relatedStatus">关联 &nbsp;
      handAddStatus:
      <input type="radio" value="0" v-model="newOne.handAddStatus">不支持 &nbsp;
      <input type="radio" value="1" v-model="newOne.handAddStatus">支持 &nbsp;
      type:
      <select v-model="newOne.type">
        <option value="0">规格</option>
        <option value="1">参数</option>
      </select> &nbsp;
      <button type="button" @click="add()">添加</button>
    </div>
    <br>
    <div>
      <div>
        <table border="1">
          <tr>
            <th>id</th>
            <th>filterType</th>
            <th>handAddStatus</th>
            <th>inputList</th>
            <th>inputType</th>
            <th>name</th>
            <th>productAttributeCategoryId</th>
            <th>relatedStatus</th>
            <th>searchType</th>
            <th>selectType</th>
            <th>readCount</th>
            <th>sort</th>
            <th>type</th>
            <th>操作</th>
          </tr>
          <tr v-for="item in tableData" :key="item.id">
            <th>{{ item.id }}</th>
            <th>{{ item.filterType }}</th>
            <th>{{ item.handAddStatus }}</th>
            <th>{{ item.inputList }}</th>
            <th>{{ item.inputType }}</th>
            <th>{{ item.name }}</th>
            <th>{{ item.productAttributeCategoryId }}</th>
            <th>{{ item.relatedStatus }}</th>
            <th>{{ item.productAttribute }}</th>
            <th>{{ item.searchType }}</th>
            <th>{{ item.selectType }}</th>
            <th>{{ item.sort }}</th>
            <th>{{ item.type }}</th>
            <td>
              <button @click="show(item.id)">更新</button>
              <button @click="del(item.id)">删除</button>
            </td>
          </tr>
        </table>
      </div>
      <br>
      <div>
        <button type="button" @click="firstPage()">首页</button> &nbsp;
        <button type="button" @click="prePage()">上一页</button> &nbsp;
        {{ currPage }} / {{ totalPage }} &nbsp;
        <button type="button" @click="nextPage()">下一页</button> &nbsp;
        <button type="button" @click="finalPage()">尾页</button>
      </div>
    </div>
    <br>
    <div>
      <table>
        <tr>
          <td>id:</td>
          <td><input type="text" v-model="editOne.id" readonly></td>
        </tr>
        <tr>
          <td>filterType:</td>
          <td>
            <select v-model="editOne.filterType">
              <option value="0">普通</option>
              <option value="1">颜色</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>handAddStatus:</td>
          <td>
            <input type="radio" value="0" v-model="editOne.handAddStatus">不支持 &nbsp;
            <input type="radio" value="1" v-model="editOne.handAddStatus">支持 &nbsp;
          </td>
        </tr>
        <tr>
          <td>inputList:</td>
          <td><input type="text" v-model="editOne.inputList"></td>
        </tr>
        <tr>
          <td>inputType:</td>
          <td>
            <select v-model="editOne.inputType">
              <option value="0">手工录入</option>
              <option value="1">从列表中获取</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>name:</td>
          <td><input type="text" v-model="editOne.name"></td>
        </tr>
        <tr>
          <td>productAttributeCategoryId:</td>
          <td><input type="number" v-model="editOne.productAttributeCategoryId"></td>
        </tr>
        <tr>
          <td>relatedStatus:</td>
          <td>
            <input type="radio" value="0" v-model="editOne.relatedStatus">不关联 &nbsp;
            <input type="radio" value="1" v-model="editOne.relatedStatus">关联 &nbsp;
          </td>
        </tr>
        <tr>
          <td>searchType:</td>
          <td>
            <select v-model="editOne.searchType">
              <option value="0">不需要进行检索</option>
              <option value="1">关键字检索</option>
              <option value="2">范围检索</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>selectType:</td>
          <td>
            <select v-model="editOne.selectType">
              <option value="0">唯一</option>
              <option value="1">单选</option>
              <option value="2">多选</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>type:</td>
          <td>
            <select v-model="editOne.type">
              <option value="0">规格</option>
              <option value="1">参数</option>
            </select>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <button type="button" @click="update()">更新</button>
            <button type="button" @click="toEmpty()">清空</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getList, getOne, addOne, delOne, updateOne } from '@/http/pms-product-attribute';

const tableData = ref([]);
const totalPage = ref(0);
const currPage = ref(1);
const current = ref(1);
const size = ref(5);
const newOne = ref({
  filterType: '',
  handAddStatus: '',
  id: 0,
  inputList: "",
  inputType: '',
  name: "",
  productAttributeCategoryId: '',
  relatedStatus: '',
  searchType: '',
  selectType: '',
  sort: '',
  type: ''
});
const editOne = ref({});

loadData();

const del = (id) => {
  if (confirm("是否要删除该评论？")) {
    delOne(id).then(resp => {
      if (resp.code == 1) {
        alert('成功删除商品！');
        loadData();
      }
    });
  }
}

const add = () => {
  let data = {
    filterType: parseInt(newOne.value.filterType),
    handAddStatus: parseInt(newOne.value.handAddStatus),
    id: 0,
    inputList: newOne.value.inputList,
    inputType: parseInt(newOne.value.inputType),
    name: newOne.value.name,
    productAttributeCategoryId: parseInt(newOne.value.productAttributeCategoryId),
    relatedStatus: parseInt(newOne.value.relatedStatus),
    searchType: parseInt(newOne.value.searchType),
    selectType: parseInt(newOne.value.selectType),
    sort: 0,
    type: parseInt(newOne.value.type)
  };
  addOne(data).then(resp => {
    if (resp.code == 1) {
      alert('添加商品成功！');
      loadData();
    }
  });
}

const show = (id) => {
  getOne(id).then(resp => {
    let one = resp.data.help;
    editOne.value = one;
  });
}

const update = () => {
  if (confirm("是否要进行更新？")) {
    if (editOne.value.id == '') {
      alert('请选择要操作的商品。');
    } else {
      let data = {
        filterType: parseInt(editOne.value.filterType),
        handAddStatus: parseInt(editOne.value.handAddStatus),
        id: editOne.value.id,
        inputList: editOne.value.inputList,
        inputType: parseInt(editOne.value.inputType),
        name: editOne.value.name,
        productAttributeCategoryId: parseInt(editOne.value.productAttributeCategoryId),
        relatedStatus: parseInt(editOne.value.relatedStatus),
        searchType: parseInt(editOne.value.searchType),
        selectType: parseInt(editOne.value.selectType),
        sort: 0,
        type: parseInt(editOne.value.type)
      };
      updateOne(data).then(resp => {
        if (resp.code == 1) {
          alert('更新成功。');
          toEmpty();
          loadData();
        }
      });
    }
  }

}

const toEmpty = () => {
  editOne.value = {
    filterType: '',
    handAddStatus: '',
    id: '',
    inputList: "",
    inputType: '',
    name: "",
    productAttributeCategoryId: '',
    relatedStatus: '',
    searchType: '',
    selectType: '',
    sort: '',
    type: ''
  }
}

const prePage = () => {
  if (currPage.value == 1) {
    alert("当前已经是首页了。");
  } else {
    currPage.value--;
    current.value--;
    loadData();
  }
}

const nextPage = () => {
  if (currPage.value == totalPage.value) {
    alert("当前已经是尾页了。");
  } else {
    currPage.value++;
    current.value++;
    loadData();
  }
}

const firstPage = () => {
  currPage.value = 1;
  current.value = 1;
  loadData();
}


const finalPage = () => {
  currPage.value = totalPage.value;
  current.value = totalPage.value;
  loadData();
}


function loadData() {
  let data = {
    current: current.value,
    size: size.value
  };
  getList(data).then(resp => {
    let total = resp.data.page.total;
    if (total == 0) {
      totalPage.value = 1;
    } else {
      if (total % size.value == 0) {
        totalPage.value = parseInt(total / size.value);
      } else {
        totalPage.value = parseInt(total / size.value + 1);
      }
    }
    tableData.value = resp.data.page.records;
    console.log(tableData.value);
  });
}


</script>

<style></style>
