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
      product_id:
      <select v-model="newOne.productId">
        <option value="0">请选择</option>
        <option value="1">product1</option>
        <option value="2">product2</option>
        <option value="3">product3</option>
        <option value="4">product4</option>
        <option value="5">product5</option>
      </select> &nbsp;
      menber_nick_name: <input type="text" v-model="newOne.memberNickName"> &nbsp;
      product_name: <input type="text" v-model="newOne.productName"> &nbsp;
      <br>
      show_status:
      <input type="radio" value="1" v-model="newOne.showStatus">是
      <input type="radio" value="0" v-model="newOne.showStatus">否 &nbsp;
      product_attribute: <input type="text" v-model="newOne.productAttribute"> &nbsp;
      collect_couont: <input type="text" v-model="newOne.collectCouont"> &nbsp;
      <br>
      star:
      <select v-model="newOne.star">
        <option value="0">0星</option>
        <option value="1">1星</option>
        <option value="2">2星</option>
        <option value="3">3星</option>
        <option value="4">4星</option>
        <option value="5">5星</option>
      </select> &nbsp;
      read_count: <input type="text" v-model="newOne.readCount"> &nbsp;
      replay_count: <input type="text" v-model="newOne.replayCount"> &nbsp;
      <br>
      content: <input type="text" v-model="newOne.content"> &nbsp;
      <button type="button" @click="add()">添加</button>
    </div>
    <br>
    <div>
      <div>
        <table border="1">
          <tr>
            <th>id</th>
            <th>productId</th>
            <th>memberNickName</th>
            <th>productName</th>
            <th>star</th>
            <th>memberIp</th>
            <th>createTime</th>
            <th>showStatus</th>
            <th>productAttribute</th>
            <th>collectCouont</th>
            <th>readCount</th>
            <th>content</th>
            <!-- <th>pics</th>
                  <th>memberIcon</th> -->
            <th>replayCount</th>
            <th>操作</th>
          </tr>
          <tr v-for="item in tableData" :key="item.id">
            <th>{{ item.id }}</th>
            <th>{{ item.productId }}</th>
            <th>{{ item.memberNickName }}</th>
            <th>{{ item.productName }}</th>
            <th>{{ item.star }}</th>
            <th>{{ item.memberIp }}</th>
            <th>{{ item.createTime }}</th>
            <th>{{ item.showStatus }}</th>
            <th>{{ item.productAttribute }}</th>
            <th>{{ item.collectCouont }}</th>
            <th>{{ item.readCount }}</th>
            <th>{{ item.content }}</th>
            <!-- <th>{{ item.pics }}</th>
                  <th>{{ item.memberIcon }}</th> -->
            <th>{{ item.replayCount }}</th>
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
          <td>productId:</td>
          <td><input type="text" v-model="editOne.productId" readonly></td>
        </tr>
        <tr>
          <td>memberNickName:</td>
          <td><input type="text" v-model="editOne.memberNickName"></td>
        </tr>
        <tr>
          <td>productName:</td>
          <td><input type="text" v-model="editOne.productName"></td>
        </tr>
        <tr>
          <td>star:</td>
          <td>
            <select v-model="editOne.star">
              <option value="0">0星</option>
              <option value="1">1星</option>
              <option value="2">2星</option>
              <option value="3">3星</option>
              <option value="4">4星</option>
              <option value="5">5星</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>productAttribute:</td>
          <td><input type="text" v-model="editOne.productAttribute"></td>
        </tr>
        <tr>
          <td>collectCouont:</td>
          <td><input type="number" v-model="editOne.collectCouont"></td>
        </tr>
        <tr>
          <td>showStatus</td>
          <td>
            <input type="radio" name="show_status：" value="1" v-model="editOne.showStatus">是
            <input type="radio" name="show_status：" value="0" v-model="editOne.showStatus">否
          </td>
        </tr>
        <tr>
          <td>readCount:</td>
          <td><input type="number" v-model="editOne.readCount"></td>
        </tr>
        <tr>
          <td>replayCount:</td>
          <td><input type="text" v-model="editOne.replayCount"></td>
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
import { getList, getOne, addOne, delOne, updateOne } from '@/http/pms-comment';

const tableData = ref([]);
const totalPage = ref(0);
const currPage = ref(1);
const current = ref(1);
const size = ref(5);
const newOne = ref({
  id: 0,
  productId: '',
  memberNickName: "",
  productName: "",
  star: '',
  memberIp: "127.0.0.1",
  createTime: null,
  showStatus: '',
  productAttribute: "",
  collectCouont: '',
  readCount: '',
  content: "",
  pics: "",
  memberIcon: "",
  replayCount: ''
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
    id: 0,
    productId: parseInt(newOne.value.productId),
    memberNickName: newOne.value.memberNickName,
    productName: newOne.value.productName,
    star: parseInt(newOne.value.star),
    memberIp: "127.0.0.1",
    createTime: new Date(),
    showStatus: parseInt(newOne.value.showStatus),
    productAttribute: newOne.value.productAttribute,
    collectCouont: parseInt(newOne.value.collectCouont),
    readCount: parseInt(newOne.value.readCount),
    content: newOne.value.content,
    pics: "",
    memberIcon: "",
    replayCount: parseInt(newOne.value.replayCount)
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
    console.log(one);
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
        productId: editOne.value.productId,
        memberNickName: editOne.value.memberNickName,
        productName: editOne.value.productName,
        star: editOne.value.star,
        memberIp: "127.0.0.1",
        createTime: editOne.value.createTime,
        showStatus: editOne.value.showStatus,
        productAttribute: editOne.value.productAttribute,
        collectCouont: editOne.value.collectCouont,
        readCount: editOne.value.readCount,
        content: editOne.value.content,
        pics: editOne.value.pics,
        memberIcon: editOne.value.memberIcon,
        replayCount: editOne.value.replayCount
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
    productId: '',
    memberNickName: "",
    productName: "",
    star: '',
    memberIp: "127.0.0.1",
    createTime: null,
    showStatus: '',
    productAttribute: "",
    collectCouont: '',
    readCount: '',
    content: "",
    pics: "",
    memberIcon: "",
    replayCount: ''
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
