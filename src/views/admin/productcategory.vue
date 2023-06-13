<template>
    <div>
      <div>
        parent_id：<input type="number" v-model="newOne.parentId"> &nbsp;
        name：<input type="text" v-model="newOne.name"> &nbsp;
        level：<input type="number" v-model="newOne.level"> &nbsp;
        <br>
        keywords：<input type="text" v-model="newOne.keywords"> &nbsp;
        description：<input type="text" v-model="newOne.description"> &nbsp;
        product_count：<input type="number" v-model="newOne.productCount"> &nbsp;
        <br>
        product_unit<input type="text" v-model="newOne.productUnit"> &nbsp;
        nav_status：
        <input type="radio" value="1" v-model="newOne.navStatus">是
        <input type="radio" value="0" v-model="newOne.navStatus">否
        &nbsp;
        show_status：
        <input type="radio" value="1" v-model="newOne.showStatus">是
        <input type="radio" value="0" v-model="newOne.showStatus">否
        &nbsp;
        sort：
        <input type="radio" value="1" v-model="newOne.sort">是
        <input type="radio" value="0" v-model="newOne.sort">否
        &nbsp;
        <button type="button" @click="add()">添加</button>
      </div>
      <br>
      <div>
        <div>
          <table border="1">
            <tr>
              <th>id</th>
              <th>parent_id</th>
              <th>name</th>
              <th>level</th>
              <th>product_count</th>
              <th>product_unit</th>
              <th>nav_status</th>
              <th>show_status</th>
              <th>sort</th>
              <th>icon</th>
              <th>keywords</th>
              <th>description</th>
              <th>操作</th>
            </tr>
            <tr v-for="item in tableData" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.parentId }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.level }}</td>
              <td>{{ item.productCount }}</td>
              <td>{{ item.productUnit }}</td>
              <td>{{ item.navStatus }}</td>
              <td>{{ item.showStatus }}</td>
              <td>{{ item.sort }}</td>
              <td>
                <img :src="item.icon" alt="暂无图片">
              </td>
              <td>{{ item.keywords }}</td>
              <td>{{ item.description }}</td>
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
            <td>parent_id:</td>
            <td><input type="text" v-model="editOne.parentId"></td>
          </tr>
          <tr>
            <td>name:</td>
            <td><input type="text" v-model="editOne.name"></td>
          </tr>
          <tr>
            <td>level:</td>
            <td><input type="text" v-model="editOne.level"></td>
          </tr>
          <tr>
            <td>product_count:</td>
            <td><input type="text" v-model="editOne.productCount"></td>
          </tr>
          <tr>
            <td>product_unit:</td>
            <td><input type="text" v-model="editOne.productUnit"></td>
          </tr>
          <tr>
            <td>nav_status:</td>
            <td>
              <input type="radio" name="nav_status" value="1" v-model="editOne.navStatus">是
              <input type="radio" name="nav_status" value="0" v-model="editOne.navStatus">否
            </td>
          </tr>
          <tr>
            <td>show_status</td>
            <td>
              <input type="radio" name="show_status：" value="1" v-model="editOne.showStatus">是
              <input type="radio" name="show_status：" value="0" v-model="editOne.showStatus">否
            </td>
          </tr>
          <tr>
            <td>sort:</td>
            <td>
              <input type="radio" name="sort" value="1" v-model="editOne.sort">是
              <input type="radio" name="sort" value="0" v-model="editOne.sort">否
            </td>
          </tr>
          <tr>
            <td>keywords:</td>
            <td><input type="text" v-model="editOne.keywords"></td>
          </tr>
          <tr>
            <td>description:</td>
            <td><input type="text" v-model="editOne.description"></td>
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
  import { getList, getOne, addOne, delOne, updateOne } from '@/http/productcategory';
  
  const tableData = ref([]);
  const totalPage = ref(0);
  const currPage = ref(1);
  const current = ref(1);
  const size = ref(5);
  const newOne = ref({
    id: 0,
    parentId: '',
    name: '',
    level: '',
    productCount: '',
    productUnit: '',
    navStatus: '',
    showStatus: '',
    sort: '',
    icon: '',
    keywords: '',
    description: '',
  });
  const editOne = ref({});
  
  loadData();
  
  const del = (id) => {
    if (confirm("是否要删除该商品？")) {
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
      id: 0,
      parentId: parseInt(newOne.value.parentId),
      name: newOne.value.name,
      level: parseInt(newOne.value.level),
      productCount: parseInt(newOne.value.productCount),
      productUnit: newOne.value.productUnit,
      navStatus: parseInt(newOne.value.navStatus),
      showStatus: parseInt(newOne.value.showStatus),
      sort: parseInt(newOne.value.sort),
      icon: '',
      keywords: newOne.value.keywords,
      description: newOne.value.description,
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
          id: editOne.value.id,
          parentId: parseInt(editOne.value.parentId),
          name: editOne.value.name,
          level: parseInt(editOne.value.level),
          productCount: parseInt(editOne.value.productCount),
          productUnit: editOne.value.productUnit,
          navStatus: parseInt(editOne.value.navStatus),
          showStatus: parseInt(editOne.value.showStatus),
          sort: parseInt(editOne.value.sort),
          icon: '',
          keywords: editOne.value.keywords,
          description: editOne.value.description,
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
      id: '',
      parent_id: '',
      name: '',
      level: '',
      productCount: '',
      productUnit: '',
      navStatus: '',
      showStatus: '',
      sort: '',
      icon: '',
      keywords: '',
      description: '',
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
      console.log(resp);
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