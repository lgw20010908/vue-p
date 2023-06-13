<template>
  <!-- el-table显示数据,分页 -->

  <div class="pms_albums">
      <div class="pms_album-tools">
          <el-button type="warning" @click="toAdd">添加</el-button>
          <el-button type="primary" @click="toFind">查询</el-button>
      </div>
      <el-table :data="pms_albums" style="width: 100%">
          <el-table-column fixed prop="id" width="150" />
          <el-table-column prop="name" label="商品名称" width="120" />
          <el-table-column prop="cover_pic" label="封面大图" width="120" />
          <el-table-column prop="pic_count" label="图片数量" width="120" />
          <el-table-column prop="sort" label="商品种类" width="120" />
          <el-table-column prop="description" label="商品描述" width="120" />
          <el-table-column fixed="right" label="功能管理" width="120">
              <template #default="scope">
                  <el-button link type="primary" size="small" @click="toEdit(scope.row)">更新</el-button>
                  <el-button link type="primary" size="small" @click="del(scope.row.id)">删除</el-button>
              </template>
          </el-table-column>
      </el-table>
      <el-pagination layout="prev, pager, next" :page-size="page.size" :total="page.total" @current-change="currentchange" />
  </div>
  <el-dialog v-model="dialogFormVisible" title="商品信息编辑">
      <el-form :model="pms_album">
          <el-form-item label="商品名称" :label-width="formLabelWidth">
              <el-input v-model="pms_album.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="coverPic" :label-width="formLabelWidth">
              <el-input v-model="pms_album.coverPic" autocomplete="off" />
          </el-form-item>
          <el-form-item label="picCount" :label-width="formLabelWidth">
              <el-input v-model="pms_album.picCount" autocomplete="off" />
          </el-form-item>
          <el-form-item label="sort" :label-width="formLabelWidth">
              <el-input v-model="pms_album.sort" autocomplete="off" />
          </el-form-item>
          <el-form-item label="description" :label-width="formLabelWidth">
              <el-input v-model="pms_album.description" autocomplete="off" />
          </el-form-item>
      </el-form>
      <template #footer>
          <span class="dialog-footer">
              <el-button @click="dialogFormVisible = false">Cancel</el-button>
              <el-button type="primary" @click="save">保存</el-button>
          </span>
      </template>
  </el-dialog>

  <el-dialog v-model="dialogFormVisibleById" title="查询">
  <el-form :model="pms_album">
    <el-form-item label="请输入商品id" :label-width="formLabelWidth">
      <el-input
        v-model="searchText"
        placeholder="请输入商品id"
        autocomplete="off"
      />
    </el-form-item>
  </el-form>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogFormVisible = false">Cancel</el-button>
      <el-button type="primary" @click="getpms_albumById(searchText)"
        >查询
      </el-button>
    </span>
  </template>
</el-dialog>
</template>

<script>
import { defineComponent } from 'vue';
import { pms_albumPage, pms_albumDelId, pms_albumAdd, pms_albumEdit,getonepms_album } from '../../http/pms_album';
import { cloneDeep } from 'lodash-es';
export default defineComponent({
  data() {
      return {
          pms_albums: [],
          Pms_album:[],
          searchText:'',
          page: {
              total: 0,
              current: 1,
              size: 10
          },
          dialogFormVisible: false,
          dialogFormVisibleById: false,
          pms_album: {
              "coverPic": "",
              "description": "",
              "id": 0,
              "name": "",
              "picCount": 0,
              "sort": 0
          },
          formLabelWidth: 80
      }
  },
  mounted() {
      this.getPms_albumsPage(1)
  },
  methods: {
      toEdit(pms_album) {
          console.log(pms_album)
          this.dialogFormVisible = true;
          this.pms_album = cloneDeep(pms_album);
      },
      getPms_albumsPage(current) {
          const data = {
              current: current,
              size: 2
          }

         pms_albumPage(data).then(res => {
              console.log(res);
              const page = res.data.page;
              this.pms_albums = page.records;
              this.page = page;
          }).catch(err => {
              console.log(err);
          })
      },
      currentchange(current) {
          // console.log(current);
          this.getPms_albumsPage(current);
          this.page.current = current;//数据更新到目前显示的页面
      },
      del(id) {
          if (confirm("是否删除") == true) {
              console.log(id);
              const params = {
                  id:id
              }
              pms_albumDelId(params).then(res => {
                  if (res.success) {
                      this.getPms_albumsPage(this.page.current)
                  } else {
                      console.log(res.msg);
                      return false
                  }
              }).catch(err => {

              })

          }
      },

      toAdd() {
          this.dialogFormVisible = true;
          this.pms_album = {
              "coverPic": "",
              "description": "",
              "id": 0,
              "name": "",
              "picCount": 0,
              "sort": 0
              
          }
      },
      toFind(){
         

      },
      toFind() {
    this.dialogFormVisibleById = true;
  },
  getpms_albumById(id) {
    console.log(id);
    this.Pms_album = [];
    const params = {
      id: id,
    };
  getonepms_album(params).then((res) => {
      this.dialogFormVisibleById = false;
      console.log(res);
      this.Pms_album.push(res.data.pms_album);
      const pms_albums = this.Pms_album;
      this.pms_albums = pms_albums;
    });
  },

      save() {
          const pms_album = this.pms_album
          if (pms_album.id == 0) {
              pms_albumAdd(pms_album).then(res => {
                  if (res.success) {
                      this.dialogFormVisible = false
                      this.getPms_albumsPage(this.page.current)
                      ElMessage(res.msg)
                  } else {
                      ElMessage(res.msg)
                      return false
                  }
              }).catch(err => {
                  ElMessage('未填写完整')
              })
          }
          else {
              pms_albumEdit(pms_album).then(res => {
                  if (res.success) {
                      this.dialogFormVisible = false
                      this.getPms_albumsPage(this.page.current)
                      ElMessage(res.msg)
                  } else {
                      ElMessage(res.msg)
                      return false
                  }

              }).catch(err => {
                  ElMessage('未填写完整')
              })
          }
      }
  }
});
</script>
<style lang = "scss" scoped></style>