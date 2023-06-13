<template>

   <el-card>
      
                
          
               <div class="rig">
             <div class="title">用户等级管理</div>

  <el-input
      v-model="input"
      class="w-50 m-2"
      style="width:200px; margin-bottom:10px"
      placeholder="请输入id"
      :suffix-icon="Search"
    /><el-button :icon="Search" circle style="margin-bottom:10px;margin-left:5px" @click="search">
    <el-icon><Search /></el-icon>
    </el-button>
    <el-button type="primary" style="margin-left:50px;margin-bottom:10px" @click="showDialog()"><el-icon><Plus /></el-icon>添加信息</el-button>
    <el-button type="success" style="margin-left:40px;margin-bottom:10px" @click="update()"><el-icon><Refresh /></el-icon></el-button>
      </div>
    <el-table :data="resultData.records" style="width: 100%;height:590px" border>
      <el-table-column fixed prop="id" label="序号" width="50">
         <template #default="scope">
                        {{ (resultData.current - 1) * resultData.size + scope.$index + 1 }}
                    </template>
      </el-table-column>
      <el-table-column prop="name" label="会员等级名称" />
      <el-table-column prop="growthPoint" label="成长值" />
      <el-table-column prop="defaultStatus" label="默认等级" />
      <el-table-column prop="freeFreightPoint" label="免运费标准" />
      <el-table-column prop="commentGrowthPoint" label="每次评价获取的成长值" />
      <el-table-column prop="priviledgeFreeFreight" label="是否有免邮特权" />
      <el-table-column prop="priviledgeSignIn" label="是否有签到特权" />
      <el-table-column prop="priviledgeComment" label="是否有评论获奖励特权" />
      <el-table-column prop="priviledgePromotion" label="是否有专享活动特权" />
      <el-table-column prop="priviledgeMemberPrice" label="是否有会员价特权" />
      <el-table-column prop="priviledgeBirthday" label="是否有生日特权" />
      <el-table-column prop="note" label="备注" />
      <el-table-column fixed="right" label="操作" width="180">
        <template #default="scope">
           <el-button size="small" @click="showEdit(scope.row)"><el-icon><EditPen /></el-icon>编辑</el-button>
                        <el-button size="small" type="danger" @click="del(scope.row)"><el-icon><Delete /></el-icon>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
            <el-pagination v-model:current-page="resultData.current" v-model:page-size="resultData.size"
                :page-sizes="[10, 20, 30, 40]" layout="total, prev, pager, next, jumper, sizes" :total="resultData.total"
                @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>
   </el-card>

  <el-dialog v-model="dialogFormVisible" title="会员等级编辑">
    <el-form :model="umsMemberlevel">
      <el-form-item label="id" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.id" autocomplete="off" />
      </el-form-item>
      <el-form-item label="会员等级名称" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="成长值" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.growthPoint" autocomplete="off" />
      </el-form-item>
      <el-form-item label="默认等级" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.defaultStatus" autocomplete="off" />
      </el-form-item>
      <el-form-item label="免运费标准" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.freeFreightPoint" autocomplete="off" />
      </el-form-item>
      <el-form-item label="每次评价获取的成长值" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.commentGrowthPoint" autocomplete="off" />
      </el-form-item>
      <el-form-item label="是否有免邮特权" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.priviledgeFreeFreight" autocomplete="off" />
      </el-form-item>
      <el-form-item label="是否有签到特权" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.priviledgeSignIn" autocomplete="off" />
      </el-form-item>
      <el-form-item label="是否有评论获奖励特权" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.priviledgeComment" autocomplete="off" />
      </el-form-item>
      <el-form-item label="是否有专享活动特权" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.priviledgePromotion" autocomplete="off" />
      </el-form-item>
      <el-form-item label="是否有会员价特权" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.priviledgeMemberPrice" autocomplete="off" />
      </el-form-item>
      <el-form-item label="是否有生日特权" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.priviledgeBirthday" autocomplete="off" />
      </el-form-item>
      <el-form-item label="备注" :label-width="formLabelWidth">
        <el-input v-model="umsMemberlevel.note" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="save"> 保存 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
import { defineComponent } from "vue";
import { cloneDeep } from "lodash-es";
import { getumsMemberlevelsPage, umsMemberlevelDelId, umsMemberlevelAdd,getOne, umsMemberlevelEdit } from "../../http/umsmemberlevel";
export default defineComponent({
  props: ["id"],
  data() {
    return {
      resultData:{},
      dialogFormVisible: false,
      "code": 0,
      "data": {},
      "msg": "",
      "success": true,
      page: {
        total: 0,
        current: 0,
        size: 0
            },
            resData:{
              current:1,
              size:10
            },
      umsMemberlevel: {
        "commentGrowthPoint": 0,
        "defaultStatus": 0,
        "freeFreightPoint": 0,
        "growthPoint": 0,
        "id": 0,
        "name": "",
        "note": "",
        "priviledgeBirthday": 0,
        "priviledgeComment": 0,
        "priviledgeFreeFreight": 0,
        "priviledgeMemberPrice": 0,
        "priviledgePromotion": 0,
        "priviledgeSignIn": 0
        },
        formLabelWidth: 160,
      umsMemberlevels: [],
    };
  },
  mounted() {
    this.getPage();
  },
  methods: {
    toEdit(umsMemberlevel) {
      console.log(umsMemberlevel);
      this.dialogFormVisible = true;
      this.umsMemberlevel = cloneDeep(umsMemberlevel);
    },
    getPage(){
      getumsMemberlevelsPage(this.resData).then((res) => {
          console.log(res);
          this.resultData=res.data.page;
       })
         .catch((err) => {
           console.log(err);
         });
    },
     handleSizeChange(val) {
            this.resData.size = val
            this.getPage()
        },
        //改变页码
        handleCurrentChange(val) {
            this.resData.current = val
            this.getPage()
        },
    del(id) {
      //删除数据
      //模拟删除，服务器进行处理
      //要别人反悔机会
      // 如果只有一条数据，删除数据之后如何处理？
      //人机交互
      console.log(id);
      const params = {
        id: id,
      };
      umsMemberlevelDelId(params)
        .then((res) => {
          if (res.success) {
            this.getumsMemberlevelsPage(this.page.current);
          } else {
            console.log(res.msg);
            return false;
          }
        })
        .catch((err) => {});
    },
    toAdd() {
            //到添加的页面
            this.dialogFormVisible = true;
        },
    save() {
      const umsMemberlevel = this.umsMemberlevel;
      if (umsMemberlevel.id == 0) {
        umsMemberlevelAdd(umsMemberlevel)
          .then((res) => {
            if (res.success) {
              //刷新页面
              this.dialogFormVisible = false;
              this.getumsMemberlevelsPage(this.page.current);
              ElMessage(res.msg);
            } else {
              ElMessage(res.msg);
              return false;
            }
          })
          .catch((err) => {
            ElMessage("网络错误联系管理员");
          });
      } else {
        umsMemberlevelEdit(umsMemberlevel)
          .then((res) => {
            if (res.success) {
              //刷新页面
              this.dialogFormVisible = false;
              this.getumsMemberlevelsPage(this.page.current);
              ElMessage(res.msg);
            } else {
              ElMessage(res.msg);
              return false;
            }
          })
          .catch((err) => {
            ElMessage("网络错误联系管理员");
          });
      }
    },
  },
});
</script>
<style>
.rig{
  flex-direction: row;
}
.title{
  float: right;
  margin-right: 20px;
  font-size: 25px;
  font-weight: bold;
}
</style>